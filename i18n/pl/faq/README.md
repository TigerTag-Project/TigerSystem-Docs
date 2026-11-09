---
sourceHash: 6f876cd701e3692f8e9b66f35cfc032195693364d95193890da2415f8891c601
sourcePath: docs/faq/README.md
---

# FAQ

## Ogólne

**Czym jest TigerSystem?**
Otwartym ekosystemem druku 3D zbudowanym wokół jednej idei: tożsamość szpuli
filamentu należy do jej właściciela, a nie do marki drukarki. Zob.
[Dlaczego powstał TigerSystem](../vision/why-tigersystem.md).

**Czy muszę coś kupić, żeby zacząć?**
Nie — nawet chipa. Aplikacje są darmowe, czytnikiem jest każdy smartfon z NFC, a
szpula **TigerData** niesie pełną tożsamość bez niczego do czegokolwiek przyklejonego.
Chipy to wygoda, nigdy warunek wstępny:
[start za 0 $](../guides/start-for-free.md).

**Czy to jest związane z jedną marką filamentu lub drukarki?**
Nie — neutralność jest zasadą projektową. Dowolny filament, dowolna drukarka, żadnej listy partnerów.

**Czy te aplikacje to TEN produkt?**
Nie — strona **skierowana do użytkownika** jest celowo **piaskownicą**. Każda aplikacja i
urządzenie, które tworzymy dla użytkowników końcowych (Tiger Studio, Tiger NFC Connect, TigerScale,
TigerPOD i przyszłe projekty), jest działającym **dowodem koncepcji**: jego jedynym
celem jest pokazanie potencjału otwartego, standardowego, niezależnego od producenta,
wieloplatformowego protokołu i zainspirowanie innych do wyobrażenia sobie funkcji
jutra. Używaj ich, forkuj je albo zbuduj własne. **Strona
fabryczna** jest natomiast klasy produkcyjnej: przemysłowy zestaw narzędzi
programuje chipy z prędkością linii w fabrykach partnerów — ta część nie jest
żadnym eksperymentem. Zob. [Piaskownica z założenia](../vision/why-tigersystem.md).

**Dlaczego sami budujecie wszystkie te demonstratory?**
Bo nikt inny tego nie zrobił. Wyprodukowano ponad 2,5 miliona chipów TigerTag,
które są dostarczane w szpulach filamentu, a my zakładaliśmy, że społeczność
sama wymyśli zastosowania dla otwartej tożsamości NFC — nie wydarzyło się to. Budowanie
demonstratorów nigdy nie było celem początkowym; stało się konieczne, by pokazać, co
umożliwia protokół. Pełna historia:
[Historia stojąca za piaskownicą](../vision/why-tigersystem.md).

## TigerTag (chipy)

**Jakim chipem jest TigerTag?**
Standardowym chipem NFC NTAG niosącym otwarty, 144-bajtowy ładunek — markę, materiał,
kolor, średnicę, ustawienia druku. Bez kluczy, bez szyfrowania danych.
Zob. [Chip TigerTag](../concepts/tigertag-chip.md).

**Czy mogę przepisać chip?**
Tak — chipy są przepisywalne, na tym polega sens
[przepływu Second Life](../philosophy/second-life.md): napełnij ponownie lub zagospodaruj inaczej
szpulę i zakoduj jej chip na nowo.

**Czym jest TigerTag+?**
TigerTag, który wie dokładnie, *jakim produktem* jest. Zamiast wartości, które ktoś
wpisał, niesie **identyfikator produktu z oficjalnego katalogu** — marka, kolor,
materiał, temperatury, średnica, SKU, EAN — plus opcjonalne metadane wzbogacające,
które mogą się poprawiać po zapisaniu chipa. Chip pozostaje **w 100 % offline**:
wszystko, co potrzebne do druku, nadal jest na nim. Plus oznacza *zidentyfikowany*, a nie
*certyfikowany*.

**A TigerTag+ Certified?**
TigerTag+, który niesie także kryptograficzny **podpis**, zapisany przez
producenta posiadającego certyfikację i jej narzędzia podpisujące. Każdy może
**zweryfikować** podpis — za darmo, offline, na własnym telefonie — ale tylko
certyfikowany producent może go **wystawić**, więc sklonowany tag nie przechodzi sprawdzenia. Zob.
[TigerTag+](../products/tigertag-plus.md).

**Czy mogę zarchiwizować chip na swoim koncie?**
Tak, i jest to funkcja oddzielna od plusa. Tiger Studio może zapisać dokładną zawartość chipa,
powiązaną z jego fizycznym UID, i później przeprogramować go z powrotem — przydatne,
jeśli chip zostanie przepisany lub uszkodzony, i ważne **tylko na oryginalnym chipie**.
Posiadanie kopii zapasowej nie czyni chipa TigerTag+.

**Gdzie kupić chipy?**
Dwie równie dobre odpowiedzi. Oficjalne chipy z marką TigerTag są na
**[tigertag.io](https://tigertag.io)** i u oficjalnych dystrybutorów
(obecnie [Atome3D](https://atome3d.com), wkrótce dołączą kolejni) — ich kupno
pomaga wesprzeć prace badawczo-rozwojowe. Ale **każdy tani, pusty chip NTAG** z Amazonu,
AliExpress lub lokalnego sklepu działa tak samo, i jest to celowe:
nic nie jest blokowane, sednem jest protokół.

**Czy kupowane chipy przychodzą z danymi?**
Nie — **chipy sprzedawane osobno są dostarczane puste**, niezależnie od tego, czy mają logo
TigerTag. Tożsamość filamentu zapisujesz sam, w
[Tiger NFC Connect](../products/tigertag-connect.md) lub
[Tiger Studio](../products/tiger-studio.md); za pierwszym razem zajmuje to około minuty.
Chipy, które przychodzą **już zakodowane**, to te zintegrowane
w fabryce, wewnątrz filamentu marek partnerskich. Kupno chipa i
kupno oznaczonego filamentu to dwie różne rzeczy.

**Jaki kształt kupić — naklejkę czy nośnik do refilli?**
Dwa formaty, na dwie sytuacje. **Pojedyncza naklejka** idzie na dowolną
posiadaną już szpulę. **Wersja do refilli** jest przeznaczona dla
[refilli](../philosophy/second-life.md) bez szpuli: wkleja się ją do wnętrza **tekturowego
rdzenia**, zanim zamontujesz refill na rolce wielokrotnego użytku (masterspool), więc chip
podróżuje z filamentem, a nie z rolką — w tym samym miejscu, w którym umieszcza go
fabryka.

**Jaki dokładnie pusty chip kupić?**
Zalecany jest **NTAG213, 215 lub 216 — okrągły, 25 mm**. Protokół jest
celowo zoptymalizowany, by zmieścić się w małym NTAG213 (144 bajty); 215/216 działają
tak samo, z niewykorzystaną resztą miejsca. Inne kształty też działają, ale okrągły 25 mm
to format, wokół którego zaprojektowano czytniki i uchwyty ekosystemu.

**Które marki filamentu dostarczają TigerTag z fabryki?**
Wyprodukowano ponad 2,5 miliona chipów — co czyni TigerTag **najbardziej
rozpowszechnionym protokołem RFID firm trzecich na świecie**; większość jest zintegrowana w
fabryce przez marki filamentu z zewnątrz — Rosa3D, eSun, Sunlu, Landu,
Jamg He, R3D — a Filforme, Nanovia i kolejne są w trakcie integracji.

**Jak chip trafia na szpulę?**
Przykleja się — i są **dwa na szpuli, po przeciwnych stronach**. To
celowe: drukarki często dzielą jeden czytnik RFID między dwa sloty, więc chip
musi być zwrócony do czytnika, z której strony by szpula nie leżała; można
skanować ręcznie bez odwracania szpuli; można ją zeskanować bez wyciągania ze
slotu; a jeśli jeden chip zawiedzie, drugi nadal odpowiada. Bonus: każda pusta szpula
daje dwa chipy do ponownego użycia.
Zob. [dlaczego dwa chipy](../concepts/tigertag-chip.md).

**Czy potrzebuję internetu, żeby odczytać chip?**
Nie. Ładunek chipa jest kompletny i samowystarczalny: telefon w trybie samolotowym,
komputer offline — szpula nadal się przedstawia.

**Wolę inny protokół NFC (OpenSpool, własny…) — czy utknąłem z
TigerTag?**
Nie. Chipy **nigdy nie są zablokowane przed zapisem**: TigerTag to po prostu bazowy protokół,
z którym szpule wychodzą z fabryki. Możesz swobodnie przepisać chip i
przenieść jego dane do dowolnego innego protokołu NFC/RFID, własnego lub istniejącego.

**Co się dzieje z chipem, gdy szpula jest pusta?**
Dostaje drugie życie — nigdy wysypisko. Zakoduj go na nowo dla kolejnej szpuli lub
zamień w standardowe NDEF i przekształć w cokolwiek NFC: brelok,
wizytówkę, podłączony przedmiot. Oficjalne markowe chipy przeszły na
**NTAG215** właśnie po to, by zostawić zapas pamięci na takie ponowne użycie: chip szpuli
nigdy nie powinien stać się elektrośmieciem. Zob.
[Second Life](../philosophy/second-life.md).

**Czy chip przetrwa ogrzewaną komorę lub suszarkę do filamentu?**
W normalnym użyciu nie zgłoszono z terenu żadnych awarii chipów — także
od użytkowników korzystających z suszarek do filamentu. Na korzyść chipa działają dwie rzeczy: nigdy
nie odczytuje się go na gorąco (skany odbywają się w temperaturze otoczenia, a nie
w trakcie druku wewnątrz komory), i jest to standardowy sprzęt NTAG — formalne
parametry temperaturowe znajdziesz w kartach katalogowych NXP NTAG213/215/216.

**Czym jest plik `.ttag`?**
Przenośną migawką offline jednej lub kilku twoich szpul — jednostką do
tworzenia kopii zapasowych, przenoszenia na pendrive i udostępniania twoich filamentów. Wyeksportuj jedną
szpulę lub cały wybór z Tiger Studio; zaimportuj z pełnym podglądem i
wyborem między *Przywróć* (to samo konto) a *Importuj* (przyjmij jako nowe
szpule). Pełna specyfikacja: [format `.ttag`](../developers/ttag-format.md).

**Czy mogę używać TigerSystem w ogóle bez chipów?**
Tak — to **TigerData**: te same dane protokołu w czysto cyfrowej postaci, bez
chipa, bez UID. Tożsamość żyje w twoim magazynie (lub gdziekolwiek cyfrowo) i
zachowuje się jak każda inna szpula. Zapisz ją później do chipa NFC — atomowo,
gdy będziesz gotowy — a stanie się TigerTag, z fizycznym UID wreszcie
z nią powiązanym. Zob.
[Jedna tożsamość, trzy stany](../concepts/universal-filament-identity.md).

## Tiger Studio (desktop)

**Jakie platformy?**
Windows, macOS i Linux (Electron). Pobrania na
[stronie wydań](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases).

**Czy potrzebuję czytnika NFC?**
Nie — aplikacja działa samodzielnie. Czytnik ACR122U (lub stojak
[TigerPOD](../products/tigerpod.md)) dodaje natychmiastową identyfikację szpul
i kodowanie chipów.

**Którymi drukarkami potrafi sterować?**
Na żywo sześć marek: Anycubic, Bambu Lab, Creality, Elegoo, FlashForge, Snapmaker —
zob. [macierz zgodności](../compatibility/README.md).

## Slicery i przebieg drukowania

**Czy muszę zmieniać slicer?**
Nie. Zostań przy OrcaSlicer, slicerze swojego producenta, czymkolwiek chcesz — TigerSystem
nie tnie i nie chce ciąć. Tniesz i uruchamiasz zadania dokładnie
tak jak dotąd. Zob. [gdzie mieści się slicer](../architecture/data-flow.md).

**Co więc TigerSystem dodaje do drukowania?**
Dwie rzeczy. Po pierwsze, informacje o filamencie po stronie maszyny zgadzają się z rzeczywistością: Tiger
Studio wysyła dane każdej szpuli do slotów drukarki (AMS, CFS, Canvas, ACE,
IFS). Po drugie, monitorowanie na żywo: niezależnie od tego, co uruchomiło wydruk,
zadanie pojawia się w Tiger Studio z postępem, temperaturami, zegarową godziną
zakończenia i kamerą — w całej twojej flocie, wszystkie marki wymieszane.

**Czy chip może automatycznie skonfigurować mój profil slicera?**
Nie dziś. Chip niesie zalecane ustawienia filamentu
(temperatury…); odwzorowujesz je w profilu slicera samodzielnie.

**Mam drukarki trzech różnych marek. Problem?**
Wręcz przeciwnie — o to właśnie chodzi. Jedna tabela drukarek dla całej floty, z filtrami
marki / stanu / tagów, niezależnie od mieszanki sześciu obsługiwanych marek.

## TigerHub (webowy dom ekosystemu)

**Czym jest TigerHub?**
Platformą webową pod adresem [tigersystem.io](https://tigersystem.io). Przedstawia
ekosystem TigerSystem — wizytówkę tego, co umożliwia otwarty protokół
— i hostuje społecznościową stronę piaskownicy, wszystko działające już dziś: twoje konto w
sieci, listy życzeń (publiczne i tylko dla znajomych), kody znajomych i zaproszenia,
publiczne udostępnianie list, a także katalog materiałów, przeglądarkę bazy referencyjnej,
modele 3D i więcej. Zob. [TigerHub](../products/tigerhub.md).

**Czy mogę pokazać swoją kolekcję komuś bez aplikacji?**
Tak — TigerHub udostępnia linki do list tylko do odczytu: każdy, kto ma link, otwiera go w
zwykłej przeglądarce, bez aplikacji i bez konta.

**Czy TigerHub to baza danych stojąca za aplikacjami?**
Nie. Konta i dane żyją w zwykłym **Firebase** — jednej wspólnej bazie, w jednym
miejscu, aby wszystkie elementy piaskownicy współpracowały. TigerHub to powierzchnia
webowa zbudowana na jej szczycie.

## Tiger NFC Connect (mobilna)

**Co robi aplikacja mobilna?**
Skanowanie NFC i programowanie chipów w terenie, przeglądanie katalogu oraz pełna
synchronizacja magazynu z tym samym kontem co aplikacja desktopowa.

**Gdzie ją pobrać?**
Jest wydana w **App Store** i **Google Play** jako **Tiger NFC
Connect** (dawniej „TigerTag RFID Connect”), z publicznymi betami na obu
platformach. Wszystkie linki:
[tigersystem.io/download](https://tigersystem.io/download).

## TigerScale i czujniki

**Czym jest TigerScale?**
Otwartoźródłową wagą na ESP32 do szpul filamentu. Połóż na niej szpulę, a jej masa na żywo
trafia prosto do twojego magazynu — widoczna natychmiast na desktopie,
telefonie i w widokach udostępnionych. Zob. [TigerScale](../products/tigerscale.md).

**Chwila — chip już wszystko wie, po co waga?**
Chip wie, czym filament **jest**; tylko waga wie, ile go **zostało**. To dwie
połowy naprawdę użytecznego magazynu: tożsamość z chipa, ilość na żywo z wagi.

**Czy potrzebuję TigerScale, żeby śledzić masę?**
Nie. Możesz ustawić lub skorygować masę szpuli ręcznie w aplikacjach w dowolnej chwili —
waga po prostu czyni to automatycznym, żywym i bezwysiłkowym. Tiger Studio odczytuje też standardowe
urządzenia **USB „HID Scale”** — serię DYMO M (M5, M10,
M25…) i każdą zgodną wagę — jako opcję firm trzecich
([szczegóły](../products/tigerscale.md)).

**Czy mogę zbudować własną?**
Tak — o to właśnie chodzi. Projekt sprzętu i firmware są w pełni otwarte (MIT) w
[repozytorium Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale).

**A masa pustej szpuli?**
Kalibracja pojemników w Tiger Studio pozwala zmierzyć rzeczywistą masę pustego pojemnika
raz; jest ona potem stosowana do każdej szpuli w tym pojemniku, więc liczba, którą
widzisz, to filament netto, a nie plastikowa rolka.

**Czym jest TD-1 / TD1s?**
Analizatorem filamentu firmy trzeciej od **[AJAX-3D](https://ajax-3d.com)**, w dwóch
wariantach, które oba działają z ekosystemem: **TD-1** (wersja DIY — zbuduj
go sam) i **TD1s** (gotowy, od razu do użycia). Jego
główne zadanie to pomiar **Transmission Distance** filamentu („TD” — ile
światła materiał przepuszcza), wartości, bez której nie mogą żyć użytkownicy HueForge / druku
pełnospektralnego; odczytuje też **kolor** (RGB, 1–3
sloty) — nieco mniej precyzyjnie, ale jako dobra wskazówka. Tiger Studio
integruje go natywnie przez USB, a **Tiger NFC Connect obsługuje go przez
USB-C** na urządzeniach mobilnych. Zmierzone TD można **zapisać w samym protokole
TigerTag** — na chipie NFC lub w formacie pliku `.ttag`. Akcesorium firmy trzeciej i
otwarty ekosystem współpracujące tak, jak to zaplanowano.

## Chmura i magazyn

**Gdzie jest przechowywany mój magazyn?**
Na twoim własnym koncie TigerSystem — zwykły Firebase (Firestore), jedna wspólna
baza danych używana przez wszystkie aplikacje. Każde urządzenie, na którym się
zalogujesz, widzi te same dane w czasie rzeczywistym. Zob.
[Magazyn i synchronizacja z chmurą](../concepts/inventory-and-cloud-sync.md).

**Czy działa offline?**
Chipy są w pełni czytelne offline; aplikacje utrzymują lokalną pamięć podręczną. Połączenia z drukarkami są
lokalne w LAN i w ogóle nie potrzebują internetu (poza trybem chmury Anycubic).

**Nie chcę ŻADNEJ chmury. Czy nadal mogę używać TigerTag?**
Tak, w 100 %. Ładunek chipa jest kompletny i samowystarczalny: odczytuj go,
zapisuj i zarządzaj w pełni lokalnym magazynem bez chmury, bez konta, bez
serwera — [SDK JS i Python](../developers/sdks.md) istnieją właśnie po to, by
to ułatwić w twoich własnych lub DIY projektach. Nawet **TigerTag+ uwierzytelnia się
lokalnie, bez połączenia z internetem**. Warstwa chmurowa jest opcjonalną
wygodą (synchronizacja między urządzeniami, udostępnianie), nigdy wymogiem — proponujemy jedną
wizję użytkownika TigerTag, a każda inna wizja jest akceptowana i
zachęcana.

**Nie wiem nic o NFC ani RFID — czy to dla mnie?**
Zwłaszcza dla ciebie. Całe doświadczenie jest zaprojektowane z myślą o nowicjuszach: dotknij
szpuli telefonem, sama się przedstawia, gotowe. Żargon nie jest potrzebny — warstwy
techniczne istnieją dla tych, którzy chcą zgłębiać, a nie jako warunek wstępny.

**Czy inni ludzie mogą zobaczyć moje szpule?**
Tylko jeśli tak wybierzesz: zaakceptowani znajomi, publiczny przełącznik lub link do udostępnienia w TigerHub.
Wszystko jest domyślnie prywatne i egzekwowane po stronie serwera.

**Co się stanie, jeśli chmura TigerTag kiedyś się wyłączy?**
Projektowa odpowiedź na ten lęk to otwartość: format chipa jest publiczny, chipy
odczytują się w pełni offline na zawsze, SDK i aplikacja desktopowa są open source,
a powierzchnia chmurowa jest udokumentowana. Twoich szpul nie da się „zablokować” przez serwer —
na tym właśnie polega różnica względem silosu producenta.

## RFID i zgodność

**Czy Tiger Studio potrafi odczytać natywne tagi Bambu/Creality/…?**
Jeszcze nie — właściwy sposób obsługi interoperacyjności to wciąż otwarte pytanie.
Specyfikacje dekodowania tylko do odczytu są udokumentowane dla siedmiu formatów producentów, a
trwające prace mają na celu **przekształcanie danych tagów producentów w cyfrowe szpule
TigerData**, aby filament innych marek dało się skanować i zarządzać nim w
ekosystemie. Zob. [zgodność](../compatibility/README.md).

**Dlaczego tagi producentów są zablokowane, a TigerTag nie?**
Zablokowane tagi służą uzależnieniu od dostawcy. Odpowiedzią TigerTag jest otwarcie czytelny
format — zob. [Skupiony na użytkowniku a skupiony na drukarce](../philosophy/user-centric-ecosystem.md).

**A drukarki żywiczne?**
Wkrótce: TigerTag jest rozszerzany na **żywice** — ta sama otwarta tożsamość na
pojemnikach z żywicą dla drukarek żywicznych 3D.

**Czy TigerTag działa z drukarką, która nie ma czytnika RFID?**
Tak — to [most ze smartfonem](../philosophy/smartphone-bridge.md): twój
telefon (lub czytnik desktopowy) identyfikuje szpulę, a system przekazuje dane
do drukarki.

## Rozwiązywanie problemów

**Mój chip nie skanuje się na telefonie.**
Sprawdź, czy NFC jest włączone, i znajdź optymalne miejsce anteny w telefonie; tagi najlepiej odczytują się
płasko przyłożone do niej. Jeśli chip odczytuje się w jednej aplikacji, a w innej nie, zaktualizuj aplikację.

**Moja drukarka nie pojawia się w Tiger Studio.**
Upewnij się, że drukarka jest w tej samej sieci LAN, w trybie LAN tam, gdzie to ma zastosowanie, potem spróbuj
„Add by IP” — metody wykrywania różnią się w zależności od marki.

> Prawdziwe przypadki mile widziane — zgłoś swój na
> [oficjalnym Discordzie](https://discord.gg/3Qv5TSqnJH) lub w issues na GitHubie; ta
> sekcja rośnie z nich.

## Deweloperzy

**Czy ktoś faktycznie zbudował coś na TigerTag?**
Tak — i niezależnie od nas:
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) (społecznościowy
wielodostawcowy zestaw narzędzi RFID) odczytuje TigerTagi;
[Spooly Tracker](https://spoolytracker.com/) (platforma magazynowa, web +
mobilna) identyfikuje szpule za pomocą TigerTagów; a
[rozszerzony firmware Snapmaker U1](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
czyni z U1 **pierwszą drukarkę, która odczytuje TigerTagi natywnie**. Zob.
[integracje firm trzecich](../developers/integrations.md).

**Czy mogę zbudować własną aplikację na TigerTag?**
Tak, bez pozwolenia: otwarta specyfikacja chipa, [SDK](../developers/sdks.md) (JS i
Python) oraz [udokumentowana powierzchnia konta](../developers/account-api.md) z
działającymi przykładami ESP32 / Home Assistant / Spoolman.

**Czy mogę podłączyć TigerTag do swojego ERP lub wewnętrznego oprogramowania magazynowego?**
Tak — to dokładnie ten rodzaj zastosowania, do którego zachęca otwarty protokół. Skan (telefon
z NFC lub czytnik USB ACR122U) daje tożsamość szpuli; co z nią zrobisz —
gospodarka magazynowa, śledzenie zadań, identyfikowalność, ponowne zamawianie, B+R — zależy od ciebie. Zob. [Co można zbudować?](../developers/README.md)

**Jakiego sprzętu potrzebuję, by odczytywać chipy we własnym projekcie?**
Dowolny smartfon z NFC, czytnik USB klasy ACR122U na komputerze — albo pełne
DIY: wystarczy prosty ESP32 z modułem czytnika PN532 lub RC522 (tak robi to
[TigerScale](../products/tigerscale.md)). Powszechnie dostępny, tani, bez
własnościowego sprzętu.

**Czy publiczna konfiguracja Firebase to dziura w bezpieczeństwie?**
Nie — to standardowy wzorzec Firebase. Całe egzekwowanie odbywa się po stronie serwera w regułach
bezpieczeństwa; klient może dotknąć tylko danych własnego użytkownika.

## Producenci

**Jesteśmy marką filamentu — jak wysyłać szpule oznaczone TigerTag?**
Szybko: linia produkcyjna może ruszyć z TigerTag w **nawet
5 dni**, bardzo tanio, z zapisem każdego chipa w **około
1 sekundę** — co potwierdza ponad 2,5 miliona chipów już dostarczonych przez
Rosa3D, eSun, Sunlu, Landu, Jamg He i R3D. A każda marka, która dołącza, wzmacnia zbiorowy argument
za tym, by producenci drukarek odczytywali TigerTag natywnie. Przeczytaj
[Dla producentów filamentu](../vision/for-filament-manufacturers.md), a potem
napisz na **[tigertag@tigertag.io](mailto:tigertag@tigertag.io)**.

**Czy mój produkt może zostać „TigerTag Certified”?**
Zależy, po której stronie jednej linii się znajduje — a większość produktów jest po
darmowej stronie.

Jeśli twój produkt **komunikuje się z** chipami TigerTag — czytnik, aplikacja, drukarka,
slicer, suszarka, narzędzie — jest **TigerTag Compatible**. Ten poziom jest darmowy,
samodzielnie deklarowany i nie wymaga audytu ani pozwolenia: zbuduj go, mów *„zgodny
z TigerTag”* (lub *„z TigerTag+”*, jeśli weryfikujesz podpisy) i pokazuj
logo w swoim interfejsie, dokumentacji i ofercie sklepu. Większość
produktów firm trzecich należy tutaj i nic w protokole nie jest przed nimi
ukrywane.

**TigerTag Certified** to drugi poziom i jest otwarty dla **wszystkiego, co zbuduje strona
trzecia** — urządzenia, aplikacji, filamentu, inlaya, nośnika — co
**przejdzie audyt** względem wymagań. Jest przyznawany, a nie deklarowany:
pisemna autoryzacja, wpis w rejestrze certyfikowanych i prawo do
umieszczenia znaku **na produkcie, chipie i opakowaniu**. Występuje w dwóch
zakresach, **TigerTag Certified** i **TigerTag+ Certified**, z których drugi obejmuje
produkty, których obsługa podpisanych tagów została zweryfikowana.

Różnica między poziomami nie polega na tym, czym twój produkt *jest* — lecz na tym, czy
ktoś go sprawdził. Compatible mówi *„to działa”*, na twoje słowo. Certified mówi
*„przetestowaliśmy to”*, na nasze, i może zostać wycofany. Pełne kryteria:
[CERTIFICATION.md](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). Napisz przez
[organizację GitHub](https://github.com/TigerTag-Project).

**Jesteśmy producentem drukarek — czy nasz firmware może odczytywać TigerTag?**
Tak — czytniki NTAG/NDEF to powszechnie dostępny sprzęt, specyfikacja ładunku jest publiczna
([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)),
a dodanie odczytu TigerTag do firmware zajmuje **mniej niż 3 dni**.

## Społeczność

**Gdzie zadawać pytania i uzyskać pomoc?**
Na oficjalnym **[Discordzie](https://discord.gg/3Qv5TSqnJH)** — pytania, pomoc,
opinie, pokazywanie własnych prac. W sprawie błędów i problemów technicznych działają też issues
w GitHubie każdego repozytorium.

**Jak mogę wnieść wkład?**
Dokumentacja: [CONTRIBUTING.md](../../CONTRIBUTING.md) tutaj. Kod: przewodnik
każdego repozytorium — zob. [mapa repozytoriów](../developers/repositories.md).

**Wszystko jest darmowe — jak wesprzeć projekt?**
Kup oficjalne chipy lub zestaw TigerPOD, gdy i tak miałeś kupować; noś
[czapkę lub polo](https://tigersystem.io/goodies); popraw stronę, przetłumacz
jedną, zbuduj coś zgodnego; i zapytaj swoją markę filamentu, dlaczego jej szpule
nie są oznaczone — to ostatnie zrobiło więcej niż wszystko pozostałe. Pełna lista,
łącznie z tym, co można bezpiecznie zignorować, jest na stronie
[Wesprzyj projekt](../support.md).

**Czy mogę zrobić fork całości i zbudować coś innego?**
Tak. Licencje MIT/CC, celowo możliwe do forkowania — tylko przestrzegaj
[zasad dotyczących znaku towarowego](../../TRADEMARK.md).

---

**◀ Poprzednia:** [API konta i integracje zewnętrzne](../developers/account-api.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Mapa drogowa](../roadmap/README.md)
