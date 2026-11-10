---
sourceHash: 2aa30864cfb206820e96297f6e331f24ff62e73727f540f12585f2c57cd43347
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## Was es ist

**OpenSpool** ist ein offener Tag-Standard der Community: Filamentdaten als
**NDEF-JSON** auf NFC-Type-2-Tags – ohne Authentifizierung, ohne Kryptografie,
vollständig offen. Dem Geist nach ist es ein enger Verwandter von TigerTag.

## TigerTag und OpenSpool im Vergleich

| Aspekt | TigerTag | OpenSpool |
|---|---|---|
| Träger | NTAG, 144-Byte-NDEF-Nutzdaten | NFC Type 2, NDEF JSON |
| Datenmodell | Kompakte IDs, aufgelöst gegen eine gemeinsame Referenzdatenbank | Selbstbeschreibendes JSON |
| Cloud | Optionales Konto, Bestand, Teilen ([TigerSystem-Konto](../concepts/inventory-and-cloud-sync.md)) | Keine (reiner Tag-Standard) |
| Echtheit | Optional – ein von einem zertifizierten Hersteller signiertes [TigerTag+](../products/tigertag-plus.md) ist ein **TigerTag+ Certified**, offline prüfbar | Keine |
| Offenheit | Offene Spezifikation + SDKs | Offene Spezifikation |

## Einen Chip von TigerTag auf OpenSpool umstellen

TigerTag-Chips sind **nie schreibgeschützt** – TigerTag ist nur das
Basisprotokoll, mit dem Spulen ausgeliefert werden. Wenn du OpenSpool (oder ein
beliebiges eigenes Format) bevorzugst, kannst du die Daten eines Werkschips frei
in dieses Format umschreiben.

## Interoperabilität – Spezifikation dokumentiert, TigerData-Umwandlung in Arbeit

Ein reines Dekodierungsdatenblatt für OpenSpool-Tags wird in
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md)
gepflegt, als Teil des geplanten Auslesens mehrerer Hersteller in Tiger Studio.

### Import-Zuordnung: OpenSpool → TigerData

Diese Zuordnung wird der OpenSpool-Leser von Tiger Studio umsetzen. Das Lesen
eines OpenSpool-Tags erzeugt ein **TigerData**: einen Datensatz ohne Chip mit
einer neuen `TigerData_<id>`. Der OpenSpool-Chip ist kein TigerTag-Chip, und
ein OpenSpool-Tag nennt kein Katalogprodukt, daher ist der Datensatz nie ein
TigerData+. Später auf einen TigerTag-Chip geschrieben, wird er ein TigerTag,
wie jedes TigerData.

Ein Tag ist nur dann OpenSpool, wenn sein JSON `"protocol": "openspool"`
enthält. Seine Felder werden dann über die [Referenztabellen](../concepts/universal-filament-identity.md)
aufgelöst:

| OpenSpool | TigerData | Regel |
|---|---|---|
| `brand` | `id_brand` | per Name in `id_brand.json` gesucht, ohne Groß-/Kleinschreibung; fehlend oder unbekannt → `Generic` (65535) |
| `type`, `subtype` | `id_material` | in `id_material.json` gesucht, ohne Groß-/Kleinschreibung, in dieser Reihenfolge: `type-subtype` (`PLA` + `CF` → `PLA-CF`), `type subtype` (`PLA` + `Silk` → `PLA Silk`), dann `type` allein. `NYLON` wird als `PA` (59328) gelesen. Ein fehlender oder unbekannter Typ wird abgefragt |
| `subtype`, wenn das Material ihn nicht verwendet hat | `id_aspect1` | der gleichnamige Aspekt in `id_aspect.json` (`Matte` wird als `Matt` gelesen, 247), sonst `Basic` (104); ein Subtyp ohne Treffer bleibt in der `message` des Datensatzes erhalten |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | übernommen; OpenSpool trägt eine einzige Farbe |
| `diameter` | `id_diameter` | `1.75` → 56, `2.85` → 221; fehlend → 1,75, der OpenSpool-Standard; jeder andere Wert wird abgefragt |
| `weight` | `measure`, `id_measure_unit` | in Gramm, Einheit `g` (21); fehlend → 1000, der OpenSpool-Standard. Die Spule beginnt voll: `weight_available` = `weight` |
| `min_temp`, `max_temp` | Düse min. und max. (`data2`, `data3`) | übernommen; sind beide `0` (fehlend), die empfohlenen Werte des Materials. `max_temp` unter `min_temp`: das Tag wird abgelehnt, wie in OpenRFID |
| — | Trocknungstemperatur und -dauer, Bett min. und max. (`data4`–`data7`) | die `recommended`-Werte des Materials in `id_material.json` |
| — | `id_type` | Filament (142) |
| — | `id_aspect2` | None (255) |
| — | `id_product` | `0xFFFFFFFF`: kein Katalogprodukt |
| — | `timestamp` | der Zeitpunkt des Imports |

Zwei Regeln weichen bewusst vom Leser von OpenRFID ab:

- **Bett- und Trocknungswerte kommen aus der TigerTag-Referenzdatenbank**, nicht
 aus der fünfzeiligen Tabelle von OpenRFID (PLA, PETG, ABS, TPU, NYLON und null
 für jeden anderen Typ). Es sind die Werte, die Tiger Studio einträgt, wenn man
 dasselbe Material von Hand wählt, und es gibt sie für alle 113 Materialien.
- **Das Material wird nie geraten.** OpenRFID liest einen fehlenden Typ als
 PLA. Ein falsches Material ergibt falsche Temperaturen, daher fragt der Import
 nach.

---

**◀ Zurück:** [Klipper](./klipper.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Entwickler](../developers/README.md)
