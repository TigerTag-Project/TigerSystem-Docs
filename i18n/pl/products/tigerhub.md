---
sourceHash: cb19118f5e46d0c5e473f54203faefcd68e0d63d44df65395c86a415d8cfa58d
sourcePath: docs/products/tigerhub.md
---

# TigerHub

## Cel

**TigerHub to dom ekosystemu w sieci** — strona pod adresem
**[tigersystem.io](https://tigersystem.io)**. Przedstawia piaskownicę TigerSystem
i to, co umożliwia otwarty protokół TigerTag, a także hostuje
**stronę społecznościową** piaskownicy: udostępnij listę życzeń, zaproś kogoś, by został
znajomym, opublikuj listę tylko do odczytu, którą każdy otworzy w przeglądarce.

<img src="../assets/tigerhub-site-card.png" width="100%" alt="tigersystem.io — webowy dom TigerSystem, z aplikacją mobilną skanującą przed Tiger Studio" />

## Gdzie się mieści

```mermaid
flowchart TB
  ST["Tiger Studio"] & CO["Connect"] <--> FB[("Your TigerSystem account<br/>(Firebase — one shared database)")]
  FB -- "published lists · invites" --> HUB["TigerHub<br/>tigersystem.io"]
  HUB --> VIS["Anyone with the link<br/>plain browser, no account"]
```

## Funkcje — wszystkie działają już dziś

- **Wizytówka ekosystemu** — strona główna opowiada całą historię: jak to działa,
 sześć marek drukarek, komponenty i trzy poziomy (TigerData —
 śledzenie wyłącznie programowe · TigerTag — chip offline · TigerTag+ — zweryfikowana
 autentyczność).
- **Twoje konto w sieci** (`/account`) — zaloguj się na swoje konto
 TigerSystem z przeglądarki.
- **Listy życzeń** — publiczne i tylko dla znajomych, obie wdrożone.
- **Kody znajomych i zaproszenia** — dodawajcie się nawzajem do znajomych z poziomu sieci.
- **Publiczne linki do list** — udostępnij magazyn lub listę życzeń tylko do odczytu jako
 `https://tigersystem.io/list/<token>`; oglądający nie potrzebuje aplikacji ani
 konta.
- **Katalog materiałów i baza referencyjna** (`/materials`, `/database`) —
 przeglądaj wspólny katalog, względem którego rozwiązują się wszystkie aplikacje.
- **Drukarki i funkcje** (`/printers`, `/features`) — co z czym działa.
- **Modele 3D** (`/models`) — modele do druku (TigerPOD i towarzysze).
- **Dla producentów, deweloperów i prasy** (`/manufacturers`, `/developers`,
 `/press`) — historia B2B, wskazówki integracyjne, materiały medialne.
- **Goodies** (`/goodies`) — oficjalna czapka i polo. Kupno jednego z nich to jeden
 ze sposobów [wsparcia projektu](../support.md).

## TigerHub nie jest bazą danych

Konta użytkowników i dane stojące za wszystkimi aplikacjami żyją w **zwykłym Firebase**
(Auth + Firestore) — celowo niemarkowej infrastrukturze: **jedna wspólna
baza danych, w jednym miejscu**, aby Tiger Studio, Tiger NFC Connect, TigerScale
i konto TigerSystem współpracowały na tych samych danych. TigerHub to
**powierzchnia webowa** zbudowana na jej szczycie. Zob.
[Magazyn i synchronizacja z chmurą](../concepts/inventory-and-cloud-sync.md).

## Interakcje

| Z | Jak |
|---|---|
| Tiger Studio / Connect | Generowanie i unieważnianie linków do udostępniania, wysyłanie zaproszeń do znajomych |
| Firebase (baza danych kont) | Źródło opublikowanych danych |
| Odwiedzający | Zwykła przeglądarka, bez konta |

---

**◀ Poprzednia:** [Tiger Studio (aplikacja desktopowa)](./tiger-studio.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [TigerPOD](./tigerpod.md)

**Zobacz też:** [Magazyn i synchronizacja z chmurą](../concepts/inventory-and-cloud-sync.md), [Architektura](../architecture/overview.md)
