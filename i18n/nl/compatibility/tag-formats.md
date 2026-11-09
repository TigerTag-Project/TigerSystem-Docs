---
sourceHash: 84d231fb87c4fd823cec2ac0222e3cb1b09833f4aa4542b04b027eaab4a89a20
sourcePath: docs/compatibility/tag-formats.md
---

# Spoeltagformaten vergeleken

Op filamentspoelen worden vandaag zes NFC/RFID-formaten gebruikt. Deze pagina
zet ze naast elkaar, op 6 november 2026, met elk cijfer uit de eigen
specificatie van het formaat of, voor Bambu Lab en Creality (geen officiële
specificatie), uit openbaar reverse-engineeringwerk. Ze beschrijft; ze rangschikt
niet. [OpenSpool](./openspool.md) en [OpenTag3D](./opentag3d.md) hebben hun eigen
pagina's.

| | **TigerTag** | [OpenPrintTag][opt] | [OpenTag3D][ot3d] | [OpenSpool][osp] | Bambu Lab ([reverse-engineerd][bbl]) | Creality CFS ([reverse-engineerd][cfs]) |
|---|---|---|---|---|---|---|
| Chip | NTAG213 / NTAG215 | NFC-V, ICODE SLIX2 (320 B) | NTAG215 / NTAG216 | NTAG215 / NTAG216 | MIFARE Classic 1K | MIFARE Classic 1K |
| Bytes voor één volledig record | **80** (+ 64 B handtekening) | 176 (248 B op de tag) | 224 | 126 (JSON) | niet gedocumenteerd (chip van 1 KB) | 48 |
| Kleuren, max. | 3 | 6 | 4 | 1 | 2 | 1 |
| Nozzle en bed min. / max. | ja | ja | ja | alleen nozzle | nozzle; één bedwaarde | nee |
| Droogtemperatuur en -tijd | ja | ja | ja | nee | ja | nee |
| Resterende hoeveelheid op de chip | ja | ja | nee | nee | nee | nee |
| HueForge TD | ja | ja | ja | nee | nee | nee |
| Vrij tekstbericht | 28 B | nee | nee | nee | nee | nee |
| Offline verifieerbare handtekening | ECDSA-P256, publieke sleutel gepubliceerd | nee | nee | nee | RSA-2048, publieke sleutel niet gepubliceerd | nee |
| Chip herschrijfbaar | ja | ja | ja | ja | nee (geweigerd na wijziging) | nee |
| Open offline productcatalogus | **20.348 producten** | 15.874 verpakkingen | nee | nee | nee | nee |
| Chipcorrecties na de fabriek | één open, gestandaardiseerde API voor elk merk; de SDK's vergelijken en patchen de chip, handtekening blijft geldig | nee | optionele `data_url` naar een API die elke maker zelf bouwt en host; geen gemeenschappelijk formaat, SDK of updateproces | nee | nee | nee |

## Wat de tabel laat zien

- **Het compactste volledige record.** TigerTag slaat een volledig printrecord —
  temperaturen, drogen, hoeveelheden, kleuren, TD — op in 80 bytes, tegenover
  176 voor OpenPrintTag en 224 voor OpenTag3D. De twee kleinere records bevatten
  minder: de 48 bytes van Creality bevatten geen temperatuur, de 126 bytes van
  OpenSpool zeven velden. Het is ook het enige formaat hier dat op een NTAG213
  past, handtekening inbegrepen.
- **Offline compleet, dankzij de catalogus.** Een TigerTag+-product-id wordt
  opgezocht in de meegeleverde openbare catalogus — 20.348 producten met naam,
  serie, SKU, barcode, foto en refill-markering — zonder netwerk en zonder
  account.
- **Voorspelbare updates.** Een merk corrigeert een product één keer, op de API
  die alle merken delen; elke lezer patcht daarna de chips die al verkocht zijn.
- **Niet de meeste velden op de chip.** OpenPrintTag bevat meer kleuren en velden
  die TigerTag niet heeft (GTIN, lengte). Wat TigerTag onderscheidt, is de
  combinatie: een volledig record in weinig bytes, een offline verifieerbare
  handtekening en een open catalogus van meer dan 20.000 producten, op een
  NTAG213.

## Bronnen

- OpenPrintTag: [veldenlijst][opt], grootte uit de referentietestvector
  [`01_info.yaml`](https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/tests/encode_decode/01_info.yaml),
  aantal in de catalogus uit de README van [openprinttag-database](https://github.com/OpenPrintTag/openprinttag-database).
- OpenTag3D: [specificatie][ot3d] en de bijbehorende
  [geheugenindeling](https://github.com/GooborgStudios/OpenTag3D/blob/main/_data/spec.json).
- OpenSpool: [tagformaat][osp], grootte uit het gedocumenteerde voorbeeld.
- Bambu Lab: [RFID Tag Guide][bbl] (Bambu Research Group, reverse engineering).
- Creality CFS: [K2-RFID][cfs] (reverse engineering).
- TigerTag: de [specificatie](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#how-tigertag-compares).

Klopt een cijfer niet of is het verouderd? Open een issue: deze pagina wordt
gecorrigeerd, niet verdedigd.

[opt]: https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/data/main_fields.yaml
[ot3d]: https://github.com/GooborgStudios/OpenTag3D/blob/main/spec.md
[osp]: https://github.com/spuder/OpenSpool/blob/main/docs/rfid.md
[bbl]: https://github.com/Bambu-Research-Group/RFID-Tag-Guide/blob/main/BambuLabRfid.md
[cfs]: https://github.com/DnG-Crafts/K2-RFID

---

**◀ Vorige:** [OpenTag3D](./opentag3d.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Ontwikkelaars](../developers/README.md)

**Zie ook:** [Compatibiliteit](./README.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
