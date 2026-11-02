---
sourceHash: 4534952990769306c8ebf5fcf1d9c93c9ddca86ce463b792d757f36bdda46043
sourcePath: docs/developers/web-api.md
---

# A Web API

## Para que serve

Um TigerTag carrega tudo de que uma impressora precisa, **no chip, offline**. A
Web API existe para o que um chip não consegue guardar e para o que muda depois de
gravado: as fichas técnicas, os documentos de segurança, a foto, o vídeo, as
correções do fabricante.

É **um único endpoint HTTP, para todos os filamentos, de todas as marcas** — sem chave, sem
conta, sem cadastro, sem acordo de limite de uso a negociar. Entra um id de produto,
volta o produto.

```
https://api.tigertag.io/api:tigertag/product/get?uid=0&product_id=<ID>&lang=en
```

O parâmetro `lang` seleciona o idioma dos campos de texto.

## O que volta

Quatro produtos reais, de quatro marcas diferentes, por esse único endereço:

| `product_id` | Produto | Documentos retornados |
|---|---|---|
| `10` | Polymaker PolyTerra™ PLA | MSDS · TDS · dicas · vídeo |
| `30` | R3D PLA High Speed | alimentos · MSDS · REACH · RoHS · TDS · vídeo |
| `40` | Sunlu PLA Matte | MSDS · REACH · RoHS · TDS · vídeo |
| `50` | eSun PLA+ | alimentos · MSDS · REACH · RoHS · TDS · dicas · vídeo |

Cada resposta traz a identidade (marca, série, nome, SKU, EAN, cor), o
perfil de impressão completo (bico, mesa, secador, ventoinha, diâmetro, peso, shore,
distância de transmissão), a foto do produto e o bloco `links` acima —
`tds`, `msds`, `rohs`, `reach`, `en71`, `food`, `tips`, `youtube`.

## Por que ela mantém um TigerTag+ atualizado

Um [TigerTag+](../products/tigertag-plus.md) armazena um **id de produto do catálogo**,
não um endereço. O id nunca expira e nunca muda de lugar, então um fabricante pode
corrigir uma temperatura ou anexar uma ficha técnica seis meses depois de as bobinas
serem despachadas, e todo leitor vê o novo valor na leitura seguinte — sem
regravar nada no chip, e sem que o chip jamais tenha dependido
da rede para imprimir.

É também por isso que um único endpoint importa: um endereço atende todas as marcas, de modo que
um leitor o implementa uma vez e ele funciona para filamentos que nunca viu.

## Também offline — o catálogo inteiro é um arquivo

Nada do que foi dito acima exige que o endpoint esteja acessível, nem mesmo que exista.

A referência completa é publicada como um único arquivo,
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json) — **todo id de todo filamento do banco de dados**,
atualizado ao longo do dia, cerca de 12 MB, sem chave e sem conta. Qualquer pessoa pode
baixá-lo, espelhá-lo, embuti-lo em um aplicativo, colocá-lo em um NAS de oficina ou
levá-lo em um pen drive USB.

Um leitor que tenha essa cópia resolve o id de um TigerTag+ **sem nenhuma rede**.
É isso que torna o id mais seguro que um endereço: um endereço precisa que o seu host
responda, uma referência compartilhada só precisa ter sido copiada uma vez — e pode ser
copiada em qualquer lugar do planeta, por qualquer pessoa, a qualquer momento.

A Web API continua sendo o caminho mais atual, e o que traz as fichas técnicas e
a foto. O arquivo é o piso por baixo dela.

## O que ela nunca faz

A Web API **não pode fazer um chip funcionar**, porque um chip já funciona sem
ela. Leia um TigerTag em modo avião e você obtém marca, material, cor,
diâmetro, peso e temperaturas — a impressão inteira. A Web API acrescenta papéis e
imagens em volta disso, e correções por cima.

---

**◀ Anterior:** [API da conta e integração de terceiros](./account-api.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Mapa dos repositórios](./repositories.md)

**Veja também:** [TigerTag+](../products/tigertag-plus.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
