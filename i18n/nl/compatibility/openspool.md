---
sourceHash: 2aa30864cfb206820e96297f6e331f24ff62e73727f540f12585f2c57cd43347
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## Wat het is

**OpenSpool** is een open community-tagstandaard: filamentdata als **NDEF JSON**
op NFC Type 2-tags — zonder authenticatie, zonder cryptografie, volledig open. Qua opzet is het
een nauwe neef van TigerTag.

## TigerTag versus OpenSpool

| Aspect | TigerTag | OpenSpool |
|---|---|---|
| Drager | NTAG, NDEF-payload van 144 bytes | NFC Type 2, NDEF JSON |
| Datamodel | Compacte ID's, opgelost tegen een gedeelde referentiedatabase | Zelfbeschrijvende JSON |
| Cloud | Optioneel account, inventaris, delen ([TigerSystem-account](../concepts/inventory-and-cloud-sync.md)) | Geen (alleen een tagstandaard) |
| Authenticiteit | Optioneel — een [TigerTag+](../products/tigertag-plus.md) die door een gecertificeerde fabrikant is ondertekend is een **TigerTag+ Certified**, offline verifieerbaar | Geen |
| Openheid | Open specificatie + SDK's | Open specificatie |

## Een chip van TigerTag naar OpenSpool migreren

TigerTag-chips zijn **nooit tegen schrijven vergrendeld** — TigerTag is slechts het basisprotocol
waarmee spoelen worden geleverd. Geef je de voorkeur aan OpenSpool (of een eigen formaat),
dan kun je de data van een fabriekschip vrij in dat formaat herschrijven.

## Interoperabiliteit — specificatie gedocumenteerd, TigerData-conversie in de maak

Een decoderingsblad (alleen lezen) voor OpenSpool-tags wordt bijgehouden in
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
als onderdeel van het geplande RFID-lezen van meerdere fabrikanten in Tiger Studio.

### Importtoewijzing: OpenSpool → TigerData

Dit is de toewijzing die de OpenSpool-lezer van Tiger Studio zal toepassen.
Het lezen van een OpenSpool-tag maakt een **TigerData** aan: een record zonder
chip, met een nieuwe `TigerData_<id>`. De OpenSpool-chip is geen TigerTag-chip,
en een OpenSpool-tag noemt geen catalogusproduct, dus het record is nooit een
TigerData+. Later naar een TigerTag-chip geschreven wordt het een TigerTag, zoals
elke TigerData.

Een tag is alleen OpenSpool als zijn JSON `"protocol": "openspool"` bevat.
Zijn velden worden dan opgelost met de [referentietabellen](../concepts/universal-filament-identity.md):

| OpenSpool | TigerData | Regel |
|---|---|---|
| `brand` | `id_brand` | op naam gezocht in `id_brand.json`, hoofdletterongevoelig; ontbrekend of onbekend → `Generic` (65535) |
| `type`, `subtype` | `id_material` | gezocht in `id_material.json`, hoofdletterongevoelig, in deze volgorde: `type-subtype` (`PLA` + `CF` → `PLA-CF`), `type subtype` (`PLA` + `Silk` → `PLA Silk`), daarna `type` alleen. `NYLON` wordt gelezen als `PA` (59328). Een ontbrekend of onbekend type wordt gevraagd |
| `subtype`, als het materiaal hem niet gebruikte | `id_aspect1` | het aspect met die naam in `id_aspect.json` (`Matte` wordt gelezen als `Matt`, 247), anders `Basic` (104); een subtype zonder treffer blijft bewaard in de `message` van het record |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | overgenomen; OpenSpool draagt één kleur |
| `diameter` | `id_diameter` | `1.75` → 56, `2.85` → 221; ontbrekend → 1,75, de standaard van OpenSpool; elke andere waarde wordt gevraagd |
| `weight` | `measure`, `id_measure_unit` | in grammen, eenheid `g` (21); ontbrekend → 1000, de standaard van OpenSpool. De spoel begint vol: `weight_available` = `weight` |
| `min_temp`, `max_temp` | nozzle min. en max. (`data2`, `data3`) | overgenomen; als beide `0` zijn (ontbrekend), de aanbevolen waarden van het materiaal. `max_temp` onder `min_temp`: de tag wordt geweigerd, zoals in OpenRFID |
| — | droogtemperatuur en -tijd, bed min. en max. (`data4`–`data7`) | de `recommended`-waarden van het materiaal in `id_material.json` |
| — | `id_type` | Filament (142) |
| — | `id_aspect2` | None (255) |
| — | `id_product` | `0xFFFFFFFF`: geen catalogusproduct |
| — | `timestamp` | het tijdstip van de import |

Twee regels wijken bewust af van de lezer van OpenRFID:

- **Bed- en droogwaarden komen uit de TigerTag-referentiedatabase**, niet uit
 de tabel van vijf rijen van OpenRFID (PLA, PETG, ABS, TPU, NYLON, en nul voor
 elk ander type). Het zijn de waarden die Tiger Studio invult als je hetzelfde
 materiaal met de hand kiest, en ze bestaan voor alle 113 materialen.
- **Het materiaal wordt nooit geraden.** OpenRFID leest een ontbrekend type als
 PLA. Een verkeerd materiaal geeft verkeerde temperaturen, dus de import vraagt
 het.

---

**◀ Vorige:** [Klipper](./klipper.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Ontwikkelaars](../developers/README.md)
