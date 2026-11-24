# Site VVSD

Site vitrine de l'association **VEHIVAVY VONONA SAHY DIASPORA (VVSD)**. HTML, CSS et JavaScript simples : aucune installation ni compilation. Pour le voir en local, ouvrez `index.html` dans un navigateur.

## Modifier le contenu

Chaque page correspond à un fichier `.html` : `index.html` (accueil), `projets.html` (actus, projets et dons), `membres.html`, `mentions-legales.html`. Modifiez le texte directement entre les balises.

Pour les rechercher-remplacer sur tout le site, utilisez « Rechercher et remplacer dans les fichiers » de votre éditeur (VS Code : `Ctrl+Maj+H`).

## Activer les dons HelloAsso

En attendant la page HelloAsso, tous les boutons « Faire un don » mènent à `don.html`, qui annonce que les dons en ligne arrivent bientôt. Le jour où la page HelloAsso existe :

1. Remplacez partout `href="don.html"` par `href="https://www.helloasso.com/associations/..." target="_blank" rel="noopener"` (l'adresse de votre page HelloAsso).
2. Supprimez le fichier `don.html`.

## Formulaire de contact

Le formulaire de `contact.html` passe par [Web3Forms](https://web3forms.com), qui transfère chaque message par e-mail à l'adresse de l'association. La clé Web3Forms se trouve dans le champ caché `access_key` de `contact.html`. Elle n'est pas secrète : elle peut rester visible dans le code du site.

Pour changer l'adresse qui reçoit les messages, ou régénérer la clé, passez par le tableau de bord de Web3Forms, puis remplacez la valeur de `access_key` si la clé change.

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
