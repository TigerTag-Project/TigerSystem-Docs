---
sourceHash: d588bae17f96b64547bcb21f7dcdda48bb127a18afb1bd80fef89579c926a651
sourcePath: docs/philosophy/smartphone-bridge.md
---

# Koncepcja mostu ze smartfonem

## Spostrzeżenie

> W Chinach wciąż pytaliśmy: *„Gdzie są czytniki RFID?”* Wszyscy odpowiadali:
> *„W Bambu Lab.”* Fałsz — czytniki Bambu są w AMS, nie w drukarce;
> maszyna w ogóle nie potrafi wykryć szpuli firmy trzeciej. **Czytniki RFID są
> w twoich kieszeniach** — w każdym telefonie, gotowe do użycia, choć nawet o tym nie wiesz.

Każdy współczesny smartfon zawiera czytnik NFC. To znaczy, że **każdy użytkownik druku 3D
już posiada sprzęt TigerTag** — bez własnościowego czytnika, bez modernizacji drukarki,
bez żadnego zakupu na start.

```mermaid
flowchart LR
  TAG[TigerTag chip on spool] -- NFC tap --> PHONE[Smartphone + Tiger NFC Connect]
  PHONE -- sync --> CLOUD[("Your TigerSystem account (Firebase)")]
  CLOUD --> STUDIO[Tiger Studio — desktop]
  STUDIO --> PRINTER[Connected printer]
  CLOUD --> WEB["tigersystem.io — public sharing"]
```

Telefon pełni rolę **mostu** między fizyczną szpulą a cyfrowym magazynem:

1. **Dotknij** — profil chipa (marka, materiał, kolor, ustawienia) jest odczytywany jednym gestem.
2. **Synchronizuj** — szpula natychmiast pojawia się w magazynie użytkownika w chmurze.
3. **Wszędzie** — aplikacja desktopowa, web i podłączone drukarki znają już tę szpulę.

## Natywny RFID a most

Niektóre drukarki odczytują tagi natywnie (we własnym, własnościowym formacie); większość nie
odczytuje niczego. Most sprawia, że możliwości drukarki przestają mieć znaczenie:

| Ścieżka | Wymaga | Działa z |
|---|---|---|
| **Natywny RFID** | Drukarki odczytującej zablokowany tag danego producenta | Tylko jedna marka |
| **Most ze smartfonem** | Dowolnego telefonu z NFC | **Każda drukarka**, każda marka, nawet maszyny w pełni offline |

Dzięki mostowi dane filamentu docierają do drukarki przez
[integracje drukarek Tiger Studio](../compatibility/README.md) (dziś działa
sześć marek) — szpula przedstawia się *systemowi*, a system rozmawia
z maszyną.

Dowód na przykładzie: **drukarki FlashForge w ogóle nie mają czytnika RFID** —
a dzięki mostowi mimo to współpracują z filamentem identyfikowanym przez NFC. Zupełnie
nowa funkcja, dodana do cudzych maszyn, **całkowicie za darmo dla użytkownika**
([przypadek FlashForge](../compatibility/flashforge.md)).

---

**◀ Poprzednia:** [Otwarty ekosystem](./open-ecosystem.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Przepływ pracy Second Life](./second-life.md)

**Zobacz też:** [Tiger NFC Connect](../products/tigertag-connect.md), [Przegląd architektury](../architecture/overview.md)
