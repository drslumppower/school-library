# Bibliothèque scolaire

Site en français regroupant des cours, des fiches de révision et des quiz produits à partir de documents scolaires numérisés.

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

## Publication sur GitHub Pages

Le site est publié automatiquement à chaque push sur la branche `main` :

<https://drslumppower.github.io/school-library/>

Le workflow `.github/workflows/publier-site.yml` construit le site en mode strict avant de le déployer.

> **Attention :** le site GitHub Pages est public, même si le dépôt GitHub est privé. Ne jamais publier le nom complet de l'élève, son établissement, ses notes ou tout autre renseignement personnel.

## Ajouter un cours

1. Déposer le PDF source à la racine du dépôt.
2. Créer le cours, la fiche et le quiz dans le dossier de la matière.
3. Ajouter les trois pages à la section `nav` de `mkdocs.yml`.
4. Vérifier les informations extraites du scan.
5. Remplacer le statut `à vérifier` par `vérifié` après relecture.
6. Reconstruire et republier le site.