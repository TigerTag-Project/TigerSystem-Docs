---
sourceHash: cbf8e821d88b60b01f06da58bf3790fa335e7d0b940f38f9f3ca066fe0851b2b
sourcePath: docs/compatibility/creality.md
---

# Creality

## Printerkoppeling — **Live**

| Aspect | Detail |
|---|---|
| Protocol | WebSocket, poort 9999 (heartbeat-gebaseerd) |
| Filament | CFS-ondersteuning voor meerdere spoelen (boxsInfo) |
| Camera | WebRTC-video (poort 8000) |
| Telemetrie | Temperaturen, voortgang van de print, printvoorbeeld |

## Native RFID — specificatie gedocumenteerd, uitlezen in de app gepland

Creality-spoeltags zijn **Mifare Classic 1K** met een **AES-128-ECB-sleutel voor
sector 1** en optionele versleuteling van de payload. Specificatie voor alleen-lezen decodering:
[`docs/rfid-vendors/creality.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/creality.md).

## De werkwijze

1. **Voeg de printer toe** — LAN-detectie of toevoegen via IP; Tiger Studio verbindt
 via de WebSocket van de printer en houdt de verbinding in stand.
2. **Scan een spoel** — telefoon of desktoplezer; de spoel komt in je inventaris.
3. **Wijs hem toe aan een CFS-slot** — Tiger Studio koppelt inventarisspoelen
 aan de CFS-boxen zodat de filamentinformatie aan de machinekant klopt met de werkelijkheid.
4. **Live** — temperaturen, voortgang van de print, printvoorbeeld, eindtijd ("Ends at") en
 de **WebRTC-camera**stream in de printersweergave.

## Beperkingen

- Native Creality-tags worden nog niet in de app gelezen — de specificatie is gedocumenteerd, en het huidige werk richt zich op het omzetten van tagdata van fabrikanten naar TigerData-spoelen (zie [Compatibiliteit](./README.md)).

---

**◀ Vorige:** [Bambu Lab](./bambu-lab.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Elegoo](./elegoo.md)
