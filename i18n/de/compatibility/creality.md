---
sourceHash: cbf8e821d88b60b01f06da58bf3790fa335e7d0b940f38f9f3ca066fe0851b2b
sourcePath: docs/compatibility/creality.md
---

# Creality

## Drucker-Verbindung – **Live**

| Aspekt | Detail |
|---|---|
| Protokoll | WebSocket, Port 9999 (Heartbeat-basiert) |
| Filament | CFS-Unterstützung für mehrere Spulen (boxsInfo) |
| Kamera | WebRTC-Video (Port 8000) |
| Telemetrie | Temperaturen, Auftragsfortschritt, Druckvorschau |

## Native RFID – Spezifikation dokumentiert, Auslesen in der App geplant

Die Spulen-Tags von Creality sind **Mifare Classic 1K** mit einem
**AES-128-ECB-Schlüssel für Sektor 1** und optionaler Verschlüsselung der
Nutzdaten. Reine Lese-Dekodierungsspezifikation:
[`docs/rfid-vendors/creality.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/creality.md).

## Der Ablauf

1. **Drucker hinzufügen** – LAN-Erkennung oder Hinzufügen per IP; Tiger Studio
 verbindet sich über den WebSocket des Druckers und hält die Verbindung am Leben.
2. **Spule scannen** – Handy oder Desktop-Lesegerät; sie landet in deinem Bestand.
3. **Einem CFS-Slot zuweisen** – Tiger Studio ordnet Spulen aus dem Bestand den
 CFS-Boxen zu, damit die Filament-Angaben auf der Maschine der Wirklichkeit
 entsprechen.
4. **Live** – Temperaturen, Auftragsfortschritt, Druckvorschau, die Uhrzeit
 „Endet um“ und der **WebRTC-Kamerastream** in der Druckeransicht.

## Einschränkungen

- Native Creality-Tags werden in der App noch nicht gelesen – die Spezifikation ist dokumentiert, und die aktuelle Arbeit zielt darauf, Tag-Daten der Hersteller in TigerData-Spulen umzuwandeln (siehe [Kompatibilität](./README.md)).

---

**◀ Zurück:** [Bambu Lab](./bambu-lab.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Elegoo](./elegoo.md)
