---
sourceHash: b28699b1ffe29a8197a36d00c7662d7a3930211c20f3d4e28aab3ac33abd11e8
sourcePath: docs/glossary.md
---

# 术语表

本文档中未加解释就使用的每一个术语。定义取自旁边所链接的页面——每个条目都指向掌握完整内容的那一页。

> **说明：** 本术语表是一个**种子**。它涵盖本仓库中已经出现的术语；它有意保持不完整，
> 只有当某个术语的实质内容已经在文档的某处存在时，才会添加相应条目。
> 缺了某个术语？请添加它，并附上定义它的那一页的链接。

## 生态系统自己的词汇

| 术语 | 含义 |
|---|---|
| **TigerSystem** | 整个开放生态系统：芯片格式、参考数据、应用、硬件和云端接口。见 [TigerSystem 为何存在](./vision/why-tigersystem.md)。 |
| **TigerTag** | 一枚携带开放的 144 字节 TigerTag 负载的标准 NTAG NFC 芯片——线轴的身份，任何东西都能读取。见 [TigerTag](./products/tigertag.md)。 |
| **TigerTag+** | 其身份携带**来自官方产品库的产品 ID** 的 TigerTag，外加由 Web API 元数据提供的可选补充数据。芯片依然可以 100% 离线读取。`+` 的意思是*已识别*，而不是*已认证*。见 [TigerTag+](./products/tigertag-plus.md)。 |
| **TigerTag+ Certified** | 另外还携带一个加密**签名**的 TigerTag+，由持有该认证及其签名工具的制造商写入。验证它免费且可离线进行；签发它则是认证所授予的权利。 |
| **TigerData** | 同样的身份，但完全没有芯片：协议的数据以纯数字形式存在，没有 UID，可随时升级为真正的芯片。见 [一种身份，四种状态](./concepts/universal-filament-identity.md)。 |
| **TigerData+** | 携带官方产品库中真实产品的无芯片线轴——精确的品牌、颜色、材料、温度、直径、SKU 和 EAN——而不是手工输入的值。`+` 的意思是*已识别*，而不是*已认证*。 |
| **Official** | 由 TigerSystem 自己制造——两种形态的芯片，以及[产品](./products/README.md)中的应用和硬件。这是对来源的陈述，而不是被授予的标记：TigerSystem 不认证自己。 |
| **TigerTag Compatible** | 免费层级：任何与 TigerTag 芯片*对话*的东西——读卡器、应用、打印机、切片软件、工具。实现它、声明它，或在应用、文档或商店页面中展示标志，都无需许可。它同样涵盖 **TigerTag+**：验证签名免费、可离线、不受限制。它唯一从不包含的词是*认证*。 |
| **TigerTag Certified** | 经过审核的层级，向第三方构建的任何东西开放——设备、应用、耗材、嵌体、载体——只要通过对照要求进行的审核。是被授予而不是自行声明的，列入认证登记册，并且可以被撤销。分为两个范围：**TigerTag Certified** 和 **TigerTag+ Certified**。认证合作伙伴可以将该标记用于**产品上**，并签发 TigerTag+ 签名。见[开发者文档](./developers/README.md)和[认证标准](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md)。 |
| **Tiger NFC Connect** | 移动应用（iOS/Android）——轻触读取、轻触写入、浏览产品库。前身为“TigerTag RFID Connect”。见 [Tiger NFC Connect](./products/tigertag-connect.md)。 |
| **Tiger Studio** | 开源桌面应用（Windows/macOS/Linux）——库存、货架、传感器和打印机连接。见 [Tiger Studio](./products/tiger-studio.md)。 |
| **TigerHub** | 生态系统在 `tigersystem.io` 的网络主页——展示、心愿单、好友代码、公开列表分享。见 [TigerHub](./products/tigerhub.md)。 |
| **TigerPOD** | 可 3D 打印的双 NFC 读卡器支架——免费 STL。见 [TigerPOD](./products/tigerpod.md)。 |
| **TigerScale** | 开源的 ESP32 耗材秤，回答“还剩多少？”这个问题。见 [TigerScale](./products/tigerscale.md)。 |
| **TigerSpool** | 放在打印机旁的盒子，一接触就把线轴的身份写入打印机槽位——无需应用，无需键盘，适用于任何品牌。见 [TigerSpool](./products/tigerspool.md)。 |
| **TigerTag Factory / Manager** | 在耗材生产线上为芯片编程的工业级、生产级工具链，以及整理耗材数据库的工具。不对外公开。见[工厂套件](./products/factory-suite.md)。 |
| **载体（Carrier）** | 承载线轴两枚芯片的条带——每个折叠的末端各一枚，用工业级 3M 胶粘在纸芯上。用于工厂生产线，也单独出售用于补充装，并且公开，可在家打印。见 [TigerTag 芯片](./concepts/tigertag-chip.md)。 |
| **Masterspool（母线盘）** | 一个可重复使用的线盘，无线盘的补充装安装在它上面。补充装的芯片位于纸芯内部，因此留在耗材上，而不是留在线盘上。 |
| **Twin Tag（孪生标签）** | 一卷线轴的两枚芯片，作为一对一起写入，并在线轴的整个生命周期里保持一致——始终算作**一**卷线轴。 |
| **参考数据库** | 由 `cdn.tigertag.io` 提供的共享 ID 表（品牌、材料、外观、类型、直径、单位），使得由一个工具编码的芯片在所有其他工具中读出的结果完全一致。见 [通用耗材身份](./concepts/universal-filament-identity.md)。 |
| **外观（Aspect）** | 参考数据库中描述耗材颜色和表面效果的字段；[材料色板](./developers/material-swatch.md)就是据此绘制的。 |
| **材料色板（Material swatch）** | 把线轴的颜色*数据*转化为在每个界面上都相同的*图像*的规范性约定——三种形态（2-3 种硬色用 135° 柔和分割，4 种以上用饼图式，平滑色用 135° 渐变），并附有一个参考渲染器，用来核对实现。见[材料色板](./developers/material-swatch.md)。 |
| **`.ttag` 文件** | 便携的离线交换文件，在工具之间携带一个或多个库存材料（TigerData、TigerData+、TigerTag 或 TigerTag+）。见 [`.ttag` 格式](./developers/ttag-format.md)。 |
| **第二次生命** | 为补充过或另作他用的线轴重新编码芯片，或把它转换为普通 NDEF 以用于其他任何 NFC 用途——芯片绝不应沦为电子垃圾。见[第二次生命](./philosophy/second-life.md)。 |
| **智能手机桥接** | 为自身没有 RFID 读卡器的打印机，用手机（或桌面读卡器）来识别线轴。见[智能手机桥接](./philosophy/smartphone-bridge.md)。 |
| **打印机连接** | Tiger Studio 通过局域网与机器对话——遥测、耗材槽位、任务、摄像头。有别于读取该厂商自己的标签。见[兼容性](./compatibility/README.md)。 |
| **补充装（Refill）** | 不带线盘出售的一卷耗材，装到你已有的线轴上使用。 |

## NFC 与 RFID

| 术语 | 含义 |
|---|---|
| **NFC** | 近场通信（Near-Field Communication）——每部现代智能手机都能用来读取 TigerTag 的短距离无线电。 |
| **RFID** | 射频识别（Radio-Frequency Identification），NFC 所属的更广泛的一族。在这里既用于厂商自己锁定的线轴标签，也用于 TigerTag。 |
| **NTAG213 / 215 / 216** | TigerTag 所用的 NXP 芯片系列（NFC Forum Type 2）。负载的大小按最小的 NTAG213 设计；官方品牌芯片采用 NTAG215，为复用留出内存余量。见 [TigerTag 芯片](./concepts/tigertag-chip.md)。 |
| **NDEF** | NFC 数据交换格式（NFC Data Exchange Format）——存放 TigerTag 负载的标准容器，因此任何 NFC 工具都能读取它，也因此用空线轴的芯片可以变成一个普通的 NFC 物件。 |
| **UID** | 芯片唯一的硬件标识符，出厂时设定，不可重写。芯片备份与它绑定，TigerTag+ Certified 签名也是如此。 |
| **Mifare Classic / Mifare Ultralight** | 打印机厂商用于自家线轴标签的芯片系列——按厂商记录在[兼容性矩阵](./compatibility/README.md)中。 |
| **ACR122U** | 用来从电脑读写芯片的通用 USB NFC 读卡器类别；[TigerPOD](./products/tigerpod.md) 就是围绕一台这样的读卡器构建的支架。 |
| **PN532 / RC522** | 廉价的 NFC 读卡模块，通常与 ESP32 搭配，用于自制读卡器——[TigerScale](./products/tigerscale.md) 采用的就是这种方式。 |
| **ECDSA** | Python SDK 可选的 `verify` 扩展所校验的签名方案——TigerTag+ 来源签名背后的机制。见 [SDK](./developers/sdks.md)。 |
| **OpenSpool** | 一个独立的开放线轴 NFC 标签标准（NFC Type 2、NDEF JSON、未锁定）。见 [OpenSpool](./compatibility/openspool.md)。 |
| **OpenRFID** | 社区的多厂商 RFID 工具包，各厂商的解码说明表均源自它，并且它能读取 TigerTag。见[第三方集成](./developers/integrations.md)。 |

## 打印机与硬件

| 术语 | 含义 |
|---|---|
| **AMS** | Bambu Lab 的自动材料系统（Automatic Material System）——多线轴送料器。在这里很重要，因为它通常在两个槽位之间共用一台 RFID 读卡器，这就是一卷线轴带有两枚芯片的原因。 |
| **CFS** | Creality 的耗材系统（Filament System）——其多材料单元。 |
| **ACE** | Anycubic 的多材料单元。 |
| **Canvas** | Elegoo 的多材料单元。 |
| **IFS** | FlashForge 的多耗材系统——其协议中的字段仍然是 `matlStation`。 |
| **MMU** | 多材料单元（Multi-Material Unit）——为一台打印机送入多种耗材的附加装置的通用说法（Klipper 世界里的 ERCF、MMU2、Box Turtle……）。见 [Klipper](./compatibility/klipper.md)。 |
| **Klipper / Moonraker** | 开源的打印机固件及其 API——Moonraker 的 WebSocket 是 Snapmaker 连接已经在用的传输方式，也是 Klipper 机器下一个自然的选择。见 [Klipper](./compatibility/klipper.md)。 |
| **HID Scale** | 称重秤的标准 USB 协议（DYMO M 系列及兼容产品），Tiger Studio 原生读取，作为 TigerScale 的第三方替代品。 |
| **TD / TD-1 / TD1s** | **透射距离（Transmission Distance）**——耗材允许透过多少光，这是 HueForge 和全彩打印所依赖的值——以及测量它的 [AJAX-3D](https://ajax-3d.com) 分析仪，有自制版（TD-1）和预装版（TD1s）。测得的 TD 可以存储在 TigerTag 协议本身中。见[第三方硬件](./compatibility/third-party-hardware.md)。 |
| **ESP32** | TigerScale 和大多数自制 TigerTag 读卡器背后的通用微控制器。 |

## 云与数据

| 术语 | 含义 |
|---|---|
| **Firebase / Firestore** | 托管账号和库存的普通 Google 服务——所有应用读写的同一个共享数据库，由服务器端安全规则来执行约束。见[库存与云同步](./concepts/inventory-and-cloud-sync.md)。 |
| **`cdn.tigertag.io`** | 共享参考数据库的提供地址。 |
| **好友代码 / 列表链接** | 分享库存的两种方式——已接受的好友，或任何人在浏览器中打开的只读公开链接，无需应用，也无需账号。见 [TigerHub](./products/tigerhub.md)。 |
| **SKU / EAN** | 制造商的产品代码及其条形码编号——TigerData+ 携带它，用来准确说明线轴是产品库中的哪一款产品。 |

---

**▲ [文档索引](../README.md)** · **另见：** [常见问题](./faq/README.md)、[TigerTag 芯片](./concepts/tigertag-chip.md)、[通用耗材身份](./concepts/universal-filament-identity.md)
