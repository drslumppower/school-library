# Bibliothèque scolaire

Site privé en français regroupant des cours, des fiches de révision et des quiz produits à partir de documents scolaires numérisés.

## Organisation

- `docs/` contient les pages Markdown publiées.
- `docs/physique-chimie/` contient les cours, fiches et quiz de physique-chimie.
- `mkdocs.yml` définit la navigation et l'interface française.
- Les PDF sources restent à la racine du dépôt et ne sont pas affichés sur le site.

## Lancer le site sous Windows

```powershell
python -m venv .venv
.\.venv\Scripts\python -m pip install -r requirements.txt
.\.venv\Scripts\python -m mkdocs serve
```

Ouvrir ensuite `http://127.0.0.1:8000` dans un navigateur.

## Construire le site

```powershell
.\.venv\Scripts\python -m mkdocs build --strict
```

Le site statique est produit dans le dossier `site/`.

## Publication privée

Le dépôt Git doit rester privé. Un dépôt privé ne rend toutefois pas automatiquement le site privé. Le dossier `site/` doit être publié derrière une authentification, par exemple avec Cloudflare Pages et Cloudflare Access, Azure Static Web Apps avec authentification, ou un serveur accessible uniquement par Tailscale.

## Ajouter un cours

1. Déposer le PDF source à la racine du dépôt.
2. Créer le cours, la fiche et le quiz dans le dossier de la matière.
3. Ajouter les trois pages à la section `nav` de `mkdocs.yml`.
4. Vérifier les informations extraites du scan.
5. Remplacer le statut `à vérifier` par `vérifié` après relecture.
6. Reconstruire et republier le site.