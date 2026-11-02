---
sourceHash: 964aaebb15d1afe5fb99c214223b57ec3c35d863a67794dba96b1f6cb91be960
sourcePath: docs/developers/account-api.md
---

# API konta i integracje zewnętrzne

## Kontrakt

Aplikacje zewnętrzne łączą się z backendem TigerSystem — zwykłym Firebase —
według **standardowego wzorca Firebase**:

1. Pobierz publiczną konfigurację SDK:
 `https://tigertag-cdn.web.app/__/firebase/init.json`
2. `firebase.initializeApp(config)`
3. Uwierzytelnij **własne konto TigerTag użytkownika** (publiczność konfiguracji jest
 zamierzona — bezpieczeństwo egzekwują po stronie serwera reguły Firestore).
4. Odczytuj/zapisuj dane tego użytkownika w ramach udokumentowanego zakresu.

## Dokumentacja kanoniczna

Pełny kontrakt integracji znajduje się w
**[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)**:

| Dokument | Zawartość |
|---|---|
| `docs/01-firebase-config.md` | Konfiguracja projektu i połączenie |
| `docs/02-authentication.md` | Przepływy uwierzytelniania |
| `docs/03-data-model.md` | Kolekcje i pola Firestore (referencja modelu danych) |
| `docs/04-friend-system.md` | Kody wykrywania, zaproszenia, udostępnione magazyny |
| `docs/05-rate-limiting.md` | Limity uczciwego użytkowania |
| `examples/` | CLI w Pythonie, ESP32/Arduino, Home Assistant, most Spoolman |

## Reguły bezpieczeństwa — czego się spodziewać

- `users/{uid}/**` jest domyślnie dostępne wyłącznie dla właściciela.
- Zapisy między użytkownikami zawsze wymagają **wcześniejszej relacji** (np. przyjętej
 znajomości) — nie ma otwartych ścieżek zapisu.
- Niektóre kolekcje mają **białą listę pól**: zapisy zawierające pola spoza listy
 są odrzucane.
- Pola tylko dla administratora (role, flagi debugowania) nigdy nie są zapisywalne przez klienta.

## Punkty końcowe HTTP

`cdn.tigertag.io` działa w **tym samym projekcie Firebase** co konta: hostuje
wspólną bazę referencyjną, obrazy szpul (w tym zdjęcia produktów TigerTag+)
oraz punkty końcowe HTTP związane z bazą danych TigerSystem.

| Punkt końcowy | Przeznaczenie |
|---|---|
| `https://cdn.tigertag.io/healthz/` | Kontrola stanu |
| `https://cdn.tigertag.io/setSpoolWeightByRfid?ApiKey=&uid=&weight=` | Przesłanie wagi szpuli na podstawie UID chipa (używane przez urządzenia klasy wag) |

> **TODO:** pełny katalog API HTTP (model uwierzytelniania, kształty błędów) — do
> opisania w repozytorium integracji i streszczenia tutaj.

---

**◀ Poprzednia:** [SDK](./sdks.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [FAQ](../faq/README.md)

**Zobacz też:** [Magazyn i synchronizacja z chmurą](../concepts/inventory-and-cloud-sync.md), [Architektura](../architecture/overview.md)
