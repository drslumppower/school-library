---
titre: Fiche de révision - Besoin, exigences et structure d'un système
matiere: Sciences de l'ingénieur
niveau: Première - spécialité
type: fiche de révision
partie: théorie
statut: à vérifier
---

# Fiche de révision - Théorie

## La logique du chapitre

**Besoin → contexte → services attendus → exigences mesurables → solutions techniques → structure et flux → validation**

## Besoin et produit

- **Besoin** : nécessité ou désir d'un utilisateur qui justifie l'existence d'un produit.
- **Produit** : objet, ouvrage ou service fourni pour satisfaire ce besoin.
- **Système** : ensemble organisé de composants qui coopèrent pour rendre un service.

| Besoin | Expression | Effet principal |
|---|---|---|
| basique | généralement non exprimé car évident | son absence crée une forte insatisfaction |
| exprimé | formulé consciemment | la satisfaction suit le niveau de performance |
| latent | non formulé et parfois inconscient | sa satisfaction surprend et différencie le produit |

## Du contexte aux exigences

| Outil | Question traitée | Contenu |
|---|---|---|
| diagramme de contexte | Avec quoi le système interagit-il ? | acteurs, milieu et systèmes extérieurs |
| diagramme de cas d'utilisation | Quels services doit-il rendre ? | acteurs et comportements attendus |
| diagramme d'exigences | Quelles obligations doit-il respecter ? | exigences et relations entre elles |
| cahier des charges | Comment vérifier la satisfaction du besoin ? | fonctions, critères, niveaux et flexibilités |

!!! warning "Principe essentiel"
    Un cas d'utilisation décrit **ce que** le produit doit faire, sans préciser **comment** la solution technique le réalisera.

## Rendre une exigence vérifiable

Pour chaque fonction, préciser :

1. le **critère d'appréciation**, grandeur observée ou mesurée ;
2. le **niveau**, valeur attendue ;
3. la **flexibilité**, marge de négociation ou tolérance.

!!! example "Exemple"
    Fonction : permettre au véhicule de se déplacer.

    Critère : vitesse de déplacement.

    Niveau : $60\ \text{km/h}$ avec le véhicule chargé.

    Flexibilité : F1.

## Classes de flexibilité

| Classe | Marge de négociation |
|---|---|
| F0 | aucune : exigence impérative |
| F1 | très faible : modification avec forte contrepartie |
| F2 | faible : exigence réexaminable |
| F3 | large : ajustement possible pour améliorer la solution globale |

**Au minimum** fixe une borne basse ; **au maximum** fixe une borne haute.

## Innovation

| Amélioration continue | Innovation de rupture |
|---|---|
| perfectionne progressivement l'existant | transforme les usages ou le marché |
| conserve la logique dominante | peut remplacer une technologie dominante |
| réduit défauts, coût ou consommation | introduit une nouvelle proposition de valeur |

Une rupture peut résulter d'un nouvel usage, d'un prix devenu accessible ou d'une combinaison originale de technologies existantes.

## Structure et flux

| Diagramme | Ce qu'il montre |
|---|---|
| définition de blocs | composition hiérarchique : système, sous-systèmes et composants |
| blocs internes | connexions et circulation des flux à l'intérieur du système |

Flux à identifier :

- **information** : consignes, mesures, ordres, messages ;
- **énergie** : électrique, mécanique, hydraulique, pneumatique ;
- **matière** : objet ou substance sur lequel agit le système.

## Chaîne d'information

**Grandeur ou consigne → Acquérir → Traiter → Communiquer → ordre ou message**

| Fonction | Exemples |
|---|---|
| acquérir | capteur TOR, analogique ou numérique, interface homme-machine |
| traiter | automate, ordinateur, microcontrôleur, logiciel |
| communiquer | afficheur, interface, liaison série, Ethernet, bus |

## Chaîne d'énergie

**Source → Alimenter → Distribuer → Convertir → Transmettre → action**

| Fonction | Exemples |
|---|---|
| alimenter | réseau, pile, batterie, accumulateur |
| distribuer | interrupteur, relais, contacteur, variateur, distributeur |
| convertir | moteur, vérin, machine hydraulique ou pneumatique |
| transmettre | engrenages, courroie, vis-écrou, accouplement, guidage |

La chaîne d'information envoie des **ordres** à la chaîne d'énergie. Des capteurs peuvent mesurer le résultat de l'action pour former une boucle de commande.

## Exemple du sécateur électrique

| Élément | Fonction ou chaîne |
|---|---|
| gâchette et capteur | acquérir une consigne |
| carte électronique | traiter l'information et commander |
| batteries | alimenter |
| électronique de puissance | distribuer |
| moteur électrique | convertir l'énergie en mouvement |
| réducteur et vis-écrou | adapter et transmettre le mouvement |
| mécanisme et lames | réaliser l'action de coupe |

## Choisir un diagramme SysML

| Besoin de représentation | Diagramme adapté |
|---|---|
| formaliser les obligations | exigences |
| montrer les services aux acteurs | cas d'utilisation |
| représenter un enchaînement d'actions | activité |
| représenter des échanges chronologiques | séquence |
| représenter les modes et transitions | états |
| décomposer le système | définition de blocs |
| représenter connexions et flux | blocs internes |
| relier des grandeurs et équations | paramétrique |
| organiser le modèle | paquetage |

## Méthode d'analyse d'un système

1. Formuler le besoin sans citer prématurément une solution.
2. Identifier les acteurs et éléments extérieurs.
3. Décrire les services par des verbes à l'infinitif.
4. Associer à chaque fonction un critère, un niveau et une flexibilité.
5. Décomposer le produit en blocs et repérer leurs échanges.
6. Séparer la chaîne d'information de la chaîne d'énergie.
7. Vérifier que les solutions techniques permettent de respecter les exigences.

## Pièges à éviter

- Ne pas confondre besoin et solution technique.
- Ne pas placer un composant dans un diagramme de cas d'utilisation.
- Un niveau sans critère mesurable ne permet pas de vérifier une exigence.
- **Acquérir** concerne les informations ; **alimenter** concerne l'énergie.
- **Convertir** change la nature de l'énergie ; **transmettre** adapte ou conduit le mouvement.
- Les diagrammes SysML sont complémentaires : aucun ne décrit seul tout le système.