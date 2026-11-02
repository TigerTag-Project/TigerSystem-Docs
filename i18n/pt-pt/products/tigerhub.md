---
sourceHash: cb19118f5e46d0c5e473f54203faefcd68e0d63d44df65395c86a415d8cfa58d
sourcePath: docs/products/tigerhub.md
---

# TigerHub

## Finalidade

**O TigerHub é a casa do ecossistema na web** — o site em **[tigersystem.io](https://tigersystem.io)**. Apresenta a caixa de areia do TigerSystem e o que o protocolo aberto TigerTag torna possível, e aloja o **lado social** dessa caixa de areia: partilhar uma lista de desejos, convidar alguém para ser amigo, publicar uma lista só de leitura que qualquer pessoa pode abrir num navegador.

<img src="../assets/tigerhub-site-card.png" width="100%" alt="tigersystem.io — a casa do TigerSystem na web, com a aplicação móvel a ler à frente do Tiger Studio" />

## Onde se encaixa

```mermaid
flowchart TB
  ST["Tiger Studio"] & CO["Connect"] <--> FB[("Your TigerSystem account<br/>(Firebase — one shared database)")]
  FB -- "published lists · invites" --> HUB["TigerHub<br/>tigersystem.io"]
  HUB --> VIS["Anyone with the link<br/>plain browser, no account"]
```

## Funcionalidades — todas ativas hoje

- **Montra do ecossistema** — a página inicial conta a história completa: como funciona, as seis marcas de impressoras, os componentes e os três níveis (TigerData — acompanhamento só por software · TigerTag — o chip offline · TigerTag+ — autenticidade verificada).
- **A sua conta na web** (`/account`) — inicie sessão na sua conta TigerSystem a partir de um navegador.
- **Listas de desejos** — públicas e só para amigos, ambas disponíveis.
- **Códigos de amigo e convites** — adicionem-se mutuamente como amigos a partir da web.
- **Ligações de listas públicas** — partilhe um inventário ou uma lista de desejos só de leitura como `https://tigersystem.io/list/<token>`; quem a vê não precisa de aplicação nem de conta.
- **Catálogo de materiais e base de dados de referência** (`/materials`, `/database`) — explore o catálogo partilhado com que todas as aplicações trabalham.
- **Impressoras e funcionalidades** (`/printers`, `/features`) — o que funciona com o quê.
- **Modelos 3D** (`/models`) — modelos imprimíveis (o TigerPOD e companhia).
- **Para fabricantes, programadores e imprensa** (`/manufacturers`, `/developers`, `/press`) — a história B2B, indicações de integração, recursos de media.
- **Brindes** (`/goodies`) — o boné e a polo oficiais. Comprar um é uma das formas de [apoiar o projeto](../support.md).

## O TigerHub não é a base de dados

As contas de utilizador e os dados por trás de todas as aplicações vivem no **Firebase simples** (Auth + Firestore) — infraestrutura deliberadamente sem marca: **uma única base de dados partilhada, num único sítio**, para que o Tiger Studio, o Tiger NFC Connect, a TigerScale e a conta TigerSystem interoperem todos sobre os mesmos dados. O TigerHub é a **superfície web** construída por cima. Veja [Inventário e sincronização na nuvem](../concepts/inventory-and-cloud-sync.md).

## Interações

| Com | Como |
|---|---|
| Tiger Studio / Connect | Gerar e revogar ligações de partilha, enviar convites de amizade |
| Firebase (base de dados da conta) | Fonte dos dados publicados |
| Visitantes | Navegador simples, sem necessidade de conta |

---

**◀ Anterior:** [Tiger Studio](./tiger-studio.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [TigerPOD](./tigerpod.md)

**Ver também:** [Inventário e sincronização na nuvem](../concepts/inventory-and-cloud-sync.md), [Arquitetura](../architecture/overview.md)
