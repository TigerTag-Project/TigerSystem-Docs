---
sourceHash: 2d9fb2d55c78225bfac135d62f3912ead26a4eb709ecafb4ff9d0d0d7d69265e
sourcePath: docs/compatibility/anycubic.md
---

# Anycubic

## Printerkoppeling — **Live** (LAN + cloud)

| Aspect | Detail |
|---|---|
| Protocol (LAN) | MQTTS, poort 9883 (TLS 1.2), rechtstreeks naar de printer |
| Protocol (cloud) | Ondertekende REST + MQTT van de cloud van de fabrikant |
| Filament | ACE-box voor meerdere kleuren — ondersteuning per slot |
| Detectie | `/info`-probe, poort 18910 |
| Camera | FLV-stream (poort 18088) |
| Bediening | Live bedieningspaneel (assen, temperaturen, licht, ventilator, laden/ontladen) |

> **Let op:** de cloudmodus is de enige plek waar een printerkoppeling via een cloud
> van de fabrikant loopt — de LAN-modus blijft volledig lokaal.

## Native RFID — specificatie gedocumenteerd, uitlezen in de app gepland

Anycubic-spoeltags zijn **Mifare Ultralight** zonder **authenticatie en zonder
cryptografie** — triviaal uit te lezen (en te klonen). Specificatie voor alleen-lezen decodering:
[`docs/rfid-vendors/anycubic.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/anycubic.md).

## De werkwijze

1. **Voeg de printer toe** — twee wegen: **LAN-modus** (lokale detectie via de
 `/info`-probe; de verbindingsgegevens worden geïmporteerd uit de configuratie
 van de slicer van de fabrikant) of **cloudmodus** via het Anycubic-account.
2. **Scan een spoel** — telefoon of desktoplezer; de spoel komt in je inventaris.
3. **Wijs hem toe aan een ACE-slot** — Tiger Studio koppelt inventarisspoelen
 aan de ACE-box voor meerdere kleuren.
4. **Live & bediening** — telemetrie, voortgang van de print, de FLV-camerastream en
 een **bedieningspaneel**: assen, temperaturen, licht, ventilator, laden/ontladen per
 slot.

## Beperkingen

- Native Anycubic-tags worden nog niet in de app gelezen — de specificatie is gedocumenteerd, en het huidige werk richt zich op het omzetten van tagdata van fabrikanten naar TigerData-spoelen (zie [Compatibiliteit](./README.md)).

---

**◀ Vorige:** [FlashForge](./flashforge.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Snapmaker](./snapmaker.md)
