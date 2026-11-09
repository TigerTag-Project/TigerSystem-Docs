---
sourceHash: 3bfc642ca4c12c68b25dafc51993b6d300b604463103c9bb8f09a3d9bafd8ec3
sourcePath: docs/philosophy/user-centric-ecosystem.md
---

# Ekosystem skupiony na użytkowniku, a nie na drukarce

> **Inteligencja w służbie użytkownika — nie tylko drukarki.**

## Dwie przeciwstawne architektury

```mermaid
flowchart TB
  subgraph M["Printer-centric (manufacturer)"]
    MP[Printer] --> MC[(Vendor cloud)]
    MT[Proprietary tag] --> MP
    MC --> MA[Vendor app]
  end
  subgraph T["User-centric (TigerSystem)"]
    TT[TigerTag chip] --> PH[Any phone]
    TT --> RD[Any NFC reader]
    TT --> PR[Any printer]
    PH & RD --> TC[("Your TigerSystem account — YOURS")]
    TC --> ANY["Any app — Studio, Connect, TigerHub, yours"]
  end
```

W świecie skupionym na drukarce to **drukarka** jest centrum: tag istnieje po to, by służyć
maszynie, a dane płyną do silosu producenta.

W TigerSystem centrum jest **użytkownik**. Użytkownik jest właścicielem:

- **filamentu** — dowolnej marki, dowolnego producenta;
- **metadanych** — materiału, koloru, ustawień druku, zakodowanych na chipie, który kontroluje;
- **magazynu** — przechowywanego na jego własnym koncie w chmurze, z możliwością eksportu;
- **historii** — wag, lokalizacji, zużycia w czasie;
- **synchronizacji** — to samo konto zasila każdą aplikację i urządzenie.

TigerSystem po prostu **łączy ze sobą wszystkie elementy**.

## Dlaczego producenci blokują RFID

Tagi producentów są zwykle blokowane kryptograficznie (szczegóły dla poszczególnych marek
znajdziesz w [sekcji zgodności](../compatibility/README.md): klucze wyprowadzane z UID,
sektory szyfrowane AES, podpisy RSA). Blokada służy producentowi: wiąże zakup materiałów
eksploatacyjnych z maszyną i utrzymuje własnościowy potok danych. Oznacza to także, że
**twój własny magazyn szpul nie należy do ciebie**.

Chipy TigerTag zajmują przeciwne stanowisko: otwarty ładunek NDEF na standardowym
chipie NTAG, publicznie udokumentowany, z otwartymi SDK do jego odczytu i zapisu.

---

**◀ Poprzednia:** [Dlaczego powstał TigerSystem](../vision/why-tigersystem.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [Otwarty ekosystem](./open-ecosystem.md)

**Zobacz też:** [Uniwersalna tożsamość filamentu](../concepts/universal-filament-identity.md), [Zgodność](../compatibility/README.md)
