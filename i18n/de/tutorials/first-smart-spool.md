---
sourceHash: 753177831a2577ac01ace40f8f49b6cf943aaf385d6b6c4107fcbd9d8660d0f2
sourcePath: docs/tutorials/first-smart-spool.md
---

# Deine erste smarte Spule in 2 Minuten

Mach jede Filamentspule intelligent – **kostenlos, zu Hause**, mit Dingen, die du
schon besitzt oder für ein paar Cent bekommst.

## Was du brauchst

- **Ein beliebiges NFC-Smartphone** (das ist das Lesegerät – es steckt schon in deiner Tasche)
- **Einen leeren NTAG-Chip** – NTAG213, 215 oder 216, empfohlen **rund mit 25 mm**
 (ein paar Cent bei Amazon, AliExpress oder im lokalen Handel; nichts Offizielles nötig)
- **Tiger NFC Connect**, die kostenlose App –
 [Download für iOS & Android](https://tigersystem.io/download)

> Hast du schon Filament von Rosa3D, eSun, Sunlu, R3D… gekauft? Deine Spule trägt
> vielleicht **bereits TigerTag-Chips** – überspring das Formular und tippe einfach auf „Scan“.

## Schritte

**Du tippst den Chip zweimal an:** einmal zum Starten, einmal zum Schreiben.

1. **Installiere Tiger NFC Connect** und öffne die App.
2. **Tippe auf „Scan“** und halte das Smartphone an deinen leeren Chip. Die App liest
 ihn, erkennt, dass er leer ist, und bietet an, ein Filament dafür anzulegen.
3. **Beschreibe dein Filament** – wähle Material, Farbe, Optik, Gewicht und so
 weiter. Die Auswahl stammt aus dem gemeinsamen Katalog, sodass deine
 Spule von jeder kompatiblen App identisch verstanden wird. Es ist ein kurzes
 Formular; du musst nichts aus dem Gedächtnis eintippen.
4. **Tippe auf „Make“ und halte das Smartphone dann erneut an den Chip.** Dieses zweite
 Antippen ist das Schreiben. Eine Sekunde später liegen die Daten **auf dem Chip selbst** – deine
 Spule weiß jetzt, was sie ist.
5. **Klebe den Chip auf die Spule.**

<img src="../assets/nfc-scan.gif" width="420" alt="Das NFC-Antippen als Animation – Smartphone trifft Chip, Spule erkannt" />

*Die ganze Geste in Bewegung.*

### Zwei Chips auf einer Spule – „Dual NFC“

Spulen ab Werk tragen **zwei Chips auf gegenüberliegenden Seiten**, damit immer ein Chip
zum Lesegerät zeigt ([warum zwei?](../concepts/tigertag-chip.md)). Das kannst du
in einer Sitzung genauso machen:

1. Scanne den ersten leeren Chip und fülle das Formular wie oben aus.
2. Bevor du schreibst, **tippe auf die Schaltfläche „Dual NFC“**.
3. **Tippe wie gewohnt auf „Make“** – aber jetzt verlangt die App die Chips nacheinander:
 **Make 1/2**, dann **Make 2/2**. Beide Chips tragen am Ende dieselbe
 Identität.

> **Beginne immer mit dem Chip, den du gescannt hast.** Der Chip, mit dem die
> Erstellung begann, ist der, den die App als 1/2 erwartet; der andere Chip folgt als 2/2.

Das war's. Scanne die Spule jederzeit neu, mit dem Lesegerät, das gerade am nächsten
ist: ein Antippen mit **einem beliebigen NFC-Smartphone** oder das Auflegen auf ein Lesegerät, das an
[Tiger Studio Manager](../products/tiger-studio.md) angeschlossen ist (ACR122U /
[TigerPOD](../products/tigerpod.md)) – die Spule stellt sich in beiden Fällen
selbst vor. Alles oben Beschriebene funktioniert **zu 100 % offline** – kein Konto, keine Cloud, keine
Kosten.

## Optional: in deinen Bestand aufnehmen

Du willst die Spule in deinem synchronisierten Bestand haben (am Desktop sichtbar, mit
Freunden teilbar)? Sag es einfach in der App, wenn du gefragt wirst – es ist eine
ausdrückliche Entscheidung, nie automatisch.

## Wie geht es weiter?

- Stell die Spule auf eine [TigerScale](../products/tigerscale.md) und sieh zu, wie sich ihr
 Gewicht live aktualisiert.
- Öffne [Tiger Studio](../products/tiger-studio.md) auf deinem Computer und sieh dir
 dieselbe Spule dort an.
- Spule nachgefüllt oder umgewidmet? Codiere den Chip neu –
 [Second Life](../philosophy/second-life.md).

---

**▲ [Dokumentationsindex](../../README.md)** · **Siehe auch:** [Tiger NFC Connect](../products/tigertag-connect.md), [Der TigerTag-Chip](../concepts/tigertag-chip.md), [FAQ](../faq/README.md)
