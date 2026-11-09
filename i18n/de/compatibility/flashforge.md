---
sourceHash: 0da2b619f681b73709bf69f7a267703c5e222bb752d614aa97a95027294187e1
sourcePath: docs/compatibility/flashforge.md
---

# FlashForge

## Drucker-Verbindung – **Live**

| Aspekt | Detail |
|---|---|
| Protokoll | HTTP-Polling (Port 8898) + TCP-M-Codes (Port 8899) |
| Erkennung | UDP-Multicast (225.0.0.9:19000) |
| Filament | IFS – das Multi-Filament-System von FlashForge |
| Kamera | MJPEG-Stream |
| Telemetrie | Temperaturen, Auftragsfortschritt |

## Native RFID – keine: Die Maschinen haben kein Lesegerät

FlashForge-Drucker werden **ohne jedes RFID-Lesegerät** ausgeliefert und ohne ein
eigenes RFID-Format. Damit ist dies die deutlichste Demonstration des Vorteils
von TigerSystem: **Wir haben FlashForge-Maschinen die Fähigkeit gegeben, mit
NFC-identifiziertem Filament zu arbeiten – mithilfe des NFC-Lesegeräts, das im
Smartphone des Nutzers ohnehin steckt.** Eine völlig neue Fähigkeit, dem Drucker
eines anderen hinzugefügt, **komplett kostenlos, ohne Kosten für den Nutzer und
ohne jede Änderung an der Maschine.**

## FlashForge × TigerSystem – die offizielle Firmware

Das eigene Entwicklungsteam von FlashForge hat eine Firmware für den
**Creator 5** und den **Creator 5 Pro** gebaut, die **FlashForge Cloud und LAN
gleichzeitig** betreibt.

Das bedeutet mehr, als es klingt. Die Standard-Firmware zwingt dich zu wählen:
Schaltest du die Cloud ein, erreichen lokale Tools den Drucker nicht mehr. Diese
Wahl war das Einzige, was einen FlashForge-Besitzer von diesem Ökosystem trennte –
und sie ist jetzt weg. Es ist eine **offizielle FlashForge-Firmware**, kein
Community-Fork und kein Patch – gebaut mit TigerTag, für diese Integration, und
hier mit ihrem Einverständnis veröffentlicht.

<div class="ts-model-picker">
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/"><img src="../assets/flashforge-connection-tutorial/models/creator-5.png" alt="FlashForge Creator 5" /><span>Creator 5</span></a>
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/"><img src="../assets/flashforge-connection-tutorial/models/creator-5-pro.png" alt="FlashForge Creator 5 Pro" /><span>Creator 5 Pro</span></a>
</div>

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/">Download – Creator 5</a>
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/">Download – Creator 5 Pro</a>
<a href="https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud"><img src="../assets/icons/github.svg" alt="" /> Quellcode und Installationsanleitung</a>
</div>

Die Installation erfolgt von einem USB-Stick. Kostenlos für alle, mit oder ohne
TigerTag-Hardware.

### Verbinden, sobald die Firmware installiert ist

Schalte in den Druckereinstellungen den **LAN-Modus ein** – das ist die gesamte
Änderung, die die Firmware möglich macht. Tiger Studio findet den Drucker dann
per **automatischer Erkennung**, oder du fügst ihn von Hand mit seiner
**IP-Adresse** hinzu. Du musst nicht mehr zwischen Cloud und lokalen Tools
wählen: Beides ist gleichzeitig aktiv.

| | Standard-Firmware | Mit dieser Firmware |
|---|:---:|:---:|
| FlashForge Cloud – App, Fernzugriff | ✅ | ✅ |
| LAN-Zugriff – lokale Tools in deinem Netzwerk | ✅ | ✅ |
| **Beides gleichzeitig** | ❌ | ✅ |
| Tiger Studio, Tiger NFC Connect und TigerSpool **bei eingeschalteter Cloud** | ❌ | ✅ |

### Nichts wird aufgegeben

Der Besitzer behält jede Funktion von FlashForge Cloud und bekommt das ganze
Ökosystem obendrauf: einen kostenlosen, quelloffenen **Filament- und
Druckermanager** auf dem Desktop, ein **Handy, das Spulen liest und schreibt**,
und **[TigerSpool](../products/tigerspool.md)** – eine quelloffene Lesebox, die
neben den Maschinen steht und **bis zu 24 Drucker** in ihrer Liste führt, zehn
davon gleichzeitig verbunden – eine Box für das ganze Regal.

So liest ein Drucker ohne Lesegerät und ohne eigenes Format jetzt den Chip jeder
Filamentmarke, die TigerTag nutzt – und auch den von Spulen, die Maker zu Hause
selbst taggen, auf Filament, das nie mit einem Chip ausgeliefert wurde.

Dass ein Druckerhersteller seine Maschine für ein Ökosystem öffnet, das ihm nicht
gehört, ist eine seltene Entscheidung. Jeder Maker, der eine solche Maschine
besitzt, profitiert davon.

## Der Ablauf

1. **Drucker hinzufügen** – per Netzwerk-Scan gefunden (UDP-Multicast), wobei nur
 die Printer ID nötig ist, oder von Hand mit IP-Adresse, Seriennummer und
 Printer ID hinzugefügt.
2. **Spule scannen** – mit deinem Handy (oder einem Desktop-Lesegerät); sie landet
 in deinem Bestand.
3. **Einem IFS-Slot zuweisen** – **ein Scan, ein Klick** in der Zuordnung von
 Tiger Studio. Der Drucker kennt sein Filament danach so genau wie eine Maschine
 mit eingebautem RFID, bei jedem FlashForge-Modell, ohne Hardware-Änderung und
 ohne dass der Maschine etwas hinzugefügt wird.
4. **Live** – Temperaturen, Auftragsfortschritt und der MJPEG-Kamerastream in der
 Druckeransicht.

## Den Drucker hinzufügen

Tiger Studio braucht drei Dinge, um mit einem FlashForge zu sprechen: seine
**IP-Adresse**, seine **Seriennummer** und ein **Passwort** – das der Drucker
selbst **Printer ID** nennt. Ein Wert, zwei Namen: Was der Touchscreen als
Printer ID anzeigt, kommt in das Passwortfeld von Tiger Studio.

Wie viele der drei du eintippen musst, hängt davon ab, wie der Drucker gefunden
wird:

| Wie | Was du eingibst |
|---|---|
| **Netzwerk-Scan** – Tiger Studio findet den Drucker in deinem lokalen Netzwerk | nur die **Printer ID**; IP und Seriennummer liefert der Scan |
| **Von Hand** – der Scan hat ihn nicht gefunden | **IP-Adresse + Seriennummer + Printer ID** |

Einen Cloud-Weg gibt es nicht, es ist also immer einer dieser beiden. Wähle dein
Modell, um zu sehen, wo jeder Wert auf dem Touchscreen steht.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Zurück:** [Elegoo](./elegoo.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Anycubic](./anycubic.md)
