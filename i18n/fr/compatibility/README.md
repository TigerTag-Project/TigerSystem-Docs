---
sourceHash: a581b7504900fdbaa60b5f02b81447a4b0e07c77d262b6236434620b7378d87a
sourcePath: docs/compatibility/README.md
---

# Compatibilité

Comment TigerSystem fonctionne avec chaque écosystème d'imprimante. Deux axes indépendants :

- **Liaison imprimante** — Tiger Studio qui dialogue avec la machine sur le réseau local
 (télémétrie, emplacements de filament, tâche, caméra). **Six marques sont actives aujourd'hui, Prusa est en bêta, et toute imprimante Klipper ou OctoPrint se connecte en bêta : environ 380 modèles.**
- **RFID native** — la lecture des tags de bobine propres au constructeur. Documentée
 constructeur par constructeur. Le décodage direct dans les applications n'est **pas
 encore intégré** (le bon modèle d'interopérabilité reste une question ouverte) ; les
 travaux en cours visent à **convertir les données des tags constructeurs en bobines
 numériques TigerData**, pour que le filament d'autres marques puisse être scanné et géré
 dans l'écosystème. En attendant, la puce TigerTag fonctionne déjà avec toutes les
 imprimantes grâce au [pont smartphone](../philosophy/smartphone-bridge.md).

## Matrice

| Écosystème | Liaison imprimante (Tiger Studio) | Format du tag natif | Verrouillage du tag natif | État de la lecture RFID |
|---|---|---|---|---|
| <img src="../assets/brands/bambulab.svg" width="14" alt="" /> [Bambu Lab](./bambu-lab.md) | **Actif** — MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256, clés dérivées de l'UID | Spécification documentée |
| <img src="../assets/brands/creality.svg" width="14" alt="" /> [Creality](./creality.md) | **Actif** — WebSocket + CFS | Mifare Classic 1K | Clé de secteur AES-128-ECB | Spécification documentée |
| <img src="../assets/brands/elegoo.svg" width="14" alt="" /> [Elegoo](./elegoo.md) | **Actif** — MQTT + Canvas ; Centauri Carbon 1 en SDCP en bêta | Mifare Ultralight | Magic bytes uniquement | Spécification documentée |
| <img src="../assets/brands/flashforge.svg" width="14" alt="" /> [FlashForge](./flashforge.md) | **Actif** — HTTP + IFS | — (les machines n'ont pas de lecteur RFID) | — | TigerTag y ajoute le NFC, à coût nul |
| <img src="../assets/brands/anycubic.svg" width="14" alt="" /> [Anycubic](./anycubic.md) | **Actif** — MQTTS LAN + cloud, ACE | Mifare Ultralight | Aucun | Spécification documentée |
| <img src="../assets/brands/snapmaker.svg" width="14" alt="" /> [Snapmaker](./snapmaker.md) | **Actif** — WebSocket Moonraker + 4 emplacements | Mifare Classic 1K | HKDF + signature RSA-2048 | Spécification documentée |
| Prusa | **Bêta** — PrusaLink HTTP + MMU | OpenPrintTag (NFC) | Aucun — format ouvert | Comparé dans [Formats de puce de bobine comparés](./tag-formats.md) |
| [Klipper](./klipper.md) | **En direct (bêta)** — Moonraker + Happy Hare / AFC | n/a | n/a | n/a |
| OctoPrint (Marlin) | **En direct (bêta)** — OctoPrint REST | n/a | n/a | n/a |
| [OpenSpool](./openspool.md) | n/a (standard de tag, pas une imprimante) | NFC Type 2, JSON NDEF | Aucun — standard ouvert | Spécification documentée |
| Qidi | Non intégré | Mifare Classic 1K | Clé par défaut | [Spécification documentée](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

> **Note :** les fiches RFID par constructeur (spécifications de décodage en lecture
> seule, dérivées du projet [OpenRFID](https://github.com/suchmememanyskill/OpenRFID))
> sont maintenues dans le dépôt Tiger Studio, sous
> [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors)
> — elles sont liées ici, pas dupliquées.

## Les formats de puce côte à côte

TigerTag, OpenPrintTag, OpenTag3D, OpenSpool, Bambu Lab et Creality CFS,
chiffre par chiffre et sources à l’appui : **[Formats de puce comparés](./tag-formats.md)**.

## Au-delà des imprimantes

La compatibilité ne concerne pas que les imprimantes : voyez la liste grandissante du
**[matériel tiers compatible](./third-party-hardware.md)** — lecteurs NFC,
analyseurs de filament, balances USB — et les
**[logiciels bâtis sur TigerTag](../developers/integrations.md)**.

Les étiquettes de bobine s'impriment directement depuis le téléphone sur des
**[imprimantes d'étiquettes Bluetooth](./label-printers.md)**.

## La réponse universelle

Quelle que soit l'imprimante : collez une puce [TigerTag](../products/tigertag.md) sur la
bobine et tout l'écosystème fonctionne — identification, inventaire, poids,
partage, et données de filament envoyées à chaque imprimante intégrée.

---

**◀ Précédent :** [TigerScale](../products/tigerscale.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Bambu Lab](./bambu-lab.md)
