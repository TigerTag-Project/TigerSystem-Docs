---
sourceHash: 84d231fb87c4fd823cec2ac0222e3cb1b09833f4aa4542b04b027eaab4a89a20
sourcePath: docs/compatibility/tag-formats.md
---

# Porównanie formatów tagów szpul

Na szpulach filamentu używa się dziś sześciu formatów NFC/RFID. Ta strona
zestawia je obok siebie, według stanu na 6 listopada 2026 r., a każda liczba
pochodzi z własnej specyfikacji formatu lub — w przypadku Bambu Lab i Creality
(brak oficjalnej specyfikacji) — z publicznych prac inżynierii wstecznej. Strona
opisuje; nie ustala rankingu. [OpenSpool](./openspool.md) i
[OpenTag3D](./opentag3d.md) mają własne strony.

| | **TigerTag** | [OpenPrintTag][opt] | [OpenTag3D][ot3d] | [OpenSpool][osp] | Bambu Lab ([inżynieria wsteczna][bbl]) | Creality CFS ([inżynieria wsteczna][cfs]) |
|---|---|---|---|---|---|---|
| Chip | NTAG213 / NTAG215 | NFC-V, ICODE SLIX2 (320 B) | NTAG215 / NTAG216 | NTAG215 / NTAG216 | MIFARE Classic 1K | MIFARE Classic 1K |
| Bajty na jeden pełny rekord | **80** (+ 64 B podpisu) | 176 (248 B na tagu) | 224 | 126 (JSON) | nieudokumentowane (chip 1 KB) | 48 |
| Kolory, maks. | 3 | 6 | 4 | 1 | 2 | 1 |
| Dysza i łoże min. / maks. | tak | tak | tak | tylko dysza | dysza; jedna wartość łoża | nie |
| Temperatura i czas suszenia | tak | tak | tak | nie | tak | nie |
| Pozostała ilość na chipie | tak | tak | nie | nie | nie | nie |
| HueForge TD | tak | tak | tak | nie | nie | nie |
| Dowolna wiadomość tekstowa | 28 B | nie | nie | nie | nie | nie |
| Podpis weryfikowalny offline | ECDSA-P256, klucz publiczny opublikowany | nie | nie | nie | RSA-2048, klucz publiczny nieopublikowany | nie |
| Chip wielokrotnego zapisu | tak | tak | tak | tak | nie (odrzucony po modyfikacji) | nie |
| Otwarty katalog produktów offline | **20 348 produktów** | 15 874 opakowania | nie | nie | nie | nie |
| Poprawki chipa po opuszczeniu fabryki | jedno otwarte, ustandaryzowane API dla każdej marki; SDK porównują i łatają chip, podpis pozostaje ważny | nie | opcjonalny `data_url` do API, które każdy producent sam buduje i hostuje; brak wspólnego formatu, SDK i procesu aktualizacji | nie | nie | nie |

## Co pokazuje tabela

- **Najbardziej zwarty pełny rekord.** TigerTag przechowuje pełny rekord
  wydruku — temperatury, suszenie, ilości, kolory, TD — w 80 bajtach, wobec 176
  w OpenPrintTag i 224 w OpenTag3D. Dwa mniejsze rekordy zawierają mniej: 48
  bajtów Creality nie zawiera żadnej temperatury, 126 bajtów OpenSpool mieści
  siedem pól. To także jedyny format tutaj, który mieści się na NTAG213, łącznie
  z podpisem.
- **Kompletny offline dzięki katalogowi.** Identyfikator produktu TigerTag+ jest
  rozwiązywany względem dołączonego publicznego katalogu — 20 348 produktów z
  nazwą, serią, SKU, kodem kreskowym, zdjęciem i znacznikiem refill — bez sieci i
  bez konta.
- **Przewidywalne aktualizacje.** Marka poprawia produkt raz, w API wspólnym dla
  wszystkich marek; każdy czytnik łata potem chipy już sprzedane.
- **Nie najwięcej pól na chipie.** OpenPrintTag niesie więcej kolorów i pola,
  których TigerTag nie ma (GTIN, długość). TigerTag wyróżnia połączenie: pełny
  rekord w niewielu bajtach, podpis weryfikowalny offline i otwarty katalog
  ponad 20 000 produktów, na NTAG213.

## Źródła

- OpenPrintTag: [lista pól][opt], rozmiar z referencyjnego wektora testowego
  [`01_info.yaml`](https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/tests/encode_decode/01_info.yaml),
  liczba produktów w katalogu z README [openprinttag-database](https://github.com/OpenPrintTag/openprinttag-database).
- OpenTag3D: [specyfikacja][ot3d] i jej
  [mapa pamięci](https://github.com/GooborgStudios/OpenTag3D/blob/main/_data/spec.json).
- OpenSpool: [format tagu][osp], rozmiar z udokumentowanego przykładu.
- Bambu Lab: [RFID Tag Guide][bbl] (Bambu Research Group, inżynieria wsteczna).
- Creality CFS: [K2-RFID][cfs] (inżynieria wsteczna).
- TigerTag: [specyfikacja](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#how-tigertag-compares).

Jakaś liczba jest błędna lub nieaktualna? Wystarczy otworzyć zgłoszenie (issue):
ta strona jest poprawiana, a nie broniona.

[opt]: https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/data/main_fields.yaml
[ot3d]: https://github.com/GooborgStudios/OpenTag3D/blob/main/spec.md
[osp]: https://github.com/spuder/OpenSpool/blob/main/docs/rfid.md
[bbl]: https://github.com/Bambu-Research-Group/RFID-Tag-Guide/blob/main/BambuLabRfid.md
[cfs]: https://github.com/DnG-Crafts/K2-RFID

---

**◀ Poprzednia:** [OpenTag3D](./opentag3d.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Dla deweloperów](../developers/README.md)

**Zobacz też:** [Zgodność](./README.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
