---
sourceHash: 177607b1f797be9c2f0be3d7925a65850116275b036fcba3e65a77cd852e9af0
sourcePath: docs/developers/material-swatch.md
---

# Próbnik materiału — oficjalna konwencja

Kolor materiału jest przechowywany jako dane, a nie jako obraz. **Próbnik** to te
dane narysowane: kolorowy kształt, który reprezentuje materiał na liście, na
karcie, w slocie regału, obok jego nazwy. Ta strona to **oficjalna konwencja
TigerSystem** jego tworzenia, dzięki której ten sam materiał wszędzie wygląda
tak samo — w Tiger Studio, w aplikacji mobilnej, w sieci i w twojej własnej
integracji.

**„Materiał”, a nie „szpula”, to wybór celowy.** TigerTag identyfikuje szpulę
filamentu, ale także akcesorium, część zamienną, żywicę — i typy produktów,
które protokół dopiero zyska. Konwencja jest napisana względem `id_type` w ogóle:
nic poniżej nie odczytuje typu produktu, więc próbnik powstaje tak samo, czymkolwiek
jest materiał.

Jest normatywna. Filament dwukolorowy, który w jednej aplikacji pokazuje miękki
podział, a w innej ostrą krawędź lub pełny gradient, to błąd tej z nich, która
odeszła od tej strony — a nie kwestia gustu. Jeśli nie możesz odtworzyć reguły
dokładnie (na platformie bez gradientu stożkowego, na przykład), zaimplementuj
najbliższy odpowiednik opisany w [Platformy inne niż CSS](#platformy-inne-niż-css)
i napisz o tym; nie wymyślaj innego obrazu.

- **Wersja konwencji:** 1.2 — dwukolorowy to **miękki podział pod kątem 135°** (kolory
 jednolite, 20 % wymieszanego szwu), a **aspekt Tricolor to przemiatanie stożkowe**
 (o ile nie jest też Rainbow) (1.1 rysowała dwukolorowy jako ostry podział ukośny,
 a trójkolorowy jako camembert; 1.0 dzieliła dwukolorowy pionowo)
- **Renderer referencyjny:** [`material-swatch-playground.html`](./material-swatch-playground.html) —
 otwórz w dowolnej przeglądarce, bez serwera, bez zależności. Każdy przypadek, każdy
 kształt pudełka, selektory kolorów na żywo i dokładny CSS, który generuje.

---

## Cztery kształty i tylko cztery

| Kształt | Kiedy | Geometria |
|---|---|---|
| **Miękki podział** | **Dwa lub trzy** kolory o ostrych krawędziach — dwukolorowy albo trzy kolory bez aspektu Tricolor | N równych pasm wzdłuż osi **135°**, pierwszy kolor **w lewym górnym rogu**; każdy kolor pozostaje **jednolity**, a miesza się tylko szew o szerokości **20 %** przekątnej (`SPLIT_BLEND`) wyśrodkowany na każdej granicy |
| **Gradient** | Rainbow oraz zadeklarowany w katalogu typ `gradient` | Gładki liniowy gradient pod kątem **135°**, równomiernie rozmieszczone punkty — skierowany ku prawemu dolnemu rogowi, więc pierwszy kolor jest w lewym górnym |
| **Camembert** (kołowy) | **Cztery lub więcej** kolorów o ostrych krawędziach — dowolna lista N ≥ 4 | N równych sektorów stożkowych, pierwszy kolor zaczyna się o **godzinie 12**, przemiatanie **zgodnie z ruchem wskazówek zegara** |
| **Przemiatanie stożkowe** | Aspekt **Tricolor** (id 24), nie będący jednocześnie Rainbow, oraz zadeklarowany w katalogu `conic_gradient` | Gładki gradient stożkowy od **godziny 12**, zgodnie z ruchem wskazówek zegara, zamykający się na pierwszym kolorze — koło barw |

Mówiąc wprost: **dwa lub trzy ostre kolory dają miękki podział, cztery lub więcej
dają camembert, kolory gładkie dają gradient, a aspekt Tricolor kręci się w
przemiatanie stożkowe** — i w całym systemie jest dokładnie jeden kąt, 135°,
wspólny dla miękkiego podziału i gradientu.

**Dwukolorowy i trójkolorowy to miękki podział — oś gradientu, wyrazistość podziału.**
Ta sama oś i kolejność co w gradiencie (pierwszy kolor w lewym górnym rogu), ale
każdy kolor trzyma się jednolicie na swoim paśmie, a na każdej granicy miesza się
tylko szew **20 %**. Przy `seg = 100 / N` i `h = SPLIT_BLEND / 2 = 10` kolor *i*
trwa od `i·seg + h` (0 dla pierwszego) do `(i+1)·seg − h` (100 dla ostatniego).
Zaimplementuj to raz, w funkcji dzielącej listę kolorów (N ≤ 3 → miękki podział,
N ≥ 4 → koło), aby każdy wywołujący to dostał; nigdy nie rysuj tego odbitego.

Dlaczego miękki podział dla dwóch lub trzech kolorów: ostra krawędź wciąż
odczytywała się jak dwa lub trzy osobne obiekty — na miniaturze, a tym bardziej
na kolorowej ramce wokół zdjęcia produktu, gdzie zdjęcie zasłaniało środek i
zostawiało rozłączne kolorowe paski. Pełny gradient to naprawiał, ale wypłukiwał
kolory, więc żaden nie odczytywał się jako prawdziwy kolor. Miękki podział
utrzymuje każdy kolor jednolity i miesza tylko szew: jeden wielobarwny materiał,
prawdziwe kolory, na dowolnym kształcie pudełka. 20 % dobrano na oko na każdej
powierzchni (szerszy szew zostawia środkowemu kolorowi trójkolorowego prawie
żadnego jednolitego pasma). Dlaczego koło od czterech kolorów wzwyż: cztery lub
więcej pasm wzdłuż jednej przekątnej robi się zbyt cienkich, by je odczytać,
podczas gdy granice sektorów pozostają kątowe i rozpoznawalne — mierzone od
środka pudełka, więc N sektorów pozostaje czytelnych niezależnie od proporcji
pudełka. Dlaczego 135°: to jedyny kąt systemu, wspólny dla miękkiego podziału i
każdego gradientu. Dlaczego przemiatanie stożkowe dla aspektu Tricolor: trzy
pasma na jednej przekątnej zostawiają środkowemu kolorowi cienki pasek; koło
barw daje wszystkim trzem tę samą wagę i od razu czyta się jako „trzy kolory”,
w każdym rozmiarze.

---

## Skąd pochodzą dane

Rendererowi dostarczają dane dwie warstwy i nie są one tym samym.

### Chip — co najwyżej trzy kolory

TigerTag niesie **trzy sloty koloru i aspekt**. Nic więcej: na chipie nie ma typu
gradientu i nigdy nie było.

| Pole | Typ | Znaczenie |
|---|---|---|
| `color_r` / `color_g` / `color_b` | `int 0-255` | Slot 1 |
| `color_r2` / `color_g2` / `color_b2` | `int 0-255` | Slot 2 |
| `color_r3` / `color_g3` / `color_b3` | `int 0-255` | Slot 3 |
| `color_a` | `int 0-255` | Alfa — **ignorowana przy renderowaniu**; nigdy nie mieszaj koloru materiału |
| `id_aspect1` / `id_aspect2` | `int` | Którykolwiek slot może nieść aspekt koloru |

Trzy identyfikatory aspektów zmieniają kształt (ich tabela referencyjna niesie
także wiążące `color_count`):

| id | etykieta | `color_count` | Kształt |
|---|---|---|---|
| `252` | Bicolor | 2 | **Miękki podział**, 135° |
| `24` | Tricolor | 3 | **Przemiatanie stożkowe** |
| `145` | Rainbow | 3 | Gradient, 135° |

Każdy inny aspekt (`Silk`, `Matt`, `Glitter`, …) ma `color_count` ≤ 1 i nie
wpływa na kształt. **Dopasowuj po identyfikatorze, nie po etykiecie** — etykiety
to ciągi do wyświetlania i mogą być tłumaczone.

> **Nigdy nie zgaduj liczby kolorów, licząc sloty.** Dokument chipa zawsze niesie
> wszystkie trzy sloty: brakujące składowe są zapisane jako `0`, więc sloty 2 i 3
> odczytują się jako czysta czerń w materiale jednokolorowym. **Liczba kolorów
> pochodzi z aspektu, nigdy ze slotów.**

### Katalog — bogatszy opis, tylko w chmurze

Produkt z oficjalnego katalogu może opisać swój kolor dokładniej niż chip. Te dwa
pola istnieją **wyłącznie** w danych chmurowych/produktowych — nigdy nie są
zapisywane na chipie:

| Pole | Typ | Znaczenie |
|---|---|---|
| `online_color_list` | `string[]` | Uporządkowane kolory, `RRGGBB` lub `RRGGBBAA`, `#` opcjonalne. Kolejność jest istotna: indeks 0 to pierwszy sektor / pierwszy punkt. |
| `online_color_type` | `string` | Instrukcja renderowania: `mono`, `multi`, `gradient`, `conic_gradient`. Każda inna wartość lub jej brak jest traktowana jak `multi`. |

Gdy obecne są obie warstwy, **wygrywa katalog** — to dokładniejszy opis tego samego produktu.

---

## Drabina decyzyjna

Oceniaj **w tej kolejności, pierwsze dopasowanie wygrywa**. Kolejność koduje
priorytet: katalog przebija chip, jawny typ koloru przebija zgadywanie, a aspekt
zabiera głos tylko wtedy, gdy nie ma listy kolorów online.

Niech `LIST` = `online_color_list` po [normalizacji](#normalizacja), `TYPE` =
`online_color_type`, `SLOTS` = niepuste sloty chipa.

| # | Warunek | Wynik |
|---|---|---|
| 1 | `LIST ≥ 2` i `TYPE == "conic_gradient"` | Gładkie przemiatanie stożkowe, zamykające się na pierwszym kolorze |
| 2 | `LIST ≥ 2` i `TYPE == "gradient"` | Gradient — nawet przy dwóch lub trzech kolorach; katalog zażądał gładkiego gradientu, więc nie staje się miękkim podziałem |
| 3 | `LIST ≥ 3`, aspekt **Tricolor**, nie **Rainbow** | **Przemiatanie stożkowe** z `LIST` |
| 3b | `LIST ≥ 2` | **Miękki podział** z `LIST` przy 2 lub 3 kolorach, **camembert** z `LIST.length` sektorów przy 4 lub więcej |
| 4 | `LIST == 1` | Kolor jednolity — **przebija kolor z chipa** |
| 5 | aspekt **Rainbow** *i* **Tricolor** | Gradient, 3 punkty |
| 6 | aspekt **Rainbow** *i* **Bicolor** | Gradient, 2 punkty |
| 7 | aspekt **Rainbow** | Gradient po `SLOTS`; 1 slot → jednolity; 0 slotów → domyślne 6 kolorów |
| 8 | aspekt **Tricolor** | **Przemiatanie stożkowe** po `SLOTS` (brak slotu 3 → 2-kolorowy miękki podział po slotach 1 i 2, nie powtarza slotu 1) |
| 9 | aspekt **Bicolor** | **Miękki podział**, 135°, po slotach 1 i 2 |
| 10 | w przeciwnym razie | Jednolity slot 1; nic → `#1c2030` |

Wartości domyślne, gdy aspekt nie niesie użytecznego koloru:

| Przypadek | Wartości domyślne |
|---|---|
| Rainbow, brak kolorów | `#ff0000 #ff8800 #ffff00 #00cc00 #0000ff #8b00ff` |
| Rainbow + Tricolor | `#ff4d4d #ffd93d #4da3ff` |
| Rainbow + Bicolor | `#ff7a00 #8a2be2` |
| Tricolor | `#cccccc #888888` (brak slotu 3 → 2-kolorowy miękki podział, slot 1 nie jest powtarzany) |
| Bicolor | `#cccccc #ffffff` |
| Nic | `#1c2030` |

---

## Normalizacja

Stosowana do każdego wpisu `online_color_list` przed oceną drabiny:

1. Przytnij białe znaki, usuń początkowe `#`.
2. Jeśli 8 znaków (`RRGGBBAA`), **zachowaj pierwsze 6** — alfa jest odrzucana,
 nigdy nie jest mieszana.
3. Akceptuj tylko `^[0-9a-fA-F]{6}$`. **Wszystko inne jest usuwane z listy**,
 a nie zastępowane domyślną — źle sformatowany wpis nigdy nie może po cichu
 stać się czernią.
4. Dodaj z powrotem `#` na wyjściu.

Usuwanie następuje *przed* uruchomieniem drabiny, więc `["ff0000", "oops"]` to
lista **jednokolorowa** (reguła 4), a nie dwusektorowe koło.

Sloty chipa są konwertowane na `#` + dwie cyfry szesnastkowe na składową, tylko
gdy wszystkie trzy składowe są liczbami.

---

## Dokładne wyrażenia

Przy `c1…cN` jako znormalizowanych kolorach, `step = 360 / N`, `seg = 100 / N` i
`SPLIT_BLEND = 20`:

```css
/* Soft split — 2 or 3 hard colours: rule 3 with 2-3 colours, rules 8-9.
   Each colour solid over its band, a 20 % blended seam at each boundary. */
linear-gradient(135deg, c1 0% 40%, c2 60% 100%)                        /* N = 2 */
linear-gradient(135deg, c1 0% 23.33%, c2 43.33% 56.67%, c3 76.67% 100%) /* N = 3 */

/* Ramp — rainbow and a declared gradient: rules 2, 5-7 */
linear-gradient(135deg, c1, c2, …)

/* Camembert — four or more hard colours: rule 3 with ≥ 4 colours */
conic-gradient(c1 0deg <step>deg, c2 <step>deg <2·step>deg, …)

/* Catalogue-declared conic gradient — rule 1 (first colour repeated to close) */
conic-gradient(from 0deg, c1, c2, …, c1)

/* Mono — rules 4, 10 */
# RRGGBB
```

### Wektory testowe

Każda implementacja musi je odtworzyć dokładnie.

| Wejście | Oczekiwany wynik |
|---|---|
| `{online_color_list:["FF5722"]}` | `#FF5722` |
| `{online_color_list:["000000FF"]}` | `#000000` |
| `{online_color_list:["e02424","2463e0"]}` | `linear-gradient(135deg, #e02424 0% 40%, #2463e0 60% 100%)` |
| `{online_color_list:["e02424","2463e0","22a06b"]}` | `linear-gradient(135deg, #e02424 0% 23.33%, #2463e0 43.33% 56.67%, #22a06b 76.67% 100%)` |
| `{online_color_list:["e02424","2463e0","22a06b","f0a020"]}` | `conic-gradient(#e02424 0deg 90deg, #2463e0 90deg 180deg, #22a06b 180deg 270deg, #f0a020 270deg 360deg)` |
| `{online_color_list:["e02424","2463e0"],online_color_type:"gradient"}` | `linear-gradient(135deg, #e02424, #2463e0)` |
| `{color_r:224,color_g:36,color_b:36,color_r2:36,color_g2:99,color_b2:224,id_aspect2:252}` | `linear-gradient(135deg, #e02424 0% 40%, #2463e0 60% 100%)` |
| `{id_aspect1:145}` | `linear-gradient(135deg, #ff0000, #ff8800, #ffff00, #00cc00, #0000ff, #8b00ff)` |
| `{}` | `#1c2030` |

---

## Znak wodny TigerTag

Każda powierzchnia, która maluje kolor materiału **bez** zdjęcia produktu, nosi
na wierzchu logo TigerTag jako znak wodny.

| Reguła | Wartość |
|---|---|
| Pozycja | Prawy górny róg kafelka |
| Nieprzezroczystość | **1** — zawsze, na każdej powierzchni |
| Rozmiar | **Procent** kafelka, nigdy stały rozmiar w pikselach, aby skalował się z powierzchnią |
| Wariant | **Ciemne tło → zwykłe BIAŁE logo. Jasne tło → logo CZARNE z konturem.** |

Te dwa pliki logo **nie są wariantami do barwienia jeden z drugiego** — każdy
ma własne, wbudowane wypełnienie, a reguła dotyczy tego, którego *pliku* użyć.
Nigdy nie stosuj filtra CSS, koloru maski ani nieprzezroczystości, aby jeden
zastępował drugi: grafika z konturem to inny rysunek, a nie odwrócone białe.

**Wybór wariantu** — weź luminancję względną **pierwszego koloru** wytworzonego
wyrażenia:

```
luminance = (0.299·R + 0.587·G + 0.114·B) / 255   // dark when < 0.5
```

Jeśli wyodrębniasz ten kolor, dopasowując pierwszy szesnastkowy `#` w ciągu CSS,
dopasowuj **najpierw 8 cyfr**, potem 6, 4 i 3. W przeciwnym razie `#RRGGBBAA`
dopasuje się do pierwszych sześciu cyfr, nie przejdzie granicy słowa, która po
nich następuje, i całe dopasowanie przepadnie — co odczyta się jako „jasny” i
postawi czarne logo na czarnej szpuli. Odrzuć alfę i rozwiń skróty przed obliczeniem.

---

## Platformy inne niż CSS

Flutter, SwiftUI, Android czy dowolny renderer canvas implementuje te same trzy
kształty. Kąty są zawsze mierzone na sposób CSS: **0° wskazuje w górę, kąty
rosną zgodnie z ruchem wskazówek zegara.**

- **Camembert** — gradient przemiatający wyśrodkowany na kafelku, zaczynający się
 o godzinie 12, zgodnie z ruchem wskazówek zegara, z ostrymi punktami co
 `k · 360/N` stopni. Flutter:
 `SweepGradient` z `transform: GradientRotation(-pi/2)`. Nie przybliżaj go
 wycinkami koła rysowanymi jako ścieżki, chyba że kafelek jest kwadratowy —
 granice sektorów muszą podążać za pudełkiem. Tylko dla **czterech lub więcej**
 ostrych kolorów.
- **Miękki podział** — gradient liniowy od **lewego górnego** do **prawego
 dolnego** rogu z powyższymi punktami: każdy kolor trzymany jednolicie, 20 %
 szew wymieszany na każdej granicy. Używany dla **dwóch lub trzech** ostrych
 kolorów (dwukolorowy, trójkolorowy). Flutter: `LinearGradient(begin: Alignment.topLeft, end:
 Alignment.bottomRight)` z `colors` podwojonymi i `stops` `[0, .4, .6, 1]`
 (N = 2) lub `[0, .2333, .4333, .5667, .7667, 1]` (N = 3).
- **Gradient** — ta sama oś, równomiernie rozmieszczone punkty, bez przytrzymania.
 Używany dla Rainbow i dla zadeklarowanego w katalogu typu `gradient`. Flutter: `Alignment.topLeft →
 Alignment.bottomRight`.

---

## Zmiana konwencji

Ta strona jest źródłem. Zmiana tutaj to zmiana na każdej powierzchni TigerSystem:
najpierw popraw ją, podnieś wersję konwencji, a potem wyrównaj implementacje i
sprawdź je względem renderera referencyjnego.

---

**▲ [Spis dokumentacji](../../README.md)** · **Zobacz też:** [Chip TigerTag](../concepts/tigertag-chip.md), [Format `.ttag`](./ttag-format.md), [Przegląd dla deweloperów](./README.md)
