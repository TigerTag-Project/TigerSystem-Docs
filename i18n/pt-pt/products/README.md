---
sourceHash: f787ab835cd6a0761d139df621b1c9918dda678a3790454304c18585b1f54cf9
sourcePath: docs/products/README.md
---

# Produtos

O ecossistema TigerSystem, uma página por produto.

**Estes são os produtos oficiais** — concebidos e publicados pelo TigerSystem. «Oficial» aqui significa *fomos nós que o fizemos*, não *precisa dele*: todos são de código aberto e podem ser bifurcados, e os seus nomes (Tiger Studio, TigerHub, TigerScale, TigerPOD, Tiger NFC Connect) **não são reivindicados como marcas registadas**, de propósito. Apenas a própria marca **TigerTag** está reservada, e só para o chip.

Qualquer pessoa pode construir e vender uma alternativa — um leitor, uma aplicação, uma balança, um sistema de inventário completo. Veja o [hardware de terceiros](../compatibility/third-party-hardware.md) e o [software construído sobre o TigerTag](../developers/integrations.md) para saber o que já existe. Um produto de terceiros é **TigerTag Compatible** simplesmente por funcionar; só passa a **TigerTag Certified** quando o TigerSystem o concede ([política de marcas](../../TRADEMARK.md)).

> **Nota:** todos os produtos **virados para o utilizador** abaixo — e todos os futuros — são **provas de conceito** funcionais. O seu único objetivo é mostrar o potencial de um protocolo de código aberto, padrão, agnóstico e multiplataforma, e inspirar o que outros irão construir com ele. (A cadeia de ferramentas de programação de chips do lado da fábrica é outra história: de nível industrial, em produção.) Veja [Uma caixa de areia, de propósito](../vision/why-tigersystem.md).

| Produto | O que é | Tipo |
|---|---|---|
| <img src="../assets/icons/tigerdata.svg" width="18" alt="" /> [TigerData](../concepts/universal-filament-identity.md) | O chip virtual — a identidade em forma digital, sem necessidade de chip, atualizável em qualquer altura | Conceito |
| <img src="../assets/icons/tigertag.svg" width="18" alt="" /> [TigerTag](./tigertag.md) | Chip RFID/NFC aberto + norma para a identidade da bobina | Hardware + especificação |
| <img src="../assets/icons/tigertag-plus.svg" width="18" alt="" /> [TigerTag+](./tigertag-plus.md) | Um TigerTag com um ID de produto do catálogo e enriquecimento opcional — continua 100% offline; assinado, é TigerTag+ Certified | Hardware + especificação |
| <img src="../assets/icons/connect.svg" width="18" alt="" /> [Tiger NFC Connect](./tiger-nfc-connect.md) | Aplicação móvel (iOS/Android) — ler, codificar, explorar | Aplicação |
| <img src="../assets/icons/studio.svg" width="18" alt="" /> [Tiger Studio](./tiger-studio.md) | Aplicação de computador — inventário, racks, sensores, impressoras | Aplicação |
| <img src="../assets/icons/tigerhub.svg" width="18" alt="" /> [TigerHub](./tigerhub.md) | A casa do ecossistema na web — montra, listas de desejos, amigos e partilha em `tigersystem.io` | Web |
| <img src="../assets/icons/tigerpod.svg" width="18" alt="" /> [TigerPOD](./tigerpod.md) | Suporte de leitor NFC duplo imprimível em 3D | Hardware |
| <img src="../assets/icons/tigerscale.svg" width="18" alt="" /> [TigerScale](./tigerscale.md) | Balança de filamento ESP32 de código aberto | Hardware |
| <img src="../assets/icons/tigerspool.svg" width="18" alt="" /> [TigerSpool](./tigerspool.md) | Caixa ESP32 de código aberto junto à impressora — toque numa bobina, escolha um slot, qualquer marca | Hardware |
| <img src="../assets/icons/tigertouch.svg" width="18" alt="" /> [Tiger Touch](./tigertouch.md) | Firmware de código aberto para o ecrã BIGTREETECH Panda Touch / K-Touch — todas as marcas de impressoras, em direto, num só ecrã | Firmware |
| <img src="../assets/icons/factory.svg" width="18" alt="" /> [TigerTag Factory & Manager](./factory-suite.md) | Ferramentas industriais de programação de chips e de bases de dados de filamento para fábricas — **não públicas**, de nível de produção | Industrial |

```mermaid
flowchart LR
  TT[TigerTag / TigerTag+] --> CO[Tiger NFC Connect]
  TT --> POD[TigerPOD] --> ST[Tiger Studio]
  SC[TigerScale] --> FB[("Your TigerSystem account — Firebase")]
  TT --> SPL[TigerSpool] --> PRN["Your printer's slot"]
  FB --> SPL
  CO <--> FB
  ST <--> FB
  FB --> HUB["TigerHub — tigersystem.io"]
```

---

**◀ Anterior:** [Fluxo de dados](../architecture/data-flow.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [TigerTag](./tigertag.md)
