---
sourceHash: 2d9fb2d55c78225bfac135d62f3912ead26a4eb709ecafb4ff9d0d0d7d69265e
sourcePath: docs/compatibility/anycubic.md
---

# Anycubic

## Ligação à impressora — **Disponível** (LAN + nuvem)

| Aspeto | Detalhe |
|---|---|
| Protocolo (LAN) | MQTTS, porta 9883 (TLS 1.2), diretamente à impressora |
| Protocolo (nuvem) | REST assinado + MQTT da nuvem do fabricante |
| Filamento | Caixa multicor ACE — suporte por slot |
| Descoberta | Sondagem `/info`, porta 18910 |
| Câmara | Fluxo FLV (porta 18088) |
| Controlo | Painel de controlo em direto (eixos, temperaturas, luz, ventoinha, carregar/descarregar) |

> **Nota:** o modo na nuvem é o único caso em que a ligação à impressora passa pela nuvem de um fabricante — o modo LAN permanece totalmente local.

## RFID nativo — especificação documentada, leitura na aplicação prevista

As etiquetas de bobina da Anycubic são **Mifare Ultralight** **sem autenticação e sem criptografia** — trivialmente legíveis (e clonáveis). Especificação de descodificação só de leitura: [`docs/rfid-vendors/anycubic.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/anycubic.md).

## O fluxo de trabalho

1. **Adicionar a impressora** — dois caminhos: **modo LAN** (descoberta local através da sondagem `/info`; as credenciais de ligação são importadas da configuração do slicer do fabricante) ou **modo nuvem** através da conta Anycubic.
2. **Ler uma bobina** — telemóvel ou leitor de secretária; ela entra no seu inventário.
3. **Atribuí-la a um slot ACE** — o Tiger Studio mapeia as bobinas do inventário para a caixa multicor ACE.
4. **Em direto e controlo** — telemetria, progresso do trabalho, o fluxo de câmara FLV e um **painel de controlo**: eixos, temperaturas, luz, ventoinha, carregar/descarregar por slot.

## Limitações

- As etiquetas nativas da Anycubic ainda não são lidas na aplicação — a especificação está documentada, e o trabalho atual visa converter os dados das etiquetas dos fabricantes em bobinas TigerData (ver [Compatibilidade](./README.md)).

---

**◀ Anterior:** [FlashForge](./flashforge.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Snapmaker](./snapmaker.md)
