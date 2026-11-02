---
sourceHash: cbf8e821d88b60b01f06da58bf3790fa335e7d0b940f38f9f3ca066fe0851b2b
sourcePath: docs/compatibility/creality.md
---

# Creality

## Conexão com a impressora — **Ao vivo**

| Aspecto | Detalhe |
|---|---|
| Protocolo | WebSocket, porta 9999 (baseado em heartbeat) |
| Filamento | Suporte a várias bobinas no CFS (boxsInfo) |
| Câmera | Vídeo WebRTC (porta 8000) |
| Telemetria | Temperaturas, progresso do trabalho, pré-visualização da impressão |

## RFID nativo — especificação documentada, leitura no aplicativo planejada

As tags de bobina da Creality são **Mifare Classic 1K** com uma **chave AES-128-ECB
para o setor 1** e criptografia opcional do payload. Especificação de decodificação somente leitura:
[`docs/rfid-vendors/creality.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/creality.md).

## O fluxo de trabalho

1. **Adicione a impressora** — descoberta na LAN ou adição por IP; o Tiger Studio se conecta
 ao WebSocket da impressora e mantém a conexão ativa.
2. **Escaneie uma bobina** — celular ou leitor de desktop; ela vai para o seu inventário.
3. **Atribua-a a um slot do CFS** — o Tiger Studio associa as bobinas do inventário
 às caixas do CFS para que as informações de filamento na máquina correspondam à realidade.
4. **Ao vivo** — temperaturas, progresso do trabalho, pré-visualização da impressão, horário de término ("Ends at") e
 o fluxo da **câmera WebRTC** na visualização das impressoras.

## Limitações

- As tags nativas da Creality ainda não são lidas no aplicativo — a especificação está documentada, e o trabalho atual visa converter os dados das tags de fabricantes em bobinas TigerData (veja [Compatibilidade](./README.md)).

---

**◀ Anterior:** [Bambu Lab](./bambu-lab.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Elegoo](./elegoo.md)
