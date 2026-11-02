---
sourceHash: 964aaebb15d1afe5fb99c214223b57ec3c35d863a67794dba96b1f6cb91be960
sourcePath: docs/developers/account-api.md
---

# 账号 API 与第三方集成

## 约定

第三方应用连接 TigerSystem 后端——普通的 Firebase——采用
**标准的 Firebase 模式**：

1. 获取公开的 SDK 配置：
 `https://tigertag-cdn.web.app/__/firebase/init.json`
2. `firebase.initializeApp(config)`
3. 对**用户自己的 TigerTag 账号**进行身份验证（配置公开是
   有意为之——安全由服务器端的 Firestore 规则保证）。
4. 在文档所述的范围内读写该用户的数据。

## 权威文档

完整的集成约定位于
**[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)**：

| 文档 | 内容 |
|---|---|
| `docs/01-firebase-config.md` | 项目配置与连接 |
| `docs/02-authentication.md` | 认证流程 |
| `docs/03-data-model.md` | Firestore 集合与字段（数据模型参考） |
| `docs/04-friend-system.md` | 发现码、请求、共享库存 |
| `docs/05-rate-limiting.md` | 合理使用限制 |
| `examples/` | Python CLI、ESP32/Arduino、Home Assistant、Spoolman 桥接 |

## 安全规则——会遇到什么

- `users/{uid}/**` 默认仅限所有者访问。
- 跨用户写入总是需要**事先存在的关系**（例如已接受的
 好友关系）——没有任何开放的写入路径。
- 部分集合设有**字段白名单**：携带未列出字段的写入
 会被拒绝。
- 仅管理员可用的字段（角色、调试标志）永远不允许客户端写入。

## HTTP 端点

`cdn.tigertag.io` 与账号位于**同一个 Firebase 项目**中：它
托管共享参考数据库、线轴图片（包括 TigerTag+
产品照片），以及与 TigerSystem 数据库相关的 HTTP 端点。

| 端点 | 用途 |
|---|---|
| `https://cdn.tigertag.io/healthz/` | 健康检查 |
| `https://cdn.tigertag.io/setSpoolWeightByRfid?ApiKey=&uid=&weight=` | 按芯片 UID 推送线轴重量（秤类设备使用） |

> **TODO：** 完整的 HTTP API 目录（认证模型、错误格式）——将在
> 集成仓库中编写文档，并在此处概述。

---

**◀ 上一页：** [SDK](./sdks.md) · **▲ [文档索引](../../README.md)** · **下一页 ▶** [常见问题](../faq/README.md)

**另见：** [库存与云同步](../concepts/inventory-and-cloud-sync.md)、[架构](../architecture/overview.md)
