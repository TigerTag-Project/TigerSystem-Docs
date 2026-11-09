---
sourceHash: 636849e192cdbe3efc38d30a1b16a4f58828a9158ac9a9f1b2584f5977ce3b08
sourcePath: docs/compatibility/elegoo.md
---

# Elegoo

## Conexão com a impressora — **Ao vivo**

| Aspecto | Detalhe |
|---|---|
| Protocolo | MQTT, porta 1883 |
| Descoberta | Broadcast UDP, porta 52700 |
| Filamento | 4 slots (Canvas) |
| Controle | Painel de controle ao vivo: home/jog, temperaturas, luz, ventoinha, modo de velocidade, carregar/descarregar |
| Telemetria | Temperaturas, progresso do trabalho |

## RFID nativo — especificação documentada, leitura no aplicativo planejada

As tags de bobina da Elegoo são **Mifare Ultralight** protegidas apenas por **magic bytes**
(`EE EE EE EE`) — sem autenticação real. Especificação de decodificação somente leitura:
[`docs/rfid-vendors/elegoo.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/elegoo.md).

## O fluxo de trabalho

1. **Adicione a impressora** — descoberta automática na LAN (broadcast UDP) ou adição
 por IP. Exige que o **modo LAN Only** seja ativado uma vez na tela sensível ao toque da impressora —
 [passo a passo](#ative-o-modo-lan).
2. **Escaneie uma bobina** — celular ou leitor de desktop; ela vai para o seu inventário.
3. **Atribua-a a um slot** — o Tiger Studio associa as bobinas do inventário aos quatro
 slots do Canvas.
4. **Ao vivo e controle** — além da telemetria e do progresso do trabalho, a Elegoo ganha um
 **painel de controle completo**: home/jog dos eixos, definição das metas de bico e mesa,
 liga/desliga da luz, controle da ventoinha, escolha do modo de velocidade, carregar/descarregar
 filamento por slot.

## Ative o modo LAN

A conexão direta do Tiger Studio exige que o **modo LAN Only** esteja ativado na própria impressora — uma configuração
única, feita na tela.

<div class="ts-model-picker">
<a href="../tutorials/elegoo-cc2-lan-mode.md"><img src="../assets/elegoo-lan-mode/models/cc2.png" alt="Centauri Carbon 2" /><span>Centauri Carbon 2</span></a>
</div>

## Bônus: grave tags no formato Elegoo

O editor integrado do aplicativo pode **regravar um chip no formato que as impressoras
Elegoo esperam** — assim, um chip TigerTag pode até virar uma tag Elegoo nativa, se
o seu fluxo de trabalho precisar. Seu chip, sua escolha.

## Ler TigerTag na própria máquina — em preparação

Um firmware personalizado está **em preparação** para permitir que uma impressora Elegoo leia
TigerTags **diretamente**, na máquina, com o mesmo princípio da
[Snapmaker U1](./snapmaker.md).

Ainda não está disponível, e não há data. Até lá, uma Elegoo lê
filamento identificado por TigerTag do modo descrito no fluxo de trabalho acima — pelo
celular, pelo Tiger Studio ou por um [TigerSpool](../products/tigerspool.md) ao lado da
máquina, sem alterar nada na impressora.

## Limitações

- As tags nativas da Elegoo ainda não são lidas no aplicativo — a especificação está documentada, e o trabalho atual visa converter os dados das tags de fabricantes em bobinas TigerData (veja [Compatibilidade](./README.md)).

---

**◀ Anterior:** [Creality](./creality.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [FlashForge](./flashforge.md)
