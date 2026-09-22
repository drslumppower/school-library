---
titre: Racines carrées
matiere: Mathématiques
niveau: Quatrième
type: cours
chapitre: Racines carrées
source: Maths (2).heic et Maths (3).heic
date_import: 2026-09-22
statut: à vérifier
mots_cles:
  - racine carrée
  - carré parfait
  - valeur exacte
  - valeur approchée
  - encadrement
---

# Racines carrées

## Objectifs

À la fin de ce chapitre, il faut savoir :

- expliquer ce que représente une racine carrée ;
- reconnaître et utiliser les carrés parfaits ;
- calculer la racine carrée d'un carré parfait ;
- utiliser les identités $(\sqrt{a})^2=a$ et $\sqrt{a}\times\sqrt{a}=a$ ;
- distinguer une valeur exacte d'une valeur approchée ;
- encadrer une racine carrée entre deux entiers consécutifs ;
- arrondir une racine carrée avec la calculatrice.

## 1. Définition

Pour un nombre positif ou nul $a$, la **racine carrée de $a$** est l'unique nombre positif ou nul dont le carré est égal à $a$.

Elle se note $\sqrt{a}$.

Par exemple :

$$
6^2=36 \quad\text{donc}\quad \sqrt{36}=6
$$

De même :

$$
1{,}5^2=2{,}25 \quad\text{donc}\quad \sqrt{2{,}25}=1{,}5
$$

!!! warning "Une racine carrée est positive ou nulle"
    $\sqrt{36}=6$ et non $-6$. En revanche, l'équation $x^2=36$ possède deux solutions : $x=6$ et $x=-6$.

## 2. Carré et racine carrée

Le carré et la racine carrée sont deux opérations inverses lorsque l'on travaille avec des nombres positifs ou nuls.

Pour tout nombre $a\geqslant0$ :

$$
(\sqrt{a})^2=a
$$

et

$$
\sqrt{a}\times\sqrt{a}=a
$$

Exemples :

$$
(\sqrt{17})^2=17
$$

$$
\sqrt{11}\times\sqrt{11}=11
$$

## 3. Les carrés parfaits

Un **carré parfait** est le carré d'un nombre entier.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| $n^2$ | 0 | 1 | 4 | 9 | 16 | 25 | 36 | 49 |

| $n$ | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| $n^2$ | 64 | 81 | 100 | 121 | 144 | 169 | 196 | 225 |

Il faut connaître ces carrés pour calculer rapidement :

$$
\sqrt{81}=9,\qquad \sqrt{144}=12,\qquad \sqrt{225}=15
$$

!!! tip "Réflexe"
    Pour calculer $\sqrt{a}$ sans calculatrice, chercher quel nombre positif élevé au carré donne $a$.

## 4. Racines de nombres décimaux

La même définition s'applique aux nombres décimaux.

$$
0{,}6^2=0{,}36 \quad\text{donc}\quad \sqrt{0{,}36}=0{,}6
$$

$$
0{,}3^2=0{,}09 \quad\text{donc}\quad \sqrt{0{,}09}=0{,}3
$$

Attention à la position de la virgule :

$$
1{,}5^2=2{,}25
$$

et non $22{,}5$.

## 5. Valeur exacte et valeur approchée

Certaines racines carrées ne sont pas des nombres décimaux exacts. Dans ce cas, l'écriture avec le symbole $\sqrt{\phantom{a}}$ est la **valeur exacte**.

Par exemple :

$$
\sqrt{13}
$$

est une valeur exacte. Avec une calculatrice :

$$
\sqrt{13}\approx3{,}61
$$

$3{,}61$ est une valeur approchée au centième.

| Écriture | Signification |
|---|---|
| $\sqrt{13}$ | valeur exacte |
| $3{,}6055\ldots$ | affichage décimal non terminé |
| $3{,}61$ | valeur arrondie au centième |

!!! warning "Le bon symbole"
    On écrit $\sqrt{13}\approx3{,}61$ et non $\sqrt{13}=3{,}61$, car l'arrondi n'est pas exactement égal à la racine carrée.

## 6. Encadrer une racine carrée

Pour encadrer $\sqrt{a}$ entre deux entiers consécutifs :

1. chercher les deux carrés parfaits consécutifs qui entourent $a$ ;
2. prendre les racines carrées des trois membres ;
3. écrire l'encadrement obtenu.

### Exemple avec $\sqrt{13}$

On sait que :

$$
9<13<16
$$

Or $9=3^2$ et $16=4^2$. Donc :

$$
3<\sqrt{13}<4
$$

### Exemple avec $\sqrt{125}$

$$
121<125<144
$$

Comme $121=11^2$ et $144=12^2$ :

$$
11<\sqrt{125}<12
$$

La calculatrice donne ensuite :

$$
\sqrt{125}\approx11{,}18
$$

## 7. Compléter un tableau

Dans un tableau reliant $a$ et $\sqrt{a}$, deux situations sont possibles.

### La valeur de $a$ est connue

On calcule sa racine carrée :

$$
a=9 \quad\Longrightarrow\quad \sqrt{a}=3
$$

### La valeur de $\sqrt{a}$ est connue

On l'élève au carré :

$$
\sqrt{a}=2{,}25 \quad\Longrightarrow\quad a=2{,}25^2=5{,}0625
$$

## 8. Lien avec le théorème de Pythagore

La racine carrée permet de retrouver une longueur lorsque son carré est connu.

Si un triangle rectangle vérifie :

$$
h^2=3^2+4^2=25
$$

alors :

$$
h=\sqrt{25}=5
$$

Pour revoir la méthode complète : [Théorème de Pythagore](theoreme-pythagore-recap.md).

## À retenir

- $\sqrt{a}$ est le nombre positif ou nul dont le carré vaut $a$.
- $\sqrt{a}$ existe dans ce chapitre pour $a\geqslant0$.
- $(\sqrt{a})^2=a$ et $\sqrt{a}\times\sqrt{a}=a$.
- Les carrés parfaits permettent de calculer certaines racines sans calculatrice.
- Une valeur exacte conserve le symbole racine.
- Une valeur arrondie s'écrit avec $\approx$.
- Pour encadrer une racine, on encadre d'abord le nombre par deux carrés parfaits.

!!! note "Validation"
    Ce cours a été reconstruit à partir d'une leçon manuscrite et d'une fiche d'exercices. Il doit être comparé au cours original avant de passer son statut à « vérifié ».