---
sourceHash: bbc5e9975e29d36151f72d68e741b2688c5f2a46503d71f8f73aae13a8b74ce6
sourcePath: docs/compatibility/opentag3d.md
---

# OpenTag3D

## Czym jest

**[OpenTag3D](https://github.com/GooborgStudios/OpenTag3D)** to tworzony przez
społeczność otwarty standard tagów dla szpul filamentu: ładunek NDEF
dopasowany do NTAG215, bez szyfrowania, z opublikowaną specyfikacją i otwartą
listą zwolenników. Tak jak TigerTag, powstał dlatego, że branża zapełniała się
jednym własnościowym formatem na markę drukarki, i wyraźnie stwierdza, że tag
musi działać **całkowicie offline**. Duchem jest bliskim kuzynem.

Oba standardy definiują też warstwę online i oba nazywają ją **Web API** —
i właśnie tu projekty się rozchodzą, celowo i w przeciwnych kierunkach.

## Dwa projekty obok siebie

| Aspekt | TigerTag | OpenTag3D |
|---|---|---|
| Co chip przechowuje, by dotrzeć do warstwy online | **identyfikator produktu z katalogu** | **„Online Data URL”** — sam adres |
| Kto odpowiada | **jeden punkt końcowy, każda marka** | jeden punkt końcowy na tag, utrzymywany przez autora tagu |
| Rola warstwy online | **kanał aktualizacji**: poprawki docierają do szpul już wysłanych | **z założenia uzupełniająca** — specyfikacja stwierdza, że „will NEVER be relied upon for printer functionality” |
| Dokumenty regulacyjne | TDS · MSDS · RoHS · REACH · EN71 · kontakt z żywnością, dla każdego produktu | brak w schemacie — Web API niesie zdjęcia, cenę, linki do produktu, status QA, notatki |
| Kopia danych tagu online | tak, pełny profil | tak, `tag_data` — **opcjonalne**, jak każde pole poza wersją |
| Dowód pochodzenia | opcjonalny — [TigerTag+ Certified](../products/tigertag-plus.md) jest podpisany i weryfikowany offline | brak, celowo: specyfikacja odrzuca szyfrowanie jako „unsuitable for an open source standard” |

## Co wynika z identyfikatora w porównaniu z adresem

Żadne z podejść nie jest przypadkowe i każde coś daje.

Przechowywanie **adresu** sprawia, że tag jest samowystarczalny: kto go zapisuje,
decyduje, gdzie leżą jego dane, i nie odpowiada przed nikim. Koszt jest taki, że
adres jest zapisany w chipie, w limicie bajtów ładunku, a chipa nie da się
przekierować, gdy trafi już do klienta — jeśli ten host się przeniesie lub
przestanie odpowiadać, zepsuje się właśnie ten link.

Przechowywanie **identyfikatora** wygląda tak, jakby wstawiało na drodze wspólny
punkt końcowy — i tak by było, gdyby odniesienie należało do nas i mogło być
przez nas zatrzymane. Nie należy: cały katalog jest opublikowany jako jeden plik,
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json),
zawierający każdy identyfikator każdego filamentu w bazie, odświeżany w ciągu
dnia i wolny do skopiowania dla każdego. Czytnik może trzymać własną kopię i
rozwiązywać identyfikatory bez żadnej sieci.

Identyfikator daje więc to, czego adres nie potrafi. Chip nigdy nie przechowuje
lokalizacji, więc pozostaje ważny, cokolwiek stanie się z jakimkolwiek hostem;
czytnik implementuje jeden punkt końcowy i działa on dla filamentu, którego
nigdy nie widział; producent poprawia dane pół roku po wyjściu szpul z fabryki;
a samo rozwiązywanie może odbywać się w pełni offline, na kopii, którą każdy
może zachować.

[Podpis](../products/tigertag-plus-certified.md) jest drugą konsekwencją.
Ponieważ TigerTag+ Certified podpisuje własny UID chipa, dane mogą się online
poprawiać, a szpula wciąż dowodzi, skąd pochodzi — offline, na telefonie klienta.

## Interoperacyjność

Chipy TigerTag **nigdy nie są zablokowane przed zapisem**. Jeśli wolisz
OpenTag3D — albo dowolny inny format — możesz swobodnie przepisać fabryczny chip
na ten format. To to samo stanowisko, jakie zajmujemy wobec
[OpenSpool](./openspool.md), z tego samego powodu: szpula należy do tego, kto ją kupił.

---

**◀ Poprzednia:** [OpenSpool](./openspool.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Porównanie formatów tagów szpul](./tag-formats.md)

**Zobacz też:** [Web API](../developers/web-api.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
