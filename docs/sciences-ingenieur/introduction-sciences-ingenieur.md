---
titre: Introduction aux Sciences de l'ingénieur
matiere: Sciences de l'ingénieur
niveau: Première - spécialité
type: cours
statut: à vérifier
mots_cles:
  - système
  - démarche d'ingénieur
  - cycle de vie
  - cahier des charges
  - modèle
  - simulation
  - expérimentation
  - écart
---

# Introduction aux Sciences de l'ingénieur

## 1. Définir la discipline

Une **science** est un ensemble organisé de connaissances fondées sur l'observation, le raisonnement et l'expérimentation.

Un **ingénieur** conçoit, améliore ou valide des solutions à des problèmes techniques complexes. Il mobilise des connaissances scientifiques et techniques, mais prend aussi en compte les contraintes économiques, environnementales, sociales et humaines.

Les **Sciences de l'ingénieur** étudient la conception, le fonctionnement et l'amélioration des systèmes qui répondent à des besoins humains.

### Qu'est-ce qu'un système ?

Un **système** est un ensemble organisé de composants qui interagissent afin de rendre un service et de répondre à un besoin.

Il peut s'agir :

- d'un produit manufacturé : robot ménager, ventilateur, avion ;
- d'un moyen de transport : train, automobile ;
- d'un ouvrage : pont, bâtiment, viaduc ;
- d'un système d'énergie, d'information, de communication ou de santé.

## 2. Les quatre compétences principales

La spécialité développe quatre compétences complémentaires.

| Compétence | Questions posées | Actions principales |
|---|---|---|
| **Analyser** | À quel besoin le système répond-il ? Comment fonctionne-t-il ? | analyser le besoin et le système, identifier les performances, caractériser les écarts |
| **Modéliser** | Comment représenter et prévoir son comportement ? | identifier les grandeurs, proposer un modèle, résoudre ou simuler, valider le modèle |
| **Expérimenter** | Comment connaître le comportement réel ? | définir un protocole, mesurer, traiter les résultats, estimer les incertitudes |
| **Communiquer** | Comment présenter la démarche et les résultats ? | rechercher et traiter l'information, argumenter, produire des schémas et des comptes rendus |

Ces compétences ne sont pas des étapes strictement séparées : l'ingénieur passe régulièrement de l'une à l'autre pour corriger ou améliorer sa solution.

## 3. Le cycle de vie d'un système

Le **cycle de vie** regroupe toutes les étapes de l'existence d'un système :

1. expression du besoin et conception ;
2. extraction des matières premières ;
3. fabrication ;
4. transport et distribution ;
5. utilisation et maintenance ;
6. fin de vie : réemploi, recyclage, valorisation ou élimination.

La prise en compte du cycle de vie complet permet d'évaluer les impacts environnementaux du système et de rechercher des améliorations dès la conception. Cette démarche relève de l'**écoconception**.

## 4. De la conception à la fabrication

### Démarche séquentielle

Dans une organisation traditionnelle, les étapes se succèdent : cahier des charges, études, plans détaillés, prototypes, mise au point, puis industrialisation. Un défaut découvert tardivement peut imposer de reprendre une grande partie du projet.

### Ingénierie simultanée

Aujourd'hui, plusieurs métiers travaillent en parallèle autour d'une **maquette numérique** commune. Les choix de conception, de fabrication et de maintenance sont étudiés plus tôt et de manière collaborative.

Cette organisation permet :

- de détecter plus tôt les incompatibilités ;
- de comparer rapidement plusieurs solutions ;
- de réduire le nombre de prototypes physiques complets ;
- de diminuer les délais et les coûts de développement.

Les prototypes ne disparaissent pas : ils deviennent souvent plus ciblés et servent à valider les points que le modèle ne suffit pas à garantir.

## 5. Modèle et simulation

Un **modèle** est une représentation simplifiée d'un système réel ou envisagé. Il ne conserve que les caractéristiques utiles à l'étude menée.

Un modèle peut être :

- un schéma ;
- une maquette physique ;
- une équation ;
- un programme ;
- une maquette numérique en trois dimensions.

Une **simulation numérique** consiste à utiliser un modèle informatique pour prévoir le comportement de tout ou partie d'un système.

Elle permet notamment de :

- tester une solution avant sa fabrication ;
- prévoir des efforts, des températures, des déplacements ou des consommations ;
- vérifier certains critères du cahier des charges ;
- étudier des situations coûteuses, dangereuses ou difficiles à reproduire.

!!! example "Exemples"
    L'Airbus A380 a été conçu à l'aide d'une maquette numérique complète, complétée par des prototypes ciblés et des essais réels. Dans le bâtiment, le BIM rassemble les informations géométriques et techniques d'un ouvrage dans une maquette numérique partagée.

Une simulation reste une prévision. Sa fiabilité dépend des hypothèses, des paramètres et du domaine de validité du modèle. Elle doit donc être confrontée à l'expérimentation.

## 6. Les trois représentations d'un système

Au cours d'un projet, on distingue trois niveaux.

| Niveau | Support | Performance associée |
|---|---|---|
| système **souhaité** | besoin et cahier des charges | performance attendue |
| système **simulé** | modèle et simulation numérique | performance simulée |
| système **réel** | prototype ou produit fabriqué | performance mesurée |

### Reconnaître les représentations

- Un cahier des charges ou une esquisse de projet représente généralement le **système souhaité**.
- Un schéma fonctionnel, un modèle 3D ou un diagramme de forces représente le **système simulé**.
- Une photographie du produit construit ou un relevé d'appareil correspond au **système réel**.

Une image réaliste peut toutefois provenir d'une simulation. Il faut donc identifier sa fonction dans la démarche, et pas seulement son apparence.

## 7. Cahier des charges, tolérance et incertitude

Le **cahier des charges** décrit le besoin et fixe les performances attendues ainsi que les contraintes à respecter.

Une performance souhaitée est souvent accompagnée d'une **tolérance**, c'est-à-dire d'une marge acceptable autour de la valeur cible.

Une performance réelle est obtenue par une **mesure**. Toute mesure comporte une **incertitude**, liée à l'instrument, au protocole et aux conditions expérimentales.

!!! warning "Ne pas confondre"
    La tolérance indique ce qui est accepté par le cahier des charges. L'incertitude indique la précision avec laquelle la valeur réelle est connue.

## 8. La notion d'écart

Un **écart** est une différence quantifiable entre deux performances.

L'ingénieur peut comparer :

- l'attendu et le simulé, pour juger la solution proposée ;
- le simulé et le mesuré, pour valider ou corriger le modèle ;
- l'attendu et le mesuré, pour vérifier la conformité du système réel.

### Écart absolu

Pour une valeur attendue $P_a$ et une valeur obtenue $P_o$ :

$$
E=|P_o-P_a|
$$

### Écart relatif

$$
E_r=\frac{|P_o-P_a|}{|P_a|}\times 100
$$

L'écart relatif s'exprime en pourcentage. Il permet de comparer l'importance d'un écart à la valeur de référence.

!!! example "Afficheur de vitesse du train"
    Pour une vitesse réelle de $25\ \text{km/h}$, l'afficheur indique $24\ \text{km/h}$.

    $$
    E=|24-25|=1\ \text{km/h}
    $$

    $$
    E_r=\frac{1}{25}\times100=4\,\%
    $$

    Le cahier des charges autorise un écart maximal de $5\,\%$. Comme $4\,\%<5\,\%$, la performance est conforme.

## 9. La boucle de validation

La démarche d'ingénieur est itérative :

1. le besoin est traduit dans un cahier des charges ;
2. une solution est imaginée et modélisée ;
3. son comportement est simulé ;
4. un prototype ou le système réel est expérimenté ;
5. les performances attendues, simulées et mesurées sont comparées ;
6. les écarts conduisent à corriger le modèle, la solution ou le protocole.

Le but n'est pas d'obtenir immédiatement un système parfait, mais de réduire progressivement les écarts jusqu'à satisfaire le besoin dans les tolérances imposées.

## À retenir

- Un système répond à un besoin défini dans un cahier des charges.
- Les quatre compétences sont analyser, modéliser, expérimenter et communiquer.
- Le cycle de vie s'étend de la conception à la fin de vie.
- Un modèle simplifie la réalité ; une simulation en prévoit le comportement.
- Le système souhaité, le système simulé et le système réel produisent trois performances à comparer.
- La tolérance vient du cahier des charges ; l'incertitude vient de la mesure.
- L'analyse des écarts guide les corrections successives de la solution.

!!! note "Validation"
    Ce cours a été synthétisé à partir de six feuilles photographiées. Il doit être comparé au document original avant de passer son statut à « vérifié ».