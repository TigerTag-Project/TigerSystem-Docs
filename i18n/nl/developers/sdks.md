---
sourceHash: 78a273b10943b107e10bbd727392279a149ca7f949239abddcefb18b682ba5db
sourcePath: docs/developers/sdks.md
---

# SDK's

Twee officiële SDK's verzorgen alle bewerkingen op TigerTag-chips — de 144-byte
NTAG-payload lezen, het TigerTag-formaat verifiëren en nieuwe chipdata coderen.

## JavaScript — `tigertag` (npm)

- Repo: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Gepubliceerd op npm als **`tigertag`**.
- Intern gebruikt door Tiger Studio; los te gebruiken om eigen
 TigerTag-compatibele tools te bouwen.

```bash
npm install tigertag
```

## Python

- Repo: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Gepubliceerd op PyPI als **`tigertag`** — voor scripts, tooling en automatisering.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

## Een chip lezen en schrijven

Beide SDK's werken op dezelfde manier. Om te lezen geef je de UID van de chip
en zijn pagina's vanaf `0x04` door, zoals je NFC-SDK ze teruggeeft. Om te
schrijven bouw je een tag uit zijn velden en schrijf je de 80 bytes die hij
teruggeeft naar de pagina's `0x04`–`0x17`. De id's komen uit de
[referentietabellen](../concepts/universal-filament-identity.md); het voorbeeld is een spoel van 1 kg rode Rosa3D
PLA, 1,75 mm.

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

Om te controleren wat je code schrijft, plak je de hex van `toBytes()` of
`to_bytes()` in de [playground](https://tigersystem.io/playground): die decodeert de chip veld voor veld,
in de browser.

Beide voorbeelden werken zo met `tigertag` 1.2.1 (npm) en 1.4.0 (PyPI). De
rest van de API (details van de handtekening, cloudsync voor TigerTag+, een chip
patchen, de CLI) staat in de README van elke SDK, die leidend is:
[JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme).

## Wat de SDK's je geven

| Mogelijkheid | Beschrijving |
|---|---|
| Parse | Een chipdump decoderen naar de filamentidentiteit (merk, materiaal, kleur…) |
| Verify | Controleren of de payload een geldig TigerTag-formaat is |
| Encode | Een nieuwe payload van 144 bytes opbouwen om naar een chip te schrijven |

Referentiedata (ID → naamtabellen) komt uit de gedeelde database — zie
[Universele filamentidentiteit](../concepts/universal-filament-identity.md).

---

**◀ Vorige:** [Repositories](./repositories.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Account-API](./account-api.md)
