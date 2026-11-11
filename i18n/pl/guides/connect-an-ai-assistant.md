---
sourceHash: ce7797639f045c9154227cdd8686b647e174f7ddf43143ca72b59c143690f412
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Połącz asystenta AI ze swoim kontem

Zapytaj Claude lub ChatGPT „ile PETG mi zostało?” i otrzymaj odpowiedź z własnego
magazynu. Konektor TigerSystem.io pozwala asystentowi AI czytać twoje konto
TigerSystem i, jeśli na to pozwolisz, wprowadzać w nim zmiany. To ten sam pomysł co lokalny serwer w Tiger
Studio, tylko hostowany: działa z przeglądarki, z telefonu i bez uruchomionego
Studio.

**Adres konektora:**

```
https://mcp.tigersystem.io/mcp
```

Mówi protokołem MCP (Model Context Protocol), otwartym standardem, którym asystenci
sięgają po zewnętrzne narzędzia. Korzystać z niego może każdy asystent obsługujący zdalne serwery MCP z OAuth.

**Dla członków TigerSquad.** Konektor, łącznie z odczytem, jest przywilejem
[TigerSquad](../tigersquad.md), a dołączenie jest bezpłatne. Poza TigerSquad asystent
odpowiada, że to przywilej TigerSquad; dostęp wraca, gdy tylko dołączysz.

## Co asystent może czytać

- twoje szpule: marka, materiał, kolory, pozostała masa, temperatury, miejsce
  przechowywania każdej z nich;
- twoje regały, listy życzeń i historię stanów;
- twoje drukarki i wagi TigerScale — **nigdy ich kodów dostępu ani haseł**;
- to, co znajomi ci udostępniają (ich szpule, regały i listy życzeń).

Tylko czyta, chyba że dasz mu odczyt i zapis (patrz niżej). Czyta jako ty, na tych samych
zasadach dostępu co aplikacje, więc nigdy nie zobaczy innego konta.
Dane uwierzytelniające — kody dostępu do drukarek, loginy do chmury, twój klucz prywatny, twój
e-mail — nigdy nie są zwracane, o cokolwiek poprosi.

## Tylko odczyt, albo odczyt i zapis

Gdy łączysz asystenta, strona tigersystem.io pyta o jego dostęp: **Tylko odczyt**
(domyślnie) albo **Odczyt i zapis**. Aby zmienić go później:
**tigersystem.io → twoje konto → Dane → Połączeni asystenci** albo w Tiger
Studio **Zarządzaj dostępem**. Po przejściu na odczyt i zapis odśwież konektor
w asystencie lub połącz go ponownie, aby zobaczył nowe narzędzia.

Z odczytem i zapisem asystent może:

- zmienić masę, notatkę, TD i tagi szpuli oraz odłożyć ją na regał;
- zmienić cenę, link zakupu, minimalny stan, SKU / EAN i linki produktu;
- dodać szpule z katalogu;
- utworzyć regał i zmienić nazwę regału;
- wypisać zmiany, które wprowadził, i cofnąć dowolną z nich.

Nigdy niczego nie usuwa: zużyta szpula przechodzi na 0 g. Każda zmiana jest
przechowywana w historii przez 30 dni i można ją cofnąć. Notatka i TD są też
zapisywane na chipie, więc szpula wymaga potem ponownego zapisania chipa.

Limity: 20 szpul na prośbę; dziennie (UTC) 100 nowych szpul, 5 nowych regałów
i łącznie 500 zmian, liczonych razem dla asystenta Tiger Studio i asystentów
online, łącznie ze zmianami cofniętymi.

## Claude (web, desktop, mobile)

1. **Ustawienia → Konektory → Dodaj własny konektor.**
2. Nazwij go `TigerSystem.io`, wklej powyższy adres, pozostaw zaawansowane pola OAuth
   puste i dodaj.
3. Kliknij **Połącz**. Trafisz na tigersystem.io: zaloguj się, sprawdź, czy strona
   informuje, że odpowiedzi trafiają do claude.ai, i kliknij **Zezwól**.
4. W rozmowie włącz konektor TigerSystem.io z menu narzędzi i
   zadaj pytanie.

## ChatGPT

Własne konektory wymagają **trybu dewelopera** (płatny plan; w planach Business
włącza go administrator).

1. **Ustawienia → Aplikacje i konektory → Ustawienia zaawansowane → Tryb dewelopera** włączony.
2. **Utwórz** konektor: nazwa `TigerSystem.io`, powyższy adres, uwierzytelnianie
   **OAuth**, bez identyfikatora klienta ani sekretu.
3. Zaloguj się na tigersystem.io i kliknij **Zezwól**.
4. W nowym czacie włącz konektor i zadaj pytanie.

## Grok

Własne konektory wymagają **płatnego planu Grok**.

1. Otwórz **grok.com/connectors → New Connector → Custom**.
2. Nazwij go `TigerSystem.io` i wklej powyższy adres.
3. Zaloguj się na tigersystem.io i kliknij **Zezwól**.
4. W rozmowie włącz konektor TigerSystem.io i zadaj pytanie.

## Le Chat (Mistral)

Własne konektory dodaje **administrator** — na koncie osobistym
to ty.

1. **Connectors → Add Connector → Custom MCP Connector.**
2. Nazwij go `TigerSystem.io` i wklej powyższy adres; Le Chat sam wykrywa
   metodę logowania (OAuth).
3. Zaloguj się na tigersystem.io i kliknij **Zezwól**.
4. W rozmowie włącz konektor i zadaj pytanie.

Nazwy w menu w tych aplikacjach często się zmieniają; kroki pozostają te same.

## Codex, Cursor i inni klienci desktopowi

Dodaj zdalny serwer MCP typu **Streamable HTTP** z powyższym adresem i
bez tokenu. Aplikacja otwiera przeglądarkę do logowania; po kliknięciu
**Zezwól** przeglądarka trafia na adres `127.0.0.1` — to aplikacja na twoim
komputerze odbiera logowanie. Pusta strona lub komunikat „nie można się połączyć” jest tam
normalny: zamknij kartę.

## Odcięcie asystenta

**tigersystem.io → twoje konto → Dane → Połączeni asystenci.** Każdy
asystent, któremu zezwolono, jest wymieniony z datą połączenia i ostatniego użycia.
**Cofnij dostęp** zatrzymuje go natychmiast.

## Warto wiedzieć

- Asystent może odpowiadać na podstawie danych sprzed nawet dwóch minut: ostatnie odczyty
  są krótko przechowywane, aby wszystko działało szybko i lekko.
- Stan drukarki na żywo (online, drukuje) nie jest dostępny z chmury — widzi go tylko
  Tiger Studio w sieci twojej drukarki.
- Notatki, nazwy kolorów i teksty list życzeń to twoje słowa (albo znajomego);
  asystent ma polecenie je zgłaszać, nigdy nie traktować ich jak instrukcji.

---

**▲ [Spis dokumentacji](../../README.md)** · **Zobacz też:** [Tiger Studio (aplikacja desktopowa)](../products/tiger-studio.md), [Przewodniki](./README.md)
