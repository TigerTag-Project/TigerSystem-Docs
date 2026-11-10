---
sourceHash: eb98b668febe81444aaf5213b5a458a0a716327471fbb98b5c40bcd19ce623ae
sourcePath: docs/concepts/tigertag-chip.md
---

# O chip TigerTag (formato RFID/NFC)

## Camada física

| Propriedade | Valor |
|---|---|
| Família de chips | NTAG213 / 215 / 216 (NFC Forum Type 2) |
| Formato recomendado | **Autocolante redondo de 25 mm** (outras formas funcionam) |
| Payload | Payload NDEF de 144 bytes — dimensionado para caber no pequeno NTAG213; os chips maiores deixam espaço por usar |
| Chips oficiais com marca | Produzidos como **NTAG215** — a memória extra maximiza a reutilização no fim de vida (objetos NDEF padrão), para que o chip nunca se torne lixo eletrónico |
| Autenticação | Nenhuma — legível abertamente |
| Bloqueio de escrita | **Nenhum** — os chips saem desbloqueados; o utilizador pode reescrevê-los, incluindo migrá-los por completo para outro protocolo |
| Área reservada | **64 bytes** no fim do payload — páginas `0x18`–`0x27`, o que deixa 80 bytes de dados. Num TigerTag padrão estão **livres para funções adicionais da comunidade**; num [TigerTag+](../products/tigertag-plus.md) contêm a **assinatura de origem**, 32 bytes de `R` e 32 de `S` (disposição ao nível do byte: [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)) |
| Chips por bobina | **Dois**, colocados em lados opostos |
| Legível por | Qualquer telemóvel NFC, leitores USB da classe ACR122U, [TigerPOD](../products/tigerpod.md) |

É o oposto deliberado das etiquetas dos fabricantes (Mifare Classic com chaves derivadas, setores AES, assinaturas RSA — ver [compatibilidade](../compatibility/README.md)): um chip TigerTag não esconde nada.

Pense no chip como um **armazenamento a frio de longo prazo** da identidade da bobina: os dados vivem no próprio chip, offline, durante anos — sem servidor, sem conta, sem nada que seja preciso para os manter vivos. A camada online (base de dados de referência, sincronização na nuvem) só acrescenta frescura por cima.

## Porque é que cada bobina leva DOIS chips

<img src="../assets/refill-with-tigertag-blue.png" width="380" alt="Uma recarga de filamento enrolada com o seu chip TigerTag redondo" />

Dois chips, em lados opostos da bobina — parece redundante, mas é na verdade o detalhe mais inteligente do formato:

- **As impressoras partilham leitores.** Uma máquina tem normalmente **um leitor RFID para dois slots de bobina**, montado **entre os dois** — ou na lateral da impressora, onde lê a face esquerda ou a direita consoante o slot em que está a bobina. Um AMS da Bambu Lab tem 2 leitores para 4 slots; numa Snapmaker a bobina fica de um ou do outro lado da impressora. Com um chip em cada lado, **seja qual for o slot, há sempre um chip virado para o leitor** — e nunca é preciso carregar a bobina de uma determinada maneira.
- **Sem andar à procura do chip quando lê à mão.** Num [TigerPOD](../products/tigerpod.md) ou com o telemóvel, nunca precisa de descobrir qual das faces tem o chip: pegue na bobina como pegar, há já um do lado certo para o que está a fazer.
- **Leitura no sítio.** Uma bobina montada num AMS Lite, na lateral de uma Elegoo Centauri Carbon ou de uma FlashForge pode ser lida sem a retirar.
- **Liberdade para os integradores.** Um fabricante de secadores de filamento põe o leitor onde couber — à esquerda ou à direita num secador de uma bobina, entre as duas bobinas num secador duplo — e funciona sempre.
- **Redundância.** Se um chip deixar de responder, o outro continua a identificar a bobina — e serve para reparar o avariado.
- **Colheita a dobrar.** No fim de vida, cada quilo de filamento impresso deixa-lhe **dois chips NTAG reutilizáveis** para projetos DIY ([zero lixo eletrónico](../philosophy/second-life.md)).

Alguns detalhes de implementação:

- Os dois chips são **totalmente independentes — cada um tem o seu próprio UID**; não há antena partilhada. São **escritos em conjunto como um par (Twin Tag)** e mantidos idênticos durante toda a vida da bobina, até às gramas que restam — e contados sempre como **uma** bobina.
- Nas bobinas de fábrica, os chips seguem num **suporte**: uma tira cujas duas pontas se dobram sobre o núcleo de cartão (um chip por ponta), fixas com **adesivo industrial 3M (468MP / 200MP)** — o operador descola e cola, nada mais muda na linha. O desenho do suporte é **público e imprimível em casa**, e a mesma forma é vendida em separado para [recargas](../philosophy/second-life.md), de modo que o chip viaja com o filamento e não com a bobina.

<img src="../assets/carrier-bare.png" width="440" alt="O suporte TigerTag nu — duas antenas NFC independentes, uma em cada ponta" />

*O suporte, nu: as duas antenas independentes são claramente visíveis — uma por ponta dobrada, cada uma com o seu UID.*

### Como os dois chips ficam associados

Nada de central regista o par. Ele é **inferido do que os dois chips contêm**, e o campo que o torna deliberado em vez de coincidência é o **carimbo de data/hora**.

Os 4 bytes na página `0x0C` (deslocamento `+32`) têm uma dupla função: segundos desde 2000-01-01 GMT, *e* o **Twin Tag ID**. Dois chips escritos na mesma sessão recebem exatamente o mesmo valor — esse segundo partilhado é a chave de emparelhamento.

A resolução é de um segundo, pelo que o carimbo, só por si, não é prova: duas bobinas etiquetadas no mesmo segundo também o teriam. O que confirma o par é que a **identidade descritiva também coincide** — os dois chips descrevem uma só bobina, pelo que todos os campos que a descrevem têm de ser idênticos nos dois:

| Campo | Página | Deslocamento |
|---|---|---|
| Twin Tag ID / carimbo de data/hora | `0x0C` | `+32` |
| ID Brand | `0x07` | `+14` |
| ID Material | `0x06` | `+8` |
| ID Aspect 1 · ID Aspect 2 | `0x06` | `+10` · `+11` |
| Color 1 · Color 2 · Color 3 | `0x08` · `0x0D` · `0x0E` | `+16` · `+36` · `+40` |
| ID Product | `0x05` | `+4` |

O que realmente discrimina depende da variante:

- Num **[TigerTag+](../products/tigertag-plus.md)**, o `ID Product` é um id de catálogo real. O mesmo carimbo **e** o mesmo id de produto bastam para chamar-lhe par com quase certeza.
- Num **TigerTag padrão**, o `ID Product` é a constante `0xFFFFFFFF` em todos os chips existentes, pelo que não discrimina nada. Quem faz esse trabalho são a marca, o material, as três cores e os dois aspetos — juntamente com o carimbo.

Duas consequências que convém dizer sem rodeios:

- **Escrever os chips em duas passagens separadas não produz um par.** Recebem dois carimbos diferentes, pelo que nada os associa e o ecossistema conta duas bobinas. É por isso que a aplicação do telemóvel escreve ambos numa única sessão *Dual NFC*, e por isso que o [TigerPOD](../products/tigerpod.md) tem dois leitores virados um para o outro.
- **A assinatura é a única coisa que legitimamente difere.** Num TigerTag+ assina `SHA-256(uid ‖ id_tigertag ‖ id_product)`, e cada chip tem o seu próprio UID — pelo que os dois chips de um par trazem duas assinaturas *diferentes*, por construção. Assinaturas idênticas significariam uma cópia, não um gémeo.

Os deslocamentos acima são citados do [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) de referência (§2.9), que continua a ser a especificação.

### O suporte de recarga, na prática

Dois detalhes que surpreendem as pessoas:

- **Colá-lo é opcional.** O adesivo 3M serve para segurar o suporte enquanto manuseia e guarda a recarga. Quando a recarga está montada na masterspool, o suporte fica **entalado entre a masterspool e o núcleo de cartão** e não se mexe — a cola já não tem nada a fazer.
- **Sai de lá e é reutilizável.** Quando a recarga acaba, recupere o suporte com os seus dois chips, apague-os a partir do [Tiger NFC Connect](../products/tigertag-connect.md) ou do [Tiger Studio](../products/tiger-studio.md) e use-o de novo — noutra bobina ou em qualquer outro projeto NDEF. O filamento vendido com uma Recarga TigerTag deixa-lhe o suporte, não lixo ([segunda vida](../philosophy/second-life.md)).

Onde obter um: ver [comprar os chips](../products/tigertag.md).

## Codificado de fábrica, ou virgem na sua mão

O mesmo chip chega até si de duas formas, e a diferença importa mais do que tudo o resto nesta página:

| | De onde vem | O que tem |
|---|---|---|
| **Pré-codificado** | integrado na linha de produção, dentro de filamento de uma marca parceira | a identidade completa da bobina, pronta a ler |
| **Virgem** | comprado em separado — com a marca TigerTag, ou qualquer chip NTAG de qualquer origem | nada ainda; escreve-o uma vez, em cerca de um minuto |

Os chips vendidos em separado saem **virgens**, com ou sem logótipo. Não é uma limitação: um chip por escrever é o que torna possível a [segunda vida](../philosophy/second-life.md) e é por isso que o protocolo nunca depende de comprar fosse o que fosse.

## Payload

O payload de 144 bytes codifica a [identidade universal](./universal-filament-identity.md) da bobina — marca, material, aspeto/cor, tipo, diâmetro, definições de impressão — como IDs resolvidos face à base de dados de referência partilhada.

O payload ocupa as páginas `0x04` a `0x27`, de 4 bytes cada; todos os
valores de vários bytes estão em big-endian:

| Páginas | Bytes | Conteúdo |
|---|---|---|
| `0x04` | 4 | `ID TigerTag`, o tipo de chip: TigerTag, TigerTag+ ou TigerTag Init |
| `0x05` | 4 | `ID Product`: um produto do catálogo num TigerTag+, `0xFFFFFFFF` num TigerTag |
| `0x06`–`0x07` | 8 | material, dois aspetos, tipo, diâmetro e marca, como IDs da base de dados de referência |
| `0x08` | 4 | cor 1, com alfa |
| `0x09` | 4 | quantidade no fabrico e a respetiva unidade |
| `0x0A`–`0x0B` | 8 | intervalos de temperatura do bico e da base, temperatura e tempo de secagem |
| `0x0C` | 4 | marca temporal, que é também o Twin Tag ID |
| `0x0D`–`0x0E` | 8 | cores 2 e 3, índice e número de tags, um byte reservado |
| `0x0F` | 4 | TD do HueForge, dois bytes reservados |
| `0x10`–`0x16` | 28 | mensagem livre, UTF-8 |
| `0x17` | 4 | quantidade restante, atualizada pela Tiger Scale, um byte reservado |
| `0x18`–`0x27` | 64 | a assinatura (`R` e `S`) num TigerTag+ Certified; caso contrário, livres |

Isto é um mapa, não a especificação. A tabela campo a campo do
[TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide#2-data-structure--tigertag-binary-format)
é a referência: indica o deslocamento exato de cada campo e remete para cada
tabela de IDs. Um parser segue essa tabela.

Para ver este mapa preenchido, o [playground](https://tigersystem.io/playground) constrói um chip a partir de um
produto do catálogo ou dos campos que escolher, ou descodifica o hexadecimal de
um chip que tenha lido, e mostra cada campo com os seus bytes. Tudo funciona no
navegador.

## Leitura e escrita

| Ferramenta | Leitura | Escrita |
|---|---|---|
| [Tiger NFC Connect](../products/tigertag-connect.md) (NFC móvel) | toque no chip — a bobina abre-se no telemóvel | toque em **Make** e toque de novo para escrever; o **Dual NFC** escreve os dois chips de uma bobina numa só sessão |
| [Tiger Studio](../products/tiger-studio.md) + ACR122U/TigerPOD | abre automaticamente a bobina ao ler | escrita guiada e verificada pelo UID |
| [SDK JS](../developers/sdks.md) (`tigertag` no npm) | descodifica o payload de 144 bytes | codifica um novo payload |
| [SDK Python](../developers/sdks.md) | descodifica o payload; `tigertag[verify]` verifica também a assinatura | codifica um novo payload |

As duas aplicações falam com o leitor; os SDKs não. Um SDK descodifica e codifica o **payload** — traga o seu próprio hardware NFC.

## Versões

O payload leva uma versão do formato (tabela de referência `id_version`), para que os leitores possam manter-se compatíveis com chips mais antigos.

---

**◀ Anterior:** [Identidade universal do filamento](./universal-filament-identity.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Inventário e sincronização na nuvem](./inventory-and-cloud-sync.md)

**Ver também:** [TigerTag](../products/tigertag.md), [SDKs](../developers/sdks.md), [Compatibilidade](../compatibility/README.md)
