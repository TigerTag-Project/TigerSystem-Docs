---
sourceHash: e67e9a1f7c1b5875001868a32d82d49a6fc2fbfd789bf0823a07c43531d8eea4
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# 将 AI 助手连接到你的账号

问 Claude 或 ChatGPT“我还剩多少 PETG？”，答案直接来自你自己的库存。TigerSystem.io 连接器让 AI 助手**读取**你的 TigerSystem 账号——仅此而已。它和 Tiger Studio 中的本地服务器是同一个思路，只不过托管在云端：可以在网页、手机上使用，也无需运行 Studio。

**连接器的地址：**

```
https://mcp.tigersystem.io/mcp
```

它使用 MCP（Model Context Protocol，模型上下文协议），这是助手连接外部工具所用的开放标准。任何支持带 OAuth 的远程 MCP 服务器的助手都可以使用它。

## 助手可以读取什么

- 你的线轴：品牌、材料、颜色、剩余重量、温度，以及每一卷存放的位置；
- 你的货架、心愿单和库存历史；
- 你的打印机和 TigerScale——**绝不包括它们的访问码或密码**；
- 好友与你分享的内容（他们的线轴、货架和心愿单）。

它**无法更改任何内容**：所有工具都是只读的。它以你的身份读取，遵循与各个应用相同的访问规则，因此永远看不到其他账号。凭据——打印机访问码、云端登录信息、你的私钥、你的电子邮件——无论它如何请求，都不会被返回。

## Claude（网页、桌面、移动端）

1. **设置 → 连接器 → 添加自定义连接器。**
2. 将其命名为 `TigerSystem.io`，粘贴上面的地址，高级 OAuth 字段留空，然后添加。
3. 点击**连接**。你会进入 tigersystem.io：登录，确认页面说明答案将发送到 claude.ai，然后点击**允许**。
4. 在对话中，从工具菜单里打开 TigerSystem.io 连接器，然后提出你的问题。

## ChatGPT

自定义连接器需要**开发者模式**（付费方案；Business 方案需由管理员启用）。

1. 打开 **设置 → 应用与连接器 → 高级设置 → 开发者模式**。
2. **创建**连接器：名称 `TigerSystem.io`，地址同上，认证方式选 **OAuth**，不填客户端 ID 或密钥。
3. 在 tigersystem.io 登录并点击**允许**。
4. 在新的对话中启用该连接器并提问。

## Grok

自定义连接器需要**付费的 Grok 方案**。

1. 打开 **grok.com/connectors → New Connector → Custom**。
2. 将其命名为 `TigerSystem.io` 并粘贴上面的地址。
3. 在 tigersystem.io 登录并点击**允许**。
4. 在对话中打开 TigerSystem.io 连接器并提问。

## Le Chat（Mistral）

自定义连接器由**管理员**添加——在个人账号上，管理员就是你自己。

1. **Connectors → Add Connector → Custom MCP Connector。**
2. 将其命名为 `TigerSystem.io` 并粘贴上面的地址；Le Chat 会自动识别登录方式（OAuth）。
3. 在 tigersystem.io 登录并点击**允许**。
4. 在对话中启用该连接器并提问。

这些应用的菜单名称经常变动；步骤保持不变。

## Codex、Cursor 及其他桌面客户端

添加一个类型为 **Streamable HTTP** 的远程 MCP 服务器，地址同上，不填令牌。应用会打开你的浏览器进行登录；点击**允许**之后，浏览器会跳转到一个 `127.0.0.1` 地址——那是你电脑上的应用在接收登录结果。该页面空白或显示“无法连接”是正常的：关闭标签页即可。

## 切断助手的访问

**tigersystem.io → 你的账号 → 数据 → 已连接的助手。** 你允许过的每个助手都会列出，并显示连接时间和上次使用时间。点击**切断访问**会立即让它停止。

## 须知

- 助手给出的答案所依据的数据可能最长有两分钟的延迟：最近的读取结果会被短暂缓存，以保持快速和轻量。
- 打印机的实时状态（在线、正在打印）无法从云端获得——只有位于打印机所在网络中的 Tiger Studio 才能看到。
- 备注、颜色名称和心愿单文字是你（或好友）自己写的话；助手被告知只需如实转述，绝不把它们当作指令。

---

**▲ [文档索引](../../README.md)** · **另见：** [Tiger Studio](../products/tiger-studio.md)、[指南](./README.md)
