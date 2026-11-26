---
sourceHash: 26da829356af402a7e35df1fd40b2563bb966a93eecf9345a4602304c6124f16
sourcePath: docs/compatibility/label-printers.md
---

# Impressoras de etiquetas Bluetooth

Imprima a etiqueta TigerQR de uma bobina diretamente do telemóvel numa pequena
impressora térmica de etiquetas Bluetooth: sem computador, sem PDF, sem
aplicação de impressora pelo meio.

> **Ponto de situação a 2026-11-26.** [Tiger NFC Connect](../products/tiger-nfc-connect.md)
> (iOS / Android) imprime nestas impressoras a partir da sua **próxima
> atualização**. No [Tiger Studio](../products/tiger-studio.md), as mesmas
> impressoras estão a ser integradas, **ainda não publicadas**. Até lá,
> qualquer impressora funciona através da sua própria aplicação a partir do
> PDF, PNG ou SVG da etiqueta
> ([etiquetas impressas](../developers/spool-ids-and-qr-links.md)).

## Como funciona

- O Tiger NFC Connect envia a etiqueta TigerQR da **bobina** ou do
  **filamento** para a impressora por Bluetooth.
- **Cada impressora memoriza o seu próprio formato de etiqueta**, o do rolo que
  tem colocado.
- Cada impressão mantém uma **pequena margem de segurança**, para que um rolo
  ligeiramente desalinhado receba mesmo assim a etiqueta inteira.
- Os rolos de 12 mm imprimem a etiqueta **Slim** de 40 × 12 mm; os rolos de
  50 mm de largura aceitam etiquetas maiores (testada a de 50 × 30 mm).

> **Dica:** uma impressora liga-se a **um dispositivo de cada vez**. Feche a
> aplicação do fabricante da impressora antes de imprimir a partir do
> Tiger NFC Connect.

## A nossa escolha

As impressoras Niimbot são muito, muito boas. A **D110** tem a melhor relação
qualidade-preço, muito boa pelo preço; a **B1** e a **B1 Pro** são as indicadas
com mais orçamento, para etiquetas maiores. A Marklife **P15** funciona, mas é
mais volumosa e a qualidade de impressão parece ligeiramente inferior.

As quatro foram testadas em papel.

| Impressora | Rolos | Etiqueta testada | A nossa opinião | Comprar |
|---|---|---|---|---|
| **Niimbot D110** (e D110-M) | 12 mm | 40 × 12 mm | **Melhor relação qualidade-preço**: muito boa pelo preço | [Amazon](https://link.amazon/B039fb6VY) |
| **Niimbot B1** | até 50 mm de largura | 50 × 30 mm | Etiquetas maiores, com mais orçamento | [Amazon](https://link.amazon/B0a3CHt3H) |
| **Niimbot B1 Pro** | 50 mm de largura | 50 × 30 mm | 300 dpi, a impressão mais nítida | [Amazon](https://link.amazon/B09wFIrwk) |
| **Marklife P15** (vendida como «Pristar P15» na Amazon) | 12 mm | 40 × 12 mm | Funciona, mas é mais volumosa, impressão ligeiramente inferior | [Amazon](https://link.amazon/B0iRdI1G6) |

> As ligações desta tabela são **ligações de afiliado da Amazon** (amazon.fr):
> como Associado da Amazon, a TigerTag ganha com as compras elegíveis, **sem
> custo adicional para si**. Ajuda a financiar o protocolo aberto. Comprar a
> mesma impressora noutro lado funciona exatamente tão bem.

Sem preços aqui: mudam com demasiada frequência.

## Também suportadas, ainda não testadas em papel

O código da aplicação também controla estes modelos; ainda não foram testados
em papel:

- **Niimbot:** D11, D101, B18, B21, B21 Pro, B3S;
- **Phomemo:** M110, M120, M200, M220, M221.

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [Hardware de terceiros compatível](./third-party-hardware.md), [Tiger NFC Connect](../products/tiger-nfc-connect.md), [Ids de bobina e ligações QR](../developers/spool-ids-and-qr-links.md)
