---
sourceHash: a907d2b3c8f6691d3cf0622da7203cc0fd523fec84b2e43dbda88c857ae0a5d8
sourcePath: docs/developers/sdks.md
---

# SDKs

Dois SDKs oficiais cuidam de todas as operações com chips TigerTag — ler o payload
NTAG de 144 bytes, verificar o formato TigerTag e codificar novos dados de chip.

## JavaScript — `tigertag` (npm)

- Repositório: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Publicado no npm como **`tigertag`**.
- Usado internamente pelo Tiger Studio; pode ser usado de forma independente para criar
 ferramentas personalizadas compatíveis com o TigerTag.

```bash
npm install tigertag
```

## Python

- Repositório: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Publicado no PyPI como **`tigertag`** — para scripts, ferramentas e automação.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

## Ler e gravar um chip

Os dois SDKs funcionam do mesmo jeito. Para ler, passe o UID do chip e suas
páginas a partir de `0x04`, como o seu SDK NFC os retorna. Para gravar, monte
um tag a partir dos seus campos e grave os 80 bytes que ele retorna nas páginas
`0x04`–`0x17`. Os IDs vêm das [tabelas de referência](../concepts/universal-filament-identity.md); o exemplo é
um carretel de 1 kg de PLA vermelho Rosa3D, 1,75 mm.

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

Para conferir o que o seu código grava, cole o hexadecimal de `toBytes()` ou
`to_bytes()` no [playground](https://tigersystem.io/playground-tigertag): ele decodifica o chip campo a campo, no
navegador.

Os dois exemplos rodam assim com `tigertag` 1.2.1 (npm) e 1.4.0 (PyPI). O
resto da API (detalhes da assinatura, sincronização em nuvem do TigerTag+,
alterar um chip, a CLI) está no README de cada SDK, que é a referência:
[JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme).

## O que os SDKs oferecem

| Capacidade | Descrição |
|---|---|
| Ler (Parse) | Decodifica um dump de chip na identidade do filamento (marca, material, cor…) |
| Verificar (Verify) | Confere se o payload está em um formato TigerTag válido |
| Codificar (Encode) | Monta um novo payload de 144 bytes para gravar em um chip |

Os dados de referência (tabelas ID → nome) vêm do banco de dados compartilhado — veja
[Identidade universal do filamento](../concepts/universal-filament-identity.md).

---

**◀ Anterior:** [Repositórios](./repositories.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [API de conta](./account-api.md)
