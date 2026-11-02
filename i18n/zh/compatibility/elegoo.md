---
sourceHash: 636849e192cdbe3efc38d30a1b16a4f58828a9158ac9a9f1b2584f5977ce3b08
sourcePath: docs/compatibility/elegoo.md
---

# Elegoo

## 打印机连接——**已上线**

| 方面 | 详情 |
|---|---|
| 协议 | MQTT，端口 1883 |
| 发现 | UDP 广播，端口 52700 |
| 耗材 | 4 个槽位（Canvas） |
| 控制 | 实时控制面板：归零/点动、温度、灯、风扇、速度模式、进料/退料 |
| 遥测 | 温度、作业进度 |

## 原生 RFID——规范已记录，应用内读取计划中

Elegoo 线轴标签是 **Mifare Ultralight**，仅由**魔术字节**
（`EE EE EE EE`）保护——没有真正的认证。只读解码规范：
[`docs/rfid-vendors/elegoo.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/elegoo.md)。

## 工作流程

1. **添加打印机**——自动局域网发现（UDP 广播）或按 IP
 添加。需要在打印机触摸屏上一次性开启 **LAN Only 模式**——
 [分步说明](#切换到局域网模式)。
2. **扫描线轴**——手机或桌面读卡器；它会进入你的库存。
3. **分配到槽位**——Tiger Studio 把库存中的线轴映射到四个
 Canvas 槽位。
4. **实时与控制**——除了遥测和作业进度，Elegoo 还有一个
 **完整的控制面板**：轴归零/点动、设置喷嘴和热床目标温度、
 开关灯、控制风扇、选择速度模式、逐槽位进料/退料
 耗材。

## 切换到局域网模式

Tiger Studio 的直连需要在打印机本身上启用 **LAN Only 模式**——这是一次性的
屏幕设置。

<div class="ts-model-picker">
<a href="../tutorials/elegoo-cc2-lan-mode.md"><img src="../assets/elegoo-lan-mode/models/cc2.png" alt="Centauri Carbon 2" /><span>Centauri Carbon 2</span></a>
</div>

## 额外功能：写入 Elegoo 格式标签

应用内置的编辑器可以**按 Elegoo 打印机期望的格式重写芯片**——
因此，只要你的工作流程需要，TigerTag 芯片甚至可以变成原生 Elegoo 标签。
你的芯片，你做主。

## 在机器本身上读取 TigerTag——筹备中

一款自定义固件**正在筹备中**，它将让 Elegoo 打印机在机器上
**直接**读取 TigerTag，原理与
[Snapmaker U1](./snapmaker.md) 相同。

它尚未推出，也没有日期。在它推出之前，Elegoo 按上述工作流程读取
经 TigerTag 识别的耗材——通过手机、Tiger Studio 或机器旁的
[TigerSpool](../products/tigerspool.md)，打印机本身无需任何改动。

## 限制

- 应用内尚不能读取原生 Elegoo 标签——规范已记录，目前的工作目标是把厂商标签数据转换为 TigerData 线轴（参见[兼容性](./README.md)）。

---

**◀ 上一页：** [Creality](./creality.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [FlashForge](./flashforge.md)
