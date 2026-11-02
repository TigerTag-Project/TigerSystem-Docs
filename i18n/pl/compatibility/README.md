---
sourceHash: a12992e7b500e2dde8a21443c09a157093fbf40e589c4ad4dc960c7acde2ce6f
sourcePath: docs/compatibility/README.md
---

# Zgodność

Jak TigerSystem współpracuje z każdym ekosystemem drukarek. Dwie niezależne osie:

- **Połączenie z drukarką** — Tiger Studio rozmawiające z maszyną przez LAN
  (telemetria, sloty filamentu, zadanie, kamera). **Dziś działa sześć marek.**
- **Natywny RFID** — odczyt własnych tagów szpul producenta. Udokumentowany dla
  każdego producenta. Bezpośrednie dekodowanie w aplikacji **nie jest jeszcze
  zintegrowane** (właściwy model interoperacyjności to wciąż otwarte pytanie);
  obecne prace zmierzają do **konwersji danych tagów producentów na cyfrowe
  szpule TigerData**, aby filament innych marek można było skanować i zarządzać
  nim w ekosystemie. Tymczasem sam chip TigerTag już działa z każdą drukarką
  dzięki [mostowi ze smartfonem](../philosophy/smartphone-bridge.md).

## Macierz

| Ekosystem | Połączenie z drukarką (Tiger Studio) | Natywny format tagu | Blokada natywnego tagu | Status odczytu RFID |
|---|---|---|---|---|
| <img src="../assets/brands/bambulab.svg" width="14" alt="" /> [Bambu Lab](./bambu-lab.md) | **Działa** — MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256, klucze wyprowadzane z UID | Specyfikacja udokumentowana |
| <img src="../assets/brands/creality.svg" width="14" alt="" /> [Creality](./creality.md) | **Działa** — WebSocket + CFS | Mifare Classic 1K | Klucz sektora AES-128-ECB | Specyfikacja udokumentowana |
| <img src="../assets/brands/elegoo.svg" width="14" alt="" /> [Elegoo](./elegoo.md) | **Działa** — MQTT + Canvas | Mifare Ultralight | Tylko bajty magiczne | Specyfikacja udokumentowana |
| <img src="../assets/brands/flashforge.svg" width="14" alt="" /> [FlashForge](./flashforge.md) | **Działa** — HTTP + IFS | — (maszyny nie mają czytnika RFID) | — | TigerTag dodaje do niej NFC, bez kosztów |
| <img src="../assets/brands/anycubic.svg" width="14" alt="" /> [Anycubic](./anycubic.md) | **Działa** — MQTTS LAN + chmura, ACE | Mifare Ultralight | Brak | Specyfikacja udokumentowana |
| <img src="../assets/brands/snapmaker.svg" width="14" alt="" /> [Snapmaker](./snapmaker.md) | **Działa** — Moonraker WebSocket + 4 sloty | Mifare Classic 1K | HKDF + podpis RSA-2048 | Specyfikacja udokumentowana |
| [Klipper](./klipper.md) | Jeszcze nie (podstawy istnieją) | n/d | n/d | n/d |
| [OpenSpool](./openspool.md) | n/d (standard tagów, nie drukarka) | NFC Type 2, NDEF JSON | Brak — otwarty standard | Specyfikacja udokumentowana |
| Qidi | Niezintegrowane | Mifare Classic 1K | Klucz domyślny | [Specyfikacja udokumentowana](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

> **Uwaga:** karty RFID poszczególnych producentów (specyfikacje dekodowania
> tylko do odczytu, wywiedzione z projektu
> [OpenRFID](https://github.com/suchmememanyskill/OpenRFID)) są utrzymywane
> w repozytorium Tiger Studio w
> [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors)
> — tutaj są podlinkowane, a nie zduplikowane.

## Poza drukarkami

Zgodność to nie tylko drukarki: zobacz rosnącą listę
**[zgodnego sprzętu firm trzecich](./third-party-hardware.md)** — czytniki NFC,
analizatory filamentu, wagi USB — oraz
**[oprogramowanie zbudowane na TigerTag](../developers/integrations.md)**.

## Uniwersalna odpowiedź

Niezależnie od drukarki: przyklej chip [TigerTag](../products/tigertag.md) do
szpuli, a cały ekosystem zadziała — identyfikacja, magazyn, waga,
udostępnianie i dane filamentu przekazywane do każdej z sześciu zintegrowanych
marek.

---

**◀ Poprzednia:** [TigerScale](../products/tigerscale.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Bambu Lab](./bambu-lab.md)
