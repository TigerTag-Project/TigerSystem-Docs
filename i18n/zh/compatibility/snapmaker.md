---
sourceHash: 448c6630969a0d99765d2a206f9a0788e9c4e02ef90d870a57ba26db3c1c9fdf
sourcePath: docs/compatibility/snapmaker.md
---

# Snapmaker

## 打印机连接——**已上线**

| 方面 | 详情 |
|---|---|
| 协议 | Moonraker WebSocket（JSON-RPC），端口 7125 + 专有扩展 |
| 发现 | HTTP 扫描 |
| 耗材 | 4 个槽位——可逐槽位编辑耗材（RRGGBBAA 颜色模型） |
| 控制 | 实时控制面板（轴、温度、灯、风扇、速度、进料/退料） |
| 遥测 | 温度、作业进度 |

## 原生 RFID——规范已记录，应用内读取计划中

Snapmaker 线轴标签是 **Mifare Classic 1K**，使用 **HKDF 派生的逐扇区
密钥**，并带有 **RSA-2048 PKCS#1 v1.5 + SHA-256 签名**——这是迄今记录过的
锁定最严的格式。只读解码规范：
[`docs/rfid-vendors/snapmaker.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/snapmaker.md)。

## 工作流程

1. **添加打印机**——在局域网上进行 HTTP 扫描，或按 IP 添加；Tiger Studio
 使用 Moonraker（基于 WebSocket 的 JSON-RPC）通信。
2. **扫描线轴**——手机或桌面读卡器；它会进入你的库存。
3. **分配到槽位**——逐槽位编辑耗材（Snapmaker 的 RRGGBBAA
 颜色模型由应用透明处理）。
4. **实时与控制**——遥测、作业进度，以及一个**控制面板**：
 轴、温度、灯、风扇、速度模式、逐槽位进料/退料。

## 限制

- 应用内尚不能读取原生 Snapmaker 标签——规范已记录，目前的工作目标是把厂商标签数据转换为 TigerData 线轴（参见[兼容性](./README.md)）。

## 第一台原生读取 TigerTag 的打印机

社区的
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
（独立项目，GPL-3.0）加入了 SSH、摄像头串流、指标监控——同时也让
**Snapmaker U1 能在机器本身上原生读取 TigerTag**。这
使 U1 成为第一台无需任何应用居中就能识别 TigerTag 线轴的打印机——也就是
[集体行动](../vision/for-filament-manufacturers.md)所瞄准的未来，
经由社区提前到来。参见
[第三方集成](../developers/integrations.md)。

---

**◀ 上一页：** [Anycubic](./anycubic.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [Klipper](./klipper.md)
