---
sourceHash: 19ce9f2af8d9561b6298fb076ca9ac4da141671c3caafc2201c393e1f19938a2
sourcePath: docs/developers/sdks.md
---

# SDKs

Dois SDKs oficiais cuidam de todas as operações com chips TigerTag — ler o payload
NTAG de 144 bytes, verificar o formato TigerTag e codificar novos dados de chip.

## JavaScript — `tigertag` (npm)

- Repositório: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Publicado no npm como **`tigertag`**.
- Usado internamente pelo Tiger Studio; pode ser usado de forma independente para criar
 ferramentas personalizadas compatíveis com o TigerTag.

```bash
npm install tigertag
```

## Python

- Repositório: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Publicado no PyPI como **`tigertag`** — para scripts, ferramentas e automação.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

> **TODO:** exemplos mínimos de código de leitura/codificação para os dois SDKs — importe-os do
> README de cada SDK quando estabilizarem, ou aponte direto para eles. Não repita as assinaturas
> da API aqui (risco de divergência); o README de cada SDK é a referência.

## O que os SDKs oferecem

| Capacidade | Descrição |
|---|---|
| Ler (Parse) | Decodifica um dump de chip na identidade do filamento (marca, material, cor…) |
| Verificar (Verify) | Confere se o payload está em um formato TigerTag válido |
| Codificar (Encode) | Monta um novo payload de 144 bytes para gravar em um chip |

Os dados de referência (tabelas ID → nome) vêm do banco de dados compartilhado — veja
[Identidade universal do filamento](../concepts/universal-filament-identity.md).

---

**◀ Anterior:** [Repositórios](./repositories.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [API de conta](./account-api.md)
