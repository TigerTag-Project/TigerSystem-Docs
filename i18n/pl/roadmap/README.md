---
sourceHash: 3d3da9810cce0db33f72c8e05a5c40d86c71eb6c4c6078c06d400f2e6fdc8081
sourcePath: docs/roadmap/README.md
---

# Mapa drogowa

## Kierunek ekosystemu

Ogólne, niedatowane zamierzenia (szczegóły są przy każdym produkcie):

- **Wielodostawcowy RFID → TigerData** — pobieranie danych z tagów producentów
 (Bambu Lab, Creality, Elegoo, Anycubic, Snapmaker, Qidi, OpenSpool)
 i przekształcanie ich w cyfrowe szpule TigerData, aby filament innych marek
 dało się skanować i zarządzać nim w ekosystemie; specyfikacje tylko do odczytu są już
 udokumentowane ([zgodność](../compatibility/README.md)). Bezpośrednie dekodowanie
 w aplikacji jest celowo niewprowadzone, dopóki model interoperacyjności nie
 zostanie ustalony.
- **Więcej integracji z drukarkami** — Klipper/Moonraker jako kolejny naturalny
 transport ([strona Klippera](../compatibility/klipper.md)).
- **Mapa dystrybutorów** *(planowana)* — oficjalni dystrybutorzy rozrastają się
 poza [Atome3D](https://atome3d.com); mapa pokaże, gdzie kupić
 chipy TigerTag lokalnie.
- ~~Przenośny plik `.ttag`~~ — **wdrożony** w Tiger Studio v2.14.0:
 [format `.ttag`](../developers/ttag-format.md) (eksport + import, wszystkie
 trzy poziomy szpul).
- **TigerTag dla żywic** — rozszerzenie protokołu na pojemniki z żywicą dla
 drukarek żywicznych 3D, wnosząc tę samą otwartą tożsamość do całej drugiej
 rodziny maszyn.
- **Rozwój TigerHub** — strona ekosystemu pod adresem
 [tigersystem.io](https://tigersystem.io): bogatsze funkcje piaskownicy społecznościowej
 (listy życzeń, znajomi, udostępnianie).
- **Dokumentacja** — uzupełnienie symboli zastępczych TODO w całym tym repozytorium (poradniki,
 przewodniki, wdrażanie producentów, podsumowanie ładunku RFID).
- **Języki dokumentacji** — wiki pod adresem
 [wiki.tigersystem.io](https://wiki.tigersystem.io) ukazuje się najpierw po **angielsku i
 francusku**: angielski jest źródłem prawdy, francuski jest z niego wyprowadzony i
 sprawdzony. Gdy oba będą kompletne, a strony przestaną się zmieniać, pozostałe
 wersje językowe [tigersystem.io](https://tigersystem.io) pójdą w ślad —
 **niemiecki, hiszpański, włoski, polski, chiński i portugalski w obu
 wariantach, brazylijskim i europejskim**, które ekosystem traktuje jako dwie osobne
 wersje językowe — aby dokumentacja była zgodna z resztą ekosystemu.
 Dodanie ich wcześniej oznaczałoby utrzymywanie dziewięciu kopii stron, które wciąż
 powstają.
- **Poza obecnymi wersjami językowymi** — lista nie kończy się na tym, co
 [tigersystem.io](https://tigersystem.io) obsługuje dziś. **Japoński, koreański i
 rosyjski** są najsilniejszymi kandydatami: we wszystkich trzech działają aktywne
 społeczności twórców, i we wszystkich trzech angielskojęzyczna dokumentacja techniczna
 jest realną barierą, a nie drobną niedogodnością. Rosyjski
 sięga też daleko poza Rosję. Warto zauważyć, że język może być wart dokumentowania
 nawet tam, gdzie sklep nie wysyła — protokół jest otwarty, działa każdy pusty chip NTAG
 i nic w ekosystemie nie wymaga kupowania czegokolwiek.

 To, które języki faktycznie zostaną dodane, należy rozstrzygnąć na podstawie ruchu na samym wiki,
 gdy już jakiś będzie, a nie na podstawie zgadywania. Nie musi to też być
 wszystko albo nic dla każdego języka: sekcje dla użytkowników (poradniki, FAQ,
 produkty, zgodność) zasługują na tłumaczenie na długo przed
 [`developers/`](../developers/README.md), którego czytelnicy i tak pracują
 po angielsku.

## Szczegółowe mapy drogowe

| Produkt | Gdzie |
|---|---|
| Tiger Studio | [`ROADMAP.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/ROADMAP.md) w repozytorium aplikacji — pogrupowany według dziedzin, z uwagami o rozmiarze i ryzyku |
| Pozostałe produkty | na razie brak publicznej mapy drogowej: plany każdego produktu pojawiają się w issues i wydaniach jego własnego repozytorium ([repozytoria](../developers/repositories.md)) |

> **Uwaga:** ta strona określa kierunek, a nie zobowiązania ani daty.

---

**◀ Poprzednia:** [FAQ](../faq/README.md) · **▲ [Spis dokumentacji](../../README.md)**

**Zobacz też:** [Produkty](../products/README.md), [Zgodność](../compatibility/README.md)
