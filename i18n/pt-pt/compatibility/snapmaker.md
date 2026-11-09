---
sourceHash: 448c6630969a0d99765d2a206f9a0788e9c4e02ef90d870a57ba26db3c1c9fdf
sourcePath: docs/compatibility/snapmaker.md
---

# Snapmaker

## Ligação à impressora — **Disponível**

| Aspeto | Detalhe |
|---|---|
| Protocolo | Moonraker WebSocket (JSON-RPC), porta 7125 + extensões proprietárias |
| Descoberta | Pesquisa HTTP |
| Filamento | 4 slots — edição do filamento por slot (modelo de cor RRGGBBAA) |
| Controlo | Painel de controlo em direto (eixos, temperaturas, luz, ventoinha, velocidade, carregar/descarregar) |
| Telemetria | Temperaturas, progresso do trabalho |

## RFID nativo — especificação documentada, leitura na aplicação prevista

As etiquetas de bobina da Snapmaker são **Mifare Classic 1K** com **chaves por setor derivadas por HKDF** e uma **assinatura RSA-2048 PKCS#1 v1.5 + SHA-256** — o formato mais fortemente bloqueado documentado até agora. Especificação de descodificação só de leitura: [`docs/rfid-vendors/snapmaker.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/snapmaker.md).

## O fluxo de trabalho

1. **Adicionar a impressora** — pesquisa HTTP na LAN ou Add by IP; o Tiger Studio fala Moonraker (JSON-RPC sobre WebSocket).
2. **Ler uma bobina** — telemóvel ou leitor de secretária; ela entra no seu inventário.
3. **Atribuí-la a um slot** — edição do filamento por slot (o modelo de cor RRGGBBAA da Snapmaker é tratado de forma transparente).
4. **Em direto e controlo** — telemetria, progresso do trabalho e um **painel de controlo**: eixos, temperaturas, luz, ventoinha, modo de velocidade, carregar/descarregar por slot.

## Limitações

- As etiquetas nativas da Snapmaker ainda não são lidas na aplicação — a especificação está documentada, e o trabalho atual visa converter os dados das etiquetas dos fabricantes em bobinas TigerData (ver [Compatibilidade](./README.md)).

## A primeira impressora a ler TigerTag nativamente

O [Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware) da comunidade (independente, GPL-3.0) acrescenta SSH, streaming da câmara, métricas — e, com ele, **o Snapmaker U1 lê TigerTags nativamente, na própria máquina**. Isto faz do U1 a primeira impressora em que uma bobina TigerTag é reconhecida sem qualquer aplicação pelo meio — o futuro a que visa a [jogada coletiva](../vision/for-filament-manufacturers.md), chegado mais cedo graças à comunidade. Ver [integrações de terceiros](../developers/integrations.md).

---

**◀ Anterior:** [Anycubic](./anycubic.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Klipper](./klipper.md)
