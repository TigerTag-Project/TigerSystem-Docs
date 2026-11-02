---
sourceHash: cbf8e821d88b60b01f06da58bf3790fa335e7d0b940f38f9f3ca066fe0851b2b
sourcePath: docs/compatibility/creality.md
---

# Creality

## Ligação à impressora — **Disponível**

| Aspeto | Detalhe |
|---|---|
| Protocolo | WebSocket, porta 9999 (baseado em heartbeat) |
| Filamento | Suporte multibobina CFS (boxsInfo) |
| Câmara | Vídeo WebRTC (porta 8000) |
| Telemetria | Temperaturas, progresso do trabalho, pré-visualização da impressão |

## RFID nativo — especificação documentada, leitura na aplicação prevista

As etiquetas de bobina da Creality são **Mifare Classic 1K** com uma **chave AES-128-ECB para o setor 1** e encriptação opcional do conteúdo. Especificação de descodificação só de leitura: [`docs/rfid-vendors/creality.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/creality.md).

## O fluxo de trabalho

1. **Adicionar a impressora** — descoberta na LAN ou Add by IP; o Tiger Studio liga-se ao WebSocket da impressora e mantém a ligação ativa.
2. **Ler uma bobina** — telemóvel ou leitor de secretária; ela entra no seu inventário.
3. **Atribuí-la a um slot CFS** — o Tiger Studio mapeia as bobinas do inventário para as caixas CFS, de modo que a informação de filamento do lado da máquina corresponda à realidade.
4. **Em direto** — temperaturas, progresso do trabalho, pré-visualização da impressão, hora de «Ends at» e o fluxo da **câmara WebRTC** na vista das impressoras.

## Limitações

- As etiquetas nativas da Creality ainda não são lidas na aplicação — a especificação está documentada, e o trabalho atual visa converter os dados das etiquetas dos fabricantes em bobinas TigerData (ver [Compatibilidade](./README.md)).

---

**◀ Anterior:** [Bambu Lab](./bambu-lab.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Elegoo](./elegoo.md)
