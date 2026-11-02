---
sourceHash: 4534952990769306c8ebf5fcf1d9c93c9ddca86ce463b792d757f36bdda46043
sourcePath: docs/developers/web-api.md
---

# Web API

## 它的用途

TigerTag 把打印机所需的一切都**存放在芯片上，离线可用**。Web API 负责芯片装不下的、以及写入之后会变化的内容：
数据表、安全文件、照片、视频、制造商的更正。

它是**一个 HTTP 端点，适用于每一种耗材、每一个品牌**——无需密钥、无需账号、无需注册，也无需谈判调用额度。
输入产品 id，返回产品。

```
https://api.tigertag.io/api:tigertag/product/get?uid=0&product_id=<ID>&lang=en
```

`lang` 参数用于选择文本字段的语言。

## 返回什么

通过这同一个地址获取的四款真实产品，来自四个不同品牌：

| `product_id` | 产品 | 返回的文件 |
|---|---|---|
| `10` | Polymaker PolyTerra™ PLA | MSDS · TDS · 提示 · 视频 |
| `30` | R3D PLA High Speed | 食品 · MSDS · REACH · RoHS · TDS · 视频 |
| `40` | Sunlu PLA Matte | MSDS · REACH · RoHS · TDS · 视频 |
| `50` | eSun PLA+ | 食品 · MSDS · REACH · RoHS · TDS · 提示 · 视频 |

每个响应都包含身份（品牌、系列、名称、SKU、EAN、颜色）、完整的打印配置（喷嘴、热床、干燥、风扇、直径、重量、邵氏硬度、
透射距离）、产品照片，以及上述 `links` 块——
`tds`、`msds`、`rohs`、`reach`、`en71`、`food`、`tips`、`youtube`。

## 为什么它能让 TigerTag+ 保持最新

[TigerTag+](../products/tigertag-plus.md) 存储的是**产品库产品 id**，而不是地址。
id 永不过期、永不迁移，因此制造商可以在线轴出货六个月后更正某个温度或附上数据表，
每个读卡器在下一次读取时都会看到新值——无需重写芯片上的任何内容，
芯片也从未为了打印而依赖网络。

这也是单一端点如此重要的原因：一个地址服务所有品牌，读卡器只需实现一次，就适用于它从未见过的耗材。

## 离线也可以——整个产品库就是一个文件

以上一切都不要求该端点可达，甚至不要求它存在。

完整参考作为单个文件发布，即
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json)
——**数据库中每一种耗材的每一个 id**，全天刷新，大约 12 MB，无需密钥，无需账号。
任何人都可以下载、镜像、打包进应用、放到工作室的 NAS 上，或带在 U 盘里。

持有这份副本的读卡器可以**完全无需网络**地解析 TigerTag+ id。
这就是 id 比地址更安全的原因：地址需要它的主机应答，而共享参考只需被复制过一次——
并且可以由任何人、在任何时间、复制到地球上的任何地方。

Web API 仍是更新鲜的路径，也是承载数据表和照片的路径。这个文件是它下面的底线。

## 它从不做什么

Web API **无法让芯片工作**，因为芯片本来就不依赖它也能工作。
在飞行模式下读取 TigerTag，你就能得到品牌、材料、颜色、直径、重量和温度——整个打印所需的一切。
Web API 在此之外加上文件和图片，并在其上加上更正。

---

**◀ 上一页：** [账号 API 与第三方集成](./account-api.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [仓库地图](./repositories.md)

**另见：** [TigerTag+](../products/tigertag-plus.md)、[TigerTag+ Certified](../products/tigertag-plus-certified.md)
