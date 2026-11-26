---
sourceHash: e37ac13e1150410ab06ef8cd09503fe830a4669ee98661ac36a83fadafc41e5e
sourcePath: docs/philosophy/open-ecosystem.md
---

# Filozofia otwartego ekosystemu

## Wszystko jest otwarte

Każda warstwa TigerSystem jest opublikowana — sprzęt, firmware, SDK, aplikacje, dokumentacja:

| Warstwa | Projekt | Licencja |
|---|---|---|
| Aplikacja desktopowa | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| SDK JS (npm `tigertag`) | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Apache-2.0 |
| SDK Python | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Apache-2.0 |
| Sprzęt i firmware wagi (V3, aktualna) | [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | MIT |
| Sprzęt i firmware wagi (V2) | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| Stojak na czytniki (STL + dokumentacja) | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| Przewodnik po formacie chipa | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | CC BY 4.0 |
| Dokumentacja integracji z chmurą | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| Ta dokumentacja | TigerSystem-Docs | CC BY 4.0 |

## Piaskownica, a nie ogrodzony ogród

**Cały ekosystem dla użytkownika** jest celowo **laboratorium, a nie
celem ostatecznym**.
Każdy produkt — [Tiger Studio](../products/tiger-studio.md), aplikacja mobilna,
[TigerScale](../products/tigerscale.md), [TigerPOD](../products/tigerpod.md) —
jest działającą demonstracją tego, co umożliwia otwarta, udokumentowana technologia,
gdy szpula potrafi się sama zidentyfikować: telemetria drukarek na żywo w siedmiu markach oraz Klipperze i OctoPrint,
fizyczne mapowanie regałów, czujniki, wspólne magazyny. Część z tego dojrzeje,
część istnieje, by coś udowodnić, a wszystko można czytać, forkować i
swobodnie kopiować. Każdy produkt — obecny i przyszły — jest **dowodem koncepcji**
**otwartego, standardowego, niezależnego od producenta i wieloplatformowego protokołu**: jego jedynym
zadaniem jest pokazanie potencjału, aby każdy mógł potraktować naszą pracę integracyjną jako
inspirację i wyobrazić sobie funkcje jutra.

## Zbuduj własne

TigerTag to otwarty **protokół**, a nie platforma, do której trzeba dołączyć:

1. Przeczytaj format chipa ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).
2. Wybierz [SDK](../developers/sdks.md).
3. Połącz się z [chmurą](../developers/account-api.md) — albo nie; chipy działają offline.
4. Wydaj oprogramowanie, sprzęt lub biznes, który naprawdę chcesz stworzyć.

Twoja aplikacja może być czymś zupełnie innym — nadal będzie rozumieć te same chipy.
Telefon z NFC, czytnik USB ACR122U — albo własnoręcznie zbudowany ESP32 z modułem PN532/RC522,
w stylu TigerScale — to cały sprzęt, jakiego potrzeba: wpiąć tożsamość szpuli
w system ERP, wewnętrzne narzędzie magazynowe, proces śledzenia, system
wypożyczeń w fablabie, prywatny lub publiczny projekt badawczo-rozwojowy — cokolwiek.

---

**◀ Poprzednia:** [Ekosystem skupiony na użytkowniku, a nie na drukarce](./user-centric-ecosystem.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Koncepcja mostu ze smartfonem](./smartphone-bridge.md)

**Zobacz też:** [Dokumentacja dla deweloperów](../developers/README.md), [Produkty](../products/README.md)
