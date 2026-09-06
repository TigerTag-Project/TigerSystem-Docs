---
sourceHash: beecc5a8fd10c5bcb1afbc024042672e1ead68965d4c142e07cd519fde103730
sourcePath: docs/certified-partners.md
---

# Partenaires certifiés

Voici le registre auquel renvoie [`TRADEMARK.md`](../TRADEMARK.md) : **la liste
faisant autorité de ceux qui ont le droit d'apposer la marque TigerTag sur un
produit.**

Si vous tenez une bobine ou une boîte portant le logo TigerTag, son fabricant
doit figurer sur cette page. Sinon, la marque n'est pas autorisée — le logo
peut être affiché librement dans une application, une documentation ou une
fiche produit pour dire *« ceci fonctionne avec TigerTag »*, mais jamais
**sur** une puce, un support, une bobine ou son emballage.

## Ce qu'est réellement la certification

Un **audit**, accordé par TigerSystem — du produit et du procédé — puis une
licence de marque. Ce n'est ni de la paperasse ni automatique : c'est ce qui
rend vraie la promesse imprimée sur la boîte.

Pour un fabricant de filament, cela signifie une chose en particulier : on lui
remet les **outils de signature**. Ses bobines peuvent alors porter un
[**TigerTag+ Certified**](./products/tigertag-plus.md) — une identité de
catalogue *plus* une signature d'origine, émise sous une clé privée détenue par
TigerTag. N'importe qui peut vérifier cette signature, **hors ligne, sur son
propre téléphone, sans compte**. Une puce clonée échoue à la vérification.

La certification n'est jamais nécessaire pour *utiliser* le protocole.
L'implémenter, construire dessus et dire *« compatible avec TigerTag »*
restent libres, sans audit et sur simple déclaration — voir
[le matériel tiers](./compatibility/third-party-hardware.md) pour ce que cela
donne en pratique.

## Fabricants de filament

Les paliers décrivent **jusqu'où le protocole est déployé dans la production du
partenaire**, pas la qualité du partenaire.

| Partenaire | Palier | Déploiement |
|---|---|---|
| **[Rosa3D](https://rosa3d.pl)** | **Platinum** — intégré sur toute la ligne de production | TigerTag+ sur **100 % de sa production de bobines de 1 kg**. Premier fabricant de filament à intégrer le protocole dans ses lignes d'usine, avec plus de **250 000 bobines taguées** produites depuis. Ses ReFills portent deux puces, récupérables et réutilisables une fois la bobine terminée. |
| **[R3D](https://r3d-europe.com)** | **Gold** — production à grande échelle, engagement public | Déploiement à grande échelle sur sa production européenne de filament, après plus d'un an de travail avec l'équipe TigerTag. Ses puces sont laissées **déverrouillées**, les données peuvent donc être effacées et réécrites. |
| **[eSun](https://www.esun3d.com)** | **Gold** | Intégration officielle, déployée sous forme de **programme pilote sur le marché français**, avec l'intention annoncée de s'étendre à l'Europe puis au monde. C'est leur propre description du périmètre. |
| **[Sunlu](https://www.sunlu.com)** | **Silver** — intégré à la demande | Tague les bobines en TigerTag+ à la demande. |
| **[Landu](https://www.landu3d.com)** | **Silver** | Tague les bobines en TigerTag+ à la demande. |
| **[JamgHE](https://www.jamghe.com)** | **Silver** | Tague les bobines en TigerTag+ à la demande. |

|| | |
|---|---|---|
| <img src="./assets/box-rosa3d-cutout.png" alt="Boîte de filament Rosa3D portant la marque TigerTag" /> | <img src="./assets/box-esun-cutout.png" alt="Boîte de filament eSun portant la marque TigerTag" /> | <img src="./assets/box-sunlu-cutout.png" alt="Boîte de filament Sunlu portant la marque TigerTag" /> |

*Des boîtes du commerce portant la marque — achetées en boutique, pas mises en
scène.*

## Intégration en cours

**[Nanovia](https://nanovia.tech)** et
**[Filforme](https://www.filforme.com)** intègrent actuellement TigerTag+. Ils
ne sont **pas encore en production**, et figurent ici parce qu'ils sont dans le
programme — pas pour laisser croire à une disponibilité.

## Vérifier une marque soi-même

Deux vérifications indépendantes, et aucune n'a besoin de nous :

- **Cette page.** Le fabricant d'une puce, d'un support, d'une bobine ou d'une
 boîte portant la marque doit figurer ci-dessus.
- **La signature.** Un TigerTag+ Certified porte une signature d'origine que
 vous pouvez vérifier avec n'importe quel lecteur, hors ligne et sans compte —
 les clés publiques sont publiées. Voir [TigerTag+](./products/tigertag-plus.md).

## Devenir certifié

Si vous fabriquez du filament, de la résine, des inlays, des supports, un
appareil ou une application et que vous voulez figurer ici, le processus est un
audit suivi d'une licence de marque. C'est un service payant, sur le modèle de
celui de la Connectivity Standards Alliance pour Zigbee et Matter.

- La politique : [`TRADEMARK.md`](../TRADEMARK.md)
- L'argumentaire pour les fabricants : [Pourquoi intégrer TigerTag](./vision/for-filament-manufacturers.md)
- Parlons-en : [Discord](https://discord.gg/3Qv5TSqnJH) ·
 [tigertag@tigertag.io](mailto:tigertag@tigertag.io)

---

**▲ [Index de la documentation](../README.md)** · **Voir aussi :** [TigerTag](./products/tigertag.md), [TigerTag+](./products/tigertag-plus.md), [Matériel tiers](./compatibility/third-party-hardware.md)
