---
sourceHash: 19ce9f2af8d9561b6298fb076ca9ac4da141671c3caafc2201c393e1f19938a2
sourcePath: docs/developers/sdks.md
---

# SDK

两个官方 SDK 负责处理所有 TigerTag 芯片操作——读取 144 字节
NTAG 载荷、校验 TigerTag 格式，以及编码新的芯片数据。

## JavaScript — `tigertag`（npm）

- 仓库：[TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS)（Apache-2.0）
- 以 **`tigertag`** 为名发布在 npm 上。
- Tiger Studio 内部使用；也可独立使用，用来构建自定义的
 TigerTag 兼容工具。

```bash
npm install tigertag
```

## Python

- 仓库：[TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python)（Apache-2.0）
- 以 **`tigertag`** 为名发布在 PyPI 上——适用于脚本、工具和自动化。

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

> **TODO：** 两个 SDK 的最小解析/编码代码示例——待其稳定后从
> 各 SDK 的 README 引入，或直接链接。不要在此重复 API
> 签名（存在内容漂移的风险）；以各 SDK 的 README 为准。

## SDK 能为你做什么

| 能力 | 说明 |
|---|---|
| 解析 | 把芯片转储解码为耗材身份（品牌、材料、颜色……） |
| 校验 | 检查载荷是否为有效的 TigerTag 格式 |
| 编码 | 构建新的 144 字节载荷，用于写入芯片 |

参考数据（ID → 名称对照表）来自共享数据库——参见
[通用耗材身份](../concepts/universal-filament-identity.md)。

---

**◀ 上一页：** [仓库](./repositories.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [账号 API](./account-api.md)
