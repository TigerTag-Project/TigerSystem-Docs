---
sourceHash: 84d231fb87c4fd823cec2ac0222e3cb1b09833f4aa4542b04b027eaab4a89a20
sourcePath: docs/compatibility/tag-formats.md
---

# Formatos de tag de bobina comparados

Seis formatos NFC/RFID são usados hoje em bobinas de filamento. Esta página os
coloca lado a lado, em 6 de novembro de 2026, com cada número tirado da própria
especificação do formato ou, para Bambu Lab e Creality (sem especificação
oficial), de trabalhos públicos de engenharia reversa. Ela descreve; não
classifica. [OpenSpool](./openspool.md) e [OpenTag3D](./opentag3d.md) têm suas
próprias páginas.

| | **TigerTag** | [OpenPrintTag][opt] | [OpenTag3D][ot3d] | [OpenSpool][osp] | Bambu Lab ([engenharia reversa][bbl]) | Creality CFS ([engenharia reversa][cfs]) |
|---|---|---|---|---|---|---|
| Chip | NTAG213 / NTAG215 | NFC-V, ICODE SLIX2 (320 B) | NTAG215 / NTAG216 | NTAG215 / NTAG216 | MIFARE Classic 1K | MIFARE Classic 1K |
| Bytes para um registro completo | **80** (+ 64 B de assinatura) | 176 (248 B na tag) | 224 | 126 (JSON) | não documentado (chip de 1 KB) | 48 |
| Cores, máx. | 3 | 6 | 4 | 1 | 2 | 1 |
| Bico e mesa mín. / máx. | sim | sim | sim | só bico | bico; um valor de mesa | não |
| Temperatura e tempo de secagem | sim | sim | sim | não | sim | não |
| Quantidade restante no chip | sim | sim | não | não | não | não |
| TD do HueForge | sim | sim | sim | não | não | não |
| Mensagem de texto livre | 28 B | não | não | não | não | não |
| Assinatura verificável offline | ECDSA-P256, chave pública publicada | não | não | não | RSA-2048, chave pública não publicada | não |
| Chip regravável | sim | sim | sim | sim | não (rejeitado depois de modificado) | não |
| Catálogo de produtos aberto offline | **20.348 produtos** | 15.874 embalagens | não | não | não | não |
| Correções do chip depois da fábrica | uma API aberta e padronizada para todas as marcas; os SDKs comparam e corrigem o chip, com a assinatura mantida válida | não | `data_url` opcional para uma API que cada fabricante cria e hospeda; sem formato comum, SDK ou fluxo de atualização | não | não | não |

## O que a tabela mostra

- **O registro completo mais compacto.** O TigerTag armazena um registro de
  impressão completo — temperaturas, secagem, quantidades, cores, TD — em 80
  bytes, contra 176 no OpenPrintTag e 224 no OpenTag3D. Os dois registros
  menores carregam menos: os 48 bytes da Creality não têm nenhuma temperatura,
  os 126 bytes do OpenSpool têm sete campos. É também o único formato aqui que
  cabe em um NTAG213, assinatura incluída.
- **Completo offline, graças ao catálogo.** Um id de produto TigerTag+ é
  resolvido no catálogo público incluído — 20.348 produtos com nome, série, SKU,
  código de barras, foto e indicação de refil — sem rede e sem conta.
- **Atualizações previsíveis.** Uma marca corrige um produto uma vez, na API que
  todas as marcas compartilham; qualquer leitor então corrige os chips já
  vendidos.
- **Não é o que tem mais campos no chip.** O OpenPrintTag carrega mais cores e
  campos que o TigerTag não tem (GTIN, comprimento). O que diferencia o TigerTag
  é a combinação: um registro completo em poucos bytes, uma assinatura
  verificável offline e um catálogo aberto com mais de 20.000 produtos, em um
  NTAG213.

## Fontes

- OpenPrintTag: [lista de campos][opt], tamanho a partir do vetor de teste de referência
  [`01_info.yaml`](https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/tests/encode_decode/01_info.yaml),
  contagem do catálogo a partir do README do [openprinttag-database](https://github.com/OpenPrintTag/openprinttag-database).
- OpenTag3D: [especificação][ot3d] e o seu
  [mapa de memória](https://github.com/GooborgStudios/OpenTag3D/blob/main/_data/spec.json).
- OpenSpool: [formato da tag][osp], tamanho a partir do seu exemplo documentado.
- Bambu Lab: [RFID Tag Guide][bbl] (Bambu Research Group, engenharia reversa).
- Creality CFS: [K2-RFID][cfs] (engenharia reversa).
- TigerTag: a [especificação](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#how-tigertag-compares).

Algum número está errado ou desatualizado? Abra uma issue: esta página é
corrigida, não defendida.

[opt]: https://github.com/OpenPrintTag/openprinttag-specification/blob/HEAD/data/main_fields.yaml
[ot3d]: https://github.com/GooborgStudios/OpenTag3D/blob/main/spec.md
[osp]: https://github.com/spuder/OpenSpool/blob/main/docs/rfid.md
[bbl]: https://github.com/Bambu-Research-Group/RFID-Tag-Guide/blob/main/BambuLabRfid.md
[cfs]: https://github.com/DnG-Crafts/K2-RFID

---

**◀ Anterior:** [OpenTag3D](./opentag3d.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Desenvolvedores](../developers/README.md)

**Veja também:** [Compatibilidade](./README.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
