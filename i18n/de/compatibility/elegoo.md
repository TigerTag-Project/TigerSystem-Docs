---
sourceHash: 636849e192cdbe3efc38d30a1b16a4f58828a9158ac9a9f1b2584f5977ce3b08
sourcePath: docs/compatibility/elegoo.md
---

# Elegoo

## Drucker-Verbindung – **Live**

| Aspekt | Detail |
|---|---|
| Protokoll | MQTT, Port 1883 |
| Erkennung | UDP-Broadcast, Port 52700 |
| Filament | 4 Slots (Canvas) |
| Steuerung | Live-Bedienfeld: Referenzfahrt/Verfahren, Temperaturen, Licht, Lüfter, Geschwindigkeitsmodus, Laden/Entladen |
| Telemetrie | Temperaturen, Auftragsfortschritt |

## Native RFID – Spezifikation dokumentiert, Auslesen in der App geplant

Die Spulen-Tags von Elegoo sind **Mifare Ultralight**, geschützt nur durch
**Magic Bytes** (`EE EE EE EE`) – keine echte Authentifizierung. Reine
Lese-Dekodierungsspezifikation:
[`docs/rfid-vendors/elegoo.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/elegoo.md).

## Der Ablauf

1. **Drucker hinzufügen** – automatische LAN-Erkennung (UDP-Broadcast) oder
 Hinzufügen per IP. Dafür muss der **LAN Only mode** einmalig am Touchscreen
 des Druckers aktiviert werden –
 [Schritt für Schritt](#in-den-lan-modus-wechseln).
2. **Spule scannen** – Handy oder Desktop-Lesegerät; sie landet in deinem Bestand.
3. **Einem Slot zuweisen** – Tiger Studio ordnet Spulen aus dem Bestand den vier
 Canvas-Slots zu.
4. **Live & Steuerung** – über Telemetrie und Auftragsfortschritt hinaus bekommt
 Elegoo ein **vollständiges Bedienfeld**: Achsen referenzieren und verfahren,
 Düsen- und Bett-Solltemperaturen setzen, das Licht schalten, den Lüfter
 steuern, den Geschwindigkeitsmodus wählen, Filament pro Slot laden und
 entladen.

## In den LAN-Modus wechseln

Die direkte Verbindung von Tiger Studio setzt voraus, dass am Drucker selbst der
**LAN Only mode** aktiviert ist – eine einmalige Einrichtung am Bildschirm.

<div class="ts-model-picker">
<a href="../tutorials/elegoo-cc2-lan-mode.md"><img src="../assets/elegoo-lan-mode/models/cc2.png" alt="Centauri Carbon 2" /><span>Centauri Carbon 2</span></a>
</div>

## Bonus: Tags im Elegoo-Format schreiben

Der integrierte Editor der App kann einen **Chip in dem Format neu schreiben, das
Elegoo-Drucker erwarten** – ein TigerTag-Chip kann also sogar zu einem nativen
Elegoo-Tag werden, wenn dein Ablauf das braucht. Dein Chip, deine Entscheidung.

## TigerTag direkt an der Maschine lesen – in Vorbereitung

Eine angepasste Firmware ist **in Vorbereitung**, mit der ein Elegoo-Drucker
TigerTags **direkt** an der Maschine lesen könnte – nach demselben Prinzip wie
beim [Snapmaker U1](./snapmaker.md).

Sie ist noch nicht verfügbar, und es gibt kein Datum. Bis dahin liest ein Elegoo
TigerTag-identifiziertes Filament so, wie der obige Ablauf es beschreibt – über
das Handy, Tiger Studio oder ein [TigerSpool](../products/tigerspool.md) neben
der Maschine, ohne dass am Drucker etwas verändert wird.

## Einschränkungen

- Native Elegoo-Tags werden in der App noch nicht gelesen – die Spezifikation ist dokumentiert, und die aktuelle Arbeit zielt darauf, Tag-Daten der Hersteller in TigerData-Spulen umzuwandeln (siehe [Kompatibilität](./README.md)).

---

**◀ Zurück:** [Creality](./creality.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [FlashForge](./flashforge.md)
