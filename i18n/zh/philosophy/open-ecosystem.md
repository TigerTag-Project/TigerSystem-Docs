---
sourceHash: d0916e0c9a494ef3d8620767cdde6038765b5d5a3a137055136edfe232577136
sourcePath: docs/philosophy/open-ecosystem.md
---

# 开放生态理念

## 一切皆开放

TigerSystem 的每一层都已公开——硬件、固件、SDK、应用、文档：

| 层 | 项目 | 许可证 |
|---|---|---|
| 桌面应用 | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| JS SDK（npm `tigertag`） | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Apache-2.0 |
| Python SDK | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Apache-2.0 |
| 秤的硬件 + 固件（V3，当前版本） | [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | MIT |
| 秤的硬件 + 固件（V2） | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| 读卡器支架（STL + 文档） | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| 芯片格式指南 | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | CC BY 4.0 |
| 云集成文档 | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| 本文档 | TigerSystem-Docs | CC BY 4.0 |

## 是沙盒，不是围墙花园

**整个面向用户的生态**有意被设计成**一个实验室，而不是终点**。
每一款产品——[Tiger Studio](../products/tiger-studio.md)、移动应用、
[TigerScale](../products/tigerscale.md)、[TigerPOD](../products/tigerpod.md)——
都是一次可运行的演示，展示一旦线轴能够自我识别，开放且有文档的技术能带来什么：
横跨六个品牌的打印机实时遥测、实体货架映射、传感器、共享库存。
其中一些会逐渐成熟，一些只是为了证明某个观点，而所有这些都可读、可分叉、可自由复制。
每一款产品——无论现在还是将来——都是一个**开源、标准、与厂商无关、跨平台协议**的**概念验证**：
它唯一的任务就是展示潜力，让任何人都能把我们的集成工作当作灵感，去设想明天的功能。

## 构建你自己的

TigerTag 是一个开放的**协议**，而不是一个你必须加入的平台：

1. 阅读芯片格式（[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)）。
2. 选一个 [SDK](../developers/sdks.md)。
3. 连接到[云](../developers/account-api.md)——也可以不连；芯片离线也能工作。
4. 交付你真正想要的软件、硬件或业务。

你的应用完全可以是别的东西——它依然会使用同样的芯片。
一部带 NFC 的手机、一台 ACR122U USB 读卡器——或者一块自制的、带 PN532/RC522 模块的 ESP32（TigerScale 风格）——
就是它所需的全部硬件：把线轴身份接入 ERP、内部库存工具、追踪工作流、创客空间借用系统、私人或公开的研发项目——任何地方。

---

**◀ 上一页：** [以用户为中心的生态](./user-centric-ecosystem.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [智能手机桥接](./smartphone-bridge.md)

**另见：** [开发者概览](../developers/README.md)、[产品](../products/README.md)
