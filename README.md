# YoGui · Le carnet d’aventure

Guide français / anglais pour le monde Minecraft Java **26.3** de Yann et Guigui, seed **YoGui**.

**Site : https://ybelis.github.io/yogui-guide/** · **Dépôt : https://github.com/Ybelis/yogui-guide**

Le site propose une recherche bilingue qui ignore les accents, des filtres par type et par datapack, des favoris enregistrés dans le navigateur, des liens partageables vers chaque fiche et un affichage adapté au téléphone. Les recettes ont une grille de fabrication et les fiches relient objets, enchantements, créatures, structures et butin.

Le bouton soleil/lune permet de choisir un thème clair ou sombre, avec des couleurs distinctes par catégorie. Le choix est conservé dans le navigateur ; lors de la première visite, le site suit le thème du système. Le changement est également disponible dans les fiches. Les anciens articles « Guides pratiques » ont été retirés pour garder le catalogue centré sur le contenu des datapacks.

## Mettre le guide sur GitHub Pages

Le dépôt GitHub contient directement tous les fichiers du site et son workflow de publication dans `.github/`. Les modifications envoyées sur `main` publient automatiquement le guide. Les instructions ci-dessous servent à publier votre propre copie.

1. Extraire `yogui-guide.zip`. **Le contenu du ZIP va à la racine du dépôt** : `index.html`, `app.js`, `styles.css`, `themes.css`, `search-worker.js`, `assets/`, `data/`, `.nojekyll` et `.github/`. Ne pas ajouter un dossier intermédiaire `yogui-guide/` et ne pas envoyer le ZIP lui-même sur Pages.
2. Créer un dépôt GitHub, par exemple `yogui-guide`, et y envoyer ces fichiers sur la branche **main**. Il y a plusieurs milliers d’images : utiliser Git ou GitHub Desktop pour transférer le dossier complet. Vérifier que le dossier caché `.github/` est inclus.
3. Dans le dépôt, ouvrir **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Dans **Actions**, lancer **Publier le carnet YoGui → Run workflow** si le déploiement n’a pas démarré automatiquement. Une coche verte fournit l’adresse du site, normalement `https://VOTRE-PSEUDO.github.io/yogui-guide/`.

Le workflow est fourni. Aucun token personnel, compilation, domaine ou hébergement payant n’est nécessaire pour ce site. Les chemins sont relatifs : un dépôt portant un autre nom fonctionne aussi. Avec un dépôt privé, vérifier que l’offre GitHub permet GitHub Pages.

Autre possibilité : choisir **Deploy from a branch**, branche `main`, dossier **/(root)** dans Settings → Pages. Le fichier `.nojekyll` évite la transformation du catalogue par Jekyll. Dans ce cas, désactiver le workflow fourni pour ne garder qu’un seul mode de publication.

Documentation GitHub : [workflows Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [source de publication](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Consulter le guide localement

Ouvrir `index.html` par double-clic ne suffit pas : le navigateur doit charger les JSON et le moteur de recherche par HTTP. Dans le dossier extrait, avec Python installé :

```powershell
python -m http.server 8790 --bind 127.0.0.1
```

Puis ouvrir `http://127.0.0.1:8790/`. Arrêter avec `Ctrl+C`.

## Contenu et lecture des données

Le corpus vient des **versions exactes des packs du monde préparé le 8 novembre 2026**, avec les correctifs YoGui et Timber. `data/manifest.json` contient les versions, empreintes et totaux ; la page « À propos » explique le périmètre.

- Les noms d’origine restent visibles, y compris lorsqu’un objet n’a pas de traduction officielle. Les descriptions et l’interface existent en français et en anglais.
- Les objets portant des composants différents sont conservés comme variantes : plusieurs fiches peuvent donc partager le même nom.
- Les pièces de structures sont distinctes des lieux complets. Un modèle peut servir à plusieurs bâtiments, et tous les monstres ou coffres possibles ne sont pas garantis à chaque génération.
- Les références à des objets ou tables du jeu de base complètent les liens ; elles ne sont pas comptées comme du contenu ajouté.
- Les poids des tables de butin sont relatifs à leur tirage. Ils ne sont pas des probabilités globales de drop. Les conditions et tables imbriquées restent visibles.
- Le Dreaming Realm est documenté comme **désactivé** et masqué par défaut. Les rares définitions techniques sans rencontre prouvée restent accessibles par recherche.
- Les descriptions de comportements s’appuient sur les données et les notices disponibles. L’ensemble des constructions et combats n’a pas été testé en jeu. Une référence orpheline n’est pas remplacée par une supposition.
- Le catalogue est un **instantané** : il ne lit pas le serveur AMP en direct. Les 915 fichiers de recettes du correctif JEI sont eux aussi un export, sans synchronisation automatique. Si la sélection de packs change, il faut actualiser le catalogue et cet export.

Les images d’objets et les polices sont incluses. Les icônes et galeries officielles des packs restent chargées depuis leurs hébergeurs, lorsqu’ils sont accessibles.

## Crédits

Guide de fans non officiel, sans affiliation avec Mojang ou Microsoft. Minecraft et ses textures appartiennent à leurs ayants droit. Les datapacks et leurs visuels appartiennent à leurs auteurs ; leurs pages sont liées dans chaque fiche de pack. Leur présence dans ce guide ne modifie pas leurs licences. Le guide ne contient ni les archives des datapacks, ni le monde, ni les journaux ou les identifiants du serveur.

Manrope et Lora sont distribuées sous licence SIL Open Font License, fournie dans `assets/fonts/`. L’illustration de l’accueil est un SVG créé pour ce guide. Les têtes en SVG réutilisent les textures du jeu ou les profils d’objets fournis par les packs.

---

## English

**YoGui** is a French / English fan guide for Yann and Guigui’s Minecraft Java 26.3 world. It includes bilingual search, pack and category filters, local bookmarks, shareable entry links, crafting grids, enchantment descriptions, structures, creatures and loot. The interface works on desktop and mobile.

To publish it, extract the archive **into the repository root**, including `.github/`, and push to **main**. Select **Settings → Pages → Source → GitHub Actions**. Run the included **Publier le carnet YoGui** workflow if needed. The site works at a project URL such as `https://YOUR-NAME.github.io/yogui-guide/` without changing its paths.

For a local preview, run `python -m http.server 8790 --bind 127.0.0.1` inside the extracted folder and open `http://127.0.0.1:8790/`.

The catalogue documents the exact pack snapshot prepared on **November 8, 2026**, including world patches. It is not a live server connection. Item component variants and structure pieces are listed separately; base-game references are excluded from added-content totals. Loot weights are relative to a roll, not overall drop percentages. The Dreaming Realm is disabled in this world. Every possible structure and fight has not been play-tested. Original item names are retained where there is no official translation. Author credits and version details are available in each pack entry.
