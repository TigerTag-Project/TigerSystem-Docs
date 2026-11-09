---
sourceHash: d37ed3c943f32aa40cbd7b6a72f2d0c9acccd892461d279223c8cdb49ca9ee47
sourcePath: docs/vision/why-tigersystem.md
---

# Porque é que o TigerSystem existe

## O problema

Uma bobina de filamento é o objeto mais manuseado na impressão 3D — e o menos inteligente. Quando a etiqueta desaparece, uma bobina não consegue dizer-lhe:

- que material e cor tem,
- como deve ser impressa,
- quanto filamento resta,
- onde está na sua prateleira,
- a quem pertence.

Os fabricantes de impressoras começaram a resolver isto com etiquetas RFID — **mas cada um resolve-o apenas dentro das suas próprias paredes.** Uma etiqueta da Bambu Lab não significa nada para uma impressora Creality; uma etiqueta da Anycubic não significa nada para mais ninguém. Os dados pertencem ao ecossistema do fabricante, não à pessoa que comprou o filamento.

## A resposta

O **TigerSystem** é um ecossistema aberto construído em torno de uma ideia:

> **A identidade da bobina pertence ao seu dono — não a uma marca de impressoras.**

**Tornámos as bobinas de filamento inteligentes.** Sabem o que são — e conseguem dizê-lo a toda a gente, sem qualquer atrito. A ambição: **tornar-se para os materiais de impressão 3D o que o código de barras se tornou para a prateleira.**

Cada bobina leva um chip NFC [TigerTag](../products/tigertag.md) com o seu perfil completo — marca, material, cor, diâmetro, definições de impressão. Qualquer leitor compatível — um smartphone, um leitor de secretária, uma impressora — consegue lê-lo. Uma única base de dados online partilhada ([Firebase simples](../concepts/inventory-and-cloud-sync.md)) mantém a conta do dono, o inventário, o histórico e a partilha sincronizados em todos os dispositivos.

## O que significa «centrado no utilizador» na prática

| Ecossistema centrado na impressora | TigerSystem |
|---|---|
| Etiqueta legível apenas pelas impressoras de uma marca | Etiqueta legível por qualquer dispositivo NFC |
| Formato de dados secreto ou cifrado | Formato aberto e documentado |
| O inventário vive na aplicação do fabricante | O inventário vive na **sua** conta |
| Funciona apenas com o filamento do fabricante | Funciona com **qualquer** marca de filamento |
| Morre com a nuvem do fabricante | SDKs abertos, especificação aberta, construível por si |

## A história por trás da caixa de areia

Começou em **2023, logo a seguir à Formnext**. A Bambu Lab tinha aberto a era das etiquetas de bobina proprietárias; nesse ano a Creality e a Anycubic seguiram-na, cada uma lançando impressoras com leitores RFID/NFC — e cada uma com o seu chip proprietário e bloqueado. Decidimos que não podia ser assim que o setor se assentava: tinha de existir um formato **de código aberto, neutro, multiplataforma e centrado no utilizador**. E não podia ser um manifesto — tinha de ser uma **alternativa viável e mais capaz** do que a que os fabricantes de impressoras oferecem, entregue aos fabricantes de filamento de terceiros para que as suas bobinas pudessem fazer *mais* do que as proprietárias, e a sua quota de mercado não se erodisse face ao filamento cativo.

Por isso pusemo-nos a trabalhar — e fomos à China. Apresentámos o projeto a fabricantes de impressoras — a Bambu Lab (ao Dr. Tao, o seu CEO), a Elegoo, a Creality, a Anycubic e a Biqu / BigTreeTech (reunindo também com o seu CEO) — e a fabricantes de filamento e fornecedores de equipamento (eSun, R3D, Landu, Sunlu, Jamg He), depois de já o termos apresentado à Rosa3D na Europa. A receção foi calorosa. Concebemos um protocolo **mais otimizado e mais versátil** do que os proprietários — centrado no utilizador, multimarca, multiplataforma. Estudámos os fluxos de trabalho das fábricas de filamento para perceber como programar chips NFC à escala industrial, e obtivemos produção de chips — etiquetas personalizadas, suportes personalizados, volumes enormes — a um custo suficientemente baixo para um objetivo inegociável: **acrescentar a tecnologia sem acrescentar um cêntimo ao preço da bobina para o utilizador final.**

Em **setembro de 2024**, os chips estavam em produção em massa e as fábricas estavam a ser abastecidas — todo o ecossistema do lado da fábrica veio primeiro. Nessa altura **não havia nenhuma aplicação móvel nem de computador**; vieram depois. Primeiro a móvel, porque não exige comprar nada: o leitor já está no bolso de toda a gente.

Essa escolha veio de uma pergunta que fazíamos sem parar na China: *«Onde estão os leitores RFID?»* Todos respondiam: *«Nas Bambu Lab.»* E nós dizíamos: falso. Na Bambu Lab os leitores estão **no AMS, não na impressora** — uma bobina de terceiros não pode ser detetada de todo pela máquina. **Os leitores RFID estão nos seus bolsos.** Em todos os telemóveis, prontos a usar — sem que sequer o saiba.

Sinceramente: construir tudo isto nós próprios nunca foi o plano inicial. **Foram produzidos mais de 2,5 milhões de chips NFC TigerTag — fazendo do TigerTag o protocolo RFID de terceiros mais implementado do mundo** — a maioria integrada de fábrica por marcas de filamento de terceiros (Rosa3D, eSun, Sunlu, Landu, Jamg He, R3D, Filforme, Lotactree, Smart3DPT, Nanovia — e outras em integração), mais uma parte menor comprada por makers para etiquetar bobinas em casa. Assumimos ingenuamente que a comunidade imaginaria sozinha as utilizações: uma identidade NFC aberta e documentada em cada bobina parecia um recreio óbvio.

Não aconteceu. Apesar da escala da implementação, nenhuma comunidade pegou no assunto; ninguém achou que valesse a pena construir integrações em torno do protocolo. Esperávamos que outros o assumissem — não o fizeram. Por isso fizemo-lo nós, embora não fosse o nosso objetivo original: começámos a **imaginar nós as utilizações**, para mostrar o potencial de um **protocolo NFC de código aberto para identificação de materiais centrado no utilizador, e não na impressora** — e para deixar exemplos funcionais a quem finalmente pegar no fio.

E está a começar a acontecer: o [OpenRFID](https://github.com/suchmememanyskill/OpenRFID) lê TigerTags, o [Spooly Tracker](https://spoolytracker.com/) construiu sobre eles a sua identificação de bobinas, e o [firmware alargado da comunidade](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware) da Snapmaker U1 lê-os **nativamente na própria impressora**, tal como o [COSMOS](https://github.com/OpenCentauri/cosmos) na Elegoo Centauri Carbon — veja as [integrações de terceiros](../developers/integrations.md).

## Uma caixa de areia, de propósito

O **lado virado para o utilizador** do TigerSystem é deliberadamente uma **caixa de areia**. Cada aplicação e dispositivo que criamos para utilizadores finais — Tiger Studio, Tiger NFC Connect, TigerScale, TigerPOD e outros projetos por vir — não tem outra ambição senão **mostrar o potencial**: cada um é uma **prova de conceito** funcional do que um **protocolo de código aberto, padrão, agnóstico e multiplataforma** como o TigerTag torna possível, de um script de fim de semana a um produto completo. Qualquer pessoa pode inspirar-se no nosso trabalho de integração e **imaginar as funcionalidades de amanhã**. São exemplos para copiar, não uma plataforma a que aderir.

O **lado da fábrica não é uma caixa de areia.** Por trás dos 2,5 milhões de chips corre uma suite de nível industrial — [TigerTag Factory &
Manager](../products/factory-suite.md): gestão da base de dados de filamentos e programação NFC/RFID em massa à velocidade da linha, com uma assinatura de fábrica a provar a origem de cada produto — usada **em produção** por fábricas de filamento parceiras. A caixa de areia é a sala de exposição; a linha de produção não é uma experiência.

## Neutro por conceção

O TigerTag não toma partido entre marcas de filamento, fabricantes de impressoras ou distribuidores. Não é um jardim murado com uma lista de parceiros — é um **formato que qualquer pessoa pode ler e escrever**.

Essa neutralidade estende-se aos próprios chips: a maioria dos utilizadores finais compra **chips NTAG baratos e sem marca** na Amazon, no AliExpress ou localmente — e isso é deliberadamente aceitável. Nada os bloqueia; o protocolo funciona de forma idêntica. Os chips oficiais da marca TigerTag ajudam a financiar a I&D, mas não são obrigatórios: **o protocolo a viver nas casas e nos escritórios dos utilizadores é a primeira recompensa.**

Nem o próprio protocolo é imposto: os chips são fornecidos **desbloqueados**, pelo que um utilizador que prefira outro formato NFC/RFID — existente ou personalizado — pode regravar o chip e migrar. O TigerTag é o formato de base com que as bobinas chegam, não um formato a que fique preso. Nada no ecossistema é pré-requisito: leia a especificação do chip, pegue num SDK e construa o software ou o negócio que realmente quer.

## O manifesto

> *«Feito para Makers. Aberto a Todos. Nascido da comunidade, o TigerTag dá aos utilizadores dados reais e total liberdade. 100 % de código aberto, liga os seus materiais, impressoras e marcas numa linguagem universal, hoje e amanhã. Junte-se ao movimento. Ligue o seu mundo com o TigerTag.»*
>
> — **Benoit Michaut**, CEO e fundador · Visão: **Barato e reutilizável**

---

**▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Ecossistema centrado no utilizador](../philosophy/user-centric-ecosystem.md) · **As pessoas por trás disto:** [A equipa](./team.md)

**Ver também:** [Filosofia do ecossistema aberto](../philosophy/open-ecosystem.md), [Identidade universal do filamento](../concepts/universal-filament-identity.md)
