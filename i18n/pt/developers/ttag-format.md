---
sourceHash: fa644ad426378c66b3be7c3a1a494a12ec2e25e0680b3cdfeb8ccffe9fb6ca28
sourcePath: docs/developers/ttag-format.md
---

# O formato de arquivo `.ttag`

O **arquivo de intercâmbio de inventário `.ttag`** é um instantâneo portátil e offline de
um ou mais materiais do inventário. É a unidade para **fazer backup** dos seus
filamentos, **levá-los** em um pen drive USB e **compartilhá-los** — entre
contas, entre ferramentas, ou como coleções prontas de marcas/linhas.

Introduzido no **Tiger Studio Manager v2.14.0** (exportação + importação). O formato
é estável e multiaplicativo: ferramentas de terceiros, um futuro playground web que
gere arquivos `.ttag` e coleções de filamentos preparadas se baseiam todos nesta
especificação.

## Estrutura do arquivo

Um arquivo `.ttag` é um único documento **JSON em UTF-8**:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "<owner uid>",
 "records": [ /* inventory documents, verbatim */ ],
 "rfidBackups": { "<chipUid>": { /* signed factory dump */ } }
}
```

| Campo | Significado |
|---|---|
| `format` / `kind` | Sempre `"tigertag"` / `"ttag"` — o par de identificação verificado na importação |
| `version` | Versão do formato; atualmente `1` |
| `exportedAt` | Hora da exportação, **string ISO 8601** (p. ex. `"2026-07-24T00:00:00.000Z"`) |
| `exportedBy` | Uid do dono que exportou — **uma dica de UX para escolher o modo de importação, SOMENTE, nunca uma fronteira de segurança** |
| `records[]` | Documentos de inventário, carregados **literalmente** |
| `rfidBackups` | *Opcional.* Indexado pelo UID do chip; presente apenas para bobinas TigerTag+ (certificadas) — o dump de fábrica assinado usado para restaurar o chip |

**Os `records[]` são os documentos de inventário do Firestore, literalmente** — exatamente
`users/{uid}/inventory/{spoolId}`, conforme documentado no
[modelo de dados oficial](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration/blob/main/docs/03-data-model.md)
(use-o como dicionário de campos). Três nuances:

- **Os campos são esparsos** — um campo só é gravado quando está presente no documento:
 `twin_tag_uid` apenas em gêmeos, `rfidBackup: true` apenas em TigerTag+,
 `id_product` apenas quando conhecido, e assim por diante.
- **Os campos de URL são controlados por um atacante** — `LinkTDS`, `LinkMSDS`,
 `LinkYoutube`, `LinkREACH`, `LinkROHS`, `LinkFOOD` e `url_img*` são
 higienizados na importação: qualquer esquema que não seja http(s) é descartado.
- **A posição no rack viaja, mas não se aplica** — `rack`, `rack_id`, `level`,
 `position` podem aparecer no arquivo, mas não têm significado na importação (uma
 bobina importada não herda o rack de quem exportou).

### Campos obrigatórios e opcionais

No **nível do arquivo**:

| Campo | Situação |
|---|---|
| `format` = `"tigertag"`, `kind` = `"ttag"`, `version` ≤ 1 | **Obrigatório** — ausente ou divergente = o arquivo é rejeitado |
| `records[]`, não vazio | **Obrigatório** — um arquivo vazio é rejeitado |
| `exportedAt`, `exportedBy` | Informativos (`exportedBy` é apenas uma dica de UX) |
| `rfidBackups` | Opcional — presente apenas quando há bobinas TigerTag+ |

No **nível do registro**:

| Categoria | Campos |
|---|---|
| **Obrigatórios** | `uid` (`TigerData_<id>` ou UID do chip) · **`id_brand`** |
| Identidade principal (presente em todo registro bem formado) | `id_material`, `id_type`, `id_aspect1`, `id_tigertag` — resolvidos no banco de dados de referência compartilhado |
| Capacidade | Normalizada a partir de `measure` + `id_unit`: **`measure_gr` em gramas para sólidos** (p. ex. `measure: 1` + kg → `measure_gr: 1000`) e **`measure_ml` em mililitros para líquidos** (resinas). Os geradores podem fornecer `measure` + `id_unit`; o valor normalizado é o canônico armazenado |
| Opcionais comuns | campos de cor (`color_r/g/b`, `online_color_list`…), `weight_available`, `container_id` / `container_weight`, textos de exibição (`material`, `series`, `color_name`), `TD`, `tags`, `sku` / `barcode`, `Link*`, `url_img*` |
| Condicionais | `twin_tag_uid` (apenas gêmeos — recíproco dentro do arquivo) · `tag_index` / `tag_count` (apenas registros com chip — chip *i* de *n*, lido do byte +39 do chip, protocolo TigerTag v2.2; um nibble cada, `0` = desconhecido; nunca em um registro sem chip) · `rfidBackup: true` **mais** uma entrada correspondente em `rfidBackups` (apenas TigerTag+) · `id_product` (apenas produtos conhecidos do catálogo) |
| Carregados, mas ignorados na importação | `rack`, `rack_id`, `level`, `position` |

Para qualquer caso extremo não coberto aqui, o **importador do Tiger Studio é a
implementação de referência** — geradores de terceiros devem mirar registros que um
Studio de fábrica aceite.

Regras embutidas no formato:

- **Duas convenções de carimbo de data e hora, por projeto.** O `exportedAt` da raiz é uma
 **string ISO 8601**. Os carimbos *dentro* de `records[]` (`updatedAt`, e as
 variantes legadas `updated_at` / `last_update`) são **números em epoch-ms** —
 os Timestamps do Firestore são convertidos pelo serializador para que o arquivo
 serialize sem problemas. Não "corrija" um para combinar com o outro: arquivos que já circulam
 trazem essa forma.
- **Os gêmeos são atômicos.** Um material com gêmeo sempre exporta **os dois** lados —
 um material → dois registros, ligados por `twin_tag_uid`. Meio gêmeo nunca é
 produzido.
- **Disciplina de ids.** Apenas ids `TigerData_<id>` sem chip podem aparecer; um id legado
 `CLOUD_<id>` é recusado na exportação.

### Recipientes (`container_id`, `container_weight`)

`container_id` indica o carretel vazio em que o filamento está.
`container_weight` é o peso desse carretel vazio, em gramas: a tara que uma
balança subtrai para que o inventário mostre o filamento líquido.

Os ids são strings de uma lista fixa distribuída com o Tiger Studio,
[`data/container_spool/spools_filament.json`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/data/container_spool/spools_filament.json).
Cada entrada traz a marca a que pertence (`brandId`, o mesmo número que
`id_brand`) e um peso de catálogo. A maioria é o carretel próprio de uma
marca — `bambu_grey` (249 g), `esun_masterspool_2_0` (210 g),
`polymaker_cardboard` (170 g) — e três são genéricos, para uma marca cujo
carretel ainda não está na lista:

| `container_id` | Como aparece no Tiger Studio | Peso de catálogo |
|---|---|---|
| `custom_cardboard` | Generic · Cardboard | 165 g |
| `custom_plastic` | Generic · Plastic | 200 g |
| `custom_no_masterspool` | Generic · Refill — Without MasterSpool | **0 g** |

`custom_no_masterspool` não subtrai nada. É certo para um refil pesado sem
nenhum carretel, e errado em qualquer outro caso: um carretel que o usa mostra
o peso bruto, cerca de 200 g a mais do que o filamento restante.

`container_weight` é um **instantâneo** feito quando o recipiente foi
escolhido, não uma consulta. Um registro mantém seu valor quando a lista muda,
e uma conta pode corrigir o peso de um recipiente para seus próprios carretéis
(guardado em `users/{uid}/containerOverrides/{id}`; a lista compartilhada
nunca é modificada).

Um gerador que conhece o carretel vazio grava os dois campos. Um que não
conhece os omite em vez de adivinhar: o Tiger Studio então define o recipiente
próprio da marca, ou pergunta quando há vários ou nenhum.

## Tipo de mídia

O tipo de mídia oficial é **`application/vnd.tigertag.ttag+json`** — ele
importa onde um `.ttag` é **servido por http(s)** (o `Content-Type` que um playground web,
uma CDN ou um host de coleções de marcas deve enviar).
`application/json` também é aceito. Um arquivo em disco não carrega MIME — ele é
identificado pela extensão `.ttag` e, de forma definitiva, pelo conteúdo:
os importadores **validam pelo conteúdo** (`format`/`kind`/`version`), nunca apenas pelo
cabeçalho MIME ou pela extensão do arquivo.

## Disponibilidade

A exportação e a importação vêm no **Tiger Studio v2.14.0+**. O formato foi projetado
para ser portátil; outras superfícies podem adotá-lo com o tempo — hoje, o Studio é a
implementação de referência.

## O que um `.ttag` pode carregar

Os três [níveis de bobina](../concepts/universal-filament-identity.md) são exportados
e importados:

| Nível | No arquivo |
|---|---|
| **TigerData** (totalmente digital, sem chip) | O próprio registro |
| **TigerTag** (um chip gravado) | O próprio registro |
| **TigerTag+** (chip certificado) | O registro **mais** o seu dump de fábrica assinado em `rfidBackups` |

## Exportação

- **Bobina única** — a partir da caixa de ferramentas de detalhes da bobina → um arquivo chamado
 `brand-material-color.ttag`.
- **Seleção múltipla** — selecione várias bobinas, botão **Exportar** da barra de ferramentas → um
 arquivo chamado `tigertag-selection-<date>.ttag`.
- A exportação está disponível apenas para o **inventário do próprio usuário**.

## Importação — validar → pré-visualizar → aceitar

O importador aceita **vários arquivos `.ttag` de uma vez**: navegue, cole um
link http(s) ou arraste e solte em qualquer lugar da janela.

1. **Validar.** Cada arquivo deve trazer o par `format`/`kind` e
 `version ≤ 1`. Um arquivo que não seja `.ttag`, uma versão mais nova ou um arquivo vazio é
 rejeitado. Cada **registro** deve então trazer o payload completo do chip — veja
 *Campos obrigatórios* abaixo.
2. **Higienizar.** O conteúdo do arquivo é uma entrada não confiável: campos de URL que não sejam
 http(s) são descartados; valores de cor, peso e TD são limitados a faixas válidas.
3. **Pré-visualizar.** Cada material é mostrado em uma tabela de pré-visualização com uma
 **caixa de seleção de inclusão** por material.
4. **Aceitar** em um de dois modos — pré-sugerido a partir de `exportedBy`, com troca
 livre:

|| **Restaurar** | **Importar** |
|---|---|---|
| Intenção | Mesma conta / uma restauração genuína | Adotar materiais de outra pessoa |
| Ids dos registros | Mantidos — gravados **literalmente** sob os ids originais | Ids **novos** — cada registro vira uma nova bobina `TigerData_` sem chip, de propriedade de quem importa |
| Situação do chip | Mantida — cada backup de `rfidList` é restaurado | Descartada — a cópia não tem chip: `id_tigertag` removido, `rfidBackup:false`, backups descartados (um dump assinado está ligado a um chip que quem importa não possui) |
| Produto | Mantido | **Mantido** quando `id_product` é um id real do catálogo (nem `0`, nem `0xFFFFFFFF`), de modo que um TigerData+ continua um TigerData+ e um TigerTag+ chega como o TigerData+ do mesmo produto; qualquer outro valor é definido como `0xFFFFFFFF` (não definido). Antes do Tiger Studio v2.51.1 ele ficava sempre não definido, então um TigerData+ chegava como um TigerData simples |
| Peso | Como registrado | Redefinido para a capacidade total |
| Gêmeos | Como registrado | `twin_tag_uid` remapeado pelos novos ids |

### Campos obrigatórios — um registro precisa ser capaz de criar um chip

Um `.ttag` existe para **criar chips TigerTag / TigerTag+**. Um registro que não pode
produzir um não é um registro parcial, é um registro inutilizável — por isso, desde o Tiger
Studio **2.15.0**, o importador o recusa de imediato em vez de importar uma bobina
que parece boa e está silenciosamente errada.

Um registro só é aceito se trouxer **`uid` mais estes 24 campos numéricos**,
cada um presente e finito (`null` e `""` **não** contam como presentes — cuidado,
`Number(null)` é `0`):

| Grupo | Campos |
|---|---|
| Ids de identidade | `id_brand`, `id_material`, `id_type`, `id_aspect1`, `id_aspect2`, `id_diameter`, `id_measure_unit`, `id_version`, `id_product` |
| Quantidade | `measure` |
| Cor | `color_r`, `color_g`, `color_b`, `color_a` |
| Payload por tipo | `data1` … `data7` |
| Carimbo | `timestamp` |

Mais **`id_tigertag`, mas somente se o registro tiver um chip.** Esse campo nomeia a
versão do chip em `id_version.json`, onde exatamente quatro valores são legais — `0`
RFID Empty, `1542820452` TigerTag, `1816240865` TigerTag Init, `3155151767`
TigerTag+. Um registro sem chip (`uid` começando por `TigerData_` ou o legado `CLOUD_`)
não tem chip e, portanto, nenhuma versão, então **não deve carregar o campo de forma alguma**;
ele é gravado pela primeira vez quando um chip real é programado. Nunca invente um
valor para ele e nunca resolva um sem verificar se o registro tem um chip.

Todo o resto de um registro — nomes, imagens, preço, anotações, posição no rack — é
**enriquecimento**: bom de carregar, nunca obrigatório.

**Um material é atômico.** Um par de gêmeos só passa se *os dois* registros passarem; um
gêmeo parcialmente válido é recusado por inteiro, porque importar um lado de um par
criaria uma bobina cujo par nunca poderá ser gravado.

**As recusas são contadas e mostradas, nunca silenciosas.** A pré-visualização informa quantos
materiais foram recusados, para que uma exportação ruim seja visível em vez de perder
discretamente metade do conteúdo. Quem escreve arquivos `.ttag` deve validar com esta lista
antes de enviar um arquivo aos usuários.

## Exemplo completo

Uma exportação fiel e anonimizada de seleção múltipla — um TigerData, um par de gêmeos
(`twin_tag_uid` recíproco), um TigerTag+ cujo conteúdo do chip tem backup:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "AbCdEf0123456789GhIjKlMnOpQr",
 "records": [
  {
   "uid": "TigerData_9F3A2B1C",
   "id_brand": 12, "id_material": 3, "id_type": 1,
   "id_aspect1": 2, "id_aspect2": 0, "id_tigertag": 74213,
   "material": "PLA Basic", "color_name": "Sky Blue",
   "color_r": 88, "color_g": 170, "color_b": 220,
   "online_color_list": "58AADC", "online_color_type": 1,
   "measure_gr": 1000, "weight_available": 640,
   "container_id": "custom_plastic", "container_weight": 200,
   "TD": 0, "tags": ["desk", "prototyping"],
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04A1B2C3D4E5F6",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55010,
   "material": "PLA Silk", "color_name": "Gold",
   "color_r": 212, "color_g": 175, "color_b": 55,
   "online_color_list": "D4AF37",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04F6E5D4C3B2A1", "tag_index": 1, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04F6E5D4C3B2A1",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55011,
   "material": "PLA Silk", "color_name": "Emerald",
   "color_r": 0, "color_g": 130, "color_b": 90,
   "online_color_list": "00825A",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04A1B2C3D4E5F6", "tag_index": 2, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04112233445566",
   "id_brand": 5, "id_material": 8, "id_type": 1,
   "id_aspect1": 2, "id_tigertag": 90887, "id_product": 4412,
   "material": "PETG HF Basic", "series": "Hyper PETG",
   "color_name": "Green",
   "color_r": 0, "color_g": 160, "color_b": 70,
   "online_color_list": "00A046",
   "measure_gr": 1000, "weight_available": 480,
   "container_id": "custom_plastic", "container_weight": 200, "TD": 6,
   "LinkTDS": "https://example-brand.example/tds/petg-hf-basic.pdf",
   "sku": "RFHPPETG175GN1",
   "rfidBackup": true, "updatedAt": 1769212800000
  }
 ],
 "rfidBackups": {
  "04112233445566": {
   "firstSeen": 1767139200000,
   "backup": "0411223344556680048000000000E110122F0300FE0000A5A5C0FFEE112233445566778899…"
  }
 }
}
```

Lendo o exemplo: o primeiro registro não tem chip (um id `TigerData_`); os
dois seguintes são um par de gêmeos — mesmo material, `twin_tag_uid` recíproco, sempre
exportados juntos; o último é um TigerTag+ (`rfidBackup: true`) cujo dump de fábrica
assinado está em `rfidBackups` sob o UID do chip.

## Segurança / modelo de confiança

Um arquivo `.ttag` é uma **entrada não confiável**. Todo registro é higienizado na importação
(veja acima). `exportedBy` apenas pré-seleciona o modo na interface — a fronteira real de
autorização são as **Regras de Segurança do Firestore**. Nunca trate o conteúdo do
arquivo como definitivo para identidade ou propriedade.

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [Identidade universal do filamento](../concepts/universal-filament-identity.md), [Inventário e sincronização na nuvem](../concepts/inventory-and-cloud-sync.md), [Visão geral para desenvolvedores](./README.md)
