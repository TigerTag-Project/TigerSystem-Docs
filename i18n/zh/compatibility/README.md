---
sourceHash: e7b7c04f1668fe717ad7b48ac2cc3860f2a28e40c1c8e39db72c30fde1f7810f
sourcePath: docs/compatibility/README.md
---

# 兼容性

TigerSystem 如何与各个打印机生态协同工作。两条相互独立的轴线：

- **打印机连接**——Tiger Studio 通过局域网与机器通信
 （遥测、耗材槽位、任务、摄像头）。**目前已有六个品牌上线。**
- **原生 RFID**——读取厂商自己的线轴标签。按厂商分别记录。
 应用内直接解码**尚未集成**（合适的互操作模式仍是一个悬而未决的问题）；
 目前的工作目标是**把厂商标签数据转换为 TigerData 数字线轴**，
 这样其他品牌的耗材也能在生态系统中被扫描和管理。与此同时，
 TigerTag 芯片本身已经可以通过
 [智能手机桥接](../philosophy/smartphone-bridge.md)与所有打印机配合使用。

## 矩阵

| 生态 | 打印机连接（Tiger Studio） | 原生标签格式 | 原生标签锁定 | RFID 读取状态 |
|---|---|---|---|---|
| <img src="../assets/brands/bambulab.svg" width="14" alt="" /> [Bambu Lab](./bambu-lab.md) | **已上线**——MQTTS + AMS | Mifare Classic 1K | HKDF-SHA256，由 UID 派生密钥 | 规范已记录 |
| <img src="../assets/brands/creality.svg" width="14" alt="" /> [Creality](./creality.md) | **已上线**——WebSocket + CFS | Mifare Classic 1K | AES-128-ECB 扇区密钥 | 规范已记录 |
| <img src="../assets/brands/elegoo.svg" width="14" alt="" /> [Elegoo](./elegoo.md) | **已上线**——MQTT + Canvas | Mifare Ultralight | 仅魔术字节 | 规范已记录 |
| <img src="../assets/brands/flashforge.svg" width="14" alt="" /> [FlashForge](./flashforge.md) | **已上线**——HTTP + IFS | —（机器没有 RFID 读卡器） | — | TigerTag 为其加入 NFC，零成本 |
| <img src="../assets/brands/anycubic.svg" width="14" alt="" /> [Anycubic](./anycubic.md) | **已上线**——MQTTS 局域网 + 云，ACE | Mifare Ultralight | 无 | 规范已记录 |
| <img src="../assets/brands/snapmaker.svg" width="14" alt="" /> [Snapmaker](./snapmaker.md) | **已上线**——Moonraker WebSocket + 4 个槽位 | Mifare Classic 1K | HKDF + RSA-2048 签名 | 规范已记录 |
| [Klipper](./klipper.md) | **已上线（beta）**——Moonraker + Happy Hare / AFC | 不适用 | 不适用 | 不适用 |
| [OpenSpool](./openspool.md) | 不适用（是标签标准，不是打印机） | NFC Type 2，NDEF JSON | 无——开放标准 | 规范已记录 |
| Qidi | 未集成 | Mifare Classic 1K | 默认密钥 | [规范已记录](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/qidi.md) |

> **说明：** 各厂商的 RFID 说明表（只读解码规范，源自
> [OpenRFID](https://github.com/suchmememanyskill/OpenRFID) 项目）
> 维护在 Tiger Studio 仓库的
> [`docs/rfid-vendors/`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/tree/main/docs/rfid-vendors)
> 下——这里只提供链接，不重复收录。

## 标签格式并排对比

TigerTag、OpenPrintTag、OpenTag3D、OpenSpool、Bambu Lab 和 Creality CFS，逐项数字并附来源：
**[线轴标签格式对比](./tag-formats.md)**。

## 不止打印机

兼容性不只关乎打印机：请参阅不断增长的
**[兼容的第三方硬件](./third-party-hardware.md)**列表——NFC
读卡器、耗材分析仪、USB 秤——以及
**[基于 TigerTag 构建的软件](../developers/integrations.md)**。

## 通用答案

无论是什么打印机：在线轴上贴一枚 [TigerTag](../products/tigertag.md) 芯片，
整个生态系统就能运转——识别、库存、重量、分享，以及推送到六个已集成品牌中任何一个的耗材数据。

---

**◀ 上一页：** [TigerScale](../products/tigerscale.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [Bambu Lab](./bambu-lab.md)
