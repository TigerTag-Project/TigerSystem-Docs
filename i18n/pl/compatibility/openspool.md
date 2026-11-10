---
sourceHash: 2aa30864cfb206820e96297f6e331f24ff62e73727f540f12585f2c57cd43347
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## Czym jest

**OpenSpool** to otwarty standard tagów tworzony przez społeczność: dane filamentu jako **NDEF JSON**
na tagach NFC Type 2 — bez uwierzytelniania, bez kryptografii, w pełni otwarty. W duchu to
bliski kuzyn TigerTag.

## TigerTag a OpenSpool

| Aspekt | TigerTag | OpenSpool |
|---|---|---|
| Nośnik | NTAG, 144-bajtowy ładunek NDEF | NFC Type 2, NDEF JSON |
| Model danych | Zwarte identyfikatory rozwiązywane w oparciu o wspólną bazę referencyjną | Samoopisujący się JSON |
| Chmura | Opcjonalne konto, magazyn, udostępnianie ([konto TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Brak (standard wyłącznie tagowy) |
| Autentyczność | Opcjonalna — [TigerTag+](../products/tigertag-plus.md) podpisany przez certyfikowanego producenta to **TigerTag+ Certified**, weryfikowalny offline | Brak |
| Otwartość | Otwarta specyfikacja + SDK | Otwarta specyfikacja |

## Migracja chipa z TigerTag do OpenSpool

Chipy TigerTag **nigdy nie są zablokowane przed zapisem** — TigerTag to tylko podstawowy
protokół, z którym dostarczane są szpule. Jeśli wolisz OpenSpool (lub dowolny własny format),
możesz swobodnie przepisać dane fabrycznego chipa do tego formatu.

## Interoperacyjność — specyfikacja opisana, konwersja do TigerData w przygotowaniu

Arkusz dekodowania tagów OpenSpool (tylko odczyt) jest utrzymywany w
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
w ramach planowanego odczytu RFID wielu producentów w Tiger Studio.

### Mapowanie importu: OpenSpool → TigerData

To mapowanie zastosuje czytnik OpenSpool w Tiger Studio. Odczyt tagu OpenSpool
tworzy **TigerData**: rekord bez chipa, z nowym `TigerData_<id>`. Chip OpenSpool
nie jest chipem TigerTag, a tag OpenSpool nie wskazuje żadnego produktu z
katalogu, więc rekord nigdy nie jest TigerData+. Zapisany później na chipie
TigerTag staje się TigerTagiem, jak każdy TigerData.

Tag jest OpenSpool tylko wtedy, gdy jego JSON zawiera
`"protocol": "openspool"`. Jego pola są wtedy rozwiązywane za pomocą
[tabel referencyjnych](../concepts/universal-filament-identity.md):

| OpenSpool | TigerData | Reguła |
|---|---|---|
| `brand` | `id_brand` | szukana po nazwie w `id_brand.json`, bez rozróżniania wielkości liter; brak lub nieznana → `Generic` (65535) |
| `type`, `subtype` | `id_material` | szukany w `id_material.json`, bez rozróżniania wielkości liter, w tej kolejności: `type-subtype` (`PLA` + `CF` → `PLA-CF`), `type subtype` (`PLA` + `Silk` → `PLA Silk`), potem sam `type`. `NYLON` czyta się jako `PA` (59328). O brakujący lub nieznany typ import pyta |
| `subtype`, jeśli materiał go nie wykorzystał | `id_aspect1` | aspekt o tej nazwie w `id_aspect.json` (`Matte` czyta się jako `Matt`, 247), w przeciwnym razie `Basic` (104); podtyp bez dopasowania zostaje w polu `message` rekordu |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | kopiowane; OpenSpool niesie jeden kolor |
| `diameter` | `id_diameter` | `1.75` → 56, `2.85` → 221; brak → 1,75, wartość domyślna OpenSpool; o każdą inną wartość import pyta |
| `weight` | `measure`, `id_measure_unit` | w gramach, jednostka `g` (21); brak → 1000, wartość domyślna OpenSpool. Szpula startuje pełna: `weight_available` = `weight` |
| `min_temp`, `max_temp` | dysza min. i maks. (`data2`, `data3`) | kopiowane; gdy obie wynoszą `0` (brak), zalecane wartości materiału. `max_temp` poniżej `min_temp`: tag jest odrzucany, jak w OpenRFID |
| — | temperatura i czas suszenia, stół min. i maks. (`data4`–`data7`) | wartości `recommended` materiału w `id_material.json` |
| — | `id_type` | Filament (142) |
| — | `id_aspect2` | None (255) |
| — | `id_product` | `0xFFFFFFFF`: brak produktu z katalogu |
| — | `timestamp` | czas importu |

Dwie reguły celowo różnią się od czytnika OpenRFID:

- **Wartości stołu i suszenia pochodzą z bazy referencyjnej TigerTag**, a nie z
 pięciowierszowej tabeli OpenRFID (PLA, PETG, ABS, TPU, NYLON i zero dla każdego
 innego typu). To wartości, które Tiger Studio wpisuje, gdy ten sam materiał
 wybiera się ręcznie, i istnieją dla wszystkich 113 materiałów.
- **Materiał nigdy nie jest zgadywany.** OpenRFID czyta brakujący typ jako PLA.
 Zły materiał daje złe temperatury, więc import pyta.

---

**◀ Poprzednia:** [Klipper](./klipper.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Dla deweloperów](../developers/README.md)
