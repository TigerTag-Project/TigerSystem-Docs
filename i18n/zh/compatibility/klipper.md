---
sourceHash: 6a70119833796c9aad3bd09cf54863a7572f174fd87f0f0f4d3a948ea25fe24a
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## 打印机连接——尚未支持，但基础已经具备

通用 Klipper 打印机（通过 **Moonraker** API）目前**不是官方
集成**。不过，Tiger Studio 的 Snapmaker 连接已经使用
Moonraker WebSocket/JSON-RPC——这正是构建
厂商中立的 Klipper 集成的天然基础。

| 方面 | 状态 |
|---|---|
| Moonraker 传输 | 已有（Snapmaker 集成在使用） |
| 通用 Klipper 支持 | 计划中 / 有待明确范围 |
| 耗材槽位映射 | 取决于机器的 MMU 配置——有待明确范围 |

> **TODO：** 确定目标：哪一部分 Moonraker 接口足够通用
> （打印机对象、作业队列、摄像头），以及 MMU/耗材槽位如何在
> Klipper 生态中映射（ERCF、MMU2、Box Turtle……）。

## 如今在 Klipper 上使用 TigerTag

除了打印机实时连接之外，其余一切都已可用：TigerTag 芯片、
库存、重量追踪、货架和分享都与打印机无关。

---

**◀ 上一页：** [Snapmaker](./snapmaker.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [OpenSpool](./openspool.md)
