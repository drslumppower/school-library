---
titre: Fiche de révision - Attacheur AP25
matiere: Sciences de l'ingénieur
niveau: Première - spécialité
type: fiche de révision
volet: 3
statut: à vérifier
---

# Fiche de révision - AP25

## Besoin

| Question | Réponse |
|---|---|
| À qui rend-il service ? | au viticulteur |
| Sur quoi agit-il ? | sur le sarment, le palissage et le lien |
| Dans quel but ? | attacher rapidement les sarments au palissage et réduire la pénibilité |

Services complémentaires : régler le serrage, recharger les batteries, recharger la bobine et accepter plusieurs types de liens.

## Exigences à retenir

| Critère | Niveau |
|---|---|
| protection | IP55 |
| température | $-5$ à $40\,°\text{C}$ |
| serrage | 3 à 9 tours de torsade |
| masse en main | $1\ \text{kg}$ maximum |
| batteries à la ceinture | $2\ \text{kg}$ maximum |
| diamètre du sarment | $20\ \text{mm}$ maximum |
| diamètre du fil de palissage | $2\ \text{mm}$ maximum |
| autonomie | environ 8 000 attaches par journée |
| sécurité mécanique | mécanisme fermé |

## Architecture

Un seul moteur entraîne deux sous-mécanismes grâce à deux roues libres :

- **sous-mécanisme 1** : entourer, avancer et couper le lien ;
- **sous-mécanisme 2** : torsader le lien.

Une roue libre transmet la puissance dans un seul sens, comme une **diode mécanique**.

## Fonctions et composants

| Fonction | Composants |
|---|---|
| acquérir | gâchette, réglage, capteurs de position |
| traiter | carte électronique |
| communiquer | commandes du pré-actionneur, information utilisateur |
| alimenter | batteries |
| distribuer | pré-actionneur, électronique de puissance |
| convertir | moteur électrique |
| transmettre | réducteurs, roues libres, came, vis-écrou |
| agir | crochet, cisaille, torsadeur |

## Les trois flux

- **Information** : consigne, réglage, position des roues libres, ordres moteur.
- **Énergie** : électrique dans les batteries, puis mécanique après le moteur.
- **Matière** : lien avancé, coupé et torsadé.

## Cycle d'attache

**Appui gâchette → fermeture du crochet → avance du lien → coupe → torsadage → ouverture du crochet → préparation du cycle suivant**

Les capteurs valident les positions avant de poursuivre la séquence.

## Diagramme à choisir

| Information recherchée | Diagramme SysML |
|---|---|
| services rendus | cas d'utilisation |
| éléments extérieurs | contexte |
| performances imposées | exigences |
| liste des composants | définition de blocs |
| connexions et flux | blocs internes |
| ordre des actions | séquence |

## Réponses directes au TD

1. Le système rend service au viticulteur et agit sur les sarments et le palissage.
2. Il mécanise l'attache pour gagner du temps et réduire la pénibilité.
3. Il doit aussi régler le serrage et permettre le rechargement des batteries et du lien.
4. Son environnement comprend l'utilisateur, le climat, les liens, les sarments et le palissage.
5. Le confort et la sécurité portent notamment sur les masses maximales et les protections mécanique et électrique.
6. L'adaptation porte sur la température, les diamètres acceptés et l'autonomie.
7. Il accepte les types de liens prévus : bio, papier, plastique, standard et inoxydable.
8. Le cahier des charges associe chaque exigence à un critère et à un niveau mesurable.
9. Acquérir : capteurs ; traiter : carte électronique ; convertir : moteur ; alimenter : batteries.
10. Le pré-actionneur distribue l'énergie au moteur.
11. Les flux sont l'information, l'énergie et la matière.
12. Chaque composant doit être associé à sa fonction générique.
13. La décomposition fonctionnelle relie les deux chaînes aux composants réels de l'AP25.

## Pièges à éviter

- L'AP25 est **automatique**, mais il est déclenché par l'utilisateur.
- Le pré-actionneur ne convertit pas l'énergie : il la **distribue**.
- Le lien est un flux de **matière**, pas un flux d'énergie.
- Le diagramme de séquence décrit le temps ; le diagramme de blocs internes décrit la structure et les échanges.