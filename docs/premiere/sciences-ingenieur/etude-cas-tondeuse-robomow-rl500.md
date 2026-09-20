---
titre: Étude de cas - Tondeuse Robomow RL500
matiere: Sciences de l'ingénieur
niveau: Première - spécialité
type: cours
partie: Étude de cas - Robomow RL500
source: SI 4-1 (1 à 11).heic
date_import: 2026-09-20
statut: à vérifier
mots_cles:
  - Robomow RL500
  - besoin
  - exigences
  - capteurs
  - actionneurs
  - chaîne d'information
  - chaîne de puissance
  - SysML
---

# Étude de cas - Tondeuse Robomow RL500

Cette étude applique l'analyse fonctionnelle et structurelle à une tondeuse robotisée. L'objectif n'est pas de retenir chaque détail du produit, mais de savoir relier un **besoin**, des **exigences**, des **fonctions** et des **composants**.

## 1. Le besoin

La Robomow RL500 tond une pelouse avec peu d'intervention humaine.

- **À qui rend-elle service ?** À l'utilisateur qui entretient la pelouse.
- **Sur quoi agit-elle ?** Sur l'herbe de la parcelle.
- **Dans quel but ?** Tondre automatiquement pour économiser du temps et réduire une tâche répétitive.

La fonction principale peut donc s'écrire :

> **Tondre automatiquement l'herbe d'une parcelle délimitée.**

## 2. Les fonctions principales

Pour remplir sa mission, la tondeuse doit :

1. couper l'herbe ;
2. se déplacer de manière autonome ;
3. détecter les limites de la parcelle ;
4. détecter les obstacles ;
5. s'orienter ;
6. informer l'utilisateur ;
7. fonctionner en sécurité.

Un fil périphérique parcouru par un courant délimite la zone. Quatre détecteurs embarqués repèrent ce signal. Des capteurs de choc détectent les obstacles rigides et un capteur sous la roue avant arrête les moteurs si la tondeuse est soulevée.

## 3. Quelques exigences mesurables

Une exigence indique ce que le système doit respecter. Le **critère** précise ce que l'on mesure et le **niveau** donne la valeur attendue.

| Critère | Niveau attendu |
|---|---|
| largeur de coupe | $53\ \mathrm{cm}$ |
| hauteur de tonte | de $20$ à $57\ \mathrm{mm}$ |
| vitesse de déplacement | $30\ \mathrm{m/min}$ |
| surface de pelouse | $600\ \mathrm{m^2}$ maximum |
| pente du terrain | $15°$ maximum |
| puissance maximale de tonte | $450\ \mathrm{W}$ |
| alimentation | batterie $24\ \mathrm{V}$, $17\ \mathrm{Ah}$ |
| fréquence de rotation des lames | $5\,800\ \mathrm{tr/min}$ |
| indice de protection | IP55 minimum |
| arrêt des lames en cas d'incident | moins de $1\ \mathrm{s}$ |
| niveau sonore | $90\ \mathrm{dB}$ maximum |

!!! tip "Méthode"
    Pour lire un cahier des charges, associer toujours **exigence → critère → niveau**. Une formule vague comme « couper correctement » n'est pas vérifiable ; « largeur de coupe : $53\ \mathrm{cm}$ » l'est.

## 4. La stratégie de tonte simplifiée

Le fonctionnement automatique suit quatre étapes :

1. **S'orienter** : la boussole électronique indique le nord.
2. **Trouver le fil** : la tondeuse avance jusqu'à la limite de la parcelle.
3. **Suivre le bord**, puis parcourir la zone en zigzag.
4. **Réagir** : lorsqu'une limite ou un obstacle est détecté, la tondeuse pivote et repart.

Les deux roues arrière sont commandées séparément. Une différence de vitesse entre les roues permet de tourner.

## 5. Structure du système

### Les composants essentiels

| Famille | Composants | Rôle |
|---|---|---|
| capteurs | détecteurs du fil, capteurs de choc, boussole, capteurs de rotation, capteur de soulèvement | acquérir des informations |
| commande | carte électronique | traiter les informations et donner les ordres |
| interface | boutons, afficheur, voyant, avertisseur sonore | échanger avec l'utilisateur |
| alimentation | batterie | fournir l'énergie électrique |
| actionneurs | moteurs de propulsion et moteurs de coupe | convertir l'énergie électrique en mouvement |
| transmission | réducteurs à engrenages | adapter et transmettre le mouvement aux roues |
| effecteurs | roues et lames | déplacer la tondeuse et couper l'herbe |

### Actionneur ou effecteur ?

- Un **actionneur** transforme une énergie en action mécanique : ici, un moteur.
- Un **effecteur** agit directement sur l'environnement : ici, une roue ou une lame.

## 6. Les deux chaînes fonctionnelles

### Chaîne d'information

**Acquérir → Traiter → Communiquer**

- **Acquérir** : les capteurs détectent le fil, les chocs, l'orientation, la rotation des roues ou le soulèvement.
- **Traiter** : la carte électronique décide du mouvement à effectuer.
- **Communiquer** : le voyant, l'afficheur et l'avertisseur sonore informent l'utilisateur.

### Chaîne de puissance

**Alimenter → Distribuer → Convertir → Transmettre → Agir**

- **Alimenter** : batterie.
- **Distribuer** : carte électronique de commande.
- **Convertir** : moteurs électriques.
- **Transmettre** : réducteurs et axes.
- **Agir** : roues motrices et lames.

La carte de commande intervient donc dans les deux chaînes : elle **traite l'information** et **distribue l'énergie** aux moteurs.

## 7. Les trois flux

| Flux | Exemples dans la tondeuse |
|---|---|
| information | ordre de départ, choc détecté, position des roues, état de la batterie |
| énergie | énergie électrique de la batterie, puis énergie mécanique des moteurs |
| matière | herbe non coupée, puis herbe coupée |

## 8. Lire les diagrammes SysML

- Le **diagramme de cas d'utilisation** montre les services rendus et les acteurs extérieurs.
- Le **diagramme d'exigences** traduit le besoin en performances vérifiables.
- Le **diagramme de définition de blocs** inventorie les composants et les sous-systèmes.
- Le **diagramme de blocs internes** montre leurs connexions et les flux échangés.

## À retenir

- Le besoin doit être formulé du point de vue de l'utilisateur.
- Une exigence devient vérifiable grâce à un critère et un niveau.
- Les capteurs acquièrent, la carte traite, les moteurs convertissent et les roues ou lames agissent.
- La chaîne d'information commande la chaîne de puissance.
- Un même composant peut participer à plusieurs fonctions.
- Le SysML fournit plusieurs vues complémentaires d'un même système.

!!! note "Validation"
    Cette synthèse volontairement allégée repose sur les onze pages photographiées de l'étude. Elle doit être comparée au document original avant de passer son statut à « vérifié ».