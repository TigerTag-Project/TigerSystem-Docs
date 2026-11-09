---
sourceHash: dca3254cea9d6296d6f313f60c5ca02779bb716dda7dd4a0a7f1b717b4c12590
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## 打印机连接——**已上线（beta）**，自 Tiger Studio 2.41 起

Tiger Studio 可连接**任何运行 Klipper 和 Moonraker 的打印机**：Voron、RatRig、Vzbot、Sovol、Qidi、
Elegoo Neptune 4、Creality K1 / K2 / Ender-3 V3、FLSun、Artillery X4、Kingroon 以及其他机型——
添加流程中收录了 161 台机器及其图片。该集成目前为 **beta** 版。

| 方面 | 详情 |
|---|---|
| 协议 | Moonraker HTTP API，每 2 s 轮询一次；默认端口 7125，也可设置其他端口 |
| 发现 | 局域网扫描，或手动输入地址并可选填 Moonraker API 密钥 |
| 耗材槽位 | **Happy Hare** 的 gate 和 **AFC** 的 lane，通过机器自身的命令读取和编辑（`MMU_GATE_MAP`、`SET_MATERIAL` / `SET_COLOR`）；普通挤出机会显示出来，但不保存耗材数据 |
| 打印任务 | 实时任务，含缩略图和层数；暂停、继续、取消 |
| 控制 | 移动轴、归零、模型风扇、速度、灯光；点击即可设置温度 |
| 遥测 | 挤出机、热床、腔体，以及每一个 `temperature_sensor` / `temperature_fan` / `heater_generic` |
| 摄像头 | MJPEG 视频流或快照 |

制造商在 Klipper 之上部署封闭固件的机器保留它们自己的连接方式：[Snapmaker](./snapmaker.md)、
[FlashForge](./flashforge.md) 和 [Anycubic](./anycubic.md) 通过各自的连接器接入，而不是这个。
两种方式都能连接的机器——例如 Creality K1——会在添加时让你选择。

## 原生 RFID——不适用

Klipper 是打印机固件，不是线轴标签格式。线轴的身份来自它的 TigerTag，用手机或桌面读卡器读取。

## 工作流程

1. **添加打印机**——由局域网扫描找到，或手动添加。
2. **扫描线轴**——用你的手机（或桌面读卡器）；它会进入你的库存。
3. **把它分配给一个 gate 或 lane**——Tiger Studio 使用机器自身的 Happy Hare 或 AFC 命令写入，
 因此打印机上无需安装任何东西。
4. **实时**——在打印机视图中查看任务、温度和摄像头。

[TigerSpool](../products/tigerspool.md) 也可以分配 Klipper 槽位，但这条路径是**实验性的**：
它是针对 Tiger Studio 的驱动和一个 Moonraker 模拟环境编写的，尚未在真实打印机上运行过。

---

**◀ 上一页：** [Snapmaker](./snapmaker.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [OpenSpool](./openspool.md)
