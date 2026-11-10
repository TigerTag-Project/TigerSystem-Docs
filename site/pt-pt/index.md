---
title: "A identidade aberta do filamento"
description: "A identidade NFC aberta para filamento de impressão 3D — o que é o TigerTag, o que funciona com ele e como construir a sua própria solução."
template: splash
editUrl: false
banner:
  content: Esta página foi <strong>traduzida automaticamente</strong> do inglês. <a href="https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new?title=%5BPT-PT%5D+in%C3%ADcio">Comunique um erro</a>.
hero:
  title: "TigerSystem"
  tagline: "O seu filamento, finalmente inteligente — e finalmente seu. Um pequeno chip NFC aberto, e uma bobina pode finalmente apresentar-se sozinha."
  image:
    html: |
      <div class="ts-hero-devices" role="img" aria-label="O Tiger Studio num computador, um leitor TigerPOD com uma bobina etiquetada e a aplicação móvel">
        <div class="ts-hd-item ts-hd-floats ts-hd-imac"><img class="ts-hd-float" src="/assets/hero/imac-studio.webp" alt="" width="1253" height="995" /></div>
        <div class="ts-hd-item ts-hd-pod">
          <img class="ts-hd-face" src="/assets/hero/tigerpod-mini.webp" alt="" width="450" height="665" />
          <img class="ts-hd-face ts-hd-face-scale" src="/assets/hero/tigerscale.webp" alt="" width="420" height="611" />
          <img class="ts-hd-face ts-hd-face-spool" src="/assets/hero/tigerspool.webp" alt="" width="420" height="511" />
        </div>
        <div class="ts-hd-item ts-hd-floats ts-hd-touch"><img class="ts-hd-float" src="/assets/hero/tigertouch-tour.webp" alt="" width="1000" height="733" /></div>
        <div class="ts-hd-item ts-hd-floats ts-hd-phone"><img class="ts-hd-float" src="/assets/hero/iphone-connect.webp" alt="" width="704" height="1427" /></div>
      </div>
  actions:
    - text: "A sua primeira bobina inteligente"
      link: /pt-pt/tutorials/first-smart-spool/
      icon: right-arrow
    - text: "Porque existe o TigerSystem"
      link: /pt-pt/vision/why-tigersystem/
      variant: minimal
    - text: "Explorar os produtos"
      link: /pt-pt/products/
      variant: minimal
---

## TigerSystem em 30 segundos

Todas as prateleiras de impressão 3D escondem o mesmo mistério: vinte bobinas,
metade sem etiqueta, e nenhuma capaz de dizer o que é, quanto ainda tem ou como
gosta de ser impressa.

**O TigerSystem resolve isto com um pequeno chip.** Cole um chip NFC
[TigerTag](/pt-pt/products/tigertag/) numa bobina e ela apresenta-se sozinha —
ao seu telemóvel, ao seu computador, à sua impressora: *«Sou PLA preto mate da
marca X, 1,75 mm, imprime-me a 210 °C, e restam 640 g de mim.»*

Os fabricantes de impressoras também etiquetam as suas bobinas — mas de forma
**bloqueada**, em formatos secretos que só funcionam com as próprias máquinas.
O TigerSystem inverte isto: o chip é **aberto e legível por qualquer coisa**, os
dados pertencem à **sua** conta, e cada peça — aplicações, nuvem, balança,
leitor, a própria especificação do chip — é publicada para que qualquer pessoa a
use ou construa a partir dela. É um formato, não um jardim murado.

Já foram produzidos mais de **2,5 milhões de chips**, que saem de fábrica no
filamento de marcas como a Rosa3D, a eSun, a Sunlu e a R3D, o que faz do
TigerTag o protocolo RFID de terceiros mais difundido do mundo.

<div class="ts-boxes">
<img src="/assets/box-rosa3d-cutout.png" alt="Caixa de filamento Rosa3D com TigerTag NFC-RFID" />
<img src="/assets/box-esun-cutout.png" alt="Caixa de filamento eSun com TigerTag NFC-RFID" />
<img src="/assets/box-sunlu-cutout.png" alt="Caixa de filamento Sunlu com TigerTag NFC-RFID" />
</div>

<p class="ts-boxes__caption"><em>Não é uma maqueta: caixas reais em prateleiras reais, enviadas com TigerTag lá dentro.</em></p>


<div class="ts-cardgrid">
<a class="ts-card" href="/pt-pt/tutorials/first-smart-spool/"><span class="ts-card__body"><span class="ts-card__title">Pronto para experimentar</span><span class="ts-card__text">Torne uma bobina inteligente em dois minutos — um chip NTAG virgem, o seu telemóvel, a aplicação gratuita. Sem conta, totalmente offline.</span></span></a>
<a class="ts-card" href="/pt-pt/products/"><span class="ts-card__body"><span class="ts-card__title">Um utilizador</span><span class="ts-card__text">O que cada produto faz realmente por si — chips, aplicações, a balança, o suporte do leitor.</span></span></a>
<a class="ts-card" href="/pt-pt/compatibility/"><span class="ts-card__body"><span class="ts-card__title">Um dono de impressora</span><span class="ts-card__text">Funciona com a sua máquina? Seis marcas já estão operacionais, e o chip funciona com todas as outras.</span></span></a>
<a class="ts-card" href="/pt-pt/developers/"><span class="ts-card__body"><span class="ts-card__title">Um programador</span><span class="ts-card__text">Leia e grave chips a partir de JavaScript ou Python, ou integre a identidade no seu próprio software.</span></span></a>
<a class="ts-card" href="/pt-pt/vision/for-filament-manufacturers/"><span class="ts-card__body"><span class="ts-card__title">Um fabricante de filamento</span><span class="ts-card__text">Integração na fábrica em poucos dias, cerca de um segundo por chip, à escala da produção.</span></span></a>
<a class="ts-card" href="/pt-pt/faq/"><span class="ts-card__body"><span class="ts-card__title">Só curiosidade</span><span class="ts-card__text">As perguntas que toda a gente faz, respondidas — chips, nuvem, impressoras, privacidade e muito mais.</span></span></a>
</div>

<figure class="ts-figure">
<img src="/assets/real-bench-setup.jpg" alt="Uma bancada real do TigerSystem — Tiger Studio Manager, TigerScale, um sensor de cor TD1S, um leitor ACR122U e um TigerPOD" />
<figcaption>Não é uma maqueta: o ambiente de testes numa bancada real — Studio, TigerScale, TD1s e TigerPOD a trabalhar em conjunto.</figcaption>
</figure>

## Onde mora a verdade

Esta wiki é gerada a partir do
[repositório TigerSystem-Docs](https://github.com/TigerTag-Project/TigerSystem-Docs), que é a **fonte da
verdade** do ecossistema. Quando outra fonte discordar do repositório, vale o
repositório.

**E o repositório é de todos.** Não precisa de autorização, de convite nem de
qualquer ligação ao projeto para o corrigir:

- Algo está errado, pouco claro ou em falta, e prefere apenas dizê-lo? →
  [abra uma issue](https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new)
- Sabe o que deveria lá estar? → todas as páginas têm uma ligação **«Editar
  página»** que o leva diretamente ao Markdown que está por trás. Altere-o, abra
  um pull request e pronto — o GitHub trata do fork por si, e funciona a partir
  do telemóvel.

Gralhas, melhores formulações, um passo em falta, uma página que o fez seguir o
caminho errado: tudo é bem-vindo, e são as pequenas correções que se vão somando.
O conteúdo está sob [CC BY 4.0](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/LICENSE);
consulte o [CONTRIBUTING](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/CONTRIBUTING.md) para as regras da casa, que
cabem num único ecrã.

A política de marca abrange a *marca* — o logótipo num chip físico. Não tem
nada que ver com esta documentação, que está aberta a todos.

Os assistentes de IA devem começar pelo [llms.txt](/llms.txt), a explicação
canónica condensada. Todos os outros podem começar pelo
[glossário](/pt-pt/glossary/) se algum termo atrapalhar.
