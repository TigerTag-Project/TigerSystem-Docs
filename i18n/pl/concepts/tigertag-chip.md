---
sourceHash: 4065a0b500f9ddf83112df19144515a99bdd2f92002b6825f75721fe418969d5
sourcePath: docs/concepts/tigertag-chip.md
---

# Chip TigerTag (format RFID/NFC)

## Warstwa fizyczna

| Właściwość | Wartość |
|---|---|
| Rodzina chipów | NTAG213 / 215 / 216 (NFC Forum Type 2) |
| Zalecany kształt | **okrągła naklejka 25 mm** (inne kształty też działają) |
| Ładunek | 144-bajtowy ładunek NDEF — dopasowany do małego NTAG213; większe chipy zostawiają nieużywane miejsce |
| Oficjalne chipy z logo | Produkowane jako **NTAG215** — dodatkowa pamięć maksymalizuje ponowne wykorzystanie po zużyciu szpuli (standardowe obiekty NDEF), aby chip nigdy nie stał się elektrośmieciem |
| Uwierzytelnianie | Brak — otwarcie odczytywalny |
| Blokada zapisu | **Brak** — chipy są dostarczane odblokowane; użytkownik może je przepisać, także migrując całkowicie do innego protokołu |
| Obszar zarezerwowany | **64 bajty** na końcu ładunku — strony `0x18`–`0x27`, co zostawia 80 bajtów danych. W standardowym TigerTag są **wolne dla dodatkowych funkcji społeczności**; w [TigerTag+](../products/tigertag-plus.md) zawierają **podpis pochodzenia**, 32 bajty `R` i 32 bajty `S` (układ na poziomie bajtów: [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)) |
| Chipów na szpulę | **Dwa**, umieszczone po przeciwnych stronach |
| Odczytywalny przez | Dowolny smartfon z NFC, czytniki USB klasy ACR122U, [TigerPOD](../products/tigerpod.md) |

To celowe przeciwieństwo tagów producentów (Mifare Classic z kluczami
wyprowadzanymi, sektory AES, podpisy RSA — zobacz
[zgodność](../compatibility/README.md)): chip TigerTag niczego nie ukrywa.

Myśl o chipie jako o **długoterminowym zimnym magazynie** tożsamości szpuli:
dane leżą na samym chipie, offline, przez lata — bez serwera, bez konta, bez
niczego, co trzeba utrzymywać przy życiu. Warstwa online (baza referencyjna,
synchronizacja z chmurą) tylko *dodaje* świeżość na wierzchu.

## Dlaczego każda szpula ma DWA chipy

<img src="../assets/refill-with-tigertag-blue.png" width="380" alt="Zwój refilla filamentu z okrągłym chipem TigerTag" />

Dwa chipy po przeciwnych stronach szpuli — wygląda to na nadmiarowość, a jest
najmądrzejszym szczegółem formatu:

- **Drukarki współdzielą czytniki.** Maszyna ma zwykle **jeden czytnik RFID na
 dwa sloty szpul**, zamontowany **między nimi** — albo z boku drukarki, gdzie
 odczytuje lewą lub prawą stronę w zależności od tego, w którym slocie jest
 szpula. AMS Bambu Lab ma 2 czytniki na 4 sloty; w Snapmakerze szpula
 znajduje się po jednej lub drugiej stronie drukarki. Dzięki chipowi z każdej
 strony **niezależnie od slotu jeden chip zawsze jest zwrócony do czytnika** —
 i nigdy nie musisz ładować szpuli w określony sposób.
- **Nie trzeba szukać chipa przy ręcznym skanowaniu.** W
 [TigerPOD](../products/tigerpod.md) lub z telefonem nie musisz ustalać, która
 strona niesie chip: jakkolwiek weźmiesz szpulę, jeden jest już po właściwej
 stronie.
- **Skanowanie na miejscu.** Szpulę zamontowaną w AMS Lite, z boku Elegoo
 Centauri Carbon lub FlashForge można zeskanować bez wyjmowania.
- **Swoboda integratora.** Producent suszarki do filamentu po prostu umieszcza
 czytnik tam, gdzie pasuje — z lewej lub z prawej w suszarce jednoszpulowej,
 między dwiema szpulami w podwójnej — i zawsze działa.
- **Redundancja.** Jeśli jeden chip przestanie odpowiadać, drugi nadal
 identyfikuje szpulę, więc nic nie ginie, gdy go wymieniasz (zobacz niżej).
- **Podwójne żniwo.** Po zużyciu każdy kilogram wydrukowanego filamentu
 zostawia ci **dwa chipy NTAG do ponownego użycia** w projektach DIY
 ([zero elektrośmieci](../philosophy/second-life.md)).

Kilka szczegółów implementacji:

- Dwa chipy są **w pełni niezależne — każdy ma własny UID**; nie ma wspólnej
 anteny. Są **zapisywane razem jako para (Twin Tag)** i utrzymywane jako
 identyczne przez całe życie szpuli, co do gramów, które zostały — i zawsze
 liczone jako **jedna** szpula.
- Na szpulach fabrycznych chipy jadą na **nośniku**: pasku, którego dwa końce
 owijają kartonowy rdzeń (po jednym chipie na koniec), przytrzymywane
 przemysłowym **klejem 3M (468MP / 200MP)** — operator odkleja i przykleja,
 nic poza tym nie zmienia się na linii. Projekt nośnika jest **publiczny i
 możliwy do wydrukowania w domu**, a ta sama forma jest sprzedawana osobno dla
 [refilli](../philosophy/second-life.md), więc chip podróżuje z filamentem, a nie z szpulą.

<img src="../assets/carrier-bare.png" width="440" alt="Nagi nośnik TigerTag — dwie niezależne anteny NFC, po jednej na każdym końcu" />

*Nośnik bez osłon: dwie niezależne anteny są wyraźnie widoczne — po jednej na
każdym złożonym końcu, każda z własnym UID.*

### Jak dwa chipy są ze sobą powiązane

Nic centralnego nie rejestruje pary. Jest **wnioskowana z tego, co niosą oba
chipy**, a polem, które czyni ją zamierzoną, a nie przypadkową, jest
**znacznik czasu**.

4 bajty na stronie `0x0C` (offset `+32`) pełnią podwójną rolę: sekundy od
2000-01-01 GMT *oraz* **Twin Tag ID**. Dwa chipy zapisane w tej samej sesji
otrzymują dokładnie tę samą wartość — ta wspólna sekunda jest kluczem parowania.

Rozdzielczość to jedna sekunda, więc sam znacznik czasu nie jest dowodem: dwie
szpule oznaczone w tej samej sekundzie też by go niosły. Parę potwierdza to, że
**opisowa tożsamość też się zgadza** — oba chipy opisują jedną szpulę, więc
każde pole opisujące tę szpulę musi być identyczne na obu:

| Pole | Strona | Offset |
|---|---|---|
| Twin Tag ID / znacznik czasu | `0x0C` | `+32` |
| ID Brand | `0x07` | `+14` |
| ID Material | `0x06` | `+8` |
| ID Aspect 1 · ID Aspect 2 | `0x06` | `+10` · `+11` |
| Color 1 · Color 2 · Color 3 | `0x08` · `0x0D` · `0x0E` | `+16` · `+36` · `+40` |
| ID Product | `0x05` | `+4` |

To, co faktycznie rozróżnia, zależy od wariantu:

- W **[TigerTag+](../products/tigertag-plus.md)** `ID Product` jest prawdziwym
 identyfikatorem katalogowym. Ten sam znacznik czasu **i** ten sam identyfikator
 produktu wystarczy, by z niemal pewnością uznać parę.
- W **standardowym TigerTag** `ID Product` to stała `0xFFFFFFFF` na każdym
 istniejącym chipie, więc nie niesie żadnej informacji rozróżniającej. Tę pracę
 wykonują zamiast niego marka, materiał, trzy kolory i oba aspekty — razem ze
 znacznikiem czasu.

Dwie konsekwencje warte jasnego wypowiedzenia:

- **Zapis chipów w dwóch oddzielnych przebiegach nie tworzy pary.** Otrzymują
 dwa różne znaczniki czasu, więc nic ich nie wiąże i ekosystem liczy dwie
 szpule. Dlatego aplikacja telefonu zapisuje oba w jednej sesji *Dual NFC*
 i dlatego [TigerPOD](../products/tigerpod.md) ma dwa czytniki zwrócone do siebie.
- **Podpis jest jedyną rzeczą, która zgodnie z zasadami się różni.** W
 TigerTag+ podpisuje on `SHA-256(uid ‖ id_tigertag ‖ id_product)`, a każdy chip
 ma własny UID — więc dwa chipy pary niosą dwa *różne* podpisy, z konstrukcji.
 Identyczne podpisy oznaczałyby kopię, nie bliźniaka.

Powyższe offsety są cytowane z wiążącego
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)
(§2.9), który pozostaje specyfikacją.

### Nośnik refilla w praktyce

Dwa szczegóły, które ludzi zaskakują:

- **Przyklejanie jest opcjonalne.** Klej 3M ma przytrzymać nośnik, gdy
 obsługujesz i przechowujesz refill. Po zamontowaniu refilla na masterszpuli
 nośnik jest **zaklinowany między masterszpulą a kartonowym rdzeniem** i nie
 może się ruszyć — klej nie ma już nic do roboty.
- **Wraca na zewnątrz i nadaje się do ponownego użycia.** Gdy refill się
 skończy, odzyskaj nośnik z jego dwoma chipami, wymaż je z
 [Tiger NFC Connect](../products/tigertag-connect.md) lub
 [Tiger Studio](../products/tiger-studio.md) i użyj ponownie — na innej
 szpuli albo do dowolnego innego projektu NDEF. Filament sprzedawany z
 TigerTag Refill zostawia ci nośnik, a nie odpad
 ([drugie życie](../philosophy/second-life.md)).

Gdzie go zdobyć: zobacz [zakup chipów](../products/tigertag.md).

## Gdy chip przestaje działać lub traci dane

Ocalały chip nadal identyfikuje szpulę. Co dalej, zależy od tego, co się
stało:

| Co się stało | Co zrobić | Podpis |
|---|---|---|
| **Chip nie działa lub zaginął** | Znajdź filament w katalogu, w [Tiger NFC Connect](../products/tigertag-connect.md) lub [Tiger Studio](../products/tiger-studio.md), i zapisz go na dwóch chipach w jednej sesji: *Dual NFC* w telefonie albo [TigerPOD](../products/tigerpod.md). Użyj dwóch nowych chipów albo wyczyść ocalały i użyj go jako jednego z dwóch | utracony: chipy nadal niosą produkt z katalogu, więc są TigerTag+ i działają tak samo, ale nie są już TigerTag+ Certified |
| **Chipy nadal odpowiadają, ale ich dane zostały wymazane lub uszkodzone** | **Przywróć TigerTag+** w przyborniku szpuli w Tiger Studio, z chipami na TigerPOD: każdy chip jest zapisywany ponownie z kopii zapasowej | zachowany: chipy wracają dokładnie takie, jakie wyszły z fabryki |
| **Brak chipa pod ręką** | **Wydrukuj etykietę** ze szpuli w Tiger Studio: kod QR, który otwiera szpulę | — |

Nowy chip nie może po prostu dołączyć do ocalałego: para powstaje w chwili
zapisu, więc oba chipy zapisuje się zawsze razem
([gdy dwa chipy czytają się jako dwie szpule](../guides/twin-tag-pair.md)).

Na nowych chipach podpis przepada, bo podpisuje własny UID każdego chipa i nie
może przejść na inny. **Przywróć TigerTag+** wymaga kopii zapasowej: Tiger
Studio robi kopię TigerTag+ przy pierwszym odczycie.

## Zakodowany w fabryce albo czysty w twojej dłoni

Ten sam chip trafia do ciebie na dwa sposoby, a różnica znaczy więcej niż
cokolwiek innego na tej stronie:

| | Skąd pochodzi | Co na nim jest |
|---|---|---|
| **Wstępnie zakodowany** | zintegrowany na linii produkcyjnej, wewnątrz filamentu marki partnerskiej | pełna tożsamość szpuli, gotowa do odczytu |
| **Czysty** | kupiony osobno — z logo TigerTag albo dowolny chip NTAG z dowolnego miejsca | jeszcze nic; zapisujesz go raz, w około minutę |

Chipy sprzedawane osobno są dostarczane **czyste**, z logo czy bez. To nie jest
ograniczenie: niezapisany chip umożliwia [drugie życie](../philosophy/second-life.md)
i dlatego protokół nigdy nie zależy od kupowania czegokolwiek.

## Ładunek

144-bajtowy ładunek koduje
[uniwersalną tożsamość](./universal-filament-identity.md) szpuli — markę,
materiał, aspekt/kolor, typ, średnicę, ustawienia druku — jako identyfikatory
rozwiązywane względem wspólnej bazy referencyjnej.

Ładunek zajmuje strony od `0x04` do `0x27`, po 4 bajty każda; każda
wartość wielobajtowa jest zapisana w big-endian:

| Strony | Bajty | Zawartość |
|---|---|---|
| `0x04` | 4 | `ID TigerTag`, typ chipa: TigerTag, TigerTag+ lub TigerTag Init |
| `0x05` | 4 | `ID Product`: produkt z katalogu na TigerTag+, `0xFFFFFFFF` na TigerTag |
| `0x06`–`0x07` | 8 | materiał, dwa aspekty, typ, średnica i marka, jako identyfikatory z bazy referencyjnej |
| `0x08` | 4 | kolor 1, z kanałem alfa |
| `0x09` | 4 | ilość przy produkcji i jej jednostka |
| `0x0A`–`0x0B` | 8 | zakresy temperatury dyszy i stołu, temperatura i czas suszenia |
| `0x0C` | 4 | znacznik czasu, który jest też Twin Tag ID |
| `0x0D`–`0x0E` | 8 | kolory 2 i 3, indeks i liczba tagów, jeden bajt zarezerwowany |
| `0x0F` | 4 | TD HueForge, dwa bajty zarezerwowane |
| `0x10`–`0x16` | 28 | dowolna wiadomość, UTF-8 |
| `0x17` | 4 | pozostała ilość, aktualizowana przez Tiger Scale, jeden bajt zarezerwowany |
| `0x18`–`0x27` | 64 | podpis (`R` i `S`) na TigerTag+ Certified; w przeciwnym razie wolne |

To jest mapa, nie specyfikacja. Wiążąca jest tabela pól w
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#2-data-structure--tigertag-binary-format):
podaje dokładny offset każdego pola i odsyła do każdej tabeli identyfikatorów.
Parser trzyma się tej tabeli.

Aby zobaczyć tę mapę wypełnioną, [playground](https://tigersystem.io/playground) buduje chip z
produktu z katalogu lub z wybranych pól albo dekoduje hex odczytanego chipa i
pokazuje każde pole wraz z jego bajtami. Wszystko działa w przeglądarce.

## Odczyt i zapis

| Narzędzie | Odczyt | Zapis |
|---|---|---|
| [Tiger NFC Connect](../products/tigertag-connect.md) (mobilny NFC) | dotknij chipa — szpula otwiera się w telefonie | dotknij **Make** i dotknij ponownie, by zapisać; **Dual NFC** zapisuje oba chipy szpuli w jednej sesji |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | automatycznie otwiera szpulę po zeskanowaniu | zapis z przewodnikiem, z kontrolą UID |
| [SDK JS](../developers/sdks.md) (`tigertag` w npm) | dekoduje 144-bajtowy ładunek | koduje nowy ładunek |
| [SDK Python](../developers/sdks.md) | dekoduje ładunek; `tigertag[verify]` sprawdza także podpis | koduje nowy ładunek |

Obie aplikacje rozmawiają z czytnikiem; SDK nie. SDK dekoduje i koduje
**ładunek** — własny sprzęt NFC musisz zapewnić sam.

## Wersjonowanie

Ładunek niesie wersję formatu (tabela referencyjna `id_version`), dzięki czemu
czytniki mogą pozostać zgodne ze starszymi chipami.

---

**◀ Poprzednia:** [Uniwersalna tożsamość filamentu](./universal-filament-identity.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Magazyn i synchronizacja z chmurą](./inventory-and-cloud-sync.md)

**Zobacz też:** [TigerTag](../products/tigertag.md), [SDK](../developers/sdks.md), [Zgodność](../compatibility/README.md)
