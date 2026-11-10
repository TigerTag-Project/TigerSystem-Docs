---
sourceHash: b28699b1ffe29a8197a36d00c7662d7a3930211c20f3d4e28aab3ac33abd11e8
sourcePath: docs/glossary.md
---

# Glossário

Todos os termos que esta documentação usa sem explicar. As definições são
extraídas das páginas indicadas ao lado — cada entrada aponta para a página que
detém a história completa.

> **Nota:** este glossário é uma **semente**. Ele cobre os termos que já
> aparecem neste repositório; é deliberadamente incompleto, e as entradas
> só são adicionadas quando existe conteúdo para elas em algum lugar da documentação.
> Faltou um termo? Adicione-o com um link para a página que o define.

## O vocabulário próprio do ecossistema

| Termo | Significado |
|---|---|
| **TigerSystem** | Todo o ecossistema aberto: o formato do chip, os dados de referência, os aplicativos, o hardware e a superfície de nuvem. Veja [Por que o TigerSystem existe](./vision/why-tigersystem.md). |
| **TigerTag** | Um chip NFC NTAG padrão que carrega o payload aberto de 144 bytes do TigerTag — a identidade de uma bobina, legível por qualquer coisa. Veja [TigerTag](./products/tigertag.md). |
| **TigerTag+** | Um TigerTag cuja identidade carrega um **id de produto do catálogo oficial**, além de dados de enriquecimento opcionais servidos pelos metadados da Web API. O chip continua 100% legível offline. O `+` significa *identificado*, não *certificado*. Veja [TigerTag+](./products/tigertag-plus.md). |
| **TigerTag+ Certified** | Um TigerTag+ que também carrega uma **assinatura** criptográfica, gravada por um fabricante que detém a certificação e as suas ferramentas de assinatura. Verificar uma é gratuito e offline; emitir uma é o que a certificação concede. |
| **TigerData** | A mesma identidade sem nenhum chip: os dados do protocolo em forma puramente digital, sem UID, promovível a um chip real a qualquer momento. Veja [Uma identidade, quatro estados](./concepts/universal-filament-identity.md). |
| **TigerData+** | Uma bobina sem chip que carrega um produto real do catálogo oficial — marca, cor, material, temperaturas, diâmetro, SKU e EAN exatos — em vez de valores digitados à mão. O `+` significa *identificado*, não *certificado*. |
| **Official** | Feito pelo próprio TigerSystem — os chips nos dois formatos, e os aplicativos e o hardware em [Produtos](./products/README.md). Uma declaração de origem, não uma marca que se concede: o TigerSystem não se certifica a si mesmo. |
| **TigerTag Compatible** | O nível gratuito: tudo o que *conversa com* chips TigerTag — leitores, aplicativos, impressoras, fatiadores, ferramentas. Nenhuma permissão é necessária para implementá-lo, para dizê-lo ou para exibir o logotipo em um aplicativo, na documentação ou em um anúncio de loja. Cobre também o **TigerTag+**: verificar uma assinatura é gratuito, offline e sem restrições. A única palavra que ele nunca inclui é *certified*. |
| **TigerTag Certified** | O nível auditado, aberto a tudo o que um terceiro constrói — um dispositivo, um aplicativo, filamento, um inlay, um suporte — depois de passar em uma auditoria com base nos requisitos. Concedido, não reivindicado, listado no registro de certificação e passível de retirada. Existe em dois escopos, **TigerTag Certified** e **TigerTag+ Certified**. Os parceiros certificados podem aplicar a marca **no produto** e emitir assinaturas TigerTag+. Veja [Documentação para desenvolvedores](./developers/README.md) e os [critérios de certificação](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). |
| **Tiger NFC Connect** | O aplicativo de celular (iOS/Android) — aproxime para ler, aproxime para gravar, navegue pelo catálogo. Antes "TigerTag RFID Connect". Veja [Tiger NFC Connect](./products/tigertag-connect.md). |
| **Tiger Studio** | O aplicativo desktop de código aberto (Windows/macOS/Linux) — inventário, racks, sensores e vínculos com impressoras. Veja [Tiger Studio](./products/tiger-studio.md). |
| **TigerHub** | A casa web do ecossistema em `tigersystem.io` — vitrine, listas de desejos, códigos de amigo, compartilhamento público de listas. Veja [TigerHub](./products/tigerhub.md). |
| **TigerPOD** | O suporte de leitor NFC duplo imprimível em 3D — STL gratuito. Veja [TigerPOD](./products/tigerpod.md). |
| **TigerScale** | A balança ESP32 de código aberto que responde "quanto sobrou?". Veja [TigerScale](./products/tigerscale.md). |
| **TigerSpool** | A caixa ao lado da impressora que grava a identidade de uma bobina em um slot da impressora ao contato — sem aplicativo, sem teclado, qualquer marca. Veja [TigerSpool](./products/tigerspool.md). |
| **TigerTag Factory / Manager** | A cadeia de ferramentas industrial, de nível de produção, que programa chips nas linhas de produção de filamento, e as ferramentas que curam o banco de dados de filamentos. Não é pública. Veja [Suíte de fábrica](./products/factory-suite.md). |
| **Suporte (Carrier)** | A tira que carrega os dois chips de uma bobina — um em cada ponta dobrada, colada ao miolo de papelão com adesivo industrial 3M. Usada na linha de fábrica, vendida separadamente para refils e pública e imprimível em casa. Veja [O chip TigerTag](./concepts/tigertag-chip.md). |
| **Masterspool** | Um carretel reutilizável em que um refil sem carretel é montado. O chip do refil fica dentro do miolo de papelão, então permanece com o filamento e não com o carretel. |
| **Twin Tag** | Os dois chips de uma bobina, gravados juntos como um par e mantidos idênticos durante toda a vida da bobina — sempre contados como **uma** bobina. |
| **Banco de dados de referência** | As tabelas de IDs compartilhadas (marcas, materiais, aspectos, tipos, diâmetros, unidades) servidas a partir de `cdn.tigertag.io`, para que um chip codificado por uma ferramenta seja lido de forma idêntica em todas as outras. Veja [Identidade universal do filamento](./concepts/universal-filament-identity.md). |
| **Aspecto** | O campo do banco de dados de referência que descreve a cor e o acabamento de um filamento; o [swatch do material](./developers/material-swatch.md) é pintado a partir dele. |
| **Swatch do material** | A convenção normativa para transformar os *dados* de cor de uma bobina na mesma *imagem* em todas as superfícies — três formas (uma divisão suave a 135° para 2-3 cores duras, um camembert para 4+, uma rampa a 135° para cores suaves), com um renderizador de referência para conferir uma implementação. Veja [O swatch do material](./developers/material-swatch.md). |
| **Arquivo `.ttag`** | O arquivo de intercâmbio portátil e offline que carrega um ou mais materiais do inventário (TigerData, TigerData+, TigerTag ou TigerTag+) entre ferramentas. Veja [o formato `.ttag`](./developers/ttag-format.md). |
| **Segunda vida** | Recodificar um chip para uma bobina reabastecida ou reaproveitada, ou convertê-lo para NDEF simples para qualquer outro uso de NFC — um chip nunca deve virar lixo eletrônico. Veja [Segunda vida](./philosophy/second-life.md). |
| **Ponte do smartphone** | Usar um celular (ou um leitor desktop) para identificar uma bobina para uma impressora que não tem leitor RFID próprio. Veja [A ponte do smartphone](./philosophy/smartphone-bridge.md). |
| **Vínculo com a impressora** | O Tiger Studio conversando com uma máquina pela LAN — telemetria, slots de filamento, trabalho, câmera. Diferente de ler as tags do próprio fabricante. Veja [Compatibilidade](./compatibility/README.md). |
| **Refil** | Um rolo de filamento vendido sem carretel, para ser montado em uma bobina que você já tem. |

## NFC e RFID

| Termo | Significado |
|---|---|
| **NFC** | Near-Field Communication — o rádio de curto alcance que todo smartphone moderno pode usar para ler um TigerTag. |
| **RFID** | Radio-Frequency Identification, a família mais ampla a que o NFC pertence. Usado aqui para as tags de bobina bloqueadas dos fabricantes e também para o TigerTag. |
| **NTAG213 / 215 / 216** | A família de chips NXP que um TigerTag usa (NFC Forum Type 2). O payload é dimensionado para caber no menor, o NTAG213; os chips oficiais da marca são NTAG215 para deixar folga de memória para reutilização. Veja [O chip TigerTag](./concepts/tigertag-chip.md). |
| **NDEF** | NFC Data Exchange Format — o contêiner padrão em que o payload do TigerTag é armazenado, e é por isso que qualquer ferramenta NFC pode lê-lo e que o chip de uma bobina vazia pode virar um objeto NFC comum. |
| **UID** | O identificador de hardware único do chip, definido na fabricação e não regravável. O backup de um chip está ligado a ele, assim como a assinatura de um TigerTag+ Certified. |
| **Mifare Classic / Mifare Ultralight** | As famílias de chips que os fabricantes de impressoras usam para as próprias tags de bobina — documentadas por fabricante na [matriz de compatibilidade](./compatibility/README.md). |
| **ACR122U** | A classe de leitor NFC USB comum usada para ler e gravar chips a partir de um computador; um [TigerPOD](./products/tigerpod.md) é um suporte construído em torno de um. |
| **PN532 / RC522** | Módulos leitores NFC baratos, normalmente combinados com um ESP32, para leitores DIY — a abordagem que a [TigerScale](./products/tigerscale.md) usa. |
| **ECDSA** | O esquema de assinatura que o extra opcional `verify` do SDK Python verifica — o mecanismo por trás de uma assinatura de origem TigerTag+. Veja [SDKs](./developers/sdks.md). |
| **OpenSpool** | Um padrão aberto e independente de tag NFC para bobinas (NFC Type 2, JSON NDEF, desbloqueado). Veja [OpenSpool](./compatibility/openspool.md). |
| **OpenRFID** | O kit de ferramentas RFID multifabricante da comunidade, de que as fichas de decodificação por fabricante derivam e que lê TigerTags. Veja [Integrações de terceiros](./developers/integrations.md). |

## Impressoras e hardware

| Termo | Significado |
|---|---|
| **AMS** | O Automatic Material System da Bambu Lab — o alimentador de várias bobinas. Relevante aqui porque normalmente divide um leitor RFID entre dois slots, e é por isso que uma bobina leva dois chips. |
| **CFS** | O Filament System da Creality — sua unidade multimaterial. |
| **ACE** | A unidade multimaterial da Anycubic. |
| **Canvas** | A unidade multimaterial da Elegoo. |
| **IFS** | O sistema multifilamento da FlashForge — o campo em seu protocolo ainda é `matlStation`. |
| **MMU** | Multi-Material Unit — o termo genérico para o acessório que alimenta vários filamentos em uma impressora (ERCF, MMU2, Box Turtle… no mundo Klipper). Veja [Klipper](./compatibility/klipper.md). |
| **Klipper / Moonraker** | O firmware de impressora aberto e a sua API — o WebSocket do Moonraker é o transporte que o vínculo da Snapmaker já usa, e o próximo natural para máquinas Klipper. Veja [Klipper](./compatibility/klipper.md). |
| **HID Scale** | O protocolo USB padrão para balanças (DYMO série M e compatíveis), lido nativamente pelo Tiger Studio como alternativa de terceiros a uma TigerScale. |
| **TD / TD-1 / TD1s** | **Transmission Distance** — quanta luz um filamento deixa passar, o valor de que a impressão HueForge e full-spectrum depende — e o analisador da [AJAX-3D](https://ajax-3d.com) que o mede, nas variantes DIY (TD-1) e pré-montada (TD1s). O TD medido pode ser armazenado no próprio protocolo TigerTag. Veja [Hardware de terceiros](./compatibility/third-party-hardware.md). |
| **ESP32** | O microcontrolador comum por trás da TigerScale e da maioria dos leitores TigerTag DIY. |

## Nuvem e dados

| Termo | Significado |
|---|---|
| **Firebase / Firestore** | O serviço simples do Google que hospeda contas e inventários — um banco de dados compartilhado que todos os aplicativos leem e gravam, com a aplicação das regras em regras de segurança no servidor. Veja [Inventário e sincronização na nuvem](./concepts/inventory-and-cloud-sync.md). |
| **`cdn.tigertag.io`** | De onde o banco de dados de referência compartilhado é servido. |
| **Código de amigo / link de lista** | As duas formas de compartilhar um inventário — um amigo aceito, ou um link público somente leitura que qualquer pessoa abre em um navegador, sem aplicativo e sem conta. Veja [TigerHub](./products/tigerhub.md). |
| **SKU / EAN** | O código de produto do fabricante e o número do seu código de barras — o que um TigerData+ carrega para dizer exatamente qual produto do catálogo uma bobina é. |

---

**▲ [Índice da documentação](../README.md)** · **Veja também:** [FAQ](./faq/README.md), [O chip TigerTag](./concepts/tigertag-chip.md), [Identidade universal do filamento](./concepts/universal-filament-identity.md)
