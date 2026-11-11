---
sourceHash: 4883ce5a0c792789833fe5a7626adaf7d9ec21c91d88333d9906fc567749f0fc
sourcePath: docs/concepts/tigertag-chip.md
---

# TigerTag 芯片（RFID/NFC 格式）

## 物理层

| 属性 | 值 |
|---|---|
| 芯片系列 | NTAG213 / 215 / 216（NFC Forum Type 2） |
| 推荐外形 | **25 mm 圆形贴纸**（其他形状也可以） |
| 数据载荷 | 144 字节 NDEF 载荷——大小刚好适配小容量的 NTAG213；更大的芯片会留有未使用的空间 |
| 官方品牌芯片 | 采用 **NTAG215** 生产——额外的存储空间让寿命终结后的再利用（标准 NDEF 对象）最大化，使芯片永远不会变成电子垃圾 |
| 身份验证 | 无——公开可读 |
| 写保护 | **无**——芯片出厂时未锁定；用户可以重写，包括完全迁移到另一种协议 |
| 保留区域 | 载荷末尾的 **64 字节**——页 `0x18`–`0x27`，数据部分留有 80 字节。在标准 TigerTag 上，它们**可供社区附加功能自由使用**；在 [TigerTag+](../products/tigertag-plus.md) 上，它们承载**来源签名**，即 32 字节的 `R` 和 32 字节的 `S`（字节级布局：[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)） |
| 每卷线轴的芯片数 | **两枚**，位于相对的两侧 |
| 可由以下读取 | 任何 NFC 智能手机、ACR122U 级 USB 读卡器、[TigerPOD](../products/tigerpod.md) |

这与厂商标签（带派生密钥的 Mifare Classic、AES 扇区、RSA 签名——参见
[兼容性](../compatibility/README.md)）恰好相反：TigerTag 芯片不隐藏任何东西。

不妨把芯片看作线轴身份的**长期冷存储**：数据就保存在芯片本身，离线，可保存多年——
无需服务器、无需账号，不需要任何东西来维持它。在线层（参考数据库、云同步）永远只是在其上*增加*新鲜度。

## 为什么每卷线轴带两枚芯片

<img src="../assets/refill-with-tigertag-blue.png" width="380" alt="带有圆形 TigerTag 芯片的耗材补充装线圈" />

两枚芯片，位于线轴的相对两侧——看上去多余，实际上是这个格式最聪明的细节：

- **打印机共用读卡器。** 一台机器通常是**两个线轴槽位共用一个 RFID 读卡器**，
 安装在**两者之间**——或安装在打印机侧面，根据你的线轴在哪个槽位，读取左面或右面。
 Bambu Lab 的 AMS 有 2 个读卡器对应 4 个槽位；在 Snapmaker 上，线轴位于打印机的任一侧。
 每侧各有一枚芯片，**无论放在哪个槽位，总有一枚芯片正对着读卡器**——
 你也无需以特定方向装载线轴。
- **手动扫描时无需找芯片。** 在 [TigerPOD](../products/tigerpod.md) 上或用手机，
 你永远不必弄清哪一面带芯片：无论你怎样拿起线轴，总有一枚已经在合适的一侧。
- **原位扫描。** 装在 AMS Lite、Elegoo Centauri Carbon 侧面或 FlashForge 上的线轴，无需取出即可扫描。
- **集成者自由。** 耗材干燥箱制造商只需把读卡器放在合适的地方——
 单线轴干燥箱放在左侧或右侧，双线轴的放在两个线轴之间——就总能正常工作。
- **冗余。** 如果一枚芯片不再应答，另一枚仍能识别线轴，因此在更换期间不会丢失任何信息（见下文）。
- **双倍收获。** 寿命终结时，每打印一公斤耗材，
 你就得到**两枚可重复使用的 NTAG 芯片**，可用于 DIY 项目
 （[零电子垃圾](../philosophy/second-life.md)）。

一些实现细节：

- 两枚芯片**完全独立——各有自己的 UID**；没有共用天线。
 它们**作为一对（Twin Tag）一起写入**，并在线轴的整个生命周期内保持一致，连剩余的克数都一样——
 并且始终只算**一**卷线轴。
- 在工厂线轴上，芯片搭载在**载体**上：一条两端折过纸芯的带子（每端一枚芯片），
 用工业级 **3M 胶（468MP / 200MP）**固定——操作员撕下贴上，生产线上其他一切都不变。
 载体的设计是**公开的，可在家打印**，同样的形态也单独出售，用于
 [补充装](../philosophy/second-life.md)，这样芯片跟着耗材走，而不是跟着线盘走。

<img src="../assets/carrier-bare.png" width="440" alt="裸载体——两个独立的 NFC 天线，每端一个" />

*裸露的载体：两个独立的天线清晰可见——每个折叠端一个，各有自己的 UID。*

### 两枚芯片如何绑定

没有任何中心记录这一对。它是**从两枚芯片所携带的内容推断出来的**，
而让它成为有意为之而非巧合的字段是**时间戳**。

页 `0x0C`（偏移 `+32`）的 4 个字节有双重用途：自 2000-01-01 GMT 起的秒数，*同时*也是 **Twin Tag ID**。
在同一次会话中写入的两枚芯片会得到完全相同的值——这同一秒就是配对的键。

分辨率为一秒，因此仅凭时间戳不足以证明：在同一秒内贴标签的两卷线轴也会带有相同的值。
确认配对的是**描述性身份也一致**——两枚芯片描述的是同一卷线轴，
因此描述该线轴的每个字段在两枚芯片上都必须相同：

| 字段 | 页 | 偏移 |
|---|---|---|
| Twin Tag ID / 时间戳 | `0x0C` | `+32` |
| ID Brand | `0x07` | `+14` |
| ID Material | `0x06` | `+8` |
| ID Aspect 1 · ID Aspect 2 | `0x06` | `+10` · `+11` |
| Color 1 · Color 2 · Color 3 | `0x08` · `0x0D` · `0x0E` | `+16` · `+36` · `+40` |
| ID Product | `0x05` | `+4` |

真正起区分作用的因变体而异：

- 在 **[TigerTag+](../products/tigertag-plus.md)** 上，`ID Product` 是真正的产品库 id。
 相同的时间戳**并且**相同的产品 id，几乎可以肯定地认定为一对。
- 在**标准 TigerTag** 上，`ID Product` 在所有现存芯片上都是常量 `0xFFFFFFFF`，所以完全没有区分作用。
 区分的工作改由品牌、材料、三种颜色和两个外观来承担——再加上时间戳。

两个值得直说的结论：

- **分两次写入两枚芯片不会产生一对。** 它们会得到两个不同的时间戳，
 因此没有任何东西把它们绑定，生态系统会把它们算作两卷线轴。
 这就是手机应用在一次 *Dual NFC* 会话中同时写入两枚芯片的原因，
 也是 [TigerPOD](../products/tigerpod.md) 配有两个相对放置的读卡器的原因。
- **签名是唯一合理地不同的东西。** 在 TigerTag+ 上，它签署的是
 `SHA-256(uid ‖ id_tigertag ‖ id_product)`，而每枚芯片有自己的 UID——
 所以一对芯片的两枚携带两个*不同的*签名，这是必然的。签名相同意味着是复制品，而不是孪生。

上述偏移量引自权威的
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)
（§2.9），该文档仍然是规范。

### 补充装载体的实际使用

两个让人意外的细节：

- **粘贴是可选的。** 3M 胶只是用来在你处理和存放补充装时固定载体。
 一旦补充装装到主线盘上，载体就**被楔在主线盘与纸芯之间**，无法移动——胶就没有用武之地了。
- **它能取出来，并且可重复使用。** 补充装用完后，
 取回带有两枚芯片的载体，从 [Tiger NFC Connect](../products/tiger-nfc-connect.md)
 或 [Tiger Studio](../products/tiger-studio.md) 中擦除它们，然后再次使用——
 用在另一卷线轴上，或用于任何其他 NDEF 项目。
 随 TigerTag 补充装出售的耗材留给你的是载体，而不是垃圾
 （[第二次生命](../philosophy/second-life.md)）。

从哪里获取：参见[购买芯片](../products/tigertag.md)。

## 当芯片损坏或丢失数据时

幸存的芯片会继续识别线轴。接下来怎么做，取决于发生了什么：

| 发生了什么 | 怎么做 | 签名 |
|---|---|---|
| **一枚芯片损坏或丢失** | 在 [Tiger NFC Connect](../products/tiger-nfc-connect.md) 或 [Tiger Studio](../products/tiger-studio.md) 中从目录找到该耗材，并在同一次会话中写入两枚芯片：手机上用 *Dual NFC*，或使用 [TigerPOD](../products/tigerpod.md)。可以用两枚新芯片，也可以擦除幸存的芯片，把它当作其中一枚重新使用 | 丢失：芯片仍带有目录产品，因此是 TigerTag+，功能完全相同，但不再是 TigerTag+ Certified |
| **芯片仍能应答，但数据被擦除或损坏** | 在 Tiger Studio 中线轴的工具箱里使用 **恢复 TigerTag+**，芯片放在 TigerPOD 上：每枚芯片都会从其备份中写回 | 保留：芯片会恢复到出厂时的原样 |
| **手边没有芯片** | 在 Tiger Studio 中从线轴 **打印标签**：一个可打开该线轴的二维码 | — |

新芯片不能直接加入幸存的芯片：配对是在写入时形成的，所以两枚芯片总是一起写入（[当两枚芯片被读作两卷线轴时](../guides/twin-tag-pair.md)）。

在新芯片上签名会丢失，因为签名针对的是每枚芯片自己的 UID，无法转移到另一枚芯片上。**恢复 TigerTag+** 需要备份：Tiger Studio 在第一次读取 TigerTag+ 时会备份它。

## 工厂预写入，或手中的空白芯片

同一枚芯片有两种方式到达你手中，这个区别比本页上的任何内容都更重要：

| | 来源 | 上面有什么 |
|---|---|---|
| **预写入** | 集成在生产线上，位于合作品牌的耗材之中 | 线轴的完整身份，可直接读取 |
| **空白** | 单独购买——TigerTag 品牌的，或任何地方买来的任意 NTAG 芯片 | 暂时什么都没有；你写入一次，大约一分钟 |

单独销售的芯片出厂时是**空白**的，无论有无标志。这不是限制：
未写入的芯片才使[第二次生命](../philosophy/second-life.md)成为可能，
也是协议从不依赖购买任何东西的原因。

## 数据载荷

144 字节的载荷编码了线轴的[通用身份](./universal-filament-identity.md)——
品牌、材料、外观/颜色、类型、直径、打印设置——以 id 的形式，对照共享参考数据库解析。

有效载荷占据页 `0x04` 至 `0x27`，每页 4 个字节；所有多字节值均为大端序（big-endian）：

| 页 | 字节 | 内容 |
|---|---|---|
| `0x04` | 4 | `ID TigerTag`，芯片类型：TigerTag、TigerTag+ 或 TigerTag Init |
| `0x05` | 4 | `ID Product`：TigerTag+ 上为目录产品，TigerTag 上为 `0xFFFFFFFF` |
| `0x06`–`0x07` | 8 | 材料、两个外观、类型、直径和品牌，均为参考数据库中的 ID |
| `0x08` | 4 | 颜色 1，含 alpha |
| `0x09` | 4 | 出厂数量及其单位 |
| `0x0A`–`0x0B` | 8 | 喷嘴和热床温度范围、干燥温度和时长 |
| `0x0C` | 4 | 时间戳，同时也是 Twin Tag ID |
| `0x0D`–`0x0E` | 8 | 颜色 2 和 3、标签序号和数量、一个保留字节 |
| `0x0F` | 4 | HueForge TD、两个保留字节 |
| `0x10`–`0x16` | 28 | 自定义消息，UTF-8 |
| `0x17` | 4 | 剩余数量，由 Tiger Scale 更新，一个保留字节 |
| `0x18`–`0x27` | 64 | TigerTag+ Certified 上为签名（`R` 和 `S`）；否则空闲 |

这是一张示意图，而不是规范。以
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#2-data-structure--tigertag-binary-format)
中的逐字段表格为准：它给出每个字段的精确偏移，并链接到每一张 ID 表。解析器应遵循该表格。

想看到这张示意图填入实际数据，可以使用 [playground](https://tigersystem.io/playground-tigertag)：它可以根据目录产品或你选择的字段构建一张芯片，也可以解码你读取到的芯片的十六进制内容，并显示每个字段及其字节。一切都在浏览器中运行。

## 读取与写入

| 工具 | 读取 | 写入 |
|---|---|---|
| [Tiger NFC Connect](../products/tiger-nfc-connect.md)（移动 NFC） | 轻触芯片——线轴在手机上打开 | 点击 **Make** 再轻触一次即可写入；**Dual NFC** 在一次会话中写入线轴的两枚芯片 |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | 扫描时自动打开线轴 | 带引导、核对 UID 的写入 |
| [JS SDK](../developers/sdks.md)（npm 上的 `tigertag`） | 解码 144 字节载荷 | 编码新的载荷 |
| [Python SDK](../developers/sdks.md) | 解码载荷；`tigertag[verify]` 还会校验签名 | 编码新的载荷 |

两个应用与读卡器通信；SDK 不会。SDK 解码和编码的是**载荷**——NFC 硬件请自备。

## 版本管理

载荷带有格式版本（参考表 `id_version`），因此读卡器可以与较旧的芯片保持兼容。

---

**◀ 上一页：** [通用耗材身份](./universal-filament-identity.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [库存与云同步](./inventory-and-cloud-sync.md)

**另见：** [TigerTag](../products/tigertag.md)、[SDK](../developers/sdks.md)、[兼容性](../compatibility/README.md)
