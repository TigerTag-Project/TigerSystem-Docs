---
sourceHash: 2d9fb2d55c78225bfac135d62f3912ead26a4eb709ecafb4ff9d0d0d7d69265e
sourcePath: docs/compatibility/anycubic.md
---

# Anycubic

## Conexão com a impressora — **Ao vivo** (LAN + cloud)

| Aspecto | Detalhe |
|---|---|
| Protocolo (LAN) | MQTTS, porta 9883 (TLS 1.2), direto com a impressora |
| Protocolo (cloud) | REST assinado + MQTT na nuvem do fabricante |
| Filamento | Caixa multicor ACE — suporte por slot |
| Descoberta | Sondagem `/info`, porta 18910 |
| Câmera | Fluxo FLV (porta 18088) |
| Controle | Painel de controle ao vivo (eixos, temperaturas, luz, ventoinha, carregar/descarregar) |

> **Nota:** o modo cloud é o único caso em que a conexão com a impressora passa pela
> nuvem do fabricante — o modo LAN continua totalmente local.

## RFID nativo — especificação documentada, leitura no aplicativo planejada

As tags de bobina da Anycubic são **Mifare Ultralight** **sem autenticação e sem
criptografia** — leitura trivial (e clonagem também). Especificação de decodificação somente leitura:
[`docs/rfid-vendors/anycubic.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/anycubic.md).

## O fluxo de trabalho

1. **Adicione a impressora** — dois caminhos: **modo LAN** (descoberta local pela
 sondagem `/info`; as credenciais de conexão são importadas da configuração do
 slicer do fabricante) ou **modo cloud** pela conta Anycubic.
2. **Escaneie uma bobina** — celular ou leitor de desktop; ela vai para o seu inventário.
3. **Atribua-a a um slot do ACE** — o Tiger Studio associa as bobinas do inventário
 à caixa multicor ACE.
4. **Ao vivo e controle** — telemetria, progresso do trabalho, o fluxo de câmera FLV e
 um **painel de controle**: eixos, temperaturas, luz, ventoinha, carregar/descarregar por
 slot.

## Limitações

- As tags nativas da Anycubic ainda não são lidas no aplicativo — a especificação está documentada, e o trabalho atual visa converter os dados das tags de fabricantes em bobinas TigerData (veja [Compatibilidade](./README.md)).

---

**◀ Anterior:** [FlashForge](./flashforge.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Snapmaker](./snapmaker.md)
