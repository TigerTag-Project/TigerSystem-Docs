---
sourceHash: 4534952990769306c8ebf5fcf1d9c93c9ddca86ce463b792d757f36bdda46043
sourcePath: docs/developers/web-api.md
---

# A Web API

## Para que serve

Um TigerTag contém tudo o que uma impressora precisa, **no chip, offline**. A Web API existe para o que um chip não consegue guardar e para o que muda depois de ter sido escrito: as fichas técnicas, os documentos de segurança, a fotografia, o vídeo, as correções do fabricante.

É **um único endpoint HTTP, para todos os filamentos, de todas as marcas** — sem chave, sem conta, sem registo, sem acordo de tarifas a negociar. Entra um id de produto, sai o produto.

```
https://api.tigertag.io/api:tigertag/product/get?uid=0&product_id=<ID>&lang=en
```

O parâmetro `lang` seleciona o idioma dos campos de texto.

## O que devolve

Quatro produtos reais, de quatro marcas diferentes, através desse único endereço:

| `product_id` | Produto | Documentos devolvidos |
|---|---|---|
| `10` | Polymaker PolyTerra™ PLA | MSDS · TDS · dicas · vídeo |
| `30` | R3D PLA High Speed | alimentar · MSDS · REACH · RoHS · TDS · vídeo |
| `40` | Sunlu PLA Matte | MSDS · REACH · RoHS · TDS · vídeo |
| `50` | eSun PLA+ | alimentar · MSDS · REACH · RoHS · TDS · dicas · vídeo |

Cada resposta traz a identidade (marca, série, nome, SKU, EAN, cor), o perfil de impressão completo (bocal, mesa, secador, ventoinha, diâmetro, peso, shore, transmission distance), a fotografia do produto e o bloco `links` acima — `tds`, `msds`, `rohs`, `reach`, `en71`, `food`, `tips`, `youtube`.

## Porque mantém um TigerTag+ atualizado

Um [TigerTag+](../products/tigertag-plus.md) guarda um **id de produto do catálogo**, não um endereço. O id nunca expira e nunca se move, por isso um fabricante pode corrigir uma temperatura ou anexar uma ficha técnica seis meses depois de as bobinas terem sido expedidas, e todos os leitores veem o novo valor na leitura seguinte — sem reescrever nada no chip e sem que o chip alguma vez tenha dependido da rede para imprimir.

É também por isso que um único endpoint importa: um só endereço serve todas as marcas, pelo que um leitor o implementa uma vez e funciona com filamento que nunca viu.

## Também offline — o catálogo inteiro é um ficheiro

Nada do que precede exige que o endpoint esteja acessível, ou sequer que exista.

A referência completa é publicada num único ficheiro, o [`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json) — **todos os ids de todos os filamentos da base de dados**, atualizado ao longo do dia, com cerca de 12 MB, sem chave e sem conta. Qualquer pessoa o pode descarregar, espelhar, incluir numa aplicação, pôr num NAS de oficina ou levar numa unidade USB.

Um leitor que tenha essa cópia resolve um id TigerTag+ **sem qualquer rede**. É isso que torna o id mais seguro do que um endereço: um endereço precisa de que o seu alojamento responda, uma referência partilhada só precisa de ter sido copiada uma vez — e pode ser copiada para qualquer lugar do planeta, por qualquer pessoa, a qualquer momento.

A Web API continua a ser o caminho mais fresco e o que transporta as fichas técnicas e a fotografia. O ficheiro é o chão por baixo dela.

## O que nunca faz

A Web API **não consegue fazer um chip funcionar**, porque um chip já funciona sem ela. Leia um TigerTag em modo de avião e obtém a marca, o material, a cor, o diâmetro, o peso e as temperaturas — a impressão inteira. A Web API acrescenta papel e imagens à volta disso, e correções por cima.

---

**◀ Anterior:** [API de conta e integração de terceiros](./account-api.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Mapa dos repositórios](./repositories.md)

**Ver também:** [TigerTag+](../products/tigertag-plus.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
