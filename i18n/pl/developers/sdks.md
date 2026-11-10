---
sourceHash: 78a273b10943b107e10bbd727392279a149ca7f949239abddcefb18b682ba5db
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

## Odczyt i zapis chipa

Oba SDK działają tak samo. Aby odczytać, przekaż UID chipa i jego strony od
`0x04`, tak jak zwraca je Twój SDK NFC. Aby zapisać, zbuduj tag z jego pól i
zapisz zwrócone 80 bajtów na strony `0x04`–`0x17`. Identyfikatory pochodzą z
[tabel referencyjnych](../concepts/universal-filament-identity.md); przykład to szpula 1 kg czerwonego PLA Rosa3D,
1,75 mm.

### JavaScript

```js
const { TigerTag } = require('tigertag');

// Read
const tag = TigerTag.fromPages(uid, payload);
console.log(tag.pretty());
console.log(String(tag.verify()));   // VALID / NOT SIGNED / INVALID

// Write
const spool = TigerTag.create({
  uid,
  idType: 142,          // Filament
  idMaterial: 38219,    // PLA
  idBrand: 19961,       // Rosa3D
  idAspect1: 104,       // Basic
  idDiameter: 56,       // 1.75 mm
  color1R: 255, color1G: 0, color1B: 0, color1A: 255,
  measure: 1000, idUnit: 21,   // 1000 g
  nozzleTempMin: 195, nozzleTempMax: 230,
});
const bytes = spool.toBytes();   // 80 bytes
```

### Python

```python
from tigertag import TigerTag

# Read
tag = TigerTag.from_pages(uid, payload)
print(tag.pretty())
print(tag.verify())                # VALID / NOT SIGNED / INVALID

# Write
spool = TigerTag.create(
    uid=uid,
    id_type=142,          # Filament
    id_material=38219,    # PLA
    id_brand=19961,       # Rosa3D
    id_aspect_1=104,      # Basic
    id_diameter=56,       # 1.75 mm
    color1_r=255, color1_g=0, color1_b=0, color1_a=255,
    measure=1000, id_unit=21,    # 1000 g
    nozzle_temp_min=195, nozzle_temp_max=230,
)
data = spool.to_bytes()            # 80 bytes
```

Aby sprawdzić, co zapisuje Twój kod, wklej hex z `toBytes()` lub
`to_bytes()` do [playgroundu](https://tigersystem.io/playground): dekoduje chip pole po polu, w
przeglądarce.

Oba przykłady działają w tej postaci z `tigertag` 1.2.1 (npm) i 1.4.0
(PyPI). Reszta API (szczegóły podpisu, synchronizacja chmurowa TigerTag+,
modyfikacja chipa, CLI) jest w README każdego SDK, które jest wiążące:
[JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme).

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
