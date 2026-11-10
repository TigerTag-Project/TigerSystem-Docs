---
sourceHash: a2b898dd98b87258ab52f535f8234c80ae6826a98e66fe816ab06b60999020b1
sourcePath: docs/developers/ttag-format.md
---

# O formato de ficheiro `.ttag`

O **ficheiro de intercâmbio de inventário `.ttag`** é um instantâneo portátil e offline de um ou mais materiais do inventário. É a unidade para **fazer cópias de segurança** dos seus filamentos, **transportá-los** numa unidade USB e **partilhá-los** — entre contas, entre ferramentas ou como coleções de marca/gama prontas a usar.

Introduzido no **Tiger Studio Manager v2.14.0** (exportação + importação). O formato é estável e transversal às aplicações: ferramentas de terceiros, um futuro playground web que gere ficheiros `.ttag` e coleções de filamentos preparadas assentam todos nesta especificação.

## Forma do ficheiro

Um ficheiro `.ttag` é um único documento **JSON em UTF-8**:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "<owner uid>",
 "records": [ /* inventory documents, verbatim */ ],
 "rfidBackups": { "<chipUid>": { /* chip content from its first read */ } }
}
```

| Campo | Significado |
|---|---|
| `format` / `kind` | Sempre `"tigertag"` / `"ttag"` — o par de identificação verificado na importação |
| `version` | Versão do formato; atualmente `1` |
| `exportedAt` | Hora de exportação, **cadeia ISO 8601** (p. ex. `"2026-07-24T00:00:00.000Z"`) |
| `exportedBy` | Uid do proprietário que exportou — **uma indicação de UX para escolher o modo de importação APENAS, nunca uma fronteira de segurança** |
| `records[]` | Documentos do inventário, transportados **tal e qual** |
| `rfidBackups` | *Opcional.* Indexado pelo UID do chip; presente apenas para chips que têm uma cópia de segurança — o conteúdo do chip tal como o Tiger Studio o leu pela primeira vez de um TigerTag+ (assinatura incluída num TigerTag+ Certified), usado para restaurar o chip |

**Os `records[]` são os documentos de inventário do Firestore, tal e qual** — exatamente `users/{uid}/inventory/{spoolId}`, como documentado no [modelo de dados de referência](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration/blob/main/docs/03-data-model.md) (use-o como dicionário de campos). Três nuances:

- **Os campos são esparsos** — um campo só é escrito quando existe no documento: `twin_tag_uid` apenas em gémeos, `rfidBackup: true` apenas num chip com cópia de segurança, `id_product` apenas quando conhecido, e assim por diante.
- **Os campos de URL são controlados por um atacante** — `LinkTDS`, `LinkMSDS`, `LinkYoutube`, `LinkREACH`, `LinkROHS`, `LinkFOOD` e `url_img*` são higienizados na importação: qualquer esquema que não seja http(s) é descartado.
- **A colocação em racks viaja mas não se aplica** — `rack`, `rack_id`, `level`, `position` podem aparecer no ficheiro mas não têm significado na importação (uma bobina importada não herda o rack de quem exportou).

### Campos obrigatórios vs opcionais

Ao **nível do ficheiro**:

| Campo | Estado |
|---|---|
| `format` = `"tigertag"`, `kind` = `"ttag"`, `version` ≤ 1 | **Obrigatório** — em falta ou diferente = o ficheiro é rejeitado |
| `records[]`, não vazio | **Obrigatório** — um ficheiro vazio é rejeitado |
| `exportedAt`, `exportedBy` | Informativos (`exportedBy` é apenas uma indicação de UX) |
| `rfidBackups` | Opcional — presente apenas quando há chips com cópia de segurança incluídos |

Ao **nível do registo**:

| Categoria | Campos |
|---|---|
| **Obrigatório** | `uid` (`TigerData_<id>` ou UID do chip) · **`id_brand`** |
| Identidade principal (presente em todos os registos bem formados) | `id_material`, `id_type`, `id_aspect1`, `id_tigertag` — resolvidos face à base de dados de referência partilhada |
| Capacidade | Normalizada a partir de `measure` + `id_unit`: **`measure_gr` em gramas para sólidos** (p. ex. `measure: 1` + kg → `measure_gr: 1000`) e **`measure_ml` em mililitros para líquidos** (resinas). Os geradores podem fornecer `measure` + `id_unit`; o valor normalizado é o canónico guardado |
| Opcionais comuns | campos de cor (`color_r/g/b`, `online_color_list`…), `weight_available`, `container_id` / `container_weight`, cadeias de apresentação (`material`, `series`, `color_name`), `TD`, `tags`, `sku` / `barcode`, `Link*`, `url_img*` |
| Condicionais | `twin_tag_uid` (apenas gémeos — recíproco dentro do ficheiro) · `tag_index` / `tag_count` (apenas registos com chip — chip *i* de *n* lido do byte +39 do chip, protocolo TigerTag v2.2; um nibble cada, `0` = desconhecido; nunca num registo sem chip) · `rfidBackup: true` **mais** uma entrada `rfidBackups` correspondente (apenas chips com cópia de segurança) · `id_product` (apenas produtos de catálogo conhecidos) |
| Transportados mas ignorados na importação | `rack`, `rack_id`, `level`, `position` |

Para qualquer caso limite não coberto aqui, o **importador do Tiger Studio é a implementação de referência** — os geradores de terceiros devem visar registos que um Studio de origem aceite.

Regras incorporadas no formato:

- **Duas convenções de carimbo de data/hora, por conceção.** O `exportedAt` da raiz é uma **cadeia ISO 8601**. Os carimbos *dentro* de `records[]` (`updatedAt` e as variantes antigas `updated_at` / `last_update`) são **números em ms de época** — os Timestamps do Firestore são convertidos pelo serializador para que o ficheiro se serialize limpo. Não «corrija» uma para coincidir com a outra: os ficheiros em circulação já têm esta forma.
- **Os gémeos são atómicos.** Um material com gémeo exporta sempre **os dois** lados — um material → dois registos, ligados por `twin_tag_uid`. Nunca se produz meio gémeo.
- **Disciplina de ids.** Só podem aparecer ids `TigerData_<id>` sem chip; um id antigo `CLOUD_<id>` é recusado na exportação.

### Recipientes (`container_id`, `container_weight`)

`container_id` indica a bobina vazia em que o filamento está. `container_weight` é o peso dessa bobina vazia, em gramas: a tara que uma balança subtrai para que o inventário mostre o filamento líquido.

Os ids são cadeias de uma lista fixa distribuída com o Tiger Studio, [`data/container_spool/spools_filament.json`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/data/container_spool/spools_filament.json). Cada entrada traz a marca a que pertence (`brandId`, o mesmo número que `id_brand`) e um peso de catálogo. A maioria é a bobina própria de uma marca — `bambu_grey` (249 g), `esun_masterspool_2_0` (210 g), `polymaker_cardboard` (170 g) — e três são genéricas, para uma marca cuja bobina ainda não está na lista:

| `container_id` | Como aparece no Tiger Studio | Peso de catálogo |
|---|---|---|
| `custom_cardboard` | Generic · Cardboard | 165 g |
| `custom_plastic` | Generic · Plastic | 200 g |
| `custom_no_masterspool` | Generic · Refill — Without MasterSpool | **0 g** |

`custom_no_masterspool` não subtrai nada. Está certo para uma recarga pesada sem qualquer bobina, e errado em todos os outros casos: uma bobina que o tem mostra o seu peso bruto, cerca de 200 g a mais do que o filamento restante.

`container_weight` é um **instantâneo** tirado quando o recipiente foi escolhido, não uma consulta. Um registo mantém o seu valor quando a lista muda, e uma conta pode corrigir o peso de um recipiente para as suas próprias bobinas (guardado em `users/{uid}/containerOverrides/{id}`; a lista partilhada nunca é modificada).

Um gerador que conhece a bobina vazia escreve os dois campos. Um que não a conhece omite-os em vez de adivinhar: o Tiger Studio define então o recipiente próprio da marca, ou pergunta quando há vários ou nenhum.

## Tipo de media

O tipo de media de referência é **`application/vnd.tigertag.ttag+json`** — importa quando um `.ttag` é **servido por http(s)** (o `Content-Type` que um playground web, uma CDN ou um alojamento de coleções de marca deve enviar). O `application/json` também é aceite. Um ficheiro em disco não traz MIME — é identificado pela extensão `.ttag` e, de forma autoritativa, pelo seu conteúdo: os importadores **validam pelo conteúdo** (`format`/`kind`/`version`), nunca apenas pelo cabeçalho MIME ou pela extensão do ficheiro.

## Disponibilidade

A exportação e a importação vêm no **Tiger Studio v2.14.0+**. O formato foi concebido para ser portátil; outras superfícies poderão adotá-lo com o tempo — hoje, o Studio é a implementação de referência.

## O que um `.ttag` pode transportar

Os três [níveis de bobina](../concepts/universal-filament-identity.md) exportam-se e importam-se:

| Nível | No ficheiro |
|---|---|
| **TigerData** (totalmente digital, sem chip) | O próprio registo |
| **TigerTag** (um chip escrito) | O próprio registo |
| **TigerTag+** (assinado ou não) | O registo **mais** a cópia de segurança do chip em `rfidBackups` |

O Tiger Studio faz a cópia de segurança na primeira vez que lê um chip TigerTag+, assinado ou não, e nunca a substitui. Num TigerTag+ Certified a cópia contém a assinatura, por isso um chip restaurado continua Certified.

## Exportação

- **Uma só bobina** — a partir da caixa de ferramentas de detalhe da bobina → um ficheiro com o nome `brand-material-color.ttag`.
- **Seleção múltipla** — selecione várias bobinas, botão **Exportar** da barra de ferramentas → um ficheiro com o nome `tigertag-selection-<date>.ttag`.
- A exportação está disponível **apenas para o inventário do próprio utilizador**.

## Importação — validar → pré-visualizar → aceitar

O importador aceita **vários ficheiros `.ttag` de uma só vez**: navegue, cole uma ligação http(s) ou arraste e largue em qualquer ponto da janela.

1. **Validar.** Cada ficheiro tem de trazer o par `format`/`kind` e `version ≤ 1`. Um ficheiro que não seja `.ttag`, uma versão mais recente ou um ficheiro vazio é rejeitado. Cada **registo** tem então de trazer o payload completo do chip — ver *Campos obrigatórios* abaixo.
2. **Higienizar.** O conteúdo do ficheiro é entrada não fidedigna: os campos de URL que não sejam http(s) são descartados; os valores de cor, peso e TD são limitados a intervalos válidos.
3. **Pré-visualizar.** Cada material é mostrado numa tabela de pré-visualização com uma **caixa de seleção de inclusão** por material.
4. **Aceitar** num de dois modos — pré-sugerido a partir de `exportedBy`, livremente alternável:

|| **Restaurar** | **Importar** |
|---|---|---|
| Intenção | Mesma conta / um restauro genuíno | Adotar materiais de outra pessoa |
| Ids dos registos | Mantidos — escritos **tal e qual** sob os ids originais | Ids **novos** — cada registo torna-se uma nova bobina `TigerData_` sem chip, pertencente a quem importa |
| Estado do chip | Mantido — cada cópia de segurança `rfidList` é restaurada | Descartado — a cópia não tem chip: `id_tigertag` removido, `rfidBackup:false`, as cópias de segurança são descartadas (uma cópia de segurança pertence a um chip que quem importa não tem) |
| Produto | Mantido | **Mantido** quando `id_product` é um id real do catálogo (nem `0`, nem `0xFFFFFFFF`), pelo que um TigerData+ continua a ser um TigerData+ e um TigerTag+ chega como o TigerData+ do mesmo produto; qualquer outro valor passa a `0xFFFFFFFF` (por definir). Antes do Tiger Studio v2.51.1 ficava sempre por definir, pelo que um TigerData+ chegava como um simples TigerData |
| Peso | Como registado | Reposto na capacidade total |
| Gémeos | Como registado | `twin_tag_uid` remapeado através dos novos ids |

### Campos obrigatórios — um registo tem de conseguir fazer um chip

Um `.ttag` existe para **criar chips TigerTag / TigerTag+**. Um registo que não consiga produzir um não é um registo parcial, é um registo inutilizável — por isso, desde o Tiger Studio **2.15.0**, o importador recusa-o de imediato em vez de importar uma bobina que parece bem e está silenciosamente errada.

Um registo só é aceite se trouxer **`uid` mais estes 24 campos numéricos**, cada um presente e finito (`null` e `""` **não** contam como presentes — atenção, `Number(null)` é `0`):

| Grupo | Campos |
|---|---|
| Ids de identidade | `id_brand`, `id_material`, `id_type`, `id_aspect1`, `id_aspect2`, `id_diameter`, `id_measure_unit`, `id_version`, `id_product` |
| Quantidade | `measure` |
| Cor | `color_r`, `color_g`, `color_b`, `color_a` |
| Payload por tipo | `data1` … `data7` |
| Carimbo | `timestamp` |

Mais **`id_tigertag`, mas só se o registo tiver chip.** Esse campo nomeia a versão do chip em `id_version.json`, onde são legais exatamente quatro valores — `0` RFID Empty, `1542820452` TigerTag, `1816240865` TigerTag Init, `3155151767` TigerTag+. Um registo sem chip (`uid` a começar por `TigerData_` ou o antigo `CLOUD_`) não tem chip e, portanto, não tem versão, pelo que **não deve trazer o campo de todo**; é escrito pela primeira vez quando um chip real é programado. Nunca invente um valor para ele e nunca resolva um sem verificar que o registo tem chip.

Tudo o resto num registo — nomes, imagens, preço, notas, posição no rack — é **enriquecimento**: bom de transportar, nunca obrigatório.

**Um material é atómico.** Um par de gémeos só passa se *ambos* os registos passarem; um gémeo meio válido é recusado por inteiro, porque importar um lado de um par criaria uma bobina cujo par nunca poderá ser escrito.

**As recusas são contadas e mostradas, nunca silenciosas.** A pré-visualização indica quantos materiais foram rejeitados, para que uma má exportação seja visível em vez de perder discretamente metade do conteúdo. Quem escreve ficheiros `.ttag` deve validar contra esta lista antes de entregar um ficheiro aos utilizadores.

## Exemplo completo

Uma exportação de seleção múltipla fiel e anonimizada — um TigerData, um par de gémeos (`twin_tag_uid` recíproco), um TigerTag+ cujo conteúdo do chip tem cópia de segurança:

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

Lendo o exemplo: o primeiro registo não tem chip (um id `TigerData_`); os dois seguintes são um par de gémeos — mesmo material, `twin_tag_uid` recíproco, exportados sempre em conjunto; o último é um TigerTag+ (`rfidBackup: true`) cuja cópia de segurança está em `rfidBackups` sob o UID do seu chip.

## Modelo de segurança / confiança

Um ficheiro `.ttag` é **entrada não fidedigna**. Cada registo é higienizado na importação (ver acima). O `exportedBy` apenas pré-seleciona o modo na interface — a verdadeira fronteira de autorização são as **Regras de Segurança do Firestore**. Nunca trate o conteúdo do ficheiro como autoritativo quanto a identidade ou propriedade.

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [Identidade universal do filamento](../concepts/universal-filament-identity.md), [Inventário e sincronização na nuvem](../concepts/inventory-and-cloud-sync.md), [Visão geral para programadores](./README.md)
