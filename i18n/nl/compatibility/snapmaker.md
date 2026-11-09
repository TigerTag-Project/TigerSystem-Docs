---
sourceHash: 448c6630969a0d99765d2a206f9a0788e9c4e02ef90d870a57ba26db3c1c9fdf
sourcePath: docs/compatibility/snapmaker.md
---

# Snapmaker

## Printerkoppeling — **Live**

| Aspect | Detail |
|---|---|
| Protocol | Moonraker WebSocket (JSON-RPC), poort 7125 + eigen extensies |
| Detectie | HTTP-scan |
| Filament | 4 slots — filament bewerken per slot (RRGGBBAA-kleurmodel) |
| Bediening | Live bedieningspaneel (assen, temperaturen, licht, ventilator, snelheid, laden/ontladen) |
| Telemetrie | Temperaturen, voortgang van de print |

## Native RFID — specificatie gedocumenteerd, uitlezen in de app gepland

Snapmaker-spoeltags zijn **Mifare Classic 1K** met **via HKDF afgeleide sleutels per
sector** en een **RSA-2048 PKCS#1 v1.5 + SHA-256-handtekening** — het meest
vergrendelde formaat dat tot nu toe is gedocumenteerd. Specificatie voor alleen-lezen decodering:
[`docs/rfid-vendors/snapmaker.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/snapmaker.md).

## De werkwijze

1. **Voeg de printer toe** — HTTP-scan op het LAN of toevoegen via IP; Tiger Studio
 spreekt Moonraker (JSON-RPC over WebSocket).
2. **Scan een spoel** — telefoon of desktoplezer; de spoel komt in je inventaris.
3. **Wijs hem toe aan een slot** — filament bewerken per slot (het RRGGBBAA-
 kleurmodel van Snapmaker wordt transparant afgehandeld).
4. **Live & bediening** — telemetrie, voortgang van de print en een **bedieningspaneel**:
 assen, temperaturen, licht, ventilator, snelheidsmodus, laden/ontladen per slot.

## Beperkingen

- Native Snapmaker-tags worden nog niet in de app gelezen — de specificatie is gedocumenteerd, en het huidige werk richt zich op het omzetten van tagdata van fabrikanten naar TigerData-spoelen (zie [Compatibiliteit](./README.md)).

## De eerste printer die TigerTag native leest

De
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
van de community (onafhankelijk, GPL-3.0) voegt SSH, camerastreaming en metrics toe — en daarmee
**leest de Snapmaker U1 TigerTags native, op de machine zelf**. Daarmee is de
U1 de eerste printer waarop een TigerTag-spoel zonder enige app ertussen wordt herkend — de toekomst
waar het [collectieve spel](../vision/for-filament-manufacturers.md) naartoe werkt, vroegtijdig
aangebroken dankzij de community. Zie
[integraties van derden](../developers/integrations.md).

---

**◀ Vorige:** [Anycubic](./anycubic.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Klipper](./klipper.md)
