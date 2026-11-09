---
sourceHash: 330b407d27d694c4ba885a1b36d46f3b1470147007651a81ecce2d19fc5f827b
sourcePath: docs/faq/README.md
---

# FAQ

## Geral

**O que é o TigerSystem?**
Um ecossistema aberto para impressão 3D construído em torno de uma ideia: a identidade de uma bobina
de filamento pertence ao seu dono, não a uma marca de impressora. Veja
[Por que o TigerSystem existe](../vision/why-tigersystem.md).

**Preciso comprar alguma coisa para começar?**
Não — nem mesmo um chip. Os aplicativos são gratuitos, qualquer smartphone com NFC é o leitor, e
uma bobina **TigerData** carrega a identidade completa sem nada colado em lugar nenhum.
Os chips são o conforto, nunca o pré-requisito:
[comece por US$ 0](../guides/start-for-free.md).

**Isso está preso a uma marca de filamento ou de impressora?**
Não — a neutralidade é uma regra de projeto. Qualquer filamento, qualquer impressora, sem lista de parceiros.

**Esses aplicativos SÃO o produto?**
Não — o lado **voltado ao usuário** é deliberadamente um **ambiente de testes**. Todo aplicativo e
dispositivo que criamos para usuários finais (Tiger Studio, Tiger NFC Connect, TigerScale,
TigerPOD e projetos futuros) é uma **prova de conceito** funcional: seu único
objetivo é mostrar o potencial de um protocolo de código aberto, padronizado, agnóstico e
multiplataforma, e inspirar outras pessoas a imaginar os recursos do
amanhã. Use-os, faça fork deles ou construa os seus. O **lado da fábrica**,
por outro lado, é de nível de produção: uma cadeia de ferramentas industrial
programa os chips em velocidade de linha nas fábricas parceiras — essa parte não é nenhum
experimento. Veja [Um ambiente de testes, de propósito](../vision/why-tigersystem.md).

**Por que vocês mesmos constroem todos esses demonstradores?**
Porque ninguém mais construiu. Mais de 2,5 milhões de chips TigerTag foram
produzidos e saem em bobinas de filamento, e supusemos que a comunidade inventaria
usos para uma identidade NFC aberta por conta própria — isso não aconteceu. Construir os
demonstradores nunca foi o objetivo inicial; tornou-se necessário para mostrar o que
o protocolo torna possível. A história completa:
[A história por trás do ambiente de testes](../vision/why-tigersystem.md).

## TigerTag (chips)

**Que chip é um TigerTag?**
Um chip NFC NTAG padrão que carrega um payload aberto de 144 bytes — marca, material,
cor, diâmetro, configurações de impressão. Sem chaves, sem criptografia nos dados.
Veja [O chip TigerTag](../concepts/tigertag-chip.md).

**Posso regravar um chip?**
Sim — os chips são regraváveis, e esse é o ponto do
[fluxo de trabalho da Segunda Vida](../philosophy/second-life.md): reabastecer ou reaproveitar uma
bobina e recodificar o seu chip.

**O que é o TigerTag+?**
Um TigerTag que sabe exatamente *qual produto* é. Em vez de valores que alguém
digitou, ele carrega um **id de produto do catálogo oficial** — marca, cor,
material, temperaturas, diâmetro, SKU, EAN — além de metadados de enriquecimento opcionais
que podem melhorar depois que o chip é gravado. O chip continua **100 % offline**:
tudo o que é necessário para imprimir continua nele. O `+` significa *identificado*, não
*certificado*.

**E o TigerTag+ Certified?**
Um TigerTag+ que também carrega uma **assinatura** criptográfica, gravada por um
fabricante que detém a certificação e as suas ferramentas de assinatura. Qualquer pessoa pode
**verificar** uma assinatura — de graça, offline, no próprio celular — mas somente um
fabricante certificado pode **emitir** uma, então uma tag clonada falha na verificação. Veja
[TigerTag+](../products/tigertag-plus.md).

**Posso fazer backup de um chip na minha conta?**
Sim, e é um recurso separado do `+`. O Tiger Studio pode salvar o conteúdo exato de um chip,
associado ao seu UID físico, e reprogramá-lo depois — útil
se um chip for reescrito ou corrompido, e válido **somente no chip original**.
Ter um backup não faz de um chip um TigerTag+.

**Onde compro chips?**
Duas respostas igualmente válidas. Os chips oficiais da marca TigerTag estão em
**[tigertag.io](https://tigertag.io)** e em distribuidores oficiais
(atualmente a [Atome3D](https://atome3d.com), com mais em breve) — comprá-los
ajuda a apoiar a P&D. Mas **qualquer chip NTAG virgem e barato** da Amazon,
AliExpress ou da sua loja local funciona do mesmo jeito, e isso é deliberado:
nada é bloqueado, o protocolo é o que importa.

**Os chips que compro chegam com dados?**
Não — **os chips vendidos separadamente saem virgens**, tenham ou não o logotipo
TigerTag. Você grava a identidade do filamento por conta própria, no
[Tiger NFC Connect](../products/tigertag-connect.md) ou no
[Tiger Studio](../products/tiger-studio.md); isso leva cerca de um minuto na
primeira vez. Os chips que chegam **já codificados** são os integrados
na fábrica, dentro de filamento das marcas parceiras. Comprar um chip e
comprar filamento etiquetado são duas coisas diferentes.

**Que formato devo comprar — adesivo ou suporte de refil?**
Dois formatos, para duas situações. O **adesivo individual** vai em qualquer
bobina que você já tenha. A **versão de refil** foi feita para
[refils](../philosophy/second-life.md) sem carretel: ela é colada dentro do **miolo
de papelão** antes de você montar o refil em uma masterspool reutilizável, de modo que o chip
viaja com o filamento e não com o carretel — o mesmo lugar em que a
fábrica o coloca.

**Qual chip virgem devo comprar exatamente?**
**NTAG213, 215 ou 216 — redondo, de 25 mm** é a recomendação. O protocolo é
deliberadamente otimizado para caber no pequeno NTAG213 (144 bytes); o 215/216 funcionam
do mesmo jeito, com espaço sem uso sobrando. Outros formatos também funcionam, mas o
redondo de 25 mm é o formato em torno do qual os leitores e suportes do ecossistema foram projetados.

**Quais marcas de filamento já saem de fábrica com TigerTag?**
Mais de 2,5 milhões de chips foram produzidos — o que faz do TigerTag **o protocolo
RFID de terceiros mais implantado do mundo**; a maioria é integrada na
fábrica por marcas de filamento de terceiros — Rosa3D, eSun, Sunlu, Landu,
Jamg He, R3D, Filforme, Lotactree, Smart3DPT, Nanovia — e outras em processo de
integração.

**Como um chip vai parar na bobina?**
Ele é colado — e há **dois por bobina, em lados opostos**. Isso é
deliberado: as impressoras costumam dividir um leitor RFID entre dois slots, então um chip
precisa ficar voltado para o leitor seja qual for o lado em que a bobina estiver; você pode
ler à mão sem virar a bobina; pode lê-la sem tirá-la do
slot; e se um chip falhar, o outro ainda responde. Bônus: cada bobina vazia
lhe dá dois chips reutilizáveis.
Veja [por que dois chips](../concepts/tigertag-chip.md).

**Preciso de internet para ler um chip?**
Não. O payload do chip é completo e autossuficiente: celular em modo
avião, desktop offline — a bobina continua se apresentando.

**Prefiro usar outro protocolo NFC (OpenSpool, o meu próprio…) — estou preso ao
TigerTag?**
Não. Os chips **nunca são bloqueados contra gravação**: o TigerTag é apenas o protocolo-base com que as
bobinas saem de fábrica. Você é livre para regravar o chip e
migrar os dados dele para qualquer outro protocolo NFC/RFID, personalizado ou já existente.

**O que acontece com o chip quando a bobina acaba?**
Ele ganha uma segunda vida — nunca um aterro. Recodifique-o para a próxima bobina ou
converta-o para NDEF padrão e transforme-o em qualquer coisa NFC: um chaveiro, um
cartão de visita, um objeto conectado. Os chips oficiais da marca passaram para
**NTAG215** justamente para deixar folga de memória para esse reaproveitamento: o chip de uma bobina
nunca deveria virar lixo eletrônico. Veja
[Segunda Vida](../philosophy/second-life.md).

**O chip sobrevive a uma câmara aquecida ou a um secador de filamento?**
No uso normal, nenhuma falha de chip foi relatada em campo — inclusive
de usuários que usam secadores de filamento. Duas coisas jogam a favor do chip: você
nunca o lê quente de fato (as leituras acontecem à temperatura ambiente, não
no meio da impressão dentro de uma câmara), e ele é hardware NTAG padrão — para as classificações
formais de temperatura, consulte as fichas técnicas do NXP NTAG213/215/216.

**O que é um arquivo `.ttag`?**
Um instantâneo portátil e offline de uma ou mais das suas bobinas — a unidade para
fazer backup, levar em um pen drive USB e compartilhar os seus filamentos. Exporte uma
bobina ou uma seleção inteira pelo Tiger Studio; importe com pré-visualização completa e
a escolha entre *Restaurar* (mesma conta) e *Importar* (adotar como bobinas
novas). Especificação completa: [o formato `.ttag`](../developers/ttag-format.md).

**Posso usar o TigerSystem sem nenhum chip?**
Sim — isso é o **TigerData**: os mesmos dados do protocolo em forma puramente digital, sem
chip, sem UID. A identidade vive no seu inventário (ou em qualquer lugar digital) e
se comporta como qualquer outra bobina. Grave-a em um chip NFC depois — de forma atômica,
quando estiver pronto — e ela se torna um TigerTag, com um UID físico finalmente
associado. Veja
[Uma identidade, três estados](../concepts/universal-filament-identity.md).

## Tiger Studio (desktop)

**Quais plataformas?**
Windows, macOS e Linux (Electron). Downloads na
[página de releases](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases).

**Preciso de um leitor NFC?**
Não — o aplicativo funciona sozinho. Um leitor ACR122U (ou um suporte
[TigerPOD](../products/tigerpod.md)) acrescenta identificação instantânea das bobinas
e codificação de chips.

**Quais impressoras ele consegue controlar?**
Seis marcas ativas: Anycubic, Bambu Lab, Creality, Elegoo, FlashForge, Snapmaker —
veja a [matriz de compatibilidade](../compatibility/README.md).

## Fatiadores e o fluxo de impressão

**Preciso trocar de fatiador?**
Não. Continue com o OrcaSlicer, o fatiador do seu fabricante, o que preferir — o TigerSystem
não fatia e não quer fatiar. Você fatia e inicia os trabalhos exatamente como
antes. Veja [onde o fatiador se encaixa](../architecture/data-flow.md).

**Então o que o TigerSystem acrescenta à impressão?**
Duas coisas. Primeiro, as informações de filamento do lado da máquina passam a corresponder à realidade: o Tiger
Studio envia os dados de cada bobina aos slots da impressora (AMS, CFS, Canvas, ACE,
IFS). Segundo, o monitoramento ao vivo: seja quem for que iniciou a impressão, o
trabalho aparece no Tiger Studio com progresso, temperaturas, uma hora de término "termina às"
no relógio e a câmera — em toda a sua frota, com todas as marcas misturadas.

**O chip pode configurar o perfil do meu fatiador automaticamente?**
Hoje não. O chip carrega as configurações recomendadas do filamento
(temperaturas…); você as reproduz por conta própria no perfil do seu fatiador.

**Tenho impressoras de três marcas diferentes. É um problema?**
Pelo contrário — esse é o ponto. Uma única tabela de impressoras para toda a frota, com
filtros de marca / estado / tag, seja qual for a mistura das seis marcas compatíveis.

## TigerHub (a casa web do ecossistema)

**O que é o TigerHub?**
A plataforma web em [tigersystem.io](https://tigersystem.io). Ela apresenta o
ecossistema TigerSystem — a vitrine do que o protocolo aberto torna possível
— e hospeda o lado social do ambiente de testes, tudo ativo hoje: a sua conta na
web, listas de desejos (públicas e só para amigos), códigos de amigo e convites,
compartilhamento público de listas, além do catálogo de materiais, do navegador do banco de dados de referência,
de modelos 3D e mais. Veja [TigerHub](../products/tigerhub.md).

**Posso mostrar a minha coleção a alguém sem um aplicativo?**
Sim — o TigerHub serve links de lista somente leitura: qualquer pessoa com o link vê em um
navegador comum, sem aplicativo, sem conta.

**O TigerHub é o banco de dados por trás dos aplicativos?**
Não. As contas e os dados ficam em um **Firebase** simples — um banco de dados compartilhado, em
um só lugar, para que todos os elementos do ambiente de testes interoperem. O TigerHub é a
superfície web construída por cima dele.

## Tiger NFC Connect (celular)

**O que o aplicativo de celular faz?**
Leitura NFC e programação de chips em qualquer lugar, navegação no catálogo e sincronização
completa do inventário com a mesma conta do aplicativo desktop.

**Onde faço o download?**
Ele é lançado na **App Store** e no **Google Play** como **Tiger NFC
Connect** (antes "TigerTag RFID Connect"), com betas públicos nas duas
plataformas. Todos os links:
[tigersystem.io/download](https://tigersystem.io/download).

## TigerScale e sensores

**O que é a TigerScale?**
Uma balança ESP32 de código aberto para bobinas de filamento. Coloque uma bobina nela e o seu peso
ao vivo flui direto para o seu inventário — visível na hora no desktop,
no celular e nas visualizações compartilhadas. Veja [TigerScale](../products/tigerscale.md).

**Espere — o chip já sabe tudo, por que uma balança?**
O chip sabe o que o filamento **é**; só uma balança sabe quanto **sobrou**. São
as duas metades de um inventário realmente útil: a identidade vem
do chip, a quantidade ao vivo vem da balança.

**Preciso de uma TigerScale para acompanhar o peso?**
Não. Você pode definir ou ajustar o peso de uma bobina manualmente nos aplicativos a qualquer momento —
a balança apenas torna isso automático, ao vivo e sem esforço. O Tiger Studio também
lê dispositivos **"HID Scale" USB** padrão — a DYMO série M (M5, M10,
M25…) e qualquer balança compatível — como opção de terceiros
([detalhes](../products/tigerscale.md)).

**Posso construir uma por conta própria?**
Sim — esse é o ponto. O projeto de hardware e o firmware são totalmente abertos (MIT) no
[repositório Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale).

**E o peso do carretel vazio?**
A calibração de recipiente do Tiger Studio permite medir uma única vez o peso real vazio de um
recipiente; ele é então aplicado a todas as bobinas desse recipiente, de modo que o número
que você vê é o de filamento líquido, não o do carretel de plástico.

**O que é o TD-1 / TD1s?**
Um analisador de filamento de terceiros da **[AJAX-3D](https://ajax-3d.com)**, em duas
variantes que funcionam com o ecossistema: **TD-1** (a versão DIY — monte
você mesmo) e **TD1s** (pré-montado, pronto para usar). Sua
função principal é medir a **Transmission Distance** do filamento ("TD" — quanta
luz o material deixa passar), o valor sem o qual os usuários de impressão HueForge / Full Spectrum
não vivem; ele também lê a **cor** (RGB, 1–3
slots) — um pouco menos precisa, mas uma boa indicação. O Tiger Studio
o integra nativamente por USB, e o **Tiger NFC Connect o suporta por
USB-C** no celular. O TD medido pode ser **armazenado no próprio protocolo
TigerTag** — no chip NFC ou no formato de arquivo `.ttag`. Um acessório de terceiros
e o ecossistema aberto trabalhando juntos, como pretendido.

## Nuvem e inventário

**Onde o meu inventário é armazenado?**
Na sua própria conta TigerSystem — Firebase simples (Firestore), um banco de dados compartilhado
usado por todos os aplicativos. Todo dispositivo em que você entra
vê os mesmos dados em tempo real. Veja
[Inventário e sincronização na nuvem](../concepts/inventory-and-cloud-sync.md).

**Funciona offline?**
Os chips são totalmente legíveis offline; os aplicativos mantêm um cache local. Os vínculos com as impressoras são
locais da LAN e não precisam de internet (exceto o modo nuvem da Anycubic).

**Não quero NENHUMA nuvem. Ainda posso usar o TigerTag?**
Sim, 100 %. O payload do chip é completo e autossuficiente: leia-o,
grave-o e gerencie um inventário totalmente local, sem nuvem, sem conta, sem
servidor — os [SDKs JS e Python](../developers/sdks.md) existem justamente para
facilitar isso nos seus projetos ou nos DIY. Até o **TigerTag+ se autentica
localmente, sem conexão com a internet**. A camada de nuvem é um conforto
opcional (sincronização entre dispositivos, compartilhamento), nunca um requisito — propomos uma
visão do usuário do TigerTag, e toda outra visão é aceita e
incentivada.

**Não sei nada de NFC ou RFID — isso é para mim?**
Especialmente para você. Toda a experiência foi pensada para iniciantes primeiro: aproxime uma
bobina do celular, ela se apresenta, pronto. Nenhum jargão é necessário — as
camadas técnicas existem para quem quer se aprofundar, não como pré-requisito.

**Outras pessoas podem ver as minhas bobinas?**
Só se você escolher: amigos aceitos, uma opção pública ou um link de compartilhamento do TigerHub.
Tudo é privado por padrão e garantido no servidor.

**O que acontece se a nuvem do TigerTag for desativada um dia?**
A resposta de projeto para esse medo é a abertura: o formato do chip é público, os chips
são lidos totalmente offline para sempre, os SDKs e o aplicativo desktop são de código aberto, e
a superfície da nuvem é documentada. Suas bobinas não podem ser "brickadas" por um servidor —
essa é justamente a diferença para o silo de um fabricante.

## RFID e compatibilidade

**O Tiger Studio consegue ler tags nativas da Bambu/Creality/…?**
Ainda não — a maneira certa de tratar a interoperabilidade ainda é uma questão em aberto.
Há especificações de decodificação somente leitura documentadas para sete formatos de fabricantes, e o
trabalho em andamento visa **converter os dados das tags dos fabricantes em bobinas digitais
TigerData**, para que o filamento de outras marcas possa ser lido e gerenciado no
ecossistema. Veja [compatibilidade](../compatibility/README.md).

**Por que as tags dos fabricantes são bloqueadas e a TigerTag não?**
As tags bloqueadas servem à dependência de um fornecedor. A resposta do TigerTag é um formato
legível abertamente — veja [Centrado no usuário vs. centrado na impressora](../philosophy/user-centric-ecosystem.md).

**E as impressoras de resina?**
Em breve: o TigerTag está sendo estendido para **resinas** — a mesma identidade aberta em
recipientes de resina para impressoras 3D de resina.

**O TigerTag funciona com uma impressora sem leitor RFID?**
Sim — essa é a [ponte do smartphone](../philosophy/smartphone-bridge.md): o seu
celular (ou um leitor desktop) identifica a bobina, e o sistema envia os dados
à impressora.

## Solução de problemas

**O meu chip não é lido no meu celular.**
Verifique se o NFC está ativado e encontre o ponto ideal da antena do seu celular; as tags são lidas melhor
rentes a ela. Se o chip é lido em um aplicativo, mas não em outro, atualize o aplicativo.

**A minha impressora não aparece no Tiger Studio.**
Confirme que a impressora está na mesma LAN, em modo LAN quando aplicável, e tente
"Adicionar por IP" — os métodos de descoberta variam por marca.

> Casos reais são bem-vindos — informe o seu no
> [Discord oficial](https://discord.gg/3Qv5TSqnJH) ou nas issues do GitHub; esta
> seção cresce a partir deles.

## Desenvolvedores

**Alguém realmente construiu algo sobre o TigerTag?**
Sim — e de forma independente de nós:
o [OpenRFID](https://github.com/suchmememanyskill/OpenRFID) (kit de ferramentas RFID multifabricante
da comunidade) lê TigerTags;
o [Spooly Tracker](https://spoolytracker.com/) (plataforma de inventário, web +
celular) identifica bobinas com TigerTags; e o
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
faz da U1 **a primeira impressora que lê TigerTags nativamente**, e o
[COSMOS](https://github.com/OpenCentauri/cosmos) faz o mesmo na Elegoo Centauri Carbon, com
o leitor NFC embutido no seu Canvas. Veja
[integrações de terceiros](../developers/integrations.md).

**Posso criar o meu próprio aplicativo sobre o TigerTag?**
Sim, sem permissão: especificação aberta do chip, [SDKs](../developers/sdks.md) (JS e
Python) e uma [superfície de conta documentada](../developers/account-api.md) com
exemplos funcionais de ESP32 / Home Assistant / Spoolman.

**Posso conectar o TigerTag ao meu ERP ou software interno de estoque?**
Sim — esse é exatamente o tipo de uso que o protocolo aberto convida. Uma leitura (celular NFC
ou leitor USB ACR122U) fornece a identidade da bobina; o que você faz com
ela — gestão de estoque, acompanhamento de trabalhos, rastreabilidade, reposição, P&D — é decisão
sua. Veja [O que você pode construir?](../developers/README.md)

**Que hardware preciso para ler chips no meu próprio projeto?**
Qualquer smartphone com NFC, um leitor USB da classe ACR122U em um computador — ou vá de
DIY completo: um simples ESP32 com um módulo leitor PN532 ou RC522 basta (é assim que a
[TigerScale](../products/tigerscale.md) faz). Comum, barato, sem equipamento
proprietário.

**A configuração pública do Firebase é uma falha de segurança?**
Não — é o padrão do Firebase. Toda a aplicação das regras é feita no servidor, em
regras de segurança; um cliente só pode tocar nos dados do seu próprio usuário.

## Fabricantes

**Somos uma marca de filamento — como enviamos bobinas etiquetadas com TigerTag?**
Rapidamente: uma linha de produção pode estar funcionando com o TigerTag em **apenas
5 dias**, a um custo muito baixo, com cada chip gravado em **cerca de
1 segundo** — comprovado com mais de 2,5 milhões de chips já despachados pela
Rosa3D, eSun, Sunlu, Landu, Jamg He, R3D, Filforme, Lotactree e Smart3DPT. E cada marca que entra reforça o argumento coletivo para que os
fabricantes de impressoras leiam o TigerTag nativamente. Leia
[Para fabricantes de filamento](../vision/for-filament-manufacturers.md) e depois
entre em contato em **[tigertag@tigertag.io](mailto:tigertag@tigertag.io)**.

**O meu produto pode se tornar "TigerTag Certified"?**
Depende de qual lado de uma linha ele está — e a maioria dos produtos está no
lado gratuito.

Se o seu produto **conversa com** chips TigerTag — um leitor, um aplicativo, uma impressora, um
fatiador, um secador, uma ferramenta — ele é **TigerTag Compatible**. Esse nível é gratuito,
autodeclarado e não precisa de auditoria nem de permissão: construa, diga *"compatível
com o TigerTag"* (ou *"com o TigerTag+"* se você verifica assinaturas) e exiba o
logotipo na sua interface, na sua documentação e no seu anúncio de loja. A maioria dos
produtos de terceiros pertence a este nível, e nada do protocolo é negado
a eles.

O **TigerTag Certified** é o outro nível, e está aberto a **qualquer coisa que um terceiro
construa** — um dispositivo, um aplicativo, filamento, um inlay, um suporte — que
**passe em uma auditoria** com base nos requisitos. Ele é concedido, não reivindicado:
autorização por escrito, uma entrada no registro de certificação e o direito de
aplicar a marca **no produto, no chip e na embalagem**. Existe em dois
escopos, **TigerTag Certified** e **TigerTag+ Certified**, o segundo abrangendo
produtos cujo tratamento de tags assinadas foi verificado.

A diferença entre os níveis não é o que o seu produto *é* — é se alguém
verificou. Compatible diz *"funciona"*, sob a sua palavra. Certified diz
*"nós testamos"*, sob a nossa, e pode ser retirado. Critérios completos:
[CERTIFICATION.md](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). Entre em contato pela
[organização no GitHub](https://github.com/TigerTag-Project).

**Somos um fabricante de impressoras — o nosso firmware pode ler TigerTag?**
Sim — os leitores NTAG/NDEF são hardware comum, a especificação do payload é pública
([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)),
e adicionar a leitura de TigerTag a um firmware leva **menos de 3 dias**.

## Comunidade

**Onde faço perguntas ou peço ajuda?**
O **[Discord](https://discord.gg/3Qv5TSqnJH)** oficial — perguntas, ajuda,
feedback, mostre o que fez. Para bugs e problemas técnicos, as issues do GitHub de cada repositório
também servem.

**Como contribuo?**
Documentação: [CONTRIBUTING.md](../../CONTRIBUTING.md) daqui. Código: o guia próprio de cada repositório
— veja o [mapa dos repositórios](../developers/repositories.md).

**Tudo é gratuito — como apoio o projeto?**
Compre os chips oficiais ou o kit TigerPOD quando de qualquer forma fosse comprar; use
o [boné ou a camisa polo](https://tigersystem.io/goodies); corrija uma página, traduza
uma, construa algo compatível; e pergunte à sua marca de filamento por que as bobinas dela
não são etiquetadas — essa última fez mais do que todas as outras. A lista completa,
inclusive o que você pode ignorar com segurança, está em
[Apoie o projeto](../support.md).

**Posso fazer um fork de tudo e construir outra coisa?**
Sim. Licenciado sob MIT/CC, deliberadamente passível de fork — apenas respeite a
[política de marca](../../TRADEMARK.md).

---

**◀ Anterior:** [API da conta](../developers/account-api.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Roteiro](../roadmap/README.md)
