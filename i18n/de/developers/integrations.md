---
sourceHash: 6f9124180c40a232c7aab51fda782a891af83baafbcf03c27d697b0ccfcff594
sourcePath: docs/developers/integrations.md
---

# Auf TigerTag aufgebaut – Integrationen von Drittanbietern

Der ganze Sinn eines offenen Protokolls ist das, was *andere* damit bauen. Es
beginnt zu passieren – Projekte, die TigerTag auf eigene Faust integriert haben:

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)**
– das Spulen-RFID-Toolkit der Community für viele Hersteller. Es liest die
Tag-Formate vieler Hersteller – und **TigerTag ist eines davon**: Die offenen
Nutzdaten machten es zu einer einfachen Ergänzung.

## Snapmaker U1 Extended Firmware (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)**
– eine unabhängige Community-Firmware (GPL-3.0) für den Snapmaker U1 (SSH,
Kamera-Streaming, Metriken … und RFID-Extras). **Mit ihr liest der Snapmaker U1
TigerTags nativ – er ist damit der erste Drucker, der TigerTag direkt an der
Maschine liest.** Genau die Zukunft, auf die das gemeinsame Spiel zielt, durch die
Community früher eingetroffen.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** – eine Plattform zur
Filament-Bestandsverwaltung (Web, iOS/Android, Home Assistant,
OrcaSlicer-Nachbearbeitung, selbst hostbar). Ihre Spulenerkennung baut auf
TigerTag auf: *„Mark your spools with NFC chips (TigerTags) and manage your
inventory with a simple gesture.“* Ein Produkt eines Drittanbieters, mit eigener
Vision – auf dem offenen Protokoll laufend, genau wie gedacht.

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)**
· [stellio-app.com](https://stellio-app.com) – eine AGPL-3.0-Desktop-App (Python,
Windows), die eine lokale Bibliothek von 3D-Druck-Dateien verwaltet: Vorschauen,
semantische Suche, Übergabe an den Slicer, Druckwarteschlange. Ihre Filamentseite
liest den **TigerTag-Bestand**: Melde dich an, oder lass sie eine bestehende
Tiger-Studio-Sitzung übernehmen, und deine TigerTag-Spulen erscheinen in ihrem
Lager – **schreibgeschützt**, sie schreibt nie in deinen Bestand. Von dort filtert
sie die Bibliothek auf das, was deine Spulen tatsächlich drucken können, und warnt,
bevor ein Druck knapp wird.

---

Baust du etwas auf TigerTag? Sag uns Bescheid auf dem
[Discord](https://discord.gg/3Qv5TSqnJH) oder über die
[GitHub-Organisation](https://github.com/TigerTag-Project) – und denk daran, dass es
[TigerTag Certified](../../TRADEMARK.md) für geprüfte Integrationen gibt.

---

**▲ [Dokumentationsindex](../../README.md)** · **Siehe auch:** [Entwicklerübersicht](./README.md), [Was kannst du bauen?](./README.md), [Kompatibilität](../compatibility/README.md)
