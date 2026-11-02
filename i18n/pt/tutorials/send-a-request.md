---
sourceHash: 69fadb6f1709482970523a7f91db7d0d293bb19eef68b0faab1fe4d63f04db93
sourcePath: docs/tutorials/send-a-request.md
---

# Como enviar uma solicitação

O Tiger Studio Manager permite que você envie à equipe um problema, uma ideia, uma correção de catálogo
ou uma pergunta sem sair do aplicativo. É gratuito, **não exige conta no GitHub**, é enviado **sem o seu nome nem e-mail** e vira uma **issue
pública no GitHub** que a equipe pode ler e responder.

As telas abaixo vêm do Tiger Studio Manager v2.41.0.

## Abra o formulário

Você precisa estar **conectado** ao Tiger Studio Manager. Na barra lateral, clique em
**Melhorias e sugestões** (1) — o botão ✨ perto da parte de baixo; se a
barra lateral estiver recolhida, é o ícone ✨.

<img src="../assets/send-a-request/01-open-form.jpg" width="300" alt="A barra lateral do Tiger Studio Manager com o botão Melhorias e sugestões em destaque" />

O formulário abre como um **cartão lateral**: o aplicativo continua utilizável atrás dele. Feche-o, vá
para outra tela, abra-o de novo — **seu rascunho é mantido** até você enviá-lo.

## Escolha um tipo

Há seis tipos, um para cada tipo de solicitação, e cada um tem o próprio formulário com
a própria redação. Escolha o que se encaixa (1–6). A aba **Enviar feedback** (7) é
onde você está; **Meus pedidos** (8) guarda o registro de tudo o que você enviou — veja
[Acompanhe sua solicitação](#acompanhe-sua-solicitação).

<img src="../assets/send-a-request/02-pick-a-type.jpg" width="460" alt="Os seis tipos de solicitação e as abas Enviar feedback e Meus pedidos" />

| Tipo | Use para | Exemplo |
|---|---|---|
| **Relatar um problema** | Um bug, um erro, algo que não funciona | A visualização da câmera trava após uma reconexão |
| **Sugerir uma ideia** | Um novo recurso para todo o Tiger System | Avise-me quando uma bobina estiver quase vazia |
| **Sugerir uma melhoria** | Algo que existe, mas poderia ser mais prático | Deixe-me ocultar os atalhos que eu nunca uso |
| **Corrigir uma ficha de produto** | Um filamento com um valor errado ou ausente no catálogo | O código de barras não corresponde à caixa |
| **Sugerir uma marca** | Uma marca que falta no catálogo | Example Filaments — examplefilaments.com |
| **Fazer uma pergunta** | Um número, uma tela ou um recurso que intriga você | O que o peso de um cartão de bobina inclui? |

*Corrigir uma ficha de produto* e *Sugerir uma marca* tratam dos **dados do catálogo**
(os valores de um filamento, uma marca ausente). *Fazer uma pergunta* serve para ajuda ou uma
explicação. Tudo o que diz respeito ao próprio aplicativo vai em *Relatar um problema*,
*Sugerir uma ideia* ou *Sugerir uma melhoria*.

## Escreva sua solicitação

O formulário é o mesmo para a maioria dos tipos: um título, uma descrição, as imagens, a
verificação — e então o envio. Aqui está ele para **Relatar um problema**:

<img src="../assets/send-a-request/03-report-form.jpg" width="460" alt="O formulário Relatar um problema com um título e uma descrição preenchidos" />

1. **Título do problema** — uma linha.
2. **Barra de formatação** — negrito, *itálico*, uma lista, um link e emoji.
3. **Descrição** — o que você fez, o que esperava, o que aconteceu em vez disso.

Um bom relatório, em três linhas:

> **Título:** A visualização da câmera trava depois que a impressora reconecta
> **Descrição:** 1. Abra a visualização da câmera com uma impressora online. 2. Desconecte o
> cabo de rede da impressora e conecte de novo. 3. A imagem fica congelada até eu
> reiniciar o aplicativo. Esperado: ela volta sozinha.

### Os outros cinco tipos

Os três tipos de aplicativo — *Relatar um problema*, *Sugerir uma ideia*, *Sugerir uma
melhoria* — compartilham o mesmo layout; só os rótulos e o nome do botão de envio
mudam (**Enviar meu relato**, **Enviar minha ideia**, **Enviar minha sugestão**).

**Sugerir uma ideia** — uma linha para a ideia, depois **como ela funcionaria** e
**o que mudaria para você**. Vale para todo o Tiger System — quanto mais ousada,
melhor.

<img src="../assets/send-a-request/06-type-idea.jpg" width="460" alt="O formulário Sugerir uma ideia" />

**Sugerir uma melhoria** — uma linha para **o que melhorar**, depois **o que atrapalha
hoje** e **como você gostaria que funcionasse**. Uma imagem da
tela em questão deixa tudo claro.

<img src="../assets/send-a-request/07-type-improvement.jpg" width="460" alt="O formulário Sugerir uma melhoria" />

**Corrigir uma ficha de produto** — procure o material (marca, nome, cor ou código de barras)
e escolha-o (1; 2 escolhe outro), depois diga **o que está errado** (3) e
**onde você encontrou o valor correto** — caixa, etiqueta, site do fabricante.

<img src="../assets/send-a-request/08-type-product-sheet.jpg" width="460" alt="O formulário Corrigir uma ficha de produto com um material escolhido" />

**Sugerir uma marca** — o **nome** e o **site** são obrigatórios: a equipe
confere o site antes de adicionar a marca. A descrição é opcional — país,
materiais, onde comprar.

<img src="../assets/send-a-request/09-type-brand.jpg" width="460" alt="O formulário Sugerir uma marca" />

**Fazer uma pergunta** — uma linha para a pergunta, depois **onde você viu** e
o que não bate. Imagens ajudam aqui também.

<img src="../assets/send-a-request/10-type-question.jpg" width="460" alt="O formulário Fazer uma pergunta" />

## Adicione imagens e arquivos

Uma imagem mostra o problema melhor do que uma descrição. Arraste arquivos para o
formulário, **procure-os**, **cole** uma captura de tela ou clique em **Capturar a
janela atual** (2 na próxima imagem). O cartão se oculta por um instante
para que a imagem mostre o aplicativo, não o formulário — assim você pode fechar o cartão, ir para
outra tela e capturá-la.

O que você pode anexar:

- **Até 5 arquivos** no total.
- **Imagens** — PNG, JPG, WEBP.
- **PDF** — até 5 MB (uma ficha técnica, uma fatura, uma etiqueta).
- **JSON** — até 2 MB, e deve ser um arquivo JSON válido (uma exportação, o status de uma impressora…).
- Clique no ✕ de uma miniatura para removê-la.

### Desenhe sobre uma imagem

Clique em uma imagem para abrir o editor. Escolha uma ferramenta e desenhe: uma **caixa** em volta
da coisa, **passos numerados** na ordem em que as coisas acontecem, uma **seta**… Cada marca
continua editável até você clicar em **Pronto** (canto superior direito); **Cancelar** descarta
as edições.

<img src="../assets/send-a-request/05-drawing-tools.jpg" width="700" alt="A barra de ferramentas do editor de imagens: ferramentas, cores, tamanhos, desfazer e refazer" />

1. **Mover** (V)
2. **Caneta** (P)
3. **Borracha** (E)
4. **Seta** (A)
5. **Linha** (L)
6. **Quadro** (R)
7. **Círculo** (O)
8. **Marca-texto** (H)
9. **Texto** (T)
10. **Passo numerado** (N)
11. **Desfocar** (B)
12. **Cores**
13. **Tamanhos** — S, M, L, XL
14. **Desfazer, refazer, duplicar, excluir**

A letra mostrada em cada ferramenta é o atalho de teclado dela. Passe o ponteiro sobre uma
ferramenta para ver a dica; arraste um objeto para movê-lo, use os cantos dele para redimensioná-lo,
**Delete** o remove.

:::caution[Oculte qualquer coisa privada]
A solicitação é pública. Use a ferramenta **Desfocar** para cobrir um nome, um e-mail, um
endereço ou um IP mostrado na sua imagem **antes** de enviá-la.
:::

## Verifique e envie

<img src="../assets/send-a-request/04-check-and-send.jpg" width="460" alt="A parte de baixo do formulário: anexos, informações automáticas, a caixa de confirmação e o botão de envio" />

1. **Anexos** — imagens ou arquivos (opcional).
2. **Capturar a janela atual.**
3. **Informações automáticas** — abra para ver exatamente o que viaja com a sua
   solicitação.
4. **Caixa de confirmação** — sua solicitação é **pública**, então não coloque nada privado
   nela (e-mail, endereço, senha, endereço IP…). Marque a caixa.
5. **Enviar** — o nome do botão corresponde ao tipo: **Enviar meu relato**, **Enviar minha
   ideia**, **Enviar minha sugestão**…

O que as **Informações automáticas** contêm:

- Versão do aplicativo, página atual, sistema operacional e tamanho da janela.
- **Marcas** de impressoras — nunca nomes, endereços ou códigos.
- Sua insígnia e seu XP do TigerSquad.
- Se o aplicativo registrou erros, uma caixa permite **anexá-los também**.

## Depois de enviar

Enquanto envia, uma curta lista de progresso é executada: preparar a mensagem, adicionar as
informações do sistema, enviar, finalizar. Se falhar, você permanece no formulário
com o seu rascunho — tente de novo.

<img src="../assets/send-a-request/11-sending.jpg" width="400" alt="A tela de envio com a lista de progresso" />

Depois você recebe uma confirmação: sua solicitação agora existe como uma issue pública. Guarde
o **número de acompanhamento** (1) — é o número da issue no GitHub. **Ver meus
pedidos** (2) abre o acompanhamento; **Enviar outro feedback** (3) inicia um novo
formulário.

<img src="../assets/send-a-request/12-thanks.jpg" width="400" alt="A tela Obrigado pelo seu feedback com o número de acompanhamento" />

## Acompanhe sua solicitação

A aba **Meus pedidos** lista tudo o que você enviou, com o andamento; o
número na aba conta as que ainda estão abertas.

<img src="../assets/send-a-request/13-my-requests.jpg" width="460" alt="A aba Meus pedidos com solicitações em diferentes status" />

1. **Status**
2. **Ver no GitHub**
3. **Fechar este pedido**
4. **Confirmar**

| Status | Significado |
|---|---|
| **Enviado** | recebida, ninguém olhou ainda |
| **Em andamento** | alguém está trabalhando nela |
| **Feito** | corrigida ou entregue |
| **Não planejado** | a equipe não vai fazê-la |
| **Fechado por você** | você mesmo o fechou |

Só os pedidos com status **Enviado** ou **Em andamento** podem ser fechados: clique no ✕ e depois
confirme com **Fechar?**.

**Você é notificado.** Quando uma solicitação muda de status ou recebe uma resposta da
equipe, uma notificação aparece no sino. Isso é verificado quando o aplicativo inicia e
quando a aba **Meus pedidos** é aberta.

## Se algo der errado

- *“Não foi”* — tente de novo em instantes, seu rascunho continua lá.
- *“Entra primeiro”* — a solicitação precisa da sua conta Tiger.
- *“É muito relato pra um dia só”* — um limite diário; tente de novo amanhã.

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [Tiger Studio](../products/tiger-studio.md), [FAQ](../faq/README.md), [Tutoriais](./README.md)
