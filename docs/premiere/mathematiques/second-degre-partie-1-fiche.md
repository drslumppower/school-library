---
titre: Fiche de révision - Second degré, partie 1
matiere: Mathématiques
niveau: Première générale
type: fiche de révision
statut: à vérifier
---

# Fiche de révision

## Identités remarquables

$$
(a+b)^2=a^2+2ab+b^2
$$

$$
(a-b)^2=a^2-2ab+b^2
$$

$$
(a+b)(a-b)=a^2-b^2
$$

!!! warning "Attention au signe"
    Dans $(a-b)^2$, le double produit est négatif, mais $b^2$ reste positif.

## Les deux formes

| Forme | Écriture | Information immédiate |
|---|---|---|
| développée | $ax^2+bx+c$ | coefficients $a$, $b$ et $c$ |
| canonique | $a(x-\alpha)^2+\beta$ | sommet $S(\alpha;\beta)$ |

$$
\boxed{\alpha=-\frac{b}{2a}}
\qquad
\boxed{\beta=f(\alpha)}
$$

### Obtenir la forme canonique

1. Identifier $a$, $b$ et $c$.
2. Calculer $\alpha=-\dfrac{b}{2a}$.
3. Calculer $\beta=f(\alpha)$.
4. Écrire $a(x-\alpha)^2+\beta$.

## Sommet et variations

=== "$a>0$"

    La parabole est tournée vers le haut.

    - minimum : $\beta$ ;
    - atteint pour : $x=\alpha$ ;
    - décroissante puis croissante.

=== "$a<0$"

    La parabole est tournée vers le bas.

    - maximum : $\beta$ ;
    - atteint pour : $x=\alpha$ ;
    - croissante puis décroissante.

## Exemples des feuilles

| Fonction | Forme canonique | Sommet | Extremum |
|---|---|---|---|
| $f(x)=2x^2-12x+14$ | $2(x-3)^2-4$ | $S(3;-4)$ | minimum $-4$ |
| $g(x)=-3x^2-6x-1{,}5$ | $-3(x+1)^2+1{,}5$ | $S(-1;1{,}5)$ | maximum $1{,}5$ |
| $h(x)=3(x-6)^2+\dfrac{4}{3}$ | déjà canonique | $S(6;\frac{4}{3})$ | minimum $\frac{4}{3}$ |
| $i(x)=-(x+3{,}3)^2+\sqrt{2}$ | déjà canonique | $S(-3{,}3;\sqrt{2})$ | maximum $\sqrt{2}$ |

## Applications représentatives

| Fonction | Forme canonique | Variations |
|---|---|---|
| $x^2+6x-15$ | $(x+3)^2-24$ | décroît puis croît ; minimum $-24$ en $-3$ |
| $2x^2-8x-16$ | $2(x-2)^2-24$ | décroît puis croît ; minimum $-24$ en $2$ |
| $5-4x^2-8x$ | $-4(x+1)^2+9$ | croît puis décroît ; maximum $9$ en $-1$ |
| $-2(x+1)(x-2)$ | $-2\left(x-\frac12\right)^2+\frac92$ | croît puis décroît ; maximum $\frac92$ en $\frac12$ |

### Depuis un graphique

Si le sommet est $A(2;5)$ et si $B(0;-3)$ appartient à la parabole :

$$
h(x)=a(x-2)^2+5,\qquad -3=4a+5,\qquad a=-2
$$

Donc $h(x)=-2(x-2)^2+5$.

## Méthodes rapides

### Développer et réduire

1. Identifier une identité remarquable ou appliquer la distributivité.
2. Développer chaque produit.
3. Regrouper les termes en $x^2$, en $x$, puis les constantes.
4. Ordonner le résultat par puissances décroissantes.

### Lire un graphique

- $f(x)=0$ : lire les abscisses des intersections avec l'axe horizontal.
- $f(x)=k$ : lire les intersections avec la droite $y=k$.
- $f(x)\leq k$ : conserver les portions situées sous $y=k$.
- Variations : suivre la courbe de gauche à droite et relever ses changements de sens.

## Résultats des automatismes

$$
(x-4)^2+(2x+1)(2x-1)=5x^2-8x+15
$$

$$
(9x-3)(9x+3)+(-2x+8)^2=85x^2-32x+55
$$

Sur le premier graphique, les solutions de $f(x)=0$ sont $-3$, $1$ et $5$.

## Pièges à éviter

- Le sommet de $a(x-\alpha)^2+\beta$ a pour abscisse $\alpha$, avec le signe écrit dans la parenthèse : $(x+1)^2=(x-(-1))^2$.
- Ne pas oublier le double produit $2ab$ dans le développement d'un carré.
- Ne pas confondre les coordonnées du sommet avec les coefficients de la forme développée.
- Dans $\alpha=-\dfrac{b}{2a}$, le dénominateur est **$2a$** et non 2 seulement.
- Dans un tableau de variations, la première ligne contient les abscisses et la seconde les valeurs de la fonction.