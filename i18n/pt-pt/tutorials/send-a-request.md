---
sourceHash: 69fadb6f1709482970523a7f91db7d0d293bb19eef68b0faab1fe4d63f04db93
sourcePath: docs/tutorials/send-a-request.md
---

# Como enviar um pedido

O Tiger Studio Manager permite enviar à equipa um problema, uma ideia, uma correção do catálogo ou uma pergunta sem sair da aplicação. É gratuito, não precisa de **nenhuma conta do GitHub**, é enviado **sem o seu nome nem o seu e-mail** e transforma-se numa **issue pública no GitHub** que a equipa pode ler e responder.

Os ecrãs abaixo são do Tiger Studio Manager v2.41.0.

## Abrir o formulário

Tem de ter **sessão iniciada** no Tiger Studio Manager. Na barra lateral, clique em **Melhorias e sugestões** (1) — o botão ✨ perto do fundo; se a barra lateral estiver recolhida, é o ícone ✨.

<img src="../assets/send-a-request/01-open-form.jpg" width="300" alt="A barra lateral do Tiger Studio Manager com o botão Melhorias e sugestões em destaque" />

O formulário abre-se como um **cartão lateral**: a aplicação continua utilizável por trás. Feche-o, vá para outro ecrã, abra-o de novo — **o rascunho é mantido** até o enviar.

## Escolher um tipo

Há seis tipos, um por cada espécie de pedido, e cada um tem o seu próprio formulário com a sua própria formulação. Escolha o que se adequa (1–6). O separador **Enviar feedback** (7) é onde está; **Os meus pedidos** (8) guarda o registo de tudo o que enviou — veja [Acompanhar o seu pedido](#acompanhar-o-seu-pedido).

<img src="../assets/send-a-request/02-pick-a-type.jpg" width="460" alt="Os seis tipos de pedido e os separadores Enviar feedback e Os meus pedidos" />

| Tipo | Use-o para | Exemplo |
|---|---|---|
| **Reportar um problema** | Um bug, um erro, algo que não funciona | A vista da câmara congela depois de uma nova ligação |
| **Propor uma ideia** | Uma nova funcionalidade para todo o Tiger System | Avisar-me quando uma bobina estiver quase vazia |
| **Sugerir uma melhoria** | Algo que existe mas podia ser mais prático | Deixar-me ocultar os atalhos que nunca uso |
| **Corrigir uma ficha de produto** | Um filamento com um valor errado ou em falta no catálogo | O código de barras não corresponde à caixa |
| **Propor uma marca** | Uma marca que falta no catálogo | Example Filaments — examplefilaments.com |
| **Fazer uma pergunta** | Um número, um ecrã ou uma funcionalidade que o intriga | O que inclui o peso num cartão de bobina? |

*Corrigir uma ficha de produto* e *Propor uma marca* dizem respeito aos **dados do catálogo** (os valores de um filamento, uma marca em falta). *Fazer uma pergunta* serve para ajuda ou explicação. Tudo o que diga respeito à própria aplicação vai em *Reportar um problema*, *Propor uma ideia* ou *Sugerir uma melhoria*.

## Escrever o pedido

O formulário é igual para a maioria dos tipos: um título, uma descrição, as imagens, a verificação — depois enviar. Aqui está para **Reportar um problema**:

<img src="../assets/send-a-request/03-report-form.jpg" width="460" alt="O formulário Reportar um problema com um título e uma descrição preenchidos" />

1. **Título do problema** — uma linha.
2. **Barra de formatação** — negrito, *itálico*, uma lista, uma ligação e emoji.
3. **Descrição** — o que fez, o que esperava, o que aconteceu em vez disso.

Um bom relato, em três linhas:

> **Título:** A vista da câmara congela depois de a impressora voltar a ligar-se
> **Descrição:** 1. Abra a vista da câmara com uma impressora online. 2. Desligue o
> cabo de rede da impressora e volte a ligá-lo. 3. A imagem fica congelada até eu
> reiniciar a aplicação. Esperado: voltar sozinha.

### Os outros cinco tipos

Os três tipos de aplicação — *Reportar um problema*, *Propor uma ideia*, *Sugerir uma melhoria* — partilham a mesma disposição; só mudam as etiquetas e o nome do botão de envio (**Enviar o meu relato**, **Enviar a minha ideia**, **Enviar a minha sugestão**).

**Propor uma ideia** — uma linha para a ideia, depois **como funcionaria** e **o que mudaria para si**. É para todo o Tiger System — quanto mais louca, melhor.

<img src="../assets/send-a-request/06-type-idea.jpg" width="460" alt="O formulário Propor uma ideia" />

**Sugerir uma melhoria** — uma linha para **o que melhorar**, depois **o que atrapalha hoje** e **como gostaria que funcionasse**. Uma imagem do ecrã em causa torna tudo claro.

<img src="../assets/send-a-request/07-type-improvement.jpg" width="460" alt="O formulário Sugerir uma melhoria" />

**Corrigir uma ficha de produto** — pesquise o material (marca, nome, cor ou código de barras) e escolha-o (1; 2 escolhe outro), depois diga **o que está errado** (3) e **onde encontrou o valor certo** — caixa, etiqueta, site do fabricante.

<img src="../assets/send-a-request/08-type-product-sheet.jpg" width="460" alt="O formulário Corrigir uma ficha de produto com um material escolhido" />

**Propor uma marca** — o **nome** e o **site** são obrigatórios: a equipa verifica o site antes de acrescentar a marca. A descrição é opcional — país, materiais, onde comprar.

<img src="../assets/send-a-request/09-type-brand.jpg" width="460" alt="O formulário Propor uma marca" />

**Fazer uma pergunta** — uma linha para a pergunta, depois **onde a viu** e o que não bate certo. As imagens também ajudam aqui.

<img src="../assets/send-a-request/10-type-question.jpg" width="460" alt="O formulário Fazer uma pergunta" />

## Adicionar imagens e ficheiros

Uma imagem mostra o problema melhor do que uma descrição. Arraste ficheiros para o formulário, **procure ficheiros**, **cole** uma captura de ecrã ou clique em **Capturar a janela atual** (2 na imagem seguinte). O cartão oculta-se por um instante para que a imagem mostre a aplicação e não o formulário — assim pode fechar o cartão, ir para outro ecrã e capturá-lo.

O que pode anexar:

- **Até 5 ficheiros** no total.
- **Imagens** — PNG, JPG, WEBP.
- **PDF** — até 5 MB (uma ficha técnica, uma fatura, uma etiqueta).
- **JSON** — até 2 MB, e tem de ser um ficheiro JSON válido (uma exportação, o estado de uma impressora…).
- Clique no ✕ de uma miniatura para a remover.

### Desenhar sobre uma imagem

Clique numa imagem para abrir o editor. Escolha uma ferramenta e desenhe: uma **moldura** à volta da coisa, **passos numerados** pela ordem em que as coisas acontecem, uma **seta**… Cada marca continua editável até clicar em **Feito** (canto superior direito); **Cancelar** descarta as edições.

<img src="../assets/send-a-request/05-drawing-tools.jpg" width="700" alt="A barra de ferramentas do editor de imagens: ferramentas, cores, tamanhos, anular e refazer" />

1. **Mover** (V)
2. **Caneta** (P)
3. **Borracha** (E)
4. **Seta** (A)
5. **Linha** (L)
6. **Moldura** (R)
7. **Círculo** (O)
8. **Marcador** (H)
9. **Texto** (T)
10. **Passo numerado** (N)
11. **Desfocar** (B)
12. **Cores**
13. **Tamanhos** — S, M, L, XL
14. **Anular, refazer, duplicar, eliminar**

A letra mostrada em cada ferramenta é o seu atalho de teclado. Pouse o ponteiro sobre uma ferramenta para ver a dica; arraste um objeto para o mover, use os cantos para o redimensionar, **Delete** remove-o.

:::caution[Oculte tudo o que é privado]
O pedido é público. Use a ferramenta **Desfocar** para cobrir um nome, um e-mail, uma morada ou um IP que apareçam na sua imagem **antes** de o enviar.
:::

## Verificar e enviar

<img src="../assets/send-a-request/04-check-and-send.jpg" width="460" alt="O fundo do formulário: anexos, informações automáticas, a caixa de confirmação e o botão de envio" />

1. **Anexos** — imagens ou ficheiros (opcional).
2. **Capturar a janela atual.**
3. **Informações automáticas** — abra-as para ver exatamente o que viaja com o seu pedido.
4. **Caixa de confirmação** — o seu pedido é **público**, por isso não ponha nada privado (e-mail, morada, palavra-passe, endereço IP…). Marque a caixa.
5. **Enviar** — o nome do botão corresponde ao tipo: **Enviar o meu relato**, **Enviar a minha ideia**, **Enviar a minha sugestão**…

O que contêm as **Informações automáticas**:

- Versão da aplicação, página atual, sistema operativo e tamanho da janela.
- **Marcas** das impressoras — nunca nomes, endereços nem códigos.
- O seu selo TigerSquad e o XP.
- Se a aplicação registou erros, uma caixa permite-lhe **anexá-los também**.

## Depois de enviar

Enquanto envia, corre uma curta lista de progresso: a preparar a mensagem, a adicionar informações do sistema, a enviar, a finalizar. Se falhar, fica no formulário com o seu rascunho — tente de novo.

<img src="../assets/send-a-request/11-sending.jpg" width="400" alt="O ecrã de envio com a sua lista de progresso" />

Depois recebe uma confirmação: o seu pedido existe agora como issue pública. Guarde o **número de acompanhamento** (1) — é o número da issue no GitHub. **Ver os meus pedidos** (2) abre o acompanhamento; **Enviar outro feedback** (3) inicia um formulário novo.

<img src="../assets/send-a-request/12-thanks.jpg" width="400" alt="O ecrã Obrigado pelo feedback! com o número de acompanhamento" />

## Acompanhar o seu pedido

O separador **Os meus pedidos** lista tudo o que enviou, com o respetivo progresso; o número no separador conta os que ainda estão abertos.

<img src="../assets/send-a-request/13-my-requests.jpg" width="460" alt="O separador Os meus pedidos com pedidos em estados diferentes" />

1. **Estado**
2. **Ver no GitHub**
3. **Fechar este pedido**
4. **Confirmar**

| Estado | Significado |
|---|---|
| **Enviado** | recebido, ainda ninguém o viu |
| **Em curso** | alguém está a trabalhar nele |
| **Feito** | corrigido ou entregue |
| **Não planeado** | a equipa não o vai fazer |
| **Fechado por ti** | fechou-o você mesmo |

Só os pedidos **Enviado** e **Em curso** podem ser fechados: clique no ✕ e depois confirme com **Fechar?**.

**É notificado.** Quando um pedido muda de estado ou recebe uma resposta da equipa, aparece uma notificação no sino. É verificado quando a aplicação arranca e quando o separador **Os meus pedidos** é aberto.

## Se algo correr mal

- *«Não passou»* — tente de novo daqui a pouco, o rascunho continua lá.
- *«Inicia sessão primeiro»* — o pedido precisa da sua conta Tiger.
- *«São muitos relatos para um dia»* — um limite diário; tente de novo amanhã.

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [Tiger Studio](../products/tiger-studio.md), [FAQ](../faq/README.md), [Tutoriais](./README.md)
