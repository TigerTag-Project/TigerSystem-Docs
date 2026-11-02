---
sourceHash: 7df403d9ec01cc589f8d8c155cd8d0cb8154cd2993e09860c8c2a54ec787ef9c
sourcePath: docs/compatibility/bambu-lab.md
---

# Bambu Lab

## Połączenie z drukarką — **działa**

Tiger Studio łączy się z drukarką Bambu Lab na dwa sposoby:

| Aspekt | Szczegóły |
|---|---|
| LAN | MQTTS (TLS) bezpośrednio do drukarki, port 8883. Wymaga jednorazowego włączenia na drukarce **trybu LAN Only** i **trybu Developer** — [instrukcja krok po kroku dla każdego modelu](#przełączenie-na-tryb-lan). |
| Chmura | Zaloguj się raz kontem Bambu Lab (e-mail + jednorazowy kod) — każda drukarka na koncie zostanie znaleziona automatycznie, wraz z kodem dostępu LAN. Ta część nie wymaga żadnego przełącznika na drukarce. |
| Filament | Obsługa AMS — do 16 slotów, edycja filamentu w każdym slocie |
| Wykrywanie | LAN: SSDP + sonda TLS oraz dodawanie po IP. Chmura: automatycznie, z konta. |
| Kamera | Strumień JPEG (TCP 6000) / RTSP — ten sam obraz w obu przypadkach, wymaga włączenia na drukarce **LAN Mode Liveview** |
| Telemetria | Temperatury, postęp zadania, podgląd wydruku |

> **Połączenia przez chmurę są dziś tylko do odczytu**, z jednym wyjątkiem. Dostajesz telemetrię na żywo —
> temperatury, postęp, kamerę — oraz **oświetlenie** drukarki, które przełącza się także przez chmurę.
> Wszystko inne, co działa na maszynie (pauza, wznowienie, zatrzymanie), wymaga ścieżki LAN.

## Natywny RFID — specyfikacja udokumentowana, odczyt w aplikacji planowany

Tagi szpul Bambu to **Mifare Classic 1K** z **kluczami wyprowadzanymi z UID przez
HKDF-SHA256** — zablokowane kryptograficznie tak, by służyły ekosystemowi
producenta. Specyfikacja dekodowania tylko do odczytu jest utrzymywana w
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## Przebieg pracy

1. **Dodaj drukarkę** — albo **w sieci LAN** (wykrywanie SSDP lub dodanie po IP,
 w parze z kodem dostępu LAN drukarki), albo **z chmury** (zaloguj się kontem
 Bambu Lab — każda drukarka na nim zostanie znaleziona automatycznie).
 Ścieżka LAN wymaga najpierw jednorazowego włączenia na drukarce trybu LAN Only
 i trybu Developer — [instrukcja krok po kroku dla każdego modelu](#przełączenie-na-tryb-lan).
2. **Zeskanuj szpulę** — telefonem lub czytnikiem desktopowym; szpula trafia do
 twojego magazynu.
3. **Przypisz ją do slotu AMS** — Tiger Studio wysyła profil filamentu
 (materiał, kolor) do slotu przez MQTTS; informacje po stronie maszyny
 zgadzają się teraz z rzeczywistością, w obrębie do 16 slotów AMS.
4. **Na żywo** — temperatury, postęp zadania, podgląd wydruku, zegarowy czas
 **„Kończy się o”** oraz obraz z kamery, prosto w widoku drukarek.

## Przełączenie na tryb LAN

Ścieżka LAN wymaga włączenia na samej drukarce **trybu LAN Only** i **trybu Developer** —
jednorazowej konfiguracji na ekranie. Wybierz poniżej swój model, by poznać dokładne kroki.

<div class="ts-model-picker">
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1-mini.png" alt="A1 mini" /><span>A1 mini</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1.png" alt="A1" /><span>A1</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a2l.png" alt="A2L" /><span>A2L</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1p.png" alt="P1P" /><span>P1P</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1s.png" alt="P1S" /><span>P1S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/p2s.png" alt="P2S" /><span>P2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1c.png" alt="X1 Carbon" /><span>X1 Carbon</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1e.png" alt="X1E" /><span>X1E</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x2d.png" alt="X2D" /><span>X2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2s.png" alt="H2S" /><span>H2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2d.png" alt="H2D" /><span>H2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2dpro.png" alt="H2D Pro" /><span>H2D Pro</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2c.png" alt="H2C" /><span>H2C</span></a>
</div>

## Ograniczenia

- Natywne tagi Bambu nie są jeszcze odczytywane w aplikacji — specyfikacja jest udokumentowana, a obecne prace zmierzają do konwersji danych tagów producentów na szpule TigerData (zobacz [Zgodność](./README.md)).
- Obraz z kamery wymaga włączenia na drukarce LAN Mode Liveview, niezależnie od używanej ścieżki połączenia.

---

**◀ Poprzednia:** [Zgodność](./README.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Creality](./creality.md)
