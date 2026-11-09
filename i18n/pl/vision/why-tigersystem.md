---
sourceHash: d37ed3c943f32aa40cbd7b6a72f2d0c9acccd892461d279223c8cdb49ca9ee47
sourcePath: docs/vision/why-tigersystem.md
---

# Dlaczego powstał TigerSystem

## Problem

Szpula filamentu to najczęściej dotykany przedmiot w druku 3D — i najmniej
inteligentny. Gdy zniknie etykieta, szpula nie powie ci:

- z jakiego jest materiału i jakiego koloru,
- jak należy ją drukować,
- ile filamentu zostało,
- gdzie leży na twojej półce,
- do kogo należy.

Producenci drukarek zaczęli to naprawiać tagami RFID — **ale każdy naprawia to
tylko w obrębie własnych murów.** Tag Bambu Lab nic nie znaczy dla drukarki
Creality; tag Anycubic nic nie znaczy dla nikogo innego. Dane
należą do ekosystemu producenta, a nie do osoby, która kupiła
filament.

## Odpowiedź

**TigerSystem** to otwarty ekosystem zbudowany wokół jednej idei:

> **Tożsamość szpuli należy do jej właściciela — a nie do marki drukarki.**

**Uczyniliśmy szpule filamentu inteligentnymi.** Wiedzą, czym są — i potrafią
powiedzieć to każdemu, bez żadnego tarcia. Ambicja: **stać się dla materiałów
do druku 3D tym, czym kod kreskowy stał się dla półki sklepowej.**

Każda szpula niesie chip NFC [TigerTag](../products/tigertag.md) z jej
pełnym profilem — marką, materiałem, kolorem, średnicą, ustawieniami druku. Każdy zgodny
czytnik — smartfon, czytnik biurkowy, drukarka — może go odczytać.
Jedna wspólna baza online ([zwykły Firebase](../concepts/inventory-and-cloud-sync.md))
utrzymuje konto właściciela, magazyn, historię i udostępnianie zsynchronizowane na każdym
urządzeniu.

## Co w praktyce znaczy „skupiony na użytkowniku”

| Ekosystem skupiony na drukarce | TigerSystem |
|---|---|
| Tag czytelny tylko dla drukarek jednej marki | Tag czytelny dla każdego urządzenia NFC |
| Format danych tajny lub zaszyfrowany | Format otwarty i udokumentowany |
| Magazyn żyje w aplikacji producenta | Magazyn żyje na **twoim** koncie |
| Działa tylko z filamentem producenta | Działa z **dowolną** marką filamentu |
| Umiera razem z chmurą producenta | Otwarte SDK, otwarta specyfikacja, do samodzielnego zbudowania |

## Historia stojąca za piaskownicą

Zaczęło się w **2023, tuż po Formnext**. Bambu Lab otworzył erę
własnościowych tagów szpul; w tym roku Creality i Anycubic poszły w jego ślady, każdy
wprowadzając drukarki z czytnikami RFID/NFC — i każdy z własnym zablokowanym,
własnościowym chipem. Uznaliśmy, że branża nie może się tak ułożyć: musiał
istnieć format **otwartoźródłowy, neutralny, wieloplatformowy i
skupiony na użytkowniku**. I nie mógł być manifestem — musiał być
**realną, bardziej zdolną alternatywą** wobec tego, co oferują producenci drukarek,
oddaną producentom filamentu z zewnątrz, aby ich szpule potrafiły *więcej* niż
własnościowe, a ich udział w rynku nie kurczył się wobec filamentu
uwiązanego do marki.

Wzięliśmy się więc do pracy — i pojechaliśmy do Chin. Przedstawiliśmy projekt producentom
drukarek — Bambu Lab (dr. Tao, jego CEO), Elegoo, Creality, Anycubic
oraz Biqu / BigTreeTech (spotykając także jego CEO) — a także
producentom filamentu i dostawcom sprzętu (eSun, R3D, Landu, Sunlu, Jamg He),
po tym, jak przedstawiliśmy go już Rosa3D w Europie. Przyjęcie było ciepłe.
Zaprojektowaliśmy protokół **bardziej zoptymalizowany i bardziej wszechstronny** niż
własnościowe — skupiony na użytkowniku, wielomarkowy, wieloplatformowy. Zbadaliśmy
procesy w fabrykach filamentu, by zrozumieć, jak programować chipy NFC w skali
przemysłowej, i zorganizowaliśmy produkcję chipów — własne etykiety, własne
nośniki, ogromne ilości — po koszcie na tyle niskim, by osiągnąć jeden niepodlegający negocjacjom cel:
**dodać technologię, nie dodając ani grosza do ceny szpuli dla
użytkownika końcowego.**

Do **września 2024** chipy były w produkcji masowej, a fabryki
były zaopatrywane — najpierw powstał cały ekosystem po stronie fabryki. W tamtym
momencie **nie było ani aplikacji mobilnej, ani desktopowej**; pojawiły się
później. Najpierw mobilna, bo nie wymaga kupowania niczego: czytnik jest
już w kieszeni każdego.

Ten wybór wziął się z pytania, które ciągle zadawaliśmy w Chinach: *„Gdzie są
czytniki RFID?”* Wszyscy odpowiadali: *„W Bambu Labach.”* A my mówiliśmy: fałsz.
W Bambu Lab czytniki są **w AMS, nie w drukarce** — szpuli firmy trzeciej
maszyna w ogóle nie potrafi wykryć. **Czytniki RFID są
w twoich kieszeniach.** W każdym telefonie, gotowe do użycia — choć nawet o tym nie wiesz.

Szczerze: zbudowanie tego wszystkiego samemu nigdy nie było początkowym planem. **Wyprodukowano
ponad 2,5 miliona chipów NFC TigerTag — co czyni TigerTag
najbardziej rozpowszechnionym protokołem RFID firm trzecich na świecie** — większość z nich
zintegrowana w fabryce przez marki filamentu z zewnątrz (Rosa3D, eSun,
Sunlu, Landu, Jamg He, R3D, Filforme, Lotactree, Smart3DPT, Nanovia — a
kolejne są w trakcie integracji), plus mniejszy udział
kupowany przez twórców do oznaczania szpul w domu. Naiwnie zakładaliśmy, że społeczność
sama wymyśli zastosowania: otwarta, udokumentowana tożsamość NFC na każdej
szpuli wydawała się oczywistym placem zabaw.

Tak się nie stało. Mimo skali wdrożenia żadna społeczność nie podjęła
tematu; nikt nie uznał za warte budowania integracji wokół protokołu.
Mieliśmy nadzieję, że zajmą się nim inni — nie zajęli się. Więc zrobiliśmy to sami, choć nie
był to nasz pierwotny cel: zaczęliśmy **sami wyobrażać sobie zastosowania**, by pokazać
potencjał **otwartoźródłowego protokołu NFC do identyfikacji materiałów
skupionego na użytkowniku, a nie na drukarce** — i pozostawić działające
przykłady dla tego, kto w końcu podejmie wątek.

I to się zaczyna dziać:
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) odczytuje TigerTagi,
[Spooly Tracker](https://spoolytracker.com/) oparł na nich swoją identyfikację szpul,
a [rozszerzony firmware społeczności](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
Snapmakera U1 odczytuje je **natywnie na samej drukarce**, tak jak
[COSMOS](https://github.com/OpenCentauri/cosmos) na Elegoo Centauri Carbon — zob.
[integracje firm trzecich](../developers/integrations.md).

## Piaskownica z założenia

**Strona skierowana do użytkownika** w TigerSystem jest celowo **piaskownicą**. Każda
aplikacja i urządzenie, które tworzymy dla użytkowników końcowych — Tiger Studio, Tiger NFC Connect,
TigerScale, TigerPOD i inne przyszłe projekty — nie ma innej ambicji niż
**pokazanie potencjału**: każde jest działającym **dowodem koncepcji** tego, co
**otwartoźródłowy, standardowy, niezależny od producenta, wieloplatformowy protokół** taki jak TigerTag
umożliwia, od weekendowego skryptu po pełny produkt. Każdy może czerpać
inspirację z naszej pracy integracyjnej i **wyobrażać sobie funkcje
jutra**. To przykłady do skopiowania, a nie platforma, do której trzeba dołączyć.

**Strona fabryczna nie jest piaskownicą.** Za 2,5 miliona chipów działa
zestaw klasy przemysłowej — [TigerTag Factory i
Manager](../products/factory-suite.md): zarządzanie bazą filamentów i
masowe programowanie NFC/RFID z prędkością linii, z podpisem fabrycznym potwierdzającym pochodzenie każdego
produktu — używany **w produkcji** przez partnerskie fabryki filamentu.
Piaskownica to showroom; linia produkcyjna nie jest eksperymentem.

## Neutralny z założenia

TigerTag nie opowiada się po żadnej stronie między markami filamentu, producentami drukarek ani dystrybutorami.
To nie ogrodzony ogród z listą partnerów — to **format, który każdy może odczytywać
i zapisywać**.

Ta neutralność rozciąga się na same chipy: większość użytkowników końcowych kupuje **tanie,
niemarkowe chipy NTAG** na Amazonie, AliExpress lub lokalnie — i to jest
celowo w porządku. Nic ich nie blokuje; protokół działa tak samo.
Oficjalne chipy z marką TigerTag pomagają wesprzeć prace badawczo-rozwojowe, ale nie są
wymagane: **protokół żyjący w domach i biurach użytkowników jest pierwszą
nagrodą.**

Nawet sam protokół nie jest narzucany: chipy są dostarczane **odblokowane**, więc użytkownik,
który woli inny format NFC/RFID — istniejący lub własny — może przepisać
chip i przeprowadzić migrację. TigerTag to bazowy format, z którym szpule przychodzą, a nie
format, do którego jesteś przywiązany. Nic w ekosystemie nie jest warunkiem wstępnym: przeczytaj specyfikację chipa,
weź SDK i zbuduj oprogramowanie lub biznes, który naprawdę chcesz stworzyć.

## Manifest

> *„Stworzone dla twórców. Otwarte dla wszystkich. Zrodzony ze społeczności TigerTag
> daje użytkownikom prawdziwe dane i pełną swobodę. W 100 % open source, łączy
> twój materiał, drukarki i marki w jednym uniwersalnym języku,
> dziś i jutro. Dołącz do ruchu. Połącz swój świat z TigerTag.”*
>
> — **Benoit Michaut**, CEO i założyciel · Wizja: **Tanie i wielokrotnego użytku**

---

**▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Ekosystem skupiony na użytkowniku, a nie na drukarce](../philosophy/user-centric-ecosystem.md) · **Ludzie, którzy za tym stoją:** [Zespół](./team.md)

**Zobacz też:** [Filozofia otwartego ekosystemu](../philosophy/open-ecosystem.md), [Uniwersalna tożsamość filamentu](../concepts/universal-filament-identity.md)
