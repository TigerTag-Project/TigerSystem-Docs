---
sourceHash: a581b7504900fdbaa60b5f02b81447a4b0e07c77d262b6236434620b7378d87a
sourcePath: docs/compatibility/README.md
---

# Compatibilità

Come TigerSystem funziona con ogni ecosistema di stampanti. Due assi indipendenti:

- **Collegamento alla stampante**: Tiger Studio che dialoga con la macchina via LAN
 (telemetria, slot del filamento, lavoro, telecamera). **Oggi sei marche sono attive, Prusa è in beta e qualsiasi stampante Klipper o OctoPrint si collega in beta: circa 380 modelli.**
- **RFID nativo**: lettura dei tag delle bobine del produttore. Documentato per
 ogni produttore. La decodifica diretta nell'app **non è ancora integrata** (il modello
 di interoperabilità giusto è ancora una questione aperta); il lavoro attuale punta a
 **convertire i dati dei tag dei produttori in bobine digitali TigerData**, così il filamento
 di altre marche può essere scansionato e gestito nell'ecosistema. Nel frattempo,
 il chip TigerTag funziona già con qualsiasi stampante tramite il
 [ponte smartphone](../philosophy/smartphone-bridge.md).

## Matrice

| Ecosistema | Collegamento alla stampante (Tiger Studio) | Formato tag nativo | Blocco del tag nativo | Stato della lettura RFID |
|---|---|---|---|---|
| <img src="../assets/brands/bambulab.svg" width="14" alt="" /> [Bambu Lab](./bambu-lab.md) | **Live** — MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256, chiavi derivate dall'UID | Specifica documentata |
| <img src="../assets/brands/creality.svg" width="14" alt="" /> [Creality](./creality.md) | **Live** — WebSocket + CFS | Mifare Classic 1K | Chiave di settore AES-128-ECB | Specifica documentata |
| <img src="../assets/brands/elegoo.svg" width="14" alt="" /> [Elegoo](./elegoo.md) | **Live** — MQTT + Canvas; Centauri Carbon 1 via SDCP in beta | Mifare Ultralight | Solo magic bytes | Specifica documentata |
| <img src="../assets/brands/flashforge.svg" width="14" alt="" /> [FlashForge](./flashforge.md) | **Live** — HTTP + IFS | — (le macchine non hanno lettore RFID) | — | TigerTag le aggiunge l'NFC, a costo zero |
| <img src="../assets/brands/anycubic.svg" width="14" alt="" /> [Anycubic](./anycubic.md) | **Live** — MQTTS LAN + cloud, ACE | Mifare Ultralight | Nessuno | Specifica documentata |
| <img src="../assets/brands/snapmaker.svg" width="14" alt="" /> [Snapmaker](./snapmaker.md) | **Live** — WebSocket Moonraker + 4 slot | Mifare Classic 1K | HKDF + firma RSA-2048 | Specifica documentata |
| Prusa | **Beta** — PrusaLink HTTP + MMU | OpenPrintTag (NFC) | Nessuno — formato aperto | Confrontato in [Formati di tag per bobine a confronto](./tag-formats.md) |
| [Klipper](./klipper.md) | **Live (beta)** — Moonraker + Happy Hare / AFC | n/d | n/d | n/d |
| OctoPrint (Marlin) | **Live (beta)** — OctoPrint REST | n/d | n/d | n/d |
| [OpenSpool](./openspool.md) | n/d (standard di tag, non una stampante) | NFC Type 2, NDEF JSON | Nessuno — standard aperto | Specifica documentata |
| Qidi | Non integrata | Mifare Classic 1K | Chiave predefinita | [Specifica documentata](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

> **Nota:** le schede RFID per produttore (specifiche di decodifica in sola lettura, derivate
> dal progetto [OpenRFID](https://github.com/suchmememanyskill/OpenRFID)) sono
> mantenute nel repository di Tiger Studio in
> [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors)
> — qui sono collegate, non duplicate.

## I formati di tag a confronto

TigerTag, OpenPrintTag, OpenTag3D, OpenSpool, Bambu Lab e Creality CFS, dato
per dato e con le fonti: **[Formati di tag per bobine a confronto](./tag-formats.md)**.

## Oltre le stampanti

La compatibilità non riguarda solo le stampanti: guarda l'elenco, in crescita, dell'
**[hardware di terze parti compatibile](./third-party-hardware.md)** — lettori
NFC, analizzatori di filamento, bilance USB — e il
**[software costruito su TigerTag](../developers/integrations.md)**.

Le etichette delle bobine si stampano direttamente dal telefono su
**[stampanti di etichette Bluetooth](./label-printers.md)**.

## La risposta universale

Qualunque sia la stampante: incolla un chip [TigerTag](../products/tigertag.md) sulla
bobina e l'intero ecosistema funziona — identificazione, inventario, peso,
condivisione e dati del filamento inviati a ogni stampante integrata.

---

**◀ Precedente:** [TigerScale](../products/tigerscale.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Bambu Lab](./bambu-lab.md)
