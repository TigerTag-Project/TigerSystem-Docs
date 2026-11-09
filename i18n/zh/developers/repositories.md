---
sourceHash: e105c9b75119b7aa7e2595e49787f989d06420d64516400b94f1e220a313c3e2
sourcePath: docs/developers/repositories.md
---

# 仓库地图

所有公开仓库都位于 **[TigerTag-Project](https://github.com/TigerTag-Project)** GitHub 组织之下。

| 仓库 | 它是什么 | 许可证 |
|---|---|---|
| **TigerSystem-Docs**（本仓库） | 生态系统文档——权威入口 | CC BY 4.0 |
| [TigerTag-Studio-Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | Tiger Studio 桌面应用（Electron） | MIT |
| [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | JavaScript SDK——npm 包 `tigertag` | Apache-2.0 |
| [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Python SDK | Apache-2.0 |
| [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | 权威的芯片格式规范 | CC BY 4.0 |
| [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | 云集成契约 + 可运行示例 | CC BY 4.0 |
| [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | TigerScale **V3**（当前）——ESP32-S3、触摸屏、双 PN532、电池 | MIT |
| [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | TigerScale V2（上一代——硬件不同） | MIT |
| [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | 可 3D 打印的双读卡器支架 | CC BY 4.0 |
| [TigerSpool-RFID](https://github.com/TigerTag-Project/TigerSpool-RFID) | 打印机端线轴扫描仪——ESP32-S3 + PN532、触摸屏、跨品牌 | MIT |
| [Tiger-Touch](https://github.com/TigerTag-Project/Tiger-Touch) | BIGTREETECH Panda Touch / K-Touch 屏幕的固件——所有打印机品牌集于一块显示屏 | MIT |
| [FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud](https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud) | Creator 5 / 5 Pro 的 FlashForge 官方固件——云和局域网同时可用，由 FlashForge 与 TigerTag 共同打造 | 见仓库 |

## 哪个仓库对什么是权威

为避免文档漂移，每个事实都恰好只有**一个**归属之处：

| 主题 | 权威位置 |
|---|---|
| 生态系统概览、理念、产品页面、FAQ | **本仓库** |
| `.ttag` 交换文件格式 | **本仓库**（[规范](./ttag-format.md)） |
| 芯片字节级格式 | TigerTag-RFID-Guide |
| Firestore 数据模型与认证流程 | TigerTag_Firebase_Integration（`docs/`） |
| 打印机局域网协议（按品牌） | TigerTag-Studio-Manager（`renderer/printers/<brand>/PROTOCOL.md`） |
| 厂商 RFID 解码表 | TigerTag-Studio-Manager（`docs/rfid-vendors/`） |
| 应用功能目录与更新日志 | TigerTag-Studio-Manager（`FEATURES.md`、`CHANGELOG.md`） |

> **说明：** 移动应用（Tiger NFC Connect）、TigerHub 和后端仓库目前不公开。

---

**◀ 上一页：** [开发者概览](./README.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [SDK](./sdks.md)
