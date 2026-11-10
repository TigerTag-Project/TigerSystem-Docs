---
sourceHash: eb98b668febe81444aaf5213b5a458a0a716327471fbb98b5c40bcd19ce623ae
sourcePath: docs/concepts/tigertag-chip.md
---

# O chip TigerTag (formato RFID/NFC)

## Camada física

| Propriedade | Valor |
|---|---|
| Família do chip | NTAG213 / 215 / 216 (NFC Forum Type 2) |
| Formato recomendado | **Adesivo redondo de 25 mm** (outros formatos funcionam) |
| Payload | Payload NDEF de 144 bytes — dimensionado para caber no pequeno NTAG213; chips maiores deixam espaço sem uso |
| Chips oficiais da marca | Produzidos como **NTAG215** — a memória extra maximiza o reaproveitamento no fim da vida (objetos NDEF padrão), para que o chip nunca vire lixo eletrônico |
| Autenticação | Nenhuma — leitura aberta |
| Bloqueio de gravação | **Nenhum** — os chips saem desbloqueados; o usuário pode reescrevê-los, inclusive migrando por completo para outro protocolo |
| Área reservada | **64 bytes** no fim do payload — páginas `0x18`–`0x27`, deixando 80 bytes de dados. Em um TigerTag padrão ficam **livres para funções adicionais da comunidade**; em um [TigerTag+](../products/tigertag-plus.md) carregam a **assinatura de origem**, 32 bytes de `R` e 32 de `S` (layout em nível de byte: [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)) |
| Chips por bobina | **Dois**, colocados em lados opostos |
| Legível por | Qualquer smartphone com NFC, leitores USB da classe ACR122U, [TigerPOD](../products/tigerpod.md) |

É o oposto deliberado das tags dos fabricantes (Mifare Classic com chaves
derivadas, setores AES, assinaturas RSA — veja
[compatibilidade](../compatibility/README.md)): um chip TigerTag não esconde nada.

Pense no chip como um **armazenamento frio de longo prazo** da identidade da bobina: os
dados vivem no próprio chip, offline, por anos — sem servidor, sem conta,
sem nada necessário para mantê-los vivos. A camada online (banco de dados de referência,
sincronização na nuvem) apenas *acrescenta* atualidade por cima.

## Por que toda bobina leva DOIS chips

<img src="../assets/refill-with-tigertag-blue.png" width="380" alt="Um rolo de refil de filamento com o seu chip TigerTag redondo" />

Dois chips, em lados opostos da bobina — parece redundante, mas é na verdade o
detalhe mais inteligente do formato:

- **As impressoras dividem leitores.** Uma máquina costuma ter **um leitor RFID para
 dois slots de bobina**, montado **entre os dois** — ou na lateral da
 impressora, onde lê a face esquerda ou a direita conforme o slot em que a
 bobina está. Um AMS da Bambu Lab tem 2 leitores para 4 slots; em uma Snapmaker
 a bobina fica de um lado ou do outro da impressora. Com um chip em cada lado,
 **seja qual for o slot, sempre há um chip voltado para o leitor** — e você nunca precisa
 carregar a bobina de um jeito específico.
- **Sem procurar o chip ao ler à mão.** Em um
 [TigerPOD](../products/tigerpod.md) ou com o celular, você nunca precisa
 descobrir qual face tem o chip: de qualquer jeito que pegue a bobina,
 um deles já está do lado certo para o que você está fazendo.
- **Leitura no lugar.** Uma bobina montada em um AMS Lite, na lateral de uma Elegoo
 Centauri Carbon ou de uma FlashForge pode ser lida sem precisar tirá-la.
- **Liberdade para integradores.** Um fabricante de secadores de filamento simplesmente coloca o leitor onde
 couber — à esquerda ou à direita em um secador de uma bobina, entre as duas bobinas em um
 de duas — e sempre funciona.
- **Redundância.** Se um chip parar de responder, o outro ainda identifica a
 bobina — e serve para consertar o quebrado.
- **Colheita em dobro.** No fim da vida, cada quilo de filamento impresso
 deixa para você **dois chips NTAG reutilizáveis** para projetos DIY
 ([zero lixo eletrônico](../philosophy/second-life.md)).

Alguns detalhes de implementação:

- Os dois chips são **totalmente independentes — cada um tem o seu próprio UID**; não há
 antena compartilhada. São **gravados juntos como um par (Twin Tag)** e mantidos
 idênticos durante toda a vida da bobina, até as gramas restantes — e sempre
 contados como **uma** bobina.
- Nas bobinas de fábrica, os chips vão em um **suporte**: uma tira cujas duas pontas
 se dobram sobre o miolo de papelão (um chip em cada ponta), fixada com
 **adesivo industrial 3M (468MP / 200MP)** — o operador descola e cola, nada
 mais muda na linha. O projeto do suporte é **público e imprimível em
 casa**, e a mesma peça é vendida separadamente para
 [refils](../philosophy/second-life.md), de modo que o chip viaja com o
 filamento em vez de com o carretel.

<img src="../assets/carrier-bare.png" width="440" alt="O suporte TigerTag sem chips — duas antenas NFC independentes, uma em cada ponta" />

*O suporte, sem nada: as duas antenas independentes são claramente visíveis — uma
em cada ponta dobrada, cada uma com o seu próprio UID.*

### Como os dois chips são vinculados

Nada central registra o par. Ele é **inferido do que os dois chips
carregam**, e o campo que o torna deliberado e não coincidência é
o **carimbo de data e hora**.

Os 4 bytes na página `0x0C` (offset `+32`) têm dupla função: segundos
desde 2000-01-01 GMT, *e* o **Twin Tag ID**. Dois chips gravados na mesma
sessão recebem exatamente o mesmo valor — esse segundo compartilhado é a chave de pareamento.

A resolução é de um segundo, então o carimbo sozinho não é prova: duas bobinas
etiquetadas no mesmo segundo também o teriam. O que confirma o par é que a
**identidade descritiva também coincide** — os dois chips descrevem uma
bobina, então todo campo que a descreve deve ser idêntico nos dois:

| Campo | Página | Offset |
|---|---|---|
| Twin Tag ID / carimbo de data e hora | `0x0C` | `+32` |
| ID Brand | `0x07` | `+14` |
| ID Material | `0x06` | `+8` |
| ID Aspect 1 · ID Aspect 2 | `0x06` | `+10` · `+11` |
| Color 1 · Color 2 · Color 3 | `0x08` · `0x0D` · `0x0E` | `+16` · `+36` · `+40` |
| ID Product | `0x05` | `+4` |

O que de fato discrimina depende da variante:

- Em um **[TigerTag+](../products/tigertag-plus.md)**, `ID Product` é um id real
 do catálogo. O mesmo carimbo **e** o mesmo id de produto bastam para chamar de
 par com quase certeza.
- Em um **TigerTag padrão**, `ID Product` é a constante `0xFFFFFFFF` em
 todos os chips existentes, então não discrimina nada. A marca,
 o material, as três cores e os dois aspectos fazem esse trabalho — junto
 com o carimbo.

Duas consequências que vale dizer com clareza:

- **Gravar os chips em duas passagens separadas não produz um par.** Eles
 recebem dois carimbos diferentes, então nada os vincula e o ecossistema
 conta duas bobinas. Por isso o aplicativo do celular grava os dois em uma única
 sessão *Dual NFC*, e por isso o [TigerPOD](../products/tigerpod.md) tem dois
 leitores frente a frente.
- **A assinatura é a única coisa que legitimamente difere.** Em um TigerTag+
 ela assina `SHA-256(uid ‖ id_tigertag ‖ id_product)`, e cada chip tem o seu próprio
 UID — então os dois chips de um par carregam duas assinaturas *diferentes*, por
 construção. Assinaturas idênticas significariam uma cópia, não um gêmeo.

Os offsets acima são citados do
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)
canônico (§2.9), que continua sendo a especificação.

### O suporte de refil, na prática

Dois detalhes que surpreendem as pessoas:

- **Colar é opcional.** O adesivo 3M está ali para segurar o suporte
 enquanto você manuseia e guarda o refil. Depois que o refil é montado na
 masterspool, o suporte fica **encaixado entre a masterspool e o
 miolo de papelão** e não se mexe — a cola não tem mais nada a fazer.
- **Ele sai de lá e é reutilizável.** Quando o refil acaba,
 recupere o suporte com os dois chips, apague-os pelo
 [Tiger NFC Connect](../products/tigertag-connect.md) ou pelo
 [Tiger Studio](../products/tiger-studio.md) e use-o de novo — em outra
 bobina, ou em qualquer outro projeto NDEF. O filamento vendido com um TigerTag Refill
 deixa para você o suporte, não lixo
 ([segunda vida](../philosophy/second-life.md)).

Onde conseguir um: veja [comprar os chips](../products/tigertag.md).

## Codificado na fábrica, ou virgem na sua mão

O mesmo chip chega até você de duas formas, e a diferença importa mais do que
qualquer outra coisa nesta página:

| | De onde vem | O que há nele |
|---|---|---|
| **Pré-codificado** | integrado na linha de produção, dentro de filamento de uma marca parceira | a identidade completa da bobina, pronta para ler |
| **Virgem** | comprado separadamente — da marca TigerTag, ou qualquer chip NTAG de qualquer lugar | nada ainda; você grava uma vez, em cerca de um minuto |

Os chips vendidos separadamente saem **virgens**, com ou sem logotipo. Isso não é uma
limitação: um chip não gravado é o que torna a
[segunda vida](../philosophy/second-life.md) possível, e é por isso que o
protocolo nunca depende de comprar nada.

## Payload

O payload de 144 bytes codifica a
[identidade universal](./universal-filament-identity.md) da bobina — marca, material,
aspecto/cor, tipo, diâmetro, configurações de impressão — como IDs resolvidos no
banco de dados de referência compartilhado.

O payload ocupa as páginas `0x04` a `0x27`, de 4 bytes cada; todo valor
de vários bytes é big-endian:

| Páginas | Bytes | Conteúdo |
|---|---|---|
| `0x04` | 4 | `ID TigerTag`, o tipo de chip: TigerTag, TigerTag+ ou TigerTag Init |
| `0x05` | 4 | `ID Product`: um produto do catálogo em um TigerTag+, `0xFFFFFFFF` em um TigerTag |
| `0x06`–`0x07` | 8 | material, dois aspectos, tipo, diâmetro e marca, como IDs do banco de referência |
| `0x08` | 4 | cor 1, com alfa |
| `0x09` | 4 | quantidade na fabricação e sua unidade |
| `0x0A`–`0x0B` | 8 | faixas de temperatura do bico e da mesa, temperatura e tempo de secagem |
| `0x0C` | 4 | carimbo de data/hora, que também é o Twin Tag ID |
| `0x0D`–`0x0E` | 8 | cores 2 e 3, índice e número de tags, um byte reservado |
| `0x0F` | 4 | TD do HueForge, dois bytes reservados |
| `0x10`–`0x16` | 28 | mensagem livre, UTF-8 |
| `0x17` | 4 | quantidade restante, atualizada pela Tiger Scale, um byte reservado |
| `0x18`–`0x27` | 64 | a assinatura (`R` e `S`) em um TigerTag+ Certified; caso contrário, livres |

Isto é um mapa, não a especificação. A tabela campo a campo do
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#2-data-structure--tigertag-binary-format)
é normativa: ela dá o offset exato de cada campo e aponta para cada tabela de
IDs. Um parser segue essa tabela.

Para ver este mapa preenchido, o [playground](https://tigersystem.io/playground) monta um chip a partir de um
produto do catálogo ou dos campos que você escolher, ou decodifica o hexadecimal
de um chip que você leu, e mostra cada campo com os seus bytes. Tudo roda no
navegador.

## Leitura e gravação

| Ferramenta | Leitura | Gravação |
|---|---|---|
| [Tiger NFC Connect](../products/tigertag-connect.md) (NFC no celular) | aproxime o chip — a bobina abre no celular | toque em **Make** e aproxime de novo para gravar; **Dual NFC** grava os dois chips de uma bobina em uma sessão |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | abre a bobina automaticamente ao ler | gravação guiada, com verificação do UID |
| [SDK JS](../developers/sdks.md) (`tigertag` no npm) | decodifica o payload de 144 bytes | codifica um novo payload |
| [SDK Python](../developers/sdks.md) | decodifica o payload; `tigertag[verify]` também verifica a assinatura | codifica um novo payload |

Os dois aplicativos falam com o leitor; os SDKs não. Um SDK decodifica e codifica
o **payload** — traga o seu próprio hardware NFC.

## Versionamento

O payload carrega uma versão de formato (tabela de referência `id_version`), para que os leitores
possam continuar compatíveis com chips mais antigos.

---

**◀ Anterior:** [Identidade universal do filamento](./universal-filament-identity.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Inventário e sincronização na nuvem](./inventory-and-cloud-sync.md)

**Veja também:** [TigerTag](../products/tigertag.md), [SDKs](../developers/sdks.md), [Compatibilidade](../compatibility/README.md)
