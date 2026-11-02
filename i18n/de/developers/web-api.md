---
sourceHash: 4534952990769306c8ebf5fcf1d9c93c9ddca86ce463b792d757f36bdda46043
sourcePath: docs/developers/web-api.md
---

# Die Web API

## Wofür sie da ist

Ein TigerTag trägt alles, was ein Drucker braucht, **auf dem Chip, offline**. Die
Web API gibt es für das, was ein Chip nicht fassen kann und was sich ändert, nachdem
er beschrieben wurde: die Datenblätter, die Sicherheitsdokumente, das Foto, das
Video, die Korrekturen des Herstellers.

Es ist **ein HTTP-Endpunkt, für jedes Filament, jeder Marke** – kein Schlüssel, kein
Konto, keine Registrierung, kein Ratenabkommen, das ausgehandelt werden müsste. Eine
Produkt-ID geht hinein, das Produkt kommt zurück.

```
https://api.tigertag.io/api:tigertag/product/get?uid=0&product_id=<ID>&lang=en
```

Der Parameter `lang` wählt die Sprache der Textfelder.

## Was zurückkommt

Vier echte Produkte von vier verschiedenen Marken über diese eine Adresse:

| `product_id` | Produkt | Zurückgelieferte Dokumente |
|---|---|---|
| `10` | Polymaker PolyTerra™ PLA | MSDS · TDS · Tipps · Video |
| `30` | R3D PLA High Speed | Lebensmittel · MSDS · REACH · RoHS · TDS · Video |
| `40` | Sunlu PLA Matte | MSDS · REACH · RoHS · TDS · Video |
| `50` | eSun PLA+ | Lebensmittel · MSDS · REACH · RoHS · TDS · Tipps · Video |

Jede Antwort enthält die Identität (Marke, Serie, Name, SKU, EAN, Farbe), das
vollständige Druckprofil (Düse, Bett, Trockner, Lüfter, Durchmesser, Gewicht, Shore,
Transmission Distance), das Produktfoto und den oben genannten Block `links` –
`tds`, `msds`, `rohs`, `reach`, `en71`, `food`, `tips`, `youtube`.

## Warum sie ein TigerTag+ aktuell hält

Ein [TigerTag+](../products/tigertag-plus.md) speichert eine **Katalog-Produkt-ID**,
keine Adresse. Die ID läuft nie ab und wandert nie, sodass ein Hersteller sechs
Monate nach dem Versand der Spulen eine Temperatur korrigieren oder ein Datenblatt
anhängen kann, und jedes Lesegerät sieht beim nächsten Lesen den neuen Wert – ohne
dass etwas auf dem Chip neu geschrieben werden muss und ohne dass der Chip je vom
Netzwerk abhing, um zu drucken.

Genau deshalb zählt ein einziger Endpunkt: Eine Adresse bedient jede Marke, ein
Lesegerät implementiert sie einmal, und sie funktioniert für Filament, das es nie
gesehen hat.

## Auch offline – der ganze Katalog ist eine Datei

Nichts von alledem setzt voraus, dass der Endpunkt erreichbar ist, oder auch nur
existiert.

Die vollständige Referenz ist als einzelne Datei veröffentlicht,
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json)
– **jede ID jedes Filaments der Datenbank**, im Lauf des Tages aktualisiert, etwa
12 MB, kein Schlüssel und kein Konto. Jeder darf sie herunterladen, spiegeln, in
eine App einbauen, auf ein NAS in der Werkstatt legen oder auf einem USB-Stick
mitnehmen.

Ein Lesegerät mit dieser Kopie löst eine TigerTag+-ID **ganz ohne Netzwerk** auf.
Das macht die ID sicherer als eine Adresse: Eine Adresse braucht, dass ihr Host
antwortet, eine gemeinsame Referenz muss nur einmal kopiert worden sein – und sie
kann überall auf der Welt, von jedem, jederzeit kopiert werden.

Die Web API bleibt der frischere Weg und der, der die Datenblätter und das Foto
liefert. Die Datei ist der Boden darunter.

## Was sie nie tut

Die Web API **kann einen Chip nicht zum Funktionieren bringen**, denn ein Chip
funktioniert auch ohne sie. Lies ein TigerTag im Flugmodus, und du bekommst Marke,
Material, Farbe, Durchmesser, Gewicht und Temperaturen – den ganzen Druck. Die Web
API fügt Papier und Bilder darum herum hinzu, und Korrekturen obendrauf.

---

**◀ Zurück:** [Account-API & Integration von Drittanbietern](./account-api.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Repository-Übersicht](./repositories.md)

**Siehe auch:** [TigerTag+](../products/tigertag-plus.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
