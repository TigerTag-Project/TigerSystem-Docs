---
sourceHash: 0da2b619f681b73709bf69f7a267703c5e222bb752d614aa97a95027294187e1
sourcePath: docs/compatibility/flashforge.md
---

# FlashForge

## Ligação à impressora — **Ativa**

| Aspeto | Detalhe |
|---|---|
| Protocolo | Polling HTTP (porta 8898) + códigos M por TCP (porta 8899) |
| Descoberta | Multicast UDP (225.0.0.9:19000) |
| Filamento | IFS — o sistema multifilamento da FlashForge |
| Câmara | Fluxo MJPEG |
| Telemetria | Temperaturas, progresso do trabalho |

## RFID nativo — nenhum: as máquinas não têm leitor

As impressoras FlashForge são fornecidas **sem qualquer leitor RFID** e sem formato RFID próprio. Isso faz deste o exemplo mais claro da vantagem do TigerSystem: **demos às máquinas FlashForge a capacidade de trabalhar com filamento identificado por NFC — usando o leitor NFC que já existe no telemóvel do utilizador.** Uma capacidade totalmente nova, acrescentada à impressora de outra empresa, **totalmente gratuita, sem custos para o utilizador e sem qualquer modificação da máquina.**

## FlashForge × TigerSystem — o firmware oficial

A própria equipa de engenharia da FlashForge criou um firmware para a **Creator 5** e a **Creator 5 Pro** que executa **a FlashForge Cloud e a LAN em simultâneo**.

Isto importa mais do que parece. O firmware de origem obriga a escolher: ao ativar a Cloud, as ferramentas locais deixam de conseguir chegar à impressora. Essa escolha era a única coisa que separava um proprietário de FlashForge deste ecossistema — e já não existe. É um **firmware oficial da FlashForge**, não uma derivação da comunidade nem um patch — criado com o TigerTag, para esta integração, e publicado aqui com o acordo deles.

<div class="ts-model-picker">
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/"><img src="../assets/flashforge-connection-tutorial/models/creator-5.png" alt="FlashForge Creator 5" /><span>Creator 5</span></a>
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/"><img src="../assets/flashforge-connection-tutorial/models/creator-5-pro.png" alt="FlashForge Creator 5 Pro" /><span>Creator 5 Pro</span></a>
</div>

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/">Transferir — Creator 5</a>
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/">Transferir — Creator 5 Pro</a>
<a href="https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud"><img src="../assets/icons/github.svg" alt="" /> Código-fonte e guia de instalação</a>
</div>

Instala-se a partir de uma unidade USB. Gratuito para todos, com ou sem hardware TigerTag.

### Ligar uma impressora, depois de atualizada

Ative o **modo LAN** nas definições da impressora — é a única alteração que o firmware disponibiliza. O Tiger Studio encontra-a então por **descoberta automática**, ou adiciona-a manualmente com o seu **endereço IP**. Já não é preciso escolher entre a Cloud e as ferramentas locais: ambas ficam ativas em simultâneo.

| | Firmware de origem | Com este firmware |
|---|:---:|:---:|
| FlashForge Cloud — aplicação, acesso remoto | ✅ | ✅ |
| Acesso LAN — ferramentas locais na sua rede | ✅ | ✅ |
| **Ambos em simultâneo** | ❌ | ✅ |
| Tiger Studio, Tiger NFC Connect e TigerSpool **com a Cloud ativada** | ❌ | ✅ |

### Não se abdica de nada

O proprietário mantém todas as funcionalidades da FlashForge Cloud e ganha todo o ecossistema por cima: um **gestor de filamento e de impressoras** gratuito e de código aberto no computador, um **telemóvel que lê e escreve bobinas** e o **[TigerSpool](../products/tigerspool.md)** — uma caixa leitora de código aberto que fica junto das máquinas e guarda **até 24 impressoras** na sua lista, dez delas ligadas em simultâneo — uma caixa para toda a prateleira.

Assim, uma impressora sem leitor e sem formato próprio lê agora o chip de qualquer marca de filamento que use o TigerTag — e das bobinas que os próprios makers etiquetam em casa, em filamento que nunca saiu da fábrica com um chip.

Um fabricante de impressoras abrir a sua máquina a um ecossistema que não é seu é uma decisão rara. Todos os makers que possuem uma beneficiam dela.

## O fluxo de trabalho

1. **Adicionar a impressora** — encontrada pela pesquisa na rede (multicast UDP), onde só precisa do seu Printer ID, ou adicionada manualmente com o endereço IP, o número de série e o Printer ID.
2. **Ler uma bobina** — com o telemóvel (ou um leitor de computador); fica no seu inventário.
3. **Atribuí-la a um slot do IFS** — **uma leitura, um clique** a partir do mapeamento do Tiger Studio. A impressora acaba por conhecer o seu filamento tão precisamente como uma máquina com RFID integrado, em qualquer modelo FlashForge, sem alteração de hardware e sem nada acrescentado à máquina.
4. **Em direto** — temperaturas, progresso do trabalho e o fluxo MJPEG da câmara na vista de impressoras.

## Adicionar a impressora

O Tiger Studio precisa de três elementos para comunicar com uma FlashForge: o seu **endereço IP**, o seu **número de série** e uma **palavra-passe** — a que a própria impressora chama **Printer ID**. Um valor, dois nomes: o que o ecrã tátil mostra como Printer ID é o que se escreve no campo de palavra-passe do Tiger Studio.

Quantos dos três tem de escrever depende da forma como a impressora é encontrada:

| Como | O que introduz |
|---|---|
| **Pesquisa na rede** — o Tiger Studio encontra a impressora na sua rede local | apenas o **Printer ID**; a pesquisa fornece o IP e o número de série |
| **Manualmente** — a pesquisa não a encontrou | **endereço IP + número de série + Printer ID** |

Não existe via pela nuvem, por isso é sempre uma destas duas. Escolha o seu modelo para ver onde está cada valor no ecrã tátil.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Anterior:** [Elegoo](./elegoo.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Anycubic](./anycubic.md)
