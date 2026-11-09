---
sourceHash: 91d553189f12a3505a08517cad04952ae9beb92f494c171860a5199147622175
sourcePath: docs/concepts/universal-filament-identity.md
---

# 通用耗材身份

## 一个身份，处处可读

TigerTag 芯片赋予线轴一个**通用身份**：一份单一、开放的记录，说明这卷耗材*是什么*，
与谁制造它、谁销售它、哪台打印机会熔化它无关。

身份涵盖（并不详尽）：

| 字段族 | 示例 |
|---|---|
| **品牌** | 任何耗材制造商，来自共享参考列表 |
| **材料 / 类型** | PLA、PETG、ABS、TPU… + 子类型 |
| **外观 / 颜色** | 颜色值、表面效果 |
| **几何** | 直径（1.75 / 2.85 mm） |
| **打印设置** | 推荐温度 |
| **生命周期** | 重量、生产日期 |

## 共享参考数据库

身份不是自由文本：品牌、材料、外观、类型、直径和单位都来自在 `cdn.tigertag.io` 提供的
**共享参考数据库**（托管在与账号相同的 Firebase 项目中）。
每个应用都把相同的 ID 解析为相同的含义，因此一个工具写入的芯片在其他所有工具中读出来都完全一致。

> **TODO：** 待 RFID 指南记录公开数据库浏览端点 / 转储格式后，在此添加链接。
> 参考数据随 Tiger Studio 一同打包（`assets/db/tigertag/`），并从 CDN 刷新。

## 一个身份，四种状态

身份是*记录*，而不是*芯片*——它会经历四种状态：

```mermaid
flowchart LR
  TD["TigerData<br/>the protocol's data in digital form<br/>(no chip, no UID — lives anywhere)"]
  TDP["TigerData+<br/>digital, and tied to a real catalogue product<br/>(still no chip, but nothing typed by hand)"]
  TT["TigerTag<br/>the data written into an NFC chip<br/>(a physical UID is now associated)"]
  TTP["TigerTag+<br/>the chip carries a real catalogue product<br/>(still 100% offline; signed = TigerTag+ Certified)"]
  TD -- "pick it from the catalogue" --> TDP
  TD -- "write to a chip" --> TT -- "pick a catalogue product" --> TTP
  TDP -- "write to a chip" --> TTP
```

- **TigerData** 是*芯片之前*的协议：同样的身份，以数字形式存储——
 存在于库存、数据库、文件，或任何地方。TigerTag 协议可以完全存在于 RFID 芯片之外。
 这种**虚拟芯片**的概念是 TigerSystem 的创新——别处都没有：
 不用任何 NFC 芯片就能管理完整库存，稍后或永不把身份送入芯片，两种情况下协议的互操作性都得以保留。
- **TigerData+** 是确切知道*自己是哪款产品*的 TigerData。依然没有芯片，依然无需购买任何东西——
 但它携带的不是主人随手输入的内容，而是官方产品库中的真实产品：
 确切的品牌、颜色、材料、温度、直径、SKU 和 EAN，直接来自源头。
 这是你通过挑选产品、而非描述产品所得到的东西。
 >它**不是** TigerTag+，也从不自称是：没有芯片，没有 UID。`+`
 >表示*已识别*，而不是*已认证*。对开发者而言：当线轴无芯片**且**带有真实的产品 id 时，它就是 TigerData+——
 >这一组合就是定义，并以 `protocol: "TigerData+"` 镜像到记录上，
 >你可以直接读取。参见
 >[Firestore 数据结构](https://github.com/TigerTag-Project/TigerTag_Firebase_Backend#-firestore-data-structure)。
- 一旦这些数据被**写入 NFC 芯片**，它就成为 **TigerTag**：
 一个实体 **UID 终于与该身份关联起来**。
- 向该芯片写入的是**产品库产品**而非手工输入的值，它就是
 [**TigerTag+**](../products/tigertag-plus.md)——与 TigerData+ 一样的 `+`，含义相同：*已识别*。
 由认证制造商签名后，它就成为 **TigerTag+ Certified**。无论哪种情况，芯片都保持 100 % 可离线读取。

TigerData 可以永远保持数字形式，也可以在你准备好时**原子地升级为真正的芯片**
（Tiger Studio 一步即可完成）。并且这四种状态都能以文件形式流转：
[**`.ttag` 交换格式**](../developers/ttag-format.md)可以在 U 盘上、邮件中、工具之间，
携带一个或多个库存材料——TigerData、TigerData+、TigerTag 或 TigerTag+。

## 记录与芯片

上面的四种状态是**记录**的状态。[RFID 指南](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#three-tag-types)列出的则是标签类型，
它们描述的是**芯片**：写在硅片上的内容，离线读取，无需账户。这是两条轴，
不是同一份列表的两个版本，两者都没有错。

对每种状态，读取器在芯片上看到的内容：

| 记录状态 | 芯片上 |
|---|---|
| **TigerData**、**TigerData+** | 什么都没有：还没有芯片 |
| **TigerTag** | `ID TigerTag` `0x5BF59264`，以及 `ID Product` `0xFFFFFFFF`（无） |
| **TigerTag+** | `ID TigerTag` `0xBC0FCB97`，以及一个目录中的 `ID Product` |
| **TigerTag+ Certified** | 与 TigerTag+ 相同，另加第 `0x18`–`0x27` 页中的有效签名 |

无论是否签名，TigerTag+ 都带有同一个类型 id。要判断芯片是否为 TigerTag+ Certified，
读取器需验证签名；类型 id 无法说明这一点。

芯片这条轴上有一个值，背后没有任何记录：**TigerTag Init**（`0x6C41A2E1`）。
它标记一枚已准备好接受写入的空白芯片。关于耗材还什么都没有确定，所以不存在
处于任何状态的记录，它也不是第五种状态。

## 升级：从记录到芯片

*升级*一卷线轴，就是在图中从左走到右：把一条现有的 TigerData 或 TigerData+ 记录写入一枚空白
NTAG 芯片，从此线轴自己携带自己的身份，离线可用。

得到什么，只取决于放进去的是什么：

| 你升级的是… | 你得到… | 因为 |
|---|---|---|
| 一个 **TigerData**——由其主人自选的数值 | 一个 **TigerTag** | 现在有一个物理 UID 与该身份关联 |
| 一个 **TigerData+**——一个真实的产品库产品 | 一个 **TigerTag+** | 芯片现在携带产品库的产品 ID：*仍然是已识别的，仍然未签名* |

第二行就是整个 `+` 词汇的一句话概括。升级改变的是*状态*——从数字到芯片——而绝不改变 `+` 的含义。
只有认证制造商的签名才能让一枚芯片成为 [TigerTag+ Certified](../products/tigertag-plus.md)，
任何升级都不会产生它。

升级也不是一扇单向门。芯片从不写锁定：升级后的芯片可以在
[Tiger NFC Connect](../products/tigertag-connect.md) 或 Tiger Studio 中擦除并重新写入
（[TigerTag 芯片](./tigertag-chip.md)）。身份就是那条记录；芯片只是它此刻所在的地方。

---

**◀ 上一页：** [第二次生命工作流](../philosophy/second-life.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [TigerTag 芯片](./tigertag-chip.md)

**另见：** [TigerTag 产品页面](../products/tigertag.md)、[库存与云同步](./inventory-and-cloud-sync.md)
