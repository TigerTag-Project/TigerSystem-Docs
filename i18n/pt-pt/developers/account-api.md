---
sourceHash: 964aaebb15d1afe5fb99c214223b57ec3c35d863a67794dba96b1f6cb91be960
sourcePath: docs/developers/account-api.md
---

# API de conta e integração de terceiros

## O contrato

As aplicações de terceiros ligam-se ao backend do TigerSystem — Firebase simples — com o **padrão normal do Firebase**:

1. Obter a configuração pública do SDK:
 `https://tigertag-cdn.web.app/__/firebase/init.json`
2. `firebase.initializeApp(config)`
3. Autenticar a **própria conta TigerTag do utilizador** (o facto de a configuração ser pública é intencional — a segurança é imposta no servidor, pelas regras do Firestore).
4. Ler/escrever os dados desse utilizador dentro da superfície documentada.

## Documentação de referência

O contrato de integração completo encontra-se em **[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)**:

| Documento | Conteúdo |
|---|---|
| `docs/01-firebase-config.md` | Configuração do projeto e ligação |
| `docs/02-authentication.md` | Fluxos de autenticação |
| `docs/03-data-model.md` | Coleções e campos do Firestore (a referência do modelo de dados) |
| `docs/04-friend-system.md` | Códigos de descoberta, pedidos, inventários partilhados |
| `docs/05-rate-limiting.md` | Limites de utilização razoável |
| `examples/` | CLI em Python, ESP32/Arduino, Home Assistant, ponte Spoolman |

## Regras de segurança — o que esperar

- `users/{uid}/**` é, por predefinição, acessível apenas ao proprietário.
- As escritas entre utilizadores exigem sempre uma **relação prévia** (por exemplo, uma amizade aceite) — não existem caminhos de escrita abertos.
- Algumas coleções têm **campos em lista de permissões**: as escritas que contenham campos não listados são rejeitadas.
- Os campos exclusivos de administrador (funções, sinalizadores de depuração) nunca podem ser escritos pelo cliente.

## Endpoints HTTP

O `cdn.tigertag.io` encontra-se no **mesmo projeto Firebase** que as contas: aloja a base de dados de referência partilhada, as imagens das bobinas (incluindo as fotografias de produto do TigerTag+) e os endpoints HTTP associados à base de dados do TigerSystem.

| Endpoint | Finalidade |
|---|---|
| `https://cdn.tigertag.io/healthz/` | Verificação de estado |
| `https://cdn.tigertag.io/setSpoolWeightByRfid?ApiKey=&uid=&weight=` | Enviar o peso de uma bobina pelo UID do chip (usado por dispositivos do tipo balança) |

> **TODO:** catálogo completo da API HTTP (modelo de autenticação, formato dos erros) — a documentar no repositório de integração e a resumir aqui.

---

**◀ Anterior:** [SDKs](./sdks.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [FAQ](../faq/README.md)

**Ver também:** [Inventário e sincronização na nuvem](../concepts/inventory-and-cloud-sync.md), [Arquitetura](../architecture/overview.md)
