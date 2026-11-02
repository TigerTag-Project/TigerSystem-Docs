---
sourceHash: a2788a5364e611177c9b1b011d762345b26e5a8fd204e75a6b2b8beed634955c
sourcePath: docs/compatibility/opentag3d.md
---

# OpenTag3D

## 它是什么

**[OpenTag3D](https://github.com/GooborgStudios/OpenTag3D)** 是社区驱动的开放线轴标签标准：
一种大小刚好适配 NTAG215 的 NDEF 数据载荷，不加密，规范公开，支持者名单公开。
与 TigerTag 一样，它的诞生是因为业界正被每个打印机品牌各自一套的专有格式填满，
并且它明确要求标签必须能**完全离线**工作。从精神上说，它们是近亲。

两种标准也都定义了一个在线层，并且都称之为 **Web API**——
两种设计恰恰在这里分道扬镳，既是有意为之，方向也截然相反。

## 两种设计，并排比较

| 方面 | TigerTag | OpenTag3D |
|---|---|---|
| 芯片存储什么来访问在线层 | 一个**产品库产品 id** | 一个**“在线数据 URL”**——即地址本身 |
| 由谁应答 | **一个端点，覆盖所有品牌** | 每枚标签一个端点，由写入者自行托管 |
| 在线层的角色 | **更新通道**：更正内容可以送达已经出货的线轴 | **按设计只是补充**——规范声明它“绝不会被用于打印机功能” |
| 监管文件 | 按产品提供 TDS · MSDS · RoHS · REACH · EN71 · 食品接触 | 不在数据结构中——Web API 承载照片、价格、产品链接、QA 状态、备注 |
| 在线副本中的标签数据 | 有，完整的资料 | 有，`tag_data`——**可选**，与除版本之外的所有字段一样 |
| 来源证明 | 可选——[TigerTag+ Certified](../products/tigertag-plus.md) 经过签名，可离线验证 | 没有，这是刻意的：规范拒绝加密，称其“不适合开源标准” |

## 用 id 还是用地址，意味着什么

两种做法都不是偶然，各有所得。

存储**地址**让标签自给自足：写入者决定数据存放在哪里，无需对任何人负责。
代价是地址被写进了芯片，占用载荷的字节预算，
而芯片一旦到了客户手中就无法重新指向——如果那台主机迁移或不再应答，出问题的就是这条链接。

存储 **id** 看起来是在路径中放入了一个共享端点——
如果这个对照表由我们说了算、可以扣着不放，那确实如此。但事实并非如此：
整个产品库作为单个文件发布，即
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json)，
包含数据库中每一种耗材的每一个 id，全天刷新，任何人都可以免费复制。
读卡器可以持有自己的镜像，完全无需网络就能解析 id。

所以 id 带来了地址做不到的事。芯片从不保存位置，因此无论任何主机发生什么，它都依然有效；
读卡器只需实现一个端点，就能适用于它从未见过的耗材；
制造商可以在线轴离开工厂六个月后更正数据；
而解析本身也可以在任何人都可保留的副本上完全离线进行。

[签名](../products/tigertag-plus-certified.md)是另一个结果。
因为 TigerTag+ Certified 签署的是芯片自身的 UID，
数据可以在线改进，而线轴依然能证明自己来自哪里——离线，在客户自己的手机上。

## 互操作性

TigerTag 芯片**从不写锁定**。如果你更喜欢 OpenTag3D——或任何其他格式——
你可以自由地把出厂芯片改写成那种格式。
这与我们对 [OpenSpool](./openspool.md) 的立场相同，理由也相同：线轴属于买下它的人。

---

**◀ 上一页：** [OpenSpool](./openspool.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [开发者](../developers/README.md)

**另见：** [Web API](../developers/web-api.md)、[TigerTag+ Certified](../products/tigertag-plus-certified.md)
