---
sourceHash: 2d9fb2d55c78225bfac135d62f3912ead26a4eb709ecafb4ff9d0d0d7d69265e
sourcePath: docs/compatibility/anycubic.md
---

# Anycubic

## 打印机连接——**已上线**（局域网 + 云）

| 方面 | 详情 |
|---|---|
| 协议（局域网） | MQTTS，端口 9883（TLS 1.2），直连打印机 |
| 协议（云） | 签名 REST + 厂商云 MQTT |
| 耗材 | ACE 多色盒——支持逐槽位 |
| 发现 | `/info` 探测，端口 18910 |
| 摄像头 | FLV 流（端口 18088） |
| 控制 | 实时控制面板（轴、温度、灯、风扇、进料/退料） |

> **说明：** 云模式是打印机连接唯一会经过厂商
> 云的情形——局域网模式则完全保持在本地。

## 原生 RFID——规范已记录，应用内读取计划中

Anycubic 线轴标签是 **Mifare Ultralight**，**无认证、无
加密**——读取毫无障碍（也很容易克隆）。只读解码规范：
[`docs/rfid-vendors/anycubic.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/anycubic.md)。

## 工作流程

1. **添加打印机**——两种途径：**局域网模式**（通过
 `/info` 探测在本地发现；连接凭据从厂商
 切片软件的配置中导入）或通过 Anycubic 账号使用**云模式**。
2. **扫描线轴**——手机或桌面读卡器；它会进入你的库存。
3. **分配到 ACE 槽位**——Tiger Studio 把库存中的线轴映射到
 ACE 多色盒。
4. **实时与控制**——遥测、作业进度、FLV 摄像头画面，以及
 一个**控制面板**：轴、温度、灯、风扇、逐槽位
 进料/退料。

## 限制

- 应用内尚不能读取原生 Anycubic 标签——规范已记录，目前的工作目标是把厂商标签数据转换为 TigerData 线轴（参见[兼容性](./README.md)）。

---

**◀ 上一页：** [FlashForge](./flashforge.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [Snapmaker](./snapmaker.md)
