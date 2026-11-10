---
sourceHash: b28699b1ffe29a8197a36d00c7662d7a3930211c20f3d4e28aab3ac33abd11e8
sourcePath: docs/glossary.md
---

# Glossar

Jeder Begriff, den diese Dokumentation verwendet, ohne ihn zu erklären. Die Definitionen sind
den daneben verlinkten Seiten entnommen – jeder Eintrag verweist auf die Seite, die die
ganze Geschichte erzählt.

> **Hinweis:** Dieses Glossar ist ein **Grundstock**. Es deckt die Begriffe ab, die bereits
> in diesem Repository vorkommen; es ist bewusst unvollständig, und Einträge
> kommen erst hinzu, wenn es irgendwo in der Dokumentation den Stoff dafür gibt.
> Fehlt dir ein Begriff? Füge ihn mit einem Link auf die Seite hinzu, die ihn definiert.

## Das eigene Vokabular des Ökosystems

| Begriff | Bedeutung |
|---|---|
| **TigerSystem** | Das gesamte offene Ökosystem: das Chip-Format, die Referenzdaten, die Apps, die Hardware und die Cloud-Oberfläche. Siehe [Warum es TigerSystem gibt](./vision/why-tigersystem.md). |
| **TigerTag** | Ein handelsüblicher NTAG-NFC-Chip mit der offenen 144-Byte-TigerTag-Payload – die Identität einer Spule, von allem lesbar. Siehe [TigerTag](./products/tigertag.md). |
| **TigerTag+** | Ein TigerTag, dessen Identität eine **Produkt-ID aus dem offiziellen Katalog** trägt, plus optionale Anreicherungsdaten, die über die Metadaten der Web-API bereitgestellt werden. Der Chip bleibt zu 100 % offline lesbar. Das `+` bedeutet *identifiziert*, nicht *zertifiziert*. Siehe [TigerTag+](./products/tigertag-plus.md). |
| **TigerTag+ Certified** | Ein TigerTag+, der zusätzlich eine kryptografische **Signatur** trägt, geschrieben von einem Hersteller, der die Zertifizierung und ihre Signierwerkzeuge besitzt. Das Prüfen ist kostenlos und offline; das Ausstellen ist, was die Zertifizierung gewährt. |
| **TigerData** | Dieselbe Identität ganz ohne Chip: die Daten des Protokolls in rein digitaler Form, ohne UID, jederzeit zu einem echten Chip aufwertbar. Siehe [Eine Identität, vier Zustände](./concepts/universal-filament-identity.md). |
| **TigerData+** | Eine chiplose Spule, die ein echtes Produkt aus dem offiziellen Katalog trägt – genaue Marke, Farbe, Material, Temperaturen, Durchmesser, SKU und EAN – statt von Hand eingetippter Werte. Das `+` bedeutet *identifiziert*, nicht *zertifiziert*. |
| **Offiziell** | Von TigerSystem selbst gemacht – die Chips in beiden Bauformen sowie die Apps und die Hardware unter [Produkte](./products/README.md). Eine Herkunftsangabe, kein Zeichen, das vergeben wird: TigerSystem zertifiziert sich nicht selbst. |
| **TigerTag Compatible** | Die kostenlose Stufe: alles, was mit TigerTag-Chips *spricht* – Lesegeräte, Apps, Drucker, Slicer, Werkzeuge. Keine Erlaubnis nötig, um es umzusetzen, es zu sagen oder das Logo in einer App, einer Dokumentation oder einem Store-Eintrag zu zeigen. Es deckt auch **TigerTag+** ab: Das Prüfen einer Signatur ist kostenlos, offline und uneingeschränkt. Das eine Wort, das es nie einschließt, ist *zertifiziert*. |
| **TigerTag Certified** | Die geprüfte Stufe, offen für alles, was ein Dritter baut – ein Gerät, eine Anwendung, Filament, ein Inlay, einen Träger –, sobald es ein Audit gegen die Anforderungen besteht. Wird vergeben statt beansprucht, im Zertifizierungsregister geführt und ist widerrufbar. Es gibt zwei Geltungsbereiche, **TigerTag Certified** und **TigerTag+ Certified**. Zertifizierte Partner dürfen das Zeichen **auf dem Produkt** anbringen und TigerTag+-Signaturen ausstellen. Siehe [Entwicklerdokumentation](./developers/README.md) und die [Zertifizierungskriterien](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). |
| **Tiger NFC Connect** | Die mobile App (iOS/Android) – antippen zum Lesen, antippen zum Schreiben, den Katalog durchsuchen. Früher „TigerTag RFID Connect“. Siehe [Tiger NFC Connect](./products/tigertag-connect.md). |
| **Tiger Studio** | Die quelloffene Desktop-App (Windows/macOS/Linux) – Bestand, Racks, Sensoren und Druckerverbindungen. Siehe [Tiger Studio](./products/tiger-studio.md). |
| **TigerHub** | Das Web-Zuhause des Ökosystems unter `tigersystem.io` – Schaufenster, Wunschlisten, Freundescodes, öffentliches Teilen von Listen. Siehe [TigerHub](./products/tigerhub.md). |
| **TigerPOD** | Der 3D-druckbare Ständer mit zwei NFC-Lesegeräten – kostenlose STL-Datei. Siehe [TigerPOD](./products/tigerpod.md). |
| **TigerScale** | Die quelloffene ESP32-Filamentwaage, die „Wie viel ist noch übrig?“ beantwortet. Siehe [TigerScale](./products/tigerscale.md). |
| **TigerSpool** | Die Box neben dem Drucker, die bei Kontakt die Identität einer Spule in einen Druckerslot schreibt – keine App, keine Tastatur, jede Marke. Siehe [TigerSpool](./products/tigerspool.md). |
| **TigerTag Factory / Manager** | Die industrielle Werkzeugkette in Produktionsqualität, die Chips auf Filament-Produktionslinien programmiert, und die Werkzeuge zur Pflege der Filamentdatenbank. Nicht öffentlich. Siehe [Fabrik-Suite](./products/factory-suite.md). |
| **Träger** | Der Streifen, der die zwei Chips einer Spule trägt – einer an jedem gefalteten Ende, mit industriellem 3M-Klebstoff auf den Pappkern geklebt. Wird an der Fabrikline verwendet, einzeln für Refills verkauft und ist öffentlich und zu Hause druckbar. Siehe [Der TigerTag-Chip](./concepts/tigertag-chip.md). |
| **Masterspool** | Eine wiederverwendbare Rolle, auf die ein Refill ohne Spule montiert wird. Der Chip eines Refills sitzt im Pappkern, sodass er beim Filament bleibt und nicht bei der Rolle. |
| **Twin Tag** | Die zwei Chips einer Spule, als Paar zusammen geschrieben und für das ganze Leben der Spule identisch gehalten – immer als **eine** Spule gezählt. |
| **Referenzdatenbank** | Die gemeinsamen ID-Tabellen (Marken, Materialien, Optiken, Typen, Durchmesser, Einheiten), bereitgestellt über `cdn.tigertag.io`, sodass ein von einem Werkzeug codierter Chip in jedem anderen identisch gelesen wird. Siehe [Universelle Filamentidentität](./concepts/universal-filament-identity.md). |
| **Optik** | Das Feld der Referenzdatenbank, das Farbe und Oberfläche eines Filaments beschreibt; das [Material-Farbfeld](./developers/material-swatch.md) wird daraus gemalt. |
| **Material-Farbfeld** | Die normative Konvention, die die Farb-*Daten* einer Spule auf jeder Fläche in dasselbe *Bild* verwandelt – drei Formen (eine weiche 135°-Teilung für 2–3 harte Farben, ein Tortendiagramm für 4+, ein 135°-Verlauf für fließende Farben), mit einem Referenz-Renderer, gegen den sich eine Implementierung prüfen lässt. Siehe [Das Material-Farbfeld](./developers/material-swatch.md). |
| **`.ttag`-Datei** | Die portable Offline-Austauschdatei, die ein oder mehrere Bestandsmaterialien (TigerData, TigerData+, TigerTag oder TigerTag+) zwischen Werkzeugen transportiert. Siehe [das `.ttag`-Format](./developers/ttag-format.md). |
| **Zweites Leben** | Einen Chip für eine nachgefüllte oder umgewidmete Spule neu codieren oder ihn für jede andere NFC-Nutzung in reines NDEF umwandeln – ein Chip soll nie Elektroschrott werden. Siehe [Zweites Leben](./philosophy/second-life.md). |
| **Smartphone-Brücke** | Ein Smartphone (oder ein Desktop-Lesegerät) nutzen, um eine Spule für einen Drucker zu identifizieren, der kein eigenes RFID-Lesegerät hat. Siehe [Die Smartphone-Brücke](./philosophy/smartphone-bridge.md). |
| **Druckerverbindung** | Tiger Studio spricht über das LAN mit einer Maschine – Telemetrie, Filamentslots, Auftrag, Kamera. Zu unterscheiden vom Lesen der herstellereigenen Tags. Siehe [Kompatibilität](./compatibility/README.md). |
| **Refill** | Eine Filamentrolle, die ohne Spule verkauft wird und auf eine Spule montiert wird, die du schon besitzt. |

## NFC und RFID

| Begriff | Bedeutung |
|---|---|
| **NFC** | Near-Field Communication – der Nahbereichsfunk, den jedes moderne Smartphone zum Lesen eines TigerTag nutzen kann. |
| **RFID** | Radio-Frequency Identification, die größere Familie, zu der NFC gehört. Hier sowohl für die gesperrten Spulen-Tags der Hersteller als auch für TigerTag verwendet. |
| **NTAG213 / 215 / 216** | Die NXP-Chipfamilie, die ein TigerTag verwendet (NFC Forum Type 2). Die Payload ist so bemessen, dass sie auf den kleinsten, den NTAG213, passt; offizielle Chips mit Markierung sind NTAG215, um Speicherreserve für die Wiederverwendung zu lassen. Siehe [Der TigerTag-Chip](./concepts/tigertag-chip.md). |
| **NDEF** | NFC Data Exchange Format – der Standardcontainer, in dem die TigerTag-Payload gespeichert ist; deshalb kann jedes NFC-Werkzeug sie lesen, und deshalb lässt sich der Chip einer leeren Spule in ein einfaches NFC-Objekt verwandeln. |
| **UID** | Die eindeutige Hardwarekennung des Chips, bei der Herstellung festgelegt und nicht wiederbeschreibbar. Ein Chip-Backup ist an sie gebunden, ebenso eine TigerTag+-Certified-Signatur. |
| **Mifare Classic / Mifare Ultralight** | Die Chipfamilien, die Druckerhersteller für ihre eigenen Spulen-Tags verwenden – pro Hersteller dokumentiert in der [Kompatibilitätsmatrix](./compatibility/README.md). |
| **ACR122U** | Die Klasse handelsüblicher USB-NFC-Lesegeräte, mit denen man Chips von einem Computer aus liest und schreibt; ein [TigerPOD](./products/tigerpod.md) ist ein Ständer um eines herum. |
| **PN532 / RC522** | Günstige NFC-Lesemodule, meist mit einem ESP32 gepaart, für selbstgebaute Lesegeräte – der Ansatz, den [TigerScale](./products/tigerscale.md) verwendet. |
| **ECDSA** | Das Signaturverfahren, das das optionale `verify`-Extra des Python-SDK prüft – der Mechanismus hinter einer TigerTag+-Herkunftssignatur. Siehe [SDKs](./developers/sdks.md). |
| **OpenSpool** | Ein unabhängiger offener NFC-Tag-Standard für Spulen (NFC Type 2, NDEF-JSON, entsperrt). Siehe [OpenSpool](./compatibility/openspool.md). |
| **OpenRFID** | Das Community-Toolkit für RFID mehrerer Hersteller, aus dem die Dekodierblätter pro Hersteller abgeleitet sind und das TigerTags liest. Siehe [Integrationen von Drittanbietern](./developers/integrations.md). |

## Drucker und Hardware

| Begriff | Bedeutung |
|---|---|
| **AMS** | Das Automatic Material System von Bambu Lab – der Mehrspulen-Zuführer. Hier relevant, weil es typischerweise ein RFID-Lesegerät auf zwei Slots verteilt, weshalb eine Spule zwei Chips trägt. |
| **CFS** | Das Filament System von Creality – seine Multimaterial-Einheit. |
| **ACE** | Die Multimaterial-Einheit von Anycubic. |
| **Canvas** | Die Multimaterial-Einheit von Elegoo. |
| **IFS** | Das Mehrfilament-System von FlashForge – das Feld in seinem Protokoll heißt immer noch `matlStation`. |
| **MMU** | Multi-Material Unit – der Oberbegriff für das Zusatzgerät, das mehrere Filamente in einen Drucker einspeist (ERCF, MMU2, Box Turtle… in der Klipper-Welt). Siehe [Klipper](./compatibility/klipper.md). |
| **Klipper / Moonraker** | Die offene Druckerfirmware und ihre API – der WebSocket von Moonraker ist der Transportweg, den die Verbindung von Snapmaker bereits nutzt, und der nächste naheliegende für Klipper-Maschinen. Siehe [Klipper](./compatibility/klipper.md). |
| **HID-Waage** | Das USB-Standardprotokoll für Waagen (DYMO-M-Serie und Kompatible), von Tiger Studio nativ gelesen als Alternative eines Drittanbieters zu einer TigerScale. |
| **TD / TD-1 / TD1s** | **Transmission Distance** (Durchlässigkeit) – wie viel Licht ein Filament durchlässt, der Wert, auf den sich HueForge und Vollspektrum-Druck stützen – und der Analysator von [AJAX-3D](https://ajax-3d.com), der ihn misst, als Selbstbau-Variante (TD-1) und vormontiert (TD1s). Der gemessene TD kann im TigerTag-Protokoll selbst gespeichert werden. Siehe [Hardware von Drittanbietern](./compatibility/third-party-hardware.md). |
| **ESP32** | Der handelsübliche Mikrocontroller hinter der TigerScale und den meisten selbstgebauten TigerTag-Lesegeräten. |

## Cloud und Daten

| Begriff | Bedeutung |
|---|---|
| **Firebase / Firestore** | Der schlichte Google-Dienst, der Konten und Bestände hostet – eine gemeinsame Datenbank, die alle Apps lesen und beschreiben, mit Durchsetzung über serverseitige Sicherheitsregeln. Siehe [Bestand & Cloud-Sync](./concepts/inventory-and-cloud-sync.md). |
| **`cdn.tigertag.io`** | Der Ort, von dem die gemeinsame Referenzdatenbank bereitgestellt wird. |
| **Freundescode / Listenlink** | Die zwei Wege, einen Bestand zu teilen – ein akzeptierter Freund oder ein schreibgeschützter öffentlicher Link, den jeder im Browser öffnet, ohne App und ohne Konto. Siehe [TigerHub](./products/tigerhub.md). |
| **SKU / EAN** | Der Produktcode des Herstellers und seine Barcode-Nummer – was ein TigerData+ trägt, um genau zu sagen, welches Katalogprodukt eine Spule ist. |

---

**▲ [Dokumentationsindex](../README.md)** · **Siehe auch:** [FAQ](./faq/README.md), [Der TigerTag-Chip](./concepts/tigertag-chip.md), [Universelle Filamentidentität](./concepts/universal-filament-identity.md)
