# Portfolio de soutenance — Kristian Smaga

## Structure des fichiers
- `index.html` — structure de toutes les sections (Accueil, Profil, Projet, Compétences, Contact)
- `style.css` — design (couleurs, typographie, animations)
- `script.js` — interactions (scroll reveal, barre de progression, cartes 3D, modale, lightbox)
- `cases.js` — contenu texte des 4 études de cas (Concevoir / Vérifier / Maintenir / Intégrer), modifiable sans toucher au HTML
- `assets/` — à créer : vos photos, captures d'écran et le PDF du CV / manuel opérateur

## À personnaliser avant la soutenance

1. **Photo professionnelle** : remplacez le bloc `.portrait-placeholder` dans `index.html` par
   `<img src="assets/photo.jpg" alt="Kristian Smaga">` dans `.portrait-frame`.

2. **CV et documents PDF** : déposez vos fichiers dans `assets/` et vérifiez les chemins
   `assets/CV_Kristian_Smaga.pdf` et `assets/manuel-operateur-ihm.pdf` (dans `index.html` et `cases.js`).

3. **Galeries photo** : les cartes grisées avec icône sont des emplacements. Remplacez le contenu
   de chaque `.gallery-item` par `<img src="assets/....jpg" alt="...">` (le bouton et le système de
   lightbox fonctionnent déjà avec `data-caption`).

4. **Coordonnées** : mettez à jour l'email, le téléphone et le lien LinkedIn dans la section Contact
   de `index.html`.

5. **Textes des études de cas** : tout le contenu détaillé (contexte, missions, résultats...) est
   dans `cases.js`, un objet JavaScript facile à modifier sans casser la mise en page.

## Publier sur GitHub Pages
1. Créez un dépôt GitHub et poussez ces fichiers à la racine (ou dans `/docs`).
2. Dans les paramètres du dépôt → **Pages**, sélectionnez la branche et le dossier.
3. Le site sera disponible à `https://<votre-utilisateur>.github.io/<nom-du-depot>/`.

Aucune étape de build n'est nécessaire : HTML/CSS/JS pur, aucune dépendance externe hors polices Google Fonts.
