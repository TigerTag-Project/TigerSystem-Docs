---
sourceHash: 0da2b619f681b73709bf69f7a267703c5e222bb752d614aa97a95027294187e1
sourcePath: docs/compatibility/flashforge.md
---

# FlashForge

## 打印机连接——**已上线**

| 方面 | 详情 |
|---|---|
| 协议 | HTTP 轮询（端口 8898）+ TCP M 代码（端口 8899） |
| 发现 | UDP 组播（225.0.0.9:19000） |
| 耗材 | IFS——FlashForge 的多耗材系统 |
| 摄像头 | MJPEG 流 |
| 遥测 | 温度、任务进度 |

## 原生 RFID——无：机器没有读卡器

FlashForge 打印机**不带任何 RFID 读卡器**，也没有自己的 RFID 格式。
这使它成为 TigerSystem 优势最清晰的示范：
**我们让 FlashForge 机器能够使用经 NFC 识别的耗材——
靠的是用户智能手机里现成的 NFC 读卡器。**
一项全新的能力，被添加到别人的打印机上，
**完全免费，用户零成本，机器零改动。**

## FlashForge × TigerSystem——官方固件

FlashForge 自己的工程团队为 **Creator 5** 和 **Creator 5 Pro** 打造了一个固件，可让
**FlashForge 云和局域网同时运行**。

这件事的意义比听上去更大。原厂固件让你二选一：开启云之后，本地工具就再也无法访问打印机。
这个选择曾是 FlashForge 用户与这个生态系统之间唯一的障碍——现在它不复存在。
这是**FlashForge 官方固件**，不是社区分支，也不是补丁——
它与 TigerTag 共同打造，专为此次集成而生，并经他们同意在此发布。

<div class="ts-model-picker">
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/"><img src="../assets/flashforge-connection-tutorial/models/creator-5.png" alt="FlashForge Creator 5" /><span>Creator 5</span></a>
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/"><img src="../assets/flashforge-connection-tutorial/models/creator-5-pro.png" alt="FlashForge Creator 5 Pro" /><span>Creator 5 Pro</span></a>
</div>

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/">下载——Creator 5</a>
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/">下载——Creator 5 Pro</a>
<a href="https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud"><img src="../assets/icons/github.svg" alt="" /> 源代码与安装指南</a>
</div>

通过 U 盘安装。任何人都可免费使用，无论是否拥有 TigerTag 硬件。

### 刷好之后如何连接

在打印机的设置中**开启局域网模式**——这就是固件带来的全部改动。
随后 Tiger Studio 会通过**自动发现**找到它，
或者你用它的 **IP 地址**手动添加。
不必再在云和本地工具之间二选一：两者同时在线。

| | 原厂固件 | 使用此固件 |
|---|:---:|:---:|
| FlashForge 云——应用、远程访问 | ✅ | ✅ |
| 局域网访问——你网络上的本地工具 | ✅ | ✅ |
| **两者同时可用** | ❌ | ✅ |
| **开启云时**使用 Tiger Studio、Tiger NFC Connect 和 TigerSpool | ❌ | ✅ |

### 无需放弃任何东西

用户保留 FlashForge 云的全部功能，并在此之上获得整个生态系统：
桌面上免费、开源的**耗材与打印机管理器**，
能读写线轴的**手机**，以及 **[TigerSpool](../products/tigerspool.md)**——
一个开源读卡器盒子，放在机器旁边，列表中最多保存 **24
台打印机**，其中十台可同时连接——一个盒子管住整个架子。

于是，一台没有读卡器、也没有自己格式的打印机，现在能读取任何使用 TigerTag 的耗材品牌的芯片——
也能读取创客在家自己贴标签的线轴，哪怕那些耗材出厂时从未带过芯片。

打印机制造商向一个不属于自己的生态系统开放自家机器，是一个罕见的决定。
每一位拥有这类机器的用户都从中受益。

## 工作流程

1. **添加打印机**——通过网络扫描（UDP 组播）找到，此时只需要它的打印机 ID；
 或者用它的 IP 地址、序列号和打印机 ID 手动添加。
2. **扫描线轴**——用你的手机（或桌面读卡器）；线轴会进入你的库存。
3. **分配到 IFS 槽位**——在 Tiger Studio 的映射中**一次扫描，一次点击**。
 打印机最终对自己的耗材了如指掌，精确程度不亚于自带 RFID 的机器，
 适用于任何 FlashForge 型号，无需更改硬件，机器上也无需添加任何东西。
4. **实时**——温度、任务进度，以及打印机视图中的 MJPEG 摄像头流。

## 添加打印机

Tiger Studio 与 FlashForge 通信需要三样东西：它的 **IP 地址**、**序列号**，
以及**密码**——打印机自己称之为**打印机 ID**。
一个值，两个名字：触摸屏上显示为打印机 ID 的内容，
就是要填入 Tiger Studio 密码栏的内容。

三项中需要你输入几项，取决于打印机是如何被找到的：

| 方式 | 需要输入的内容 |
|---|---|
| **网络扫描**——Tiger Studio 在你的本地网络中找到打印机 | 仅**打印机 ID**；IP 和序列号由扫描提供 |
| **手动**——扫描没有找到它 | **IP 地址 + 序列号 + 打印机 ID** |

没有云路径，因此总是这两种方式之一。选择你的型号，查看每个值在触摸屏上的位置。

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ 上一页：** [Elegoo](./elegoo.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [Anycubic](./anycubic.md)
