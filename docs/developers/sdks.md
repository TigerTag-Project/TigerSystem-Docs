# SDKs

Two official SDKs handle all TigerTag chip operations — reading the 144-byte
NTAG payload, verifying the TigerTag format, and encoding new chip data.

## JavaScript — `tigertag` (npm)

- Repo: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Published on npm as **`tigertag`**.
- Used internally by Tiger Studio; usable independently to build custom
  TigerTag-compatible tools.

```bash
npm install tigertag
```

## Python

- Repo: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- For scripts, tooling and automation.

> **TODO:** minimal parse/encode code examples for both SDKs — import them from
> each SDK's README once stabilized, or link directly. Do not restate API
> signatures here (drift risk); each SDK README is canonical.

## What the SDKs give you

| Capability | Description |
|---|---|
| Parse | Decode a chip dump into the filament identity (brand, material, color…) |
| Verify | Check the payload is a valid TigerTag format |
| Encode | Build a new 144-byte payload for writing to a chip |

Reference data (ID → name tables) comes from the shared database — see
[Universal filament identity](../concepts/universal-filament-identity.md).

---

**◀ Previous:** [Repositories](./repositories.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Cloud API](./cloud-api.md)
