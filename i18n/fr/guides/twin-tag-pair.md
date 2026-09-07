---
sourceHash: bc1109bce033235ce112674dbf1775284562458c70d4ec2f6514e1bf5a144bd5
sourcePath: docs/guides/twin-tag-pair.md
---

# Quand les deux puces d'une bobine se lisent comme deux bobines

Vous avez tagué une bobine avec une puce sur chaque face, et votre inventaire
affiche maintenant **deux** entrées au lieu d'une. Chaque puce fonctionne ;
chacune ouvre sa propre bobine. Le poids que vous corrigez sur l'une
n'apparaît jamais sur l'autre.

Rien n'est cassé. Les deux puces n'ont quasi certainement jamais été une paire.

## Le test qui tranche

Deux puces forment une paire parce qu'elles portent le **même Twin Tag ID** —
une valeur inscrite au moment de l'écriture, partagée uniquement par des puces
écrites dans la même session. Lisez les deux puces et comparez cette valeur :
c'est tout le diagnostic. Tiger Studio l'affiche, comme n'importe quel lecteur
qui décode la charge utile.

La règle complète, y compris ce qui doit concorder par ailleurs et pourquoi
l'horodatage seul ne prouve rien, est sur
[la puce TigerTag](../concepts/tigertag-chip.md).

## Valeurs différentes : ce n'était jamais une paire

C'est la cause ordinaire, et elle a une seule origine : **les deux puces ont
été écrites en deux passes séparées**. Une seconde passe a lieu une seconde
plus tard ou un jour plus tard, donc elle inscrit un Twin Tag ID différent, et
plus rien ne lie les deux puces à partir de cet instant. Tous les outils en
aval ont raison de compter deux bobines.

Il n'existe pas de réparation, seulement une réécriture. Une paire se fabrique
au moment de l'écriture ou pas du tout.

## Les réécrire en une seule paire

Effacez les deux puces, puis écrivez-les ensemble dans une seule session :

| | Comment la paire est écrite | Idéal pour |
|---|---|---|
| **Téléphone** — [Tiger NFC Connect](../products/tigertag-connect.md) | *Dual NFC* : un formulaire, puis puce 1/2 et 2/2 dans la même session | une bobine, sans matériel |
| **Bureau, deux lecteurs** — [TigerPOD](../products/tigerpod.md) | les deux puces d'un coup, en une passe | une étagère, un lot |
| **Bureau, un seul lecteur** | impossible en une passe — c'est ainsi que le problème a été créé | — |

La procédure sur téléphone, y compris la règle voulant que la puce scannée en
premier soit celle que l'application attend en 1/2, est dans
[votre première bobine intelligente](../tutorials/first-smart-spool.md).

Le cas du lecteur unique est la raison pour laquelle le
[TigerPOD](../products/tigerpod.md) tient deux lecteurs face à face : une
passe, un horodatage, une paire.

## Même valeur, et pourtant deux entrées

Plus rare, et à signaler. Le Twin Tag ID est nécessaire mais pas suffisant —
les deux puces doivent aussi décrire la même bobine, champ par champ : marque,
matière, les trois couleurs, les deux aspects. Comparez-les ensuite.

Si tous les champs concordent et que votre inventaire coupe malgré tout la
bobine en deux, c'est un bug et non une erreur d'écriture. Dites-le sur le
[Discord](https://discord.gg/3Qv5TSqnJH) avec les relevés des deux puces.

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [La puce TigerTag](../concepts/tigertag-chip.md), [Votre première bobine intelligente](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md)
