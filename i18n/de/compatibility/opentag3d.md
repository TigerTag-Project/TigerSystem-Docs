---
sourceHash: a2788a5364e611177c9b1b011d762345b26e5a8fd204e75a6b2b8beed634955c
sourcePath: docs/compatibility/opentag3d.md
---

# OpenTag3D

## Was es ist

**[OpenTag3D](https://github.com/GooborgStudios/OpenTag3D)** ist ein von der
Community getragener offener Tag-Standard für Filamentspulen: eine NDEF-Nutzlast,
die in einen NTAG215 passt, ohne Verschlüsselung, mit veröffentlichter
Spezifikation und offener Unterstützerliste. Wie TigerTag existiert er, weil sich
die Branche mit einem proprietären Format pro Druckermarke füllte, und er
verlangt ausdrücklich, dass ein Tag **vollständig offline** funktionieren muss.
Dem Geist nach ist er ein enger Verwandter.

Beide Standards definieren außerdem eine Online-Schicht, und beide nennen sie
**Web API** – und genau dort gehen die beiden Entwürfe auseinander, mit Absicht
und in entgegengesetzte Richtungen.

## Zwei Entwürfe im Vergleich

| Aspekt | TigerTag | OpenTag3D |
|---|---|---|
| Was der Chip speichert, um die Online-Schicht zu erreichen | eine **Katalog-Produkt-ID** | eine **„Online Data URL“** – die Adresse selbst |
| Wer sie beantwortet | **ein Endpunkt, alle Marken** | ein Endpunkt pro Tag, betrieben von dem, der ihn geschrieben hat |
| Rolle der Online-Schicht | der **Update-Kanal**: Korrekturen erreichen bereits ausgelieferte Spulen | **von Natur aus ergänzend** – die Spezifikation hält fest, sie werde „NEVER be relied upon for printer functionality“ |
| Regulatorische Dokumente | TDS · MSDS · RoHS · REACH · EN71 · Lebensmittelkontakt, pro Produkt | nicht im Schema – die Web API liefert Fotos, Preis, Produktlinks, QA-Status, Notizen |
| Kopie der Tag-Daten online | ja, das vollständige Profil | ja, `tag_data` – **optional**, wie jedes Feld außer der Version |
| Herkunftsnachweis | optional – ein [TigerTag+ Certified](../products/tigertag-plus.md) ist signiert und wird offline geprüft | keiner, bewusst: Die Spezifikation lehnt Verschlüsselung als „unsuitable for an open source standard“ ab |

## Was aus einer ID gegenüber einer Adresse folgt

Keiner der beiden Ansätze ist ein Zufall, und jeder erkauft sich etwas.

Die **Adresse** zu speichern, macht den Tag autark: Wer ihn schreibt, bestimmt,
wo seine Daten liegen, und ist niemandem Rechenschaft schuldig. Der Preis: Die
Adresse steht im Chip, im Byte-Budget der Nutzlast, und ein Chip lässt sich nicht
mehr umlenken, wenn er beim Kunden ist – zieht dieser Host um oder antwortet nicht
mehr, ist der Link das, was bricht.

Eine **ID** zu speichern sieht so aus, als lege es einen gemeinsamen Endpunkt in
den Weg – und das täte es auch, wenn die Referenz bei uns läge, sie zurückzuhalten.
Das tut sie nicht: Der gesamte Katalog ist als eine einzige Datei veröffentlicht,
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json),
jede ID jedes Filaments der Datenbank, im Lauf des Tages aktualisiert und für
jeden frei kopierbar. Ein Lesegerät kann eine eigene Kopie vorhalten und IDs ganz
ohne Netzwerk auflösen.

Die ID erkauft also, was die Adresse nicht kann. Der Chip enthält nie einen Ort,
bleibt also gültig, was auch immer mit einem Host geschieht; ein Lesegerät
implementiert einen Endpunkt, und er funktioniert für Filament, das es nie
gesehen hat; ein Hersteller korrigiert Daten sechs Monate, nachdem die Spulen die
Fabrik verlassen haben; und die Auflösung selbst kann vollständig offline
erfolgen, auf einer Kopie, die jeder behalten darf.

Die [Signatur](../products/tigertag-plus-certified.md) ist die andere Folge. Weil
ein TigerTag+ Certified die UID des Chips selbst signiert, können die Daten online
besser werden, während die Spule weiter beweist, woher sie stammt – offline, auf
dem eigenen Handy des Kunden.

## Interoperabilität

TigerTag-Chips sind **nie schreibgeschützt**. Wenn du OpenTag3D – oder ein
beliebiges anderes Format – bevorzugst, kannst du einen Werkschip frei in dieses
umschreiben. Das ist dieselbe Haltung, die wir zu [OpenSpool](./openspool.md)
einnehmen, aus demselben Grund: Die Spule gehört dem, der sie gekauft hat.

---

**◀ Zurück:** [OpenSpool](./openspool.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Entwickler](../developers/README.md)

**Siehe auch:** [Die Web API](../developers/web-api.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
