---
titre: Second degré - Partie 1
matiere: Mathématiques
niveau: Première générale
type: cours
statut: à vérifier
mots_cles:
  - second degré
  - identités remarquables
  - forme canonique
  - sommet
  - variations
---

# Second degré - Partie 1

## Objectifs

À la fin de cette leçon, il faut savoir :

- développer et réduire une expression avec les identités remarquables ;
- reconnaître un monôme, un polynôme et leur degré ;
- reconnaître une fonction polynôme du second degré ;
- passer de la forme développée à la forme canonique ;
- lire le sommet et les variations d'une parabole ;
- résoudre graphiquement une équation ou une inéquation.

## 1. Identités remarquables

Pour tous nombres réels $a$ et $b$ :

$$
(a+b)^2=a^2+2ab+b^2
$$

$$
(a-b)^2=a^2-2ab+b^2
$$

$$
(a+b)(a-b)=a^2-b^2
$$

### Exemples

$$
(x+1{,}5)^2=x^2+3x+2{,}25
$$

$$
(x-10)(x+10)=x^2-100
$$

Pour développer une expression comportant plusieurs produits, on développe chaque partie avant de regrouper les termes de même degré.

!!! example "Exemple"
    Développons $A(x)=(x-4)^2+(2x+1)(2x-1)$ :

    $$
    A(x)=x^2-8x+16+4x^2-1=5x^2-8x+15
    $$

## 2. Fonction polynôme du second degré

Un **monôme** est une expression de la forme $ax^n$, où $n$ est un entier naturel. Son degré est $n$ lorsque $a\neq0$.

Un **polynôme** est une somme finie de monômes. Son degré est le plus grand degré dont le coefficient est non nul.

!!! example "Reconnaître le degré"
    $3x^4$ est un monôme de degré 4 et $x^9+3x^4+x^2+1$ est un polynôme de degré 9.

Une fonction polynôme du second degré s'écrit sous la forme développée :

$$
f(x)=ax^2+bx+c \quad \text{avec } a\neq 0
$$

Sa courbe représentative est une **parabole**.

- si $a>0$, la parabole est tournée vers le haut ;
- si $a<0$, la parabole est tournée vers le bas.

## 3. Forme canonique

La forme canonique d'une fonction du second degré est :

$$
f(x)=a(x-\alpha)^2+\beta
$$

avec :

$$
\alpha=-\frac{b}{2a}
\qquad\text{et}\qquad
\beta=f(\alpha)
$$

Le sommet de la parabole a pour coordonnées $S(\alpha;\beta)$.

- Si $a>0$, $\beta$ est le **minimum**, atteint pour $x=\alpha$.
- Si $a<0$, $\beta$ est le **maximum**, atteint pour $x=\alpha$.

### Méthode rapide

Pour mettre $f(x)=ax^2+bx+c$ sous forme canonique :

1. relever $a$, $b$ et $c$ ;
2. calculer $\alpha=-\dfrac{b}{2a}$ ;
3. calculer $\beta=f(\alpha)$ ;
4. écrire $f(x)=a(x-\alpha)^2+\beta$ ;
5. développer pour vérifier si nécessaire.

!!! example "Exemple avec un minimum"
    Pour $f(x)=2x^2-12x+14$ :

    $$
    f(x)=2(x-3)^2-4
    $$

    Ici, $a=2$, $\alpha=3$ et $\beta=-4$. La fonction atteint donc son minimum $-4$ pour $x=3$.

!!! example "Exemple avec un maximum"
    Pour $g(x)=-3x^2-6x-1{,}5$ :

    $$
    g(x)=-3(x+1)^2+1{,}5
    $$

    Ici, $a=-3$, $\alpha=-1$ et $\beta=1{,}5$. La fonction atteint donc son maximum $1{,}5$ pour $x=-1$.

## 4. Variations

Pour $f(x)=a(x-\alpha)^2+\beta$ :

=== "$a>0$"

    La fonction est décroissante sur $]-\infty;\alpha]$, puis croissante sur $[\alpha;+\infty[$. Elle admet un minimum égal à $\beta$.

=== "$a<0$"

    La fonction est croissante sur $]-\infty;\alpha]$, puis décroissante sur $[\alpha;+\infty[$. Elle admet un maximum égal à $\beta$.

Dans les deux cas, la droite d'équation $x=\alpha$ est l'**axe de symétrie** de la parabole.

### Applications

- $h(x)=3(x-6)^2+\dfrac{4}{3}$ admet un minimum égal à $\dfrac{4}{3}$ pour $x=6$.
- $i(x)=-(x+3{,}3)^2+\sqrt{2}$ admet un maximum égal à $\sqrt{2}$ pour $x=-3{,}3$.

## 5. Trois exercices-types corrigés

??? success "1. Passer de la forme développée à la forme canonique"
    Pour $f(x)=x^2+6x-15$ :

    $$
    \alpha=-\frac{6}{2}=-3
    \qquad\text{et}\qquad
    \beta=f(-3)=-24
    $$

    Donc $f(x)=(x+3)^2-24$. Elle décroît jusqu'à $-3$, puis croît ; son minimum est $-24$.

??? success "2. Partir d'une forme factorisée"
    Pour $g(x)=-2(x+1)(x-2)=-2x^2+2x+4$ :

    $$
    \alpha=-\frac{2}{2\times(-2)}=\frac12,
    \qquad
    \beta=g\left(\frac12\right)=\frac92
    $$

    Donc $g(x)=-2\left(x-\dfrac12\right)^2+\dfrac92$. Elle croît puis décroît et admet un maximum égal à $\dfrac92$.

??? success "3. Retrouver une expression à partir du sommet"
    Le sommet est $A(2;5)$, donc $h(x)=a(x-2)^2+5$. Comme $B(0;-3)$ appartient à la courbe :

    $$
    -3=4a+5 \quad\Longrightarrow\quad a=-2
    $$

    Ainsi $h(x)=-2(x-2)^2+5$. Le point $C(3;3)$ permet de vérifier le résultat.

## 6. Lecture graphique

### Résoudre $f(x)=k$

Les solutions sont les abscisses des points d'intersection entre la courbe de $f$ et la droite horizontale d'équation $y=k$.

En particulier, résoudre $f(x)=0$ revient à lire les abscisses des points où la courbe coupe l'axe des abscisses.

### Résoudre $f(x)\leq k$

On repère les portions de la courbe situées sous la droite $y=k$, puis on lit les abscisses correspondantes. Les bornes sont incluses lorsque le symbole est $\leq$.

### Construire un tableau de variations

1. Lire les bornes de l'intervalle étudié.
2. Repérer les abscisses des minimums et maximums.
3. Relever les valeurs correspondantes.
4. Indiquer chaque intervalle où la courbe monte ou descend.

## À retenir

- Le signe de $a$ donne l'orientation de la parabole.
- $\alpha=-\dfrac{b}{2a}$ et $\beta=f(\alpha)$.
- Dans $a(x-\alpha)^2+\beta$, le sommet est $S(\alpha;\beta)$.
- Une équation se lit avec des intersections ; une inéquation se lit avec des portions de courbe.
- Une solution graphique peut être exacte si le point est marqué, sinon elle est approchée.

!!! note "Validation"
    Ce cours a été synthétisé à partir des feuilles photographiées. Il doit être comparé au cours original avant de passer son statut à « vérifié ».