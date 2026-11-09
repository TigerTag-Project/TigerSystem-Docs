---
sourceHash: 84d231fb87c4fd823cec2ac0222e3cb1b09833f4aa4542b04b027eaab4a89a20
sourcePath: docs/compatibility/tag-formats.md
---

# 线轴标签格式对比

如今耗材线轴上使用着六种 NFC/RFID 格式。本页截至 2026 年 11 月 6 日将它们并排列出，每个数字都取自
该格式自己的规范；Bambu Lab 和 Creality 没有官方规范，则取自公开的逆向工程成果。本页只做描述，
不做排名。[OpenSpool](./openspool.md) 和 [OpenTag3D](./opentag3d.md) 有各自的页面。

| | **TigerTag** | [OpenPrintTag][opt] | [OpenTag3D][ot3d] | [OpenSpool][osp] | Bambu Lab（[逆向工程][bbl]） | Creality CFS（[逆向工程][cfs]） |
|---|---|---|---|---|---|---|
| 芯片 | NTAG213 / NTAG215 | NFC-V，ICODE SLIX2（320 B） | NTAG215 / NTAG216 | NTAG215 / NTAG216 | MIFARE Classic 1K | MIFARE Classic 1K |
| 一条完整记录的字节数 | **80**（+ 64 B 签名） | 176（标签上 248 B） | 224 | 126（JSON） | 未记录（1 KB 芯片） | 48 |
| 颜色数，最多 | 3 | 6 | 4 | 1 | 2 | 1 |
| 喷嘴与热床最低 / 最高温度 | 有 | 有 | 有 | 仅喷嘴 | 喷嘴；热床一个值 | 无 |
| 干燥温度与时长 | 有 | 有 | 有 | 无 | 有 | 无 |
| 芯片上的剩余量 | 有 | 有 | 无 | 无 | 无 | 无 |
| HueForge TD | 有 | 有 | 有 | 无 | 无 | 无 |
| 自由文本留言 | 28 B | 无 | 无 | 无 | 无 | 无 |
| 可离线验证的签名 | ECDSA-P256，公钥已公开 | 无 | 无 | 无 | RSA-2048，公钥未公开 | 无 |
| 芯片可重写 | 是 | 是 | 是 | 是 | 否（修改后会被拒绝） | 否 |
| 开放的离线产品库 | **20,348 个产品** | 15,874 个包装规格 | 无 | 无 | 无 | 无 |
| 出厂后的芯片修正 | 面向所有品牌的一个开放、标准化 API；SDK 对比并修补芯片，签名保持有效 | 无 | 可选的 `data_url`，指向每个制造商自建自托管的 API；没有通用格式、SDK 或更新流程 | 无 | 无 | 无 |

## 表格说明了什么

- **最紧凑的完整记录。** TigerTag 用 80 字节存下一条完整的打印记录——温度、干燥、数量、颜色、TD——
  而 OpenPrintTag 需要 176 字节，OpenTag3D 需要 224 字节。两种更小的记录承载的内容更少：
  Creality 的 48 字节不含任何温度，OpenSpool 的 126 字节只有七个字段。它也是这里唯一一种连同签名
  都能装进 NTAG213 的格式。
- **借助产品库实现离线完整。** TigerTag+ 的产品 id 会对照内置的公开产品库解析——20,348 个产品，
  含名称、系列、SKU、条形码、照片和补充装标记——无需网络，也无需账号。
- **可预期的更新。** 品牌只需在所有品牌共用的 API 上修正一次产品；之后任何读卡器都会修补已售出的芯片。
- **芯片上的字段并不是最多的。** OpenPrintTag 承载更多颜色以及 TigerTag 没有的字段（GTIN、长度）。
  TigerTag 的不同之处在于组合：用很少的字节存下完整记录、可离线验证的签名，以及一个超过
  20,000 个产品的开放产品库，全部在一枚 NTAG213 上。

## 来源

- OpenPrintTag：[字段列表][opt]，大小取自参考测试向量
  [`01_info.yaml`](https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/tests/encode_decode/01_info.yaml)，
  产品库数量取自 [openprinttag-database](https://github.com/OpenPrintTag/openprinttag-database) 的 README。
- OpenTag3D：[规范][ot3d]及其
  [内存映射](https://github.com/GooborgStudios/OpenTag3D/blob/main/_data/spec.json)。
- OpenSpool：[标签格式][osp]，大小取自其文档中的示例。
- Bambu Lab：[RFID Tag Guide][bbl]（Bambu Research Group，逆向工程）。
- Creality CFS：[K2-RFID][cfs]（逆向工程）。
- TigerTag：[规范](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#how-tigertag-compares)。

某个数字有误或已过时？请提交 issue：本页接受纠正，而不是为自己辩护。

[opt]: https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/data/main_fields.yaml
[ot3d]: https://github.com/GooborgStudios/OpenTag3D/blob/main/spec.md
[osp]: https://github.com/spuder/OpenSpool/blob/main/docs/rfid.md
[bbl]: https://github.com/Bambu-Research-Group/RFID-Tag-Guide/blob/main/BambuLabRfid.md
[cfs]: https://github.com/DnG-Crafts/K2-RFID

---

**◀ 上一页：** [OpenTag3D](./opentag3d.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [开发者](../developers/README.md)

**另见：** [兼容性](./README.md)、[TigerTag+ Certified](../products/tigertag-plus-certified.md)
