---
sourceHash: 7df403d9ec01cc589f8d8c155cd8d0cb8154cd2993e09860c8c2a54ec787ef9c
sourcePath: docs/compatibility/bambu-lab.md
---

# Bambu Lab

## 打印机连接——**已上线**

Tiger Studio 通过两种方式连接 Bambu Lab 打印机：

| 方面 | 详情 |
|---|---|
| 局域网 | 通过 MQTTS（TLS）直连打印机，端口 8883。需要在打印机上一次性开启 **LAN Only 模式**和**开发者模式**——[按型号分步说明](#切换到局域网模式)。 |
| 云 | 用你的 Bambu Lab 账号登录一次（邮箱 + 一次性验证码）——账号下的每台打印机都会被自动找到，包括局域网访问码。这一部分无需在打印机上切换任何开关。 |
| 耗材 | 支持 AMS——最多 16 个槽位，可逐槽位编辑耗材 |
| 发现 | 局域网：SSDP + TLS 探测，另可按 IP 添加。云：从账号中自动获取。 |
| 摄像头 | JPEG 流（TCP 6000）/ RTSP——两种方式下是同一路画面，需要在打印机上启用 **LAN Mode Liveview** |
| 遥测 | 温度、任务进度、打印预览 |

> **目前云连接是只读的**，只有一个例外。你可以获得实时遥测——
> 温度、进度、摄像头——以及打印机的**灯**，它确实可以通过云切换。
> 其他所有会作用于机器的操作（暂停、继续、停止）都需要走局域网路径。

## 原生 RFID——规范已记录，应用内读取计划中

Bambu 线轴标签是 **Mifare Classic 1K**，使用 **HKDF-SHA256 由 UID 派生的密钥**——
在密码学上被锁定，只为厂商的生态系统服务。只读解码规范维护在
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md)。

## 工作流程

1. **添加打印机**——可以**通过局域网**（SSDP 发现，或按 IP 添加，
 并配合打印机的局域网访问码），也可以**通过云**（用你的 Bambu Lab 账号登录——
 账号下的每台打印机都会被自动找到）。
 局域网路径需要先在打印机上一次性开启 LAN Only 模式和开发者模式——
 [按型号分步说明](#切换到局域网模式)。
2. **扫描线轴**——手机或桌面读卡器；线轴会进入你的库存。
3. **分配到 AMS 槽位**——Tiger Studio 通过 MQTTS 把耗材配置
 （材料、颜色）推送到槽位；机器端的信息现在与现实一致，覆盖最多 16 个 AMS 槽位。
4. **实时**——温度、任务进度、打印预览、挂钟时间的
 **“结束于”**，以及摄像头画面，全都在打印机视图中。

## 切换到局域网模式

局域网路径需要在打印机本身上启用 **LAN Only 模式**和**开发者模式**——这是一次性的屏幕设置。
请在下方选择你的型号，查看具体步骤。

<div class="ts-model-picker">
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1-mini.png" alt="A1 mini" /><span>A1 mini</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1.png" alt="A1" /><span>A1</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a2l.png" alt="A2L" /><span>A2L</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1p.png" alt="P1P" /><span>P1P</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1s.png" alt="P1S" /><span>P1S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/p2s.png" alt="P2S" /><span>P2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1c.png" alt="X1 Carbon" /><span>X1 Carbon</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1e.png" alt="X1E" /><span>X1E</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x2d.png" alt="X2D" /><span>X2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2s.png" alt="H2S" /><span>H2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2d.png" alt="H2D" /><span>H2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2dpro.png" alt="H2D Pro" /><span>H2D Pro</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2c.png" alt="H2C" /><span>H2C</span></a>
</div>

## 局限

- 应用内尚不能读取 Bambu 原生标签——规范已记录，目前的工作目标是把厂商标签数据转换为 TigerData 线轴（参见[兼容性](./README.md)）。
- 无论使用哪种连接路径，摄像头画面都需要在打印机上启用 LAN Mode Liveview。

---

**◀ 上一页：** [兼容性](./README.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [Creality](./creality.md)
