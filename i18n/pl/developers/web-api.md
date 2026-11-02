---
sourceHash: 4534952990769306c8ebf5fcf1d9c93c9ddca86ce463b792d757f36bdda46043
sourcePath: docs/developers/web-api.md
---

# Web API

## Do czego służy

TigerTag niesie wszystko, czego potrzebuje drukarka, **na chipie, offline**. Web
API istnieje dla tego, czego chip pomieścić nie może i co zmienia się po jego
zapisaniu: karty danych, dokumenty bezpieczeństwa, zdjęcie, wideo, poprawki
producenta.

To **jeden punkt końcowy HTTP dla każdego filamentu każdej marki** — bez klucza,
bez konta, bez rejestracji, bez negocjowania limitów. Wchodzi identyfikator
produktu, wraca produkt.

```
https://api.tigertag.io/api:tigertag/product/get?uid=0&product_id=<ID>&lang=en
```

Parametr `lang` wybiera język pól tekstowych.

## Co wraca

Cztery prawdziwe produkty czterech różnych marek, przez ten jeden adres:

| `product_id` | Produkt | Zwracane dokumenty |
|---|---|---|
| `10` | Polymaker PolyTerra™ PLA | MSDS · TDS · wskazówki · wideo |
| `30` | R3D PLA High Speed | żywność · MSDS · REACH · RoHS · TDS · wideo |
| `40` | Sunlu PLA Matte | MSDS · REACH · RoHS · TDS · wideo |
| `50` | eSun PLA+ | żywność · MSDS · REACH · RoHS · TDS · wskazówki · wideo |

Każda odpowiedź niesie tożsamość (marka, seria, nazwa, SKU, EAN, kolor), pełny
profil druku (dysza, stół, suszarka, wentylator, średnica, waga, shore,
transmission distance), zdjęcie produktu oraz blok `links` powyżej —
`tds`, `msds`, `rohs`, `reach`, `en71`, `food`, `tips`, `youtube`.

## Dlaczego utrzymuje TigerTag+ aktualnym

[TigerTag+](../products/tigertag-plus.md) przechowuje **identyfikator produktu z
katalogu**, a nie adres. Identyfikator nigdy nie wygasa i nigdy się nie przenosi,
więc producent może poprawić temperaturę lub dołączyć kartę danych pół roku po
wysyłce szpul, a każdy czytnik zobaczy nową wartość przy następnym odczycie —
bez przepisywania czegokolwiek na chipie i bez tego, by chip kiedykolwiek
zależał od sieci, by drukować.

Dlatego też liczy się jeden punkt końcowy: jeden adres obsługuje każdą markę, więc
czytnik implementuje go raz i działa on dla filamentu, którego nigdy nie widział.

## Także offline — cały katalog to plik

Nic z powyższego nie wymaga, by punkt końcowy był osiągalny, ani nawet by istniał.

Pełne odniesienie jest opublikowane jako jeden plik,
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json) — **każdy identyfikator każdego filamentu w bazie**,
odświeżany w ciągu dnia, około 12 MB, bez klucza i bez konta. Każdy może go
pobrać, zmirrorować, dołączyć do aplikacji, położyć na NAS-ie w warsztacie lub
nosić na pendrive'ie.

Czytnik posiadający tę kopię rozwiązuje identyfikator TigerTag+ **bez żadnej
sieci**. To sprawia, że identyfikator jest bezpieczniejszy niż adres: adres
wymaga, by jego host odpowiadał, a wspólne odniesienie wystarczy skopiować raz —
i można je skopiować gdziekolwiek na planecie, komukolwiek, kiedykolwiek.

Web API pozostaje świeższą ścieżką i tą, która niesie karty danych oraz zdjęcie.
Plik jest podłogą pod nim.

## Czego nigdy nie robi

Web API **nie może sprawić, by chip działał**, ponieważ chip działa już bez niego.
Odczytaj TigerTag w trybie samolotowym, a dostaniesz markę, materiał, kolor,
średnicę, wagę i temperatury — cały wydruk. Web API dodaje wokół tego papiery i
obrazy, a na wierzch poprawki.

---

**◀ Poprzednia:** [API konta i integracje zewnętrzne](./account-api.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Mapa repozytoriów](./repositories.md)

**Zobacz też:** [TigerTag+](../products/tigertag-plus.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
