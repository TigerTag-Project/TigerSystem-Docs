---
sourceHash: 2aa30864cfb206820e96297f6e331f24ff62e73727f540f12585f2c57cd43347
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## O que é

O **OpenSpool** é um padrão comunitário aberto de etiquetas: os dados do filamento como **JSON NDEF** em etiquetas NFC Type 2 — sem autenticação, sem criptografia, totalmente aberto. No espírito, é um primo próximo do TigerTag.

## TigerTag vs OpenSpool

| Aspeto | TigerTag | OpenSpool |
|---|---|---|
| Suporte | NTAG, payload NDEF de 144 bytes | NFC Type 2, JSON NDEF |
| Modelo de dados | IDs compactos resolvidos numa base de dados de referência partilhada | JSON autodescritivo |
| Nuvem | Conta opcional, inventário, partilha ([conta TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Nenhuma (padrão apenas de etiqueta) |
| Autenticidade | Opcional — um [TigerTag+](../products/tigertag-plus.md) assinado por um fabricante certificado é um **TigerTag+ Certified**, verificável offline | Nenhuma |
| Abertura | Especificação aberta + SDKs | Especificação aberta |

## Migrar um chip de TigerTag para OpenSpool

Os chips TigerTag **nunca estão bloqueados contra escrita** — o TigerTag é apenas o protocolo de base com que as bobinas são fornecidas. Se preferir o OpenSpool (ou qualquer formato personalizado), é livre de reescrever os dados de um chip de fábrica nesse formato.

## Interoperabilidade — especificação documentada, conversão para TigerData em curso

Uma ficha de descodificação só de leitura para as etiquetas OpenSpool é mantida em [`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md), no âmbito da leitura RFID multifabricante prevista no Tiger Studio.

### Correspondência de importação: OpenSpool → TigerData

Esta é a correspondência que o leitor OpenSpool do Tiger Studio vai aplicar.
Ler um tag OpenSpool cria um **TigerData**: um registo sem chip, com um novo
`TigerData_<id>`. O chip OpenSpool não é um chip TigerTag, e um tag OpenSpool
não indica nenhum produto do catálogo, pelo que o registo nunca é um TigerData+.
Escrito mais tarde num chip TigerTag, passa a ser um TigerTag, como qualquer
TigerData.

Um tag só é OpenSpool se o seu JSON contiver `"protocol": "openspool"`. Os
seus campos são então resolvidos com as [tabelas de referência](../concepts/universal-filament-identity.md):

| OpenSpool | TigerData | Regra |
|---|---|---|
| `brand` | `id_brand` | procurada pelo nome em `id_brand.json`, sem distinguir maiúsculas; ausente ou desconhecida → `Generic` (65535) |
| `type`, `subtype` | `id_material` | procurado em `id_material.json`, sem distinguir maiúsculas, por esta ordem: `type-subtype` (`PLA` + `CF` → `PLA-CF`), `type subtype` (`PLA` + `Silk` → `PLA Silk`) e depois só `type`. `NYLON` é lido como `PA` (59328). Um tipo ausente ou desconhecido é perguntado |
| `subtype`, se o material não o usou | `id_aspect1` | o aspeto com esse nome em `id_aspect.json` (`Matte` é lido como `Matt`, 247); caso contrário, `Basic` (104); um subtipo que não corresponde a nada fica guardado na `message` do registo |
| `color_hex`, `alpha` | `color_r`, `color_g`, `color_b`, `color_a` | copiados; o OpenSpool contém uma única cor |
| `diameter` | `id_diameter` | `1.75` → 56, `2.85` → 221; ausente → 1,75, o valor predefinido do OpenSpool; qualquer outro valor é perguntado |
| `weight` | `measure`, `id_measure_unit` | em gramas, unidade `g` (21); ausente → 1000, o valor predefinido do OpenSpool. A bobina começa cheia: `weight_available` = `weight` |
| `min_temp`, `max_temp` | bico mín. e máx. (`data2`, `data3`) | copiados; quando ambos valem `0` (ausentes), os valores recomendados do material. `max_temp` abaixo de `min_temp`: o tag é recusado, como no OpenRFID |
| — | temperatura e tempo de secagem, base mín. e máx. (`data4`–`data7`) | os valores `recommended` do material em `id_material.json` |
| — | `id_type` | Filament (142) |
| — | `id_aspect2` | None (255) |
| — | `id_product` | `0xFFFFFFFF`: nenhum produto do catálogo |
| — | `timestamp` | a hora da importação |

Duas regras diferem propositadamente do leitor do OpenRFID:

- **Os valores da base e de secagem vêm da base de dados de referência do
 TigerTag**, e não da tabela de cinco linhas do OpenRFID (PLA, PETG, ABS, TPU,
 NYLON, e zero para qualquer outro tipo). São os que o Tiger Studio preenche
 quando o mesmo material é escolhido à mão, e existem para os 113 materiais.
- **O material nunca é adivinhado.** O OpenRFID lê um tipo ausente como PLA. Um
 material errado dá temperaturas erradas, por isso a importação pergunta.

---

**◀ Anterior:** [Klipper](./klipper.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Programadores](../developers/README.md)
