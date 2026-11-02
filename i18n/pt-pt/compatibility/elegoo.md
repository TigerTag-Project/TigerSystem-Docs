---
sourceHash: 636849e192cdbe3efc38d30a1b16a4f58828a9158ac9a9f1b2584f5977ce3b08
sourcePath: docs/compatibility/elegoo.md
---

# Elegoo

## Ligação à impressora — **Disponível**

| Aspeto | Detalhe |
|---|---|
| Protocolo | MQTT, porta 1883 |
| Descoberta | Difusão UDP, porta 52700 |
| Filamento | 4 slots (Canvas) |
| Controlo | Painel de controlo em direto: home/jog, temperaturas, luz, ventoinha, modo de velocidade, carregar/descarregar |
| Telemetria | Temperaturas, progresso do trabalho |

## RFID nativo — especificação documentada, leitura na aplicação prevista

As etiquetas de bobina da Elegoo são **Mifare Ultralight** protegidas apenas por **magic bytes** (`EE EE EE EE`) — sem autenticação real. Especificação de descodificação só de leitura: [`docs/rfid-vendors/elegoo.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/elegoo.md).

## O fluxo de trabalho

1. **Adicionar a impressora** — descoberta automática na LAN (difusão UDP) ou Add by IP. Exige que o **modo LAN Only** seja ativado uma vez no ecrã tátil da impressora — [passo a passo](#mudar-para-o-modo-lan).
2. **Ler uma bobina** — telemóvel ou leitor de secretária; ela entra no seu inventário.
3. **Atribuí-la a um slot** — o Tiger Studio mapeia as bobinas do inventário para os quatro slots Canvas.
4. **Em direto e controlo** — além da telemetria e do progresso do trabalho, a Elegoo tem um **painel de controlo completo**: home/jog dos eixos, definir os alvos do bocal e da mesa, ligar a luz, comandar a ventoinha, escolher o modo de velocidade, carregar/descarregar o filamento por slot.

## Mudar para o modo LAN

A ligação direta do Tiger Studio exige que o **modo LAN Only** esteja ativado na própria impressora — uma configuração única, feita no ecrã.

<div class="ts-model-picker">
<a href="../tutorials/elegoo-cc2-lan-mode.md"><img src="../assets/elegoo-lan-mode/models/cc2.png" alt="Centauri Carbon 2" /><span>Centauri Carbon 2</span></a>
</div>

## Bónus: escrever etiquetas no formato Elegoo

O editor integrado na aplicação consegue **reescrever um chip no formato que as impressoras Elegoo esperam** — por isso, um chip TigerTag pode até tornar-se uma etiqueta Elegoo nativa, se for isso que o seu fluxo de trabalho exigir. O seu chip, a sua escolha.

## Ler TigerTag na própria máquina — em preparação

Está **em preparação** um firmware personalizado que permitiria a uma impressora Elegoo ler TigerTags **diretamente**, na própria máquina, segundo o mesmo princípio da [Snapmaker U1](./snapmaker.md).

Ainda não está disponível e não há data. Até chegar, uma Elegoo lê o filamento identificado por TigerTag da forma que o fluxo de trabalho acima descreve — através do telemóvel, do Tiger Studio ou de uma [TigerSpool](../products/tigerspool.md) junto da máquina, sem nada alterado na impressora.

## Limitações

- As etiquetas nativas da Elegoo ainda não são lidas na aplicação — a especificação está documentada, e o trabalho atual visa converter os dados das etiquetas dos fabricantes em bobinas TigerData (ver [Compatibilidade](./README.md)).

---

**◀ Anterior:** [Creality](./creality.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [FlashForge](./flashforge.md)
