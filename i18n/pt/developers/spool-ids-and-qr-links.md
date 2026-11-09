---
sourceHash: bbdf69421abaee7725f7305f1447d7321fd2a6cd1861f4569bd5adbe88e7d828
sourcePath: docs/developers/spool-ids-and-qr-links.md
---

# Ids de bobina e links QR

> **Ratificado em 2026-11-05 — ainda não implementado.** Os aplicativos se baseiam
> neste contrato. Os pontos ainda em aberto estão listados no final; resolver um
> deles muda apenas o que ele nomeia. As seções marcadas como **Proposto** ainda
> não estão ratificadas: não construa sobre elas antes que estejam.

As regras que todo aplicativo TigerSystem segue:

1. como uma **bobina sem chip** (TigerData / TigerData+) recebe o seu id;
2. como uma bobina **mantém o seu link** quando recebe um chip;
3. como o id de uma bobina é gravado no **código QR** de uma etiqueta impressa,
   e lido de volta;
4. como um aplicativo **chama uma bobina com valores** (um peso, uma nota) por
   meio de um link;
5. como um **produto** recebe o seu próprio link;
6. como um link responde em **JSON** ou como **arquivo `.ttag`**.
7. o que uma **etiqueta impressa** carrega, e os seus modelos.

## 1. Ids de bobina

Uma bobina é um documento do inventário da conta,
`users/{uid}/inventory/{spoolId}`. O id do documento **é** o id da bobina: uma
conta não pode ter duas bobinas com o mesmo id.

| Bobina | Id | Exemplo |
|---|---|---|
| Chip (TigerTag / TigerTag+) | o UID NFC do chip, em hexadecimal maiúsculo, 14 caracteres (o UID de 7 bytes de um NTAG) | `04AB12CD3E4F80` |
| Sem chip, gerado a partir de agora | `TigerData_` + **milissegundos** epoch (13 dígitos) + um número aleatório **0000–9999** (sempre 4 dígitos) | `TigerData_17623456789014213` |
| Sem chip, gerado antes deste contrato | `TigerData_` + 10 dígitos aleatórios | `TigerData_4480517985` |
| Sem chip, prefixo legado | `CLOUD_` + 10 dígitos aleatórios | `CLOUD_4480517985` |
| Decimal legado (antigo aplicativo Android) | o UID escrito em decimal, em migração para hexadecimal | `1234567890123456` |

Ids já gerados **nunca são reescritos** por este contrato. Os leitores testam
apenas o prefixo (`TigerData_` / `CLOUD_` → sem chip); nenhum deles depende do
número de dígitos. O id é um identificador, nada mais: nunca deduza dele uma data
de criação. Um UID de 4 bytes (um chip proprietário vinculado a uma bobina) nunca
é o nome de um documento do inventário, então nunca aparece em um link.

### Gerar um id sem chip

Todo aplicativo que cria bobinas sem chip (hoje o Tiger Studio, mais tarde o
aplicativo móvel) gera o id da mesma forma:

1. **Compor** `TigerData_<Date.now()><four random digits>`.
2. **Verificação local** — se o id já estiver no inventário que o aplicativo tem
   (a cópia do listener em tempo real, cache offline incluído) ou no seu
   `uidMigrationMap`, componha outro. Isso funciona offline.
3. **Gravar**
   - **online:** em uma transação que lê o documento primeiro e falha se ele
     existir; em caso de falha, volte ao passo 1;
   - **offline:** uma gravação simples, enfileirada pelo Firestore até a rede
     voltar. Os passos 1 e 2 são a única proteção.

Um `set()` simples em um id que já existe **sobrescreve** a bobina que já estava
lá, em silêncio. É isso que o passo 3 impede.

Os quatro dígitos aleatórios também tornam um novo id sem chip praticamente
único **entre todas as contas** (cerca de uma colisão a cada 600 anos com um
milhão de bobinas sem chip por ano), de modo que um servidor possa mais tarde
resolver um link para alguém que não seja o dono sem mudar nenhuma etiqueta
impressa.

## 2. Manter o link quando uma bobina recebe um chip

Programar um chip em uma bobina sem chip move a bobina para o UID do chip. Em
**um único lote**:

1. gravar a bobina sob o UID do chip (e sob o UID gêmeo, no caso de um par
   gêmeo);
2. excluir o documento `TigerData_…`;
3. gravar o redirecionamento `users/{uid}/uidMigrationMap/{old id}` →
   `{ hex_uid, migrated_at }`.

O lote faz com que as três coisas aconteçam juntas ou não aconteçam. O
redirecionamento fica em `uidMigrationMap` (a coleção que já mapeia os ids
decimais legados para hexadecimal), nunca como documento de stub no inventário:
tudo o que lê o inventário conta um documento como uma bobina.

## 3. Links QR

Uma etiqueta de bobina impressa carrega um código QR com um link para a bobina,
**e nada mais** (nem peso, nem nota — valores impressos ficam desatualizados):

```
https://qr.tigertag.io/<id>
```

Nada é impresso em texto legível ao lado do código: nem id, nem link. O código QR
é o caminho de volta até a bobina.

`<id>` é o id da bobina **sem o seu prefixo**:

| Bobina | Link |
|---|---|
| Chip | `https://qr.tigertag.io/04ab12cd3e4f80` |
| Sem chip (nova) | `https://qr.tigertag.io/17623456789014213` |
| Sem chip (antes deste contrato) | `https://qr.tigertag.io/4480517985` |
| `CLOUD_` | **sem link QR** — a etiqueta é impressa sem código QR |
| Decimal legado | **sem link QR** — migre a bobina para hexadecimal primeiro |

### Codificação

- O link inteiro fica em **minúsculas**, o id incluído: `https://qr.tigertag.io/04ab12cd3e4f80`.
  Testado em 2026-11-07: a câmera do iPhone abre um link em qualquer um dos
  casos, mas a câmera da Samsung (Galaxy S24) mostra um link `HTTPS://` em
  maiúsculas como texto simples e só abre um em minúsculas.
- Um único segmento em modo **byte**. Um esquema em minúsculas não pode usar o
  modo alfanumérico, e dividir o link em segmentos não economiza nada (medido:
  todas as variantes são 29 × 29).
- Correção de erros **M** (15 %): etiquetas ficam riscadas e dobradas.
- Resultado: **29 × 29 módulos** para todo link de bobina e de produto. Desenhe
  cada módulo sobre um número inteiro de pontos da impressora, com a zona de
  silêncio padrão de 4 módulos.

### Ler um link de volta

Os leitores extraem o id do link **offline**: um aplicativo que escaneia uma
etiqueta nunca precisa do site. Eles leem o caminho sem diferenciar maiúsculas de
minúsculas, ignoram uma `/` final e o resolvem pelo seu formato:

| Caminho | Id da bobina |
|---|---|
| 17 dígitos | `TigerData_<17 digits>` |
| 10 dígitos | `TigerData_<10 digits>` |
| 14 caracteres hexadecimais | o UID, em maiúsculas |
| 13 caracteres hexadecimais começando com `4` | um UID NTAG truncado: `0` + os 13 caracteres ([regra de reparo](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/issues/146)) |
| `p/` + 8 caracteres hexadecimais | um produto — [seção 5](#5-links-de-produto) |

Uma terminação `.JSON` ou `.TTAG` pede a resposta para ferramentas — [seção 6](#6-respostas-json-e-ttag).

Os aplicativos **gravam** a forma curta acima, mas os leitores também **aceitam a
forma longa**: o prefixo `TigerData` em maiúsculas ou minúsculas, seguido de `_`
ou `-`, e depois os 17 ou 10 dígitos — `TigerData_17623456789014213`,
`TigerData-17623456789014213`, `TIGERDATA-17623456789014213` e
`tigerdata_4480517985` resolvem todos para a mesma bobina. Um link digitado ou
compartilhado à mão continua funcionando. O prefixo `CLOUD` não é aceito em
nenhuma das duas formas.

Um UID pode ser só de dígitos, mas tem 14 caracteres, nunca 17 ou 10, então o
comprimento sempre decide. Nenhum id decimal legado chega a um leitor, já que
nenhum é impresso. Qualquer **outro formato** é uma etiqueta de uma versão mais
nova: o leitor diz isso (“atualize o aplicativo”) em vez de falhar. Qualquer
outro tipo de coisa tem a sua própria pasta, uma letra e uma `/` (`p/` para um
produto, mais tarde `r/` para um rack), de modo que nunca pode colidir com os
links de bobina já impressos.

### Resolver a bobina

1. Procure o id **no próprio inventário do visitante conectado**.
2. Não está lá → procure-o no `uidMigrationMap` do visitante e siga o
   redirecionamento.
3. Um par gêmeo tem uma só etiqueta, com o UID principal; qualquer um dos dois
   UIDs abre a bobina.
4. Uma bobina excluída (`deleted: true`) abre como “excluída”, não como um erro.

   **O dono vê a bobina na própria página**, lida no navegador a partir do seu
   próprio documento de inventário (as regras o restringem a ele): o produto
   (foto sobre a sua cor), marca, material, nível, peso restante sobre a
   capacidade, temperaturas de bico, mesa e secagem, diâmetro, rack e slot, peso
   da bobina vazia. Dois botões: “Open in Tiger Studio”
   (`https://studio.tigersystem.io/?spool=<docId>`, com os valores do link) e
   “See the product page”. Um dono conectado ao Studio Web no dispositivo, mas
   não ao site, é enviado ao Studio Web: o site não consegue ler o documento sem
   a sua própria sessão. *(2026-11-07.)* O dono pode alterar ali o peso e a nota,
   com a mesma gravação do Studio: `weight_available` ou `message` (no máximo 28
   bytes UTF-8), `updatedAt` (hora do servidor), `needUpdateAt` (hora do
   servidor) em um formato com chip, o gêmeo no mesmo lote. O carretel (bobina
   vazia) também pode ser alterado ali, do jeito que o Studio o grava:
   `container_id`, `container_weight` (com a correção própria da conta),
   `updatedAt`, o gêmeo no mesmo lote. A página tem um botão para sair.
   *(2026-11-08.)*

5. Quem **não é o dono** — não conectado, outra conta, um amigo aceito
   incluído — é **enviado ao produto** da bobina, e a bobina nunca lhe é
   mostrada: o servidor encontra a bobina pelo seu id entre as contas (um índice
   sobre o id da bobina), lê o seu `id_product` e redireciona para o link de
   produto da [seção 5](#5-links-de-produto). O mesmo id em duas contas com
   produtos diferentes (um chip regravado cujo documento antigo outra conta
   manteve) → o produto do documento atualizado por último (`updatedAt`),
   correto em praticamente todos os casos. Sem produto ou sem correspondência →
   uma página dizendo que a bobina é privada, com “Start my inventory”. A busca
   só é feita para esses escaneamentos, então o seu custo acompanha os
   escaneamentos, não o número de contas. *(Ratificado em 2026-11-06; a regra de
   conflito em 2026-11-07.)*

   Um visitante **sem sessão** (nenhum login encontrado no dispositivo) não é
   redirecionado: a página o deixa escolher. Ela mostra um cartão do produto da
   bobina (apenas o produto público, nunca para uma bobina privada), faz o login
   ali mesmo (depois do login, a verificação do dono é feita de novo e o dono
   chega à bobina) ou segue para a página do produto. Alguém conectado que não é
   o dono é enviado ao produto, como acima. *(2026-11-07.)*

   **De quem é a bobina.** Qualquer pessoa que escaneia uma bobina, conectada ou
   não, vê o seu dono: o nome de exibição e a foto de `userProfiles` da conta
   cujo documento foi atualizado por último, mesmo quando o perfil não é público
   e mesmo para uma bobina sem produto, para que quem encontrar uma bobina saiba
   a quem ela pertence. Nunca o uid nem o e-mail. *(2026-11-08.)*

**Privacidade:** conhecer um id nunca mostra uma bobina. Um link escaneado abre
uma bobina apenas para o seu dono; dentro dos aplicativos, uma bobina só é
mostrada a quem as regras do Firestore já permitem lê-la (o dono, um amigo
aceito, um inventário público). Os ids contêm um carimbo de data e hora e podem
ser adivinhados; isso nunca deve importar. O produto de uma bobina não é
privado: ele está impresso na etiqueta, e um chip TigerTag+ o carrega em texto
legível para qualquer celular com NFC. O peso, a nota e o rack nunca saem; o
dono aparece apenas como nome de exibição e foto (acima). Um escaneamento é
contado uma vez por aba do navegador e bobina (recarregar não é um novo
escaneamento), com o seu produto, marca, material e um local no nível de cidade,
nunca o id da bobina. O relatório de escaneamento também traz o endereço IP do
visitante, guardado contra inundações de requisições e para análise: ele só é
mostrado no histórico de administração, nunca às marcas, e é usado para
verificar a cidade informada pela edge. Ele é guardado por um ano, apenas para
segurança. Um escaneamento feito por um visitante conectado é vinculado à sua
conta.

## 4. Chamar uma bobina com valores

Um aplicativo pode montar um link que abre uma bobina **e propõe valores**, com
parâmetros de consulta comuns (esses links nunca são impressos, então a
legibilidade vale mais que o tamanho do QR):

```
https://qr.tigertag.io/04AB12CD3E4F80?weight=640&note=Opened%20in%20June
```

### Parâmetros

| Parâmetro | Valor | Limite |
|---|---|---|
| `weight` | peso líquido do filamento, em gramas | número inteiro, de 0 até a capacidade da bobina |
| `note` | a nota da bobina (o campo `message`) | texto simples, no máximo 28 bytes UTF-8 (o espaço do chip) |

Os nomes não diferenciam maiúsculas de minúsculas. Um parâmetro desconhecido é
ignorado, nunca é um erro. Um valor fora do seu limite é recusado. Novos
parâmetros são adicionados a esta tabela, nunca inventados por um aplicativo
sozinho.

### Quem pode aplicá-los

| Situação | O que acontece |
|---|---|
| Não conectado | Valores **recusados**. O link oferece o login e depois abre a bobina sem eles. |
| Conectado, não o dono (bobina de um amigo incluída) | Valores **recusados**. A bobina abre se as regras permitirem. |
| Conectado, o dono | Studio: a bobina abre com os valores **pré-preenchidos**, e **um gesto** os salva (“Update: 640 g”). A página do Hub: um peso que cabe na capacidade e difere do armazenado é **salvo na hora**, na bobina e na sua gêmea em um só lote, e então um banner oferece restaurar o peso anterior (“Revert to 772 g”), para o caso de um link antigo escaneado de novo. *(Hub, 2026-11-08.)* |

Um link de qualquer outra pessoa nunca grava: os valores só se aplicam à própria
bobina do dono. Um aplicativo que precisa gravar sem confirmação (uma balança
que atualiza o peso continuamente, uma integração) não usa links: ele grava pela
conta do usuário, sob as regras do Firestore
([guia de integração](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)).

## 5. Links de produto

> **Ratificado em 2026-11-06.**

Um produto — um filamento do catálogo, seja quem for o dono de uma bobina dele —
tem o seu próprio link, para a embalagem, a prateleira de uma loja, um showroom
ou um catálogo impresso:

```
https://qr.tigertag.io/p/<id_product>
```

- `<id_product>` é escrito em **hexadecimal, sempre com 8 caracteres**, em
  minúsculas, completado com zeros: os 4 bytes como estão no chip, para que um
  firmware ou um leitor NFC monte o link sem conversão. Exemplo: produto
  `2855882328` → `https://qr.tigertag.io/p/aa394e58`, **29 × 29** módulos.
- A forma decimal fica onde as pessoas veem o número — o catálogo
  (`tigersystem.io/<lang>/catalog/2855882328`), um código de barras Code 128 — e
  nunca entra em um link `qr.tigertag.io`.
- Um id que não está, ou não está mais, no catálogo — `p/00000000` e
  `p/ffffffff` (“sem produto”, nunca impressos), um id desconhecido, um produto
  arquivado, excluído ou mesclado — abre **uma única página de “produto
  esquecido”**: este filamento não está mais no catálogo, com a busca. Um só
  status para todos, `404` (a página e as respostas `.json` / `.ttag` da mesma
  forma): por que um produto sumiu não importa para quem lê. Um `id_product`
  nunca é dado a outro produto: uma etiqueta já colada nunca pode abrir o
  filamento errado.
- Os links são servidos pelo **Hub** (`tigersystem.io`): `qr.tigertag.io` aponta
  para ele. A página é a página de catálogo do Hub (abaixo); as respostas
  `.JSON` e `.TTAG` são rotas da API do Hub que leem o catálogo (em cache).
- Uma etiqueta de bobina nunca repete o seu produto: o link da bobina já leva a
  ele ([seção 3](#resolver-a-bobina)).

### A página que ele abre

`p/…` redireciona (`302`) para a **página de catálogo existente** do produto,
`tigersystem.io/<lang>/catalog/<id_product in decimal>`, no idioma do celular.
Não há uma página de escaneamento separada: a página de catálogo é feita
**primeiro para o celular** (responsiva), já que a maioria das suas visitas vem
de um escaneamento — foto e amostra de cor, marca, material e nome da cor no
topo, as configurações de impressão legíveis num relance, depois o resto da
página.

## 6. Respostas JSON e .TTAG

> **Ratificado em 2026-11-06.**

Um link que termina em `.JSON` (em maiúsculas ou minúsculas) — ou enviado com
`Accept: application/json` — responde em JSON em vez de uma página. Um link que
termina em `.TTAG` responde com o mesmo registro como um
[arquivo `.ttag`](./ttag-format.md) para baixar
(`Content-Disposition: attachment`). São endereços para ferramentas, nunca
impressos.

A mesma lógica de um escaneamento ([resolver a bobina](#resolver-a-bobina)): o
dono recebe a bobina; qualquer outra pessoa, o seu produto.

| Link | O dono (`Authorization: Bearer <Firebase ID token>`) | Qualquer outra pessoa (não conectada, outra conta, um amigo) |
|---|---|---|
| `…/p/aa394e58.json` | o registro do produto | o mesmo |
| `…/p/aa394e58.ttag` | o produto como arquivo `.ttag` | o mesmo |
| `…/04ab12cd3e4f80.json` | a bobina | `303` → `…/p/<id_product>.json`; sem produto do catálogo (um TigerData, um TigerTag de maker) → `404` |
| `…/04ab12cd3e4f80.ttag` | a bobina como arquivo `.ttag` | `303` → `…/p/<id_product>.ttag`; sem produto do catálogo → `404` |

Sem um produto do catálogo, nada da bobina é respondido, nem mesmo o seu
material: o `404` corresponde à página de “bobina privada” de um escaneamento.

- **Bobina:** um [arquivo `.ttag`](./ttag-format.md) com esse único registro, o
  documento do inventário como o Firestore o armazena. Ele traz `id_product`;
  uma ferramenta que queira o produto chama `…/p/<id_product>.json` em seguida.
- **Produto:** o registro do catálogo como a API de produtos o retorna, no
  idioma de `?lang=` (inglês por padrão). Em cache no servidor e permitido a
  partir de qualquer site.
- Uma resposta de bobina nunca fica em cache: ela depende de quem pergunta.
- Aberto no Tiger Studio, o `.ttag` de uma bobina é importado no modo
  **Restore** (a bobina como estava, chip e backup incluídos); o `.ttag` de um
  produto é importado no modo **Import**, como um novo TigerData+ com um id novo.
- Uma requisição JSON ou `.TTAG` nunca grava: os valores do link (`?weight=`,
  `?note=`) são ignorados ali.

## 7. Etiquetas impressas

Todo aplicativo imprime as mesmas etiquetas: dois tipos, um só conjunto de
modelos, para que uma etiqueta impressa pelo Tiger Studio, pelo aplicativo móvel
ou pelo site tenha a mesma aparência e seja escaneada da mesma forma.

| Etiqueta | O seu código QR | Impressa para |
|---|---|---|
| **Bobina** | o link da bobina ([seção 3](#3-links-qr)) | qualquer bobina que tenha um link QR (não `CLOUD_`, não decimal legado) |
| **Produto** (cartão de amostra) | o link do produto ([seção 5](#5-links-de-produto)) | uma bobina ou um produto do catálogo com um `id_product` real (TigerTag+, TigerData+) |

O dono que escaneia uma etiqueta de bobina recebe a bobina; qualquer outra
pessoa, o seu produto ([resolver a bobina](#resolver-a-bobina)). Uma etiqueta de
produto abre o produto para todos: é a etiqueta para uma amostra, uma prateleira
ou um showroom.

### O que uma etiqueta carrega

- a marca, onde ficaria o logotipo de um fabricante (os logotipos de fabricante virão depois);
- a série em branco sobre uma barra preta (`PLA Rainbow`; o material quando não há série);
- o nome da cor e o(s) seu(s) código(s) hexadecimal(is) (`#F2D066`, até três nos modelos largos);
- em uma etiqueta de bobina, o protocolo da bobina no canto superior direito, como uma pílula contornada:
  `TigerTag+` sempre que a sua referência for um produto do catálogo (um `id_product` real),
  senão `TigerTag`, `TigerData` ou `TigerData+`; uma etiqueta de produto (filamento) sempre
  carrega `TigerTag+`;
- até **quatro campos de valor**, escolhidos pelo usuário entre: faixa do bico, faixa da mesa,
  secagem (temperatura · tempo), TD, diâmetro;
- o código QR.

Só o que não muda: nunca o peso restante, a nota, o rack ou o dono. Nada em
texto legível ao lado do código QR ([seção 3](#3-links-qr)).

### Modelos

Oito modelos, os tamanhos e layouts comuns de etiquetas de bobina:

| Modelo | Tamanho (largura × altura) | Layout |
|---|---|---|
| Classic (padrão) | 40 × 30 mm | marca, barra, cor + hex, quatro campos, QR no canto inferior direito |
| Wide | 50 × 30 mm | o Classic, com a barra mais larga |
| Compact | 40 × 25 mm | marca, QR à esquerda, barra, cor, hex — sem campos |
| Slim | 40 × 12 mm | QR à esquerda, marca, barra, cor — sem campos |
| Slicer-friendly | 40 × 30 mm | marca, série, cor empilhadas em tamanho grande, QR grande à direita — sem campos |
| Vertical | 30 × 40 mm | marca, barra, cor em tamanho grande, hex, um traço, campos empilhados à esquerda, QR no canto inferior direito |
| Vertical bold | 30 × 40 mm | marca, barra na largura toda, cor, um traço, QR centralizado abaixo — sem campos |
| Vertical compact | 25 × 40 mm | marca, barra, cor, hex, um traço, QR grande abaixo — sem campos |

Cada modelo é um SVG diagramado em décimos de milímetro e escalado para os pontos
da impressora. O código QR ocupa a mesma caixa das etiquetas de bobina comuns
(≈ 14 mm no Classic), com um número inteiro de pontos da impressora por módulo:
o mais próximo, arredondado para cima quando isso fica dentro de 6 % da caixa. As
margens brancas da etiqueta são a sua zona de silêncio. A 203 dpi, um código de
29 × 29 tem 4 pontos por módulo no Classic (≈ 14,5 mm).

### Saída

- **PDF**, **PNG** (na resolução da impressora) e **SVG**, para que qualquer
  impressora funcione, pelo próprio aplicativo dela se for preciso;
- a impressão direta em impressoras de etiquetas (Brother QL, Niimbot, Phomemo)
  virá depois, impressora por impressora, com os mesmos modelos.

## Pontos em aberto

- **Links de aplicativo.** iOS (`apple-app-site-association`) e Android (intent
  filters) comparam os caminhos diferenciando maiúsculas de minúsculas por
  padrão: os links são impressos em minúsculas, mas um link digitado ou
  compartilhado à mão pode não estar, então o aplicativo móvel declara a
  comparação sem diferenciar maiúsculas de minúsculas (iOS) e filtra o caminho
  no código (Android).
- **Domínio.** `qr.tigertag.io` fica impresso para sempre: renove `tigertag.io`
  por um prazo longo.

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [Identidade universal do filamento](../concepts/universal-filament-identity.md), [Inventário e sincronização na nuvem](../concepts/inventory-and-cloud-sync.md), [Visão geral para desenvolvedores](./README.md)
