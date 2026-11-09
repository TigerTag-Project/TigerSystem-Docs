---
sourceHash: d37ed3c943f32aa40cbd7b6a72f2d0c9acccd892461d279223c8cdb49ca9ee47
sourcePath: docs/vision/why-tigersystem.md
---

# Por que o TigerSystem existe

## O problema

Uma bobina de filamento é o objeto mais manuseado da impressão 3D — e o menos
inteligente. Quando a etiqueta se perde, uma bobina não consegue dizer:

- de que material e cor ela é,
- como deve ser impressa,
- quanto filamento resta,
- onde ela fica na sua prateleira,
- a quem ela pertence.

Os fabricantes de impressoras começaram a resolver isso com tags RFID — **mas cada um
resolve apenas dentro das próprias paredes.** Uma tag da Bambu Lab não significa nada para uma
impressora Creality; uma tag da Anycubic não significa nada para mais ninguém. Os dados
pertencem ao ecossistema do fabricante, não a quem comprou o
filamento.

## A resposta

O **TigerSystem** é um ecossistema aberto construído em torno de uma ideia:

> **A identidade da bobina pertence ao seu dono — não a uma marca de impressora.**

**Tornamos as bobinas de filamento inteligentes.** Elas sabem o que são — e
podem contar a todos, sem nenhum atrito. A ambição: **tornar-se para os materiais de
impressão 3D o que o código de barras se tornou para a prateleira.**

Cada bobina leva um chip NFC [TigerTag](../products/tigertag.md) com o seu
perfil completo — marca, material, cor, diâmetro, ajustes de impressão. Qualquer leitor
compatível — um smartphone, um leitor de mesa, uma impressora — pode lê-lo.
Um único banco de dados online compartilhado ([Firebase puro](../concepts/inventory-and-cloud-sync.md))
mantém a conta do dono, o inventário, o histórico e o compartilhamento sincronizados em todos os
dispositivos.

## O que “centrado no usuário” significa na prática

| Ecossistema centrado na impressora | TigerSystem |
|---|---|
| Tag legível apenas pelas impressoras de uma marca | Tag legível por qualquer dispositivo NFC |
| Formato de dados secreto ou criptografado | Formato aberto e documentado |
| O inventário vive no aplicativo do fabricante | O inventário vive na **sua** conta |
| Funciona apenas com o filamento do fabricante | Funciona com **qualquer** marca de filamento |
| Morre junto com a nuvem do fabricante | SDKs abertos, especificação aberta, possível de montar por conta própria |

## A história por trás do ambiente de testes

Tudo começou em **2023, logo depois da Formnext**. A Bambu Lab tinha inaugurado a era das
tags de bobina proprietárias; naquele ano a Creality e a Anycubic a seguiram, cada uma
lançando impressoras com leitores RFID/NFC — e cada uma com seu próprio chip trancado e
proprietário. Decidimos que não era assim que o setor poderia se acomodar: tinha de existir um
formato **de código aberto, neutro, multiplataforma e
centrado no usuário**. E não podia ser um manifesto — tinha de ser uma
**alternativa viável e mais capaz** ao que os fabricantes de impressoras oferecem,
entregue aos fabricantes de filamento de terceiros para que suas bobinas pudessem fazer *mais* do que
as proprietárias, e sua participação de mercado não fosse corroída por um
filamento cativo.

Então fomos à luta — e à China. Apresentamos o projeto a fabricantes de impressoras —
Bambu Lab (ao Dr. Tao, seu CEO), Elegoo, Creality, Anycubic
e Biqu / BigTreeTech (também reunidos com o CEO) — e a
fabricantes de filamento e fornecedores de equipamentos (eSun, R3D, Landu, Sunlu, Jamg He),
depois de já o termos apresentado à Rosa3D na Europa. A recepção foi calorosa.
Projetamos um protocolo **mais otimizado e mais versátil** do que
os proprietários — centrado no usuário, multimarca, multiplataforma. Estudamos os
fluxos de trabalho das fábricas de filamento para entender como programar chips NFC em
escala industrial, e conseguimos a produção de chips — etiquetas personalizadas, suportes
personalizados, volumes enormes — a um custo baixo o bastante para um objetivo inegociável:
**adicionar a tecnologia sem acrescentar um centavo ao preço da bobina para o
usuário final.**

Em **setembro de 2024**, os chips estavam em produção em massa e as fábricas
estavam sendo abastecidas — todo o ecossistema do lado da fábrica veio primeiro. Naquele
momento **não havia nenhum aplicativo móvel nem de desktop**; eles vieram
depois. O móvel primeiro, porque não exige comprar nada: o leitor já está
no bolso de todo mundo.

Essa escolha veio de uma pergunta que repetíamos na China: *“Onde estão os
leitores RFID?”* Todos respondiam: *“Nas Bambu Lab.”* E nós dizíamos: falso.
Na Bambu Lab os leitores estão **no AMS, não na impressora** — uma bobina
de terceiros não pode ser detectada pela máquina de forma alguma. **Os leitores RFID
estão nos seus bolsos.** Em todo celular, prontos para usar — sem você nem
saber.

Honestamente: construir tudo isso nós mesmos nunca foi o plano inicial. **Mais
de 2,5 milhões de chips NFC TigerTag foram produzidos — fazendo do TigerTag o
protocolo RFID de terceiros mais implantado do mundo** — a maioria deles
integrada de fábrica por marcas de filamento de terceiros (Rosa3D, eSun,
Sunlu, Landu, Jamg He, R3D, Filforme, Lotactree, Smart3DPT, Nanovia — e
outras em processo de integração), além de uma parcela menor
comprada por makers para etiquetar bobinas em casa. Presumimos ingenuamente que a comunidade
imaginaria os usos por conta própria: uma identidade NFC aberta e documentada em cada
bobina parecia um parquinho óbvio.

Isso não aconteceu. Apesar da escala da implantação, nenhuma comunidade pegou o
assunto; ninguém achou que valesse criar integrações em torno do protocolo.
Esperávamos que outros assumissem — não assumiram. Então nós assumimos, embora
não fosse nosso objetivo original: começamos a **imaginar os usos nós mesmos**, para mostrar
o potencial de um **protocolo NFC de código aberto para identificação de materiais
centrado no usuário, e não na impressora** — e para deixar exemplos funcionais
para quem finalmente pegar o fio da meada.

E está começando a acontecer:
o [OpenRFID](https://github.com/suchmememanyskill/OpenRFID) lê TigerTags,
o [Spooly Tracker](https://spoolytracker.com/) construiu sua identificação de bobinas
sobre eles, e o
[firmware estendido da comunidade](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware) da Snapmaker U1
os lê **nativamente na própria impressora**, como o
[COSMOS](https://github.com/OpenCentauri/cosmos) faz na Elegoo Centauri Carbon — veja as
[integrações de terceiros](../developers/integrations.md).

## Um ambiente de testes, de propósito

O **lado voltado ao usuário** do TigerSystem é deliberadamente um **ambiente de testes**. Cada
aplicativo e dispositivo que criamos para os usuários finais — Tiger Studio, Tiger NFC Connect,
TigerScale, TigerPOD e outros projetos por vir — não tem outra ambição além de
**mostrar o potencial**: cada um é uma **prova de conceito** funcional do que um
**protocolo de código aberto, padronizado, agnóstico e multiplataforma** como o TigerTag
torna possível, de um script de fim de semana a um produto completo. Qualquer pessoa pode se
inspirar no nosso trabalho de integração e **imaginar os recursos de
amanhã**. São exemplos para copiar, não uma plataforma na qual entrar.

O **lado da fábrica não é um ambiente de testes.** Por trás dos 2,5 milhões de chips roda
uma suíte de nível industrial — [TigerTag Factory &
Manager](../products/factory-suite.md): gerenciamento do banco de dados de filamentos e
programação NFC/RFID em massa na velocidade da linha, com uma assinatura de fábrica comprovando a origem de cada
produto — usada **em produção** por fábricas de filamento parceiras.
O ambiente de testes é a vitrine; a linha de produção não é um experimento.

## Neutro por projeto

O TigerTag não toma partido entre marcas de filamento, fabricantes de impressoras ou distribuidores.
Não é um jardim murado com uma lista de parceiros — é um **formato que qualquer pessoa pode ler
e gravar**.

Essa neutralidade se estende aos próprios chips: a maioria dos usuários finais compra **chips NTAG
baratos e sem marca** na Amazon, no AliExpress ou localmente — e isso está
deliberadamente certo. Nada os impede; o protocolo funciona de forma idêntica.
Os chips oficiais da marca TigerTag ajudam a financiar a P&D, mas não são
obrigatórios: **o protocolo vivendo nas casas e nos escritórios dos usuários é a primeira
recompensa.**

Nem o próprio protocolo é imposto: os chips são enviados **destravados**, de modo que um usuário
que prefira outro formato NFC/RFID — existente ou personalizado — pode regravar o
chip e migrar. O TigerTag é o formato base com que as bobinas chegam, não um
formato ao qual você fica preso. Nada no ecossistema é pré-requisito: leia a especificação do chip,
pegue um SDK e crie o software ou o negócio que você realmente quer.

## O manifesto

> *“Feito para Makers. Aberto a Todos. Nascido da comunidade, o TigerTag
> dá aos usuários dados reais e total liberdade. 100% de código aberto, ele
> conecta seu material, suas impressoras e suas marcas sob uma linguagem universal,
> hoje e amanhã. Junte-se ao movimento. Conecte o seu mundo com o TigerTag.”*
>
> — **Benoit Michaut**, CEO e fundador · Visão: **Cheap & Reusable** (“barato e reutilizável”)

---

**▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Ecossistema centrado no usuário](../philosophy/user-centric-ecosystem.md) · **As pessoas por trás:** [A equipe](./team.md)

**Veja também:** [Filosofia do ecossistema aberto](../philosophy/open-ecosystem.md), [Identidade universal de filamento](../concepts/universal-filament-identity.md)
