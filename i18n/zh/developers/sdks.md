---
sourceHash: 442ad60629425e6204e63477c4fca050cf440f131defb1307e50fea7c1944670
sourcePath: docs/developers/sdks.md
---

# SDK

两个官方 SDK 负责处理所有 TigerTag 芯片操作——读取 144 字节
NTAG 载荷、校验 TigerTag 格式，以及编码新的芯片数据。

## JavaScript — `tigertag`（npm）

- 仓库：[TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS)（Apache-2.0）
- 以 **`tigertag`** 为名发布在 npm 上。
- Tiger Studio 内部使用；也可独立使用，用来构建自定义的
 TigerTag 兼容工具。

```bash
npm install tigertag
```

## Python

- 仓库：[TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python)（Apache-2.0）
- 以 **`tigertag`** 为名发布在 PyPI 上——适用于脚本、工具和自动化。

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

## 读取和写入芯片

两个 SDK 的用法相同。读取时，传入芯片的 UID 以及从 `0x04` 开始的页，即你的 NFC SDK 返回的内容。写入时，用各字段构建一个标签，再把它返回的 80 个字节写入页 `0x04`–`0x17`。ID 来自[参考表](../concepts/universal-filament-identity.md)；示例是一卷 1 kg、1.75 mm 的红色 Rosa3D PLA。

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

两个示例在 `tigertag` 1.2.1（npm）和 1.4.0（PyPI）下可按原样运行。API 的其余部分（签名细节、TigerTag+ 云同步、修改芯片、CLI）见各 SDK 的 README，以其为准：[JavaScript](https://github.com/TigerTag-Project/TigerTag-SDK-JS#readme) · [Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python#readme)。

## SDK 能为你做什么

| 能力 | 说明 |
|---|---|
| 解析 | 把芯片转储解码为耗材身份（品牌、材料、颜色……） |
| 校验 | 检查载荷是否为有效的 TigerTag 格式 |
| 编码 | 构建新的 144 字节载荷，用于写入芯片 |

参考数据（ID → 名称对照表）来自共享数据库——参见
[通用耗材身份](../concepts/universal-filament-identity.md)。

---

**◀ 上一页：** [仓库](./repositories.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [账号 API](./account-api.md)
