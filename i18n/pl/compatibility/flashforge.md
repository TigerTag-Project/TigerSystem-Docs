---
sourceHash: 0da2b619f681b73709bf69f7a267703c5e222bb752d614aa97a95027294187e1
sourcePath: docs/compatibility/flashforge.md
---

# FlashForge

## Połączenie z drukarką — **działa**

| Aspekt | Szczegóły |
|---|---|
| Protokół | Odpytywanie HTTP (port 8898) + kody M przez TCP (port 8899) |
| Wykrywanie | Multicast UDP (225.0.0.9:19000) |
| Filament | IFS — wielofilamentowy system FlashForge |
| Kamera | Strumień MJPEG |
| Telemetria | Temperatury, postęp zadania |

## Natywny RFID — brak: maszyny nie mają czytnika

Drukarki FlashForge są dostarczane **bez żadnego czytnika RFID** i bez własnego
formatu RFID. To czyni je najwyraźniejszą demonstracją przewagi TigerSystem:
**dzięki czytnikowi NFC, który użytkownik już ma w smartfonie, sprawiliśmy, że
maszyny FlashForge potrafią pracować z filamentem identyfikowanym przez NFC.**
Zupełnie nowa funkcja, dodana do cudzej drukarki, **całkowicie za darmo, bez
kosztów dla użytkownika i bez żadnej modyfikacji maszyny.**

## FlashForge × TigerSystem — oficjalny firmware

Własny zespół inżynierów FlashForge przygotował firmware dla **Creator 5** i
**Creator 5 Pro**, który uruchamia **FlashForge Cloud i LAN jednocześnie**.

To ważniejsze, niż się wydaje. Firmware fabryczny każe wybierać: włączysz Cloud,
a lokalne narzędzia nie dosięgną już drukarki. Ten wybór był jedyną rzeczą
dzielącą właściciela FlashForge od tego ekosystemu — i już go nie ma. To
**oficjalny firmware FlashForge**, nie społecznościowy fork i nie łatka —
stworzony z TigerTag na potrzeby tej integracji i opublikowany tutaj za ich zgodą.

<div class="ts-model-picker">
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/"><img src="../assets/flashforge-connection-tutorial/models/creator-5.png" alt="FlashForge Creator 5" /><span>Creator 5</span></a>
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/"><img src="../assets/flashforge-connection-tutorial/models/creator-5-pro.png" alt="FlashForge Creator 5 Pro" /><span>Creator 5 Pro</span></a>
</div>

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/">Pobierz — Creator 5</a>
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/">Pobierz — Creator 5 Pro</a>
<a href="https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud"><img src="../assets/icons/github.svg" alt="" /> Kod źródłowy i instrukcja instalacji</a>
</div>

Instaluje się z pendrive'a USB. Za darmo dla każdego, ze sprzętem TigerTag lub bez.

### Połączenie po wgraniu firmware'u

Włącz **tryb LAN** w ustawieniach drukarki — to cała zmiana, którą udostępnia
firmware. Tiger Studio znajdzie ją wtedy przez **automatyczne wykrywanie** albo
dodasz ją ręcznie po **adresie IP**. Nie trzeba już wybierać między Cloud
a narzędziami lokalnymi: oba działają jednocześnie.

| | Firmware fabryczny | Z tym firmware'em |
|---|:---:|:---:|
| FlashForge Cloud — aplikacja, dostęp zdalny | ✅ | ✅ |
| Dostęp LAN — lokalne narzędzia w twojej sieci | ✅ | ✅ |
| **Oba naraz** | ❌ | ✅ |
| Tiger Studio, Tiger NFC Connect i TigerSpool **przy włączonym Cloud** | ❌ | ✅ |

### Z niczego nie rezygnujesz

Właściciel zachowuje wszystkie funkcje FlashForge Cloud i zyskuje do tego cały
ekosystem: darmowego, otwartoźródłowego **menedżera filamentu i drukarek** na
desktopie, **telefon, który odczytuje i zapisuje szpule**, oraz
**[TigerSpool](../products/tigerspool.md)** — otwartoźródłowe pudełko z
czytnikiem, stojące obok maszyn, które trzyma na liście **do 24 drukarek**,
dziesięć z nich połączonych jednocześnie — jedno pudełko na całą półkę.

Drukarka bez czytnika i bez własnego formatu odczytuje więc teraz chip
filamentu dowolnej marki używającej TigerTag — a także szpul, które
producenci oznaczają sami w domu, na filamencie, który nigdy nie wyszedł z
fabryki z chipem.

Producent drukarek otwierający swoją maszynę na ekosystem, którego nie jest
właścicielem, to rzadka decyzja. Korzysta na niej każdy, kto taką maszynę ma.

## Przebieg pracy

1. **Dodaj drukarkę** — znaleziona przez skan sieci (multicast UDP), gdzie
 wystarczy jej Printer ID, albo dodana ręcznie przez adres IP, numer seryjny
 i Printer ID.
2. **Zeskanuj szpulę** — telefonem (lub czytnikiem desktopowym); szpula trafia
 do twojego magazynu.
3. **Przypisz ją do slotu IFS** — **jedno skanowanie, jedno kliknięcie** w
 mapowaniu Tiger Studio. Drukarka poznaje swój filament równie precyzyjnie jak
 maszyna z wbudowanym RFID, w dowolnym modelu FlashForge, bez zmian
 sprzętowych i bez niczego dodawanego do maszyny.
4. **Na żywo** — temperatury, postęp zadania i strumień kamery MJPEG w widoku
 drukarek.

## Dodawanie drukarki

Tiger Studio potrzebuje trzech rzeczy, by rozmawiać z FlashForge: jej **adresu
IP**, **numeru seryjnego** i **hasła** — które sama drukarka nazywa **Printer
ID**. Jedna wartość, dwie nazwy: to, co ekran dotykowy pokazuje jako Printer ID,
wpisuje się w pole hasła w Tiger Studio.

Ile z tych trzech wartości wpisujesz, zależy od tego, jak drukarka zostaje znaleziona:

| Jak | Co wpisujesz |
|---|---|
| **Skan sieci** — Tiger Studio znajduje drukarkę w twojej sieci lokalnej | tylko **Printer ID**; skan dostarcza IP i numer seryjny |
| **Ręcznie** — skan jej nie znalazł | **adres IP + numer seryjny + Printer ID** |

Ścieżki przez chmurę nie ma, więc zawsze jest to jedna z tych dwóch. Wybierz
swój model, by zobaczyć, gdzie na ekranie dotykowym znajduje się każda wartość.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Poprzednia:** [Elegoo](./elegoo.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Anycubic](./anycubic.md)
