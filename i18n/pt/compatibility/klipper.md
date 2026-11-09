---
sourceHash: dca3254cea9d6296d6f313f60c5ca02779bb716dda7dd4a0a7f1b717b4c12590
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Vínculo com a impressora — **Ativo (beta)**, desde o Tiger Studio 2.41

O Tiger Studio se conecta a **qualquer impressora que rode Klipper com Moonraker**:
Voron, RatRig, Vzbot, Sovol, Qidi, Elegoo Neptune 4, Creality K1 / K2 /
Ender-3 V3, FLSun, Artillery X4, Kingroon e as demais — 161 máquinas estão no
fluxo de adição com a sua imagem. A integração é um **beta**.

| Aspecto | Detalhe |
|---|---|
| Protocolo | API HTTP do Moonraker, consultada a cada 2 s; porta 7125 por padrão, outra porta pode ser definida |
| Descoberta | Varredura da LAN, ou adição manual com o endereço e uma chave de API do Moonraker opcional |
| Slots de filamento | Gates do **Happy Hare** e lanes do **AFC**, lidos e editados pelos próprios comandos da máquina (`MMU_GATE_MAP`, `SET_MATERIAL` / `SET_COLOR`); uma extrusora simples é exibida, mas não guarda dados de filamento |
| Trabalho | Trabalho em andamento com miniatura e camadas; pausar, retomar, cancelar |
| Controle | Movimento dos eixos, homing, ventoinha da peça, velocidade, luzes; temperaturas definidas com um clique |
| Telemetria | Extrusoras, mesa, câmara e cada `temperature_sensor` / `temperature_fan` / `heater_generic` |
| Câmera | Stream MJPEG ou capturas |

Máquinas cujos fabricantes instalam um firmware fechado sobre o Klipper mantêm o
próprio vínculo: [Snapmaker](./snapmaker.md), [FlashForge](./flashforge.md) e
[Anycubic](./anycubic.md) são acessadas pelos próprios conectores, não por este.
Uma máquina acessível pelos dois caminhos — uma Creality K1, por exemplo —
oferece a escolha ao ser adicionada.

## RFID nativo — n/d

O Klipper é um firmware de impressora, não um formato de tag de bobina. A
identidade da bobina vem do seu TigerTag, lido com um celular ou um leitor de
mesa.

## O fluxo de trabalho

1. **Adicione a impressora** — encontrada pela varredura da LAN, ou adicionada manualmente.
2. **Escaneie uma bobina** — com o seu celular (ou um leitor de mesa); ela vai para o
 seu inventário.
3. **Atribua-a a um gate ou a uma lane** — o Tiger Studio a grava com o próprio
 comando Happy Hare ou AFC da máquina, então não é preciso instalar nada na
 impressora.
4. **Ao vivo** — trabalho, temperaturas e câmera na visualização das impressoras.

Um [TigerSpool](../products/tigerspool.md) também pode atribuir um slot do
Klipper, mas esse caminho é **experimental**: escrito contra o driver do Tiger
Studio e um mock do Moonraker, ainda não executado em uma impressora.

---

**◀ Anterior:** [Snapmaker](./snapmaker.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [OpenSpool](./openspool.md)
