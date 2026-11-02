---
sourceHash: 7df403d9ec01cc589f8d8c155cd8d0cb8154cd2993e09860c8c2a54ec787ef9c
sourcePath: docs/compatibility/bambu-lab.md
---

# Bambu Lab

## Drucker-Verbindung – **Live**

Tiger Studio verbindet sich auf zwei Wegen mit einem Bambu-Lab-Drucker:

| Aspekt | Detail |
|---|---|
| LAN | MQTTS (TLS) direkt zum Drucker, Port 8883. Dafür müssen **LAN Only mode** und **Developer Mode** des Druckers einmalig aktiviert werden – [Schritt für Schritt pro Modell](#in-den-lan-modus-wechseln). |
| Cloud | Einmal mit deinem Bambu-Lab-Konto anmelden (E-Mail + Einmalcode) – jeder Drucker des Kontos wird automatisch gefunden, der LAN-Zugangscode inklusive. Dafür ist kein Schalter am Drucker nötig. |
| Filament | AMS-Unterstützung – bis zu 16 Slots, Filament pro Slot bearbeitbar |
| Erkennung | LAN: SSDP + TLS-Probe sowie Hinzufügen per IP. Cloud: automatisch, über das Konto. |
| Kamera | JPEG-Stream (TCP 6000) / RTSP – auf beiden Wegen derselbe Feed, setzt aktiviertes **LAN Mode Liveview** am Drucker voraus |
| Telemetrie | Temperaturen, Auftragsfortschritt, Druckvorschau |

> **Cloud-Verbindungen sind heute schreibgeschützt**, mit einer Ausnahme. Du
> bekommst Live-Telemetrie – Temperaturen, Fortschritt, Kamera – und das **Licht**
> des Druckers, das sich über die Cloud schalten lässt. Alles Übrige, was auf die
> Maschine einwirkt (Pause, Fortsetzen, Stopp), braucht den LAN-Weg.

## Native RFID – Spezifikation dokumentiert, Auslesen in der App geplant

Die Spulen-Tags von Bambu sind **Mifare Classic 1K** mit **aus der UID per
HKDF-SHA256 abgeleiteten Schlüsseln** – kryptografisch gesperrt, damit sie dem
Ökosystem des Herstellers dienen. Eine reine Lese-Dekodierungsspezifikation wird
in
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md)
gepflegt.

## Der Ablauf

1. **Drucker hinzufügen** – entweder **im LAN** (SSDP-Erkennung oder Hinzufügen
 per IP, gepaart mit dem LAN-Zugangscode des Druckers) oder **über die Cloud**
 (mit deinem Bambu-Lab-Konto anmelden – jeder Drucker darauf wird automatisch
 gefunden). Der LAN-Weg setzt voraus, dass LAN Only mode und Developer Mode am
 Drucker zuerst einmalig aktiviert wurden –
 [Schritt für Schritt pro Modell](#in-den-lan-modus-wechseln).
2. **Spule scannen** – Handy oder Desktop-Lesegerät; die Spule landet in deinem
 Bestand.
3. **Einem AMS-Slot zuweisen** – Tiger Studio sendet das Filamentprofil (Material,
 Farbe) per MQTTS an den Slot; die Angaben auf der Maschine entsprechen nun der
 Wirklichkeit, über bis zu 16 AMS-Slots.
4. **Live** – Temperaturen, Auftragsfortschritt, Druckvorschau, die Uhrzeit
 **„Endet um“** und der Kamera-Feed, direkt in der Druckeransicht.

## In den LAN-Modus wechseln

Der LAN-Weg setzt voraus, dass am Drucker selbst **LAN Only mode** und
**Developer Mode** aktiviert sind – eine einmalige Einrichtung am Bildschirm.
Wähle unten dein Modell für die genauen Schritte.

<div class="ts-model-picker">
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1-mini.png" alt="A1 mini" /><span>A1 mini</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1.png" alt="A1" /><span>A1</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a2l.png" alt="A2L" /><span>A2L</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1p.png" alt="P1P" /><span>P1P</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1s.png" alt="P1S" /><span>P1S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/p2s.png" alt="P2S" /><span>P2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1c.png" alt="X1 Carbon" /><span>X1 Carbon</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1e.png" alt="X1E" /><span>X1E</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x2d.png" alt="X2D" /><span>X2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2s.png" alt="H2S" /><span>H2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2d.png" alt="H2D" /><span>H2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2dpro.png" alt="H2D Pro" /><span>H2D Pro</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2c.png" alt="H2C" /><span>H2C</span></a>
</div>

## Einschränkungen

- Native Bambu-Tags werden in der App noch nicht gelesen – die Spezifikation ist dokumentiert, und die aktuelle Arbeit zielt darauf, Tag-Daten der Hersteller in TigerData-Spulen umzuwandeln (siehe [Kompatibilität](./README.md)).
- Der Kamera-Feed setzt aktiviertes LAN Mode Liveview am Drucker voraus, über welchen Verbindungsweg auch immer.

---

**◀ Zurück:** [Kompatibilität](./README.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Creality](./creality.md)
