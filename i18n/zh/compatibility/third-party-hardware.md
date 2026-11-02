---
sourceHash: a05c4e52f6cae3704b4e16e2b3d1b6d55653145391a9bdd6f31630c6821c91ab
sourcePath: docs/compatibility/third-party-hardware.md
---

# 兼容的第三方硬件

这个生态系统与并非自己制造的硬件配合良好。本页是能以各种方式连接的第三方设备的**不断增长的列表**——
随着开发持续推进、更多创客接入他们的设备，它会不断扩充。

| 设备 | 制造商 | 功能 | 适用于 |
|---|---|---|---|
| **ACR122U** NFC 读卡器 | ACS | USB NFC 读写器——扫描芯片，线轴自动打开；带引导、核对 UID 的写入。两个这样的读卡器驱动一台 [TigerPOD](../products/tigerpod.md) | [Tiger Studio](../products/tiger-studio.md) |
| **TD-1** 耗材分析仪 | [AJAX-3D](https://ajax-3d.com) | DIY 自制——测量耗材的**透射距离**（HueForge / Full Spectrum 打印所用的数值）+ 颜色（RGB，1–3 个槽位，仅供参考） | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tigertag-connect.md)（USB-C） |
| **TD1s** 耗材分析仪 | [AJAX-3D](https://ajax-3d.com) | 同一设备系列，预先组装，开箱即用 | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tigertag-connect.md)（USB-C） |
| **DYMO M 系列** USB 秤（M5、M10、M25…） | DYMO | 标准 USB“HID Scale”设备——实时重量写入线轴资料（[协议详情](../products/tigerscale.md)） | [Tiger Studio](../products/tiger-studio.md) |
| **任何符合 HID Scale 标准的 USB 秤** | 任意 | 与 DYMO M 系列相同的标准协议（HID 用途页 `0x8D`）——品牌无关紧要 | [Tiger Studio](../products/tiger-studio.md) |
| **任何空白 NTAG213/215/216 芯片** | 任意 | 耗材本身——随处可买，效果完全相同（[选哪种芯片？](../../docs/faq/README.md)） | 所有 |

|| | | |
|---|---|---|---|
| <img src="../assets/acr122u.jpg" alt="ACR122U USB NFC 读卡器" /> | <img src="../assets/td1s-front.jpg" alt="AJAX-3D TD1s 耗材分析仪" /> | <img src="../assets/dymo-usb-scale.png" alt="DYMO M 系列 USB HID 秤" /> | <img src="../assets/ntag-chip.png" alt="裸露的 NTAG NFC 芯片——可见天线线圈" /> |

*ACR122U 读卡器（每台 [TigerPOD](../products/tigerpod.md) 内部都有两个）· AJAX-3D TD1s · DYMO M 系列 USB 秤 · 芯片本身，天线裸露。*

<img src="../assets/td1s-in-studio.jpg" width="100%" alt="集成在 Tiger Studio 中的 TD1s——测得的颜色和 TD 流入线轴资料" />

*TD1s 在 Tiger Studio 中工作。*

测得的数值不会停留在设备里：TD 或重量会进入线轴资料，
并且可以保存在 **TigerTag 协议本身**中——在芯片上，或在 `.ttag` 文件中。

## 他人制造的读卡器

有些创客自己制造读卡器，直接使用 TigerTag，完全不经过我们的任何软件。
**BambuTagger**（[bambutagger.de](https://www.bambutagger.de/en/)）是一个德国开源项目，
发布基于 ESP32 的线轴读卡器——源代码在 GitHub 上，外壳可打印，附 PCB 文件和固件，全部免费。
它的两款设备声明支持 TigerTag：

| 设备 | 是什么 | 对 TigerTag 做什么 |
|---|---|---|
| **[BT-Touch](https://www.bambutagger.de/en/bt-touch)** | 电池供电的设备，配 5″ 800×480 触摸屏——ESP32-S3 加一个 RC522 读卡器——在本地存储 2000 多枚标签 | **读取、克隆并写入** TigerTag，同时支持 Bambu Lab、Spoolease、OpenSpool 和 OpenTag3D 标签 |
| **[BT-AMS-C](https://www.bambutagger.de/en/bt-ams)** | 安装在 Bambu Lab AMS 上的四槽位读卡器——ESP32 搭配 4 个 RC522、OLED 和 TFT 显示屏、可寻址 LED。显示实时 AMS 槽位数据，并**把标签数据发送到打印机 / BMCU** | 读取同样的五类标签，每个槽位一个 |

有两点值得说清楚。

**这些是兼容，而非认证。** 第三方可以随意声明*“兼容 TigerTag”*，无需征得任何人同意——
这里的情形正是如此，这也正是开放格式的意义所在。但这不是*认证*：
认证是 TigerSystem 授予的审核，这两款设备都没有经历过审核。
两者的区别在[商标政策](../../TRADEMARK.md)中有说明。

**克隆芯片不是格式的漏洞。** 标准 TigerTag 不带任何身份验证，也从不写锁定，因此复制它是意料之中的事——
这与你可以改写自己的芯片是同一项特性。
复制品无法携带的，是有效的 [TigerTag+](../products/tigertag-plus.md) 签名：
克隆的标签在客户自己的手机上离线验证就会失败。

这类设备无需我们参与就能存在，恰恰是这个格式的衡量标准：
没有向我们提任何要求，不需要密钥，也没有签署任何协议。

## 把你的硬件列在这里

正在制造或接入设备？协议是开放的，[SDK](../developers/sdks.md) 已就绪，
而 **TigerTag Certified** 则为经过验证的集成而设。
请在 [Discord](https://discord.gg/3Qv5TSqnJH) 或发邮件至
[tigertag@tigertag.io](mailto:tigertag@tigertag.io) 告诉我们——这份列表就是要不断增长的。

---

**▲ [文档索引](../../README.md)** · **另见：** [兼容性](./README.md)、[第三方集成（软件）](../developers/integrations.md)、[产品](../products/README.md)
