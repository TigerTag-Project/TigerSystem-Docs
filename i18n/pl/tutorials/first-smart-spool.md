---
sourceHash: 753177831a2577ac01ace40f8f49b6cf943aaf385d6b6c4107fcbd9d8660d0f2
sourcePath: docs/tutorials/first-smart-spool.md
---

# Twoja pierwsza inteligentna szpula w 2 minuty

Zrób z dowolnej szpuli filamentu szpulę inteligentną — **za darmo, w domu**, z rzeczami, które
już masz albo które kosztują grosze.

## Czego potrzeba

- **Dowolny smartfon z NFC** (to jest czytnik — już masz go w kieszeni)
- **Pusty chip NTAG** — NTAG213, 215 lub 216, zalecany **okrągły 25 mm**
 (kilka groszy na Amazonie, AliExpress lub w lokalnym sklepie; nic oficjalnego nie jest wymagane)
- **Tiger NFC Connect**, darmowa aplikacja —
 [pobierz na iOS i Androida](https://tigersystem.io/download)

> Kupiłeś już filament od Rosa3D, eSun, Sunlu, R3D…? Twoja szpula może
> **już mieć chipy TigerTag** — pomiń formularz i po prostu dotknij „Scan”.

## Kroki

**Dotykasz chipa dwa razy:** raz, by zacząć, raz, by zapisać.

1. **Zainstaluj Tiger NFC Connect** i otwórz go.
2. **Dotknij „Scan”** i przyłóż telefon do pustego chipa. Aplikacja odczytuje
 go, widzi, że jest pusty, i proponuje utworzenie dla niego filamentu.
3. **Opisz swój filament** — wybierz materiał, kolor, aspekt, masę
 i tak dalej. Wybory pochodzą ze wspólnego katalogu, więc twoja
 szpula będzie rozumiana tak samo przez każdą zgodną aplikację. To krótki
 formularz; nic nie trzeba wpisywać z pamięci.
4. **Dotknij „Make”, a potem znów przyłóż telefon do chipa.** To drugie
 dotknięcie jest zapisem. Sekundę później dane są **na samym chipie** — twoja
 szpula już wie, czym jest.
5. **Przyklej chip na szpuli.**

<img src="../assets/nfc-scan.gif" width="420" alt="Dotknięcie NFC w animacji — telefon spotyka chip, szpula zidentyfikowana" />

*Cały gest w ruchu.*

### Dwa chipy na jednej szpuli — „Dual NFC”

Fabryczne szpule niosą **dwa chipy, po przeciwnych stronach**, tak aby chip
zawsze był zwrócony do czytnika ([dlaczego dwa?](../concepts/tigertag-chip.md)). Można
zrobić tak samo, w jednej sesji:

1. Zeskanuj pierwszy pusty chip i wypełnij formularz jak wyżej.
2. Przed zapisem **dotknij przycisku „Dual NFC”**.
3. **Dotknij „Make”** jak zwykle — ale teraz aplikacja prosi o chipy jeden po
 drugim: **Make 1/2**, potem **Make 2/2**. Oba chipy kończą z tą samą
 tożsamością.

> **Zawsze zaczynaj od chipa, który zeskanowałeś.** Chip, który otworzył
> tworzenie, jest tym, którego aplikacja oczekuje jako 1/2; drugi chip następuje jako 2/2.

To wszystko. Skanuj szpulę ponownie w dowolnej chwili, czytnikiem, który jest najbliżej:
dotknięcie **dowolnego telefonu z NFC** albo położenie jej na czytniku podłączonym do
[Tiger Studio Manager](../products/tiger-studio.md) (ACR122U /
[TigerPOD](../products/tigerpod.md)) — szpula przedstawia się tak czy inaczej.
Wszystko powyżej działa **w 100 % offline** — bez konta, bez chmury, bez
kosztów.

## Opcjonalnie: dodaj ją do magazynu

Chcesz mieć szpulę w zsynchronizowanym magazynie (widoczną na desktopie, możliwą do udostępnienia
znajomym)? Po prostu zgódź się na to w aplikacji, gdy zapyta — to wyraźny wybór,
nigdy nie dzieje się automatycznie.

## Co dalej?

- Połóż szpulę na [TigerScale](../products/tigerscale.md) i obserwuj, jak jej
 masa aktualizuje się na żywo.
- Otwórz [Tiger Studio](../products/tiger-studio.md) na komputerze i zobacz
 tam tę samą szpulę.
- Szpula napełniona ponownie lub zagospodarowana inaczej? Zakoduj chip na nowo —
 [Second Life](../philosophy/second-life.md).

---

**▲ [Spis dokumentacji](../../README.md)** · **Zobacz też:** [Tiger NFC Connect (aplikacja mobilna)](../products/tigertag-connect.md), [Chip TigerTag (format RFID/NFC)](../concepts/tigertag-chip.md), [FAQ](../faq/README.md)
