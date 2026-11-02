---
sourceHash: 81ee1b494fc9fc36fd8d7ec7337fb8d13ee657814c5dfe3b99cb3ed353fd2d7a
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## Czym jest

**OpenSpool** to otwarty standard tagów tworzony przez społeczność: dane filamentu jako **NDEF JSON**
na tagach NFC Type 2 — bez uwierzytelniania, bez kryptografii, w pełni otwarty. W duchu to
bliski kuzyn TigerTag.

## TigerTag a OpenSpool

| Aspekt | TigerTag | OpenSpool |
|---|---|---|
| Nośnik | NTAG, 144-bajtowy ładunek NDEF | NFC Type 2, NDEF JSON |
| Model danych | Zwarte identyfikatory rozwiązywane w oparciu o wspólną bazę referencyjną | Samoopisujący się JSON |
| Chmura | Opcjonalne konto, magazyn, udostępnianie ([konto TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Brak (standard wyłącznie tagowy) |
| Autentyczność | Opcjonalna — [TigerTag+](../products/tigertag-plus.md) podpisany przez certyfikowanego producenta to **TigerTag+ Certified**, weryfikowalny offline | Brak |
| Otwartość | Otwarta specyfikacja + SDK | Otwarta specyfikacja |

## Migracja chipa z TigerTag do OpenSpool

Chipy TigerTag **nigdy nie są zablokowane przed zapisem** — TigerTag to tylko podstawowy
protokół, z którym dostarczane są szpule. Jeśli wolisz OpenSpool (lub dowolny własny format),
możesz swobodnie przepisać dane fabrycznego chipa do tego formatu.

## Interoperacyjność — specyfikacja opisana, konwersja do TigerData w przygotowaniu

Arkusz dekodowania tagów OpenSpool (tylko odczyt) jest utrzymywany w
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
w ramach planowanego odczytu RFID wielu producentów w Tiger Studio.

> **TODO:** zdecydować i opisać mapowanie importu (pola JSON OpenSpool →
> identyfikatory referencyjne TigerTag), gdy pojawi się obsługa odczytu.

---

**◀ Poprzednia:** [Klipper](./klipper.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Dla deweloperów](../developers/README.md)
