---
sourceHash: 448c6630969a0d99765d2a206f9a0788e9c4e02ef90d870a57ba26db3c1c9fdf
sourcePath: docs/compatibility/snapmaker.md
---

# Snapmaker

## Conexão com a impressora — **Ao vivo**

| Aspecto | Detalhe |
|---|---|
| Protocolo | WebSocket Moonraker (JSON-RPC), porta 7125 + extensões proprietárias |
| Descoberta | Busca HTTP |
| Filamento | 4 slots — edição do filamento por slot (modelo de cor RRGGBBAA) |
| Controle | Painel de controle ao vivo (eixos, temperaturas, luz, ventoinha, velocidade, carregar/descarregar) |
| Telemetria | Temperaturas, progresso do trabalho |

## RFID nativo — especificação documentada, leitura no aplicativo planejada

As tags de bobina da Snapmaker são **Mifare Classic 1K** com **chaves por setor
derivadas por HKDF** e uma **assinatura RSA-2048 PKCS#1 v1.5 + SHA-256** — o formato
mais bloqueado documentado até agora. Especificação de decodificação somente leitura:
[`docs/rfid-vendors/snapmaker.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/snapmaker.md).

## O fluxo de trabalho

1. **Adicione a impressora** — busca HTTP na LAN ou adição por IP; o Tiger Studio
 fala Moonraker (JSON-RPC sobre WebSocket).
2. **Escaneie uma bobina** — celular ou leitor de desktop; ela vai para o seu inventário.
3. **Atribua-a a um slot** — edição do filamento por slot (o modelo de cor RRGGBBAA da
 Snapmaker é tratado de forma transparente).
4. **Ao vivo e controle** — telemetria, progresso do trabalho e um **painel de controle**:
 eixos, temperaturas, luz, ventoinha, modo de velocidade, carregar/descarregar por slot.

## Limitações

- As tags nativas da Snapmaker ainda não são lidas no aplicativo — a especificação está documentada, e o trabalho atual visa converter os dados das tags de fabricantes em bobinas TigerData (veja [Compatibilidade](./README.md)).

## A primeira impressora a ler TigerTag nativamente

O
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
da comunidade (independente, GPL-3.0) adiciona SSH, streaming de câmera, métricas — e, com ele,
**a Snapmaker U1 lê TigerTags nativamente, na própria máquina**. Isso
faz da U1 a primeira impressora em que uma bobina TigerTag é reconhecida sem
nenhum aplicativo no meio — o futuro que a
[jogada coletiva](../vision/for-filament-manufacturers.md) tem em vista, chegando
antes do previsto pela comunidade. Veja
[integrações de terceiros](../developers/integrations.md).

---

**◀ Anterior:** [Anycubic](./anycubic.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Klipper](./klipper.md)
