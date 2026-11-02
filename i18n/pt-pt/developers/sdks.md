---
sourceHash: 19ce9f2af8d9561b6298fb076ca9ac4da141671c3caafc2201c393e1f19938a2
sourcePath: docs/developers/sdks.md
---

# SDKs

Dois SDKs oficiais tratam de todas as operações com chips TigerTag — ler o payload NTAG de 144 bytes, verificar o formato TigerTag e codificar novos dados de chip.

## JavaScript — `tigertag` (npm)

- Repositório: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Publicado no npm como **`tigertag`**.
- Usado internamente pelo Tiger Studio; utilizável de forma independente para criar ferramentas personalizadas compatíveis com o TigerTag.

```bash
npm install tigertag
```

## Python

- Repositório: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Publicado no PyPI como **`tigertag`** — para scripts, ferramentas e automatização.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

> **TODO:** exemplos mínimos de código de análise/codificação para ambos os SDKs — importá-los do README de cada SDK quando estabilizar, ou ligar diretamente. Não repetir aqui as assinaturas da API (risco de divergência); o README de cada SDK é a referência.

## O que os SDKs oferecem

| Capacidade | Descrição |
|---|---|
| Parse | Descodifica um dump de chip para a identidade do filamento (marca, material, cor…) |
| Verify | Verifica se o payload tem um formato TigerTag válido |
| Encode | Constrói um novo payload de 144 bytes para escrever num chip |

Os dados de referência (tabelas ID → nome) vêm da base de dados partilhada — ver [Identidade universal do filamento](../concepts/universal-filament-identity.md).

---

**◀ Anterior:** [Repositórios](./repositories.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [API de conta](./account-api.md)
