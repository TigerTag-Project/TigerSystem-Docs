---
sourceHash: bc1109bce033235ce112674dbf1775284562458c70d4ec2f6514e1bf5a144bd5
sourcePath: docs/guides/twin-tag-pair.md
---

# Wenn die zwei Chips einer Spule als zwei Spulen gelesen werden

Du hast eine Spule mit je einem Chip auf jeder Fläche getaggt, und dein Bestand
zeigt jetzt **zwei** Einträge statt einem. Jeder Chip funktioniert; jeder öffnet
seine eigene Spule. Das Gewicht, das du bei der einen korrigierst, erscheint nie bei
der anderen.

Nichts ist kaputt. Die beiden Chips waren mit großer Wahrscheinlichkeit nie ein Paar.

## Der Test, der es klärt

Zwei Chips sind ein Paar, weil sie dieselbe **Twin-Tag-ID** tragen – ein Wert, der
beim Schreiben vergeben wird und nur von Chips geteilt wird, die in derselben
Sitzung geschrieben wurden. Lies beide Chips und vergleiche diesen Wert: Er ist die
ganze Diagnose. Tiger Studio zeigt ihn an; ebenso jedes Lesegerät, das die Nutzdaten
dekodiert.

Die vollständige Regel, einschließlich dessen, was sonst noch übereinstimmen muss und
warum der Zeitstempel allein kein Beweis ist, steht unter
[Der TigerTag-Chip](../concepts/tigertag-chip.md).

## Unterschiedliche Werte: Sie waren nie ein Paar

Das ist die gewöhnliche Ursache, und sie hat einen Ursprung: **Die beiden Chips
wurden in zwei getrennten Durchgängen geschrieben.** Ein zweiter Durchgang geschieht
eine Sekunde später oder einen Tag später und stempelt daher eine andere
Twin-Tag-ID, und von diesem Moment an verbindet nichts die beiden Chips. Jedes
nachgelagerte Tool zählt zu Recht zwei Spulen.

Es gibt keine Reparatur außer dem Neuschreiben. Ein Paar entsteht beim Schreiben oder
gar nicht.

## Als ein Paar neu schreiben

Lösche beide Chips und schreibe sie dann zusammen in einer einzigen Sitzung:

| | Wie das Paar geschrieben wird | Am besten für |
|---|---|---|
| **Handy** – [Tiger NFC Connect](../products/tigertag-connect.md) | *Dual NFC*: ein Formular, dann Chip 1/2 und 2/2 in derselben Sitzung | eine Spule, keine Hardware |
| **Desktop, zwei Lesegeräte** – [TigerPOD](../products/tigerpod.md) | beide Chips gleichzeitig, in einem Durchgang | ein Regal, eine Charge |
| **Desktop, ein Lesegerät** | in einem Durchgang nicht möglich – so ist das Problem entstanden | – |

Der Ablauf am Handy, einschließlich der Regel, dass der zuerst gescannte Chip der
ist, den die App als 1/2 erwartet, steht in
[Deine erste smarte Spule](../tutorials/first-smart-spool.md).

Der Fall mit einem einzigen Lesegerät ist der Grund, warum der
[TigerPOD](../products/tigerpod.md) zwei Lesegeräte hält, die sich gegenüberstehen:
ein Durchgang, ein Zeitstempel, ein Paar.

## Gleicher Wert, trotzdem zwei Einträge

Seltener, und melde es. Die Twin-Tag-ID ist notwendig, aber nicht hinreichend – die
beiden Chips müssen auch dieselbe Spule beschreiben, Feld für Feld: Marke, Material,
die drei Farben, beide Aspekte. Vergleiche als Nächstes diese.

Stimmt jedes Feld überein und dein Bestand teilt die Spule trotzdem in zwei, ist das
ein Fehler und kein Schreibfehler. Sag es auf dem
[Discord](https://discord.gg/3Qv5TSqnJH) mit beiden Chip-Auslesungen.

---

**▲ [Dokumentationsindex](../../README.md)** · **Siehe auch:** [Der TigerTag-Chip](../concepts/tigertag-chip.md), [Deine erste smarte Spule](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md)
