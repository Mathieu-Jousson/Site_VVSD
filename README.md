# Site VVSD

Site vitrine de l'association **VEHIVAVY VONONA SAHY DIASPORA (VVSD)**. HTML, CSS et JavaScript simples : aucune installation ni compilation. Pour le voir en local, ouvrez `index.html` dans un navigateur.

## Modifier le contenu

Les textes à compléter sont entre crochets dans les fichiers `.html` : `[TEXTE À REMPLIR]`, `[NOM 1]`, `[RÔLE 1]`, `[TITRE DU PROJET 1]`, etc. Cherchez `[` dans chaque page pour tous les trouver.

Deux valeurs reviennent sur plusieurs pages. Remplacez-les partout en une fois, avec « Rechercher et remplacer dans les fichiers » de votre éditeur (VS Code : `Ctrl+Maj+H`) :

- `[URL HELLOASSO]` → l'adresse de votre page de don HelloAsso (par exemple `https://www.helloasso.com/associations/...`) ;
- `[CLÉ WEB3FORMS]` → votre clé Web3Forms (dans `contact.html`).

## Obtenir la clé Web3Forms

1. Allez sur [web3forms.com](https://web3forms.com).
2. Saisissez l'adresse e-mail qui recevra les messages du formulaire de contact.
3. La clé (« Access Key ») arrive par e-mail. Collez-la à la place de `[CLÉ WEB3FORMS]`.

Cette clé n'est pas secrète : elle peut rester visible dans le code du site.

## Ajouter les photos

1. Déposez vos images dans `assets/img/` (par exemple `assets/img/projet-1.jpg`).
2. Dans la page HTML, remplacez le bloc placeholder :

   ```html
   <div class="placeholder-img" role="img" aria-label="[DESCRIPTION PHOTO PROJET 1]">[PHOTO À AJOUTER]</div>
   ```

   par une image, avec une description dans `alt` :

   ```html
   <img src="assets/img/projet-1.jpg" alt="Description de la photo">
   ```

Gardez des chemins relatifs (`assets/img/...`, sans `/` au début) pour que le site fonctionne sur GitHub Pages.

## Changer les couleurs

Les couleurs sont définies au début de `css/style.css`, dans `:root` :

```css
--color-primary: #2f4f6f;
--color-secondary: #e8ecf0;
--color-bg: #ffffff;
--color-text: #1f2328;
```

Modifiez ces valeurs : tout le site suit.

## Publier avec GitHub Pages

1. Sur GitHub, dans le dépôt : **Settings → Pages**.
2. **Source** : *Deploy from a branch*.
3. **Branch** : `main`, dossier `/ (root)`, puis **Save**.

Après quelques minutes, le site est en ligne à l'adresse : https://mathieu-jousson.github.io/Site_VVSD/
