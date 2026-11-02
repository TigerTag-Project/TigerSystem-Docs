---
sourceHash: 19ce9f2af8d9561b6298fb076ca9ac4da141671c3caafc2201c393e1f19938a2
sourcePath: docs/developers/sdks.md
---

# SDK

Dwa oficjalne SDK obsługują wszystkie operacje na chipach TigerTag — odczyt 144-bajtowego
ładunku NTAG, weryfikację formatu TigerTag i kodowanie nowych danych chipa.

## JavaScript — `tigertag` (npm)

- Repozytorium: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Opublikowane w npm jako **`tigertag`**.
- Używane wewnętrznie przez Tiger Studio; można go używać niezależnie do budowy własnych
 narzędzi zgodnych z TigerTag.

```bash
npm install tigertag
```

## Python

- Repozytorium: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Opublikowane w PyPI jako **`tigertag`** — do skryptów, narzędzi i automatyzacji.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

> **TODO:** minimalne przykłady kodu parsowania/kodowania dla obu SDK — zaimportować je z
> README każdego SDK po ustabilizowaniu lub podlinkować bezpośrednio. Nie powtarzać tu sygnatur
> API (ryzyko rozjazdu); kanoniczne jest README każdego SDK.

## Co dają SDK

| Możliwość | Opis |
|---|---|
| Parsowanie | Dekodowanie zrzutu chipa do tożsamości filamentu (marka, materiał, kolor…) |
| Weryfikacja | Sprawdzenie, czy ładunek jest poprawnym formatem TigerTag |
| Kodowanie | Zbudowanie nowego 144-bajtowego ładunku do zapisu na chipie |

Dane referencyjne (tabele ID → nazwa) pochodzą ze wspólnej bazy danych — zob.
[Uniwersalna tożsamość filamentu](../concepts/universal-filament-identity.md).

---

**◀ Poprzednia:** [Repozytoria](./repositories.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [API konta](./account-api.md)
