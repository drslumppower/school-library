---
titre: Repérage dans l'espace et constructions géométriques
matiere: Mathématiques
niveau: Quatrième
type: cours
chapitre: Géométrie dans l'espace
source: geo-1.heic, geo-1-2.heic, geo-2.heic et geo-2-1.heic
date_import: 2026-09-20
statut: à vérifier
mots_cles:
  - repérage dans l'espace
  - coordonnées
  - perspective
  - vues d'un solide
  - volume
  - construction de triangles
---

# Repérage dans l'espace et constructions géométriques

## Objectifs

À la fin de ce chapitre, il faut savoir :

- repérer un cube ou un point dans l'espace avec trois coordonnées ;
- lire une représentation en perspective ;
- reconnaître les vues de face, de côté et de dessus d'un solide ;
- calculer le volume d'un assemblage de cubes ;
- construire un triangle à partir de longueurs ou d'angles ;
- reconnaître la nature d'un triangle grâce au codage.

## 1. Se repérer dans l'espace

Dans un plan, deux coordonnées suffisent. Dans l'espace, il en faut **trois** :

$$
(x\,;y\,;z)
$$

Elles indiquent une position selon trois directions :

- $x$ : déplacement horizontal ;
- $y$ : profondeur ;
- $z$ : hauteur.

L'ordre des coordonnées est essentiel. Les positions $(3\,;2\,;4)$ et $(2\,;3\,;4)$ sont différentes.

### Méthode sur un assemblage de cubes

1. Repérer l'origine et le sens de chaque axe.
2. Lire la première coordonnée sur l'axe $x$.
3. Lire la profondeur sur l'axe $y$.
4. Lire l'étage sur l'axe $z$.
5. Vérifier que les coordonnées sont écrites dans l'ordre annoncé.

!!! example "Lecture"
    Le cube $(3\,;2\,;4)$ se trouve à la troisième position selon $x$, à la deuxième selon $y$ et au quatrième étage.

## 2. Perspective et vues d'un solide

Une **perspective** donne une impression de volume sur une feuille plane. Elle permet de voir plusieurs faces du solide, mais certaines parties peuvent être cachées.

Une **vue** est une projection du solide observé depuis une direction précise :

- la **vue de face** montre largeur et hauteur ;
- la **vue de côté** montre profondeur et hauteur ;
- la **vue de dessus** montre largeur et profondeur.

| Vue | Ce que l'on oublie |
|---|---|
| face | la profondeur |
| côté | la largeur |
| dessus | la hauteur |

## 3. Passer d'un solide à ses vues

Pour dessiner une vue :

1. se placer mentalement dans la direction indiquée ;
2. repérer les positions occupées ;
3. conserver, pour chaque position, la hauteur visible maximale ;
4. tracer les contours sans représenter la profondeur ;
5. vérifier les dimensions avec les deux autres vues.

### Retrouver un solide à partir de trois vues

Les trois vues doivent être compatibles :

- la face et le dessus ont la même largeur ;
- la face et le côté ont la même hauteur ;
- le dessus et le côté ont la même profondeur.

Une seule vue ne suffit généralement pas : plusieurs solides différents peuvent produire la même silhouette.

## 4. Compter les cubes et calculer un volume

Le volume d'un cube d'arête $a$ est :

$$
V=a^3
$$

Pour un assemblage sans chevauchement, on additionne les volumes de tous les cubes.

!!! example "Cubes de deux tailles"
    Un solide contient trois cubes d'arête $2\ \mathrm{cm}$ et un cube d'arête $4\ \mathrm{cm}$ :

    $$
    V=3\times2^3+4^3=3\times8+64=88\ \mathrm{cm^3}
    $$

Attention aux cubes cachés : une vue de face ou de dessus peut masquer plusieurs cubes alignés.

## 5. Construire un triangle avec trois longueurs

Pour construire $ABC$ avec $AB=6\ \mathrm{cm}$, $BC=8\ \mathrm{cm}$ et $CA=9\ \mathrm{cm}$ :

1. tracer $[AB]$ de $6\ \mathrm{cm}$ ;
2. tracer un arc de centre $A$ et de rayon $9\ \mathrm{cm}$ ;
3. tracer un arc de centre $B$ et de rayon $8\ \mathrm{cm}$ ;
4. leur point d'intersection est $C$ ;
5. relier $A$ à $C$ et $B$ à $C$.

Le compas reporte les longueurs avec précision.

## 6. Construire des triangles particuliers

### Triangle rectangle

Pour construire $FGH$ rectangle en $F$, avec $FG=5\ \mathrm{cm}$ et $FH=2\ \mathrm{cm}$ :

1. tracer $[FG]$ ;
2. construire la perpendiculaire à $(FG)$ passant par $F$ ;
3. placer $H$ à $2\ \mathrm{cm}$ de $F$ sur cette droite ;
4. relier $H$ à $G$.

### Triangle isocèle

Pour construire $MON$ isocèle en $M$, avec $NO=2\ \mathrm{cm}$ et $MN=5\ \mathrm{cm}$ :

1. tracer la base $[NO]$ ;
2. tracer deux arcs de rayon $5\ \mathrm{cm}$, centrés en $N$ et en $O$ ;
3. leur intersection donne $M$ ;
4. relier $M$ à $N$ et $M$ à $O$.

Comme le triangle est isocèle en $M$, on a $MN=MO$.

### Triangle équilatéral

Pour un triangle équilatéral de côté $3\ \mathrm{cm}$, tracer un segment de $3\ \mathrm{cm}$ puis deux arcs de rayon $3\ \mathrm{cm}$ centrés à ses extrémités.

### Un côté et deux angles

Pour construire un triangle avec un côté connu et deux angles :

1. tracer le côté à la bonne longueur ;
2. construire le premier angle à une extrémité avec le rapporteur ;
3. construire le second angle à l'autre extrémité ;
4. l'intersection des deux demi-droites donne le troisième sommet.

## 7. Reconnaître la nature d'un triangle

Le **codage** de la figure fournit les informations utiles :

| Codage | Conclusion |
|---|---|
| deux côtés avec le même trait | triangle isocèle |
| trois côtés avec le même trait | triangle équilatéral |
| petit carré à un sommet | triangle rectangle |
| aucun codage particulier | aucune nature particulière démontrée |

Une figure dessinée « à l'œil » ne suffit pas. La conclusion doit s'appuyer sur le codage ou sur des données écrites.

## À retenir

- Dans l'espace, une position se décrit avec trois coordonnées ordonnées.
- Les vues de face, de côté et de dessus montrent des dimensions différentes.
- Trois vues permettent de mieux reconstituer un solide qu'une seule.
- Le volume d'un cube d'arête $a$ est $a^3$.
- Le compas reporte les longueurs, l'équerre construit un angle droit et le rapporteur construit un angle donné.
- La nature d'un triangle se déduit des données et du codage, jamais de son apparence seule.

!!! note "Validation"
    Ce cours a été synthétisé à partir des quatre pages photographiées. Il doit être comparé au cours original avant de passer son statut à « vérifié ».