---
sourceHash: 636849e192cdbe3efc38d30a1b16a4f58828a9158ac9a9f1b2584f5977ce3b08
sourcePath: docs/compatibility/elegoo.md
---

# Elegoo

## Połączenie z drukarką — **działa**

| Aspekt | Szczegóły |
|---|---|
| Protokół | MQTT, port 1883 |
| Wykrywanie | Broadcast UDP, port 52700 |
| Filament | 4 sloty (Canvas) |
| Sterowanie | Panel sterowania na żywo: bazowanie/przesuw, temperatury, światło, wentylator, tryb prędkości, ładowanie/rozładowanie |
| Telemetria | Temperatury, postęp zadania |

## Natywny RFID — specyfikacja udokumentowana, odczyt w aplikacji planowany

Tagi szpul Elegoo to **Mifare Ultralight** chronione wyłącznie **bajtami magicznymi**
(`EE EE EE EE`) — bez prawdziwego uwierzytelniania. Specyfikacja dekodowania tylko do odczytu:
[`docs/rfid-vendors/elegoo.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/elegoo.md).

## Przebieg pracy

1. **Dodaj drukarkę** — automatyczne wykrywanie w LAN (broadcast UDP) lub
 dodanie po IP. Wymaga jednorazowego włączenia **trybu LAN Only** na
 ekranie dotykowym drukarki —
 [instrukcja krok po kroku](#przełączenie-na-tryb-lan).
2. **Zeskanuj szpulę** — telefonem lub czytnikiem desktopowym; szpula trafia do twojego magazynu.
3. **Przypisz ją do slotu** — Tiger Studio mapuje szpule z magazynu na cztery
 sloty Canvas.
4. **Na żywo i sterowanie** — poza telemetrią i postępem zadania Elegoo
 otrzymuje **pełny panel sterowania**: bazowanie/przesuw osi, ustawianie
 temperatur dyszy i stołu, przełączanie światła, obsługa wentylatora, wybór
 trybu prędkości, ładowanie/rozładowanie filamentu dla każdego slotu.

## Przełączenie na tryb LAN

Bezpośrednie połączenie Tiger Studio wymaga włączenia na samej drukarce **trybu LAN Only** —
jednorazowej konfiguracji na ekranie.

<div class="ts-model-picker">
<a href="../tutorials/elegoo-cc2-lan-mode.md"><img src="../assets/elegoo-lan-mode/models/cc2.png" alt="Centauri Carbon 2" /><span>Centauri Carbon 2</span></a>
</div>

## Bonus: zapis tagów w formacie Elegoo

Wbudowany edytor aplikacji potrafi **przepisać chip do formatu oczekiwanego
przez drukarki Elegoo** — dzięki temu chip TigerTag może nawet stać się
natywnym tagiem Elegoo, jeśli tego wymaga twój sposób pracy. Twój chip, twój wybór.

## Odczyt TigerTag na samej maszynie — w przygotowaniu

W **przygotowaniu** jest niestandardowy firmware, który pozwoliłby drukarce Elegoo
odczytywać TigerTagi **bezpośrednio**, na maszynie, na tej samej zasadzie co w
[Snapmaker U1](./snapmaker.md).

Nie jest jeszcze dostępny i nie ma daty. Do tego czasu Elegoo odczytuje filament
zidentyfikowany przez TigerTag tak, jak opisuje to powyższy przebieg pracy — przez
telefon, Tiger Studio lub [TigerSpool](../products/tigerspool.md) stojący obok
maszyny, bez żadnych zmian w drukarce.

## Ograniczenia

- Natywne tagi Elegoo nie są jeszcze odczytywane w aplikacji — specyfikacja jest udokumentowana, a obecne prace zmierzają do konwersji danych tagów producentów na szpule TigerData (zobacz [Zgodność](./README.md)).

---

**◀ Poprzednia:** [Creality](./creality.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [FlashForge](./flashforge.md)
