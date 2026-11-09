---
sourceHash: fa644ad426378c66b3be7c3a1a494a12ec2e25e0680b3cdfeb8ccffe9fb6ca28
sourcePath: docs/developers/ttag-format.md
---

# Format pliku `.ttag`

**Plik wymiany magazynu `.ttag`** to przenośna migawka offline jednego lub wielu
materiałów magazynowych. Służy do **tworzenia kopii zapasowej** filamentów,
**przenoszenia** ich na pendrive'ie i **udostępniania** — między kontami, między
narzędziami lub jako gotowe kolekcje marek/serii.

Wprowadzony w **Tiger Studio Manager v2.14.0** (eksport + import). Format jest
stabilny i wieloaplikacyjny: narzędzia firm trzecich, przyszły webowy playground
generujący pliki `.ttag` i przygotowane kolekcje filamentów opierają się na tej
specyfikacji.

## Kształt pliku

Plik `.ttag` to pojedynczy dokument **JSON w UTF-8**:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "<owner uid>",
 "records": [ /* inventory documents, verbatim */ ],
 "rfidBackups": { "<chipUid>": { /* signed factory dump */ } }
}
```

| Pole | Znaczenie |
|---|---|
| `format` / `kind` | Zawsze `"tigertag"` / `"ttag"` — para identyfikacyjna sprawdzana przy imporcie |
| `version` | Wersja formatu; obecnie `1` |
| `exportedAt` | Czas eksportu, **ciąg ISO 8601** (np. `"2026-07-24T00:00:00.000Z"`) |
| `exportedBy` | Uid eksportującego właściciela — **wskazówka UX do wyboru trybu importu WYŁĄCZNIE, nigdy granica bezpieczeństwa** |
| `records[]` | Dokumenty magazynu, przenoszone **dosłownie** |
| `rfidBackups` | *Opcjonalne.* Kluczowane UID chipa; obecne tylko dla szpul TigerTag+ (certyfikowanych) — podpisany zrzut fabryczny używany do odtworzenia chipa |

**`records[]` to dokumenty magazynu Firestore, dosłownie** — dokładnie
`users/{uid}/inventory/{spoolId}` zgodnie z
[wiążącym modelem danych](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration/blob/main/docs/03-data-model.md)
(używaj go jako słownika pól). Trzy niuanse:

- **Pola są rzadkie** — pole jest zapisywane tylko wtedy, gdy występuje w
 dokumencie: `twin_tag_uid` tylko u bliźniaków, `rfidBackup: true` tylko w
 TigerTag+, `id_product` tylko gdy znany, i tak dalej.
- **Pola URL są kontrolowane przez atakującego** — `LinkTDS`, `LinkMSDS`,
 `LinkYoutube`, `LinkREACH`, `LinkROHS`, `LinkFOOD` i `url_img*` są
 sanityzowane przy imporcie: każdy schemat inny niż http(s) jest odrzucany.
- **Rozmieszczenie na regale podróżuje, ale nie obowiązuje** — `rack`, `rack_id`,
 `level`, `position` mogą pojawić się w pliku, ale nie mają znaczenia przy imporcie
 (zaimportowana szpula nie dziedziczy regału eksportującego).

### Pola wymagane i opcjonalne

Na **poziomie pliku**:

| Pole | Status |
|---|---|
| `format` = `"tigertag"`, `kind` = `"ttag"`, `version` ≤ 1 | **Wymagane** — brak lub niezgodność = plik jest odrzucany |
| `records[]`, niepuste | **Wymagane** — pusty plik jest odrzucany |
| `exportedAt`, `exportedBy` | Informacyjne (`exportedBy` to tylko wskazówka UX) |
| `rfidBackups` | Opcjonalne — obecne tylko gdy dołączono szpule TigerTag+ |

Na **poziomie rekordu**:

| Kategoria | Pola |
|---|---|
| **Wymagane** | `uid` (`TigerData_<id>` lub UID chipa) · **`id_brand`** |
| Podstawowa tożsamość (obecna w każdym poprawnym rekordzie) | `id_material`, `id_type`, `id_aspect1`, `id_tigertag` — rozwiązywane względem wspólnej bazy referencyjnej |
| Pojemność | Normalizowana z `measure` + `id_unit`: **`measure_gr` w gramach dla ciał stałych** (np. `measure: 1` + kg → `measure_gr: 1000`) i **`measure_ml` w mililitrach dla cieczy** (żywice). Generatory mogą podawać `measure` + `id_unit`; wartość znormalizowana jest kanoniczną przechowywaną |
| Typowe opcjonalne | pola koloru (`color_r/g/b`, `online_color_list`…), `weight_available`, `container_id` / `container_weight`, ciągi wyświetlane (`material`, `series`, `color_name`), `TD`, `tags`, `sku` / `barcode`, `Link*`, `url_img*` |
| Warunkowe | `twin_tag_uid` (tylko bliźniaki — wzajemne w obrębie pliku) · `tag_index` / `tag_count` (tylko rekordy oparte na chipie — chip *i* z *n* odczytany z bajtu chipa +39, protokół TigerTag v2.2; po jednym półbajcie, `0` = nieznane; nigdy w rekordzie bez chipa) · `rfidBackup: true` **plus** pasujący wpis `rfidBackups` (tylko TigerTag+) · `id_product` (tylko znane produkty katalogowe) |
| Przenoszone, ale ignorowane przy imporcie | `rack`, `rack_id`, `level`, `position` |

W każdym przypadku brzegowym nieopisanym tutaj **importer Tiger Studio jest
implementacją referencyjną** — generatory firm trzecich powinny celować w
rekordy, które akceptuje standardowe Studio.

Reguły wbudowane w format:

- **Dwie konwencje znaczników czasu, z założenia.** Główne `exportedAt` to
 **ciąg ISO 8601**. Znaczniki czasu *wewnątrz* `records[]` (`updatedAt` i
 starsze warianty `updated_at` / `last_update`) to **liczby epoch-ms** —
 Firestore Timestamps są konwertowane przez serializer, aby plik serializował
 się czysto. Nie „naprawiaj” jednego pod drugie: pliki w obiegu już niosą taki kształt.
- **Bliźniaki są atomowe.** Materiał z bliźniakiem zawsze eksportuje **obie**
 strony — jeden materiał → dwa rekordy, powiązane przez `twin_tag_uid`. Pół
 bliźniaka nigdy nie jest produkowane.
- **Dyscyplina identyfikatorów.** Mogą występować tylko bezchipowe identyfikatory
 `TigerData_<id>`; starszy identyfikator `CLOUD_<id>` jest odrzucany przy eksporcie.

### Pojemniki (`container_id`, `container_weight`)

`container_id` wskazuje pustą szpulę, na której nawinięty jest filament.
`container_weight` to masa tej pustej szpuli w gramach: tara, którą waga
odejmuje, aby inwentarz pokazywał filament netto.

Identyfikatory to ciągi znaków z jednej stałej listy dostarczanej z Tiger
Studio, [`data/container_spool/spools_filament.json`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/data/container_spool/spools_filament.json).
Każdy wpis zawiera markę, do której należy (`brandId`, ta sama liczba co
`id_brand`), oraz masę katalogową. Większość to własna szpula danej marki —
`bambu_grey` (249 g), `esun_masterspool_2_0` (210 g),
`polymaker_cardboard` (170 g) — a trzy są ogólne, dla marki, której szpuli
nie ma jeszcze na liście:

| `container_id` | Jak wyświetla to Tiger Studio | Masa katalogowa |
|---|---|---|
| `custom_cardboard` | Generic · Cardboard | 165 g |
| `custom_plastic` | Generic · Plastic | 200 g |
| `custom_no_masterspool` | Generic · Refill — Without MasterSpool | **0 g** |

`custom_no_masterspool` niczego nie odejmuje. Jest poprawny dla wkładu
ważonego bez żadnej szpuli, a wszędzie indziej błędny: szpula, która go ma,
pokazuje masę brutto, około 200 g więcej niż pozostały filament.

`container_weight` to **migawka** z chwili wyboru pojemnika, a nie odczyt z
listy. Rekord zachowuje swoją wartość, gdy lista się zmienia, a konto może
poprawić masę pojemnika dla własnych szpul (zapisaną w
`users/{uid}/containerOverrides/{id}`; wspólna lista nigdy nie jest
modyfikowana).

Generator, który zna pustą szpulę, zapisuje oba pola. Taki, który jej nie zna,
pomija je zamiast zgadywać: Tiger Studio ustawia wtedy własny pojemnik marki
albo pyta, gdy jest ich kilka lub nie ma żadnego.

## Typ nośnika

Kanoniczny typ nośnika to **`application/vnd.tigertag.ttag+json`** — ma
znaczenie tam, gdzie `.ttag` jest **serwowany przez http(s)** (nagłówek
`Content-Type`, który powinien wysyłać webowy playground, CDN lub host kolekcji marek).
`application/json` jest również akceptowany. Plik na dysku nie niesie MIME —
jest rozpoznawany po rozszerzeniu `.ttag` i, wiążąco, po zawartości:
importery **walidują po zawartości** (`format`/`kind`/`version`), nigdy wyłącznie
po nagłówku MIME ani rozszerzeniu pliku.

## Dostępność

Eksport i import są dostępne w **Tiger Studio v2.14.0+**. Format jest zaprojektowany
jako przenośny; inne powierzchnie mogą go z czasem przyjąć — dziś Studio jest
implementacją referencyjną.

## Co może nieść `.ttag`

Wszystkie trzy [poziomy szpul](../concepts/universal-filament-identity.md) są
eksportowane i importowane:

| Poziom | W pliku |
|---|---|
| **TigerData** (w pełni cyfrowe, bez chipa) | Sam rekord |
| **TigerTag** (zapisany chip) | Sam rekord |
| **TigerTag+** (certyfikowany chip) | Rekord **plus** jego podpisany zrzut fabryczny w `rfidBackups` |

## Eksport

- **Pojedyncza szpula** — z przybornika szczegółów szpuli → plik o nazwie
 `brand-material-color.ttag`.
- **Wielokrotny wybór** — zaznacz kilka szpul, przycisk paska narzędzi **Export** →
 plik o nazwie `tigertag-selection-<date>.ttag`.
- Eksport jest dostępny **wyłącznie dla własnego magazynu użytkownika**.

## Import — walidacja → podgląd → akceptacja

Importer akceptuje **kilka plików `.ttag` naraz**: przeglądaj, wklej link
http(s) lub przeciągnij i upuść w dowolnym miejscu okna.

1. **Walidacja.** Każdy plik musi nieść parę `format`/`kind` oraz
 `version ≤ 1`. Plik inny niż `.ttag`, nowsza wersja lub pusty plik są
 odrzucane. Każdy **rekord** musi następnie nieść pełny ładunek chipa — zobacz
 *Pola wymagane* poniżej.
2. **Sanityzacja.** Zawartość pliku to niezaufane dane wejściowe: pola URL inne
 niż http(s) są odrzucane; wartości koloru, wagi i TD są przycinane do
 prawidłowych zakresów.
3. **Podgląd.** Każdy materiał jest pokazany w tabeli podglądu z
 **polem wyboru uwzględnienia** dla każdego materiału.
4. **Akceptacja** w jednym z dwóch trybów — wstępnie podpowiedzianych z `exportedBy`,
 dowolnie przełączalnych:

|| **Przywracanie** | **Import** |
|---|---|---|
| Zamiar | To samo konto / prawdziwe przywracanie | Przejmowanie cudzych materiałów |
| Identyfikatory rekordów | Zachowane — zapisywane **dosłownie** pod pierwotnymi identyfikatorami | **Nowe** identyfikatory — każdy rekord staje się świeżą bezchipową szpulą `TigerData_` należącą do importującego |
| Status chipa | Zachowany — każda kopia `rfidList` przywrócona | Odrzucony — kopia jest bezchipowa: `id_tigertag` usunięty, `rfidBackup:false`, kopie zapasowe odrzucone (podpisany zrzut jest związany z chipem, którego importujący nie posiada) |
| Produkt | Zachowany | **Zachowany**, gdy `id_product` jest prawdziwym identyfikatorem z katalogu (nie `0`, nie `0xFFFFFFFF`), więc TigerData+ pozostaje TigerData+, a TigerTag+ trafia jako TigerData+ tego samego produktu; każda inna wartość jest ustawiana na `0xFFFFFFFF` (nieustawiony). Przed Tiger Studio v2.51.1 był zawsze nieustawiony, więc TigerData+ trafiał jako zwykły TigerData |
| Waga | Jak zarejestrowana | Zresetowana do pełnej pojemności |
| Bliźniaki | Jak zarejestrowane | `twin_tag_uid` przemapowane przez nowe identyfikatory |

### Pola wymagane — rekord musi umożliwiać wytworzenie chipa

`.ttag` istnieje po to, by **tworzyć chipy TigerTag / TigerTag+**. Rekord, który
nie może go wytworzyć, nie jest rekordem częściowym, jest bezużyteczny — dlatego
od Tiger Studio **2.15.0** importer odrzuca go wprost, zamiast importować szpulę,
która wygląda dobrze i po cichu jest błędna.

Rekord jest akceptowany tylko wtedy, gdy niesie **`uid` plus te 24 pola numeryczne**,
każde obecne i skończone (`null` i `""` **nie** liczą się jako obecne — uwaga,
`Number(null)` to `0`):

| Grupa | Pola |
|---|---|
| Identyfikatory tożsamości | `id_brand`, `id_material`, `id_type`, `id_aspect1`, `id_aspect2`, `id_diameter`, `id_measure_unit`, `id_version`, `id_product` |
| Ilość | `measure` |
| Kolor | `color_r`, `color_g`, `color_b`, `color_a` |
| Ładunek zależny od typu | `data1` … `data7` |
| Stempel | `timestamp` |

Plus **`id_tigertag`, ale tylko jeśli rekord ma chip.** To pole wskazuje wersję
chipa w `id_version.json`, gdzie legalne są dokładnie cztery wartości — `0`
RFID Empty, `1542820452` TigerTag, `1816240865` TigerTag Init, `3155151767`
TigerTag+. Rekord bezchipowy (`uid` zaczynający się od `TigerData_` lub starszego `CLOUD_`)
nie ma chipa, a więc i wersji, więc **w ogóle nie może nieść tego pola**;
zapisuje się je po raz pierwszy, gdy programowany jest prawdziwy chip. Nigdy nie
wymyślaj dla niego wartości i nigdy nie rozwiązuj żadnej bez sprawdzenia, że
rekord ma chip.

Wszystko inne w rekordzie — nazwy, obrazy, cena, notatki, pozycja na regale — to
**wzbogacenie**: miło mieć, nigdy nie jest wymagane.

**Materiał jest atomowy.** Para bliźniaków przechodzi tylko wtedy, gdy przechodzą
*oba* jej rekordy; pół-poprawny bliźniak jest odrzucany w całości, ponieważ
zaimportowanie jednej strony pary stworzyłoby szpulę, której partnera nigdy nie
da się zapisać.

**Odrzucenia są liczone i pokazywane, nigdy ciche.** Podgląd zgłasza, ile
materiałów odrzucono, więc zły eksport jest widoczny, a nie po cichu traci
połowę zawartości. Autorzy plików `.ttag` powinni walidować je względem tej listy
przed wysłaniem pliku użytkownikom.

## Kompletny przykład

Wierny, zanonimizowany eksport wielokrotnego wyboru — jedno TigerData, jedna para
bliźniaków (wzajemne `twin_tag_uid`), jedno TigerTag+, którego zawartość chipa
jest zabezpieczona kopią:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "AbCdEf0123456789GhIjKlMnOpQr",
 "records": [
  {
   "uid": "TigerData_9F3A2B1C",
   "id_brand": 12, "id_material": 3, "id_type": 1,
   "id_aspect1": 2, "id_aspect2": 0, "id_tigertag": 74213,
   "material": "PLA Basic", "color_name": "Sky Blue",
   "color_r": 88, "color_g": 170, "color_b": 220,
   "online_color_list": "58AADC", "online_color_type": 1,
   "measure_gr": 1000, "weight_available": 640,
   "container_id": "custom_plastic", "container_weight": 200,
   "TD": 0, "tags": ["desk", "prototyping"],
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04A1B2C3D4E5F6",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55010,
   "material": "PLA Silk", "color_name": "Gold",
   "color_r": 212, "color_g": 175, "color_b": 55,
   "online_color_list": "D4AF37",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04F6E5D4C3B2A1", "tag_index": 1, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04F6E5D4C3B2A1",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55011,
   "material": "PLA Silk", "color_name": "Emerald",
   "color_r": 0, "color_g": 130, "color_b": 90,
   "online_color_list": "00825A",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04A1B2C3D4E5F6", "tag_index": 2, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04112233445566",
   "id_brand": 5, "id_material": 8, "id_type": 1,
   "id_aspect1": 2, "id_tigertag": 90887, "id_product": 4412,
   "material": "PETG HF Basic", "series": "Hyper PETG",
   "color_name": "Green",
   "color_r": 0, "color_g": 160, "color_b": 70,
   "online_color_list": "00A046",
   "measure_gr": 1000, "weight_available": 480,
   "container_id": "custom_plastic", "container_weight": 200, "TD": 6,
   "LinkTDS": "https://example-brand.example/tds/petg-hf-basic.pdf",
   "sku": "RFHPPETG175GN1",
   "rfidBackup": true, "updatedAt": 1769212800000
  }
 ],
 "rfidBackups": {
  "04112233445566": {
   "firstSeen": 1767139200000,
   "backup": "0411223344556680048000000000E110122F0300FE0000A5A5C0FFEE112233445566778899…"
  }
 }
}
```

Jak czytać przykład: pierwszy rekord jest bezchipowy (identyfikator `TigerData_`);
następne dwa to para bliźniaków — ten sam materiał, wzajemne `twin_tag_uid`, zawsze
eksportowane razem; ostatni to TigerTag+ (`rfidBackup: true`), którego podpisany
zrzut fabryczny znajduje się w `rfidBackups` pod UID jego chipa.

## Model bezpieczeństwa / zaufania

Plik `.ttag` to **niezaufane dane wejściowe**. Każdy rekord jest sanityzowany
przy imporcie (zobacz wyżej). `exportedBy` tylko wstępnie wybiera tryb w
interfejsie — prawdziwą granicą autoryzacji są **Reguły bezpieczeństwa Firestore**.
Nigdy nie traktuj zawartości pliku jako wiążącej dla tożsamości ani własności.

---

**▲ [Spis dokumentacji](../../README.md)** · **Zobacz też:** [Uniwersalna tożsamość filamentu](../concepts/universal-filament-identity.md), [Magazyn i synchronizacja z chmurą](../concepts/inventory-and-cloud-sync.md), [Przegląd dla deweloperów](./README.md)
