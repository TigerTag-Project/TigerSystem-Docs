---
sourceHash: 2aa30864cfb206820e96297f6e331f24ff62e73727f540f12585f2c57cd43347
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## 它是什么

**OpenSpool** 是一种开放的社区标签标准：把耗材数据以 **NDEF JSON** 的形式
存放在 NFC Type 2 标签上——无认证、无加密，完全开放。从理念上说，它是
TigerTag 的近亲。

## TigerTag 与 OpenSpool 对比

| 方面 | TigerTag | OpenSpool |
|---|---|---|
| 载体 | NTAG，144 字节 NDEF 载荷 | NFC Type 2，NDEF JSON |
| 数据模型 | 紧凑的 ID，对照共享参考数据库解析 | 自描述 JSON |
| 云 | 可选的账号、库存、分享（[TigerSystem 账号](../concepts/inventory-and-cloud-sync.md)） | 无（仅标签的标准） |
| 真实性 | 可选——由认证制造商签名的 [TigerTag+](../products/tigertag-plus.md) 即为 **TigerTag+ Certified**，可离线验证 | 无 |
| 开放性 | 开放规范 + SDK | 开放规范 |

## 将芯片从 TigerTag 迁移到 OpenSpool

TigerTag 芯片**从不锁定写入**——TigerTag 只是线轴出厂时附带的
基础协议。如果你更喜欢 OpenSpool（或任何自定义格式），
可以随意把出厂芯片的数据重写为该格式。

## 互操作性——规范已记录，TigerData 转换开发中

OpenSpool 标签的只读解码说明保存在
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md)，
属于 Tiger Studio 中计划的多厂商 RFID 读取的一部分。

### 导入映射：OpenSpool → TigerData

这是 Tiger Studio 的 OpenSpool 读取器将采用的映射。读取 OpenSpool 标签会创建一个 **TigerData**：一条没有芯片的记录，带有新的 `TigerData_<id>`。OpenSpool 芯片不是 TigerTag 芯片，OpenSpool 标签也不指向任何目录产品，因此这条记录永远不是 TigerData+。之后写入 TigerTag 芯片时，它会像任何 TigerData 一样成为 TigerTag。

只有 JSON 中带有 `"protocol": "openspool"` 的标签才是 OpenSpool。随后按[参考表](../concepts/universal-filament-identity.md)解析其字段：

| OpenSpool | TigerData | 规则 |
|---|---|---|
| `brand` | `id_brand` | 在 `id_brand.json` 中按名称查找，不区分大小写；缺失或未知 → `Generic`（65535） |
| `type`, `subtype` | `id_material` | 在 `id_material.json` 中查找，不区分大小写，顺序为：`type-subtype`（`PLA` + `CF` → `PLA-CF`）、`type subtype`（`PLA` + `Silk` → `PLA Silk`），最后只用 `type`。`NYLON` 读作 `PA`（59328）。缺失或未知的类型会询问用户 |
| `subtype`（若材料未用到它） | `id_aspect1` | `id_aspect.json` 中同名的外观（`Matte` 读作 `Matt`，247），否则为 `Basic`（104）；无法匹配的子类型保留在记录的 `message` 中 |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | 直接复制；OpenSpool 只带一种颜色 |
| `diameter` | `id_diameter` | `1.75` → 56，`2.85` → 221；缺失 → 1.75，即 OpenSpool 的默认值；其他任何值都会询问用户 |
| `weight` | `measure`, `id_measure_unit` | 以克为单位，单位 `g`（21）；缺失 → 1000，即 OpenSpool 的默认值。线轴初始为满：`weight_available` = `weight` |
| `min_temp`, `max_temp` | 喷嘴最低和最高温度（`data2`、`data3`） | 直接复制；两者都为 `0`（缺失）时，使用材料的推荐值。`max_temp` 低于 `min_temp`：拒绝该标签，与 OpenRFID 相同 |
| — | 干燥温度和时长、热床最低和最高温度（`data4`–`data7`） | `id_material.json` 中该材料的 `recommended` 值 |
| — | `id_type` | Filament（142） |
| — | `id_aspect2` | None（255） |
| — | `id_product` | `0xFFFFFFFF`：没有目录产品 |
| — | `timestamp` | 导入的时间 |

有两条规则有意与 OpenRFID 的读取器不同：

- **热床和干燥值来自 TigerTag 参考数据库**，而不是 OpenRFID 的五行表（PLA、PETG、ABS、TPU、NYLON，其他类型一律为零）。这些值正是手动选择同一材料时 Tiger Studio 填入的值，而且 113 种材料都有。
- **材料永远不靠猜测。** OpenRFID 会把缺失的类型读作 PLA。材料错了，温度也会错，所以导入时会询问用户。

---

**◀ 上一页：** [Klipper](./klipper.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [开发者](../developers/README.md)
