---
sourceHash: 26da829356af402a7e35df1fd40b2563bb966a93eecf9345a4602304c6124f16
sourcePath: docs/compatibility/label-printers.md
---

# Imprimantes d'étiquettes Bluetooth

Imprimez l'étiquette TigerQR d'une bobine directement depuis votre téléphone
sur une petite imprimante d'étiquettes thermique Bluetooth : pas d'ordinateur,
pas de PDF, pas d'application d'imprimante entre les deux.

> **État au 2026-11-26.** [Tiger NFC Connect](../products/tiger-nfc-connect.md)
> (iOS / Android) imprime sur ces imprimantes à partir de sa **prochaine mise à
> jour**. Dans [Tiger Studio](../products/tiger-studio.md), les mêmes
> imprimantes sont en cours d'intégration, **pas encore publiées**. D'ici là,
> toute imprimante fonctionne avec sa propre application à partir du PDF, du
> PNG ou du SVG de l'étiquette
> ([étiquettes imprimées](../developers/spool-ids-and-qr-links.md)).

## Comment ça marche

- Tiger NFC Connect envoie l'étiquette TigerQR de la **bobine** ou du
  **filament** à l'imprimante en Bluetooth.
- **Chaque imprimante retient son propre format d'étiquette**, celui du rouleau
  qu'elle contient.
- Chaque impression garde une **petite marge de sécurité** : un rouleau
  légèrement décalé reçoit quand même toute l'étiquette.
- Les rouleaux de 12 mm impriment l'étiquette **Fin** de 40 × 12 mm ; les
  rouleaux de 50 mm de large prennent de plus grandes étiquettes (50 × 30 mm
  testée).

> **Astuce :** une imprimante ne se connecte qu'à **un appareil à la fois**.
> Fermez l'application du fabricant de l'imprimante avant d'imprimer depuis
> Tiger NFC Connect.

## Notre choix

Les imprimantes Niimbot sont vraiment très bonnes. La **D110** est le meilleur
rapport qualité-prix, très bonne pour son prix ; la **B1** et la **B1 Pro**
sont à prendre avec plus de budget, pour de plus grandes étiquettes. La
Marklife **P15** fonctionne, mais elle est plus encombrante et sa qualité
d'impression semble un peu inférieure.

Les quatre ont été testées sur papier.

| Imprimante | Rouleaux | Étiquette testée | Notre avis | Acheter |
|---|---|---|---|---|
| **Niimbot D110** (et D110-M) | 12 mm | 40 × 12 mm | **Meilleur rapport qualité-prix** : très bonne pour son prix | [Amazon](https://link.amazon/B039fb6VY) |
| **Niimbot B1** | jusqu'à 50 mm de large | 50 × 30 mm | De plus grandes étiquettes, avec plus de budget | [Amazon](https://link.amazon/B0a3CHt3H) |
| **Niimbot B1 Pro** | 50 mm de large | 50 × 30 mm | 300 dpi, l'impression la plus nette | [Amazon](https://link.amazon/B09wFIrwk) |
| **Marklife P15** (vendue comme « Pristar P15 » sur Amazon) | 12 mm | 40 × 12 mm | Fonctionne, mais plus encombrante, impression un peu moins bonne | [Amazon](https://link.amazon/B0iRdI1G6) |

> Les liens de ce tableau sont des **liens affiliés Amazon** (amazon.fr) : en
> tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats
> remplissant les conditions requises, **sans surcoût pour vous**. Cela aide à
> financer le protocole ouvert. Acheter la même imprimante ailleurs fonctionne
> exactement pareil.

Pas de prix ici : ils changent trop souvent.

## Aussi prises en charge, pas encore testées sur papier

Le code de l'application pilote aussi ces modèles ; ils n'ont pas encore été
testés sur papier :

- **Niimbot :** D11, D101, B18, B21, B21 Pro, B3S ;
- **Phomemo :** M110, M120, M200, M220, M221.

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [Matériel tiers compatible](./third-party-hardware.md), [Tiger NFC Connect](../products/tiger-nfc-connect.md), [Identifiants de bobine et liens QR](../developers/spool-ids-and-qr-links.md)
