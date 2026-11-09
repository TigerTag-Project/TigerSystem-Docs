---
sourceHash: bbc5e9975e29d36151f72d68e741b2688c5f2a46503d71f8f73aae13a8b74ce6
sourcePath: docs/compatibility/opentag3d.md
---

# OpenTag3D

## O que é

O **[OpenTag3D](https://github.com/GooborgStudios/OpenTag3D)** é uma norma aberta de etiquetas para bobinas de filamento, conduzida pela comunidade: um payload NDEF dimensionado para caber num NTAG215, sem cifragem, com especificação publicada e lista de apoiantes aberta. Tal como o TigerTag, existe porque a indústria se enchia de um formato proprietário por cada marca de impressoras, e é explícito quanto a uma etiqueta dever funcionar **totalmente offline**. No espírito, é um primo próximo.

As duas normas definem também uma camada online e ambas lhe chamam **Web API** — e é aí que os dois desenhos divergem, de propósito e em sentidos opostos.

## Dois desenhos, lado a lado

| Aspeto | TigerTag | OpenTag3D |
|---|---|---|
| O que o chip guarda para chegar à camada online | um **id de produto do catálogo** | um **«Online Data URL»** — o próprio endereço |
| Quem responde | **um só endpoint, todas as marcas** | um endpoint por etiqueta, alojado por quem a escreveu |
| Papel da camada online | o **canal de atualização**: as correções chegam a bobinas já expedidas | **suplementar por conceção** — a especificação afirma que «will NEVER be relied upon for printer functionality» |
| Documentos regulamentares | TDS · MSDS · RoHS · REACH · EN71 · contacto alimentar, por produto | não constam do esquema — a Web API transporta fotografias, preço, ligações do produto, estado de controlo de qualidade, notas |
| Cópia dos dados da etiqueta online | sim, o perfil completo | sim, `tag_data` — **opcional**, como todos os campos exceto a versão |
| Prova de origem | opcional — um [TigerTag+ Certified](../products/tigertag-plus.md) é assinado e verificado offline | nenhuma, deliberadamente: a especificação rejeita a cifragem por ser «unsuitable for an open source standard» |

## O que resulta de um id em vez de um endereço

Nenhuma das abordagens é um acaso e cada uma compra alguma coisa.

Guardar o **endereço** mantém a etiqueta autossuficiente: quem a escreve decide onde vivem os seus dados e não responde perante ninguém. O custo é que o endereço fica escrito no chip, dentro do orçamento de bytes do payload, e um chip não pode ser reapontado depois de estar nas mãos de um cliente — se esse alojamento mudar ou deixar de responder, é a ligação que se parte.

Guardar um **id** parece pôr um endpoint partilhado no caminho — e poria, se a referência fosse nossa para a reter. Não é: todo o catálogo é publicado num único ficheiro, o [`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json), com todos os ids de todos os filamentos da base de dados, atualizado ao longo do dia e livre para qualquer pessoa copiar. Um leitor pode ter o seu próprio espelho e resolver ids sem qualquer rede.

Assim, o id compra o que o endereço não consegue. O chip nunca guarda uma localização, pelo que continua válido aconteça o que acontecer a qualquer alojamento; um leitor implementa um único endpoint e este funciona para filamento que nunca viu; um fabricante corrige dados seis meses depois de as bobinas terem saído da fábrica; e a própria resolução pode ser totalmente offline, numa cópia que qualquer pessoa pode guardar.

A [assinatura](../products/tigertag-plus-certified.md) é a outra consequência. Como um TigerTag+ Certified assina o UID do próprio chip, os dados podem melhorar online enquanto a bobina continua a provar de onde vem — offline, no telemóvel do próprio cliente.

## Interoperabilidade

Os chips TigerTag **nunca ficam bloqueados contra escrita**. Se preferir o OpenTag3D — ou qualquer outro formato — é livre de reescrever um chip de fábrica para esse formato. É a mesma posição que mantemos para o [OpenSpool](./openspool.md), e pela mesma razão: a bobina pertence a quem a comprou.

---

**◀ Anterior:** [OpenSpool](./openspool.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Formatos de etiqueta de bobina comparados](./tag-formats.md)

**Ver também:** [A Web API](../developers/web-api.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
