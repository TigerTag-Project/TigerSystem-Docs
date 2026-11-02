---
sourceHash: 7dc230b977dd8daee1bee1dcf91401303264ea4addf2fc860ad6ea32b0198db0
sourcePath: docs/products/factory-suite.md
---

# TigerTag Factory 与 TigerTag Manager（工厂套件）

## 用途

TigerSystem 的**工业侧**——耗材工厂用来把 TigerTag 装进
产品的工具。与面向用户的沙盒不同，**这是
生产级软件**：正是它把超过 250 万枚芯片送到了
用户手中。

两个工具覆盖了这项工作的两个部分：

- **TigerTag Manager**——管理品牌的**耗材数据库**：产品、
 材料、颜色、设置。
- **TigerTag Factory**——以产线速度**把数据批量写入每一卷生产出来的线轴**：
 **每枚芯片约 1 秒**——每天数千卷线轴，
 一键完成。

## 载体——两枚芯片，撕下即贴

|| |
|---|---|
| <img src="../assets/carrier-bare.png" alt="裸的 TigerTag 载体——两根独立的 NFC 天线，每端一根" /> | <img src="../assets/carrier-branded.png" alt="出厂状态的 TigerTag 载体，带有两枚品牌芯片" /> |

*两枚独立的 NFC 芯片清晰可见——每端一枚。两端
折过纸芯，使线轴从任一侧都能读取；中间部分
用工业级 3M 胶粘合（468MP / 200MP）。操作员撕下再贴上——
产线上的其他环节都不变。载体设计是公开的，
可在家自行打印。*

<img src="../assets/refill-with-tigertag-orange.png" width="340" alt="贴在耗材补充装上的载体" />

## 来源证明

在产线上写入的芯片带有**工厂签名**——这种
认证**证明产品的来源**。它是
[TigerTag+](./tigertag-plus.md) 恢复出厂状态背后的一层，也是
品牌的信任锚点：一枚带签名的芯片确实出自
真正的工厂。

## 可用性

**不公开。** 这些工具仅限于在其产品中
采用 TigerTag RFID/NFC 技术的第三方制造商。一条耗材
生产线最快可在 **5 天**内
用上 TigerTag——参见
[面向耗材制造商](../vision/for-filament-manufacturers.md)，并通过
[GitHub 组织](https://github.com/TigerTag-Project)联系我们。

---

**▲ [文档索引](../../README.md)** · **另见：** [面向耗材制造商](../vision/for-filament-manufacturers.md)、[TigerTag+](./tigertag-plus.md)、[产品](./README.md)
