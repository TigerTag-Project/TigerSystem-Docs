---
sourceHash: 5cd04007f2ce9dc26c3a14e48e06a56af6df7239cd54e6eb2895241d69d789e5
sourcePath: docs/developers/spool-ids-and-qr-links.md
---

# Ids de bobina e ligações QR

> **Ratificado a 2026-11-05 — ainda não implementado.** As aplicações baseiam-se neste contrato. Os pontos ainda em aberto estão enumerados no fim; resolver um deles muda apenas aquilo que ele nomeia. As secções marcadas como **Proposta** ainda não estão ratificadas: não construa sobre elas antes de o estarem.

As regras que todas as aplicações TigerSystem seguem:

1. como uma **bobina sem chip** (TigerData / TigerData+) obtém o seu id;
2. como uma bobina **mantém a sua ligação** quando recebe um chip;
3. como o id de uma bobina é escrito no **código QR** de uma etiqueta impressa, e lido de volta;
4. como uma aplicação **chama uma bobina com valores** (um peso, uma nota) através de uma ligação;
5. como um **produto** obtém a sua própria ligação;
6. como uma ligação responde em **JSON** ou como **ficheiro `.ttag`**.
7. o que transporta uma **etiqueta impressa**, e os seus modelos.

## 1. Ids de bobina

Uma bobina é um documento do inventário da conta, `users/{uid}/inventory/{spoolId}`. O id do documento **é** o id da bobina: uma conta não pode conter duas bobinas com o mesmo id.

| Bobina | Id | Exemplo |
|---|---|---|
| Chip (TigerTag / TigerTag+) | o UID NFC do chip, em hexadecimal maiúsculo, 14 caracteres (o UID de 7 bytes de um NTAG) | `04AB12CD3E4F80` |
| Sem chip, gerado a partir de agora | `TigerData_` + **milissegundos** epoch (13 algarismos) + um número aleatório **0000–9999** (sempre 4 algarismos) | `TigerData_17623456789014213` |
| Sem chip, gerado antes deste contrato | `TigerData_` + 10 algarismos aleatórios | `TigerData_4480517985` |
| Sem chip, prefixo antigo | `CLOUD_` + 10 algarismos aleatórios | `CLOUD_4480517985` |
| Decimal antigo (antiga aplicação Android) | o UID escrito em decimal, em migração para hexadecimal | `1234567890123456` |

Os ids já gerados **nunca são reescritos** por este contrato. Os leitores testam apenas o prefixo (`TigerData_` / `CLOUD_` → sem chip); nenhum deles depende do número de algarismos. O id é um identificador, nada mais: nunca deduza dele uma data de criação. Um UID de 4 bytes (um chip proprietário associado a uma bobina) nunca é o nome de um documento do inventário, pelo que nunca aparece numa ligação.

### Gerar um id sem chip

Todas as aplicações que criam bobinas sem chip (hoje o Tiger Studio, mais tarde a aplicação móvel) geram o id da mesma forma:

1. **Compor** `TigerData_<Date.now()><four random digits>`.
2. **Verificação local** — se o id já estiver no inventário que a aplicação tem (a cópia do listener em tempo real, cache offline incluída) ou no seu `uidMigrationMap`, componha outro. Isto funciona offline.
3. **Escrever**
   - **online:** numa transação que lê primeiro o documento e falha se ele existir; em caso de falha, volte ao passo 1;
   - **offline:** uma escrita simples, colocada em fila pelo Firestore até a rede voltar. Os passos 1 e 2 são a única proteção.

Um `set()` simples sobre um id que já existe **sobrescreve** a bobina que lá estava, sem aviso. É isso que o passo 3 impede.

Os quatro algarismos aleatórios tornam também um novo id sem chip praticamente único **em todas as contas** (cerca de uma colisão a cada 600 anos, com um milhão de bobinas sem chip por ano), pelo que um servidor poderá mais tarde resolver uma ligação para alguém que não seja o dono sem alterar nenhuma etiqueta impressa.

## 2. Manter a ligação quando uma bobina recebe um chip

Programar um chip numa bobina sem chip muda a bobina para o UID do chip. Num **único lote**:

1. escrever a bobina sob o UID do chip (e sob o UID gémeo, no caso de um par gémeo);
2. eliminar o documento `TigerData_…`;
3. escrever o redirecionamento `users/{uid}/uidMigrationMap/{old id}` → `{ hex_uid, migrated_at }`.

O lote faz com que as três operações aconteçam em conjunto ou de todo não aconteçam. O redirecionamento vive em `uidMigrationMap` (a coleção que já faz corresponder os ids decimais antigos ao hexadecimal), nunca como documento de substituição no inventário: tudo o que lê o inventário conta um documento como uma bobina.

## 3. Ligações QR

Uma etiqueta de bobina impressa transporta um código QR com uma ligação para a bobina, **e mais nada** (nem peso, nem nota — os valores impressos ficam desatualizados):

```
https://qr.tigertag.io/<id>
```

Nada é impresso em claro junto ao código: nem id, nem ligação. O código QR é o caminho de volta para a bobina.

`<id>` é o id da bobina **sem o seu prefixo**:

| Bobina | Ligação |
|---|---|
| Chip | `https://qr.tigertag.io/04ab12cd3e4f80` |
| Sem chip (nova) | `https://qr.tigertag.io/17623456789014213` |
| Sem chip (antes deste contrato) | `https://qr.tigertag.io/4480517985` |
| `CLOUD_` | **sem ligação QR** — a etiqueta é impressa sem código QR |
| Decimal antigo | **sem ligação QR** — migre primeiro a bobina para hexadecimal |

### Codificação

- A ligação inteira está em **minúsculas**, id incluído: `https://qr.tigertag.io/04ab12cd3e4f80`. Testado a 2026-11-07: a câmara do iPhone abre uma ligação em qualquer dos casos, mas a câmara da Samsung (Galaxy S24) mostra uma ligação `HTTPS://` em maiúsculas como texto simples e só abre uma em minúsculas.
- Um único segmento em modo **byte**. Um esquema em minúsculas não pode usar o modo alfanumérico, e dividir a ligação em segmentos não poupa nada (medido: todas as variantes são 29 × 29).
- Correção de erros **M** (15 %): as etiquetas ficam riscadas e dobradas.
- Resultado: **29 × 29 módulos** para todas as ligações de bobina e de produto. Desenhe cada módulo sobre um número inteiro de pontos da impressora, com a zona de silêncio normalizada de 4 módulos.

### Ler uma ligação de volta

Os leitores extraem o id da ligação **offline**: uma aplicação que lê uma etiqueta nunca precisa do site. Leem o caminho sem distinguir maiúsculas de minúsculas, ignoram uma `/` final e resolvem-no pela sua forma:

| Caminho | Id da bobina |
|---|---|
| 17 algarismos | `TigerData_<17 digits>` |
| 10 algarismos | `TigerData_<10 digits>` |
| 14 caracteres hexadecimais | o UID, em maiúsculas |
| 13 caracteres hexadecimais a começar por `4` | um UID NTAG truncado: `0` + os 13 caracteres ([regra de reparação](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/issues/146)) |
| `p/` + o `id_product`: 10 algarismos decimais (forma impressa) ou 8 caracteres hexadecimais (etiquetas antigas) | um produto — [secção 5](#5-ligações-de-produto) |

Uma terminação `.JSON` ou `.TTAG` pede a resposta para ferramentas — [secção 6](#6-respostas-json-e-ttag).

As aplicações **escrevem** a forma curta acima, mas os leitores também **aceitam a forma longa**: o prefixo `TigerData` em maiúsculas ou minúsculas, seguido de `_` ou `-`, e depois os 17 ou 10 algarismos — `TigerData_17623456789014213`, `TigerData-17623456789014213`, `TIGERDATA-17623456789014213` e `tigerdata_4480517985` resolvem todos para a mesma bobina. Uma ligação escrita ou partilhada à mão continua a funcionar. O prefixo `CLOUD` não é aceite em nenhuma das duas formas.

Um UID pode ser composto só por algarismos, mas tem 14 caracteres, nunca 17 ou 10, pelo que o comprimento decide sempre. Nenhum id decimal antigo chega a um leitor, já que nenhum é alguma vez impresso. Qualquer **outra forma** é uma etiqueta de uma versão mais recente: o leitor di-lo («atualize a aplicação») em vez de falhar. Qualquer outro tipo de coisa tem a sua própria pasta, uma letra e uma `/` (`p/` para um produto, mais tarde `r/` para um rack), pelo que nunca pode colidir com ligações de bobina já impressas.

### Resolver a bobina

1. Procure o id **no próprio inventário do visitante com sessão iniciada**.
2. Não está lá → procure-o no `uidMigrationMap` do visitante e siga o redirecionamento.
3. Um par gémeo tem uma única etiqueta, com o UID principal; qualquer um dos dois UID abre a bobina.
4. Uma bobina eliminada (`deleted: true`) abre como «eliminada», não como um erro.

   **O dono vê a bobina na própria página**, lida no navegador a partir do seu próprio documento de inventário (as regras restringem-no a ele): o produto (fotografia sobre a sua cor), marca, material, nível, peso restante face à capacidade, temperaturas do bocal, da mesa e de secagem, diâmetro, rack e slot, peso da bobina vazia. Dois botões: «Open in Tiger Studio» (`https://studio.tigersystem.io/?spool=<docId>`, com os valores da ligação) e «See the product page». Um dono com sessão iniciada no Studio Web no dispositivo, mas não no site, é enviado para o Studio Web: o site não consegue ler o documento sem a sua própria sessão. *(2026-11-07.)* O dono pode alterar aí o peso e a nota, com a mesma escrita que o Studio: `weight_available` ou `message` (no máximo 28 bytes UTF-8), `updatedAt` (hora do servidor), `needUpdateAt` (hora do servidor) num formato com chip, o gémeo no mesmo lote. O contentor (bobina vazia) também pode ser alterado aí, tal como o Studio o escreve: `container_id`, `container_weight` (com a correção própria da conta), `updatedAt`, o gémeo no mesmo lote. A página tem um botão para terminar sessão. *(2026-11-08.)*

5. Quem **não é o dono** — sem sessão iniciada, outra conta, um amigo aceite incluído — é **enviado para o produto** da bobina, e nunca lhe é mostrada a bobina: o servidor encontra a bobina pelo seu id em todas as contas (um índice sobre o id da bobina), lê o seu `id_product` e redireciona para a ligação de produto da [secção 5](#5-ligações-de-produto). O mesmo id em duas contas com produtos diferentes (um chip reescrito cujo documento antigo outra conta manteve) → o produto do documento atualizado em último lugar (`updatedAt`), correto em praticamente todos os casos. Sem produto ou sem correspondência → uma página a dizer que a bobina é privada, com «Start my inventory». A pesquisa só é feita para essas leituras, pelo que o seu custo acompanha as leituras, não o número de contas. *(Ratificado a 2026-11-06; a regra de conflito a 2026-11-07.)*

   Um visitante **sem sessão** (nenhum início de sessão encontrado no dispositivo) não é redirecionado: a página deixa-o escolher. Mostra um cartão do produto da bobina (apenas o produto público, nunca para uma bobina privada), inicia sessão ali mesmo (depois de iniciada a sessão, a verificação do dono volta a ser feita e o dono chega à bobina) ou segue para a página do produto. Alguém com sessão iniciada que não é o dono é enviado para o produto, como acima. *(2026-11-07.)*

   **De quem é a bobina.** Qualquer pessoa que lê uma bobina, com ou sem sessão iniciada, vê o seu dono: o nome de apresentação e a fotografia de `userProfiles` da conta cujo documento foi atualizado em último lugar, mesmo quando o perfil não é público e mesmo para uma bobina sem produto, para que quem encontrar uma bobina saiba a quem pertence. Nunca o uid nem o e-mail. *(2026-11-08.)*

**Privacidade:** conhecer um id nunca mostra uma bobina. Uma ligação lida abre uma bobina apenas para o seu dono; dentro das aplicações, uma bobina só é mostrada a quem as regras do Firestore já permitem lê-la (o dono, um amigo aceite, um inventário público). Os ids contêm um carimbo temporal e podem ser adivinhados; isso nunca pode importar. O produto de uma bobina não é privado: está impresso na etiqueta, e um chip TigerTag+ transporta-o em claro para qualquer telemóvel com NFC. O peso, a nota e o rack nunca saem; o dono aparece apenas como nome de apresentação e fotografia (acima). Uma leitura é contada uma vez por separador do navegador e por bobina (recarregar não é uma nova leitura), com o seu produto, marca, material e um local ao nível da cidade, nunca o id da bobina. O relatório de leitura transporta também o endereço IP do visitante, guardado contra inundações de pedidos e para análise: só é mostrado no histórico de administração, nunca às marcas, e serve para verificar a cidade indicada pelo edge. É guardado durante um ano, apenas por segurança. Uma leitura feita por um visitante com sessão iniciada fica associada à sua conta.

## 4. Chamar uma bobina com valores

Uma aplicação pode construir uma ligação que abre uma bobina **e propõe valores**, com parâmetros de consulta comuns (estas ligações nunca são impressas, pelo que a legibilidade prevalece sobre o tamanho do QR):

```
https://qr.tigertag.io/04AB12CD3E4F80?weight=640&note=Opened%20in%20June
```

### Parâmetros

| Parâmetro | Valor | Limite |
|---|---|---|
| `weight` | peso líquido do filamento, em gramas | número inteiro, de 0 até à capacidade da bobina |
| `note` | a nota da bobina (o campo `message`) | texto simples, no máximo 28 bytes UTF-8 (o espaço do chip) |

Os nomes não distinguem maiúsculas de minúsculas. Um parâmetro desconhecido é ignorado, nunca é um erro. Um valor fora do seu limite é recusado. Os novos parâmetros são acrescentados a esta tabela, nunca inventados por uma única aplicação.

### Quem os pode aplicar

| Situação | O que acontece |
|---|---|
| Sem sessão iniciada | Valores **recusados**. A ligação propõe iniciar sessão e depois abre a bobina sem eles. |
| Com sessão iniciada, não é o dono (bobina de um amigo incluída) | Valores **recusados**. A bobina abre se as regras o permitirem. |
| Com sessão iniciada, é o dono | Studio: a bobina abre com os valores **pré-preenchidos**, e **um gesto** guarda-os («Update: 640 g»). A página do Hub: um peso que cabe na capacidade e é diferente do guardado é **guardado de imediato**, na bobina e na sua gémea num só lote, e depois uma faixa propõe repor o peso anterior («Revert to 772 g»), para o caso de uma ligação antiga lida de novo. *(Hub, 2026-11-08.)* |

Uma ligação de outra pessoa nunca escreve: os valores aplicam-se apenas à própria bobina do dono. Uma aplicação que tenha de escrever sem confirmação (uma balança que atualiza o peso continuamente, uma integração) não usa ligações: escreve através da conta do utilizador, ao abrigo das regras do Firestore ([guia de integração](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)).

## 5. Ligações de produto

> **Ratificado a 2026-11-06.**

Um produto — um filamento do catálogo, seja quem for o dono de uma bobina dele — tem a sua própria ligação, para a embalagem, a prateleira de uma loja, um showroom ou um catálogo impresso:

```
https://qr.tigertag.io/p/<id_product>
```

- `<id_product>` é escrito em **decimal, sempre com 10 algarismos**, completado com zeros à esquerda: um `id_product` nunca passa de 10 algarismos (o maior é `4294967295`). Exemplos: produto `2855882328` → `https://qr.tigertag.io/p/2855882328`; produto `10303748` → `https://qr.tigertag.io/p/0010303748`. **29 × 29** módulos.
- As etiquetas impressas antes têm a forma anterior, o `id_product` em **8 caracteres hexadecimais** minúsculos (`p/aa394e58`); continua legível para sempre (ver abaixo).
- Um id que não está, ou já não está, no catálogo — `p/0000000000` e `p/4294967295` («sem produto», nunca impressos), um id desconhecido, um produto arquivado, eliminado ou fundido — abre **uma única página de «produto esquecido»**: este filamento já não está no catálogo, com a pesquisa. Um só estado para todos, `404` (a página e as respostas `.json` / `.ttag` da mesma forma): a razão pela qual um produto desapareceu não interessa a quem lê. Um `id_product` nunca é atribuído a outro produto: uma etiqueta já colada nunca pode abrir o filamento errado.
- As ligações são servidas pelo **Hub** (`tigersystem.io`): `qr.tigertag.io` aponta para ele. A página é a página de catálogo do Hub (abaixo); as respostas `.JSON` e `.TTAG` são rotas da API do Hub que leem o catálogo (em cache).
- Uma etiqueta de bobina nunca repete o seu produto: a ligação da bobina já conduz a ele ([secção 3](#resolver-a-bobina)).

### Ler uma ligação de produto

Uma ligação de produto bem formada tem um de dois comprimentos, pelo que nunca pode ser mal lida:

1. **10 algarismos** → decimal (`p/2673739332`, `p/0010303748`).
2. **8 caracteres** `0-9` / `a-f` → hexadecimal, a forma impressa anterior, ainda aceite (`p/9f5e0644` abre o mesmo produto que `p/2673739332`).

Como tolerância, sem garantia, um decimal escrito à mão com outro comprimento é lido em decimal, exceto exatamente 8 algarismos: esses são lidos primeiro em hexadecimal, depois em decimal se esse produto não existir. Um valor acima de `4294967295` é uma ligação desconhecida. `0` e `4294967295`, em qualquer forma, significam «sem produto» (`404`). As terminações `.json` e `.ttag` funcionam em todas as formas, sem distinguir maiúsculas de minúsculas.

### A página que abre

`p/…` redireciona (`302`) para a **página de catálogo existente** do produto, `tigersystem.io/<lang>/catalog/<id_product in decimal>`, na língua do telemóvel. Não há uma página de leitura à parte: a página de catálogo é concebida **primeiro para o telemóvel** (responsiva), já que a maioria das suas visitas vem de uma leitura — fotografia e amostra de cor, marca, material e nome da cor no topo, as definições de impressão legíveis num relance, depois o resto da página.

## 6. Respostas JSON e .TTAG

> **Ratificado a 2026-11-06.**

Uma ligação que termina em `.JSON` (em maiúsculas ou minúsculas) — ou enviada com `Accept: application/json` — responde em JSON em vez de uma página. Uma ligação que termina em `.TTAG` responde com o mesmo registo como [ficheiro `.ttag`](./ttag-format.md) para transferir (`Content-Disposition: attachment`). São endereços para ferramentas, nunca impressos.

A mesma lógica que uma leitura ([resolver a bobina](#resolver-a-bobina)): o dono recebe a bobina; qualquer outra pessoa, o seu produto.

| Ligação | O dono (`Authorization: Bearer <Firebase ID token>`) | Qualquer outra pessoa (sem sessão iniciada, outra conta, um amigo) |
|---|---|---|
| `…/p/2855882328.json` | o registo do produto | o mesmo |
| `…/p/2855882328.ttag` | o produto como ficheiro `.ttag` | o mesmo |
| `…/04ab12cd3e4f80.json` | a bobina | `303` → `…/p/<id_product>.json`; sem produto do catálogo (um TigerData, um TigerTag de maker) → `404` |
| `…/04ab12cd3e4f80.ttag` | a bobina como ficheiro `.ttag` | `303` → `…/p/<id_product>.ttag`; sem produto do catálogo → `404` |

Sem um produto do catálogo, nada da bobina é respondido, nem sequer o seu material: o `404` corresponde à página de «bobina privada» de uma leitura.

- **Bobina:** um [ficheiro `.ttag`](./ttag-format.md) com esse único registo, o documento do inventário tal como o Firestore o guarda. Transporta `id_product`; uma ferramenta que queira o produto chama a seguir `…/p/<id_product>.json`.
- **Produto:** o registo do catálogo tal como a API de produtos o devolve, na língua de `?lang=` (inglês por predefinição). Em cache no servidor e permitido a partir de qualquer site.
- Uma resposta de bobina nunca fica em cache: depende de quem pergunta.
- Aberto no Tiger Studio, o `.ttag` de uma bobina é importado no modo **Restore** (a bobina tal como estava, chip e cópia de segurança incluídos); o `.ttag` de um produto é importado no modo **Import**, como um novo TigerData+ com um id novo.
- Um pedido JSON ou `.TTAG` nunca escreve: os valores da ligação (`?weight=`, `?note=`) são aí ignorados.

## 7. Etiquetas impressas

Todas as aplicações imprimem as mesmas etiquetas: dois tipos, um só conjunto de modelos, para que uma etiqueta impressa a partir do Tiger Studio, da aplicação móvel ou do site tenha o mesmo aspeto e seja lida da mesma forma.

| Etiqueta | O seu código QR | Impressa para |
|---|---|---|
| **Bobina** | a ligação da bobina ([secção 3](#3-ligações-qr)) | qualquer bobina que tenha uma ligação QR (não `CLOUD_`, não decimal antigo) |
| **Produto** (cartão de amostra) | a ligação do produto ([secção 5](#5-ligações-de-produto)) | uma bobina ou um produto do catálogo com um `id_product` real (TigerTag+, TigerData+) |

O dono que lê uma etiqueta de bobina recebe a bobina; qualquer outra pessoa, o seu produto ([resolver a bobina](#resolver-a-bobina)). Uma etiqueta de produto abre o produto para todos: é a etiqueta para uma amostra, uma prateleira ou um showroom.

### O que uma etiqueta transporta

- a marca, onde ficaria o logótipo de um fabricante (os logótipos de fabricante virão mais tarde);
- a série a branco sobre uma barra preta (`PLA Rainbow`; o material quando não há série);
- o nome da cor e o(s) seu(s) código(s) hexadecimal(ais) (`#F2D066`, até três nos modelos largos);
- numa etiqueta de bobina, o nome da etiqueta no canto superior direito, como uma pílula contornada: `TigerQR+` quando a sua referência é um produto do catálogo (um `id_product` real) ou um chip TigerTag+, caso contrário `TigerQR` (um chip TigerTag sem produto dá, portanto, `TigerQR`); uma etiqueta de produto (filamento) transporta sempre `TigerQR+`. Tal como em TigerTag e TigerTag+, o `+` significa ligado ao catálogo. A pílula não diz se a bobina tem chip;
- até **quatro campos de valor**, escolhidos pelo utilizador entre: intervalo do bocal, intervalo da mesa, secagem (temperatura · tempo), TD, diâmetro;
- o código QR.

Apenas o que não muda: nunca o peso restante, a nota, o rack ou o dono. Nada em claro junto ao código QR ([secção 3](#3-ligações-qr)).

### Modelos

Oito modelos, os tamanhos e disposições habituais das etiquetas de bobina:

| Modelo | Tamanho (largura × altura) | Disposição |
|---|---|---|
| Classic (predefinido) | 40 × 30 mm | marca, barra, cor + hex, quatro campos, QR no canto inferior direito |
| Wide | 50 × 30 mm | o Classic, com a barra mais larga |
| Compact | 40 × 25 mm | marca, QR à esquerda, barra, cor, hex — sem campos |
| Slim | 40 × 12 mm | QR à esquerda, marca, barra, cor — sem campos |
| Slicer-friendly | 40 × 30 mm | marca, série, cor empilhadas em grande, QR grande à direita — sem campos |
| Vertical | 30 × 40 mm | marca, barra, cor em grande, hex, um traço, campos empilhados à esquerda, QR no canto inferior direito |
| Vertical bold | 30 × 40 mm | marca, barra a toda a largura, cor, um traço, QR centrado por baixo — sem campos |
| Vertical compact | 25 × 40 mm | marca, barra, cor, hex, um traço, QR grande por baixo — sem campos |

Cada modelo é um SVG paginado em décimas de milímetro e escalado para os pontos da impressora. O código QR ocupa a mesma caixa que nas etiquetas de bobina habituais (≈ 14 mm no Classic), com um número inteiro de pontos da impressora por módulo: o mais próximo, arredondado para cima quando isso fica dentro de 6 % da caixa. As margens brancas da etiqueta são a sua zona de silêncio. A 203 dpi, um código de 29 × 29 tem 4 pontos por módulo no Classic (≈ 14,5 mm).

### Saída

- **PDF**, **PNG** (à resolução da impressora) e **SVG**, para que qualquer impressora funcione, através da sua própria aplicação se for preciso;
- a impressão direta em impressoras de etiquetas (Brother QL, Niimbot, Phomemo) virá mais tarde, impressora a impressora, com os mesmos modelos.

## Pontos em aberto

- **Ligações de aplicação.** O iOS (`apple-app-site-association`) e o Android (filtros de intenção) comparam os caminhos distinguindo maiúsculas de minúsculas por predefinição: as ligações são impressas em minúsculas, mas uma ligação escrita ou partilhada à mão pode não o estar, pelo que a aplicação móvel declara uma comparação que não distingue maiúsculas de minúsculas (iOS) e filtra o caminho no código (Android).
- **Domínio.** `qr.tigertag.io` fica impresso para sempre: renove `tigertag.io` a longo prazo.

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [Identidade universal do filamento](../concepts/universal-filament-identity.md), [Inventário e sincronização na nuvem](../concepts/inventory-and-cloud-sync.md), [Visão geral para programadores](./README.md)
