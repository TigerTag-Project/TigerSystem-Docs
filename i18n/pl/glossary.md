---
sourceHash: de1e41d015a6b6a290899b3e62d4bb3cb6a664370340d4ea6b4b25e3f149058e
sourcePath: docs/glossary.md
---

# Słownik

Każdy termin, którego ta dokumentacja używa bez wyjaśniania. Definicje są
zaczerpnięte ze stron podlinkowanych obok — każde hasło wskazuje stronę, która
opisuje całą historię.

> **Uwaga:** ten słownik jest **zalążkiem**. Obejmuje terminy, które już
> pojawiają się w tym repozytorium; jest celowo niekompletny, a hasła
> dodaje się dopiero wtedy, gdy gdzieś w dokumentacji istnieje ich treść.
> Brakuje terminu? Dodaj go z linkiem do strony, która go definiuje.

## Własne słownictwo ekosystemu

| Termin | Znaczenie |
|---|---|
| **TigerSystem** | Cały otwarty ekosystem: format chipa, dane referencyjne, aplikacje, sprzęt i powierzchnia chmurowa. Zob. [Dlaczego powstał TigerSystem](./vision/why-tigersystem.md). |
| **TigerTag** | Standardowy chip NFC NTAG z otwartym, 144-bajtowym ładunkiem TigerTag — tożsamością szpuli, czytelną dla czegokolwiek. Zob. [TigerTag](./products/tigertag.md). |
| **TigerTag+** | TigerTag, którego tożsamość niesie **identyfikator produktu z oficjalnego katalogu**, plus opcjonalne dane wzbogacające udostępniane przez metadane Web API. Chip nadal da się w 100 % odczytać offline. Znak `+` oznacza *zidentyfikowany*, a nie *certyfikowany*. Zob. [TigerTag+](./products/tigertag-plus.md). |
| **TigerTag+ Certified** | TigerTag+, który niesie także kryptograficzny **podpis**, zapisany przez producenta posiadającego certyfikację i jej narzędzia podpisujące. Weryfikacja jest darmowa i offline; wystawianie to przywilej certyfikacji. |
| **TigerData** | Ta sama tożsamość bez żadnego chipa: dane protokołu w czysto cyfrowej postaci, bez UID, z możliwością awansu do prawdziwego chipa w dowolnej chwili. Zob. [Jedna tożsamość, trzy stany](./concepts/universal-filament-identity.md). |
| **TigerData+** | Szpula bez chipa, która niesie prawdziwy produkt z oficjalnego katalogu — dokładną markę, kolor, materiał, temperatury, średnicę, SKU i EAN — zamiast wartości wpisanych ręcznie. Znak `+` oznacza *zidentyfikowany*, a nie *certyfikowany*. |
| **Official** | Wykonane przez sam TigerSystem — chipy w obu formatach oraz aplikacje i sprzęt w [Produktach](./products/README.md). Oświadczenie o pochodzeniu, a nie przyznawany znak: TigerSystem sam siebie nie certyfikuje. |
| **TigerTag Compatible** | Poziom darmowy: wszystko, co *komunikuje się z* chipami TigerTag — czytniki, aplikacje, drukarki, slicery, narzędzia. Nie potrzeba pozwolenia, by to zaimplementować, tak powiedzieć ani pokazać logo w aplikacji, dokumentacji czy ofercie sklepu. Obejmuje także **TigerTag+**: weryfikacja podpisu jest darmowa, offline i bez ograniczeń. Jedno słowo, którego nigdy nie obejmuje, to *certyfikowany*. |
| **TigerTag Certified** | Poziom audytowany, otwarty dla wszystkiego, co zbuduje osoba trzecia — urządzenia, aplikacji, filamentu, inlaya, nośnika — po przejściu audytu względem wymagań. Przyznawany, a nie deklarowany, wpisany do rejestru certyfikowanych i możliwy do wycofania. Występuje w dwóch zakresach: **TigerTag Certified** i **TigerTag+ Certified**. Certyfikowani partnerzy mogą umieszczać znak **na produkcie** i wystawiać podpisy TigerTag+. Zob. [Dokumentacja dla deweloperów](./developers/README.md) i [kryteria certyfikacji](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). |
| **Tiger NFC Connect** | Aplikacja mobilna (iOS/Android) — dotknij, by odczytać, dotknij, by zapisać, przeglądaj katalog. Dawniej „TigerTag RFID Connect”. Zob. [Tiger NFC Connect](./products/tigertag-connect.md). |
| **Tiger Studio** | Otwartoźródłowa aplikacja desktopowa (Windows/macOS/Linux) — magazyn, regały, czujniki i połączenia z drukarkami. Zob. [Tiger Studio](./products/tiger-studio.md). |
| **TigerHub** | Webowy dom ekosystemu pod adresem `tigersystem.io` — wizytówka, listy życzeń, kody znajomych, publiczne udostępnianie list. Zob. [TigerHub](./products/tigerhub.md). |
| **TigerPOD** | Drukowany w 3D stojak na dwa czytniki NFC — darmowy plik STL. Zob. [TigerPOD](./products/tigerpod.md). |
| **TigerScale** | Otwartoźródłowa waga do filamentu na ESP32, która odpowiada na pytanie „ile zostało?”. Zob. [TigerScale](./products/tigerscale.md). |
| **TigerSpool** | Skrzynka obok drukarki, która po zetknięciu zapisuje tożsamość szpuli do slotu drukarki — bez aplikacji, bez klawiatury, dowolna marka. Zob. [TigerSpool](./products/tigerspool.md). |
| **TigerTag Factory / Manager** | Przemysłowy, produkcyjny zestaw narzędzi programujący chipy na liniach produkcyjnych filamentu oraz narzędzia do kuratorowania bazy filamentów. Niepubliczny. Zob. [Zestaw fabryczny](./products/factory-suite.md). |
| **Carrier** | Pasek niosący dwa chipy szpuli — po jednym na każdym zgiętym końcu, przyklejony do tekturowego rdzenia przemysłowym klejem 3M. Używany na linii fabrycznej, sprzedawany osobno do refilli oraz publiczny i możliwy do wydrukowania w domu. Zob. [Chip TigerTag](./concepts/tigertag-chip.md). |
| **Masterspool** | Wielokrotnego użytku rolka, na której montuje się refill bez szpuli. Chip refilla trafia do wnętrza tekturowego rdzenia, więc zostaje z filamentem, a nie z rolką. |
| **Twin Tag** | Dwa chipy jednej szpuli, zapisane razem jako para i identyczne przez całe życie szpuli — zawsze liczone jako **jedna** szpula. |
| **Reference database** | Wspólne tabele identyfikatorów (marki, materiały, aspekty, typy, średnice, jednostki) udostępniane z `cdn.tigertag.io`, dzięki czemu chip zakodowany jednym narzędziem odczytuje się tak samo w każdym innym. Zob. [Uniwersalna tożsamość filamentu](./concepts/universal-filament-identity.md). |
| **Aspect** | Pole bazy referencyjnej opisujące kolor i wykończenie filamentu; z niego malowany jest [próbnik materiału](./developers/material-swatch.md). |
| **Material swatch** | Normatywna konwencja zamiany *danych* o kolorze szpuli w ten sam *obraz* na każdej powierzchni — trzy kształty (miękki podział 135° dla 2–3 kolorów ostrych, camembert dla 4+, rampa 135° dla kolorów płynnych), z renderem referencyjnym do sprawdzania implementacji. Zob. [Próbnik materiału](./developers/material-swatch.md). |
| **Plik `.ttag`** | Przenośny plik wymiany offline niosący jeden lub więcej materiałów magazynu (TigerData, TigerData+, TigerTag lub TigerTag+) między narzędziami. Zob. [format `.ttag`](./developers/ttag-format.md). |
| **Second life** | Ponowne zakodowanie chipa dla napełnionej lub zagospodarowanej inaczej szpuli albo przekształcenie go w zwykłe NDEF do dowolnego innego zastosowania NFC — chip nigdy nie powinien stać się elektrośmieciem. Zob. [Second Life](./philosophy/second-life.md). |
| **Smartphone bridge** | Użycie telefonu (lub czytnika desktopowego) do identyfikacji szpuli dla drukarki, która nie ma własnego czytnika RFID. Zob. [Most ze smartfonem](./philosophy/smartphone-bridge.md). |
| **Printer link** | Tiger Studio rozmawiający z maszyną przez LAN — telemetria, sloty filamentu, zadanie, kamera. Co innego niż odczyt własnych tagów danego producenta. Zob. [Zgodność](./compatibility/README.md). |
| **Refill** | Zwój filamentu sprzedawany bez rolki, do zamontowania na szpuli, którą już masz. |

## NFC i RFID

| Termin | Znaczenie |
|---|---|
| **NFC** | Near-Field Communication — krótkozasięgowa łączność radiowa, której może użyć każdy nowoczesny smartfon do odczytu TigerTag. |
| **RFID** | Radio-Frequency Identification, szersza rodzina, do której należy NFC. Używane tu zarówno dla zablokowanych tagów szpul producentów, jak i dla TigerTag. |
| **NTAG213 / 215 / 216** | Rodzina chipów NXP używana przez TigerTag (NFC Forum Type 2). Ładunek jest dobrany tak, by zmieścić się w najmniejszym, NTAG213; oficjalne markowe chipy to NTAG215, aby zostawić zapas pamięci na ponowne użycie. Zob. [Chip TigerTag](./concepts/tigertag-chip.md). |
| **NDEF** | NFC Data Exchange Format — standardowy kontener, w którym przechowywany jest ładunek TigerTag, dlatego odczyta go każde narzędzie NFC i dlatego chip pustej szpuli można zamienić w zwykły obiekt NFC. |
| **UID** | Unikalny identyfikator sprzętowy chipa, nadawany przy produkcji i niemożliwy do przepisania. Związana z nim jest kopia zapasowa chipa, a także podpis TigerTag+ Certified. |
| **Mifare Classic / Mifare Ultralight** | Rodziny chipów, których producenci drukarek używają do własnych tagów szpul — udokumentowane dla każdego producenta w [macierzy zgodności](./compatibility/README.md). |
| **ACR122U** | Klasa powszechnie dostępnych czytników NFC USB używanych do odczytu i zapisu chipów z komputera; [TigerPOD](./products/tigerpod.md) to stojak zbudowany wokół jednego z nich. |
| **PN532 / RC522** | Tanie moduły czytników NFC, zwykle łączone z ESP32, do własnoręcznych czytników — podejście, którego używa [TigerScale](./products/tigerscale.md). |
| **ECDSA** | Schemat podpisu, który sprawdza opcjonalny dodatek `verify` SDK Pythona — mechanizm stojący za podpisem pochodzenia TigerTag+. Zob. [SDK](./developers/sdks.md). |
| **OpenSpool** | Niezależny otwarty standard tagów NFC dla szpul (NFC Type 2, NDEF JSON, odblokowany). Zob. [OpenSpool](./compatibility/openspool.md). |
| **OpenRFID** | Społecznościowy, wielodostawcowy zestaw narzędzi RFID, z którego wywodzą się karty dekodowania poszczególnych producentów i który odczytuje TigerTagi. Zob. [Integracje zewnętrzne](./developers/integrations.md). |

## Drukarki i sprzęt

| Termin | Znaczenie |
|---|---|
| **AMS** | Automatic Material System firmy Bambu Lab — podajnik wielu szpul. Istotny tutaj, bo zwykle dzieli jeden czytnik RFID między dwa sloty, dlatego szpula niesie dwa chipy. |
| **CFS** | Filament System firmy Creality — jej jednostka wielomateriałowa. |
| **ACE** | Jednostka wielomateriałowa firmy Anycubic. |
| **Canvas** | Jednostka wielomateriałowa firmy Elegoo. |
| **IFS** | System wielofilamentowy FlashForge — pole w jego protokole nadal nazywa się `matlStation`. |
| **MMU** | Multi-Material Unit — ogólna nazwa dodatku podającego kilka filamentów do jednej drukarki (ERCF, MMU2, Box Turtle… w świecie Klippera). Zob. [Klipper](./compatibility/klipper.md). |
| **Klipper / Moonraker** | Otwarty firmware drukarek i jego API — WebSocket Moonrakera to transport, którego już używa połączenie Snapmakera, i kolejny naturalny dla maszyn z Klipperem. Zob. [Klipper](./compatibility/klipper.md). |
| **HID Scale** | Standardowy protokół USB dla wag (seria DYMO M i zgodne), odczytywany natywnie przez Tiger Studio jako zewnętrzna alternatywa dla TigerScale. |
| **TD / TD-1 / TD1s** | **Transmission Distance** — ile światła przepuszcza filament, wartość, na której opierają się HueForge i druk pełnospektralny — oraz analizator [AJAX-3D](https://ajax-3d.com), który ją mierzy, w wariancie DIY (TD-1) i gotowym (TD1s). Zmierzoną wartość TD można zapisać w samym protokole TigerTag. Zob. [Sprzęt firm trzecich](./compatibility/third-party-hardware.md). |
| **ESP32** | Powszechnie dostępny mikrokontroler stojący za TigerScale i większością własnoręcznych czytników TigerTag. |

## Chmura i dane

| Termin | Znaczenie |
|---|---|
| **Firebase / Firestore** | Zwykła usługa Google hostująca konta i magazyny — jedna wspólna baza danych, którą czytają i zapisują wszystkie aplikacje, z egzekwowaniem w regułach bezpieczeństwa po stronie serwera. Zob. [Magazyn i synchronizacja z chmurą](./concepts/inventory-and-cloud-sync.md). |
| **`cdn.tigertag.io`** | Miejsce, z którego udostępniana jest wspólna baza referencyjna. |
| **Friend code / list link** | Dwa sposoby udostępniania magazynu — zaakceptowany znajomy albo publiczny link tylko do odczytu, który każdy otwiera w przeglądarce, bez aplikacji i konta. Zob. [TigerHub](./products/tigerhub.md). |
| **SKU / EAN** | Kod produktu producenta i numer jego kodu kreskowego — to, co niesie TigerData+, by dokładnie wskazać, jakim produktem katalogowym jest szpula. |

---

**▲ [Spis dokumentacji](../README.md)** · **Zobacz też:** [FAQ](./faq/README.md), [Chip TigerTag (format RFID/NFC)](./concepts/tigertag-chip.md), [Uniwersalna tożsamość filamentu](./concepts/universal-filament-identity.md)
