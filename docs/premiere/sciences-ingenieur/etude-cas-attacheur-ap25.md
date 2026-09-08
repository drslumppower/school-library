---
titre: Étude de cas - Attacheur de végétation AP25
matiere: Sciences de l'ingénieur
niveau: Première - spécialité
type: cours
partie: TD - Attacheur AP25
statut: à vérifier
mots_cles:
  - AP25
  - besoin
  - exigences
  - chaîne d'information
  - chaîne de puissance
  - SysML
  - séquence
---

# Étude de cas - Attacheur AP25

Cette étude de cas applique l'analyse fonctionnelle et structurelle à l'attacheur de végétation AP25 de Pellenc.

## 1. Produit et besoin

L'AP25 est un outil électroportatif alimenté par des batteries portées à la ceinture. Il attache temporairement les sarments de vigne à un fil de palissage afin de guider leur croissance.

- **Utilisateur** : viticulteur.
- **Matière d'œuvre** : sarment, fil de palissage et lien d'attache.
- **Service principal** : attacher les sarments au palissage.
- **Besoin** : mécaniser l'opération pour gagner du temps et réduire sa pénibilité.
- **Autonomie annoncée** : une journée de travail, soit environ 8 000 attaches.

### Services complémentaires

- régler le serrage de l'attache ;
- recharger les batteries ;
- recharger la bobine de lien ;
- accepter plusieurs types de liens.

## 2. Contexte d'utilisation

Le système interagit avec :

- le viticulteur ;
- les sarments ;
- le palissage ;
- les liens d'attache ;
- les conditions climatiques.

Les liens mentionnés dans le dossier sont notamment de type bio, papier, plastique, standard ou inoxydable.

## 3. Exigences principales

| Exigence | Critère | Niveau |
|---|---|---|
| résister au milieu extérieur | indice de protection | IP55 |
| fonctionner par temps froid ou chaud | température | de $-5\,°\text{C}$ à $40\,°\text{C}$ |
| régler le serrage | nombre de tours de torsade | réglable, de 3 à 9 tours |
| garantir le confort | masse en main | $1\ \text{kg}$ maximum |
| garantir le confort | masse des batteries à la ceinture | $2\ \text{kg}$ maximum |
| garantir la sécurité | protection mécanique | mécanisme fermé |
| garantir la sécurité | protection électrique | règles de sécurité respectées |
| s'adapter aux sarments | diamètre | $20\ \text{mm}$ maximum |
| s'adapter au palissage | diamètre du fil | $2\ \text{mm}$ maximum |
| assurer l'autonomie | nombre d'attaches | environ 8 000 par journée |
| accepter plusieurs liens | type de lien | tous les types prévus |

Ces exigences traduisent le besoin en critères vérifiables.

## 4. Principe de la solution

L'AP25 est un système **automatique** : après l'action de l'utilisateur sur la gâchette, il enchaîne seul les opérations d'attache.

La conception retient un seul moteur associé à un mécanisme multifonctionnel. Deux roues libres orientent la puissance selon le sens de rotation du moteur :

- dans un sens, le moteur entraîne le sous-mécanisme 1 ;
- dans l'autre, il entraîne le sous-mécanisme 2.

La roue libre agit comme une « diode mécanique » : elle transmet le mouvement dans un sens et le bloque dans l'autre.

## 5. Les deux sous-mécanismes

### Sous-mécanisme 1

Il réalise trois fonctions :

1. entourer le sarment et le fil de palissage avec le lien ;
2. faire avancer le lien ;
3. couper le lien.

Il utilise notamment un mécanisme à came, un crochet et une cisaille rotative.

### Sous-mécanisme 2

Il torsade le lien avec un nombre de tours réglable. Il comprend notamment un arbre torsadeur et un accouplement magnétique.

Des capteurs associés aux roues libres permettent de maîtriser leurs positions angulaires.

## 6. Chaîne fonctionnelle

### Chaîne d'information

| Fonction | Composants ou données |
|---|---|
| **Acquérir** | gâchette, réglage du serrage, capteurs de position |
| **Traiter** | carte électronique ou unité de commande |
| **Communiquer** | ordres envoyés au pré-actionneur, information à l'utilisateur |

### Chaîne de puissance

| Fonction | Composant principal |
|---|---|
| **Alimenter** | batteries |
| **Distribuer** | pré-actionneur ou électronique de puissance |
| **Convertir** | moteur électrique à courant continu |
| **Transmettre** | réducteurs, roues libres, came, mécanisme vis-écrou |
| **Agir** | crochet, cisaille et torsadeur |

Le pré-actionneur remplit la fonction **Distribuer** : il module et dirige l'énergie électrique vers le moteur selon les ordres de commande.

## 7. Les flux dans le système

- **Flux d'information** : appui sur la gâchette, niveau de serrage, positions mesurées et ordres moteur.
- **Flux d'énergie** : énergie électrique des batteries, puis énergie mécanique fournie par le moteur.
- **Flux de matière** : lien déroulé, avancé, coupé puis torsadé autour du sarment et du palissage.

## 8. Séquence d'une attache

Le diagramme de séquence ordonne les actions dans le temps :

1. le viticulteur appuie sur la gâchette ;
2. le crochet se ferme ;
3. le lien avance ;
4. le lien est coupé ;
5. le torsadeur effectue le nombre de tours demandé ;
6. le crochet s'ouvre ;
7. le lien est avancé pour préparer le cycle suivant.

Les retours des capteurs autorisent le passage d'une étape à la suivante et évitent que des actions incompatibles soient réalisées simultanément.

## 9. Diagrammes SysML mobilisés

| Diagramme | Rôle dans l'étude |
|---|---|
| cas d'utilisation | identifier les services rendus au viticulteur |
| contexte | recenser les éléments extérieurs |
| exigences | préciser les performances attendues |
| définition de blocs | identifier les composants et sous-systèmes |
| blocs internes | représenter les connexions et les flux |
| séquence | ordonner les échanges et actions dans le temps |

## À retenir

- L'AP25 mécanise une opération répétitive et pénible de la viticulture.
- Le besoin est traduit en exigences chiffrées de confort, sécurité, adaptation et autonomie.
- Un moteur unique pilote deux sous-mécanismes grâce à des roues libres.
- La chaîne d'information commande la chaîne de puissance.
- Le diagramme de séquence décrit l'ordre temporel des actions.

!!! note "Validation"
    Cette synthèse repose sur les pages photographiées du TD. Certaines valeurs ou désignations doivent être comparées au document original complet avant de passer le statut à « vérifié ».