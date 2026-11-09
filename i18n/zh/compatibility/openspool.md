---
sourceHash: 81ee1b494fc9fc36fd8d7ec7337fb8d13ee657814c5dfe3b99cb3ed353fd2d7a
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

> **TODO：** 在读取支持发布时，确定并记录导入映射（OpenSpool JSON 字段 →
> TigerTag 参考 ID）。

---

**◀ 上一页：** [Klipper](./klipper.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [开发者](../developers/README.md)
