---
sourceHash: 7dc230b977dd8daee1bee1dcf91401303264ea4addf2fc860ad6ea32b0198db0
sourcePath: docs/products/factory-suite.md
---

# TigerTag Factory e TigerTag Manager (suíte de fábrica)

## Finalidade

O **lado industrial** do TigerSystem — as ferramentas que as fábricas de filamento usam para
colocar o TigerTag dentro dos seus produtos. Ao contrário do ambiente de testes voltado ao usuário, **este é
um software de produção**: foi ele que colocou mais de 2,5 milhões de chips em
circulação.

Duas ferramentas cobrem as duas metades do trabalho:

- **TigerTag Manager** — gerencia o **banco de dados de filamentos** da marca: produtos,
 materiais, cores, parâmetros.
- **TigerTag Factory** — **grava em massa os dados em cada bobina produzida**,
 na velocidade da linha: **cerca de 1 segundo por chip** — milhares de bobinas por dia,
 com um clique.

## O suporte — dois chips, é só descolar e colar

|| |
|---|---|
| <img src="../assets/carrier-bare.png" alt="O suporte TigerTag sem os chips de marca — duas antenas NFC independentes, uma em cada ponta" /> | <img src="../assets/carrier-branded.png" alt="O suporte TigerTag como é enviado, com os dois chips de marca" /> |

*Os dois chips NFC independentes são bem visíveis — um em cada ponta. As pontas
dobram sobre o tubo de papelão para que a bobina seja lida de qualquer lado; o meio
é fixado com adesivo industrial 3M (468MP / 200MP). O operador descola e
cola — nada mais muda na linha. O design do suporte é público e
pode ser impresso em casa.*

<img src="../assets/refill-with-tigertag-orange.png" width="340" alt="O suporte aplicado em um refil de filamento" />

## Prova de origem

Os chips gravados na linha de produção carregam a **assinatura de fábrica** — a
autenticação que **prova a origem do produto**. É a camada por trás das restaurações de estado de fábrica do
[TigerTag+](./tigertag-plus.md) e a âncora de confiança
das marcas: um chip assinado saiu comprovadamente da fábrica de verdade.

## Disponibilidade

**Não é público.** Estas ferramentas são reservadas a fabricantes terceiros que
implementam a tecnologia RFID/NFC TigerTag nos seus produtos. Uma linha de produção de
filamento pode estar funcionando com o TigerTag em **apenas
5 dias** — veja
[Para fabricantes de filamento](../vision/for-filament-manufacturers.md) e
entre em contato pela
[organização no GitHub](https://github.com/TigerTag-Project).

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [Para fabricantes de filamento](../vision/for-filament-manufacturers.md), [TigerTag+](./tigertag-plus.md), [Produtos](./README.md)
