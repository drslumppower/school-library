---
titre: Répondre à un besoin - Exigences et structure d'un système
matiere: Sciences de l'ingénieur
niveau: Première - spécialité
type: cours
partie: théorie
statut: à vérifier
mots_cles:
  - besoin
  - produit
  - cahier des charges
  - exigence
  - innovation
  - chaîne d'information
  - chaîne d'énergie
  - SysML
---

# Répondre à un besoin

Cette partie théorique approfondit l'analyse d'un système : comment identifier correctement le besoin, le traduire en exigences mesurables, choisir des solutions techniques et représenter l'organisation du produit.

## 1. Du besoin au produit

Un **besoin** est une nécessité ou un désir éprouvé par un utilisateur. Il justifie l'existence d'un produit.

Un **produit** est ce qui est fourni à un utilisateur pour répondre à son besoin. Il peut être un objet, un ouvrage ou un service.

La première étape d'une démarche de conception ou de reconception consiste à identifier précisément le besoin. Une mauvaise analyse peut conduire à un produit techniquement réussi, mais inutile, dangereux ou inadapté.

!!! example "Le chargeur de batteries"
    Le service principal d'un chargeur est de recharger des batteries. Si l'utilisateur inverse les polarités lors du branchement, un court-circuit peut se produire. Le produit doit donc également détecter ou empêcher l'inversion des polarités.

    Le besoin ne se limite pas à « recharger » : la sécurité d'utilisation fait partie des exigences à satisfaire.

## 2. Les trois types de besoins

| Type de besoin | Caractéristique | Effet sur la satisfaction |
|---|---|---|
| **basique** | rarement exprimé car il paraît évident | son absence provoque une forte insatisfaction ; sa présence est simplement normale |
| **exprimé** | formulé consciemment par le client | plus la performance augmente, plus la satisfaction progresse |
| **latent** | non formulé car l'utilisateur n'en a pas encore conscience | sa satisfaction crée un effet de surprise et peut différencier fortement le produit |

Une entreprise peut « créer le besoin » au sens commercial lorsqu'elle révèle un besoin latent et propose une solution nouvelle avant ses concurrents.

## 3. Identifier le contexte du produit

Un système interagit avec des personnes, d'autres systèmes et son environnement pendant tout son cycle de vie.

Le **diagramme de contexte** délimite le système étudié et recense les éléments extérieurs qui interagissent avec lui : utilisateurs, milieu physique, systèmes voisins, maintenance, réglementation ou infrastructure.

Il peut être nécessaire de produire plusieurs diagrammes de contexte selon la phase étudiée : commercialisation, utilisation, maintenance ou fin de vie.

## 4. Décrire les services attendus

Le **diagramme de cas d'utilisation** décrit les services que le système doit rendre à ses acteurs.

Un **acteur** est une personne ou un élément extérieur qui échange avec le système. Un **cas d'utilisation** exprime un comportement attendu du point de vue de cet acteur.

!!! example "Véhicule particulier"
    Le conducteur attend principalement du véhicule qu'il lui permette de se déplacer. Ce service général peut inclure accélérer, freiner et tourner. D'autres services peuvent être transporter une charge ou plusieurs utilisateurs.

Le diagramme décrit **ce que le système doit faire**, sans imposer **comment il le réalisera**. Un cas d'utilisation doit être relié à au moins un acteur identifié dans le diagramme de contexte.

## 5. Traduire le besoin en exigences

Le **cahier des charges** rassemble les fonctions attendues, les contraintes et les performances que le produit doit respecter.

Une exigence peut être représentée dans un **diagramme d'exigences** SysML. Pour être vérifiable, elle doit être aussi précise et mesurable que possible.

### Critère, niveau et flexibilité

Chaque fonction est précisée par :

- un **critère d'appréciation** : grandeur permettant d'évaluer la fonction ;
- un **niveau** : valeur attendue pour ce critère ;
- une **flexibilité** : marge de négociation ou tolérance associée au niveau.

| Élément | Exemple pour un véhicule |
|---|---|
| fonction | permettre de se déplacer |
| critère | vitesse de déplacement |
| niveau | $60\ \text{km/h}$ avec le véhicule chargé |
| flexibilité | F1 |

### Classes de flexibilité

| Classe | Signification |
|---|---|
| **F0** | flexibilité nulle : exigence impérative et non négociable |
| **F1** | flexibilité très faible : modification possible seulement avec une forte contrepartie |
| **F2** | flexibilité faible : exigence réexaminable |
| **F3** | flexibilité large : niveau ajustable pour améliorer la compétitivité globale |

Les formulations **au minimum** et **au maximum** indiquent directement le sens de la limite acceptable.

!!! example "La Citroën 2 CV"
    La directive attribuée à Pierre-Jules Boulanger illustre le passage d'un besoin à des exigences : transporter des personnes et une charge, circuler sur différents chemins, atteindre une vitesse donnée, limiter la consommation et le prix, rester simple à conduire et confortable.

## 6. Apporter une solution innovante

### Innovation continue

Une **innovation de continuité**, ou amélioration continue, perfectionne progressivement un produit ou un service existant sans transformer immédiatement son marché.

### Innovation de rupture

Une **innovation de rupture** introduit une solution qui crée un nouveau marché ou finit par remplacer une technologie dominante.

La rupture ne dépend pas seulement d'une invention spectaculaire. Elle peut venir d'une nouvelle organisation, d'un coût devenu accessible, d'un nouvel usage ou d'une combinaison originale de technologies existantes.

Les documents citent notamment comme exemples historiques ou prospectifs :

- l'automobile produite en série ;
- le MP3 face aux cassettes et aux CD ;
- la photographie numérique ;
- le commerce en ligne et la vidéo à la demande ;
- les caméras à $360°$ et la reconnaissance faciale ;
- les camions autonomes, le solaire thermophotovoltaïque et certaines thérapies géniques.

!!! note "Prendre du recul"
    Les dates de disponibilité annoncées dans un document prospectif reflètent le moment où il a été écrit. Elles doivent être réévaluées lorsqu'on étudie ces technologies plusieurs années plus tard.

## 7. Décomposer un système en solutions techniques

Un produit est un ensemble de solutions techniques organisées pour réaliser les fonctions attendues.

Le **diagramme de définition de blocs** décrit la composition hiérarchique du système : système, sous-systèmes, blocs et composants.

Le **diagramme de blocs internes** montre l'organisation à l'intérieur du système et la circulation des flux entre les blocs.

Trois familles de flux peuvent circuler :

- l'**information** : consignes, mesures, ordres et messages ;
- l'**énergie** : électrique, mécanique, hydraulique ou pneumatique ;
- la **matière** : objet ou substance transformée, transportée ou stockée.

## 8. Chaîne d'information

La chaîne d'information reçoit des données, les transforme en informations utilisables, prend des décisions et transmet des ordres ou des messages.

| Fonction | Rôle | Exemples de composants |
|---|---|---|
| **Acquérir** | capter une grandeur physique ou une consigne | capteur TOR, analogique ou numérique, interface homme-machine, système d'acquisition |
| **Traiter** | interpréter les données et élaborer les commandes | automate, ordinateur, microcontrôleur, circuit logique, logiciel |
| **Communiquer** | transmettre les ordres et informer l'utilisateur ou un autre système | afficheur, interface homme-machine, liaison série ou parallèle, Ethernet, bus |

Un capteur **TOR** fournit une information « tout ou rien », donc généralement deux états. Un capteur analogique produit une grandeur continue ; un capteur numérique fournit une information codée.

## 9. Chaîne d'énergie

La chaîne d'énergie rend l'énergie disponible et l'adapte afin de produire l'action attendue.

| Fonction | Rôle | Exemples de composants |
|---|---|---|
| **Alimenter** | fournir ou stocker l'énergie | réseau, pile, batterie, accumulateur |
| **Distribuer** | commander et orienter l'énergie | interrupteur, contacteur, relais, variateur, distributeur |
| **Convertir** | transformer l'énergie en énergie mécanique | moteur électrique, vérin, machine hydraulique ou pneumatique |
| **Transmettre** | adapter et conduire le mouvement jusqu'à l'effecteur | engrenages, poulie-courroie, vis-écrou, accouplement, embrayage, guidage |

!!! example "Grille-pain"
    L'énergie électrique est alimentée par le réseau, distribuée par l'interrupteur, convertie en énergie thermique par la résistance puis transmise au pain par dissipation thermique.

## 10. Interaction entre les deux chaînes

La chaîne d'information et la chaîne d'énergie coopèrent :

1. l'utilisateur donne une consigne ;
2. un capteur ou une interface l'acquiert ;
3. l'unité de traitement décide de l'action ;
4. un ordre est envoyé à la chaîne d'énergie ;
5. l'énergie est distribuée, convertie puis transmise ;
6. l'effecteur agit sur la matière d'œuvre ou l'environnement ;
7. des capteurs peuvent mesurer le résultat et fermer la boucle.

!!! example "Sécateur électrique"
    La gâchette et ses capteurs appartiennent à la chaîne d'information. La carte électronique traite les informations. Les batteries alimentent le système ; le moteur convertit l'énergie électrique ; le réducteur et le mécanisme vis-écrou transmettent le mouvement jusqu'aux lames.

## 11. Ingénierie système et SysML

L'**ingénierie système** est une démarche interdisciplinaire et collaborative destinée à concevoir et piloter le développement de systèmes complexes. Elle décompose le système en sous-systèmes et blocs, tout en conservant une vision globale des besoins, des interfaces et de la validation.

Le **SysML** (*Systems Modeling Language*) est un langage graphique commun aux différents métiers. Il rassemble dans un même modèle les besoins, exigences, comportements, structures, paramètres et interfaces du système.

### Principaux diagrammes SysML étudiés

| Famille | Diagramme | Utilité principale |
|---|---|---|
| exigences | diagramme d'exigences | formaliser et relier les exigences |
| comportement | cas d'utilisation | décrire les services rendus aux acteurs |
| comportement | activité | représenter l'enchaînement d'actions |
| comportement | séquence | représenter les échanges dans le temps |
| comportement | états | représenter les états et transitions |
| structure | définition de blocs | décrire la composition du système |
| structure | blocs internes | montrer les connexions et les flux internes |
| structure | paramétrique | relier les paramètres et contraintes de calcul |
| structure | paquetage | organiser les éléments du modèle |

Chaque diagramme répond à une question différente. Leur cohérence permet d'éviter les oublis et les contradictions entre les métiers.

## À retenir

- Le besoin justifie l'existence du produit.
- Le contexte identifie les acteurs et éléments extérieurs ; les cas d'utilisation décrivent les services attendus.
- Le cahier des charges transforme les attentes en exigences vérifiables grâce aux critères, niveaux et flexibilités.
- Une solution technique se décrit par sa structure et par les flux d'information, d'énergie et de matière.
- La chaîne d'information suit **acquérir, traiter, communiquer**.
- La chaîne d'énergie suit **alimenter, distribuer, convertir, transmettre**.
- SysML fournit un langage commun pour décrire exigences, comportements et structure.

!!! note "Validation"
    Ce cours a été synthétisé à partir des pages photographiées du document « SI 1-1 ». Il doit être comparé au document original complet avant de passer son statut à « vérifié ».