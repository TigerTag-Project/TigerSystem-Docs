---
sourceHash: 7df403d9ec01cc589f8d8c155cd8d0cb8154cd2993e09860c8c2a54ec787ef9c
sourcePath: docs/compatibility/bambu-lab.md
---

# Bambu Lab

## Vínculo com a impressora — **Ativo**

O Tiger Studio se conecta a uma impressora Bambu Lab de duas formas:

| Aspecto | Detalhe |
|---|---|
| LAN | MQTTS (TLS) direto com a impressora, porta 8883. Exige que o **modo somente LAN** (LAN Only) e o **Modo Desenvolvedor** da impressora sejam ativados uma vez — [passo a passo por modelo](#mudar-para-o-modo-lan). |
| Nuvem | Entre uma vez com a sua conta Bambu Lab (e-mail + código de uso único) — todas as impressoras da conta são encontradas automaticamente, inclusive o código de acesso à LAN. Nenhuma ativação na impressora é necessária para esta parte. |
| Filamento | Suporte ao AMS — até 16 slots, edição do filamento por slot |
| Descoberta | LAN: SSDP + sonda TLS, além de adicionar por IP. Nuvem: automática, a partir da conta. |
| Câmera | Fluxo JPEG (TCP 6000) / RTSP — a mesma imagem nos dois casos; exige que o **LAN Mode Liveview** esteja ativado na impressora |
| Telemetria | Temperaturas, progresso do trabalho, pré-visualização da impressão |

> **As conexões pela nuvem são somente leitura hoje**, com uma exceção. Você recebe telemetria ao vivo —
> temperaturas, progresso, câmera — e a **luz** da impressora, que é acionada pela nuvem.
> Todo o resto que age sobre a máquina (pausar, retomar, parar) exige o caminho pela LAN.

## RFID nativo — especificação documentada, leitura no aplicativo planejada

As tags de bobina da Bambu são **Mifare Classic 1K** com **chaves derivadas do UID
por HKDF-SHA256** — bloqueadas criptograficamente para servir ao ecossistema do fabricante. Uma
especificação de decodificação somente leitura é mantida em
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## O fluxo de trabalho

1. **Adicione a impressora** — seja **na LAN** (descoberta por SSDP ou adição por IP,
 combinada com o código de acesso à LAN da impressora) ou **pela nuvem** (entre
 com a sua conta Bambu Lab — todas as impressoras dela são encontradas automaticamente).
 O caminho pela LAN exige que o modo somente LAN e o Modo Desenvolvedor da impressora
 sejam ativados uma vez antes — [passo a passo por modelo](#mudar-para-o-modo-lan).
2. **Leia uma bobina** — com o celular ou um leitor desktop; a bobina entra no seu
 inventário.
3. **Atribua-a a um slot do AMS** — o Tiger Studio envia o perfil do filamento
 (material, cor) ao slot por MQTTS; as informações do lado da máquina passam
 a corresponder à realidade, em até 16 slots do AMS.
4. **Ao vivo** — temperaturas, progresso do trabalho, pré-visualização da impressão, hora
 **"Termina às"** no relógio e a imagem da câmera, direto na visualização de impressoras.

## Mudar para o modo LAN

O caminho pela LAN exige que o **modo somente LAN** e o **Modo Desenvolvedor** estejam ativados na própria impressora — uma
configuração única, feita na tela. Escolha o seu modelo abaixo para ver os passos exatos.

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

- As tags nativas da Bambu ainda não são lidas no aplicativo — a especificação está documentada, e o trabalho atual visa converter os dados das tags dos fabricantes em bobinas TigerData (veja [Compatibilidade](./README.md)).
- A imagem da câmera exige que o LAN Mode Liveview esteja ativado na impressora, seja qual for o caminho de conexão usado.

---

**◀ Anterior:** [Compatibilidade](./README.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Creality](./creality.md)
