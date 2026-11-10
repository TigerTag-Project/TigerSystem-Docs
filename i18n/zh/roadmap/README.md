---
sourceHash: 3d3da9810cce0db33f72c8e05a5c40d86c71eb6c4c6078c06d400f2e6fdc8081
sourcePath: docs/roadmap/README.md
---

# 路线图

## 生态系统的方向

高层次、不带日期的意向（细节按产品分别记录）：

- **多厂商 RFID → TigerData**——从制造商标签（Bambu Lab、Creality、Elegoo、Anycubic、Snapmaker、Qidi、OpenSpool）中取回数据，
 并转换为 TigerData 数字线轴，这样其他品牌的耗材也能在生态系统中被扫描和管理；
 只读规格已经有文档（[兼容性](../compatibility/README.md)）。在互操作模型确定之前，
 有意不集成应用内的直接解码。
- **更多打印机集成**——Klipper/Moonraker 是下一个自然的传输途径
 （[Klipper 页面](../compatibility/klipper.md)）。
- **经销商地图**（*计划中*）——官方经销商正在增长，不止
 [Atome3D](https://atome3d.com)；地图将显示在哪里可以就近购买 TigerTag 芯片。
- ~~`.ttag` 便携文件~~——已在 Tiger Studio v2.14.0 中**发布**：
 [`.ttag` 格式](../developers/ttag-format.md)（导出 + 导入，覆盖全部
 三种线轴层级）。
- **面向树脂的 TigerTag**——将协议扩展到树脂 3D 打印机的树脂容器，把同样的开放身份带给整整第二大类机器。
- **TigerHub 的成长**——位于
 [tigersystem.io](https://tigersystem.io) 的生态系统网站：更丰富的社交沙盒功能
 （心愿单、好友、分享）。
- **文档**——补全本仓库各处的 TODO 占位内容（教程、指南、制造商接入、RFID 负载摘要）。
- **文档语言**——位于
 [wiki.tigersystem.io](https://wiki.tigersystem.io) 的 wiki 首先提供**英语和法语**：
 英语是权威来源，法语由其衍生并经过审阅。一旦两者都完整、各页面不再变动，
 [tigersystem.io](https://tigersystem.io) 其余的语言版本随后跟进——
 **德语、西班牙语、意大利语、波兰语、中文，以及葡萄牙语的巴西和欧洲两种变体**，
 生态系统把它们视为两个独立的语言版本——使文档与生态系统的其余部分对齐。
 更早加入它们，就意味着要维护九份仍在撰写中的页面的副本。
- **当前语言版本之外**——这份清单不以
 [tigersystem.io](https://tigersystem.io) 目前提供的为上限。**日语、韩语和俄语**是其后最有力的候选：
 这三种语言都有活跃的创客社区，而在这三个地方，只有英文的技术文档是真正的障碍，而不只是小小的不便。
 俄语的覆盖范围也远远超出俄罗斯。请注意，即使商店无法发货，一种语言也值得编写文档——
 协议是开放的，任何空白 NTAG 芯片都能用，生态系统中没有任何东西要求购买任何东西。

 实际添加哪些语言，应当依据 wiki 自己的访问数据（等它有了一些之后）来决定，而不是凭猜测。
 每种语言也不必非此即彼：面向用户的部分（教程、常见问题、产品、兼容性）远早于
 [`developers/`](../developers/README.md) 值得被翻译，因为后者的读者本来就使用英文工作。

## 详细路线图

| 产品 | 位置 |
|---|---|
| Tiger Studio | 应用仓库中的 [`ROADMAP.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/ROADMAP.md)——按领域分组，附有规模和风险说明 |
| 其他产品 | 尚无公开路线图：每个产品的计划会出现在其自身仓库的 issues 和发布中（[仓库](../developers/repositories.md)） |

> **说明：** 本页陈述的是方向，不是承诺或日期。

---

**◀ 上一页：** [常见问题](../faq/README.md) · **▲ [文档索引](../../README.md)**

**另见：** [产品](../products/README.md)、[兼容性](../compatibility/README.md)
