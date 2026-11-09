---
sourceHash: dca3254cea9d6296d6f313f60c5ca02779bb716dda7dd4a0a7f1b717b4c12590
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Drucker-Verbindung – **Live (Beta)**, seit Tiger Studio 2.41

Tiger Studio verbindet sich mit **jedem Drucker, auf dem Klipper mit Moonraker läuft**:
Voron, RatRig, Vzbot, Sovol, Qidi, Elegoo Neptune 4, Creality K1 / K2 /
Ender-3 V3, FLSun, Artillery X4, Kingroon und alle anderen – 161 Maschinen sind
mit ihrem Bild im Hinzufügen-Dialog. Die Integration ist eine **Beta**.

| Aspekt | Detail |
|---|---|
| Protokoll | Moonraker-HTTP-API, alle 2 s abgefragt; standardmäßig Port 7125, ein anderer Port kann eingestellt werden |
| Erkennung | LAN-Scan oder von Hand mit Adresse und optionalem Moonraker-API-Schlüssel hinzugefügt |
| Filament-Slots | **Happy Hare**-Gates und **AFC**-Lanes, gelesen und bearbeitet über die eigenen Befehle der Maschine (`MMU_GATE_MAP`, `SET_MATERIAL` / `SET_COLOR`); ein einfacher Extruder wird angezeigt, speichert aber keine Filamentdaten |
| Druckauftrag | Laufender Druckauftrag mit Vorschaubild und Schichten; Pause, Fortsetzen, Abbrechen |
| Steuerung | Verfahren, Referenzfahrt, Bauteillüfter, Geschwindigkeit, Beleuchtung; Temperaturen mit einem Klick einstellen |
| Telemetrie | Extruder, Druckbett, Kammer und jeder `temperature_sensor` / `temperature_fan` / `heater_generic` |
| Kamera | MJPEG-Stream oder Schnappschüsse |

Maschinen, deren Hersteller eine geschlossene Firmware auf Klipper aufsetzen,
behalten ihre eigene Verbindung: [Snapmaker](./snapmaker.md), [FlashForge](./flashforge.md) und
[Anycubic](./anycubic.md) werden über ihre eigenen Konnektoren erreicht, nicht über
diesen. Eine Maschine, die auf beiden Wegen erreichbar ist – etwa ein Creality K1 –,
bietet die Wahl beim Hinzufügen an.

## Native RFID – n. z.

Klipper ist Drucker-Firmware, kein Spulen-Tag-Format. Die Identität der Spule
kommt von ihrem TigerTag, gelesen mit einem Handy oder einem Desktop-Lesegerät.

## Der Ablauf

1. **Drucker hinzufügen** – vom LAN-Scan gefunden oder von Hand hinzugefügt.
2. **Eine Spule scannen** – mit deinem Handy (oder einem Desktop-Lesegerät); sie
 landet in deinem Bestand.
3. **Einem Gate oder einer Lane zuweisen** – Tiger Studio schreibt sie mit dem
 eigenen Happy-Hare- oder AFC-Befehl der Maschine, sodass auf dem Drucker
 nichts installiert werden muss.
4. **Live** – Druckauftrag, Temperaturen und Kamera in der Druckeransicht.

Ein [TigerSpool](../products/tigerspool.md) kann ebenfalls einen Klipper-Slot
zuweisen, aber dieser Weg ist **experimentell**: geschrieben gegen den Treiber
von Tiger Studio und einen Moonraker-Mock, noch nicht auf einem Drucker getestet.

---

**◀ Zurück:** [Snapmaker](./snapmaker.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [OpenSpool](./openspool.md)
