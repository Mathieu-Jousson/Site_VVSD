# Site VVSD

Site vitrine de l'association **VEHIVAVY VONONA SAHY DIASPORA (VVSD)**. HTML, CSS et JavaScript simples : aucune installation ni compilation. Pour le voir en local, ouvrez `index.html` dans un navigateur.

## Modifier le contenu

Chaque page correspond à un fichier `.html` : `index.html` (accueil), `projets.html` (actus, projets et dons), `membres.html`, `mentions-legales.html`. Modifiez le texte directement entre les balises.

Pour les rechercher-remplacer sur tout le site, utilisez « Rechercher et remplacer dans les fichiers » de votre éditeur (VS Code : `Ctrl+Maj+H`).

## Activer les dons HelloAsso

En attendant la page HelloAsso, tous les boutons « Faire un don » mènent à `don.html`, qui annonce que les dons en ligne arrivent bientôt. Le jour où la page HelloAsso existe :

1. Remplacez partout `href="don.html"` par `href="https://www.helloasso.com/associations/..." target="_blank" rel="noopener"` (l'adresse de votre page HelloAsso).
2. Supprimez le fichier `don.html`.

## Activer le formulaire de contact

Le formulaire est prêt dans `contact.html`, mais il lui manque la clé Web3Forms. En attendant, les liens « Contact » mènent à `contact-bientot.html`, qui donne l'adresse e-mail de l'association.

Pour obtenir la clé :

1. Allez sur [web3forms.com](https://web3forms.com).
2. Saisissez l'adresse e-mail qui recevra les messages du formulaire de contact.
3. La clé (« Access Key ») arrive par e-mail.

Cette clé n'est pas secrète : elle peut rester visible dans le code du site. Ensuite :

1. Dans `contact.html`, remplacez `[CLÉ WEB3FORMS]` par la clé.
2. Remplacez partout `contact-bientot.html` par `contact.html`.
3. Supprimez le fichier `contact-bientot.html`.
4. Envoyez-vous un message d'essai depuis le site pour vérifier qu'il arrive bien.

## Ajouter des photos

1. Réduisez la photo (environ 1000 pixels de large suffisent) et déposez-la dans `assets/img/` : `assets/img/membres/` pour l'équipe, `assets/img/actus/` pour les événements.
2. Dans la page HTML, ajoutez l'image avec une description dans `alt` :

   ```html
   <img src="assets/img/actus/ma-photo.jpg" alt="Description de la photo">
   ```

Gardez des chemins relatifs (`assets/img/...`, sans `/` au début) pour que le site fonctionne sur GitHub Pages. Ne publiez une photo qu'avec l'accord des personnes qu'on y reconnaît.

## Changer les couleurs

Les couleurs sont définies au début de `css/style.css`, dans `:root` :

```css
--color-primary: #007a3d;
--color-secondary: #faf5ec;
--color-accent: #c8102e;
--color-ochre: #d9a441;
```

Modifiez ces valeurs : tout le site suit.

## Publier avec GitHub Pages

1. Sur GitHub, dans le dépôt : **Settings → Pages**.
2. **Source** : *Deploy from a branch*.
3. **Branch** : `main`, dossier `/ (root)`, puis **Save**.

Après quelques minutes, le site est en ligne à l'adresse : https://mathieu-jousson.github.io/Site_VVSD/
