---
sourceHash: ba348b03d60cc85812ec315cd808baee450bfd9e1eeef61fe74efb8f74550ab1
sourcePath: docs/concepts/tigertag-chip.md
---

# Der TigerTag-Chip (RFID/NFC-Format)

## Physische Schicht

| Eigenschaft | Wert |
|---|---|
| Chip-Familie | NTAG213 / 215 / 216 (NFC Forum Type 2) |
| Empfohlene Bauform | **Runder Aufkleber mit 25 mm** (andere Formen funktionieren) |
| Nutzdaten | 144-Byte-NDEF-Nutzdaten – so bemessen, dass sie auf den kleinen NTAG213 passen; größere Chips lassen ungenutzten Platz |
| Offizielle Marken-Chips | Werden als **NTAG215** produziert – der zusätzliche Speicher maximiert die Weiterverwendung am Lebensende (Standard-NDEF-Objekte), damit der Chip nie zu Elektroschrott wird |
| Authentifizierung | Keine – offen lesbar |
| Schreibschutz | **Keiner** – Chips werden entsperrt ausgeliefert; der Nutzer kann sie neu beschreiben, bis hin zur vollständigen Migration auf ein anderes Protokoll |
| Reservierter Bereich | **64 Byte** am Ende der Nutzdaten – Seiten `0x18`–`0x27`, sodass 80 Byte Daten bleiben. Bei einem Standard-TigerTag sind sie **frei für Zusatzfunktionen der Community**; bei einem [TigerTag+](../products/tigertag-plus.md) tragen sie die **Herkunftssignatur**, 32 Byte `R` und 32 Byte `S` (Byte-Layout: [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)) |
| Chips pro Spule | **Zwei**, auf gegenüberliegenden Seiten angebracht |
| Lesbar durch | Jedes NFC-Smartphone, USB-Lesegeräte der Klasse ACR122U, [TigerPOD](../products/tigerpod.md) |

Das ist das bewusste Gegenteil der Hersteller-Tags (Mifare Classic mit abgeleiteten
Schlüsseln, AES-Sektoren, RSA-Signaturen – siehe
[Kompatibilität](../compatibility/README.md)): Ein TigerTag-Chip verbirgt nichts.

Betrachte den Chip als **Langzeit-Kältelager** für die Identität der Spule: Die
Daten leben offline auf dem Chip selbst, über Jahre – kein Server, kein Konto,
nichts, das nötig wäre, um sie am Leben zu halten. Die Online-Schicht
(Referenzdatenbank, Cloud-Sync) fügt oben drauf immer nur Aktualität *hinzu*.

## Warum jede Spule ZWEI Chips trägt

<img src="../assets/refill-with-tigertag-blue.png" width="380" alt="Eine Filament-Nachfüllspule mit ihrem runden TigerTag-Chip" />

Zwei Chips auf gegenüberliegenden Seiten der Spule – das wirkt überflüssig, ist
aber das klügste Detail des Formats:

- **Drucker teilen sich Lesegeräte.** Eine Maschine hat typischerweise **ein
 RFID-Lesegerät für zwei Spulen-Slots**, **zwischen beiden** montiert – oder an
 der Seite des Druckers, wo es je nach Slot die linke oder die rechte Fläche
 liest. Ein Bambu Lab AMS hat 2 Lesegeräte für 4 Slots; beim Snapmaker sitzt die
 Spule links oder rechts am Drucker. Mit einem Chip auf jeder Seite
 **blickt in jedem Slot immer ein Chip zum Lesegerät** – und du musst die Spule
 nie in einer bestimmten Richtung einlegen.
- **Kein Suchen nach dem Chip beim Scannen von Hand.** Auf einem
 [TigerPOD](../products/tigerpod.md) oder mit dem Handy musst du nie
 herausfinden, welche Fläche den Chip trägt: Egal wie du die Spule aufnimmst,
 einer liegt schon auf der richtigen Seite für das, was du gerade tust.
- **Scannen an Ort und Stelle.** Eine Spule auf einem AMS Lite, an der Seite eines
 Elegoo Centauri Carbon oder eines FlashForge lässt sich scannen, ohne sie
 herauszuziehen.
- **Freiheit für Integratoren.** Ein Hersteller von Filamenttrocknern setzt das
 Lesegerät einfach dorthin, wo es passt – links oder rechts bei einem
 Ein-Spulen-Trockner, zwischen die zwei Spulen bei einem Doppel-Trockner – und es
 funktioniert immer.
- **Redundanz.** Antwortet ein Chip nicht mehr, identifiziert der andere die Spule
 weiterhin – und dient dazu, den defekten zu reparieren.
- **Doppelte Ausbeute.** Am Lebensende bleiben dir von jedem Kilo gedrucktem
 Filament **zwei wiederverwendbare NTAG-Chips** für DIY-Projekte
 ([null Elektroschrott](../philosophy/second-life.md)).

Ein paar Implementierungsdetails:

- Die beiden Chips sind **völlig unabhängig – jeder hat seine eigene UID**; es gibt
 keine gemeinsame Antenne. Sie werden **zusammen als Paar geschrieben (Twin
 Tag)** und das ganze Leben der Spule lang identisch gehalten, bis auf das letzte
 Gramm – und immer als **eine** Spule gezählt.
- Bei Fabrikspulen sitzen die Chips auf einem **Carrier**: einem Streifen, dessen
 zwei Enden um den Pappkern geklappt werden (ein Chip pro Ende) und mit
 industriellem **3M-Klebstoff (468MP / 200MP)** gehalten werden – der Bediener
 zieht ab und klebt, sonst ändert sich nichts an der Linie. Das Carrier-Design
 ist **öffentlich und zu Hause druckbar**, und dieselbe Form wird einzeln für
 [Refills](../philosophy/second-life.md) verkauft, sodass der Chip mit dem
 Filament wandert statt mit der Rolle.

<img src="../assets/carrier-bare.png" width="440" alt="Der nackte TigerTag-Carrier – zwei unabhängige NFC-Antennen, eine an jedem Ende" />

*Der Carrier, nackt: Die zwei unabhängigen Antennen sind deutlich zu sehen – eine
pro umgeklapptem Ende, jede mit eigener UID.*

### Wie die beiden Chips verbunden sind

Nichts Zentrales hält das Paar fest. Es wird **aus dem abgeleitet, was die beiden
Chips tragen**, und das Feld, das es bewusst statt zufällig macht, ist der
**Zeitstempel**.

Die 4 Byte auf Seite `0x0C` (Offset `+32`) erfüllen einen doppelten Zweck:
Sekunden seit dem 2000-01-01 GMT, *und* die **Twin-Tag-ID**. Zwei Chips, die in
derselben Sitzung geschrieben werden, erhalten exakt denselben Wert – diese
gemeinsame Sekunde ist der Paarungsschlüssel.

Die Auflösung beträgt eine Sekunde, der Zeitstempel allein ist also kein Beweis:
Zwei Spulen, die in derselben Sekunde getaggt werden, würden ihn auch tragen. Was
das Paar bestätigt, ist, dass auch die **beschreibende Identität übereinstimmt** –
die beiden Chips beschreiben eine Spule, also muss jedes Feld, das diese Spule
beschreibt, auf beiden identisch sein:

| Feld | Seite | Offset |
|---|---|---|
| Twin-Tag-ID / Zeitstempel | `0x0C` | `+32` |
| ID Brand | `0x07` | `+14` |
| ID Material | `0x06` | `+8` |
| ID Aspect 1 · ID Aspect 2 | `0x06` | `+10` · `+11` |
| Color 1 · Color 2 · Color 3 | `0x08` · `0x0D` · `0x0E` | `+16` · `+36` · `+40` |
| ID Product | `0x05` | `+4` |

Was tatsächlich unterscheidet, hängt von der Variante ab:

- Bei einem **[TigerTag+](../products/tigertag-plus.md)** ist `ID Product` eine
 echte Katalog-ID. Gleicher Zeitstempel **und** gleiche Produkt-ID genügen, um es
 mit nahezu völliger Sicherheit ein Paar zu nennen.
- Bei einem **Standard-TigerTag** ist `ID Product` auf jedem existierenden Chip
 die Konstante `0xFFFFFFFF` und unterscheidet daher gar nichts. Die Marke, das
 Material, die drei Farben und beide Aspekte übernehmen diese Arbeit stattdessen –
 zusammen mit dem Zeitstempel.

Zwei Folgen, die man deutlich sagen sollte:

- **Das Schreiben der Chips in zwei getrennten Durchgängen erzeugt kein Paar.**
 Sie erhalten zwei verschiedene Zeitstempel, nichts verbindet sie, und das
 Ökosystem zählt zwei Spulen. Deshalb schreibt die Handy-App beide in einer
 einzigen *Dual-NFC*-Sitzung, und deshalb hält der
 [TigerPOD](../products/tigerpod.md) zwei Lesegeräte, die sich gegenüberstehen.
- **Die Signatur ist das Einzige, was sich zu Recht unterscheidet.** Bei einem
 TigerTag+ signiert sie `SHA-256(uid ‖ id_tigertag ‖ id_product)`, und jeder Chip
 hat seine eigene UID – die zwei Chips eines Paars tragen also von Konstruktion an
 zwei *verschiedene* Signaturen. Identische Signaturen würden eine Kopie bedeuten,
 keinen Zwilling.

Die obigen Offsets sind dem maßgeblichen
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)
(§2.9) entnommen, der die Spezifikation bleibt.

### Der Refill-Carrier in der Praxis

Zwei Details, die Leute überraschen:

- **Das Ankleben ist optional.** Der 3M-Klebstoff hält den Carrier, solange du den
 Refill handhabst und lagerst. Sobald der Refill auf der Masterspool montiert ist,
 ist der Carrier **zwischen Masterspool und Pappkern eingeklemmt** und kann sich
 nicht bewegen – der Kleber hat dann nichts mehr zu tun.
- **Er kommt wieder heraus, und er ist wiederverwendbar.** Ist der Refill
 aufgebraucht, nimm den Carrier mit seinen zwei Chips heraus, lösche sie über
 [Tiger NFC Connect](../products/tigertag-connect.md) oder
 [Tiger Studio](../products/tiger-studio.md) und verwende ihn erneut – auf einer
 anderen Spule oder für ein beliebiges anderes NDEF-Projekt. Filament, das mit
 einem TigerTag Refill verkauft wird, hinterlässt dir den Carrier, keinen Abfall
 ([Second Life](../philosophy/second-life.md)).

Wo du einen bekommst: siehe [Chips kaufen](../products/tigertag.md).

## Ab Werk codiert oder leer in deiner Hand

Derselbe Chip erreicht dich auf zwei Wegen, und der Unterschied zählt mehr als
alles andere auf dieser Seite:

| | Woher er kommt | Was darauf ist |
|---|---|---|
| **Vorcodiert** | in die Produktionslinie integriert, im Filament einer Partnermarke | die vollständige Identität der Spule, lesebereit |
| **Leer** | einzeln gekauft – TigerTag-Marke oder irgendein NTAG-Chip von irgendwo | noch nichts; du schreibst ihn einmal, in etwa einer Minute |

Einzeln verkaufte Chips werden **leer** ausgeliefert, mit oder ohne Logo. Das ist
keine Einschränkung: Ein unbeschriebener Chip macht
[Second Life](../philosophy/second-life.md) erst möglich, und deshalb hängt das
Protokoll nie davon ab, etwas zu kaufen.

## Nutzdaten

Die 144-Byte-Nutzdaten codieren die
[universelle Identität](./universal-filament-identity.md) der Spule – Marke,
Material, Aspekt/Farbe, Typ, Durchmesser, Druckeinstellungen – als IDs, die gegen
die gemeinsame Referenzdatenbank aufgelöst werden.

Die Nutzdaten belegen die Seiten `0x04` bis `0x27` zu je 4 Bytes; jeder
Mehrbyte-Wert ist Big-Endian:

| Seiten | Bytes | Inhalt |
|---|---|---|
| `0x04` | 4 | `ID TigerTag`, der Chiptyp: TigerTag, TigerTag+ oder TigerTag Init |
| `0x05` | 4 | `ID Product`: ein Katalogprodukt bei einem TigerTag+, `0xFFFFFFFF` bei einem TigerTag |
| `0x06`–`0x07` | 8 | Material, zwei Aspekte, Typ, Durchmesser und Marke, als IDs der Referenzdatenbank |
| `0x08` | 4 | Farbe 1, mit Alpha |
| `0x09` | 4 | Menge bei der Herstellung und ihre Einheit |
| `0x0A`–`0x0B` | 8 | Temperaturbereiche für Düse und Bett, Trocknungstemperatur und -dauer |
| `0x0C` | 4 | Zeitstempel, zugleich die Twin Tag ID |
| `0x0D`–`0x0E` | 8 | Farben 2 und 3, Tag-Index und -Anzahl, ein reserviertes Byte |
| `0x0F` | 4 | HueForge-TD, zwei reservierte Bytes |
| `0x10`–`0x16` | 28 | freie Nachricht, UTF-8 |
| `0x17` | 4 | Restmenge, von der Tiger Scale aktualisiert, ein reserviertes Byte |
| `0x18`–`0x27` | 64 | die Signatur (`R` und `S`) bei einem TigerTag+ Certified; sonst frei |

Das ist eine Übersicht, nicht die Spezifikation. Maßgeblich ist die Feldtabelle im
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#2-data-structure--tigertag-binary-format):
Sie nennt den genauen Offset jedes Felds und verweist auf jede ID-Tabelle. Ein
Parser folgt dieser Tabelle.

## Lesen und Schreiben

| Tool | Lesen | Schreiben |
|---|---|---|
| [Tiger NFC Connect](../products/tigertag-connect.md) (mobiles NFC) | den Chip antippen – die Spule öffnet sich auf dem Handy | **Make** antippen und zum Schreiben erneut antippen; **Dual NFC** schreibt beide Chips einer Spule in einer Sitzung |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | öffnet die Spule beim Scannen automatisch | geführtes Schreiben mit UID-Prüfung |
| [JS-SDK](../developers/sdks.md) (`tigertag` auf npm) | dekodiert die 144-Byte-Nutzdaten | codiert neue Nutzdaten |
| [Python-SDK](../developers/sdks.md) | dekodiert die Nutzdaten; `tigertag[verify]` prüft auch die Signatur | codiert neue Nutzdaten |

Die beiden Apps sprechen mit dem Lesegerät; die SDKs nicht. Ein SDK dekodiert und
codiert die **Nutzdaten** – die NFC-Hardware bringst du selbst mit.

## Versionierung

Die Nutzdaten tragen eine Formatversion (Referenztabelle `id_version`), sodass
Lesegeräte mit älteren Chips kompatibel bleiben können.

---

**◀ Zurück:** [Universelle Filament-Identität](./universal-filament-identity.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Bestand & Cloud-Sync](./inventory-and-cloud-sync.md)

**Siehe auch:** [TigerTag](../products/tigertag.md), [SDKs](../developers/sdks.md), [Kompatibilität](../compatibility/README.md)
