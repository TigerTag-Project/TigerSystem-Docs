---
sourceHash: 7dc230b977dd8daee1bee1dcf91401303264ea4addf2fc860ad6ea32b0198db0
sourcePath: docs/products/factory-suite.md
---

# TigerTag Factory et TigerTag Manager (la suite usine)

## Objectif

Le **versant industriel** de TigerSystem — les outils que les usines de filament
utilisent pour intégrer TigerTag à leurs produits. Contrairement au bac à sable
destiné aux utilisateurs, **il s'agit ici de logiciels de production** : ce sont
eux qui ont mis plus de 2,5 millions de puces sur le terrain.

Deux outils couvrent les deux moitiés du travail :

- **TigerTag Manager** — gère la **base de données de filaments** de la marque :
 produits, matières, couleurs, réglages.
- **TigerTag Factory** — **écrit les données en masse dans chaque bobine
 produite**, à la cadence de la ligne : **environ 1 seconde par puce** — des
 milliers de bobines par jour, en un clic.

## Le support — deux puces, à décoller et à coller

|| |
|---|---|
| <img src="../assets/carrier-bare.png" alt="Le support TigerTag nu — deux antennes NFC indépendantes, une à chaque extrémité" /> | <img src="../assets/carrier-branded.png" alt="Le support TigerTag tel qu'il est livré, avec les deux puces marquées" /> |

*Les deux puces NFC indépendantes sont bien visibles — une par extrémité. Les
extrémités se replient sur le mandrin en carton pour que la bobine se lise des
deux côtés ; la partie centrale tient avec un adhésif industriel 3M
(468MP / 200MP). L'opérateur décolle et colle — rien d'autre ne change sur la
ligne. La conception du support est publique et imprimable chez soi.*

<img src="../assets/refill-with-tigertag-orange.png" width="340" alt="Le support posé sur une recharge de filament" />

## Preuve d'origine

Les puces écrites sur la ligne de production portent la **signature usine** —
l'authentification qui **prouve l'origine du produit**. C'est la couche qui
sous-tend les restaurations à l'état usine des [TigerTag+](./tigertag-plus.md)
et l'ancrage de confiance pour les marques : une puce signée est sortie, de
façon démontrable, de la véritable usine.

## Disponibilité

**Non public.** Ces outils sont réservés aux fabricants tiers qui implémentent
la technologie RFID/NFC TigerTag dans leurs produits. Une ligne de production de
filament peut tourner avec TigerTag en **seulement 5 jours** — voir
[Pour les fabricants de filament](../vision/for-filament-manufacturers.md) et
prenez contact via l'
[organisation GitHub](https://github.com/TigerTag-Project).

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [Pour les fabricants de filament](../vision/for-filament-manufacturers.md), [TigerTag+](./tigertag-plus.md), [Produits](./README.md)
