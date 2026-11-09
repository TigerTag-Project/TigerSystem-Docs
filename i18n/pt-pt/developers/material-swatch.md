---
sourceHash: 177607b1f797be9c2f0be3d7925a65850116275b036fcba3e65a77cd852e9af0
sourcePath: docs/developers/material-swatch.md
---

# A amostra de material — a convenção oficial

A cor de um material é guardada como dados, não como imagem. A **amostra** é esses dados desenhados: a forma colorida que representa o material numa lista, num cartão, num slot de rack, junto ao seu nome. Esta página é a **convenção oficial do TigerSystem** para a produzir, de modo que o mesmo material mostre a mesma amostra em toda a parte — no Tiger Studio, na aplicação móvel, na web, na sua própria integração.

**«Material», e não «bobina», é deliberado.** Um TigerTag identifica uma bobina de filamento, mas também um acessório, uma peça sobressalente, uma resina — e os tipos de produto que o protocolo ainda vai ganhar. A convenção é escrita face a `id_type` em geral: nada do que se segue lê o tipo de produto, pelo que uma amostra é produzida da mesma forma seja qual for o material.

É normativa. Um filamento bicolor que mostra uma divisão suave numa aplicação e um limite duro ou uma rampa completa noutra é um erro da que se afastou desta página — não uma questão de gosto. Se não conseguir reproduzir uma regra exatamente (uma plataforma sem gradiente cónico, por exemplo), implemente o equivalente mais próximo descrito em [Plataformas sem CSS](#plataformas-sem-css) e diga-o; não invente uma imagem diferente.

- **Versão da convenção:** 1.2 — o bicolor é uma **divisão suave a 135°** (cores sólidas, junta de 20 % misturada) e um **aspeto Tricolor é uma varredura cónica** (a menos que seja também Rainbow) (a 1.1 desenhava o bicolor como uma divisão diagonal dura e o tricolor como um camembert; a 1.0 dividia o bicolor na vertical)
- **Renderizador de referência:** [`material-swatch-playground.html`](./material-swatch-playground.html) — abra-o em qualquer navegador, sem servidor, sem dependências. Todos os casos, todas as formas de caixa, seletores de cor em direto e o CSS exato que produz.

---

## Quatro formas, e apenas quatro

| Forma | Quando | Geometria |
|---|---|---|
| **Divisão suave** | **Duas ou três** cores de limite duro — bicolor, ou três cores sem aspeto Tricolor | N faixas iguais ao longo do eixo de **135°**, primeira cor em **cima à esquerda**; cada cor mantém-se **sólida** e só uma junta de **20 %** da diagonal (`SPLIT_BLEND`) centrada em cada fronteira se mistura |
| **Rampa** | Rainbow, e o tipo `gradient` declarado pelo catálogo | Uma rampa linear suave a **135°**, paragens uniformemente espaçadas — a apontar para baixo à direita, pelo que a primeira cor fica em cima à esquerda |
| **Camembert** (tarte) | **Quatro ou mais** cores de limite duro — qualquer lista de N ≥ 4 | N setores cónicos iguais, a primeira cor a começar às **12 horas**, a varrer no **sentido horário** |
| **Varredura cónica** | Um aspeto **Tricolor** (id 24) que não seja também Rainbow, e o `conic_gradient` declarado pelo catálogo | Um gradiente cónico suave a partir das **12 horas**, no sentido horário, a fechar na primeira cor — a roda de cores |

Dito sem rodeios: **duas ou três cores duras fazem uma divisão suave, quatro ou mais fazem um camembert, cores suaves fazem uma rampa e um aspeto Tricolor gira numa varredura cónica** — e há exatamente um ângulo em todo o sistema, 135°, partilhado pela divisão suave e pela rampa.

**O bicolor e o tricolor são uma divisão suave — o eixo da rampa, a nitidez da divisão.** Mesmo eixo e ordem de uma rampa (primeira cor em cima à esquerda), mas cada cor mantém-se sólida na sua faixa e só uma junta de **20 %** se mistura em cada fronteira. Com `seg = 100 / N` e `h = SPLIT_BLEND / 2 = 10`, a cor *i* mantém-se de `i·seg + h` (0 para a primeira) até `(i+1)·seg − h` (100 para a última). Implemente-a uma só vez, na função que divide uma lista de cores (N ≤ 3 → divisão suave, N ≥ 4 → tarte), para que todos os chamadores a recebam; nunca a desenhe espelhada.

Porquê uma divisão suave para duas ou três cores: um limite duro continuava a ler-se como dois ou três objetos separados — numa miniatura, e ainda mais na moldura de cor em torno de uma fotografia de produto, em que a fotografia escondia o centro e deixava barras coloridas desligadas. Uma rampa completa resolvia isso, mas esbatia as cores, e nenhuma das duas se lê como a cor verdadeira. A divisão suave mantém cada cor sólida e mistura apenas a junta: um material multitom, cores verdadeiras, em qualquer forma de caixa. Os 20 % foram escolhidos a olho em todas as superfícies (uma junta mais larga deixa à cor do meio de um tricolor quase nenhuma faixa sólida). Porquê uma tarte a partir de quatro cores: quatro ou mais faixas ao longo de uma diagonal ficam demasiado finas para se lerem, enquanto as fronteiras dos setores continuam angulares e reconhecíveis — medidas a partir do centro da caixa, de modo que N setores se mantêm legíveis seja qual for a proporção da caixa. Porquê 135°: é o único ângulo do sistema, partilhado pela divisão suave e por todas as rampas. Porquê uma varredura cónica para um aspeto Tricolor: três faixas numa diagonal deixam à cor do meio uma lasca fina; uma roda de cores dá às três o mesmo peso e lê-se logo como «três cores», em todos os tamanhos.

---

## De onde vêm os dados

Duas camadas alimentam o renderizador, e não são a mesma coisa.

### O chip — no máximo três cores

Um TigerTag leva **três slots de cor e um aspeto**. Nada mais: não há tipo de gradiente no chip, nem nunca houve.

| Campo | Tipo | Significado |
|---|---|---|
| `color_r` / `color_g` / `color_b` | `int 0-255` | Slot 1 |
| `color_r2` / `color_g2` / `color_b2` | `int 0-255` | Slot 2 |
| `color_r3` / `color_g3` / `color_b3` | `int 0-255` | Slot 3 |
| `color_a` | `int 0-255` | Alfa — **ignorado na renderização**; nunca misture a cor de um material |
| `id_aspect1` / `id_aspect2` | `int` | Qualquer dos slots pode levar o aspeto de coloração |

Três ids de aspeto mudam a forma (a respetiva tabela de referência também traz um `color_count` de referência):

| id | etiqueta | `color_count` | Forma |
|---|---|---|---|
| `252` | Bicolor | 2 | **Divisão suave**, 135° |
| `24` | Tricolor | 3 | **Varredura cónica** |
| `145` | Rainbow | 3 | Rampa, 135° |

Todos os outros aspetos (`Silk`, `Matt`, `Glitter`, …) têm `color_count` ≤ 1 e não afetam a forma. **Compare pelo id, não pela etiqueta** — as etiquetas são cadeias de apresentação e podem ser traduzidas.

> **Nunca conte os slots para adivinhar quantas cores existem.** Um documento de chip traz sempre os três slots: os componentes ausentes são guardados como `0`, pelo que os slots 2 e 3 se leem como preto puro num material monocolor. **O número de cores vem do aspeto, nunca dos slots.**

### O catálogo — uma descrição mais rica, só na nuvem

Um produto do catálogo oficial pode descrever a sua cor com mais precisão do que um chip. Estes dois campos existem **apenas** nos dados da nuvem/do produto — nunca são escritos num chip:

| Campo | Tipo | Significado |
|---|---|---|
| `online_color_list` | `string[]` | Cores ordenadas, `RRGGBB` ou `RRGGBBAA`, `#` opcional. A ordem tem significado: o índice 0 é o primeiro setor / a primeira paragem. |
| `online_color_type` | `string` | Instrução de renderização: `mono`, `multi`, `gradient`, `conic_gradient`. Qualquer outro valor, ou a ausência, é tratado como `multi`. |

Quando as duas camadas estão presentes, **o catálogo prevalece** — é a descrição mais precisa do mesmo produto.

---

## A escada de decisão

Avalie **por esta ordem; a primeira correspondência ganha**. A ordem codifica uma prioridade: o catálogo prevalece sobre o chip, um tipo de cor explícito prevalece sobre um palpite, e o aspeto só fala quando não há lista de cores online.

Seja `LIST` = `online_color_list` após [normalização](#normalização), `TYPE` = `online_color_type`, `SLOTS` = os slots do chip não nulos.

| # | Condição | Resultado |
|---|---|---|
| 1 | `LIST ≥ 2` e `TYPE == "conic_gradient"` | Varredura cónica suave, a fechar na primeira cor |
| 2 | `LIST ≥ 2` e `TYPE == "gradient"` | Rampa — mesmo com duas ou três cores; o catálogo pediu uma rampa suave, pelo que não se torna uma divisão suave |
| 3 | `LIST ≥ 3`, aspeto **Tricolor**, não **Rainbow** | **Varredura cónica** de `LIST` |
| 3b | `LIST ≥ 2` | **Divisão suave** de `LIST` com 2 ou 3 cores, **camembert** de `LIST.length` setores com 4 ou mais |
| 4 | `LIST == 1` | Cor sólida — **prevalece sobre a cor do chip** |
| 5 | aspeto **Rainbow** *e* **Tricolor** | Rampa, 3 paragens |
| 6 | aspeto **Rainbow** *e* **Bicolor** | Rampa, 2 paragens |
| 7 | aspeto **Rainbow** | Rampa sobre `SLOTS`; 1 slot → sólida; 0 slots → a predefinição de 6 cores |
| 8 | aspeto **Tricolor** | **Varredura cónica** sobre `SLOTS` (slot 3 em falta → uma divisão suave de 2 cores sobre os slots 1 e 2, não repete o slot 1) |
| 9 | aspeto **Bicolor** | **Divisão suave**, 135°, sobre os slots 1 e 2 |
| 10 | caso contrário | Slot 1 sólido; nada de nada → `#1c2030` |

Predefinições quando um aspeto não traz cor utilizável:

| Caso | Predefinições |
|---|---|
| Rainbow, sem cores | `#ff0000 #ff8800 #ffff00 #00cc00 #0000ff #8b00ff` |
| Rainbow + Tricolor | `#ff4d4d #ffd93d #4da3ff` |
| Rainbow + Bicolor | `#ff7a00 #8a2be2` |
| Tricolor | `#cccccc #888888` (slot 3 em falta → divisão suave de 2 cores, o slot 1 não se repete) |
| Bicolor | `#cccccc #ffffff` |
| Nada | `#1c2030` |

---

## Normalização

Aplicada a cada entrada de `online_color_list` antes de a escada ser avaliada:

1. Remover espaços e retirar um `#` inicial.
2. Se tiver 8 caracteres (`RRGGBBAA`), **manter os 6 primeiros** — o alfa é descartado, nunca misturado.
3. Aceitar apenas `^[0-9a-fA-F]{6}$`. **Tudo o resto é retirado da lista**, não substituído por uma predefinição — uma entrada malformada nunca deve tornar-se preta em silêncio.
4. Voltar a acrescentar `#` na saída.

A remoção acontece *antes* de a escada correr, pelo que `["ff0000", "oops"]` é uma lista de **uma cor** (regra 4), não uma tarte de dois setores.

Os slots do chip convertem-se em `#` + dois dígitos hexadecimais por componente, apenas quando os três componentes são números.

---

## As expressões exatas

Com `c1…cN` as cores normalizadas, `step = 360 / N`, `seg = 100 / N` e `SPLIT_BLEND = 20`:

```css
/* Soft split — 2 or 3 hard colours: rule 3 with 2-3 colours, rules 8-9.
   Each colour solid over its band, a 20 % blended seam at each boundary. */
linear-gradient(135deg, c1 0% 40%, c2 60% 100%)                        /* N = 2 */
linear-gradient(135deg, c1 0% 23.33%, c2 43.33% 56.67%, c3 76.67% 100%) /* N = 3 */

/* Ramp — rainbow and a declared gradient: rules 2, 5-7 */
linear-gradient(135deg, c1, c2, …)

/* Camembert — four or more hard colours: rule 3 with ≥ 4 colours */
conic-gradient(c1 0deg <step>deg, c2 <step>deg <2·step>deg, …)

/* Catalogue-declared conic gradient — rule 1 (first colour repeated to close) */
conic-gradient(from 0deg, c1, c2, …, c1)

/* Mono — rules 4, 10 */
# RRGGBB
```

### Vetores de teste

Qualquer implementação tem de os reproduzir exatamente.

| Entrada | Esperado |
|---|---|
| `{online_color_list:["FF5722"]}` | `#FF5722` |
| `{online_color_list:["000000FF"]}` | `#000000` |
| `{online_color_list:["e02424","2463e0"]}` | `linear-gradient(135deg, #e02424 0% 40%, #2463e0 60% 100%)` |
| `{online_color_list:["e02424","2463e0","22a06b"]}` | `linear-gradient(135deg, #e02424 0% 23.33%, #2463e0 43.33% 56.67%, #22a06b 76.67% 100%)` |
| `{online_color_list:["e02424","2463e0","22a06b","f0a020"]}` | `conic-gradient(#e02424 0deg 90deg, #2463e0 90deg 180deg, #22a06b 180deg 270deg, #f0a020 270deg 360deg)` |
| `{online_color_list:["e02424","2463e0"],online_color_type:"gradient"}` | `linear-gradient(135deg, #e02424, #2463e0)` |
| `{color_r:224,color_g:36,color_b:36,color_r2:36,color_g2:99,color_b2:224,id_aspect2:252}` | `linear-gradient(135deg, #e02424 0% 40%, #2463e0 60% 100%)` |
| `{id_aspect1:145}` | `linear-gradient(135deg, #ff0000, #ff8800, #ffff00, #00cc00, #0000ff, #8b00ff)` |
| `{}` | `#1c2030` |

---

## A marca de água TigerTag

Qualquer superfície que pinte a cor de um material **sem** fotografia de produto leva o logótipo TigerTag por cima, como marca de água.

| Regra | Valor |
|---|---|
| Posição | Canto superior direito do mosaico |
| Opacidade | **1** — sempre, em todas as superfícies |
| Tamanho | Uma **percentagem** do mosaico, nunca um tamanho fixo em píxeis, para que escale com a superfície |
| Variante | **Fundo escuro → o logótipo BRANCO simples. Fundo claro → o logótipo PRETO com contorno.** |

Os dois ficheiros de logótipo **não são variantes tingíveis um do outro** — cada um traz o seu próprio preenchimento incorporado, e a regra diz qual *ficheiro* usar. Nunca aplique um filtro CSS, uma cor de máscara ou uma opacidade para fazer um passar pelo outro: a arte com contorno é um desenho diferente, não o branco invertido.

**Escolher a variante** — calcule a luminância relativa da **primeira cor** da expressão produzida:

```
luminance = (0.299·R + 0.587·G + 0.114·B) / 255   // dark when < 0.5
```

Se extrair essa cor procurando o primeiro `#` hexadecimal numa cadeia CSS, procure **primeiro 8 dígitos**, depois 6, depois 4, depois 3. Caso contrário, um `#RRGGBBAA` corresponde aos seus seis primeiros dígitos, falha a fronteira de palavra que se segue e toda a correspondência se perde — o que se lê como «claro» e põe um logótipo preto numa bobina preta. Descarte o alfa e expanda a forma abreviada antes de calcular.

---

## Plataformas sem CSS

Flutter, SwiftUI, Android ou qualquer renderizador de canvas implementa as mesmas três formas. Os ângulos são sempre medidos à maneira do CSS: **0° aponta para cima, os ângulos aumentam no sentido horário.**

- **Camembert** — um gradiente de varredura centrado no mosaico, a começar às 12 horas, no sentido horário, com paragens duras em cada `k · 360/N` graus. Flutter: `SweepGradient` com `transform: GradientRotation(-pi/2)`. Não o aproxime com fatias de tarte desenhadas como caminhos, a menos que o mosaico seja quadrado — as fronteiras dos setores têm de seguir a caixa. Apenas para **quatro ou mais** cores duras.
- **Divisão suave** — um gradiente linear do canto **superior esquerdo** para o **inferior direito** com as paragens acima: cada cor mantida sólida, uma junta de 20 % misturada em cada fronteira. Usada para **duas ou três** cores duras (bicolor, tricolor). Flutter: `LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight)` com `colors` duplicadas e `stops` `[0, .4, .6, 1]` (N = 2) ou `[0, .2333, .4333, .5667, .7667, 1]` (N = 3).
- **Rampa** — o mesmo eixo, paragens uniformemente espaçadas, sem retenção. Usada para rainbow e para o tipo `gradient` declarado pelo catálogo. Flutter: `Alignment.topLeft → Alignment.bottomRight`.

---

## Alterar a convenção

Esta página é a fonte. Uma alteração aqui é uma alteração a todas as superfícies do TigerSystem: altere-a primeiro, incremente a versão da convenção e depois realinhe as implementações e confronte-as com o renderizador de referência.

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [O chip TigerTag](../concepts/tigertag-chip.md), [O formato `.ttag`](./ttag-format.md), [Visão geral para programadores](./README.md)
