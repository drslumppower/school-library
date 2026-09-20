---
titre: Lumière, ondes et particules
matiere: Physique-chimie
niveau: Première - spécialité
chapitre: Lumière - ondes et particules
type: cours
statut: à vérifier
mots_cles:
  - onde électromagnétique
  - longueur d'onde
  - fréquence
  - photon
  - effet photoélectrique
  - niveaux d'énergie
  - spectre de raies
---

# Lumière : ondes et particules

## Objectifs

À la fin de cette leçon, il faut savoir :

- relier la fréquence et la longueur d'onde d'une radiation ;
- situer une radiation dans le spectre électromagnétique ;
- calculer l'énergie d'un photon ;
- expliquer l'effet photoélectrique ;
- exploiter un diagramme de niveaux d'énergie ;
- relier une transition atomique à une raie spectrale.

## 1. La lumière comme onde électromagnétique

Une onde électromagnétique peut se propager dans le vide. Elle est caractérisée par :

- sa **fréquence** $\nu$, exprimée en hertz $(\mathrm{Hz})$ ;
- sa **longueur d'onde dans le vide** $\lambda$, exprimée en mètres $(\mathrm{m})$.

Dans le vide, toutes les ondes électromagnétiques se déplacent à la célérité :

$$
c = 3{,}00\times10^8\ \mathrm{m\,s^{-1}}
$$

La fréquence et la longueur d'onde sont liées par :

$$
c = \lambda\nu
$$

Donc :

$$
\lambda = \frac{c}{\nu}
\qquad\text{et}\qquad
\nu = \frac{c}{\lambda}
$$

La fréquence et la longueur d'onde varient en sens inverse : plus $\nu$ augmente, plus $\lambda$ diminue.

!!! example "Radio FM à 100 MHz"
    $100\ \mathrm{MHz}=1{,}00\times10^8\ \mathrm{Hz}$, donc

    $$
    \lambda=\frac{3{,}00\times10^8}{1{,}00\times10^8}=3{,}00\ \mathrm{m}
    $$

## 2. Le spectre électromagnétique

Les différents domaines sont classés par longueur d'onde croissante :

$$
\gamma \rightarrow \text{rayons X} \rightarrow \text{UV} \rightarrow \text{visible} \rightarrow \text{IR} \rightarrow \text{micro-ondes} \rightarrow \text{ondes radio}
$$

| Domaine | Ordre de grandeur de $\lambda$ |
|---|---|
| rayons $\gamma$ | $\lambda < 10\ \mathrm{pm}$ |
| rayons X | $10\ \mathrm{pm} < \lambda < 10\ \mathrm{nm}$ |
| ultraviolet | $10\ \mathrm{nm} < \lambda < 400\ \mathrm{nm}$ |
| visible | environ $400$ à $800\ \mathrm{nm}$ |
| infrarouge | $800\ \mathrm{nm} < \lambda < 1\ \mathrm{mm}$ |
| micro-ondes | $1\ \mathrm{mm} < \lambda < 1\ \mathrm{m}$ |
| ondes radio | $1\ \mathrm{m} < \lambda$ |

Quand on va des ondes radio vers les rayons $\gamma$, la longueur d'onde diminue tandis que la fréquence et l'énergie augmentent.

## 3. La lumière comme ensemble de photons

La lumière présente aussi un comportement particulaire. Elle peut être décrite comme un ensemble de **photons**, chacun transportant une quantité d'énergie déterminée.

L'énergie d'un photon est donnée par la relation de Planck-Einstein :

$$
E_{\text{photon}} = h\nu = \frac{hc}{\lambda}
$$

avec :

- $E_{\text{photon}}$ en joules $(\mathrm{J})$ ;
- $h=6{,}63\times10^{-34}\ \mathrm{J\,s}$, constante de Planck ;
- $\nu$ en hertz $(\mathrm{Hz})$ ;
- $\lambda$ en mètres $(\mathrm{m})$.

Une faible longueur d'onde correspond donc à un photon très énergétique.

### Joule et électronvolt

À l'échelle atomique, on utilise souvent l'électronvolt :

$$
1\ \mathrm{eV}=1{,}60\times10^{-19}\ \mathrm{J}
$$

Pour passer des joules aux électronvolts, on divise par $1{,}60\times10^{-19}$.

## 4. L'effet photoélectrique

Lorsqu'un métal reçoit un rayonnement, des électrons peuvent être arrachés à sa surface. C'est l'**effet photoélectrique**.

Ce phénomène n'apparaît que si l'énergie d'un photon atteint une valeur minimale propre au métal. Une lumière constituée de photons trop peu énergétiques ne provoque pas l'arrachement, même si la durée d'exposition augmente.

L'énergie reçue sert alors :

- à libérer l'électron du métal ;
- puis, s'il reste de l'énergie, à lui fournir de l'énergie cinétique.

Cette expérience montre que les échanges d'énergie entre lumière et matière se font par quantités discrètes.

## 5. Les niveaux d'énergie d'un atome

L'énergie d'un atome ne peut pas prendre n'importe quelle valeur. Elle est **quantifiée** : seules certaines valeurs, appelées niveaux d'énergie, sont autorisées.

- Le niveau le plus bas est l'**état fondamental**.
- Les niveaux supérieurs sont des **états excités**.
- Au-dessus de l'énergie d'ionisation, l'électron n'est plus lié à l'atome.

Pour une transition d'un niveau initial $E_i$ vers un niveau final $E_f$ :

$$
\Delta E = E_f-E_i
$$

### Émission

L'atome passe d'un niveau élevé vers un niveau plus bas. Son énergie diminue et il émet un photon :

$$
E_{\text{photon}} = |E_f-E_i|
$$

### Absorption

L'atome reçoit un photon et passe vers un niveau plus élevé. L'absorption n'est possible que si l'énergie du photon correspond exactement à l'écart entre deux niveaux :

$$
E_{\text{photon}} = E_f-E_i
$$

## 6. Spectres de raies

Comme chaque élément possède ses propres niveaux d'énergie, il ne peut émettre ou absorber que certaines longueurs d'onde. Son spectre de raies constitue donc une **signature** permettant de l'identifier.

Pour passer d'une transition énergétique à une longueur d'onde :

1. calculer $E_{\text{photon}}=|E_f-E_i|$ ;
2. convertir l'énergie en joules si elle est donnée en électronvolts ;
3. utiliser

$$
\lambda=\frac{hc}{E_{\text{photon}}}
$$

!!! example "Raie du mercure"
    Pour une transition de $E_i=-2{,}71\ \mathrm{eV}$ vers $E_f=-5{,}56\ \mathrm{eV}$ :

    $$
    E_{\text{photon}}=|-5{,}56-(-2{,}71)|=2{,}85\ \mathrm{eV}
    $$

    On obtient une longueur d'onde proche de $436\ \mathrm{nm}$, correspondant à une raie bleue du mercure.

## Méthode de calcul

1. Écrire la relation littérale avant de remplacer les valeurs.
2. Convertir toutes les longueurs en mètres et toutes les fréquences en hertz.
3. Convertir les électronvolts en joules avant d'utiliser $E=hc/\lambda$.
4. Vérifier l'unité et l'ordre de grandeur du résultat.
5. Identifier le domaine spectral obtenu.

## À retenir

- $c=\lambda\nu$ décrit l'aspect ondulatoire de la lumière.
- $E=h\nu=hc/\lambda$ donne l'énergie transportée par un photon.
- Une petite longueur d'onde correspond à une grande fréquence et à une grande énergie.
- L'effet photoélectrique nécessite des photons suffisamment énergétiques.
- Les niveaux d'énergie atomiques sont quantifiés.
- Une émission fait diminuer l'énergie de l'atome ; une absorption la fait augmenter.
- Les raies spectrales permettent d'identifier un élément chimique.

!!! note "Validation"
    Ce cours a été reconstruit et réorganisé à partir de six photographies d'activités, d'un questionnaire et de notes manuscrites. Il doit être comparé au cours original avant de passer son statut à « vérifié ».