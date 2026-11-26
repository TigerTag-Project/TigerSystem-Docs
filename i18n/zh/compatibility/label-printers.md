---
sourceHash: 26da829356af402a7e35df1fd40b2563bb966a93eecf9345a4602304c6124f16
sourcePath: docs/compatibility/label-printers.md
---

# 蓝牙标签打印机

直接从手机把线轴的 TigerQR 标签打印到小型蓝牙热敏标签打印机上：不用电脑，不用 PDF，中间也不需要打印机自己的应用。

> **截至 2026-11-26 的状态。**[Tiger NFC Connect](../products/tiger-nfc-connect.md)（iOS / Android）从其**下一次更新**起可在这些打印机上打印。[Tiger Studio](../products/tiger-studio.md) 正在集成同样的打印机，**尚未发布**。在此之前，任何打印机都可以通过其自带应用，使用标签的 PDF、PNG 或 SVG 打印（[打印标签](../developers/spool-ids-and-qr-links.md)）。

## 工作方式

- Tiger NFC Connect 通过蓝牙把**线轴**或**耗材**的 TigerQR 标签发送到打印机。
- **每台打印机记住自己的标签格式**，即装在其中的标签卷。
- 每次打印都保留**少量安全边距**，即使标签卷略有偏移，也能完整打印整张标签。
- 12 mm 标签卷打印 40 × 12 mm 的 **Slim** 标签；50 mm 宽的标签卷可打印更大的标签（已测试 50 × 30 mm）。

> **提示：**一台打印机**同一时间只能连接一台设备**。从 Tiger NFC Connect 打印前，请先关闭打印机厂商自己的应用。

## 我们的推荐

Niimbot 打印机非常、非常好。**D110** 性价比最高，以它的价格来说非常好；预算更多、需要更大标签时，选 **B1** 和 **B1 Pro**。Marklife **P15** 可以用，但体积更大，打印质量似乎略差。

四款都已在纸上实测。

| 打印机 | 标签卷 | 实测标签 | 我们的看法 | 购买 |
|---|---|---|---|---|
| **Niimbot D110**（及 D110-M） | 12 mm | 40 × 12 mm | **性价比最高**：以它的价格来说非常好 | [Amazon](https://link.amazon/B039fb6VY) |
| **Niimbot B1** | 最宽 50 mm | 50 × 30 mm | 标签更大，适合预算更多时 | [Amazon](https://link.amazon/B0a3CHt3H) |
| **Niimbot B1 Pro** | 50 mm 宽 | 50 × 30 mm | 300 dpi，打印最清晰 | [Amazon](https://link.amazon/B09wFIrwk) |
| **Marklife P15**（在 Amazon 上以“Pristar P15”销售） | 12 mm | 40 × 12 mm | 可以用，但体积更大，打印略差 | [Amazon](https://link.amazon/B0iRdI1G6) |

> 此表中的链接是 **Amazon 联盟链接**（amazon.fr）：作为 Amazon 联盟成员，TigerTag 从符合条件的购买中获得收入，**不会给你增加任何费用**。这有助于资助开放协议。在其他任何地方购买同一款打印机，效果完全一样。

这里不列价格：价格变化太频繁。

## 同样支持，尚未在纸上实测

应用的代码也支持以下型号；它们尚未在纸上实测：

- **Niimbot：**D11、D101、B18、B21、B21 Pro、B3S；
- **Phomemo：**M110、M120、M200、M220、M221。

---

**▲ [文档索引](../../README.md)** · **另见：**[兼容的第三方硬件](./third-party-hardware.md)、[Tiger NFC Connect](../products/tiger-nfc-connect.md)、[线轴 id 与二维码链接](../developers/spool-ids-and-qr-links.md)
