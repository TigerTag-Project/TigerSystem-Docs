---
sourceHash: cbf8e821d88b60b01f06da58bf3790fa335e7d0b940f38f9f3ca066fe0851b2b
sourcePath: docs/compatibility/creality.md
---

# Creality

## 打印机连接——**已上线**

| 方面 | 详情 |
|---|---|
| 协议 | WebSocket，端口 9999（基于心跳） |
| 耗材 | 支持 CFS 多线轴（boxsInfo） |
| 摄像头 | WebRTC 视频（端口 8000） |
| 遥测 | 温度、作业进度、打印预览 |

## 原生 RFID——规范已记录，应用内读取计划中

Creality 线轴标签是 **Mifare Classic 1K**，**扇区 1 使用 AES-128-ECB 密钥**，
并可选择对载荷加密。只读解码规范：
[`docs/rfid-vendors/creality.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/creality.md)。

## 工作流程

1. **添加打印机**——局域网发现或按 IP 添加；Tiger Studio 通过
 打印机的 WebSocket 连接并保持链路。
2. **扫描线轴**——手机或桌面读卡器；它会进入你的库存。
3. **分配到 CFS 槽位**——Tiger Studio 把库存中的线轴映射到
 CFS 盒，使机器端的耗材信息与实际相符。
4. **实时**——温度、作业进度、打印预览、“结束时间”，以及打印机视图中的
 **WebRTC 摄像头**画面。

## 限制

- 应用内尚不能读取原生 Creality 标签——规范已记录，目前的工作目标是把厂商标签数据转换为 TigerData 线轴（参见[兼容性](./README.md)）。

---

**◀ 上一页：** [Bambu Lab](./bambu-lab.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [Elegoo](./elegoo.md)
