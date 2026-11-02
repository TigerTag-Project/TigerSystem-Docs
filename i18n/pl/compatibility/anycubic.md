---
sourceHash: 2d9fb2d55c78225bfac135d62f3912ead26a4eb709ecafb4ff9d0d0d7d69265e
sourcePath: docs/compatibility/anycubic.md
---

# Anycubic

## Połączenie z drukarką — **Działa** (LAN + chmura)

| Aspekt | Szczegóły |
|---|---|
| Protokół (LAN) | MQTTS, port 9883 (TLS 1.2), bezpośrednio do drukarki |
| Protokół (chmura) | Podpisane REST + chmurowy MQTT producenta |
| Filament | Wielokolorowy box ACE — obsługa każdego slotu |
| Wykrywanie | Sonda `/info`, port 18910 |
| Kamera | Strumień FLV (port 18088) |
| Sterowanie | Panel sterowania na żywo (osie, temperatury, oświetlenie, wentylator, ładowanie/wyładowanie) |

> **Uwaga:** tryb chmurowy to jedyne miejsce, w którym połączenie z drukarką przechodzi przez
> chmurę producenta — tryb LAN pozostaje w pełni lokalny.

## Natywny RFID — specyfikacja opisana, odczyt w aplikacji planowany

Tagi szpul Anycubic to **Mifare Ultralight** **bez uwierzytelniania i bez
kryptografii** — da się je bez trudu odczytać (i sklonować). Specyfikacja dekodowania (tylko odczyt):
[`docs/rfid-vendors/anycubic.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/anycubic.md).

## Przebieg pracy

1. **Dodaj drukarkę** — dwie ścieżki: **tryb LAN** (lokalne wykrywanie przez
 sondę `/info`; dane uwierzytelniające połączenie są importowane z konfiguracji
 slicera producenta) lub **tryb chmurowy** przez konto Anycubic.
2. **Zeskanuj szpulę** — telefonem lub czytnikiem biurkowym; trafia do magazynu.
3. **Przypisz ją do slotu ACE** — Tiger Studio mapuje szpule z magazynu na
 wielokolorowy box ACE.
4. **Na żywo i sterowanie** — telemetria, postęp zadania, strumień z kamery FLV oraz
 **panel sterowania**: osie, temperatury, oświetlenie, wentylator, ładowanie/wyładowanie
 dla każdego slotu.

## Ograniczenia

- Natywne tagi Anycubic nie są jeszcze odczytywane w aplikacji — specyfikacja jest opisana, a bieżące prace zmierzają do konwersji danych tagów producenta na szpule TigerData (zob. [Zgodność](./README.md)).

---

**◀ Poprzednia:** [FlashForge](./flashforge.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Snapmaker](./snapmaker.md)
