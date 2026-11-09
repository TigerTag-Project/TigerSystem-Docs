---
sourceHash: 7df403d9ec01cc589f8d8c155cd8d0cb8154cd2993e09860c8c2a54ec787ef9c
sourcePath: docs/compatibility/bambu-lab.md
---

# Bambu Lab

## Ligação à impressora — **Ativa**

O Tiger Studio liga-se a uma impressora Bambu Lab de duas formas:

| Aspeto | Detalhe |
|---|---|
| LAN | MQTTS (TLS) diretamente à impressora, porta 8883. Exige que o **modo LAN Only** e o **modo de programador** da impressora sejam ativados uma vez — [passo a passo por modelo](#mudar-para-o-modo-lan). |
| Nuvem | Inicie sessão uma vez com a sua conta Bambu Lab (e-mail + código de utilização única) — todas as impressoras da conta são encontradas automaticamente, incluindo o código de acesso LAN. Para esta parte não é preciso nenhum interruptor na impressora. |
| Filamento | Suporte AMS — até 16 slots, edição do filamento por slot |
| Descoberta | LAN: SSDP + sonda TLS, mais Add by IP. Nuvem: automática, a partir da conta. |
| Câmara | Fluxo JPEG (TCP 6000) / RTSP — a mesma imagem nos dois casos; exige que o **LAN Mode Liveview** esteja ativado na impressora |
| Telemetria | Temperaturas, progresso do trabalho, pré-visualização da impressão |

> **As ligações na nuvem são, atualmente, só de leitura**, com uma exceção. Obtém telemetria em direto — temperaturas, progresso, câmara — e a **luz** da impressora, que se liga e desliga através da nuvem. Tudo o resto que atua sobre a máquina (pausa, retoma, paragem) exige a via LAN.

## RFID nativo — especificação documentada, leitura na aplicação prevista

As etiquetas de bobina da Bambu são **Mifare Classic 1K** com **chaves derivadas do UID por HKDF-SHA256** — bloqueadas criptograficamente para servir o ecossistema do fabricante. Uma especificação de descodificação só de leitura é mantida em [`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## O fluxo de trabalho

1. **Adicionar a impressora** — quer **na LAN** (descoberta SSDP, ou Add by IP, em conjunto com o código de acesso LAN da impressora) quer **a partir da nuvem** (inicie sessão com a sua conta Bambu Lab — todas as impressoras da conta são encontradas automaticamente). A via LAN exige que o modo LAN Only e o modo de programador da impressora sejam ativados primeiro, uma única vez — [passo a passo por modelo](#mudar-para-o-modo-lan).
2. **Ler uma bobina** — telemóvel ou leitor de computador; a bobina fica no seu inventário.
3. **Atribuí-la a um slot do AMS** — o Tiger Studio envia o perfil do filamento (material, cor) para o slot por MQTTS; a informação do lado da máquina passa a corresponder à realidade, em até 16 slots AMS.
4. **Em direto** — temperaturas, progresso do trabalho, pré-visualização da impressão, hora de relógio **«Termina às»** e a imagem da câmara, diretamente na vista de impressoras.

## Mudar para o modo LAN

A via LAN exige que o **modo LAN Only** e o **modo de programador** estejam ativados na própria impressora — uma configuração única, feita no ecrã. Escolha abaixo o seu modelo para ver os passos exatos.

<div class="ts-model-picker">
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1-mini.png" alt="A1 mini" /><span>A1 mini</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1.png" alt="A1" /><span>A1</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a2l.png" alt="A2L" /><span>A2L</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1p.png" alt="P1P" /><span>P1P</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1s.png" alt="P1S" /><span>P1S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/p2s.png" alt="P2S" /><span>P2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1c.png" alt="X1 Carbon" /><span>X1 Carbon</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1e.png" alt="X1E" /><span>X1E</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x2d.png" alt="X2D" /><span>X2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2s.png" alt="H2S" /><span>H2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2d.png" alt="H2D" /><span>H2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2dpro.png" alt="H2D Pro" /><span>H2D Pro</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2c.png" alt="H2C" /><span>H2C</span></a>
</div>

## Limitações

- As etiquetas nativas da Bambu ainda não são lidas na aplicação — a especificação está documentada e o trabalho atual visa converter os dados das etiquetas dos fabricantes em bobinas TigerData (ver [Compatibilidade](./README.md)).
- A imagem da câmara exige que o LAN Mode Liveview esteja ativado na impressora, seja qual for a via de ligação utilizada.

---

**◀ Anterior:** [Compatibilidade](./README.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Creality](./creality.md)
