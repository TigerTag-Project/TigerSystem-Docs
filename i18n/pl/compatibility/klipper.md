---
sourceHash: dca3254cea9d6296d6f313f60c5ca02779bb716dda7dd4a0a7f1b717b4c12590
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Połączenie z drukarką — **działa (beta)**, od Tiger Studio 2.41

Tiger Studio łączy się z **każdą drukarką z Klipperem i Moonrakerem**: Voron,
RatRig, Vzbot, Sovol, Qidi, Elegoo Neptune 4, Creality K1 / K2 / Ender-3 V3,
FLSun, Artillery X4, Kingroon i resztą — 161 maszyn jest w kreatorze dodawania
wraz z ich zdjęciem. Integracja jest w wersji **beta**.

| Aspekt | Szczegóły |
|---|---|
| Protokół | HTTP API Moonrakera, odpytywane co 2 s; domyślnie port 7125, można ustawić inny port |
| Wykrywanie | Skanowanie LAN lub ręczne dodanie z adresem i opcjonalnym kluczem API Moonrakera |
| Sloty filamentu | Bramki **Happy Hare** i tory **AFC**, odczytywane i edytowane własnymi poleceniami maszyny (`MMU_GATE_MAP`, `SET_MATERIAL` / `SET_COLOR`); zwykły ekstruder jest wyświetlany, ale nie przechowuje danych filamentu |
| Zadanie | Bieżące zadanie z miniaturą i warstwami; pauza, wznowienie, anulowanie |
| Sterowanie | Ruch osi, bazowanie, wentylator wydruku, prędkość, oświetlenie; temperatury ustawiane jednym kliknięciem |
| Telemetria | Ekstrudery, łoże, komora i każdy `temperature_sensor` / `temperature_fan` / `heater_generic` |
| Kamera | Strumień MJPEG lub zrzuty |

Maszyny, których producenci instalują zamknięty firmware na Klipperze, zachowują
własne połączenie: [Snapmaker](./snapmaker.md), [FlashForge](./flashforge.md) i
[Anycubic](./anycubic.md) są obsługiwane przez własne konektory, nie przez ten.
Maszyna osiągalna na oba sposoby — na przykład Creality K1 — przy dodawaniu
oferuje wybór.

## Natywny RFID — n/d

Klipper to firmware drukarki, a nie format tagu szpuli. Tożsamość szpuli pochodzi
z jej TigerTaga, odczytanego telefonem lub czytnikiem biurkowym.

## Przebieg pracy

1. **Dodaj drukarkę** — znalezioną przez skanowanie LAN lub dodaną ręcznie.
2. **Zeskanuj szpulę** — telefonem (lub czytnikiem biurkowym); trafia do
 magazynu.
3. **Przypisz ją do bramki lub toru** — Tiger Studio zapisuje ją własnym
 poleceniem Happy Hare lub AFC maszyny, więc na drukarce nie trzeba niczego
 instalować.
4. **Na żywo** — zadanie, temperatury i kamera w widoku drukarek.

[TigerSpool](../products/tigerspool.md) również może przypisać slot Klippera, ale
ta ścieżka jest **eksperymentalna**: napisana względem sterownika Tiger Studio i
atrapy Moonrakera, jeszcze nieuruchomiona na drukarce.

---

**◀ Poprzednia:** [Snapmaker](./snapmaker.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [OpenSpool](./openspool.md)
