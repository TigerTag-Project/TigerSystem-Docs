---
sourceHash: fa644ad426378c66b3be7c3a1a494a12ec2e25e0680b3cdfeb8ccffe9fb6ca28
sourcePath: docs/developers/ttag-format.md
---

# `.ttag` 文件格式

**`.ttag` 库存交换文件**是一份或多份库存材料的便携式离线快照。
它是用来**备份**你的耗材、用 U 盘**携带**它们，以及**分享**它们的单位——
在账号之间、工具之间，或作为现成的品牌/系列合集。

随 **Tiger Studio Manager v2.14.0** 引入（导出 + 导入）。该格式稳定且跨应用：
第三方工具、未来用于生成 `.ttag` 文件的网页演示场，以及预先准备好的耗材合集，都建立在这份规范之上。

## 文件结构

`.ttag` 文件是单个 **UTF-8 JSON** 文档：

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "<owner uid>",
 "records": [ /* inventory documents, verbatim */ ],
 "rfidBackups": { "<chipUid>": { /* signed factory dump */ } }
}
```

| 字段 | 含义 |
|---|---|
| `format` / `kind` | 始终为 `"tigertag"` / `"ttag"`——导入时检查的识别对 |
| `version` | 格式版本；当前为 `1` |
| `exportedAt` | 导出时间，**ISO 8601 字符串**（例如 `"2026-07-24T00:00:00.000Z"`） |
| `exportedBy` | 导出所有者的 uid——**仅作为选择导入模式的体验提示，绝不是安全边界** |
| `records[]` | 库存文档，**原样**携带 |
| `rfidBackups` | *可选。* 以芯片 UID 为键；仅存在于 TigerTag+（已认证）线轴——用于恢复芯片的已签名出厂转储 |

**`records[]` 是 Firestore 库存文档，原样携带**——正是
[权威数据模型](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration/blob/main/docs/03-data-model.md)
中记录的 `users/{uid}/inventory/{spoolId}`（把它当作字段字典使用）。三点细微说明：

- **字段是稀疏的**——只有文档上存在某字段时才会写入：
 `twin_tag_uid` 仅用于孪生，`rfidBackup: true` 仅用于 TigerTag+，
 `id_product` 仅在已知时写入，等等。
- **URL 字段由攻击者控制**——`LinkTDS`、`LinkMSDS`、
 `LinkYoutube`、`LinkREACH`、`LinkROHS`、`LinkFOOD` 和 `url_img*` 在导入时会被清理：
 任何非 http(s) 协议的内容都会被丢弃。
- **货架位置会随文件携带，但不会生效**——`rack`、`rack_id`、`level`、
 `position` 可能出现在文件中，但导入时没有意义（导入的线轴不会继承导出者的货架）。

### 必填字段与可选字段

**文件级**：

| 字段 | 状态 |
|---|---|
| `format` = `"tigertag"`、`kind` = `"ttag"`、`version` ≤ 1 | **必填**——缺失或不匹配 = 文件被拒绝 |
| `records[]`，非空 | **必填**——空文件会被拒绝 |
| `exportedAt`、`exportedBy` | 信息性（`exportedBy` 仅为体验提示） |
| `rfidBackups` | 可选——仅在包含 TigerTag+ 线轴时存在 |

**记录级**：

| 类别 | 字段 |
|---|---|
| **必填** | `uid`（`TigerData_<id>` 或芯片 UID）· **`id_brand`** |
| 核心身份（每条格式正确的记录都有） | `id_material`、`id_type`、`id_aspect1`、`id_tigertag`——对照共享参考数据库解析 |
| 容量 | 由 `measure` + `id_unit` 归一化得到：固体为以克计的 **`measure_gr`**（例如 `measure: 1` + kg → `measure_gr: 1000`），液体（树脂）为以毫升计的 **`measure_ml`**。生成器可以提供 `measure` + `id_unit`；归一化后的值才是规范的存储值 |
| 常见可选 | 颜色字段（`color_r/g/b`、`online_color_list` 等）、`weight_available`、`container_id` / `container_weight`、显示字符串（`material`、`series`、`color_name`）、`TD`、`tags`、`sku` / `barcode`、`Link*`、`url_img*` |
| 有条件 | `twin_tag_uid`（仅孪生——在文件内相互指向）· `tag_index` / `tag_count`（仅限有芯片支撑的记录——n 枚中的第 i 枚芯片，读取自芯片字节 +39，TigerTag 协议 v2.2；各占一个半字节，`0` = 未知；绝不出现在无芯片记录上）· `rfidBackup: true` **加上**匹配的 `rfidBackups` 条目（仅 TigerTag+）· `id_product`（仅已知的产品库产品） |
| 随文件携带但导入时忽略 | `rack`、`rack_id`、`level`、`position` |

对于此处未涵盖的任何边缘情形，**以 Tiger Studio 导入器为参考实现**——
第三方生成器应当以原装 Studio 能接受的记录为目标。

格式中固化的规则：

- **按设计有两种时间戳约定。** 根级的 `exportedAt` 是 **ISO 8601 字符串**。
 `records[]` *内部*的时间戳（`updatedAt`，以及旧版变体 `updated_at` / `last_update`）
 是**以毫秒计的纪元数字**——Firestore Timestamp 由序列化器转换，使文件可以干净地序列化。
 不要为了与另一种保持一致而“修正”其中一种：现存的文件已经带有这种结构。
- **孪生是原子的。** 带孪生的材料总是同时导出**两侧**——
 一种材料 → 两条记录，由 `twin_tag_uid` 相连。绝不会产生半个孪生。
- **ID 纪律。** 只允许出现无芯片的 `TigerData_<id>` id；旧版 `CLOUD_<id>` id 在导出时会被拒绝。

### 容器 (`container_id`, `container_weight`)

`container_id` 指明耗材所绕的空线盘。`container_weight` 是该空线盘的重量（克）：
秤会减去这个皮重，让库存显示净耗材重量。

这些 id 是字符串，来自 Tiger Studio 自带的一份固定列表
[`data/container_spool/spools_filament.json`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/data/container_spool/spools_filament.json)。
每个条目都带有所属品牌（`brandId`，与 `id_brand` 是同一个数字）和一个目录重量。
大多数是某个品牌自己的线盘——`bambu_grey`（249 g）、`esun_masterspool_2_0`（210 g）、
`polymaker_cardboard`（170 g）——另有三个通用条目，用于线盘尚未收录的品牌：

| `container_id` | Tiger Studio 中的显示 | 目录重量 |
|---|---|---|
| `custom_cardboard` | Generic · Cardboard | 165 g |
| `custom_plastic` | Generic · Plastic | 200 g |
| `custom_no_masterspool` | Generic · Refill — Without MasterSpool | **0 g** |

`custom_no_masterspool` 不减去任何重量。它只适用于不带任何线盘称重的补充装，
用在其他地方都是错的：带有它的线卷会显示毛重，比剩余耗材多出约 200 g。

`container_weight` 是选择容器时记下的**快照**，而不是查表。列表变化时记录保留自己的值；
账户也可以为自己的线卷修正某个容器的重量（存储在
`users/{uid}/containerOverrides/{id}`；共享列表本身从不修改）。

知道空线盘的生成器会写入这两个字段。不知道的生成器应省略它们，而不是猜测：
Tiger Studio 随后会设置该品牌自己的容器，或在有多个、或一个都没有时询问。

## 媒体类型

规范的媒体类型是 **`application/vnd.tigertag.ttag+json`**——
当 `.ttag` 通过 **http(s) 提供**时它很重要
（网页演示场、CDN 或品牌合集托管方应当发送的 `Content-Type`）。
`application/json` 同样被接受。磁盘上的文件不带 MIME——它通过 `.ttag` 扩展名识别，
并以其内容为权威：导入器**按内容验证**（`format`/`kind`/`version`），
绝不单凭 MIME 头或文件扩展名。

## 可用性

导出和导入随 **Tiger Studio v2.14.0+** 提供。该格式被设计为可移植；
其他界面可能会随时间采纳它——目前，Studio 是参考实现。

## `.ttag` 能携带什么

全部三种[线轴层级](../concepts/universal-filament-identity.md)都可以导出和导入：

| 层级 | 文件中的内容 |
|---|---|
| **TigerData**（完全数字化，无芯片） | 记录本身 |
| **TigerTag**（已写入的芯片） | 记录本身 |
| **TigerTag+**（已认证的芯片） | 记录**加上**其位于 `rfidBackups` 中的已签名出厂转储 |

## 导出

- **单个线轴**——从线轴详情的工具箱 → 文件名为
 `brand-material-color.ttag`。
- **多选**——选择若干线轴，工具栏 **导出** 按钮 → 文件名为
 `tigertag-selection-<date>.ttag`。
- 导出仅适用于**用户自己的库存**。

## 导入——验证 → 预览 → 接受

导入器可以**一次接受多个 `.ttag` 文件**：浏览、粘贴 http(s) 链接，或拖放到窗口的任何位置。

1. **验证。** 每个文件必须带有 `format`/`kind` 这一对以及
 `version ≤ 1`。非 `.ttag` 文件、更新的版本或空文件会被拒绝。
 随后每条**记录**必须带有完整的芯片载荷——参见下文*必填字段*。
2. **清理。** 文件内容是不受信任的输入：非 http(s) 的 URL 字段会被丢弃；
 颜色、重量和 TD 值会被限制在有效范围内。
3. **预览。** 每种材料都显示在预览表中，每种材料有一个**包含复选框**。
4. 以两种模式之一**接受**——根据 `exportedBy` 预先提示，可自由切换：

|| **恢复** | **导入** |
|---|---|---|
| 意图 | 同一账号 / 真正的恢复 | 采用他人的材料 |
| 记录 id | 保留——以原始 id **原样**写入 | **新** id——每条记录成为导入者拥有的全新无芯片 `TigerData_` 线轴 |
| 芯片状态 | 保留——每个 `rfidList` 备份都被恢复 | 丢弃——副本是无芯片的：`id_tigertag` 被移除，`rfidBackup:false`，备份被丢弃（已签名的转储绑定于导入者并不持有的芯片） |
| 产品 | 保留 | 当 `id_product` 是真实的产品库 id（不是 `0`，也不是 `0xFFFFFFFF`）时**保留**，因此 TigerData+ 仍是 TigerData+，TigerTag+ 则作为同一产品的 TigerData+ 到达；其他任何值都设为 `0xFFFFFFFF`（未设置）。在 Tiger Studio v2.51.1 之前，它总是未设置，所以 TigerData+ 会作为普通 TigerData 到达 |
| 重量 | 按记录 | 重置为满容量 |
| 孪生 | 按记录 | `twin_tag_uid` 通过新 id 重新映射 |

### 必填字段——记录必须能够制作出芯片

`.ttag` 的存在是为了**创建 TigerTag / TigerTag+ 芯片**。无法生成芯片的记录不是不完整的记录，而是不可用的记录——
因此自 Tiger Studio **2.15.0** 起，导入器会直接拒绝它，
而不是导入一个看起来没问题、实则悄悄出错的线轴。

只有当记录带有 **`uid` 加上以下 24 个数值字段**，且每个都存在并为有限数时，才会被接受
（`null` 和 `""` **不**算存在——请注意，`Number(null)` 是 `0`）：

| 组 | 字段 |
|---|---|
| 身份 id | `id_brand`、`id_material`、`id_type`、`id_aspect1`、`id_aspect2`、`id_diameter`、`id_measure_unit`、`id_version`、`id_product` |
| 数量 | `measure` |
| 颜色 | `color_r`、`color_g`、`color_b`、`color_a` |
| 按类型的载荷 | `data1` … `data7` |
| 时间戳 | `timestamp` |

另外还有 **`id_tigertag`，但仅当记录有芯片时**。该字段指明芯片在 `id_version.json` 中的版本，
其中恰好只有四个合法值——`0`
RFID Empty、`1542820452` TigerTag、`1816240865` TigerTag Init、`3155151767`
TigerTag+。无芯片的记录（`uid` 以 `TigerData_` 或旧版 `CLOUD_` 开头）
没有芯片，因此也没有版本，所以**根本不得携带该字段**；
它会在真正的芯片被编程时首次写入。绝不要为它编造值，
也绝不要在未检查记录是否有芯片的情况下解析出一个值。

记录中的其他一切——名称、图片、价格、备注、货架位置——都是**增补信息**：携带更好，但从不必填。

**材料是原子的。** 孪生对只有在*两条*记录都通过时才通过；
只有一半有效的孪生会被整体拒绝，因为只导入一对中的一侧，
会创建一个其伙伴永远无法写入的线轴。

**拒绝会被统计并显示，绝不会悄无声息。** 预览会报告有多少材料被拒之门外，
这样错误的导出是可见的，而不是悄悄丢掉一半内容。
`.ttag` 文件的编写者在向用户发布文件之前，应当对照此列表进行验证。

## 完整示例

一份忠实、已匿名的多选导出——一条 TigerData，一对孪生
（相互指向的 `twin_tag_uid`），一条芯片内容已备份的 TigerTag+：

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "AbCdEf0123456789GhIjKlMnOpQr",
 "records": [
  {
   "uid": "TigerData_9F3A2B1C",
   "id_brand": 12, "id_material": 3, "id_type": 1,
   "id_aspect1": 2, "id_aspect2": 0, "id_tigertag": 74213,
   "material": "PLA Basic", "color_name": "Sky Blue",
   "color_r": 88, "color_g": 170, "color_b": 220,
   "online_color_list": "58AADC", "online_color_type": 1,
   "measure_gr": 1000, "weight_available": 640,
   "container_id": "custom_plastic", "container_weight": 200,
   "TD": 0, "tags": ["desk", "prototyping"],
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04A1B2C3D4E5F6",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55010,
   "material": "PLA Silk", "color_name": "Gold",
   "color_r": 212, "color_g": 175, "color_b": 55,
   "online_color_list": "D4AF37",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04F6E5D4C3B2A1", "tag_index": 1, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04F6E5D4C3B2A1",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55011,
   "material": "PLA Silk", "color_name": "Emerald",
   "color_r": 0, "color_g": 130, "color_b": 90,
   "online_color_list": "00825A",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04A1B2C3D4E5F6", "tag_index": 2, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04112233445566",
   "id_brand": 5, "id_material": 8, "id_type": 1,
   "id_aspect1": 2, "id_tigertag": 90887, "id_product": 4412,
   "material": "PETG HF Basic", "series": "Hyper PETG",
   "color_name": "Green",
   "color_r": 0, "color_g": 160, "color_b": 70,
   "online_color_list": "00A046",
   "measure_gr": 1000, "weight_available": 480,
   "container_id": "custom_plastic", "container_weight": 200, "TD": 6,
   "LinkTDS": "https://example-brand.example/tds/petg-hf-basic.pdf",
   "sku": "RFHPPETG175GN1",
   "rfidBackup": true, "updatedAt": 1769212800000
  }
 ],
 "rfidBackups": {
  "04112233445566": {
   "firstSeen": 1767139200000,
   "backup": "0411223344556680048000000000E110122F0300FE0000A5A5C0FFEE112233445566778899…"
  }
 }
}
```

解读示例：第一条记录是无芯片的（`TigerData_` id）；接下来两条是一对孪生——
同一种材料，相互指向的 `twin_tag_uid`，始终一起导出；
最后一条是 TigerTag+（`rfidBackup: true`），其已签名的出厂转储位于 `rfidBackups` 中，以其芯片 UID 为键。

## 安全 / 信任模型

`.ttag` 文件是**不受信任的输入**。每条记录在导入时都会被清理（见上文）。
`exportedBy` 只会在界面中预先选择模式——真正的授权边界是 **Firestore 安全规则**。
绝不要把文件内容当作身份或所有权的权威依据。

---

**▲ [文档索引](../../README.md)** · **另见：** [通用耗材身份](../concepts/universal-filament-identity.md)、[库存与云同步](../concepts/inventory-and-cloud-sync.md)、[开发者概览](./README.md)
