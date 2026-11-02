---
sourceHash: cbf8e821d88b60b01f06da58bf3790fa335e7d0b940f38f9f3ca066fe0851b2b
sourcePath: docs/compatibility/creality.md
---

# Creality

## Połączenie z drukarką — **Działa**

| Aspekt | Szczegóły |
|---|---|
| Protokół | WebSocket, port 9999 (oparty na heartbeat) |
| Filament | Obsługa wielu szpul CFS (boxsInfo) |
| Kamera | Wideo WebRTC (port 8000) |
| Telemetria | Temperatury, postęp zadania, podgląd wydruku |

## Natywny RFID — specyfikacja opisana, odczyt w aplikacji planowany

Tagi szpul Creality to **Mifare Classic 1K** z **kluczem AES-128-ECB dla
sektora 1** i opcjonalnym szyfrowaniem danych. Specyfikacja dekodowania (tylko odczyt):
[`docs/rfid-vendors/creality.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/creality.md).

## Przebieg pracy

1. **Dodaj drukarkę** — wykrywanie w sieci LAN lub dodanie przez IP; Tiger Studio łączy się
 z WebSocketem drukarki i utrzymuje połączenie.
2. **Zeskanuj szpulę** — telefonem lub czytnikiem biurkowym; trafia do magazynu.
3. **Przypisz ją do slotu CFS** — Tiger Studio mapuje szpule z magazynu na
 boksy CFS, aby informacje o filamencie po stronie maszyny zgadzały się z rzeczywistością.
4. **Na żywo** — temperatury, postęp zadania, podgląd wydruku, czas „Kończy się o” oraz
 strumień z **kamery WebRTC** w widoku drukarek.

## Ograniczenia

- Natywne tagi Creality nie są jeszcze odczytywane w aplikacji — specyfikacja jest opisana, a bieżące prace zmierzają do konwersji danych tagów producenta na szpule TigerData (zob. [Zgodność](./README.md)).

---

**◀ Poprzednia:** [Bambu Lab](./bambu-lab.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Elegoo](./elegoo.md)
