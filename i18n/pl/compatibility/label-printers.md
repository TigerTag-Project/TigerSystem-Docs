---
sourceHash: 26da829356af402a7e35df1fd40b2563bb966a93eecf9345a4602304c6124f16
sourcePath: docs/compatibility/label-printers.md
---

# Drukarki etykiet Bluetooth

Wydrukuj etykietę TigerQR szpuli prosto z telefonu na małej termicznej
drukarce etykiet Bluetooth: bez komputera, bez PDF, bez aplikacji drukarki po
drodze.

> **Stan na 2026-11-26.** [Tiger NFC Connect](../products/tiger-nfc-connect.md)
> (iOS / Android) drukuje na tych drukarkach od swojej **następnej
> aktualizacji**. W [Tiger Studio](../products/tiger-studio.md) te same
> drukarki są w trakcie integracji, **jeszcze nie wydane**. Do tego czasu każda
> drukarka działa przez własną aplikację z pliku PDF, PNG lub SVG etykiety
> ([drukowane etykiety](../developers/spool-ids-and-qr-links.md)).

## Jak to działa

- Tiger NFC Connect wysyła etykietę TigerQR **szpuli** lub **filamentu** do
  drukarki przez Bluetooth.
- **Każda drukarka zapamiętuje własny format etykiety**, czyli włożoną rolkę.
- Każdy wydruk zachowuje **mały margines bezpieczeństwa**, więc nawet lekko
  przesunięta rolka dostaje całą etykietę.
- Rolki 12 mm drukują etykietę **Slim** 40 × 12 mm; rolki o szerokości 50 mm
  przyjmują większe etykiety (przetestowano 50 × 30 mm).

> **Wskazówka:** drukarka łączy się z **jednym urządzeniem naraz**. Zamknij
> aplikację producenta drukarki, zanim zaczniesz drukować z Tiger NFC Connect.

## Nasz wybór

Drukarki Niimbot są naprawdę bardzo dobre. **D110** to najlepszy stosunek
jakości do ceny, bardzo dobra jak na swoją cenę; **B1** i **B1 Pro** to wybór
przy większym budżecie, do większych etykiet. Marklife **P15** działa, ale jest
większa, a jakość jej wydruku wydaje się nieco niższa.

Wszystkie cztery zostały przetestowane na papierze.

| Drukarka | Rolki | Przetestowana etykieta | Nasza opinia | Kup |
|---|---|---|---|---|
| **Niimbot D110** (i D110-M) | 12 mm | 40 × 12 mm | **Najlepszy stosunek jakości do ceny**: bardzo dobra jak na swoją cenę | [Amazon](https://link.amazon/B039fb6VY) |
| **Niimbot B1** | do 50 mm szerokości | 50 × 30 mm | Większe etykiety, przy większym budżecie | [Amazon](https://link.amazon/B0a3CHt3H) |
| **Niimbot B1 Pro** | 50 mm szerokości | 50 × 30 mm | 300 dpi, najostrzejszy wydruk | [Amazon](https://link.amazon/B09wFIrwk) |
| **Marklife P15** (sprzedawana na Amazonie jako „Pristar P15”) | 12 mm | 40 × 12 mm | Działa, ale jest większa, wydruk nieco słabszy | [Amazon](https://link.amazon/B0iRdI1G6) |

> Linki w tej tabeli to **linki afiliacyjne Amazon** (amazon.fr): jako partner
> Amazon TigerTag zarabia na kwalifikujących się zakupach, **bez dodatkowych
> kosztów dla ciebie**. Pomaga to finansować otwarty protokół. Kupno tej samej
> drukarki gdziekolwiek indziej działa równie dobrze.

Bez cen: zmieniają się zbyt często.

## Również obsługiwane, jeszcze nie przetestowane na papierze

Kod aplikacji obsługuje też te modele; nie zostały jeszcze przetestowane na
papierze:

- **Niimbot:** D11, D101, B18, B21, B21 Pro, B3S;
- **Phomemo:** M110, M120, M200, M220, M221.

---

**▲ [Spis dokumentacji](../../README.md)** · **Zobacz też:** [Zgodny sprzęt firm trzecich](./third-party-hardware.md), [Tiger NFC Connect](../products/tiger-nfc-connect.md), [Identyfikatory szpul i linki QR](../developers/spool-ids-and-qr-links.md)
