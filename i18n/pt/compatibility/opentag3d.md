---
sourceHash: bbc5e9975e29d36151f72d68e741b2688c5f2a46503d71f8f73aae13a8b74ce6
sourcePath: docs/compatibility/opentag3d.md
---

# OpenTag3D

## O que é

O **[OpenTag3D](https://github.com/GooborgStudios/OpenTag3D)** é um padrão aberto de tag
para bobinas de filamento, criado pela comunidade: um payload NDEF dimensionado para
caber em um NTAG215, sem criptografia, com especificação publicada e lista aberta de apoiadores. Como o
TigerTag, ele existe porque o setor estava se enchendo de um formato proprietário
por marca de impressora, e deixa explícito que uma tag deve funcionar **totalmente
offline**. No espírito, é um primo próximo.

Os dois padrões também definem uma camada online e ambos a chamam de **Web API** —
e é aí que os dois projetos divergem, de propósito e em direções opostas.

## Dois projetos, lado a lado

| Aspecto | TigerTag | OpenTag3D |
|---|---|---|
| O que o chip armazena para chegar à camada online | um **id de produto do catálogo** | uma **"Online Data URL"** — o próprio endereço |
| Quem responde | **um único endpoint, todas as marcas** | um endpoint por tag, hospedado por quem a gravou |
| Papel da camada online | o **canal de atualização**: as correções chegam às bobinas já despachadas | **complementar por projeto** — a especificação afirma que ela "will NEVER be relied upon for printer functionality" |
| Documentos regulatórios | TDS · MSDS · RoHS · REACH · EN71 · contato com alimentos, por produto | não estão no esquema — a Web API traz fotos, preço, links de produto, status de QA, anotações |
| Cópia dos dados da tag online | sim, o perfil completo | sim, `tag_data` — **opcional**, como todos os campos exceto a versão |
| Prova de origem | opcional — um [TigerTag+ Certified](../products/tigertag-plus.md) é assinado e verificado offline | nenhuma, deliberadamente: a especificação rejeita a criptografia por ser "unsuitable for an open source standard" |

## O que decorre de um id em vez de um endereço

Nenhuma das abordagens é acidental, e cada uma traz uma vantagem.

Armazenar o **endereço** mantém a tag autossuficiente: quem a grava
decide onde seus dados ficam e não presta contas a ninguém. O custo é que o
endereço é gravado no chip, dentro do limite de bytes do payload, e um chip
não pode ser redirecionado depois que está nas mãos de um cliente — se esse host mudar ou
parar de responder, o que quebra é o link.

Armazenar um **id** parece colocar um endpoint compartilhado no caminho — e
colocaria, se a referência dependesse de nós para ser liberada. Não depende: o catálogo inteiro
é publicado em um único arquivo, o [`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json), com todos os ids de todos os
filamentos do banco de dados, atualizado ao longo do dia e livre para qualquer pessoa
copiar. Um leitor pode manter o seu próprio espelho e resolver ids sem nenhuma rede.

Assim, o id traz o que o endereço não pode. O chip nunca guarda uma localização, de modo que
continua válido aconteça o que acontecer com qualquer host; um leitor implementa um endpoint e
ele funciona para filamentos que nunca viu; um fabricante corrige dados seis
meses depois de as bobinas saírem da fábrica; e a própria resolução pode ser
totalmente offline, em uma cópia que qualquer pessoa pode guardar.

A [assinatura](../products/tigertag-plus-certified.md) é a outra
consequência. Como um TigerTag+ Certified assina o próprio UID do chip, os dados
podem melhorar online enquanto a bobina continua provando de onde veio — offline,
no celular do próprio cliente.

## Interoperabilidade

Os chips TigerTag **nunca são bloqueados contra gravação**. Se você prefere o OpenTag3D — ou qualquer
outro formato — pode reescrever um chip de fábrica nele. É a mesma
posição que mantemos em relação ao [OpenSpool](./openspool.md), e pelo mesmo motivo: a
bobina pertence a quem a comprou.

---

**◀ Anterior:** [OpenSpool](./openspool.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Formatos de tag de bobina comparados](./tag-formats.md)

**Veja também:** [A Web API](../developers/web-api.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
