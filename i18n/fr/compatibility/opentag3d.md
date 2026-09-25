---
sourceHash: 270546315ea7c91d5b488c74c5d0b80f6fe602360f21b18ad9c15859b6ef11ca
sourcePath: docs/compatibility/opentag3d.md
---

# OpenTag3D

## Ce que c'est

**[OpenTag3D](https://github.com/GooborgStudios/OpenTag3D)** est un standard de
tag ouvert, porté par la communauté, pour les bobines de filament : une charge
NDEF dimensionnée pour tenir sur une NTAG215, sans chiffrement, spécification
publiée, liste de soutiens ouverte. Comme TigerTag, il existe parce que
l'industrie se remplissait d'un format propriétaire par marque d'imprimante, et
il pose explicitement qu'un tag doit fonctionner **entièrement hors ligne**.
Par l'esprit, c'est un proche cousin.

Les deux standards définissent aussi une couche en ligne, et tous deux
l'appellent **API Web** — c'est là que les deux conceptions divergent,
délibérément et en sens inverse.

## Deux conceptions, côte à côte

| Aspect | TigerTag | OpenTag3D |
|---|---|---|
| Ce que la puce stocke pour atteindre la couche en ligne | un **identifiant produit du catalogue** | une **« Online Data URL »** — l'adresse elle-même |
| Qui y répond | **un endpoint, toutes les marques** | un endpoint par tag, hébergé par celui qui l'a écrit |
| Rôle de la couche en ligne | le **canal de mise à jour** : les corrections atteignent les bobines déjà expédiées | **supplémentaire par conception** — la spec indique qu'elle « will NEVER be relied upon for printer functionality » |
| Documents réglementaires | TDS · MSDS · RoHS · REACH · EN71 · contact alimentaire, par produit | absents du schéma — l'API Web porte photos, prix, liens produit, statut QA, notes |
| Copie en ligne des données de la puce | oui, le profil complet | oui, `tag_data` — **optionnel**, comme tous les champs sauf la version |
| Preuve d'origine | optionnelle — un [TigerTag+ Certified](../products/tigertag-plus.md) est signé et vérifié hors ligne | aucune, délibérément : la spec écarte le chiffrement, « unsuitable for an open source standard » |

## Ce qui découle d'un identifiant plutôt que d'une adresse

Aucune des deux approches n'est un hasard, et chacune achète quelque chose.

Stocker l'**adresse** garde le tag autosuffisant : celui qui l'écrit décide où
vivent ses données, et ne dépend de personne. Le prix, c'est que l'adresse est
inscrite dans la puce, sous le budget d'octets de la charge, et qu'une puce ne
peut plus être repointée une fois chez le client — si cet hébergement déménage
ou cesse de répondre, c'est le lien qui casse.

Stocker un **identifiant** met un endpoint partagé sur le chemin. Le prix,
c'est une référence commune que tout le monde résout. Ce que ça achète : la
puce ne contient jamais d'emplacement, l'identifiant reste valable quoi qu'il
arrive à une adresse, un lecteur implémente un seul endpoint et il fonctionne
pour des filaments qu'il n'a jamais vus, et un fabricant peut corriger une
donnée six mois après la sortie d'usine.

La [signature](../products/tigertag-plus-certified.md) est l'autre conséquence.
Parce qu'un TigerTag+ Certified signe l'UID propre de la puce, les données
peuvent s'améliorer en ligne pendant que la bobine continue de prouver d'où
elle vient — hors ligne, sur le téléphone même du client.

## Interopérabilité

Les puces TigerTag ne sont **jamais verrouillées en écriture**. Si vous
préférez OpenTag3D — ou tout autre format — vous êtes libre de réécrire une
puce d'usine dans ce format. C'est la position que nous tenons pour
[OpenSpool](./openspool.md), et pour la même raison : la bobine appartient à
qui l'a achetée.

---

**◀ Précédent :** [OpenSpool](./openspool.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Développeurs](../developers/README.md)

**Voir aussi :** [L'API Web](../developers/web-api.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
