---
sourceHash: 68fa84317057cd1f92cf2ac7131611c49eaf880607f0e20eede9ae2fae93db9a
sourcePath: docs/roadmap/README.md
---

# Feuille de route

## Direction de l'écosystème

Intentions générales, sans date (les détails vivent produit par produit) :

- **RFID multi-constructeurs → TigerData** — récupérer les données des tags
 constructeurs (Bambu Lab, Creality, Elegoo, Anycubic, Snapmaker, Qidi,
 OpenSpool) et les convertir en bobines numériques TigerData, pour que le
 filament d'autres marques puisse être scanné et géré dans l'écosystème ; les
 spécifications en lecture seule sont déjà documentées
 ([compatibilité](../compatibility/README.md)). Le décodage direct dans les
 applications n'est délibérément pas intégré tant que le modèle d'interopérabilité n'est pas arrêté.
- **Davantage d'intégrations d'imprimantes** — Klipper/Moonraker comme
 prochain transport naturel ([page Klipper](../compatibility/klipper.md)).
- **Une carte des distributeurs** *(prévue)* — les distributeurs officiels ne
 se limitent plus à [Atome3D](https://atome3d.com) ; une carte montrera où
 acheter des puces TigerTag près de chez soi.
- ~~Le fichier portable `.ttag`~~ — **livré** dans Tiger Studio v2.14.0 :
 [le format `.ttag`](../developers/ttag-format.md) (export + import, les trois
 niveaux de bobine).
- **TigerTag pour les résines** — étendre le protocole aux contenants de
 résine des imprimantes 3D résine, pour apporter la même identité ouverte à
 toute une seconde famille de machines.
- **Croissance de TigerHub** — le site de l'écosystème sur
 [tigersystem.io](https://tigersystem.io) : des fonctions de bac à sable
 social plus riches (listes d'envies, amis, partage).
- **Documentation** — combler les emplacements TODO à travers ce dépôt (tutoriels,
 guides, intégration des fabricants, résumé de la charge utile RFID).
- **Langues de la documentation** — le wiki sur
 [wiki.tigersystem.io](https://wiki.tigersystem.io) paraît d'abord en
 **anglais et en français** : l'anglais est la source de vérité, le français
 en est dérivé puis relu. Une fois les deux complets et les pages stabilisées,
 les autres langues de [tigersystem.io](https://tigersystem.io) suivront —
 **allemand, espagnol, italien, polonais, chinois et portugais dans ses
 variantes brésilienne et européenne**, que l'écosystème traite comme deux
 langues distinctes — afin que la documentation s'aligne sur le reste de
 l'écosystème. Les ajouter plus tôt reviendrait à maintenir neuf copies de
 pages encore en cours d'écriture.
- **Au-delà des langues actuelles** — la liste ne s'arrête pas à ce que
 [tigersystem.io](https://tigersystem.io) propose aujourd'hui. Le **japonais,
 le coréen et le russe** sont les meilleurs candidats ensuite : tous trois ont
 des communautés de makers actives, et tous trois sont des endroits où une
 documentation technique uniquement en anglais est un véritable obstacle plutôt
 qu'une simple gêne. Le russe porte aussi bien au-delà de la Russie. Notez
 qu'une langue peut mériter d'être documentée même là où la boutique ne peut pas
 livrer — le protocole est ouvert, n'importe quelle puce NTAG vierge fonctionne, et rien dans l'écosystème n'oblige à acheter quoi que ce soit.

 Les langues réellement ajoutées devront être décidées à partir du trafic du
 wiki lui-même, une fois qu'il en aura, et non au jugé. Ce n'est pas non plus
 forcément tout ou rien par langue : les sections destinées aux utilisateurs
 (tutoriels, FAQ, produits, compatibilité) méritent une traduction bien avant
 [`developers/`](../developers/README.md), dont les lecteurs travaillent déjà
 en anglais.

## Feuilles de route détaillées

| Produit | Où |
|---|---|
| Tiger Studio | [`ROADMAP.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/ROADMAP.md) dans le dépôt de l'application — regroupé par domaine, avec des notes de dimensionnement et de risque |
| Autres produits | > **TODO :** publier des feuilles de route publiques à mesure que les dépôts s'ouvriront |

> **Note :** cette page indique une direction, pas des engagements ni des dates.

---

**◀ Précédent :** [FAQ](../faq/README.md) · **▲ [Index de la documentation](../../README.md)**

**Voir aussi :** [Produits](../products/README.md), [Compatibilité](../compatibility/README.md)
