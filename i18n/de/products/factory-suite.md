---
sourceHash: 7dc230b977dd8daee1bee1dcf91401303264ea4addf2fc860ad6ea32b0198db0
sourcePath: docs/products/factory-suite.md
---

# TigerTag Factory & TigerTag Manager (Fabrik-Suite)

## Zweck

Die **industrielle Seite** von TigerSystem – die Werkzeuge, mit denen
Filamentfabriken TigerTag in ihre Produkte bringen. Anders als die
nutzerseitige Sandbox ist dies **Produktionssoftware**: Sie hat über 2,5 Millionen
Chips in den Markt gebracht.

Zwei Werkzeuge decken die zwei Hälften der Aufgabe ab:

- **TigerTag Manager** – verwaltet die **Filament-Datenbank** der Marke: Produkte,
 Materialien, Farben, Einstellungen.
- **TigerTag Factory** – **schreibt die Daten in jede produzierte Spule** in
 Liniengeschwindigkeit: **etwa 1 Sekunde pro Chip** – Tausende Spulen am Tag, ein
 Klick.

## Der Carrier – zwei Chips, abziehen und aufkleben

|| |
|---|---|
| <img src="../assets/carrier-bare.png" alt="Der nackte TigerTag-Carrier – zwei unabhängige NFC-Antennen, eine an jedem Ende" /> | <img src="../assets/carrier-branded.png" alt="Der TigerTag-Carrier, wie er ausgeliefert wird, mit den zwei Marken-Chips" /> |

*Die zwei unabhängigen NFC-Chips sind deutlich zu sehen – einer pro Ende. Die Enden
werden um den Pappkern geklappt, damit die Spule von beiden Seiten lesbar ist; die
Mitte hält mit industriellem 3M-Klebstoff (468MP / 200MP). Der Bediener zieht ab und
klebt auf – sonst ändert sich nichts an der Linie. Das Carrier-Design ist öffentlich
und zu Hause druckbar.*

<img src="../assets/refill-with-tigertag-orange.png" width="340" alt="Der Carrier, angebracht auf einem Filament-Refill" />

## Herkunftsnachweis

Auf der Produktionslinie geschriebene Chips tragen die **Werkssignatur** – die
Authentifizierung, die den **Ursprung des Produkts belegt**. Sie ist die Schicht
hinter den Werkszustands-Wiederherstellungen von [TigerTag+](./tigertag-plus.md) und der
Vertrauensanker für Marken: Ein signierter Chip stammt nachweislich aus der echten
Fabrik.

## Verfügbarkeit

**Nicht öffentlich.** Diese Werkzeuge sind Drittherstellern vorbehalten, die die
RFID/NFC-Technik von TigerTag in ihre Produkte einbauen. Eine
Filament-Produktionslinie kann mit TigerTag in **nur 5 Tagen** laufen – siehe
[Für Filamenthersteller](../vision/for-filament-manufacturers.md) und melde dich über
die [GitHub-Organisation](https://github.com/TigerTag-Project).

---

**▲ [Dokumentationsindex](../../README.md)** · **Siehe auch:** [Für Filamenthersteller](../vision/for-filament-manufacturers.md), [TigerTag+](./tigertag-plus.md), [Produkte](./README.md)
