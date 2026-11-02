---
sourceHash: a12992e7b500e2dde8a21443c09a157093fbf40e589c4ad4dc960c7acde2ce6f
sourcePath: docs/compatibility/README.md
---

# Compatibiliteit

Hoe TigerSystem met elk printerecosysteem werkt. Twee onafhankelijke assen:

- **Printerkoppeling** — Tiger Studio praat via het LAN met de machine
 (telemetrie, filamentslots, opdracht, camera). **Zes merken zijn vandaag live.**
- **Native RFID** — de eigen spooltags van de fabrikant uitlezen. Per
 fabrikant gedocumenteerd. Rechtstreeks decoderen in de app is **nog niet geïntegreerd**
 (het juiste interoperabiliteitsmodel is nog een open vraag); het huidige werk richt zich op
 het **omzetten van tagdata van fabrikanten naar digitale TigerData-spoelen**, zodat filament
 van andere merken gescand en beheerd kan worden in het ecosysteem. Ondertussen
 werkt de TigerTag-chip zelf al met elke printer via de
 [smartphonebrug](../philosophy/smartphone-bridge.md).

## Matrix

| Ecosysteem | Printerkoppeling (Tiger Studio) | Native tagformaat | Native tagvergrendeling | Status RFID-uitlezing |
|---|---|---|---|---|
| <img src="../assets/brands/bambulab.svg" width="14" alt="" /> [Bambu Lab](./bambu-lab.md) | **Live** — MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256, sleutels afgeleid van de UID | Specificatie gedocumenteerd |
| <img src="../assets/brands/creality.svg" width="14" alt="" /> [Creality](./creality.md) | **Live** — WebSocket + CFS | Mifare Classic 1K | AES-128-ECB-sectorsleutel | Specificatie gedocumenteerd |
| <img src="../assets/brands/elegoo.svg" width="14" alt="" /> [Elegoo](./elegoo.md) | **Live** — MQTT + Canvas | Mifare Ultralight | Alleen magic bytes | Specificatie gedocumenteerd |
| <img src="../assets/brands/flashforge.svg" width="14" alt="" /> [FlashForge](./flashforge.md) | **Live** — HTTP + IFS | — (machines hebben geen RFID-lezer) | — | TigerTag voegt er NFC aan toe, zonder extra kosten |
| <img src="../assets/brands/anycubic.svg" width="14" alt="" /> [Anycubic](./anycubic.md) | **Live** — MQTTS LAN + cloud, ACE | Mifare Ultralight | Geen | Specificatie gedocumenteerd |
| <img src="../assets/brands/snapmaker.svg" width="14" alt="" /> [Snapmaker](./snapmaker.md) | **Live** — Moonraker-WebSocket + 4 slots | Mifare Classic 1K | HKDF + RSA-2048-handtekening | Specificatie gedocumenteerd |
| [Klipper](./klipper.md) | Nog niet (basis is er) | n.v.t. | n.v.t. | n.v.t. |
| [OpenSpool](./openspool.md) | n.v.t. (tagstandaard, geen printer) | NFC Type 2, NDEF-JSON | Geen — open standaard | Specificatie gedocumenteerd |
| Qidi | Niet geïntegreerd | Mifare Classic 1K | Standaardsleutel | [Specificatie gedocumenteerd](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

> **Let op:** de RFID-bladen per fabrikant (decodeerspecificaties voor alleen-lezen, afgeleid van
> het project [OpenRFID](https://github.com/suchmememanyskill/OpenRFID)) worden
> bijgehouden in de Tiger Studio-repository onder
> [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors)
> — ze worden hier gelinkt, niet gedupliceerd.

## Voorbij printers

Compatibiliteit gaat niet alleen over printers: bekijk de groeiende lijst met
**[compatibele hardware van derden](./third-party-hardware.md)** — NFC-lezers,
filamentanalyzers, USB-weegschalen — en de
**[software gebouwd op TigerTag](../developers/integrations.md)**.

## Het universele antwoord

Welke printer je ook hebt: plak een [TigerTag](../products/tigertag.md)-chip op de
spoel en het hele ecosysteem werkt — identificatie, inventaris, gewicht,
delen en filamentgegevens die naar elk van de zes geïntegreerde merken worden gestuurd.

---

**◀ Vorige:** [TigerScale](../products/tigerscale.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Bambu Lab](./bambu-lab.md)
