---
sourceHash: a23036b449cbf0de4d9f84db6b0ad820d4fc29585e233516d1c6db507e00d7a7
sourcePath: docs/faq/README.md
---

# 常见问题

## 总体

**什么是 TigerSystem？**
一个围绕单一理念构建的 3D 打印开放生态系统：耗材线轴的身份属于它的所有者，而不属于某个打印机品牌。
参见[TigerSystem 为何存在](../vision/why-tigersystem.md)。

**开始使用需要购买什么吗？**
不需要——连芯片都不需要。应用是免费的，任何 NFC 智能手机都是读卡器，
而一卷 **TigerData** 线轴无需把任何东西贴到任何地方，就带有完整的身份。
芯片是舒适，而不是前提：
[零成本开始](../guides/start-for-free.md)。

**它是否绑定某一个耗材品牌或打印机品牌？**
不——中立性是一条设计规则。任何耗材，任何打印机，没有合作伙伴名单。

**这些应用就是产品本身吗？**
不是——**面向用户**的一侧刻意是一个**沙盒**。我们为终端用户创建的每个应用和设备
（Tiger Studio、Tiger NFC Connect、TigerScale、TigerPOD，以及未来的项目）都是一个可运行的**概念验证**：
它们唯一的目标是展示开源、标准、与厂商无关、跨平台协议的潜力，并启发其他人想象明天的功能。
你可以使用它们、复刻它们，或者自己构建。而**工厂一侧**则是生产级的：
工业工具链在合作工厂里以生产线速度为芯片编程——这部分绝不是实验。
参见[刻意为之的沙盒](../vision/why-tigersystem.md)。

**你们为什么要自己构建所有这些演示品？**
因为没有别人做。已经生产了超过 250 万枚 TigerTag 芯片，并随耗材线轴出货，
我们原以为社区会自己为开放的 NFC 身份发明用途——但这并没有发生。构建演示品从来不是最初的目标；
为了展示该协议能带来什么，它变成了必需。完整的故事：
[沙盒背后的故事](../vision/why-tigersystem.md)。

## TigerTag（芯片）

**TigerTag 是什么芯片？**
一枚标准的 NTAG NFC 芯片，带有开放的 144 字节载荷——品牌、材料、颜色、直径、打印设置。
没有密钥，数据不加密。
参见 [TigerTag 芯片](../concepts/tigertag-chip.md)。

**我可以重写芯片吗？**
可以——芯片是可重写的，这正是[第二次生命工作流](../philosophy/second-life.md)的要点：
补充装或改作他用的线轴，重新写入其芯片。

**什么是 TigerTag+？**
一枚确切知道*自己是哪款产品*的 TigerTag。它携带的不是某人输入的值，而是
**来自官方产品库的产品 ID**——品牌、颜色、材料、温度、直径、SKU、EAN——
外加可选的增补元数据，这些元数据在芯片写入之后还可以改进。芯片保持 **100 % 离线**：
打印所需的一切仍然都在上面。`+` 表示*已识别*，而不是*已认证*。

**那 TigerTag+ Certified 呢？**
一枚 TigerTag+，并且还带有加密**签名**，由持有认证及签名工具的制造商写入。
任何人都可以**验证**签名——免费、离线、在自己的手机上——但只有认证制造商才能**签发**，
所以克隆的标签无法通过检查。参见
[TigerTag+](../products/tigertag-plus.md)。

**我可以在账号中备份芯片吗？**
可以，而且这是与 `+` 分开的功能。Tiger Studio 可以保存芯片的确切内容，以其实体 UID 为键，
稍后再重新编程写回——在芯片被重写或损坏时很有用，且**仅对原芯片有效**。
有备份并不会让芯片成为 TigerTag+。

**在哪里购买芯片？**
有两个同样成立的答案。官方 TigerTag 品牌芯片可在
**[tigertag.io](https://tigertag.io)** 和官方经销商处购买
（目前是 [Atome3D](https://atome3d.com)，更多经销商即将加入）——购买它们有助于支持研发。
但来自亚马逊、速卖通或本地商店的**任何廉价空白 NTAG 芯片**效果完全相同，而这是刻意为之：
没有任何东西被阻止，协议才是重点。

**买到的芯片上自带数据吗？**
没有——**单独出售的芯片出厂时是空白的**，无论是否带有 TigerTag 标志。
你自己在 [Tiger NFC Connect](../products/tigertag-connect.md) 或
[Tiger Studio](../products/tiger-studio.md) 中写入耗材的身份；第一次大约需要一分钟。
**已经写好**才到手的芯片，是在工厂里集成于合作品牌耗材之中的那些。
购买芯片和购买已贴标签的耗材是两回事。

**我该买哪种形状——贴纸还是补充装载体？**
两种形态，对应两种情形。**单枚贴纸**贴在你已有的任何线轴上。
**补充装版本**专为无线盘的[补充装](../philosophy/second-life.md)而设计：
在你把补充装安装到可重复使用的主线盘之前，把它粘在**纸芯**内侧，
这样芯片跟着耗材走，而不是跟着线盘走——与工厂放置的位置相同。

**我究竟该买哪种空白芯片？**
推荐 **NTAG213、215 或 216——圆形，25 mm**。协议被刻意优化为适配小容量的 NTAG213（144 字节）；
215/216 的效果完全相同，只是留有未使用的空间。其他形状也可以，
但 25 mm 圆形是生态系统的读卡器和支架所围绕设计的规格。

**哪些耗材品牌在工厂里随货附带 TigerTag？**
已生产超过 250 万枚芯片——使 TigerTag 成为**全球部署最广的第三方 RFID 协议**；
大多数由第三方耗材品牌在工厂中集成——Rosa3D、eSun、Sunlu、Landu、
Jamg He、R3D、Filforme、Lotactree、Smart3DPT、Nanovia——还有更多品牌正在集成之中。

**芯片是怎样装到线轴上的？**
贴上去——而且**每卷线轴有两枚，位于相对的两侧**。这是刻意的：
打印机常常让两个槽位共用一个 RFID 读卡器，所以无论线轴在哪一侧，都必须有一枚芯片正对读卡器；
你可以手动扫描而无需翻转线轴；你可以在不把它从槽位取出的情况下扫描；
而且如果一枚芯片失效，另一枚仍能应答。额外好处：每个空线轴都给你两枚可重复使用的芯片。
参见[为什么是两枚芯片](../concepts/tigertag-chip.md)。

**读取芯片需要联网吗？**
不需要。芯片的载荷完整且自给自足：手机开飞行模式，离线的桌面端——线轴照样能自我介绍。

**我更想用另一种 NFC 协议（OpenSpool、我自己的……）——我是不是被 TigerTag 绑住了？**
不是。芯片**从不写锁定**：TigerTag 只是线轴出厂时附带的基础协议。
你可以自由重写芯片，把数据迁移到任何其他 NFC/RFID 协议，无论是自定义的还是现有的。

**线轴用完后，芯片会怎样？**
它会获得第二次生命——绝不进垃圾填埋场。为下一卷线轴重新写入，
或将其转换为标准 NDEF，变成任何 NFC 物件：钥匙扣、名片、联网物品。
官方品牌芯片改用 **NTAG215**，正是为了给这种再利用留出存储余量：线轴的芯片永远不应成为电子垃圾。参见
[第二次生命](../philosophy/second-life.md)。

**芯片能承受加热腔体或耗材干燥箱吗？**
在正常使用中，现场没有收到过芯片故障的报告——包括使用耗材干燥箱的用户。
有两点对芯片有利：你实际上从不在高温下读取它（扫描在环境温度下进行，而不是在腔体内打印中途），
并且它是标准的 NTAG 硬件——正式的温度额定值请参考 NXP 的 NTAG213/215/216 数据手册。

**什么是 `.ttag` 文件？**
你的一卷或多卷线轴的便携式离线快照——用于备份、用 U 盘携带和分享你的耗材的单位。
从 Tiger Studio 导出单个线轴或整个选择；导入时有完整预览，并可在
*恢复*（同一账号）和*导入*（作为全新线轴采用）之间选择。完整规范：[`.ttag` 格式](../developers/ttag-format.md)。

**我可以完全不用芯片地使用 TigerSystem 吗？**
可以——这就是 **TigerData**：同样的协议数据，纯数字形式，无芯片，无 UID。
身份保存在你的库存中（或任何数字位置），表现得与其他线轴无异。
稍后在你准备好时，把它原子地写入 NFC 芯片——它就成为 TigerTag，终于有了关联的实体 UID。参见
[一个身份，三种状态](../concepts/universal-filament-identity.md)。

## Tiger Studio（桌面端）

**支持哪些平台？**
Windows、macOS 和 Linux（Electron）。可在
[发布页面](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases)下载。

**我需要 NFC 读卡器吗？**
不需要——应用可以独立工作。ACR122U 读卡器（或 [TigerPOD](../products/tigerpod.md) 支架）
增加即时的线轴识别和芯片写入。

**它能驱动哪些打印机？**
六个品牌已上线：Anycubic、Bambu Lab、Creality、Elegoo、FlashForge、Snapmaker——
参见[兼容性矩阵](../compatibility/README.md)。

## 切片软件与打印工作流

**我必须更换切片软件吗？**
不需要。继续使用 OrcaSlicer、你的厂商切片软件，随你喜欢——TigerSystem 不做切片，也不想做。
你像从前一样切片并启动任务。参见[切片软件的位置](../architecture/data-flow.md)。

**那么 TigerSystem 给打印增加了什么？**
两样东西。第一，机器端的耗材信息与现实一致：Tiger Studio 把每卷线轴的数据推送到打印机的槽位
（AMS、CFS、Canvas、ACE、IFS）。第二，实时监控：无论是什么启动了打印，
任务都会显示在 Tiger Studio 中，包含进度、温度、挂钟时间的“结束于”和摄像头——
覆盖你的整个机群，所有品牌混合在一起。

**芯片能自动配置我的切片软件配置文件吗？**
目前不能。芯片携带耗材的推荐设置（温度等）；你需要自己把它们同步到切片软件的配置文件中。

**我有三个不同品牌的打印机。有问题吗？**
恰恰相反——这正是重点。整个机群共用一张打印机表，带有品牌 / 状态 / 标签筛选，
无论六个受支持品牌如何混搭。

## TigerHub（生态系统的网站门户）

**什么是 TigerHub？**
位于 [tigersystem.io](https://tigersystem.io) 的网络平台。它展示 TigerSystem 生态系统——
开放协议所能带来的成果的橱窗——并承载沙盒的社交一侧，目前已全部上线：
你在网页上的账号、心愿单（公开和仅好友可见）、好友码和邀请、
公开列表分享，外加材料产品库、参考数据库浏览器、3D 模型等等。参见 [TigerHub](../products/tigerhub.md)。

**我可以向没有应用的人展示我的收藏吗？**
可以——TigerHub 提供只读列表链接：任何拿到链接的人都可以在普通浏览器中查看，无需应用，无需账号。

**TigerHub 是这些应用背后的数据库吗？**
不是。账号和数据存放在普通的 **Firebase** 中——一个共享数据库，放在一处，
使所有沙盒元素得以互操作。TigerHub 是构建在其之上的网页界面。

## Tiger NFC Connect（移动端）

**移动应用做什么？**
随时随地进行 NFC 扫描和芯片编程、浏览产品库，并与桌面应用使用同一账号进行完整的库存同步。

**在哪里下载？**
它以 **Tiger NFC Connect**（原名“TigerTag RFID Connect”）之名发布在 **App Store** 和 **Google Play** 上，
两个平台都有公开测试版。所有链接：
[tigersystem.io/download](https://tigersystem.io/download)。

## TigerScale 与传感器

**什么是 TigerScale？**
一台用于耗材线轴的开源 ESP32 秤。把线轴放上去，它的实时重量就直接流入你的库存——
在桌面端、移动端和分享视图中即时可见。参见 [TigerScale](../products/tigerscale.md)。

**等等——芯片不是什么都知道吗，为什么还要秤？**
芯片知道耗材**是什么**；只有秤才知道还**剩多少**。它们是真正有用的库存的两半：
身份来自芯片，实时数量来自秤。

**追踪重量需要 TigerScale 吗？**
不需要。你随时可以在应用中手动设置或调整线轴的重量——秤只是让它自动、实时、毫不费力。
Tiger Studio 还可以读取标准的 **USB“HID Scale”设备**——DYMO M 系列（M5、M10、M25……）
以及任何兼容的秤——作为第三方选项（[详情](../products/tigerscale.md)）。

**我可以自己制作一台吗？**
可以——这正是重点。硬件设计和固件在 [Tiger-Scale 仓库](https://github.com/TigerTag-Project/Tiger-Scale)中完全开放（MIT）。

**空线盘自身的重量怎么办？**
库存中的每卷线都记录着它所绕的空线盘——即它的*容器*——以及该容器的重量，
这个重量会被减去，所以你看到的数字是净耗材重量，而不是塑料线盘。新线卷会自动获得其品牌自己的容器；
当品牌有多个容器，或列表中还没有时，Tiger Studio 会询问。

一卷新的 1 kg 线卷如果多显示约 200 g，几乎总是选错了容器，通常是
*Generic · Refill — Without MasterSpool*，它的重量为 0 g。在 Tiger Studio 中打开该线卷，
在它的**容器**卡片上点击**更换**，选择正确的容器。如果你的空线盘重量与目录不同，
在同一个列表中修正一次重量（**修正该重量**）：它适用于你账户中使用该容器的所有线卷，
并由你选择已在使用它的线卷是否跟随。id 和重量列在
[`.ttag` 格式](../developers/ttag-format.md)中。

**TD-1 / TD1s 是什么？**
**[AJAX-3D](https://ajax-3d.com)** 出品的第三方耗材分析仪，有两个变体，都能与生态系统配合：
**TD-1**（DIY 版本——自己组装）和 **TD1s**（预先组装，开箱即用）。
它的主要工作是测量耗材的**透射距离**（“TD”——材料能让多少光线通过），
这是 HueForge / Full Spectrum 打印用户离不开的数值；
它也读取**颜色**（RGB，1–3 个槽位）——精度稍低，但是不错的参考。
Tiger Studio 通过 USB 原生集成它，而 **Tiger NFC Connect 在移动端通过 USB-C 支持它**。
测得的 TD 可以**存储在 TigerTag 协议本身中**——在 NFC 芯片上，或在 `.ttag` 文件格式中。
第三方配件与开放生态系统协同工作，正如预期。

## 云与库存

**我的库存存放在哪里？**
在你自己的 TigerSystem 账号中——普通的 Firebase（Firestore），所有应用共用的一个共享数据库。
你登录的每台设备都能实时看到同样的数据。参见
[库存与云同步](../concepts/inventory-and-cloud-sync.md)。

**它能离线工作吗？**
芯片完全可以离线读取；应用保留本地缓存。打印机连接是局域网本地的，完全不需要互联网（Anycubic 云模式除外）。

**我不想要任何云。我还能使用 TigerTag 吗？**
能，100 %。芯片的载荷完整且自给自足：读取它、写入它，并管理一个完全本地的库存，
无需云、无需账号、无需服务器——[JS 和 Python SDK](../developers/sdks.md) 的存在正是为了在你自己的项目或 DIY 项目中轻松做到这一点。
甚至 **TigerTag+ 也可以在本地验证，无需互联网连接**。
云层是可选的便利（多设备同步、分享），绝不是要求——我们提出一种 TigerTag 用户的愿景，
其他每一种愿景都被接受和鼓励。

**我对 NFC 或 RFID 一无所知——这适合我吗？**
尤其适合你。整个体验以新手优先来设计：用手机轻触线轴，它就自我介绍，搞定。
不需要术语——技术层面是为想深入研究的人而存在的，而不是前提。

**别人能看到我的线轴吗？**
只有你选择了才可以：已接受的好友、公开开关，或 TigerHub 分享链接。
默认一切都是私有的，并在服务器端强制执行。

**如果有一天 TigerTag 云关闭了会怎样？**
对这种担忧的设计答案是开放：芯片格式是公开的，芯片永远可以完全离线读取，
SDK 和桌面应用是开源的，云接口也有文档。你的线轴不会被服务器“变砖”——
这恰恰是与厂商孤岛的区别。

## RFID 与兼容性

**Tiger Studio 能读取 Bambu/Creality/… 的原生标签吗？**
还不能——处理互操作性的正确方式仍是一个悬而未决的问题。
已为七种厂商格式记录了只读解码规范，目前进行中的工作目标是
**把厂商标签数据转换为 TigerData 数字线轴**，
这样其他品牌的耗材也能在生态系统中被扫描和管理。参见[兼容性](../compatibility/README.md)。

**为什么厂商标签是锁定的，而 TigerTag 不是？**
锁定的标签服务于厂商锁定。TigerTag 的回答是公开可读的格式——参见
[以用户为中心与以打印机为中心](../philosophy/user-centric-ecosystem.md)。

**树脂打印机呢？**
即将推出：TigerTag 正在扩展到**树脂**——在树脂 3D 打印机的树脂容器上使用同样的开放身份。

**TigerTag 能用于没有 RFID 读卡器的打印机吗？**
能——这就是[智能手机桥接](../philosophy/smartphone-bridge.md)：你的手机（或桌面读卡器）识别线轴，
系统再把数据送给打印机。

## 故障排除

**我的芯片在手机上扫描不到。**
检查 NFC 是否已启用，并找到手机天线的最佳位置；标签平贴在天线上读取效果最好。
如果芯片在一个应用中能读而在另一个中不能，请更新应用。

**我的打印机没有出现在 Tiger Studio 中。**
确保打印机在同一局域网中，在相关情形下处于局域网模式，然后尝试“按 IP 添加”——各品牌的发现方式不同。

> 欢迎提供真实案例——在
> [官方 Discord](https://discord.gg/3Qv5TSqnJH) 或 GitHub issues 上报告你的情况；本节正是由它们而成长。

## 开发者

**真的有人基于 TigerTag 构建过东西吗？**
有——而且独立于我们：
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID)（社区的多厂商 RFID 工具包）可读取 TigerTag；
[Spooly Tracker](https://spoolytracker.com/)（库存平台，网页 + 移动端）用 TigerTag 识别线轴；
而 [Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
让 U1 成为**第一台原生读取 TigerTag 的打印机**，而
[COSMOS](https://github.com/OpenCentauri/cosmos) 在 Elegoo Centauri Carbon 上做到了同样的事，用的是内置于其 Canvas 的
NFC 读卡器。参见
[第三方集成](../developers/integrations.md)。

**我可以基于 TigerTag 构建自己的应用吗？**
可以，无需许可：开放的芯片规范、[SDK](../developers/sdks.md)（JS 和 Python），
以及[有文档的账号接口](../developers/account-api.md)，附带可运行的 ESP32 / Home Assistant / Spoolman 示例。

**我可以把 TigerTag 接入我的 ERP 或内部库存软件吗？**
可以——这正是开放协议所欢迎的用法。一次扫描（NFC 手机或 ACR122U USB 读卡器）
就能给你线轴的身份；你用它来做什么——库存管理、任务追踪、可追溯性、补货、研发——由你决定。
参见[你能构建什么？](../developers/README.md)

**在我自己的项目中读取芯片需要什么硬件？**
任何 NFC 智能手机、连在电脑上的 ACR122U 级 USB 读卡器——或者完全 DIY：
一块简单的 ESP32 加 PN532 或 RC522 读卡模块就足够了（[TigerScale](../products/tigerscale.md) 就是这么做的）。
普通、便宜，没有专有设备。

**Firebase 配置是公开的，这是安全漏洞吗？**
不是——这是标准的 Firebase 模式。所有强制执行都在服务器端的安全规则中；客户端只能接触自己用户的数据。

## 制造商

**我们是一家耗材品牌——如何出货带有 TigerTag 标签的线轴？**
很快：生产线最快 **5 天**就能用上 TigerTag，成本很低，每枚芯片写入约需 **1 秒**——
Rosa3D、eSun、Sunlu、Landu、Jamg He、R3D、Filforme、Lotactree 和 Smart3DPT 已经出货超过 250 万枚芯片，证明了这一点。
而且每多一个品牌加入，就进一步增强了打印机制造商原生读取 TigerTag 的集体理由。请阅读
[面向耗材制造商](../vision/for-filament-manufacturers.md)，然后联系
**[tigertag@tigertag.io](mailto:tigertag@tigertag.io)**。

**我的产品能成为“TigerTag Certified”吗？**
这取决于它位于一条界线的哪一侧——而大多数产品都在免费的一侧。

如果你的产品**与** TigerTag 芯片**交互**——读卡器、应用、打印机、切片软件、干燥箱、工具——
它就是 **TigerTag Compatible**。该级别免费、自行声明，无需审核，也无需许可：
构建它，声明*“compatible with TigerTag”*（如果你验证签名，则是*“with TigerTag+”*），
并在你的界面、文档和商店页面中展示标志。大多数第三方产品都属于这里，协议没有对它们保留任何东西。

**TigerTag Certified** 是另一个级别，对**第三方构建的任何东西**开放——设备、应用、耗材、嵌入件、载体——
只要**通过对照要求的审核**。它是授予的，而不是自称的：书面授权、列入认证登记册，
以及把标志放在**产品、芯片和包装上**的权利。它分为两个范围，**TigerTag Certified** 和 **TigerTag+ Certified**，
后者涵盖对已签名标签的处理已通过验证的产品。

两个级别的区别不在于你的产品*是什么*——而在于是否有人检查过。
Compatible 凭你的话说*“它能用”*。Certified 凭我们的话说*“我们测试过了”*，而且它可以被撤回。
完整标准：[CERTIFICATION.md](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md)。
可通过 [GitHub 组织](https://github.com/TigerTag-Project)联系我们。

**我们是打印机制造商——我们的固件能读取 TigerTag 吗？**
能——NTAG/NDEF 读卡器是普通硬件，载荷规范是公开的
（[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)），
而在固件中添加 TigerTag 读取只需**不到 3 天**。

## 社区

**在哪里提问或获得帮助？**
官方 **[Discord](https://discord.gg/3Qv5TSqnJH)**——提问、求助、反馈、作品展示。
对于缺陷和技术问题，各仓库的 GitHub issues 也可以。

**如何贡献？**
文档：此处的 [CONTRIBUTING.md](../../CONTRIBUTING.md)。代码：各仓库自己的指南——参见[仓库地图](../developers/repositories.md)。

**一切都是免费的——我该如何支持这个项目？**
在你本来就要买的时候购买官方芯片或 TigerPOD 套件；穿上
[帽子或 Polo 衫](https://tigersystem.io/goodies)；修正一个页面、翻译一个页面、构建兼容的东西；
并去问问你的耗材品牌，为什么他们的线轴没有贴标签——最后这一条比其余所有加起来做得都多。
完整列表，包括你可以放心忽略的内容，见
[支持本项目](../support.md)。

**我可以把它全部复刻，构建别的东西吗？**
可以。采用 MIT/CC 许可，刻意设计为可复刻——只需遵守[商标政策](../../TRADEMARK.md)。

---

**◀ 上一页：** [账号 API](../developers/account-api.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [路线图](../roadmap/README.md)
