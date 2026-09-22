---
titre: Information binaire et protocole de communication
matiere: Technologie
niveau: Quatrième
type: cours
chapitre: Information et communication
source: techno (1).heic
date_import: 2026-09-22
statut: à vérifier
mots_cles:
  - bit
  - binaire
  - codage
  - protocole
  - information
---

# Information binaire et protocole de communication

## Objectifs

À la fin de ce chapitre, il faut savoir :

- définir un bit et un nombre binaire ;
- convertir un nombre binaire sur 4 bits en nombre décimal ;
- coder un nombre décimal compris entre 0 et 15 ;
- expliquer comment une table de correspondance code des caractères ;
- distinguer donnée, information et protocole de communication.

## 1. Le bit, unité élémentaire

Les systèmes numériques représentent les données à l'aide de deux états, notés **0** et **1**. Un chiffre binaire est appelé un **bit**.

Selon le système étudié, ces deux valeurs peuvent correspondre à :

- absence ou présence d'un signal ;
- interrupteur ouvert ou fermé ;
- tension basse ou tension haute ;
- faux ou vrai.

Un bit seul permet donc de représenter deux états. Plusieurs bits associés permettent de représenter davantage de valeurs.

## 2. Lire un nombre binaire sur 4 bits

Dans un groupe de 4 bits, chaque position possède une valeur :

| Position | 4e bit | 3e bit | 2e bit | 1er bit |
|---|---:|---:|---:|---:|
| Valeur | 8 | 4 | 2 | 1 |

Pour convertir un nombre binaire en décimal, on additionne les valeurs des positions contenant un 1.

### Exemple : $1011_2$

$$
1011_2=1\times8+0\times4+1\times2+1\times1=11
$$

### Exemple : $0110_2$

$$
0110_2=0\times8+1\times4+1\times2+0\times1=6
$$

Avec 4 bits, la plus petite valeur est $0000_2=0$ et la plus grande est $1111_2=15$. On peut donc représenter **16 valeurs différentes**.

## 3. Écrire un nombre en binaire

Pour coder un nombre entre 0 et 15 :

1. chercher si l'on peut utiliser la valeur 8 ;
2. poursuivre avec 4, puis 2, puis 1 ;
3. écrire 1 lorsque la valeur est utilisée et 0 lorsqu'elle ne l'est pas ;
4. vérifier la somme.

### Exemple : coder 13

$$
13=8+4+1
$$

On utilise 8, 4 et 1, mais pas 2 :

$$
13=1101_2
$$

## 4. Coder des lettres

Un nombre binaire ne représente pas naturellement une lettre. Il faut décider d'une **table de correspondance** commune.

Par exemple, un code peut décider que :

| Nombre | Caractère |
|---:|---|
| 1 | A |
| 2 | E |
| 3 | I |
| 4 | O |

Le groupe binaire $0011_2$ vaut 3. Avec cette table, il représente donc la lettre **I**.

Une autre table pourrait attribuer un caractère différent au nombre 3. Le destinataire doit donc connaître les mêmes règles que l'émetteur.

## 5. Qu'est-ce qu'un protocole ?

Un **protocole de communication** est un ensemble de règles partagées qui permet à des systèmes d'échanger et d'interpréter correctement des données.

Un protocole précise par exemple :

- la forme des messages ;
- le sens des codes utilisés ;
- l'ordre d'envoi des données ;
- le début et la fin d'un message ;
- la manière de détecter une erreur.

Sans protocole commun, une suite de bits peut être reçue mais mal comprise.

## 6. Donnée et information

- Une **donnée** est une valeur codée, par exemple $1011_2$.
- Une **information** est le sens donné à cette valeur grâce à un contexte ou à une règle.

Ainsi, $1011_2$ représente le nombre 11 en binaire. Avec une table particulière, 11 peut aussi désigner une lettre, une commande ou un état.

## 7. Méthode pour décoder un message

1. séparer la suite en groupes de bits de longueur connue ;
2. convertir chaque groupe en nombre décimal ;
3. consulter la table de correspondance ;
4. assembler les caractères obtenus ;
5. vérifier que le résultat est cohérent.

## À retenir

- Un bit prend la valeur 0 ou 1.
- Sur 4 bits, les positions valent 8, 4, 2 et 1.
- Un groupe de 4 bits code une valeur de 0 à 15.
- Pour décoder, on additionne les valeurs des positions marquées par 1.
- Une table de correspondance donne un sens aux nombres.
- Un protocole fournit les règles communes nécessaires à la communication.

!!! note "Validation"
    Ce cours a été reformulé à partir d'une activité photographiée. Il généralise les notions de binaire et de protocole sans reproduire le message à décoder et doit être comparé au cours original avant validation.