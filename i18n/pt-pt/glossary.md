---
sourceHash: 27444f945a927973e57cd59c875c9dad41b748d476f0ff4d72224db2aac71368
sourcePath: docs/glossary.md
---

# Glossário

Todos os termos que esta documentação usa sem os explicar. As definições são extraídas das páginas indicadas ao lado — cada entrada aponta para a página que detém a história completa.

> **Nota:** este glossário é uma **semente**. Cobre os termos que já aparecem neste repositório; é deliberadamente incompleto e as entradas só são acrescentadas quando já existe em algum lugar da documentação a substância que as sustenta. Falta um termo? Acrescente-o com uma ligação para a página que o define.

## O vocabulário próprio do ecossistema

| Termo | Significado |
|---|---|
| **TigerSystem** | Todo o ecossistema aberto: o formato do chip, os dados de referência, as aplicações, o hardware e a superfície da nuvem. Ver [Porque existe o TigerSystem](./vision/why-tigersystem.md). |
| **TigerTag** | Um chip NFC NTAG padrão com o payload aberto TigerTag de 144 bytes — a identidade de uma bobina, legível por qualquer coisa. Ver [TigerTag](./products/tigertag.md). |
| **TigerTag+** | Um TigerTag cuja identidade leva um **ID de produto do catálogo oficial**, mais dados de enriquecimento opcionais servidos pelos metadados da Web API. O chip continua legível a 100 % offline. O `+` significa *identificado*, não *certificado*. Ver [TigerTag+](./products/tigertag-plus.md). |
| **TigerTag+ Certified** | Um TigerTag+ que leva também uma **assinatura** criptográfica, escrita por um fabricante que detém a certificação e as respetivas ferramentas de assinatura. Verificar uma é gratuito e offline; emitir uma é o que a certificação concede. |
| **TigerData** | A mesma identidade sem chip nenhum: os dados do protocolo em forma puramente digital, sem UID, promovíveis a um chip real em qualquer altura. Ver [Uma identidade, quatro estados](./concepts/universal-filament-identity.md). |
| **TigerData+** | Uma bobina sem chip que leva um produto real do catálogo oficial — marca, cor, material, temperaturas, diâmetro, SKU e EAN exatos — em vez de valores escritos à mão. O `+` significa *identificado*, não *certificado*. |
| **Oficial** | Feito pelo próprio TigerSystem — os chips nos dois formatos, e as aplicações e o hardware em [Produtos](./products/README.md). Uma declaração de origem, não uma marca que se concede: o TigerSystem não se certifica a si próprio. |
| **TigerTag Compatible** | O nível gratuito: tudo o que *comunica com* chips TigerTag — leitores, aplicações, impressoras, slicers, ferramentas. Não é preciso autorização para o implementar, para o dizer ou para mostrar o logótipo numa aplicação, na documentação ou na página de uma loja. Abrange também o **TigerTag+**: verificar uma assinatura é gratuito, offline e sem restrições. A única palavra que nunca inclui é *certificado*. |
| **TigerTag Certified** | O nível auditado, aberto a tudo o que um terceiro construa — um dispositivo, uma aplicação, filamento, um inlay, um suporte — depois de passar numa auditoria face aos requisitos. Concedido em vez de reivindicado, listado no registo de certificados e retirável. Existe em dois âmbitos, **TigerTag Certified** e **TigerTag+ Certified**. Os parceiros certificados podem aplicar a marca **no produto** e emitir assinaturas TigerTag+. Ver [Documentação para programadores](./developers/README.md) e os [critérios de certificação](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). |
| **Tiger NFC Connect** | A aplicação móvel (iOS/Android) — toque para ler, toque para escrever, navegue no catálogo. Anteriormente «TigerTag RFID Connect». Ver [Tiger NFC Connect](./products/tiger-nfc-connect.md). |
| **Tiger Studio** | A aplicação de computador de código aberto (Windows/macOS/Linux) — inventário, racks, sensores e ligações a impressoras. Ver [Tiger Studio](./products/tiger-studio.md). |
| **TigerHub** | A casa web do ecossistema em `tigersystem.io` — montra, listas de desejos, códigos de amigo, partilha pública de listas. Ver [TigerHub](./products/tigerhub.md). |
| **TigerPOD** | O suporte de dois leitores NFC imprimível em 3D — STL gratuito. Ver [TigerPOD](./products/tigerpod.md). |
| **TigerScale** | A balança de filamento ESP32 de código aberto que responde a «quanto resta?». Ver [TigerScale](./products/tigerscale.md). |
| **TigerSpool** | A caixa junto à impressora que escreve a identidade de uma bobina num slot da impressora ao contacto — sem aplicação, sem teclado, qualquer marca. Ver [TigerSpool](./products/tigerspool.md). |
| **TigerTag Factory / Manager** | A cadeia de ferramentas industrial, de nível de produção, que programa chips nas linhas de produção de filamento, e as ferramentas que gerem a base de dados de filamentos. Não é pública. Ver [Suite de fábrica](./products/factory-suite.md). |
| **Suporte (carrier)** | A tira que leva os dois chips de uma bobina — um em cada ponta dobrada, colada ao núcleo de cartão com adesivo industrial 3M. Usado na linha de fábrica, vendido em separado para recargas, e público e imprimível em casa. Ver [O chip TigerTag](./concepts/tigertag-chip.md). |
| **Masterspool** | Uma bobina reutilizável sobre a qual se monta uma recarga sem bobina. O chip de uma recarga vai dentro do núcleo de cartão, de modo que fica com o filamento e não com a bobina. |
| **Twin Tag** | Os dois chips de uma bobina, escritos em conjunto como um par e mantidos idênticos durante toda a vida da bobina — sempre contados como **uma** bobina. |
| **Base de dados de referência** | As tabelas de IDs partilhadas (marcas, materiais, aspetos, tipos, diâmetros, unidades) servidas a partir de `cdn.tigertag.io`, para que um chip codificado por uma ferramenta seja lido de forma idêntica em todas as outras. Ver [Identidade universal do filamento](./concepts/universal-filament-identity.md). |
| **Aspeto** | O campo da base de dados de referência que descreve a cor e o acabamento de um filamento; a [amostra de material](./developers/material-swatch.md) é pintada a partir dele. |
| **Amostra de material** | A convenção normativa para transformar os *dados* da cor de uma bobina na mesma *imagem* em todas as superfícies — três formas (uma divisão suave a 135° para 2-3 cores duras, um camembert para 4+, uma rampa a 135° para cores suaves), com um renderizador de referência para confrontar uma implementação. Ver [A amostra de material](./developers/material-swatch.md). |
| **Ficheiro `.ttag`** | O ficheiro de intercâmbio portátil e offline que transporta um ou mais materiais do inventário (TigerData, TigerData+, TigerTag ou TigerTag+) entre ferramentas. Ver [o formato `.ttag`](./developers/ttag-format.md). |
| **Segunda vida** | Recodificar um chip para uma bobina recarregada ou reaproveitada, ou convertê-lo em NDEF simples para qualquer outro uso NFC — um chip nunca deve tornar-se lixo eletrónico. Ver [Segunda vida](./philosophy/second-life.md). |
| **Ponte do telemóvel** | Usar um telemóvel (ou um leitor de computador) para identificar uma bobina para uma impressora que não tem leitor RFID próprio. Ver [A ponte do telemóvel](./philosophy/smartphone-bridge.md). |
| **Ligação à impressora** | O Tiger Studio a comunicar com uma máquina através da LAN — telemetria, slots de filamento, trabalho, câmara. Distinta de ler as etiquetas próprias desse fabricante. Ver [Compatibilidade](./compatibility/README.md). |
| **Recarga (refill)** | Um rolo de filamento vendido sem bobina, para ser montado numa bobina que já tem. |

## NFC e RFID

| Termo | Significado |
|---|---|
| **NFC** | Near-Field Communication — o rádio de curto alcance que todos os telemóveis modernos podem usar para ler um TigerTag. |
| **RFID** | Radio-Frequency Identification, a família mais ampla a que o NFC pertence. Aqui usada tanto para as etiquetas de bobina bloqueadas dos fabricantes como para o TigerTag. |
| **NTAG213 / 215 / 216** | A família de chips NXP que um TigerTag usa (NFC Forum Type 2). O payload é dimensionado para caber no mais pequeno, o NTAG213; os chips oficiais com marca são NTAG215 para deixar margem de memória à reutilização. Ver [O chip TigerTag](./concepts/tigertag-chip.md). |
| **NDEF** | NFC Data Exchange Format — o contentor padrão em que o payload TigerTag é guardado, razão pela qual qualquer ferramenta NFC o consegue ler e pela qual o chip de uma bobina vazia pode ser transformado num objeto NFC simples. |
| **UID** | O identificador único de hardware do chip, definido no fabrico e não regravável. Uma cópia de segurança de chip está ligada a ele, tal como uma assinatura TigerTag+ Certified. |
| **Mifare Classic / Mifare Ultralight** | As famílias de chips que os fabricantes de impressoras usam para as suas próprias etiquetas de bobina — documentadas por fabricante na [matriz de compatibilidade](./compatibility/README.md). |
| **ACR122U** | A classe de leitores NFC USB corrente usada para ler e escrever chips a partir de um computador; um [TigerPOD](./products/tigerpod.md) é um suporte construído em torno de um. |
| **PN532 / RC522** | Módulos leitores NFC baratos, tipicamente associados a um ESP32, para leitores DIY — a abordagem que a [TigerScale](./products/tigerscale.md) usa. |
| **ECDSA** | O esquema de assinatura que o extra opcional `verify` do SDK Python verifica — o mecanismo por trás de uma assinatura de origem TigerTag+. Ver [SDKs](./developers/sdks.md). |
| **OpenSpool** | Uma norma aberta e independente de etiquetas NFC para bobinas (NFC Type 2, NDEF JSON, desbloqueada). Ver [OpenSpool](./compatibility/openspool.md). |
| **OpenRFID** | O conjunto de ferramentas RFID multifabricante da comunidade de que derivam as fichas de descodificação por fabricante, e que lê TigerTags. Ver [Integrações de terceiros](./developers/integrations.md). |

## Impressoras e hardware

| Termo | Significado |
|---|---|
| **AMS** | O Automatic Material System da Bambu Lab — o alimentador multibobina. Relevante aqui porque tipicamente partilha um leitor RFID entre dois slots, razão pela qual uma bobina leva dois chips. |
| **CFS** | O Filament System da Creality — a sua unidade multimaterial. |
| **ACE** | A unidade multimaterial da Anycubic. |
| **Canvas** | A unidade multimaterial da Elegoo. |
| **IFS** | O sistema multifilamento da FlashForge — o campo no seu protocolo continua a ser `matlStation`. |
| **MMU** | Multi-Material Unit — o termo genérico para o módulo adicional que alimenta vários filamentos a uma impressora (ERCF, MMU2, Box Turtle… no mundo Klipper). Ver [Klipper](./compatibility/klipper.md). |
| **Klipper / Moonraker** | O firmware aberto de impressoras e a sua API — o WebSocket do Moonraker é o transporte que a ligação da Snapmaker já usa, e o próximo natural para as máquinas Klipper. Ver [Klipper](./compatibility/klipper.md). |
| **HID Scale** | O protocolo USB padrão para balanças (série DYMO M e compatíveis), lido nativamente pelo Tiger Studio como alternativa de terceiros a uma TigerScale. |
| **TD / TD-1 / TD1s** | **Transmission Distance** — quanta luz um filamento deixa passar, o valor em que a impressão HueForge e full-spectrum se apoia — e o analisador da [AJAX-3D](https://ajax-3d.com) que o mede, nas variantes DIY (TD-1) e pré-montada (TD1s). O TD medido pode ser guardado no próprio protocolo TigerTag. Ver [Hardware de terceiros](./compatibility/third-party-hardware.md). |
| **ESP32** | O microcontrolador corrente por trás da TigerScale e da maioria dos leitores TigerTag DIY. |

## Nuvem e dados

| Termo | Significado |
|---|---|
| **Firebase / Firestore** | O serviço simples da Google que aloja contas e inventários — uma base de dados partilhada que todas as aplicações leem e escrevem, com imposição em regras de segurança do lado do servidor. Ver [Inventário e sincronização na nuvem](./concepts/inventory-and-cloud-sync.md). |
| **`cdn.tigertag.io`** | Onde a base de dados de referência partilhada é servida. |
| **Código de amigo / ligação de lista** | As duas formas de partilhar um inventário — um amigo aceite, ou uma ligação pública só de leitura que qualquer pessoa abre num navegador, sem aplicação e sem conta. Ver [TigerHub](./products/tigerhub.md). |
| **SKU / EAN** | O código de produto do fabricante e o número do seu código de barras — o que um TigerData+ leva para dizer exatamente que produto do catálogo é uma bobina. |

---

**▲ [Índice da documentação](../README.md)** · **Ver também:** [FAQ](./faq/README.md), [O chip TigerTag](./concepts/tigertag-chip.md), [Identidade universal do filamento](./concepts/universal-filament-identity.md)
