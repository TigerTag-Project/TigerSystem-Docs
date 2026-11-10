---
sourceHash: 2aa30864cfb206820e96297f6e331f24ff62e73727f540f12585f2c57cd43347
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## O que é

O **OpenSpool** é um padrão aberto de tags da comunidade: dados de filamento em **NDEF JSON**
em tags NFC Tipo 2 — sem autenticação, sem criptografia, totalmente aberto. No espírito, é
um primo próximo do TigerTag.

## TigerTag vs OpenSpool

| Aspecto | TigerTag | OpenSpool |
|---|---|---|
| Suporte | NTAG, payload NDEF de 144 bytes | NFC Tipo 2, NDEF JSON |
| Modelo de dados | IDs compactos resolvidos em um banco de dados de referência compartilhado | JSON autodescritivo |
| Cloud | Conta opcional, inventário, compartilhamento ([conta TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Nenhuma (padrão apenas de tag) |
| Autenticidade | Opcional — um [TigerTag+](../products/tigertag-plus.md) assinado por um fabricante certificado é um **TigerTag+ Certified**, verificável offline | Nenhuma |
| Abertura | Especificação aberta + SDKs | Especificação aberta |

## Migrar um chip do TigerTag para o OpenSpool

Os chips TigerTag **nunca são bloqueados para gravação** — o TigerTag é apenas o protocolo
base com que as bobinas saem de fábrica. Se você prefere o OpenSpool (ou qualquer formato
personalizado), pode regravar os dados de um chip de fábrica nesse formato.

## Interoperabilidade — especificação documentada, conversão para TigerData em andamento

Uma ficha de decodificação somente leitura das tags OpenSpool é mantida em
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
como parte da leitura RFID multifabricante planejada no Tiger Studio.

### Mapeamento de importação: OpenSpool → TigerData

Este é o mapeamento que o leitor OpenSpool do Tiger Studio vai aplicar. Ler um
tag OpenSpool cria um **TigerData**: um registro sem chip, com um novo
`TigerData_<id>`. O chip OpenSpool não é um chip TigerTag, e um tag OpenSpool
não indica nenhum produto do catálogo, então o registro nunca é um TigerData+.
Gravado depois em um chip TigerTag, ele vira um TigerTag, como qualquer
TigerData.

Um tag só é OpenSpool se o seu JSON trouxer `"protocol": "openspool"`. Os
seus campos são então resolvidos com as [tabelas de referência](../concepts/universal-filament-identity.md):

| OpenSpool | TigerData | Regra |
|---|---|---|
| `brand` | `id_brand` | buscada pelo nome em `id_brand.json`, sem diferenciar maiúsculas; ausente ou desconhecida → `Generic` (65535) |
| `type`, `subtype` | `id_material` | buscado em `id_material.json`, sem diferenciar maiúsculas, nesta ordem: `type-subtype` (`PLA` + `CF` → `PLA-CF`), `type subtype` (`PLA` + `Silk` → `PLA Silk`) e depois só `type`. `NYLON` é lido como `PA` (59328). Um tipo ausente ou desconhecido é perguntado |
| `subtype`, se o material não o usou | `id_aspect1` | o aspecto com esse nome em `id_aspect.json` (`Matte` é lido como `Matt`, 247); senão, `Basic` (104); um subtipo que não corresponde a nada fica guardado na `message` do registro |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | copiados; o OpenSpool traz uma única cor |
| `diameter` | `id_diameter` | `1.75` → 56, `2.85` → 221; ausente → 1,75, o padrão do OpenSpool; qualquer outro valor é perguntado |
| `weight` | `measure`, `id_measure_unit` | em gramas, unidade `g` (21); ausente → 1000, o padrão do OpenSpool. O carretel começa cheio: `weight_available` = `weight` |
| `min_temp`, `max_temp` | bico mín. e máx. (`data2`, `data3`) | copiados; quando ambos são `0` (ausentes), os valores recomendados do material. `max_temp` abaixo de `min_temp`: o tag é recusado, como no OpenRFID |
| — | temperatura e tempo de secagem, mesa mín. e máx. (`data4`–`data7`) | os valores `recommended` do material em `id_material.json` |
| — | `id_type` | Filament (142) |
| — | `id_aspect2` | None (255) |
| — | `id_product` | `0xFFFFFFFF`: nenhum produto do catálogo |
| — | `timestamp` | a hora da importação |

Duas regras diferem de propósito do leitor do OpenRFID:

- **Os valores de mesa e de secagem vêm do banco de referência do TigerTag**, não
 da tabela de cinco linhas do OpenRFID (PLA, PETG, ABS, TPU, NYLON, e zero para
 qualquer outro tipo). São os que o Tiger Studio preenche quando o mesmo
 material é escolhido à mão, e existem para os 113 materiais.
- **O material nunca é adivinhado.** O OpenRFID lê um tipo ausente como PLA. Um
 material errado dá temperaturas erradas, então a importação pergunta.

---

**◀ Anterior:** [Klipper](./klipper.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Desenvolvedores](../developers/README.md)
