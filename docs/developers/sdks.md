# SDKs

Two official SDKs handle all TigerTag chip operations — reading the 144-byte
NTAG payload, verifying the TigerTag format, and encoding new chip data.

## JavaScript — `tigertag` (npm)

- Repo: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Published on npm as **`tigertag`**.
- Used internally by Tiger Studio; usable independently to build custom
 TigerTag-compatible tools.

```bash
npm install tigertag
```

## Python

- Repo: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Published on PyPI as **`tigertag`** — for scripts, tooling and automation.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

## Read and write a chip

Both SDKs work the same way. To read, pass the chip's UID and its pages
from `0x04`, as your NFC SDK returns them. To write, build a tag from its
fields and write the 80 bytes it returns to pages `0x04`–`0x17`. The ids come
from the [reference tables](../concepts/universal-filament-identity.md); this one is a 1 kg spool of red Rosa3D
PLA, 1.75 mm.

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

Both examples run as shown with `tigertag` 1.2.1 (npm) and 1.4.0 (PyPI).
The rest of the API (signature details, TigerTag+ cloud sync, patching a
chip, the CLI) is in each SDK's README, which is canonical:
[JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme).

## What the SDKs give you

| Capability | Description |
|---|---|
| Parse | Decode a chip dump into the filament identity (brand, material, color…) |
| Verify | Check the payload is a valid TigerTag format |
| Encode | Build a new 144-byte payload for writing to a chip |

Reference data (ID → name tables) comes from the shared database — see
[Universal filament identity](../concepts/universal-filament-identity.md).

---

**◀ Previous:** [Repositories](./repositories.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Account API](./account-api.md)
