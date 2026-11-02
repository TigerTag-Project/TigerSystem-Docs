---
sourceHash: 19ce9f2af8d9561b6298fb076ca9ac4da141671c3caafc2201c393e1f19938a2
sourcePath: docs/developers/sdks.md
---

# SDK's

Twee officiële SDK's verzorgen alle bewerkingen op TigerTag-chips — de 144-byte
NTAG-payload lezen, het TigerTag-formaat verifiëren en nieuwe chipdata coderen.

## JavaScript — `tigertag` (npm)

- Repo: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Gepubliceerd op npm als **`tigertag`**.
- Intern gebruikt door Tiger Studio; los te gebruiken om eigen
 TigerTag-compatibele tools te bouwen.

```bash
npm install tigertag
```

## Python

- Repo: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Gepubliceerd op PyPI als **`tigertag`** — voor scripts, tooling en automatisering.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

> **TODO:** minimale parse-/encode-codevoorbeelden voor beide SDK's — importeer ze uit
> de README van elke SDK zodra die stabiel is, of link er rechtstreeks naar. Herhaal hier geen API-
> signaturen (risico op afwijking); de README van elke SDK is leidend.

## Wat de SDK's je geven

| Mogelijkheid | Beschrijving |
|---|---|
| Parse | Een chipdump decoderen naar de filamentidentiteit (merk, materiaal, kleur…) |
| Verify | Controleren of de payload een geldig TigerTag-formaat is |
| Encode | Een nieuwe payload van 144 bytes opbouwen om naar een chip te schrijven |

Referentiedata (ID → naamtabellen) komt uit de gedeelde database — zie
[Universele filamentidentiteit](../concepts/universal-filament-identity.md).

---

**◀ Vorige:** [Repositories](./repositories.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Account-API](./account-api.md)
