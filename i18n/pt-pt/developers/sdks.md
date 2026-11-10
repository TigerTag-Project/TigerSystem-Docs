---
sourceHash: 442ad60629425e6204e63477c4fca050cf440f131defb1307e50fea7c1944670
sourcePath: docs/developers/sdks.md
---

# SDKs

Dois SDKs oficiais tratam de todas as operações com chips TigerTag — ler o payload NTAG de 144 bytes, verificar o formato TigerTag e codificar novos dados de chip.

## JavaScript — `tigertag` (npm)

- Repositório: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Publicado no npm como **`tigertag`**.
- Usado internamente pelo Tiger Studio; utilizável de forma independente para criar ferramentas personalizadas compatíveis com o TigerTag.

```bash
npm install tigertag
```

## Python

- Repositório: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Publicado no PyPI como **`tigertag`** — para scripts, ferramentas e automatização.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

## Ler e escrever um chip

Os dois SDK funcionam da mesma forma. Para ler, passe o UID do chip e as
respetivas páginas a partir de `0x04`, tal como o seu SDK NFC as devolve. Para
escrever, construa um tag a partir dos seus campos e escreva os 80 bytes que
devolve nas páginas `0x04`–`0x17`. Os IDs vêm das
[tabelas de referência](../concepts/universal-filament-identity.md); o exemplo é uma bobina de 1 kg de PLA vermelho
Rosa3D, de 1,75 mm.

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

Os dois exemplos funcionam assim com `tigertag` 1.2.1 (npm) e 1.4.0 (PyPI).
O resto da API (pormenores da assinatura, sincronização na nuvem do TigerTag+,
alterar um chip, a CLI) está no README de cada SDK, que é a referência:
[JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme).

## O que os SDKs oferecem

| Capacidade | Descrição |
|---|---|
| Parse | Descodifica um dump de chip para a identidade do filamento (marca, material, cor…) |
| Verify | Verifica se o payload tem um formato TigerTag válido |
| Encode | Constrói um novo payload de 144 bytes para escrever num chip |

Os dados de referência (tabelas ID → nome) vêm da base de dados partilhada — ver [Identidade universal do filamento](../concepts/universal-filament-identity.md).

---

**◀ Anterior:** [Repositórios](./repositories.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [API de conta](./account-api.md)
