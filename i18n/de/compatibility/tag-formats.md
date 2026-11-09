---
sourceHash: 84d231fb87c4fd823cec2ac0222e3cb1b09833f4aa4542b04b027eaab4a89a20
sourcePath: docs/compatibility/tag-formats.md
---

# Spulen-Tag-Formate im Vergleich

Sechs NFC/RFID-Formate werden heute auf Filamentspulen verwendet. Diese Seite
stellt sie nebeneinander, Stand 6. November 2026, wobei jeder Wert aus der
eigenen Spezifikation des Formats stammt oder, bei Bambu Lab und Creality (keine
offizielle Spezifikation), aus öffentlichen Reverse-Engineering-Arbeiten. Sie
beschreibt; sie bewertet nicht. [OpenSpool](./openspool.md) und [OpenTag3D](./opentag3d.md) haben
ihre eigenen Seiten.

| | **TigerTag** | [OpenPrintTag][opt] | [OpenTag3D][ot3d] | [OpenSpool][osp] | Bambu Lab ([Reverse Engineering][bbl]) | Creality CFS ([Reverse Engineering][cfs]) |
|---|---|---|---|---|---|---|
| Chip | NTAG213 / NTAG215 | NFC-V, ICODE SLIX2 (320 B) | NTAG215 / NTAG216 | NTAG215 / NTAG216 | MIFARE Classic 1K | MIFARE Classic 1K |
| Bytes für einen vollständigen Datensatz | **80** (+ 64 B Signatur) | 176 (248 B auf dem Tag) | 224 | 126 (JSON) | nicht dokumentiert (1-KB-Chip) | 48 |
| Farben, max. | 3 | 6 | 4 | 1 | 2 | 1 |
| Düse und Druckbett min. / max. | ja | ja | ja | nur Düse | Düse; ein Druckbettwert | nein |
| Trocknungstemperatur und -dauer | ja | ja | ja | nein | ja | nein |
| Restmenge auf dem Chip | ja | ja | nein | nein | nein | nein |
| HueForge TD | ja | ja | ja | nein | nein | nein |
| Freitextnachricht | 28 B | nein | nein | nein | nein | nein |
| Offline prüfbare Signatur | ECDSA-P256, öffentlicher Schlüssel veröffentlicht | nein | nein | nein | RSA-2048, öffentlicher Schlüssel nicht veröffentlicht | nein |
| Chip wiederbeschreibbar | ja | ja | ja | ja | nein (nach Änderung abgelehnt) | nein |
| Offener Offline-Produktkatalog | **20.348 Produkte** | 15.874 Gebinde | nein | nein | nein | nein |
| Chip-Korrekturen nach dem Werk | eine offene, standardisierte API für jede Marke; die SDKs vergleichen und patchen den Chip, die Signatur bleibt gültig | nein | optionale `data_url` zu einer API, die jeder Hersteller selbst baut und hostet; kein gemeinsames Format, kein SDK, kein Update-Ablauf | nein | nein | nein |

## Was die Tabelle zeigt

- **Der kompakteste vollständige Datensatz.** TigerTag speichert einen
  vollständigen Druckdatensatz – Temperaturen, Trocknung, Mengen, Farben, TD – in
  80 Bytes, gegenüber 176 bei OpenPrintTag und 224 bei OpenTag3D. Die beiden
  kleineren Datensätze tragen weniger: Die 48 Bytes von Creality enthalten keine
  Temperatur, die 126 Bytes von OpenSpool sieben Felder. Es ist außerdem das
  einzige Format hier, das auf einen NTAG213 passt, Signatur inklusive.
- **Offline vollständig, dank des Katalogs.** Eine TigerTag+-Produkt-ID wird
  gegen den mitgelieferten öffentlichen Katalog aufgelöst – 20.348 Produkte mit
  Name, Serie, SKU, Barcode, Foto und Refill-Kennzeichen – ohne Netzwerk und
  ohne Konto.
- **Vorhersehbare Updates.** Eine Marke korrigiert ein Produkt einmal, über die
  API, die alle Marken teilen; jedes Lesegerät patcht danach die bereits
  verkauften Chips.
- **Nicht die meisten Felder auf dem Chip.** OpenPrintTag trägt mehr Farben und
  Felder, die TigerTag nicht hat (GTIN, Länge). Was TigerTag auszeichnet, ist die
  Kombination: ein vollständiger Datensatz in wenigen Bytes, eine offline
  prüfbare Signatur und ein offener Katalog mit über 20.000 Produkten, auf einem
  NTAG213.

## Quellen

- OpenPrintTag: [Feldliste][opt], Größe aus dem Referenz-Testvektor
  [`01_info.yaml`](https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/tests/encode_decode/01_info.yaml),
  Katalogzahl aus dem README von [openprinttag-database](https://github.com/OpenPrintTag/openprinttag-database).
- OpenTag3D: [Spezifikation][ot3d] und ihre
  [Speicherbelegung](https://github.com/GooborgStudios/OpenTag3D/blob/main/_data/spec.json).
- OpenSpool: [Tag-Format][osp], Größe aus seinem dokumentierten Beispiel.
- Bambu Lab: [RFID Tag Guide][bbl] (Bambu Research Group, Reverse Engineering).
- Creality CFS: [K2-RFID][cfs] (Reverse Engineering).
- TigerTag: die [Spezifikation](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#how-tigertag-compares).

Ein Wert ist falsch oder veraltet? Eröffne ein Issue: Diese Seite wird
korrigiert, nicht verteidigt.

[opt]: https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/data/main_fields.yaml
[ot3d]: https://github.com/GooborgStudios/OpenTag3D/blob/main/spec.md
[osp]: https://github.com/spuder/OpenSpool/blob/main/docs/rfid.md
[bbl]: https://github.com/Bambu-Research-Group/RFID-Tag-Guide/blob/main/BambuLabRfid.md
[cfs]: https://github.com/DnG-Crafts/K2-RFID

---

**◀ Zurück:** [OpenTag3D](./opentag3d.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Entwickler](../developers/README.md)

**Siehe auch:** [Kompatibilität](./README.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
