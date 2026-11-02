---
sourceHash: 7dc230b977dd8daee1bee1dcf91401303264ea4addf2fc860ad6ea32b0198db0
sourcePath: docs/products/factory-suite.md
---

# TigerTag Factory e TigerTag Manager (suite de fábrica)

## Finalidade

O **lado industrial** do TigerSystem — as ferramentas que as fábricas de filamento usam para colocar o TigerTag nos seus produtos. Ao contrário da sandbox destinada ao utilizador, **este é software de produção**: foi ele que colocou mais de 2,5 milhões de chips no terreno.

Duas ferramentas cobrem as duas metades do trabalho:

- **TigerTag Manager** — gere a **base de dados de filamentos** da marca: produtos, materiais, cores, parâmetros.
- **TigerTag Factory** — **escreve em massa os dados em cada bobina produzida**, ao ritmo da linha: **cerca de 1 segundo por chip** — milhares de bobinas por dia, com um clique.

## O suporte — dois chips, descolar e colar

|| |
|---|---|
| <img src="../assets/carrier-bare.png" alt="O suporte TigerTag sem marca — duas antenas NFC independentes, uma em cada extremidade" /> | <img src="../assets/carrier-branded.png" alt="O suporte TigerTag tal como é fornecido, com os dois chips de marca" /> |

*Os dois chips NFC independentes são bem visíveis — um em cada extremidade. As extremidades dobram-se sobre o núcleo de cartão para que a bobina seja lida de qualquer lado; o meio fixa-se com adesivo industrial 3M (468MP / 200MP). O operador descola e cola — nada mais muda na linha. O desenho do suporte é público e pode ser impresso em casa.*

<img src="../assets/refill-with-tigertag-orange.png" width="340" alt="O suporte aplicado numa recarga de filamento" />

## Prova de origem

Os chips escritos na linha de produção transportam a **assinatura de fábrica** — a autenticação que **prova a origem do produto**. É a camada por trás das restaurações do estado de fábrica do [TigerTag+](./tigertag-plus.md) e a âncora de confiança das marcas: um chip assinado saiu, comprovadamente, da fábrica verdadeira.

## Disponibilidade

**Não é público.** Estas ferramentas estão reservadas aos fabricantes terceiros que implementam a tecnologia RFID/NFC TigerTag nos seus produtos. Uma linha de produção de filamento pode estar a funcionar com o TigerTag em **apenas 5 dias** — consulte [Para fabricantes de filamento](../vision/for-filament-manufacturers.md) e entre em contacto através da [organização no GitHub](https://github.com/TigerTag-Project).

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [Para fabricantes de filamento](../vision/for-filament-manufacturers.md), [TigerTag+](./tigertag-plus.md), [Produtos](./README.md)
