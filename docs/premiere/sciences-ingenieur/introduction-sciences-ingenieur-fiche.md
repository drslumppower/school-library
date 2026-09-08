---
titre: Fiche de révision - Introduction aux Sciences de l'ingénieur
matiere: Sciences de l'ingénieur
niveau: Première - spécialité
type: fiche de révision
statut: à vérifier
---

# Fiche de révision

## La démarche en une ligne

**Besoin → cahier des charges → conception → modèle → simulation → prototype ou système réel → expérimentation → mesure des écarts → correction**

## Définitions essentielles

| Terme | Définition courte |
|---|---|
| système | ensemble organisé de composants qui répond à un besoin |
| cahier des charges | document qui fixe le besoin, les contraintes et les performances attendues |
| modèle | représentation simplifiée d'un système, adaptée à une étude |
| simulation numérique | utilisation d'un modèle informatique pour prévoir un comportement |
| expérimentation | mise en œuvre d'un protocole afin d'observer ou de mesurer le réel |
| performance | résultat quantifiable obtenu ou attendu pour un critère donné |
| tolérance | marge admise autour d'une performance attendue |
| incertitude | marge associée à la connaissance d'une valeur mesurée |
| écart | différence quantifiable entre deux performances |

## Les quatre compétences

| Analyser | Modéliser | Expérimenter | Communiquer |
|---|---|---|---|
| comprendre le besoin et le système | représenter et prévoir | définir un protocole et mesurer | rechercher, argumenter et présenter |
| identifier les performances | choisir les grandeurs utiles | traiter les résultats | utiliser textes, tableaux et schémas |
| caractériser les écarts | simuler et valider le modèle | estimer les incertitudes | rendre la démarche compréhensible |

## Les trois systèmes à comparer

| Système | Domaine | Performance | Exemples de représentation |
|---|---|---|---|
| souhaité | client et concepteur | attendue | besoin, cahier des charges, esquisse |
| simulé | modèle | simulée | équation, schéma, modèle 3D, diagramme de forces |
| réel | expérimentation | mesurée | prototype, produit, photographie, relevé d'appareil |

### Pourquoi comparer ?

- **Attendu ↔ simulé** : la solution imaginée semble-t-elle satisfaire le besoin ?
- **Simulé ↔ mesuré** : le modèle représente-t-il correctement le réel ?
- **Attendu ↔ mesuré** : le système fabriqué est-il conforme au cahier des charges ?

## Cycle de vie

1. conception ;
2. extraction des matières premières ;
3. fabrication ;
4. transport et distribution ;
5. utilisation et maintenance ;
6. fin de vie : réemploi, recyclage, valorisation ou élimination.

L'**écoconception** cherche à réduire les impacts environnementaux sur l'ensemble de ce cycle.

## Simulation et expérimentation

| Simulation | Expérimentation |
|---|---|
| travaille sur un modèle | travaille sur un système réel ou un prototype |
| prévoit une performance | mesure une performance |
| permet des essais rapides et peu coûteux | confronte les prévisions à la réalité |
| dépend des hypothèses du modèle | dépend du protocole et des instruments |

La simulation ne remplace pas totalement les essais : les deux approches se complètent pour valider une solution.

## Calculer un écart

### Écart absolu

$$
E=|P_{obtenue}-P_{attendue}|
$$

L'écart absolu possède la même unité que la performance.

### Écart relatif

$$
E_r=\frac{|P_{obtenue}-P_{attendue}|}{|P_{attendue}|}\times100
$$

L'écart relatif s'exprime en pourcentage.

### Méthode de conformité

1. Identifier la valeur attendue et la valeur obtenue.
2. Calculer l'écart relatif.
3. Repérer la tolérance autorisée.
4. Comparer l'écart à la tolérance.
5. Conclure avec une phrase : **conforme** ou **non conforme**.

!!! example "Train du puy de Dôme"
    Vitesse réelle : $25\ \text{km/h}$ ; vitesse affichée : $24\ \text{km/h}$ ; tolérance : $5\,\%$.

    $$
    E=|24-25|=1\ \text{km/h}
    $$

    $$
    E_r=\frac{1}{25}\times100=4\,\%
    $$

    Comme $4\,\%<5\,\%$, le cahier des charges est respecté.

## Exercice de vocabulaire corrigé

1. Un robot ménager ou le viaduc de Millau sont des **systèmes**.
2. Avant une simulation, il faut définir un **modèle**.
3. Le système souhaité est défini par un **cahier des charges**.
4. La performance réelle est une **performance mesurée**.
5. La performance souhaitée est définie avec une **tolérance**.
6. Une performance mesurée comporte une **incertitude**.
7. La comparaison de deux performances quantifiables donne un **écart**.
8. Une performance mesurée est obtenue par une **expérimentation**.
9. Une performance simulée est généralement obtenue par une **simulation numérique**.

## Questions à savoir traiter

- Quel besoin le système satisfait-il ?
- Quelles contraintes le cahier des charges impose-t-il ?
- Quelles hypothèses simplifient le modèle ?
- Quelle performance est attendue, simulée ou mesurée ?
- Quel écart calcule-t-on et que signifie-t-il ?
- Le résultat respecte-t-il la tolérance ?
- Le modèle doit-il être corrigé ou enrichi ?

## Pièges à éviter

- Un modèle n'est pas une copie complète du réel : c'est une simplification utile.
- Une image numérique réaliste reste une représentation simulée si elle provient d'un modèle.
- La tolérance n'est pas une erreur de mesure.
- Un faible écart simulé-réel valide le modèle seulement dans les conditions étudiées.
- Une conclusion doit toujours comparer numériquement l'écart à la tolérance.