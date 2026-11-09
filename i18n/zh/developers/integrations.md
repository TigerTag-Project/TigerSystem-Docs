---
sourceHash: f283703d11787d5928096fe85013ad132ac596d2e2898ee65ac2adbfbb60d0ef
sourcePath: docs/developers/integrations.md
---

# 基于 TigerTag 构建——第三方集成

开放协议的意义，就在于*其他人*用它构建出什么。这已经
开始发生——有些项目自行集成了 TigerTag：

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)**
——社区的多厂商线轴 RFID 工具包。它能读取多家厂商的
标签格式——**TigerTag 就是其中之一**：开放的载荷让加入它
变得轻而易举。

## Snapmaker U1 Extended Firmware (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)**
——一款面向 Snapmaker U1 的独立 GPL-3.0 社区固件（SSH、
摄像头串流、指标监控……还有 RFID 方面的好东西）。**借助它，Snapmaker U1
能原生读取 TigerTag——成为第一台在机器本身上读取 TigerTag 的打印机。** 正是集体行动
所瞄准的未来，经由社区提前到来。

## COSMOS——Elegoo Centauri Carbon 固件（OpenCentauri）

**[github.com/OpenCentauri/cosmos](https://github.com/OpenCentauri/cosmos)**
——一款独立的、GPL-3.0 许可的社区固件，适用于 Elegoo Centauri Carbon（用 Yocto 构建的主线 Linux，
Klipper / Kalico）。它的 Canvas RFID 模块驱动**内置于 Canvas 的 NFC 读卡器**——即这台打印机的多色单元——
并用 OpenRFID 解码芯片：**Centauri Carbon 用自己的读卡器读取 TigerTag**，无需额外硬件。

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)**——一个耗材库存
平台（网页、iOS/Android、Home Assistant、OrcaSlicer 后处理，
可自行托管）。它的线轴识别建立在 TigerTag 之上：*“用 NFC 芯片（TigerTag）标记你的
线轴，一个简单的动作就能管理你的库存。”*（英文原文：*"Mark your
spools with NFC chips (TigerTags) and manage your inventory with a simple
gesture."*）这是一款有自己愿景的第三方产品——运行在开放
协议之上，正如我们所愿。

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)**
· [stellio-app.com](https://stellio-app.com)——一款 AGPL-3.0 桌面应用
（Python，Windows），用于管理本地 3D 打印文件库：预览、
语义搜索、切片软件交接、打印队列。它的耗材部分读取
**TigerTag 库存**：登录，或让它接入已有的 Tiger Studio
会话，你的 TigerTag 线轴就会出现在它的库存中——**只读**，它从不
写入你的库存。在此基础上，它会把文件库筛选为你的
线轴真正能打印的内容，并在打印中途耗材不足之前发出警告。

---

在 TigerTag 之上构建了什么？请在
[Discord](https://discord.gg/3Qv5TSqnJH) 或通过
[GitHub 组织](https://github.com/TigerTag-Project)告诉我们——别忘了
[TigerTag Certified](../../TRADEMARK.md) 就是为经过验证的集成而设。

---

**▲ [文档索引](../../README.md)** · **另见：** [开发者概览](./README.md)、[你能构建什么？](./README.md)、[兼容性](../compatibility/README.md)
