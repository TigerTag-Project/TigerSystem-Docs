---
sourceHash: dca3254cea9d6296d6f313f60c5ca02779bb716dda7dd4a0a7f1b717b4c12590
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Ligação à impressora — **Ativa (beta)**, desde o Tiger Studio 2.41

O Tiger Studio liga-se a **qualquer impressora com Klipper e Moonraker**: Voron, RatRig, Vzbot, Sovol, Qidi, Elegoo Neptune 4, Creality K1 / K2 / Ender-3 V3, FLSun, Artillery X4, Kingroon e as restantes — 161 máquinas constam do fluxo de adição com a sua imagem. A integração é uma **beta**.

| Aspeto | Detalhe |
|---|---|
| Protocolo | API HTTP do Moonraker, consultada a cada 2 s; porta 7125 por predefinição, pode ser definida outra porta |
| Deteção | Pesquisa na LAN, ou adição manual com o seu endereço e uma chave de API do Moonraker opcional |
| Slots de filamento | Gates do **Happy Hare** e lanes do **AFC**, lidos e editados através dos próprios comandos da máquina (`MMU_GATE_MAP`, `SET_MATERIAL` / `SET_COLOR`); uma extrusora simples é mostrada, mas não guarda dados de filamento |
| Trabalho | Trabalho em curso com miniatura e camadas; pausar, retomar, cancelar |
| Controlo | Movimento dos eixos, homing, ventoinha da peça, velocidade, luzes; temperaturas definidas com um clique |
| Telemetria | Extrusoras, mesa, câmara e cada `temperature_sensor` / `temperature_fan` / `heater_generic` |
| Câmara de vídeo | Stream MJPEG ou capturas |

As máquinas cujos fabricantes instalam um firmware fechado por cima do Klipper mantêm a sua própria ligação: [Snapmaker](./snapmaker.md), [FlashForge](./flashforge.md) e [Anycubic](./anycubic.md) são alcançadas através dos seus próprios conectores, não deste. Uma máquina acessível pelas duas vias — uma Creality K1, por exemplo — oferece a escolha quando é adicionada.

## RFID nativo — n/a

O Klipper é um firmware de impressora, não um formato de etiqueta de bobina. A identidade da bobina vem do seu TigerTag, lido com um telemóvel ou um leitor de secretária.

## O fluxo de trabalho

1. **Adicionar a impressora** — encontrada pela pesquisa na LAN, ou adicionada à mão.
2. **Ler uma bobina** — com o telemóvel (ou um leitor de secretária); entra no seu inventário.
3. **Atribuí-la a um gate ou a uma lane** — o Tiger Studio escreve-a com o próprio comando Happy Hare ou AFC da máquina, pelo que não é preciso instalar nada na impressora.
4. **Em direto** — trabalho, temperaturas e câmara de vídeo na vista das impressoras.

Um [TigerSpool](../products/tigerspool.md) também pode atribuir um slot do Klipper, mas esse caminho é **experimental**: escrito contra o controlador do Tiger Studio e uma simulação do Moonraker, ainda não executado numa impressora.

---

**◀ Anterior:** [Snapmaker](./snapmaker.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [OpenSpool](./openspool.md)
