---
sourceHash: bd3ed3b42fceba075813ea81cde09aa616181f4d761a5afc224db7733d106f24
sourcePath: docs/developers/repositories.md
---

# Carte des dépôts

Tous les dépôts publics vivent au sein de l'organisation GitHub
**[TigerTag-Project](https://github.com/TigerTag-Project)**.

| Dépôt | Ce que c'est | Licence |
|---|---|---|
| **TigerSystem-Docs** (ce dépôt) | Documentation de l'écosystème — le point d'entrée de référence | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | Application de bureau Tiger Studio (Electron) | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | SDK JavaScript — paquet npm `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | SDK Python | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | Spécification de référence du format de la puce | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | Contrat d'intégration cloud + exemples fonctionnels | CC BY 4.0 |
| [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | TigerScale **V3** (actuelle) — ESP32-S3, écran tactile, double PN532, batterie | MIT |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale V2 (génération précédente — matériel différent) | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | Support double lecteur imprimable en 3D | CC BY 4.0 |
| [TigerSpool-RFID](https://github.com/TigerTag-Project/TigerSpool-RFID) | Scanner de bobine côté imprimante — ESP32-S3 + PN532, écran tactile, multimarque | MIT |

## Quel dépôt fait référence pour quoi

Pour éviter que la documentation ne dérive, chaque fait a exactement **un** seul
domicile :

| Sujet | Emplacement de référence |
|---|---|
| Vue d'ensemble de l'écosystème, philosophie, pages produit, FAQ | **Ce dépôt** |
| Le format de fichier d'échange `.ttag` | **Ce dépôt** ([spécification](./ttag-format.md)) |
| Format de la puce au niveau de l'octet | TigerTag-RFID-Guide |
| Modèle de données Firestore et flux d'authentification | TigerTag_Firebase_Integration (`docs/`) |
| Protocoles LAN des imprimantes (par marque) | TigerTag-Studio-Manager (`renderer/printers/<brand>/PROTOCOL.md`) |
| Fiches de décodage RFID des constructeurs | TigerTag-Studio-Manager (`docs/rfid-vendors/`) |
| Catalogue des fonctionnalités et journal des modifications de l'application | TigerTag-Studio-Manager (`FEATURES.md`, `CHANGELOG.md`) |

> **Note :** l'application mobile (Tiger NFC Connect), TigerHub et les dépôts du
> backend ne sont pas publics à ce jour.

---

**◀ Précédent :** [Vue d'ensemble pour les développeurs](./README.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [SDK](./sdks.md)
