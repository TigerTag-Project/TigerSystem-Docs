---
sourceHash: 177607b1f797be9c2f0be3d7925a65850116275b036fcba3e65a77cd852e9af0
sourcePath: docs/developers/material-swatch.md
---

# O swatch do material — a convenção oficial

A cor de um material é armazenada como dado, não como imagem. O **swatch** é esse
dado desenhado: a forma colorida que representa o material em uma lista, em um
cartão, em um slot de rack, ao lado do nome. Esta página é a **convenção oficial
do TigerSystem** para produzi-lo, de modo que o mesmo material mostre o mesmo swatch
em todo lugar — no Tiger Studio, no aplicativo do celular, na web, na sua própria
integração.

**"Material", e não "bobina", é uma escolha deliberada.** Um TigerTag identifica uma bobina
de filamento, mas também um acessório, uma peça de reposição, uma resina — e os tipos de produto que o
protocolo ainda vai ganhar. A convenção é escrita em torno de `id_type` em
geral: nada abaixo lê o tipo do produto, então um swatch é produzido do mesmo
jeito seja qual for o material.

Ela é normativa. Um filamento bicolor que mostra uma divisão suave em um aplicativo e
uma borda dura ou uma rampa completa em outro é um bug de quem se desviou desta página
— não uma questão de gosto. Se você não consegue reproduzir uma regra exatamente (uma plataforma
sem gradiente cônico, por exemplo), implemente o equivalente mais próximo descrito em
[Plataformas sem CSS](#plataformas-sem-css) e diga isso; não invente uma imagem
diferente.

- **Versão da convenção:** 1.2 — o bicolor é uma **divisão suave a 135°** (cores sólidas, transição de 20 %
 mesclada) e um **aspecto Tricolor é uma varredura cônica** (a menos que também seja Rainbow) (a 1.1 desenhava o bicolor como uma divisão diagonal dura e o tricolor como um camembert; a 1.0
 dividia o bicolor na vertical)
- **Renderizador de referência:** [`material-swatch-playground.html`](./material-swatch-playground.html) —
 abra em qualquer navegador, sem servidor, sem dependências. Todos os casos, todas as formas de caixa,
 seletores de cor ao vivo e o CSS exato que ele produz.

---

## Quatro formas, e somente quatro

| Forma | Quando | Geometria |
|---|---|---|
| **Divisão suave** | **Duas ou três** cores de borda dura — bicolor, ou três cores sem um aspecto Tricolor | N faixas iguais ao longo do eixo de **135°**, primeira cor no **canto superior esquerdo**; cada cor permanece **sólida**, e apenas uma transição de **20 %** da diagonal (`SPLIT_BLEND`) centrada em cada limite é mesclada |
| **Rampa** | Rainbow, e o tipo `gradient` declarado pelo catálogo | Uma rampa linear suave a **135°**, com paradas igualmente espaçadas — apontando para o canto inferior direito, de modo que a primeira cor fique no canto superior esquerdo |
| **Camembert** (pizza) | **Quatro ou mais** cores de borda dura — qualquer lista de N ≥ 4 | N setores cônicos iguais, a primeira cor começando às **12 horas**, girando no **sentido horário** |
| **Varredura cônica** | Um aspecto **Tricolor** (id 24) que não seja também Rainbow, e o `conic_gradient` declarado pelo catálogo | Um gradiente cônico suave a partir das **12 horas**, no sentido horário, fechando na primeira cor — a roda de cores |

Dito com clareza: **duas ou três cores duras formam uma divisão suave, quatro ou mais formam um
camembert, cores suaves formam uma rampa, e um aspecto Tricolor gira numa varredura
cônica** — e há exatamente um ângulo em
todo o sistema, 135°, compartilhado pela divisão suave e pela rampa.

**Bicolor e tricolor são uma divisão suave — o eixo da rampa, a nitidez da divisão.**
Mesmo eixo e mesma ordem de uma rampa (primeira cor no canto superior esquerdo), mas cada cor se mantém
sólida ao longo da sua faixa e apenas uma transição de **20 %** é mesclada em cada limite. Com
`seg = 100 / N` e `h = SPLIT_BLEND / 2 = 10`, a cor *i* se mantém de
`i·seg + h` (0 para a primeira) até `(i+1)·seg − h` (100 para a última).
Implemente uma única vez, na função que divide uma lista de cores (N ≤ 3 →
divisão suave, N ≥ 4 → pizza), para que todo chamador a receba; nunca a desenhe espelhada.

Por que uma divisão suave para duas ou três cores: uma borda dura ainda era lida como dois ou
três objetos separados — em uma miniatura, e ainda mais na moldura de cor
em volta da foto de um produto, em que a foto escondia o centro e deixava faixas
coloridas desconexas. Uma rampa completa resolvia isso, mas desbotava as cores, de modo que nenhuma
das duas era lida como a cor verdadeira. A divisão suave mantém cada cor sólida e mescla apenas
a transição: um material multitom, cores verdadeiras, em qualquer formato de caixa. Os 20 % foram
escolhidos a olho em todas as superfícies (uma transição mais larga deixa à cor do meio de um tricolor
quase nenhuma faixa sólida). Por que uma pizza a partir de quatro
cores: quatro ou mais faixas ao longo de uma diagonal ficam finas demais para ler, enquanto os limites
dos setores continuam angulares e reconhecíveis — medidos a partir do centro da caixa, de modo que N
setores permanecem legíveis seja qual for a proporção da caixa. Por que 135°: é o único
ângulo do sistema, compartilhado pela divisão suave e por toda rampa.
Por que uma varredura cônica para um aspecto Tricolor: três faixas em uma diagonal deixam a
cor do meio como uma fatia fina; uma roda de cores dá às três o mesmo peso e
é lida de imediato como "três cores", em qualquer tamanho.

---

## De onde vêm os dados

Duas camadas alimentam o renderizador, e elas não são a mesma coisa.

### O chip — no máximo três cores

Um TigerTag carrega **três slots de cor e um aspecto**. Nada além disso: não
há tipo de gradiente no chip, e nunca houve.

| Campo | Tipo | Significado |
|---|---|---|
| `color_r` / `color_g` / `color_b` | `int 0-255` | Slot 1 |
| `color_r2` / `color_g2` / `color_b2` | `int 0-255` | Slot 2 |
| `color_r3` / `color_g3` / `color_b3` | `int 0-255` | Slot 3 |
| `color_a` | `int 0-255` | Alfa — **ignorado na renderização**; nunca misture a cor de um material |
| `id_aspect1` / `id_aspect2` | `int` | Qualquer um dos slots pode carregar o aspecto de coloração |

Três ids de aspecto mudam a forma (a tabela de referência deles também traz um
`color_count` oficial):

| id | rótulo | `color_count` | Forma |
|---|---|---|---|
| `252` | Bicolor | 2 | **Divisão suave**, 135° |
| `24` | Tricolor | 3 | **Varredura cônica** |
| `145` | Rainbow | 3 | Rampa, 135° |

Todos os outros aspectos (`Silk`, `Matt`, `Glitter`, …) têm `color_count` ≤ 1 e não
afetam a forma. **Compare pelo id, não pelo rótulo** — os rótulos são textos de exibição
e podem ser traduzidos.

> **Nunca conte os slots para adivinhar quantas cores existem.** Um documento
> de chip sempre carrega os três slots: os componentes ausentes são armazenados como `0`,
> então os slots 2 e 3 são lidos como preto puro em um material de uma cor. **O número de cores
> vem do aspecto, nunca dos slots.**

### O catálogo — uma descrição mais rica, somente na nuvem

Um produto do catálogo oficial pode descrever a sua cor com mais precisão do que
um chip. Estes dois campos existem **somente** nos dados de nuvem/produto — nunca
são gravados em um chip:

| Campo | Tipo | Significado |
|---|---|---|
| `online_color_list` | `string[]` | Cores ordenadas, `RRGGBB` ou `RRGGBBAA`, `#` opcional. A ordem importa: o índice 0 é o primeiro setor / a primeira parada. |
| `online_color_type` | `string` | Instrução de renderização: `mono`, `multi`, `gradient`, `conic_gradient`. Qualquer outro valor, ou ausente, é tratado como `multi`. |

Quando as duas camadas estão presentes, **o catálogo prevalece** — ele é a descrição
mais precisa do mesmo produto.

---

## A escada de decisão

Avalie **nesta ordem; vale a primeira que corresponder**. A ordem codifica uma prioridade: o
catálogo tem precedência sobre o chip, um tipo de cor explícito tem precedência sobre um palpite, e o
aspecto só fala quando não há lista de cores online.

Seja `LIST` = `online_color_list` após a [normalização](#normalização), `TYPE` =
`online_color_type`, `SLOTS` = os slots do chip não nulos.

| # | Condição | Resultado |
|---|---|---|
| 1 | `LIST ≥ 2` e `TYPE == "conic_gradient"` | Varredura cônica suave, fechando na primeira cor |
| 2 | `LIST ≥ 2` e `TYPE == "gradient"` | Rampa — mesmo com duas ou três cores; o catálogo pediu uma rampa suave, então ela não vira divisão suave |
| 3 | `LIST ≥ 3`, aspecto **Tricolor**, não **Rainbow** | **Varredura cônica** de `LIST` |
| 3b | `LIST ≥ 2` | **Divisão suave** de `LIST` com 2 ou 3 cores, **camembert** de `LIST.length` setores com 4 ou mais |
| 4 | `LIST == 1` | Cor sólida — **tem precedência sobre a cor do chip** |
| 5 | aspecto **Rainbow** *e* **Tricolor** | Rampa, 3 paradas |
| 6 | aspecto **Rainbow** *e* **Bicolor** | Rampa, 2 paradas |
| 7 | aspecto **Rainbow** | Rampa sobre `SLOTS`; 1 slot → sólida; 0 slots → o padrão de 6 cores |
| 8 | aspecto **Tricolor** | **Varredura cônica** sobre `SLOTS` (slot 3 ausente → uma divisão suave de 2 cores sobre os slots 1 e 2, sem repetir o slot 1) |
| 9 | aspecto **Bicolor** | **Divisão suave**, 135°, sobre os slots 1 e 2 |
| 10 | caso contrário | Slot 1 sólido; nada → `#1c2030` |

Padrões quando um aspecto não traz nenhuma cor utilizável:

| Caso | Padrões |
|---|---|
| Rainbow, sem cores | `#ff0000 #ff8800 #ffff00 #00cc00 #0000ff #8b00ff` |
| Rainbow + Tricolor | `#ff4d4d #ffd93d #4da3ff` |
| Rainbow + Bicolor | `#ff7a00 #8a2be2` |
| Tricolor | `#cccccc #888888` (slot 3 ausente → divisão suave de 2 cores, o slot 1 não é repetido) |
| Bicolor | `#cccccc #ffffff` |
| Nada | `#1c2030` |

---

## Normalização

Aplicada a cada entrada de `online_color_list` antes de a escada ser avaliada:

1. Remova os espaços e o `#` inicial.
2. Se tiver 8 caracteres (`RRGGBBAA`), **mantenha os 6 primeiros** — o alfa é descartado, nunca
 mesclado.
3. Aceite apenas `^[0-9a-fA-F]{6}$`. **Qualquer outra coisa é removida da lista**,
 não substituída por um padrão — uma entrada malformada nunca deve virar preto
 silenciosamente.
4. Recoloque o `#` na saída.

A remoção acontece *antes* de a escada ser executada, então `["ff0000", "oops"]` é uma
lista de **uma cor** (regra 4), não uma pizza de dois setores.

Os slots do chip são convertidos em `#` + dois dígitos hexadecimais por componente, somente quando os três
componentes são números.

---

## As expressões exatas

Com `c1…cN` as cores normalizadas, `step = 360 / N`, `seg = 100 / N` e
`SPLIT_BLEND = 20`:

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

Toda implementação deve reproduzi-los exatamente.

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

## A marca d'água TigerTag

Toda superfície que pinta a cor de um material **sem** foto de produto leva o
logotipo TigerTag por cima, como marca d'água.

| Regra | Valor |
|---|---|
| Posição | Canto superior direito do bloco |
| Opacidade | **1** — sempre, em todas as superfícies |
| Tamanho | Uma **porcentagem** do bloco, nunca um tamanho fixo em pixels, para que escale com a superfície |
| Variante | **Fundo escuro → o logotipo BRANCO liso. Fundo claro → o logotipo PRETO com contorno.** |

Os dois arquivos de logotipo **não são variantes tingíveis um do outro** — cada um vem
com o seu próprio preenchimento embutido, e a regra é qual *arquivo* usar. Nunca aplique
um filtro CSS, uma cor de máscara ou uma opacidade para que um substitua o outro: a
arte com contorno é um desenho diferente, não o branco invertido.

**Escolhendo a variante** — pegue a luminância relativa da **primeira cor** da
expressão produzida:

```
luminance = (0.299·R + 0.587·G + 0.114·B) / 255   // dark when < 0.5
```

Se você extrai essa cor encontrando o primeiro hexadecimal com `#` em uma string CSS, procure
**8 dígitos primeiro**, depois 6, depois 4, depois 3. Caso contrário, um `#RRGGBBAA` corresponde aos seus
seis primeiros dígitos, falha na fronteira de palavra que vem depois e toda a correspondência
se perde — o que é lido como "claro" e coloca um logotipo preto em uma bobina preta. Descarte o
alfa e expanda a forma abreviada antes de calcular.

---

## Plataformas sem CSS

Flutter, SwiftUI, Android ou qualquer renderizador de canvas implementa as mesmas três formas.
Os ângulos são sempre medidos à maneira do CSS: **0° aponta para cima, os ângulos aumentam
no sentido horário.**

- **Camembert** — um gradiente de varredura centrado no bloco, começando às 12 horas,
 no sentido horário, com paradas duras a cada `k · 360/N` graus. Flutter:
 `SweepGradient` com `transform: GradientRotation(-pi/2)`. Não o aproxime
 com fatias de pizza desenhadas como caminhos, a menos que o bloco seja quadrado — os limites
 dos setores devem acompanhar a caixa. Somente para **quatro ou mais** cores duras.
- **Divisão suave** — um gradiente linear do canto **superior esquerdo** ao
 **inferior direito** com as paradas acima: cada cor mantida sólida, uma transição de 20 %
 mesclada em cada limite. Usada para **duas ou três** cores duras (bicolor,
 tricolor). Flutter: `LinearGradient(begin: Alignment.topLeft, end:
 Alignment.bottomRight)` com `colors` duplicado e `stops` `[0, .4, .6, 1]`
 (N = 2) ou `[0, .2333, .4333, .5667, .7667, 1]` (N = 3).
- **Rampa** — o mesmo eixo, paradas igualmente espaçadas, sem manter a cor. Usada para rainbow e
 para o tipo `gradient` declarado pelo catálogo. Flutter: `Alignment.topLeft →
 Alignment.bottomRight`.

---

## Alterando a convenção

Esta página é a fonte. Uma mudança aqui é uma mudança em toda superfície do TigerSystem:
altere-a primeiro, aumente a versão da convenção e depois realinhe as implementações
e confira-as com o renderizador de referência.

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [O chip TigerTag](../concepts/tigertag-chip.md), [O formato `.ttag`](./ttag-format.md), [Visão geral para desenvolvedores](./README.md)
