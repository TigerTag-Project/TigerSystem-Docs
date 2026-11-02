---
sourceHash: 964aaebb15d1afe5fb99c214223b57ec3c35d863a67794dba96b1f6cb91be960
sourcePath: docs/developers/account-api.md
---

# API de conta e integração com terceiros

## O contrato

Os aplicativos de terceiros se conectam ao backend do TigerSystem — Firebase puro — com
o **padrão Firebase**:

1. Obtenha a configuração pública do SDK:
 `https://tigertag-cdn.web.app/__/firebase/init.json`
2. `firebase.initializeApp(config)`
3. Autentique a **própria conta TigerTag do usuário** (a configuração ser pública é
 intencional — a segurança é aplicada no servidor, pelas regras do Firestore).
4. Leia/grave os dados desse usuário dentro da superfície documentada.

## Documentação de referência

O contrato de integração completo está em
**[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)**:

| Doc | Conteúdo |
|---|---|
| `docs/01-firebase-config.md` | Configuração e conexão do projeto |
| `docs/02-authentication.md` | Fluxos de autenticação |
| `docs/03-data-model.md` | Coleções e campos do Firestore (a referência do modelo de dados) |
| `docs/04-friend-system.md` | Códigos de descoberta, solicitações, inventários compartilhados |
| `docs/05-rate-limiting.md` | Limites de uso justo |
| `examples/` | CLI em Python, ESP32/Arduino, Home Assistant, ponte com o Spoolman |

## Regras de segurança — o que esperar

- `users/{uid}/**` é, por padrão, acessível apenas ao proprietário.
- Gravações entre usuários exigem sempre uma **relação prévia** (por exemplo, uma
 amizade aceita) — não há caminhos de gravação abertos.
- Algumas coleções têm **campos em lista de permissão**: gravações com campos
 não listados são rejeitadas.
- Campos exclusivos de administrador (funções, flags de depuração) nunca podem ser gravados pelo cliente.

## Endpoints HTTP

O `cdn.tigertag.io` fica no **mesmo projeto Firebase** das contas: ele
hospeda o banco de dados de referência compartilhado, as imagens das bobinas (inclusive as fotos de produto do TigerTag+)
e os endpoints HTTP ligados ao banco de dados do TigerSystem.

| Endpoint | Finalidade |
|---|---|
| `https://cdn.tigertag.io/healthz/` | Verificação de integridade |
| `https://cdn.tigertag.io/setSpoolWeightByRfid?ApiKey=&uid=&weight=` | Envia o peso de uma bobina pelo UID do chip (usado por dispositivos da classe balança) |

> **TODO:** catálogo completo da API HTTP (modelo de autenticação, formatos de erro) — a ser
> documentado no repositório de integração e resumido aqui.

---

**◀ Anterior:** [SDKs](./sdks.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [FAQ](../faq/README.md)

**Veja também:** [Inventário e sincronização na nuvem](../concepts/inventory-and-cloud-sync.md), [Arquitetura](../architecture/overview.md)
