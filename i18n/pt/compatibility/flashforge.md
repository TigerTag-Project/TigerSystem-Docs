---
sourceHash: 0da2b619f681b73709bf69f7a267703c5e222bb752d614aa97a95027294187e1
sourcePath: docs/compatibility/flashforge.md
---

# FlashForge

## Vínculo com a impressora — **Ativo**

| Aspecto | Detalhe |
|---|---|
| Protocolo | Polling HTTP (porta 8898) + códigos M por TCP (porta 8899) |
| Descoberta | Multicast UDP (225.0.0.9:19000) |
| Filamento | IFS — o sistema multifilamento da FlashForge |
| Câmera | Fluxo MJPEG |
| Telemetria | Temperaturas, progresso do trabalho |

## RFID nativo — nenhum: as máquinas não têm leitor

As impressoras FlashForge saem de fábrica **sem nenhum leitor RFID** e sem formato
RFID próprio. Isso faz dela a demonstração mais clara da vantagem do TigerSystem:
**demos às máquinas FlashForge a capacidade de trabalhar com
filamento identificado por NFC — usando o leitor NFC que já existe no
smartphone do usuário.** Uma capacidade totalmente nova, acrescentada à impressora de outra empresa,
**totalmente grátis, sem nenhum custo para o usuário, sem nenhuma modificação na máquina.**

## FlashForge × TigerSystem — o firmware oficial

A própria equipe de engenharia da FlashForge criou um firmware para a **Creator 5** e a
**Creator 5 Pro** que executa **a FlashForge Cloud e a LAN ao mesmo tempo**.

Isso importa mais do que parece. O firmware de fábrica obriga a escolher: ative a Cloud
e as ferramentas locais não alcançam mais a impressora. Essa escolha era a única
coisa entre um dono de FlashForge e este ecossistema — e agora ela
não existe mais. É um **firmware oficial da FlashForge**, não um fork da comunidade nem um
patch — criado com a TigerTag, para esta integração, e publicado aqui com
o acordo deles.

<div class="ts-model-picker">
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/"><img src="../assets/flashforge-connection-tutorial/models/creator-5.png" alt="FlashForge Creator 5" /><span>Creator 5</span></a>
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/"><img src="../assets/flashforge-connection-tutorial/models/creator-5-pro.png" alt="FlashForge Creator 5 Pro" /><span>Creator 5 Pro</span></a>
</div>

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/">Baixar — Creator 5</a>
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/">Baixar — Creator 5 Pro</a>
<a href="https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud"><img src="../assets/icons/github.svg" alt="" /> Código-fonte e guia de instalação</a>
</div>

Instala-se a partir de um pen drive USB. Gratuito para qualquer pessoa, com ou sem hardware TigerTag.

### Conectando uma impressora depois de gravar o firmware

Ative o **modo LAN** nas configurações da impressora — essa é toda a mudança que o
firmware torna possível. O Tiger Studio então a encontra por **descoberta automática**,
ou você a adiciona manualmente com o **endereço IP**. Não há mais escolha a fazer
entre a Cloud e as ferramentas locais: as duas ficam ativas ao mesmo tempo.

| | Firmware de fábrica | Com este firmware |
|---|:---:|:---:|
| FlashForge Cloud — aplicativo, acesso remoto | ✅ | ✅ |
| Acesso pela LAN — ferramentas locais na sua rede | ✅ | ✅ |
| **Os dois ao mesmo tempo** | ❌ | ✅ |
| Tiger Studio, Tiger NFC Connect e TigerSpool **com a Cloud ativada** | ❌ | ✅ |

### Nada é abandonado

O dono mantém todos os recursos da FlashForge Cloud e ganha todo o ecossistema
por cima: um **gerenciador de filamentos e impressoras** gratuito e de código aberto no desktop, um
**celular que lê e grava bobinas** e o **[TigerSpool](../products/tigerspool.md)** —
uma caixa leitora de código aberto que fica ao lado das máquinas e guarda **até 24
impressoras** na sua lista, dez delas conectadas ao mesmo tempo — uma caixa para a prateleira inteira.

Assim, uma impressora sem leitor e sem formato próprio agora lê o chip de
qualquer marca de filamento que use o TigerTag — e das bobinas que os makers etiquetam por conta própria
em casa, em filamento que nunca saiu de fábrica com chip.

Um fabricante de impressoras abrir a sua máquina a um ecossistema que não é dele é uma decisão rara.
Todo maker que tem uma se beneficia dela.

## O fluxo de trabalho

1. **Adicione a impressora** — encontrada pela varredura da rede (multicast UDP), em que
 só precisa do Printer ID, ou adicionada manualmente com o endereço IP, o número de série
 e o Printer ID.
2. **Leia uma bobina** — com o celular (ou um leitor desktop); ela entra no seu
 inventário.
3. **Atribua-a a um slot do IFS** — **uma leitura, um clique** a partir do
 mapeamento do Tiger Studio. A impressora passa a conhecer o seu filamento com a
 mesma precisão de uma máquina com RFID integrado, em qualquer modelo FlashForge, sem nenhuma
 mudança de hardware e nada acrescentado à máquina.
4. **Ao vivo** — temperaturas, progresso do trabalho e o fluxo de câmera MJPEG na
 visualização de impressoras.

## Adicionando a impressora

O Tiger Studio precisa de três coisas para falar com uma FlashForge: o **endereço IP**, o
**número de série** e uma **senha** — que a própria impressora chama de
**Printer ID**. Um valor, dois nomes: o que a tela sensível ao toque mostra como Printer
ID é o que vai no campo de senha do Tiger Studio.

Quantos dos três você digita depende de como a impressora é encontrada:

| Como | O que você informa |
|---|---|
| **Varredura da rede** — o Tiger Studio encontra a impressora na sua rede local | apenas o **Printer ID**; a varredura fornece o IP e o número de série |
| **Manualmente** — a varredura não a encontrou | **endereço IP + número de série + Printer ID** |

Não existe caminho pela nuvem, então é sempre um destes dois. Escolha o seu modelo para ver
onde fica cada valor na tela sensível ao toque.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Anterior:** [Elegoo](./elegoo.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Anycubic](./anycubic.md)
