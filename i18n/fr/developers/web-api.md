---
sourceHash: 4534952990769306c8ebf5fcf1d9c93c9ddca86ce463b792d757f36bdda46043
sourcePath: docs/developers/web-api.md
---

# L'API Web

## À quoi elle sert

Une TigerTag porte tout ce dont l'imprimante a besoin, **sur la puce, hors
ligne**. L'API Web existe pour ce qu'une puce ne peut pas contenir et pour ce
qui change après son écriture : les fiches techniques, les documents de
sécurité, la photo, la vidéo, les corrections du fabricant.

C'est **un seul endpoint HTTP, pour tous les filaments, de toutes les
marques** — sans clé, sans compte, sans inscription, sans accord de volumétrie
à négocier. Un identifiant produit entre, le produit sort.

```
https://api.tigertag.io/api:tigertag/product/get?uid=0&product_id=<ID>&lang=en
```

Le paramètre `lang` choisit la langue des champs textuels — `fr` pour du français.

## Ce qui revient

Quatre produits réels, de quatre marques différentes, par cette même adresse :

| `product_id` | Produit | Documents renvoyés |
|---|---|---|
| `10` | Polymaker PolyTerra™ PLA | MSDS · TDS · conseils · vidéo |
| `30` | R3D PLA High Speed | alimentaire · MSDS · REACH · RoHS · TDS · vidéo |
| `40` | Sunlu PLA Matte | MSDS · REACH · RoHS · TDS · vidéo |
| `50` | eSun PLA+ | alimentaire · MSDS · REACH · RoHS · TDS · conseils · vidéo |

Chaque réponse porte l'identité (marque, série, nom, SKU, EAN, couleur), le
profil d'impression complet (buse, plateau, séchage, ventilation, diamètre,
poids, shore, distance de transmission), la photo du produit, et le bloc
`links` ci-dessus — `tds`, `msds`, `rohs`, `reach`, `en71`, `food`, `tips`,
`youtube`.

## Pourquoi elle garde un TigerTag+ à jour

Un [TigerTag+](../products/tigertag-plus.md) stocke un **identifiant produit du
catalogue**, pas une adresse. L'identifiant n'expire pas et ne bouge pas : un
fabricant peut donc corriger une température ou joindre une fiche technique six
mois après l'expédition des bobines, et chaque lecteur voit la nouvelle valeur
à la lecture suivante — sans rien réécrire sur la puce, et sans que la puce
ait jamais dépendu du réseau pour imprimer.

C'est aussi pourquoi un endpoint unique compte : une seule adresse dessert
toutes les marques, un lecteur l'implémente une fois et elle fonctionne pour
des filaments qu'il n'a jamais vus.

## Hors ligne aussi — le catalogue entier est un fichier

Rien de ce qui précède n'exige que l'endpoint soit joignable, ni même qu'il
existe.

La référence complète est publiée en un seul fichier,
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json) — **tous les identifiants de tous les filaments de
la base**, rafraîchi plusieurs fois par jour, environ 12 Mo, sans clé et sans
compte. N'importe qui peut le télécharger, le mettre en miroir, l'embarquer
dans une application, le poser sur un NAS d'atelier ou le transporter sur une
clé USB.

Un lecteur qui détient cette copie résout un identifiant TigerTag+ **sans aucun
réseau**. C'est ce qui rend l'identifiant plus sûr qu'une adresse : une adresse
a besoin que son hébergement réponde, une référence partagée a seulement besoin
d'avoir été copiée une fois — et elle peut l'être partout sur la planète, par
n'importe qui, à n'importe quel moment.

L'API Web reste le chemin le plus frais, et celui qui porte les fiches
techniques et la photo. Le fichier est le plancher en dessous.

## Ce qu'elle ne fait jamais

L'API Web **ne peut pas rendre une puce fonctionnelle**, parce qu'une puce
fonctionne déjà sans elle. Lisez une TigerTag en mode avion : vous obtenez
marque, matière, couleur, diamètre, poids et températures — toute
l'impression. L'API Web ajoute le papier et les images autour, et les
corrections par-dessus.

---

**◀ Précédent :** [API compte et intégration tierce](./account-api.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Carte des dépôts](./repositories.md)

**Voir aussi :** [TigerTag+](../products/tigertag-plus.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
