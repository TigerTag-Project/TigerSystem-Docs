---
sourceHash: 330b407d27d694c4ba885a1b36d46f3b1470147007651a81ecce2d19fc5f827b
sourcePath: docs/faq/README.md
---

# FAQ

## Geral

**O que é o TigerSystem?**
Um ecossistema aberto para a impressão 3D construído em torno de uma ideia: a identidade de uma bobina de filamento pertence ao seu proprietário, não a uma marca de impressoras. Ver [Porque existe o TigerSystem](../vision/why-tigersystem.md).

**Preciso de comprar alguma coisa para começar?**
Não — nem sequer um chip. As aplicações são gratuitas, qualquer telemóvel NFC é o leitor e uma bobina **TigerData** leva a identidade completa sem nada colado em lado nenhum. Os chips são o conforto, nunca o pré-requisito: [comece por 0 €](../guides/start-for-free.md).

**Isto está ligado a uma marca de filamento ou de impressoras?**
Não — a neutralidade é uma regra de conceção. Qualquer filamento, qualquer impressora, sem lista de parceiros.

**Estas aplicações SÃO o produto?**
Não — o lado **voltado para o utilizador** é deliberadamente uma **sandbox**. Cada aplicação e dispositivo que criamos para utilizadores finais (Tiger Studio, Tiger NFC Connect, TigerScale, TigerPOD e projetos futuros) é uma **prova de conceito** funcional: o seu único objetivo é mostrar o potencial de um protocolo de código aberto, normalizado, agnóstico e multiplataforma, e inspirar outros a imaginar as funcionalidades de amanhã. Use-as, faça fork delas ou construa as suas. O **lado da fábrica**, em contrapartida, é de nível de produção: uma cadeia de ferramentas industrial programa os chips à velocidade da linha em fábricas parceiras — essa parte não é nenhuma experiência. Ver [Uma sandbox, de propósito](../vision/why-tigersystem.md).

**Porque constroem vocês próprios todos estes demonstradores?**
Porque mais ninguém o fez. Mais de 2,5 milhões de chips TigerTag foram produzidos e seguem em bobinas de filamento, e partimos do princípio de que a comunidade inventaria por si só usos para uma identidade NFC aberta — não aconteceu. Construir os demonstradores nunca foi o objetivo inicial; tornou-se necessário para mostrar o que o protocolo torna possível. A história completa: [A história por trás da sandbox](../vision/why-tigersystem.md).

## TigerTag (chips)

**Que chip é um TigerTag?**
Um chip NFC NTAG padrão com um payload aberto de 144 bytes — marca, material, cor, diâmetro, definições de impressão. Sem chaves, sem cifragem nos dados. Ver [O chip TigerTag](../concepts/tigertag-chip.md).

**Posso reescrever um chip?**
Sim — os chips são regraváveis, que é o ponto do [fluxo de trabalho Second Life](../philosophy/second-life.md): recarregar ou reaproveitar uma bobina e recodificar o seu chip.

**O que é o TigerTag+?**
Um TigerTag que sabe exatamente *que produto* é. Em vez de valores que alguém escreveu, leva um **ID de produto do catálogo oficial** — marca, cor, material, temperaturas, diâmetro, SKU, EAN — mais metadados de enriquecimento opcionais que podem melhorar depois de o chip ser escrito. O chip continua **100 % offline**: tudo o que é preciso para imprimir continua nele. O `+` significa *identificado*, não *certificado*.

**E o TigerTag+ Certified?**
Um TigerTag+ que leva também uma **assinatura** criptográfica, escrita por um fabricante que detém a certificação e as respetivas ferramentas de assinatura. Qualquer pessoa pode **verificar** uma assinatura — gratuitamente, offline, no seu próprio telemóvel — mas só um fabricante certificado pode **emitir** uma, pelo que uma etiqueta clonada falha a verificação. Ver [TigerTag+](../products/tigertag-plus.md).

**Posso guardar uma cópia de segurança de um chip na minha conta?**
Sim, e é uma funcionalidade separada do `+`. O Tiger Studio pode guardar o conteúdo exato de um chip, associado ao seu UID físico, e reprogramá-lo mais tarde — útil se um chip for reescrito ou ficar corrompido, e válido **apenas no chip original**. Ter uma cópia de segurança não faz de um chip um TigerTag+.

**Onde compro chips?**
Duas respostas igualmente válidas. Os chips oficiais com a marca TigerTag estão em **[tigertag.io](https://tigertag.io)** e em distribuidores oficiais (atualmente a [Atome3D](https://atome3d.com), com mais a juntar-se em breve) — comprá-los ajuda a apoiar a I&D. Mas **qualquer chip NTAG virgem e barato** da Amazon, do AliExpress ou da loja da sua zona funciona de forma idêntica, e isso é deliberado: nada é bloqueado, o protocolo é que importa.

**Os chips que compro chegam com dados?**
Não — os **chips vendidos em separado saem virgens**, tenham ou não o logótipo TigerTag. É você que escreve a identidade do filamento, no [Tiger NFC Connect](../products/tigertag-connect.md) ou no [Tiger Studio](../products/tiger-studio.md); demora cerca de um minuto na primeira vez. Os chips que chegam **já codificados** são os integrados na fábrica, dentro de filamento das marcas parceiras. Comprar um chip e comprar filamento etiquetado são duas coisas diferentes.

**Que formato devo comprar — autocolante ou suporte de recarga?**
Dois formatos, para duas situações. O **autocolante individual** vai em qualquer bobina que já tenha. A **versão de recarga** foi pensada para [recargas](../philosophy/second-life.md) sem bobina: cola-se dentro do **núcleo de cartão** antes de montar a recarga numa masterspool reutilizável, de modo que o chip viaja com o filamento e não com a bobina — o mesmo sítio onde a fábrica o põe.

**Que chip virgem devo comprar exatamente?**
**NTAG213, 215 ou 216 — redondo, 25 mm** é a recomendação. O protocolo está deliberadamente otimizado para caber no pequeno NTAG213 (144 bytes); os 215/216 funcionam de forma idêntica, com espaço por usar. Outras formas também funcionam, mas o redondo de 25 mm é o formato em torno do qual foram concebidos os leitores e os suportes do ecossistema.

**Que marcas de filamento enviam TigerTag de fábrica?**
Foram produzidos mais de 2,5 milhões de chips — fazendo do TigerTag **o protocolo RFID de terceiros mais implantado do mundo**; a maioria é integrada de fábrica por marcas de filamento terceiras — Rosa3D, eSun, Sunlu, Landu, Jamg He, R3D, Filforme, Lotactree, Smart3DPT, Nanovia — e outras em integração.

**Como chega um chip a uma bobina?**
Cola-se — e há **dois por bobina, em lados opostos**. É deliberado: as impressoras partilham muitas vezes um leitor RFID entre dois slots, pelo que um chip tem de ficar virado para o leitor seja qual for o lado em que a bobina está; pode ler à mão sem virar a bobina; pode lê-la sem a tirar do slot; e se um chip falhar o outro continua a responder. Bónus: cada bobina vazia dá-lhe dois chips reutilizáveis. Ver [porquê dois chips](../concepts/tigertag-chip.md).

**Preciso de internet para ler um chip?**
Não. O payload do chip é completo e autossuficiente: telemóvel em modo de avião, computador offline — a bobina continua a apresentar-se.

**Prefiro usar outro protocolo NFC (OpenSpool, o meu próprio…) — fico preso ao TigerTag?**
Não. Os chips **nunca ficam bloqueados contra escrita**: o TigerTag é apenas o protocolo de base com que as bobinas saem de fábrica. É livre de reescrever o chip e migrar os seus dados para qualquer outro protocolo NFC/RFID, à medida ou já existente.

**O que acontece ao chip quando a bobina está vazia?**
Ganha uma segunda vida — nunca um aterro. Recodifique-o para a bobina seguinte ou converta-o para NDEF padrão e transforme-o em tudo o que seja NFC: um porta-chaves, um cartão de visita, um objeto ligado. Os chips oficiais com marca passaram a **NTAG215** precisamente para deixar margem de memória a essa reutilização: o chip de uma bobina nunca deve tornar-se lixo eletrónico. Ver [Second Life](../philosophy/second-life.md).

**O chip sobrevive a uma câmara aquecida ou a um secador de filamento?**
Em utilização normal, não foram comunicadas falhas de chips no terreno — incluindo de utilizadores que usam secadores de filamento. Duas coisas jogam a favor do chip: nunca o lê realmente quente (as leituras acontecem à temperatura ambiente, não a meio de uma impressão dentro de uma câmara), e é hardware NTAG padrão — para classificações formais de temperatura, consulte as fichas técnicas NTAG213/215/216 da NXP.

**O que é um ficheiro `.ttag`?**
Um instantâneo portátil e offline de uma ou mais das suas bobinas — a unidade para fazer cópias de segurança, transportar numa unidade USB e partilhar os seus filamentos. Exporte uma bobina ou uma seleção inteira a partir do Tiger Studio; importe com pré-visualização completa e a escolha entre *Restaurar* (mesma conta) e *Importar* (adotar como bobinas novas). Especificação completa: [o formato `.ttag`](../developers/ttag-format.md).

**Posso usar o TigerSystem sem nenhum chip?**
Sim — é o **TigerData**: os mesmos dados do protocolo em forma puramente digital, sem chip, sem UID. A identidade vive no seu inventário (ou em qualquer lugar digital) e comporta-se como qualquer outra bobina. Escreva-a mais tarde num chip NFC — de forma atómica, quando estiver pronto — e torna-se um TigerTag, com um UID físico finalmente associado. Ver [Uma identidade, três estados](../concepts/universal-filament-identity.md).

## Tiger Studio (computador)

**Que plataformas?**
Windows, macOS e Linux (Electron). Transferências na [página de versões](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases).

**Preciso de um leitor NFC?**
Não — a aplicação funciona sozinha. Um leitor ACR122U (ou um suporte [TigerPOD](../products/tigerpod.md)) acrescenta identificação instantânea de bobinas e codificação de chips.

**Que impressoras consegue controlar?**
Seis marcas ativas: Anycubic, Bambu Lab, Creality, Elegoo, FlashForge, Snapmaker — ver a [matriz de compatibilidade](../compatibility/README.md).

## Slicers e o fluxo de impressão

**Tenho de mudar de slicer?**
Não. Mantenha o OrcaSlicer, o slicer do seu fabricante, o que quiser — o TigerSystem não fatia e não quer fatiar. Fatia e lança trabalhos exatamente como antes. Ver [onde se encaixa o slicer](../architecture/data-flow.md).

**Então o que acrescenta o TigerSystem à impressão?**
Duas coisas. Primeiro, a informação de filamento do lado da máquina corresponde à realidade: o Tiger Studio envia os dados de cada bobina para os slots da impressora (AMS, CFS, Canvas, ACE, IFS). Segundo, a monitorização em direto: seja o que for que tenha lançado a impressão, o trabalho aparece no Tiger Studio com progresso, temperaturas, uma hora de relógio «termina às» e a câmara — em toda a sua frota, com todas as marcas misturadas.

**O chip pode configurar automaticamente o perfil do meu slicer?**
Hoje não. O chip leva as definições recomendadas do filamento (temperaturas…); é você que as reproduz no perfil do seu slicer.

**Tenho impressoras de três marcas diferentes. Problema?**
O contrário — é esse o ponto. Uma única tabela de impressoras para toda a frota, com filtros por marca / estado / etiqueta, seja qual for a mistura das seis marcas suportadas.

## TigerHub (a casa web do ecossistema)

**O que é o TigerHub?**
A plataforma web em [tigersystem.io](https://tigersystem.io). Apresenta o ecossistema TigerSystem — a montra do que o protocolo aberto torna possível — e aloja o lado social da sandbox, tudo já ativo hoje: a sua conta na web, listas de desejos (públicas e só para amigos), códigos de amigo e convites, partilha pública de listas, além do catálogo de materiais, do navegador da base de dados de referência, de modelos 3D e mais. Ver [TigerHub](../products/tigerhub.md).

**Posso mostrar a minha coleção a alguém sem aplicação?**
Sim — o TigerHub serve ligações de listas só de leitura: qualquer pessoa com a ligação vê-a num navegador simples, sem aplicação, sem conta.

**O TigerHub é a base de dados por trás das aplicações?**
Não. As contas e os dados vivem em **Firebase** simples — uma base de dados partilhada, num só local, para que todos os elementos da sandbox interoperem. O TigerHub é a superfície web construída por cima.

## Tiger NFC Connect (móvel)

**O que faz a aplicação móvel?**
Leitura NFC e programação de chips em movimento, navegação no catálogo e sincronização completa do inventário com a mesma conta da aplicação de computador.

**Onde a transfiro?**
Está disponível na **App Store** e no **Google Play** como **Tiger NFC Connect** (anteriormente «TigerTag RFID Connect»), com betas públicas nas duas plataformas. Todas as ligações: [tigersystem.io/download](https://tigersystem.io/download).

## TigerScale e sensores

**O que é a TigerScale?**
Uma balança ESP32 de código aberto para bobinas de filamento. Ponha uma bobina em cima e o seu peso em direto vai direto para o seu inventário — visível instantaneamente no computador, no telemóvel e nas vistas partilhadas. Ver [TigerScale](../products/tigerscale.md).

**Espere — o chip já sabe tudo, porquê uma balança?**
O chip sabe o que o filamento **é**; só uma balança sabe quanto **resta**. São as duas metades de um inventário verdadeiramente útil: a identidade vem do chip, a quantidade em direto vem da balança.

**Preciso de uma TigerScale para acompanhar o peso?**
Não. Pode definir ou ajustar manualmente o peso de uma bobina nas aplicações a qualquer momento — a balança limita-se a torná-lo automático, em direto e sem esforço. O Tiger Studio também lê dispositivos **USB «HID Scale»** padrão — a série DYMO M (M5, M10, M25…) e qualquer balança compatível — como opção de terceiros ([detalhes](../products/tigerscale.md)).

**Posso construir uma eu mesmo?**
Sim — é esse o ponto. O desenho do hardware e o firmware são totalmente abertos (MIT) no [repositório Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale).

**E o peso da própria bobina vazia?**
A calibração de contentores do Tiger Studio permite medir uma vez o peso real de um contentor vazio; é depois aplicado a todas as bobinas desse contentor, de modo que o número que vê é filamento líquido, não a bobina de plástico.

**O que é o TD-1 / TD1s?**
Um analisador de filamento de terceiros da **[AJAX-3D](https://ajax-3d.com)**, em duas variantes que funcionam ambas com o ecossistema: o **TD-1** (a versão DIY — construa-o você mesmo) e o **TD1s** (pré-montado, pronto a usar). A sua função principal é medir a **Transmission Distance** do filamento («TD» — quanta luz o material deixa passar), o valor sem o qual os utilizadores de impressão HueForge / Full Spectrum não conseguem viver; lê também a **cor** (RGB, 1–3 slots) — ligeiramente menos precisa, mas uma boa indicação. O Tiger Studio integra-o nativamente por USB e o **Tiger NFC Connect suporta-o por USB-C** no telemóvel. O TD medido pode ser **guardado no próprio protocolo TigerTag** — no chip NFC ou no formato de ficheiro `.ttag`. Um acessório de terceiros e o ecossistema aberto a trabalhar em conjunto, como previsto.

## Nuvem e inventário

**Onde fica guardado o meu inventário?**
Na sua própria conta TigerSystem — Firebase simples (Firestore), uma base de dados partilhada usada por todas as aplicações. Todos os dispositivos em que inicia sessão veem os mesmos dados em tempo real. Ver [Inventário e sincronização na nuvem](../concepts/inventory-and-cloud-sync.md).

**Funciona offline?**
Os chips são totalmente legíveis offline; as aplicações mantêm uma cache local. As ligações às impressoras são locais à LAN e não precisam de internet de todo (exceto no modo na nuvem da Anycubic).

**Não quero NENHUMA nuvem. Posso usar o TigerTag na mesma?**
Sim, a 100 %. O payload do chip é completo e autossuficiente: leia-o, escreva-o e gira um inventário totalmente local, sem nuvem, sem conta, sem servidor — os [SDKs JS e Python](../developers/sdks.md) existem precisamente para o tornar fácil nos seus projetos, próprios ou DIY. Até o **TigerTag+ autentica localmente, sem ligação à internet**. A camada na nuvem é um conforto opcional (sincronização multidispositivo, partilha), nunca um requisito — propomos uma visão do utilizador TigerTag, e todas as outras visões são aceites e encorajadas.

**Não sei nada de NFC nem de RFID — isto é para mim?**
Especialmente para si. Toda a experiência foi concebida a pensar primeiro no principiante: toque numa bobina com o telemóvel, ela apresenta-se, feito. Nenhum jargão exigido — as camadas técnicas existem para quem quer aprofundar, não como pré-requisito.

**Outras pessoas podem ver as minhas bobinas?**
Só se escolher: amigos aceites, um interruptor público ou uma ligação de partilha do TigerHub. Tudo é privado por predefinição e imposto do lado do servidor.

**O que acontece se a nuvem do TigerTag fechar um dia?**
A resposta de conceção a esse receio é a abertura: o formato do chip é público, os chips leem-se totalmente offline para sempre, os SDKs e a aplicação de computador são de código aberto e a superfície da nuvem está documentada. As suas bobinas não podem ser «brickadas» por um servidor — é precisamente essa a diferença face ao silo de um fabricante.

## RFID e compatibilidade

**O Tiger Studio consegue ler etiquetas nativas Bambu/Creality/…?**
Ainda não — a forma certa de tratar a interoperabilidade continua a ser uma questão em aberto. Existem especificações de descodificação só de leitura documentadas para sete formatos de fabricantes, e o trabalho em curso visa **converter os dados das etiquetas dos fabricantes em bobinas digitais TigerData**, para que o filamento de outras marcas possa ser lido e gerido no ecossistema. Ver [compatibilidade](../compatibility/README.md).

**Porque é que as etiquetas dos fabricantes são bloqueadas e o TigerTag não?**
As etiquetas bloqueadas servem o aprisionamento ao fabricante. A resposta do TigerTag é um formato legível abertamente — ver [Centrado no utilizador vs centrado na impressora](../philosophy/user-centric-ecosystem.md).

**E as impressoras de resina?**
Em breve: o TigerTag está a ser alargado às **resinas** — a mesma identidade aberta em recipientes de resina para impressoras 3D de resina.

**O TigerTag funciona com uma impressora sem leitor RFID?**
Sim — é a [ponte do telemóvel](../philosophy/smartphone-bridge.md): o seu telemóvel (ou um leitor de computador) identifica a bobina e o sistema envia os dados para a impressora.

## Resolução de problemas

**O meu chip não é lido no telemóvel.**
Verifique se o NFC está ativado e encontre o ponto ideal da antena do seu telemóvel; as etiquetas leem-se melhor encostadas a ela. Se o chip se lê numa aplicação mas não noutra, atualize a aplicação.

**A minha impressora não aparece no Tiger Studio.**
Certifique-se de que a impressora está na mesma LAN, em modo LAN quando aplicável, e experimente «Add by IP» — os métodos de descoberta variam consoante a marca.

> Casos reais são bem-vindos — comunique o seu no [Discord oficial](https://discord.gg/3Qv5TSqnJH) ou nas issues do GitHub; esta secção cresce a partir deles.

## Programadores

**Alguém construiu realmente sobre o TigerTag?**
Sim — e independentemente de nós: o [OpenRFID](https://github.com/suchmememanyskill/OpenRFID) (conjunto de ferramentas RFID multifabricante da comunidade) lê TigerTags; o [Spooly Tracker](https://spoolytracker.com/) (plataforma de inventário, web + móvel) identifica bobinas com TigerTags; e o [Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware) faz da U1 **a primeira impressora que lê TigerTags nativamente**, e o [COSMOS](https://github.com/OpenCentauri/cosmos) faz o mesmo na Elegoo Centauri Carbon, com o leitor NFC integrado no seu Canvas. Ver [integrações de terceiros](../developers/integrations.md).

**Posso construir a minha própria aplicação sobre o TigerTag?**
Sim, sem autorização: especificação aberta do chip, [SDKs](../developers/sdks.md) (JS e Python) e uma [superfície de conta documentada](../developers/account-api.md) com exemplos funcionais para ESP32 / Home Assistant / Spoolman.

**Posso ligar o TigerTag ao meu ERP ou ao software de stocks interno?**
Sim — é exatamente o tipo de utilização que o protocolo aberto convida. Uma leitura (telemóvel NFC ou leitor USB ACR122U) dá-lhe a identidade da bobina; o que fizer com ela — gestão de stocks, acompanhamento de trabalhos, rastreabilidade, reposição, I&D — é consigo. Ver [O que pode construir?](../developers/README.md)

**Que hardware preciso para ler chips no meu próprio projeto?**
Qualquer telemóvel NFC, um leitor USB da classe ACR122U num computador — ou vá de DIY completo: um simples ESP32 com um módulo leitor PN532 ou RC522 chega (é assim que a [TigerScale](../products/tigerscale.md) o faz). Hardware corrente, barato, sem equipamento proprietário.

**A configuração Firebase ser pública é uma falha de segurança?**
Não — é o padrão normal do Firebase. Toda a imposição é feita do lado do servidor nas regras de segurança; um cliente só pode tocar nos dados do seu próprio utilizador.

## Fabricantes

**Somos uma marca de filamento — como enviamos bobinas etiquetadas com TigerTag?**
Rapidamente: uma linha de produção pode estar a funcionar com TigerTag em **apenas 5 dias**, a um custo muito baixo, com cada chip escrito em **cerca de 1 segundo** — comprovado com mais de 2,5 milhões de chips já expedidos pela Rosa3D, eSun, Sunlu, Landu, Jamg He, R3D, Filforme, Lotactree e Smart3DPT. E cada marca que adere reforça o argumento coletivo para que os fabricantes de impressoras leiam o TigerTag nativamente. Leia [Para fabricantes de filamento](../vision/for-filament-manufacturers.md) e depois contacte **[tigertag@tigertag.io](mailto:tigertag@tigertag.io)**.

**O meu produto pode tornar-se «TigerTag Certified»?**
Depende de que lado de uma linha se encontra — e a maioria dos produtos está do lado livre.

Se o seu produto **comunica com** chips TigerTag — um leitor, uma aplicação, uma impressora, um slicer, um secador, uma ferramenta — é **TigerTag Compatible**. Esse nível é gratuito, autodeclarado e não precisa de auditoria nem de autorização: construa-o, diga *«compatível com o TigerTag»* (ou *«com o TigerTag+»* se verificar assinaturas) e mostre o logótipo na sua interface, na sua documentação e na página da sua loja. A maioria dos produtos de terceiros pertence aqui, e nada no protocolo lhes é negado.

O **TigerTag Certified** é o outro nível, e está aberto a **tudo o que um terceiro construa** — um dispositivo, uma aplicação, filamento, um inlay, um suporte — que **passe numa auditoria** face aos requisitos. É concedido, não reivindicado: autorização escrita, uma entrada no registo de certificados e o direito de pôr a marca **no produto, no chip e na embalagem**. Existe em dois âmbitos, **TigerTag Certified** e **TigerTag+ Certified**, o segundo abrangendo produtos cujo tratamento de etiquetas assinadas foi verificado.

A diferença entre os níveis não é o que o seu produto *é* — é se alguém o verificou. Compatible diz *«funciona»*, com a sua palavra. Certified diz *«testámo-lo»*, com a nossa, e pode ser retirado. Critérios completos: [CERTIFICATION.md](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). Contacte-nos através da [organização GitHub](https://github.com/TigerTag-Project).

**Somos fabricantes de impressoras — o nosso firmware pode ler TigerTag?**
Sim — os leitores NTAG/NDEF são hardware corrente, a especificação do payload é pública ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)) e acrescentar a leitura de TigerTag a um firmware leva **menos de 3 dias**.

## Comunidade

**Onde faço perguntas ou obtenho ajuda?**
O **[Discord](https://discord.gg/3Qv5TSqnJH)** oficial — perguntas, ajuda, comentários, mostrar e contar. Para erros e problemas técnicos, as issues do GitHub de cada repositório também servem.

**Como contribuo?**
Documentação: [CONTRIBUTING.md](../../CONTRIBUTING.md) daqui. Código: o guia próprio de cada repositório — ver o [mapa dos repositórios](../developers/repositories.md).

**Tudo é gratuito — como apoio o projeto?**
Compre os chips oficiais ou o kit TigerPOD quando fosse comprar de qualquer maneira; use o [boné ou o polo](https://tigersystem.io/goodies); corrija uma página, traduza uma, construa algo compatível; e pergunte à sua marca de filamento porque é que as bobinas não estão etiquetadas — esta última fez mais do que todas as restantes. A lista completa, incluindo o que pode ignorar sem receio, está em [Apoiar o projeto](../support.md).

**Posso fazer fork de tudo e construir outra coisa?**
Sim. Licenças MIT/CC, deliberadamente passíveis de fork — basta respeitar a [política de marca](../../TRADEMARK.md).

---

**◀ Anterior:** [API de conta](../developers/account-api.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Roteiro](../roadmap/README.md)
