# Connect an AI assistant to your account

Ask Claude or ChatGPT "how much PETG do I have left?" and get the answer from
your own inventory. The TigerSystem.io connector lets an AI assistant read your TigerSystem account and, if you allow it, make changes in it. It is the same idea as the local server in Tiger
Studio, but hosted: it works from the web, from a phone, and without Studio
running.

**The connector's address:**

```
https://mcp.tigersystem.io/mcp
```

It speaks MCP (Model Context Protocol), the open standard assistants use to
reach outside tools. Any assistant that supports remote MCP servers with OAuth
can use it.

**For TigerSquad members.** The connector, reading included, is a [TigerSquad](../tigersquad.md)
perk, and joining is free. Outside the TigerSquad, the assistant answers that it
is a TigerSquad perk; access comes back as soon as you join.

## What the assistant can read

- your spools: brand, material, colours, weight left, temperatures, where each
  one is stored;
- your racks, your wishlists and your stock history;
- your printers and your TigerScales — **never their access codes or passwords**;
- what your friends share with you (their spools, racks and wishlists).

It only reads, unless you give it read & write (see below). It reads as you, under
the same access rules as the apps, so it can never see another account.
Credentials — printer access codes, cloud logins, your private key, your
e-mail — are never returned, whatever it asks.

## Read only, or read & write

When you connect an assistant, the tigersystem.io page asks for its access:
**Read only** (the default) or **Read & write**. To change it later:
**tigersystem.io → your account → Data → Connected assistants**, or in Tiger
Studio, **Manage access**. After switching to read & write, refresh or reconnect
the connector in the assistant so it sees its new tools.

With read & write, the assistant can:

- change a spool's weight, note, TD and tags, and store it in a rack;
- change a product's price, buy link, minimum stock, SKU / EAN and links;
- add spools from the catalogue;
- create a rack, and rename one;
- list the changes it made, and undo any of them.

It never deletes anything: a finished spool goes to 0 g. Every change is kept in
a history for 30 days and can be undone. A note and a TD are also written on the
chip, so the spool then needs its chip rewritten.

Limits: 20 spools per request; per day (UTC), 100 new spools, 5 new racks and 500
changes in all, counting Tiger Studio's assistant and online assistants together,
undone changes included.

## Claude (web, desktop, mobile)

1. **Settings → Connectors → Add custom connector.**
2. Name it `TigerSystem.io`, paste the address above, leave the advanced OAuth fields
   empty, and add it.
3. Click **Connect**. You land on tigersystem.io: sign in, check that the page
   says the answers go to claude.ai, and click **Allow**.
4. In a conversation, switch the TigerSystem.io connector on from the tools menu and
   ask your question.

## ChatGPT

Custom connectors need **developer mode** (a paid plan; on Business plans, an
admin enables it).

1. **Settings → Apps & Connectors → Advanced settings → Developer mode** on.
2. **Create** a connector: name `TigerSystem.io`, the address above, authentication
   **OAuth**, no client ID or secret.
3. Sign in on tigersystem.io and click **Allow**.
4. In a new chat, enable the connector and ask.

## Grok

Custom connectors need a **paid Grok plan**.

1. Open **grok.com/connectors → New Connector → Custom**.
2. Name it `TigerSystem.io` and paste the address above.
3. Sign in on tigersystem.io and click **Allow**.
4. In a conversation, switch the TigerSystem.io connector on and ask.

## Le Chat (Mistral)

Custom connectors are added by an **administrator** — on a personal account,
that is you.

1. **Connectors → Add Connector → Custom MCP Connector.**
2. Name it `TigerSystem.io` and paste the address above; Le Chat detects the
   sign-in method (OAuth) by itself.
3. Sign in on tigersystem.io and click **Allow**.
4. In a conversation, enable the connector and ask.

Menu names move often in these apps; the steps stay the same.

## Codex, Cursor and other desktop clients

Add a remote MCP server of type **Streamable HTTP** with the address above and
no token. The app opens your browser for the sign-in; after you click
**Allow**, the browser lands on a `127.0.0.1` address — that is the app on your
computer collecting the sign-in. A blank or "can't connect" page there is
normal: close the tab.

## Cut an assistant off

**tigersystem.io → your account → Data → Connected assistants.** Every
assistant you allowed is listed with when it was connected and last used.
**Cut access** stops it at once.

## Good to know

- The assistant may answer from data up to two minutes old: recent reads are
  kept briefly to keep things fast and light.
- Live printer state (online, printing) is not available from the cloud — only
  Tiger Studio, on your printer's network, sees it.
- Notes, colour names and wishlist text are your words (or a friend's); the
  assistant is told to report them, never to take them as instructions.

---

**▲ [Documentation index](../../README.md)** · **Related:** [Tiger Studio](../products/tiger-studio.md), [Guides](./README.md)
