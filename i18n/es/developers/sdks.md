---
sourceHash: 78a273b10943b107e10bbd727392279a149ca7f949239abddcefb18b682ba5db
sourcePath: docs/developers/sdks.md
---

# SDK

Dos SDK oficiales se encargan de todas las operaciones con chips TigerTag: leer la
carga útil NTAG de 144 bytes, verificar el formato TigerTag y codificar nuevos
datos de chip.

## JavaScript — `tigertag` (npm)

- Repositorio: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Publicado en npm como **`tigertag`**.
- Lo usa internamente Tiger Studio; se puede usar de forma independiente para
 crear herramientas propias compatibles con TigerTag.

```bash
npm install tigertag
```

## Python

- Repositorio: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Publicado en PyPI como **`tigertag`**, para scripts, herramientas y automatización.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

## Leer y escribir un chip

Los dos SDK funcionan igual. Para leer, pasa el UID del chip y sus páginas
desde `0x04`, tal como los devuelve tu SDK NFC. Para escribir, construye un tag
a partir de sus campos y escribe los 80 bytes que devuelve en las páginas
`0x04`–`0x17`. Los ids vienen de las [tablas de referencia](../concepts/universal-filament-identity.md); el
ejemplo es una bobina de 1 kg de PLA rojo Rosa3D, de 1,75 mm.

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

Para comprobar lo que escribe tu código, pega el hexadecimal de `toBytes()` o
`to_bytes()` en el [playground](https://tigersystem.io/playground): decodifica el chip campo por campo, en
el navegador.

Los dos ejemplos funcionan tal cual con `tigertag` 1.2.1 (npm) y 1.4.0
(PyPI). El resto de la API (detalles de la firma, sincronización en la nube de
TigerTag+, modificar un chip, la CLI) está en el README de cada SDK, que es la
referencia: [JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme).

## Qué te dan los SDK

| Capacidad | Descripción |
|---|---|
| Analizar | Decodificar un volcado de chip en la identidad del filamento (marca, material, color…) |
| Verificar | Comprobar que la carga útil tiene un formato TigerTag válido |
| Codificar | Construir una nueva carga útil de 144 bytes para escribirla en un chip |

Los datos de referencia (tablas ID → nombre) proceden de la base de datos
compartida; véase [Identidad universal del filamento](../concepts/universal-filament-identity.md).

---

**◀ Anterior:** [Repositorios](./repositories.md) · **▲ [Índice de la documentación](../../README.md)** · **Siguiente ▶** [API de cuenta](./account-api.md)
