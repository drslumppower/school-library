---
titre: Fiche de révision - Tondeuse Robomow RL500
matiere: Sciences de l'ingénieur
niveau: Première - spécialité
partie: Étude de cas - Robomow RL500
type: fiche de révision
statut: à vérifier
---

# Fiche de révision - Robomow RL500

## Carte d'identité

| Question | Réponse courte |
|---|---|
| À qui rend-elle service ? | à l'utilisateur |
| Sur quoi agit-elle ? | sur l'herbe de la parcelle |
| Dans quel but ? | tondre automatiquement et gagner du temps |
| Comment connaît-elle la zone ? | grâce à un fil périphérique détecté par quatre capteurs |
| Comment tourne-t-elle ? | en faisant varier la vitesse de ses deux roues motrices |

## Fonctions et composants

| Fonction | Composant |
|---|---|
| acquérir | capteurs de fil, de choc, de rotation, de soulèvement et boussole |
| traiter | carte électronique |
| communiquer | afficheur, voyant et avertisseur sonore |
| alimenter | batterie $24\ \mathrm{V}$ |
| distribuer | carte électronique de commande |
| convertir | moteurs électriques |
| transmettre | réducteurs à engrenages et axes |
| agir | roues motrices et lames |

## Les chaînes à réciter

### Information

**Acquérir → Traiter → Communiquer**

### Puissance

**Alimenter → Distribuer → Convertir → Transmettre → Agir**

## Capteur, actionneur, effecteur

- **Capteur** : transforme une grandeur physique en information exploitable.
- **Actionneur** : convertit l'énergie reçue en mouvement.
- **Effecteur** : réalise directement l'action sur l'environnement.

!!! example "Application"
    Le capteur de choc informe la carte. La carte commande le moteur. Le moteur fait tourner la roue. La roue déplace la tondeuse.

## Trois types de flux

| Type | Exemple |
|---|---|
| information | détection d'un obstacle |
| énergie | électricité fournie par la batterie |
| matière | herbe avant et après la coupe |

## Exigences à mémoriser

- largeur de coupe : $53\ \mathrm{cm}$ ;
- hauteur de tonte : $20$ à $57\ \mathrm{mm}$ ;
- vitesse : $30\ \mathrm{m/min}$ ;
- surface : $600\ \mathrm{m^2}$ maximum ;
- pente : $15°$ maximum ;
- puissance de tonte : $450\ \mathrm{W}$ maximum ;
- arrêt des lames en moins de $1\ \mathrm{s}$ en cas d'incident.

## Scénario de fonctionnement

1. S'orienter vers le nord.
2. Rechercher le fil périphérique.
3. Suivre le bord de la parcelle.
4. Tondre en zigzag.
5. Détecter une limite ou un obstacle.
6. Pivoter et repartir.

## Quel diagramme choisir ?

| Question | Diagramme SysML |
|---|---|
| Quels services sont rendus ? | cas d'utilisation |
| Quelles performances faut-il respecter ? | exigences |
| De quoi le système est-il composé ? | définition de blocs |
| Comment les composants échangent-ils ? | blocs internes |

## Pièges à éviter

- Une exigence doit avoir un critère et un niveau mesurable.
- Un capteur ne fournit pas la puissance aux roues.
- Le moteur n'est pas l'effecteur final.
- Le diagramme de définition de blocs montre la composition ; le diagramme de blocs internes montre les échanges.