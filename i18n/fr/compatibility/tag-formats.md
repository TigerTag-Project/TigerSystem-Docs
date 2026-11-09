---
sourceHash: 84d231fb87c4fd823cec2ac0222e3cb1b09833f4aa4542b04b027eaab4a89a20
sourcePath: docs/compatibility/tag-formats.md
---

# Formats de puce de bobine comparés

Six formats NFC/RFID sont utilisés aujourd’hui sur les bobines de filament.
Cette page les met côte à côte, au 6 novembre 2026, chaque chiffre venant de
la spécification du format ou, pour Bambu Lab et Creality (sans spécification
officielle), des travaux publics de rétro-ingénierie. Elle décrit, elle ne
classe pas. [OpenSpool](./openspool.md) et [OpenTag3D](./opentag3d.md) ont
leur propre page.

| | **TigerTag** | [OpenPrintTag][opt] | [OpenTag3D][ot3d] | [OpenSpool][osp] | Bambu Lab ([rétro-ingénierie][bbl]) | Creality CFS ([rétro-ingénierie][cfs]) |
|---|---|---|---|---|---|---|
| Puce | NTAG213 / NTAG215 | NFC-V, ICODE SLIX2 (320 o) | NTAG215 / NTAG216 | NTAG215 / NTAG216 | MIFARE Classic 1K | MIFARE Classic 1K |
| Octets pour une fiche complète | **80** (+ 64 o de signature) | 176 (248 o sur la puce) | 224 | 126 (JSON) | non documenté (puce de 1 Ko) | 48 |
| Couleurs, max | 3 | 6 | 4 | 1 | 2 | 1 |
| Buse et plateau min / max | oui | oui | oui | buse seulement | buse ; une valeur de plateau | non |
| Température et durée de séchage | oui | oui | oui | non | oui | non |
| Quantité restante sur la puce | oui | oui | non | non | non | non |
| TD HueForge | oui | oui | oui | non | non | non |
| Message libre | 28 o | non | non | non | non | non |
| Signature vérifiable hors ligne | ECDSA-P256, clé publique publiée | non | non | non | RSA-2048, clé publique non publiée | non |
| Puce réinscriptible | oui | oui | oui | oui | non (rejetée une fois modifiée) | non |
| Catalogue produits ouvert hors ligne | **20 348 produits** | 15 874 conditionnements | non | non | non | non |
| Correction des puces après l’usine | une API ouverte et standardisée pour toutes les marques ; les SDK comparent et corrigent la puce, signature conservée | non | `data_url` facultative vers une API que chaque fabricant crée et héberge ; ni format commun, ni SDK, ni procédure de mise à jour | non | non | non |

## Ce que montre le tableau

- **La fiche complète la plus compacte.** TigerTag stocke une fiche
  d’impression complète — températures, séchage, quantités, couleurs, TD — en
  80 octets, contre 176 pour OpenPrintTag et 224 pour OpenTag3D. Les deux
  fiches plus petites en portent moins : les 48 octets de Creality n’ont
  aucune température, les 126 octets d’OpenSpool sept champs. C’est aussi le
  seul format ici qui tient sur une NTAG213, signature comprise.
- **Complet hors ligne, grâce au catalogue.** L’identifiant produit d’une
  TigerTag+ se résout dans le catalogue public embarqué — 20 348 produits avec
  nom, série, SKU, code-barres, photo et indicateur de recharge — sans réseau
  ni compte.
- **Des mises à jour prévisibles.** Une marque corrige un produit une fois,
  sur l’API commune à toutes les marques ; n’importe quel lecteur corrige
  ensuite les puces déjà vendues.
- **Pas le plus de champs sur la puce.** OpenPrintTag porte plus de couleurs
  et des champs que TigerTag n’a pas (GTIN, longueur). Ce qui distingue
  TigerTag, c’est la combinaison : une fiche complète en peu d’octets, une
  signature vérifiable hors ligne et un catalogue ouvert de plus de
  20 000 produits, sur une NTAG213.

## Sources

- OpenPrintTag : [liste des champs][opt], taille tirée du vecteur de test de
  référence [`01_info.yaml`](https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/tests/encode_decode/01_info.yaml),
  nombre de conditionnements tiré du README d’[openprinttag-database](https://github.com/OpenPrintTag/openprinttag-database).
- OpenTag3D : [spécification][ot3d] et sa
  [carte mémoire](https://github.com/GooborgStudios/OpenTag3D/blob/main/_data/spec.json).
- OpenSpool : [format de la puce][osp], taille tirée de l’exemple documenté.
- Bambu Lab : [RFID Tag Guide][bbl] (Bambu Research Group, rétro-ingénierie).
- Creality CFS : [K2-RFID][cfs] (rétro-ingénierie).
- TigerTag : la [spécification](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#how-tigertag-compares).

Un chiffre est faux ou dépassé ? Ouvrez une issue : cette page se corrige,
elle ne se défend pas.

[opt]: https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/data/main_fields.yaml
[ot3d]: https://github.com/GooborgStudios/OpenTag3D/blob/main/spec.md
[osp]: https://github.com/spuder/OpenSpool/blob/main/docs/rfid.md
[bbl]: https://github.com/Bambu-Research-Group/RFID-Tag-Guide/blob/main/BambuLabRfid.md
[cfs]: https://github.com/DnG-Crafts/K2-RFID

---

**◀ Précédent :** [OpenTag3D](./opentag3d.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Développeurs](../developers/README.md)

**Voir aussi :** [Compatibilité](./README.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
