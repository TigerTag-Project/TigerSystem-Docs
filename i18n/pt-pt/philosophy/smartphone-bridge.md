---
sourceHash: 1281db0cc802e363a033ad02e696c6e1a040d45e849f843b3c2931d567e6adbc
sourcePath: docs/philosophy/smartphone-bridge.md
---

# O conceito da ponte do telemóvel

## A constatação

> Na China, perguntávamos sempre: *«Onde estão os leitores RFID?»* Todos respondiam: *«Nas Bambu Labs.»* Falso — os leitores da Bambu estão no AMS, não na impressora; a máquina não consegue detetar de todo uma bobina de terceiros. **Os leitores RFID estão nos seus bolsos** — em cada telemóvel, prontos a usar, sem que sequer o saiba.

Todos os telemóveis modernos contêm um leitor NFC. Isto significa que **todos os utilizadores de impressão 3D já possuem hardware TigerTag** — sem leitor proprietário, sem atualização da impressora, sem qualquer compra para começar.

```mermaid
flowchart LR
  TAG[TigerTag chip on spool] -- NFC tap --> PHONE[Smartphone + Tiger NFC Connect]
  PHONE -- sync --> CLOUD[("Your TigerSystem account (Firebase)")]
  CLOUD --> STUDIO[Tiger Studio — desktop]
  STUDIO --> PRINTER[Connected printer]
  CLOUD --> WEB["tigersystem.io — public sharing"]
```

O telemóvel funciona como a **ponte** entre a bobina física e o inventário digital:

1. **Aproximar** — o perfil do chip (marca, material, cor, parâmetros) é lido com um só gesto.
2. **Sincronizar** — a bobina aparece instantaneamente no inventário do utilizador na nuvem.
3. **Em todo o lado** — a aplicação de secretária, a web e as impressoras ligadas passam a conhecer a bobina.

## RFID nativo vs a ponte

Algumas impressoras leem etiquetas de forma nativa — normalmente no seu próprio formato proprietário, ocasionalmente o próprio TigerTag; a maioria não lê nada. A ponte torna irrelevantes as capacidades da impressora:

| Caminho | Requer | Funciona com |
|---|---|---|
| **RFID nativo — etiqueta do fabricante** | Uma impressora que leia a etiqueta bloqueada desse fabricante | Apenas uma marca |
| **RFID nativo — TigerTag** | Uma máquina cujo próprio firmware lê TigerTag — raro, e até agora feito pela comunidade | Todas as marcas, sem aplicação pelo meio |
| **Ponte do telemóvel** | Qualquer telemóvel com NFC | **Todas as impressoras**, todas as marcas, mesmo máquinas totalmente offline |

A linha do meio não é nossa, e é recente. O firmware alargado da comunidade faz da [Snapmaker U1](../compatibility/snapmaker.md) a primeira impressora a ler um TigerTag na própria máquina; e o **BT-AMS-C**, um leitor de quatro slots que se monta num AMS da Bambu Lab, envia os dados TigerTag diretamente para a BMCU da impressora ([hardware de terceiros](../compatibility/third-party-hardware.md)). Ambos continuam a ser exceções — o que é um argumento a favor da ponte, não contra ela: nunca teve de esperar por eles.

Com a ponte, os dados do filamento chegam à impressora através das [integrações de impressoras do Tiger Studio](../compatibility/README.md) (seis marcas disponíveis hoje) — a bobina identifica-se junto do *sistema*, e o sistema fala com a máquina.

A prova pelo exemplo: **as impressoras FlashForge não têm qualquer leitor RFID** — e, através da ponte, funcionam agora na mesma com filamento identificado por NFC. Uma capacidade totalmente nova, acrescentada às máquinas de outros, **totalmente gratuita para o utilizador** ([o caso FlashForge](../compatibility/flashforge.md)).

---

**◀ Anterior:** [Ecossistema aberto](./open-ecosystem.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Fluxo Second Life](./second-life.md)

**Ver também:** [Tiger NFC Connect](../products/tiger-nfc-connect.md), [Visão geral da arquitetura](../architecture/overview.md)
