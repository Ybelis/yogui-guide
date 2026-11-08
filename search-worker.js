let rows=[];
const normalize=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[_/.-]+/g,' ').replace(/\s+/g,' ').trim();
const priority={guide:1,pack:2,structure:3,dimension:4,item:5,enchantment:6,recipe:7,mob:8,biome:9,loot:10,advancement:11,module:12};
self.onmessage=event=>{
  const m=event.data;
  if(m.type==='init'){
    rows=m.entries.map((e,i)=>({i,id:e.id,kind:e.kind,pack:e.pack,status:e.status,reference:e.reference,technical:e.technical,title:normalize(e.title.fr+' '+e.title.en),q:normalize(e.q+' '+(e.tags||[]).join(' ')),fr:e.title.fr,en:e.title.en}));
    self.postMessage({type:'ready'});return;
  }
  if(m.type!=='search')return;
  const words=normalize(m.q).split(' ').filter(Boolean),saved=m.saved?new Set(m.saved):null;
  const found=[];
  for(const r of rows){
    if(m.kind!=='all'&&r.kind!==m.kind)continue;
    if(m.pack!=='all'&&r.pack!==m.pack)continue;
    if(!m.disabled&&r.status!=='active')continue;
    if(r.reference&&!words.length&&m.pack!=='minecraft'&&!saved)continue;
    if(r.technical&&!words.length&&!saved)continue;
    if(saved&&!saved.has(r.id))continue;
    let score=0,valid=true;
    for(const w of words){
      const p=r.title.indexOf(w);
      if(p>=0)score+=p===0?18:10;
      else if(r.id.toLowerCase().includes(w))score+=5;
      else if(r.q.includes(w))score+=2;
      else{valid=false;break;}
    }
    if(valid)found.push({r,score});
  }
  const collator=new Intl.Collator(m.locale,{numeric:true,sensitivity:'base'});
  found.sort((a,b)=>{
    if(m.sort==='pack'){const p=collator.compare(a.r.pack,b.r.pack);if(p)return p;}
    if(m.sort==='name')return collator.compare(a.r[m.locale],b.r[m.locale]);
    if(words.length&&b.score!==a.score)return b.score-a.score;
    if(m.kind==='all'&&!words.length&&priority[a.r.kind]!==priority[b.r.kind])return priority[a.r.kind]-priority[b.r.kind];
    return collator.compare(a.r[m.locale],b.r[m.locale]);
  });
  self.postMessage({type:'results',request:m.request,ids:found.map(x=>x.r.id),total:found.length});
};
