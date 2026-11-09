---
sourceHash: e7b7c04f1668fe717ad7b48ac2cc3860f2a28e40c1c8e39db72c30fde1f7810f
sourcePath: docs/compatibility/README.md
---

# Kompatibilität

Wie TigerSystem mit dem Ökosystem jedes Druckerherstellers zusammenarbeitet. Zwei
voneinander unabhängige Achsen:

- **Drucker-Verbindung** – Tiger Studio spricht über das LAN mit der Maschine
 (Telemetrie, Filament-Slots, Auftrag, Kamera). **Sechs Marken sind heute live.**
- **Native RFID** – das Lesen der eigenen Spulen-Tags des Herstellers. Pro
 Hersteller dokumentiert. Das direkte Dekodieren in der App ist **noch nicht
 integriert** (das richtige Interoperabilitätsmodell ist noch eine offene Frage);
 die aktuelle Arbeit zielt darauf, **Tag-Daten der Hersteller in digitale
 TigerData-Spulen umzuwandeln**, damit sich Filament anderer Marken scannen und
 im Ökosystem verwalten lässt. Der TigerTag-Chip selbst funktioniert schon jetzt
 mit jedem Drucker über die
 [Smartphone-Brücke](../philosophy/smartphone-bridge.md).

## Matrix

| Ökosystem | Drucker-Verbindung (Tiger Studio) | Natives Tag-Format | Sperre des nativen Tags | Status des RFID-Lesens |
|---|---|---|---|---|
| <img src="../assets/brands/bambulab.svg" width="14" alt="" /> [Bambu Lab](./bambu-lab.md) | **Live** – MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256, UID-abgeleitete Schlüssel | Spezifikation dokumentiert |
| <img src="../assets/brands/creality.svg" width="14" alt="" /> [Creality](./creality.md) | **Live** – WebSocket + CFS | Mifare Classic 1K | AES-128-ECB-Sektorschlüssel | Spezifikation dokumentiert |
| <img src="../assets/brands/elegoo.svg" width="14" alt="" /> [Elegoo](./elegoo.md) | **Live** – MQTT + Canvas | Mifare Ultralight | Nur Magic Bytes | Spezifikation dokumentiert |
| <img src="../assets/brands/flashforge.svg" width="14" alt="" /> [FlashForge](./flashforge.md) | **Live** – HTTP + IFS | – (die Maschinen haben kein RFID-Lesegerät) | – | TigerTag fügt NFC hinzu, ohne Zusatzkosten |
| <img src="../assets/brands/anycubic.svg" width="14" alt="" /> [Anycubic](./anycubic.md) | **Live** – MQTTS-LAN + Cloud, ACE | Mifare Ultralight | Keine | Spezifikation dokumentiert |
| <img src="../assets/brands/snapmaker.svg" width="14" alt="" /> [Snapmaker](./snapmaker.md) | **Live** – Moonraker-WebSocket + 4 Slots | Mifare Classic 1K | HKDF + RSA-2048-Signatur | Spezifikation dokumentiert |
| [Klipper](./klipper.md) | **Live (Beta)** – Moonraker + Happy Hare / AFC | n. z. | n. z. | n. z. |
| [OpenSpool](./openspool.md) | n. z. (Tag-Standard, kein Drucker) | NFC Type 2, NDEF JSON | Keine – offener Standard | Spezifikation dokumentiert |
| Qidi | Nicht integriert | Mifare Classic 1K | Standardschlüssel | [Spezifikation dokumentiert](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

> **Hinweis:** Die RFID-Datenblätter pro Hersteller (reine Lese-Dekodierungsspezifikationen,
> abgeleitet vom Projekt [OpenRFID](https://github.com/suchmememanyskill/OpenRFID))
> werden im Tiger-Studio-Repository unter
> [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors)
> gepflegt – sie werden hier verlinkt, nicht dupliziert.

## Tag-Formate im Vergleich

TigerTag, OpenPrintTag, OpenTag3D, OpenSpool, Bambu Lab und Creality CFS,
Wert für Wert und mit Quellen: **[Spulen-Tag-Formate im Vergleich](./tag-formats.md)**.

## Jenseits der Drucker

Kompatibilität betrifft nicht nur Drucker: Sieh dir die wachsende Liste
**[kompatibler Hardware von Drittanbietern](./third-party-hardware.md)** an –
NFC-Lesegeräte, Filament-Analysegeräte, USB-Waagen – und die
**[Software, die auf TigerTag aufbaut](../developers/integrations.md)**.

## Die universelle Antwort

Egal welcher Drucker: Klebe einen [TigerTag](../products/tigertag.md)-Chip auf die
Spule, und das ganze Ökosystem funktioniert – Identifikation, Bestand, Gewicht,
Teilen und Filamentdaten, die an jede der sechs integrierten Marken gesendet
werden.

---

**◀ Zurück:** [TigerScale](../products/tigerscale.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Bambu Lab](./bambu-lab.md)
