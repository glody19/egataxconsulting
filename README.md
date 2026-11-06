# Ega Tax Consulting — site web

Site vitrine de la fiduciaire **Ega Tax Consulting** (Excelsiorlaan 71, 1930 Zaventem).
100 % statique (HTML / CSS / JS natif), sans étape de build. Déployé sur Vercel à chaque push sur `main`.

## Deux propositions
| Page | Style |
|---|---|
| `/` | Page de choix entre les deux versions |
| `/version-a/` | **Classique** : titres à empattements (Cormorant Garamond), filets fins, esprit cabinet traditionnel |
| `/version-b/` | **Moderne épurée** : typographie Manrope, grandes photos, cartes arrondies |

Les deux versions partagent le même contenu, les photos (`assets/img/`), le script (`assets/common.js`) et `mentions-legales.html`.

## Une fois la version choisie
Déplacer `version-x/index.html` et `version-x/style.css` à la racine (à la place de la page de choix),
remplacer les chemins `../assets/` par `assets/` et `../mentions-legales.html` par `mentions-legales.html`, puis supprimer l'autre dossier.

## À compléter
- Photos : versions sous licence, sans filigrane « Unsplash+ » (mêmes noms de fichiers dans `assets/img/`)
- Forme juridique, numéros BCE, TVA et ITAA dans `mentions-legales.html`
- Formulaire : ouvre la messagerie (mailto). Pour un envoi direct, brancher Formspree ou équivalent.

## Aperçu local
```bash
python3 -m http.server 8000   # puis http://localhost:8000
```
