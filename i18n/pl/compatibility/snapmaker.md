---
sourceHash: 448c6630969a0d99765d2a206f9a0788e9c4e02ef90d870a57ba26db3c1c9fdf
sourcePath: docs/compatibility/snapmaker.md
---

# Snapmaker

## Połączenie z drukarką — **Działa**

| Aspekt | Szczegóły |
|---|---|
| Protokół | Moonraker WebSocket (JSON-RPC), port 7125 + rozszerzenia własnościowe |
| Wykrywanie | Skan HTTP |
| Filament | 4 sloty — edycja filamentu dla każdego slotu (model koloru RRGGBBAA) |
| Sterowanie | Panel sterowania na żywo (osie, temperatury, oświetlenie, wentylator, prędkość, ładowanie/wyładowanie) |
| Telemetria | Temperatury, postęp zadania |

## Natywny RFID — specyfikacja opisana, odczyt w aplikacji planowany

Tagi szpul Snapmaker to **Mifare Classic 1K** z **kluczami poszczególnych sektorów
wyprowadzanymi przez HKDF** oraz **podpisem RSA-2048 PKCS#1 v1.5 + SHA-256** — to
najmocniej zablokowany z dotąd opisanych formatów. Specyfikacja dekodowania (tylko odczyt):
[`docs/rfid-vendors/snapmaker.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/snapmaker.md).

## Przebieg pracy

1. **Dodaj drukarkę** — skan HTTP w sieci LAN lub dodanie przez IP; Tiger Studio
 komunikuje się przez Moonraker (JSON-RPC przez WebSocket).
2. **Zeskanuj szpulę** — telefonem lub czytnikiem biurkowym; trafia do magazynu.
3. **Przypisz ją do slotu** — edycja filamentu dla każdego slotu (model koloru RRGGBBAA
 Snapmakera obsługiwany w sposób niewidoczny dla użytkownika).
4. **Na żywo i sterowanie** — telemetria, postęp zadania i **panel sterowania**:
 osie, temperatury, oświetlenie, wentylator, tryb prędkości, ładowanie/wyładowanie dla każdego slotu.

## Ograniczenia

- Natywne tagi Snapmaker nie są jeszcze odczytywane w aplikacji — specyfikacja jest opisana, a bieżące prace zmierzają do konwersji danych tagów producenta na szpule TigerData (zob. [Zgodność](./README.md)).

## Pierwsza drukarka, która natywnie odczytuje TigerTag

Społecznościowe
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
(niezależne, GPL-3.0) dodaje SSH, strumieniowanie z kamery, metryki — a wraz z nimi
**Snapmaker U1 odczytuje TigerTagi natywnie, na samej maszynie**. Dzięki temu
U1 jest pierwszą drukarką, w której szpula TigerTag jest rozpoznawana bez żadnej
aplikacji pośredniczącej — to przyszłość, do której zmierza
[gra zbiorowa](../vision/for-filament-manufacturers.md), która nadeszła
wcześniej dzięki społeczności. Zob.
[integracje zewnętrzne](../developers/integrations.md).

---

**◀ Poprzednia:** [Anycubic](./anycubic.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Klipper](./klipper.md)
