---
sourceHash: f283703d11787d5928096fe85013ad132ac596d2e2898ee65ac2adbfbb60d0ef
sourcePath: docs/developers/integrations.md
---

# Zbudowane na TigerTag — integracje zewnętrzne

Sens otwartego protokołu polega na tym, co z nim zbudują *inni*. Już się to
dzieje — oto projekty, które zintegrowały TigerTag na własną rękę:

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)**
— społecznościowy zestaw narzędzi do RFID szpul wielu producentów. Odczytuje formaty
tagów wielu marek — a **TigerTag jest jednym z nich**: otwarty ładunek sprawił, że
dodanie go było proste.

## Snapmaker U1 Extended Firmware (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)**
— niezależny, społecznościowy firmware na licencji GPL-3.0 dla Snapmakera U1 (SSH,
strumieniowanie z kamery, metryki… i dobrodziejstwa RFID). **Dzięki niemu Snapmaker U1
odczytuje TigerTagi natywnie — jest więc pierwszą drukarką odczytującą TigerTag na samej
maszynie.** Dokładnie ta przyszłość, do której zmierza gra zbiorowa, nadeszła
wcześniej dzięki społeczności.

## COSMOS — firmware dla Elegoo Centauri Carbon (OpenCentauri)

**[github.com/OpenCentauri/cosmos](https://github.com/OpenCentauri/cosmos)**
— niezależny firmware społeczności na licencji GPL-3.0 dla Elegoo Centauri
Carbon (Linux mainline zbudowany w Yocto, Klipper / Kalico). Jego moduł RFID
Canvas obsługuje **czytnik NFC wbudowany w Canvas**, wielokolorową jednostkę
drukarki, i dekoduje chipy za pomocą OpenRFID: **Centauri Carbon odczytuje
TigerTagi własnym czytnikiem**, bez dodatkowego sprzętu.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** — platforma do zarządzania magazynem
filamentu (web, iOS/Android, Home Assistant, postprocessing OrcaSlicer,
możliwość samodzielnego hostowania). Identyfikacja szpul opiera się na TigerTag: „Oznacz
swoje szpule chipami NFC (TigerTagami) i zarządzaj magazynem jednym gestem.”
(Oryginał do zacytowania: *"Mark your spools with NFC chips (TigerTags) and manage your inventory with a simple gesture."*)
Produkt firmy trzeciej, z własną wizją — działający na otwartym
protokole, dokładnie tak, jak zamierzono.

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)**
· [stellio-app.com](https://stellio-app.com) — aplikacja desktopowa na licencji AGPL-3.0
(Python, Windows) zarządzająca lokalną biblioteką plików do druku 3D: podglądy,
wyszukiwanie semantyczne, przekazywanie do slicera, kolejka wydruków. Jej strona filamentowa odczytuje
**magazyn TigerTag**: zaloguj się lub pozwól jej przejąć istniejącą sesję Tiger Studio,
a twoje szpule TigerTag pojawią się w jej zasobach — **tylko do odczytu**, nigdy
nie zapisuje do twojego magazynu. Stąd filtruje bibliotekę do tego, co twoje
szpule faktycznie mogą wydrukować, i ostrzega, zanim filamentu zabraknie w trakcie wydruku.

---

Budujesz coś na TigerTag? Daj nam znać na
[Discordzie](https://discord.gg/3Qv5TSqnJH) lub przez
[organizację na GitHubie](https://github.com/TigerTag-Project) — i pamiętaj, że istnieje
[TigerTag Certified](../../TRADEMARK.md) dla zweryfikowanych integracji.

---

**▲ [Spis dokumentacji](../../README.md)** · **Zobacz też:** [Przegląd dla deweloperów](./README.md), [Co możesz zbudować?](./README.md), [Zgodność](../compatibility/README.md)
