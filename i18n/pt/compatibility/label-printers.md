---
sourceHash: 26da829356af402a7e35df1fd40b2563bb966a93eecf9345a4602304c6124f16
sourcePath: docs/compatibility/label-printers.md
---

# Impressoras de etiquetas Bluetooth

Imprima a etiqueta TigerQR de uma bobina direto do celular numa pequena
impressora térmica de etiquetas Bluetooth: sem computador, sem PDF, sem
aplicativo de impressora no meio.

> **Situação em 2026-11-26.** [Tiger NFC Connect](../products/tiger-nfc-connect.md)
> (iOS / Android) imprime nessas impressoras a partir da sua **próxima
> atualização**. No [Tiger Studio](../products/tiger-studio.md), as mesmas
> impressoras estão sendo integradas, **ainda não lançadas**. Até lá, qualquer
> impressora funciona pelo próprio aplicativo a partir do PDF, PNG ou SVG da
> etiqueta ([etiquetas impressas](../developers/spool-ids-and-qr-links.md)).

## Como funciona

- O Tiger NFC Connect envia a etiqueta TigerQR da **bobina** ou do
  **filamento** para a impressora por Bluetooth.
- **Cada impressora lembra o seu próprio formato de etiqueta**, o do rolo
  colocado nela.
- Cada impressão mantém uma **pequena margem de segurança**, para que um rolo
  levemente deslocado ainda receba a etiqueta inteira.
- Rolos de 12 mm imprimem a etiqueta **Slim** de 40 × 12 mm; rolos de 50 mm de
  largura aceitam etiquetas maiores (testada a de 50 × 30 mm).

> **Dica:** uma impressora se conecta a **um aparelho por vez**. Feche o
> aplicativo do fabricante da impressora antes de imprimir pelo
> Tiger NFC Connect.

## Nossa escolha

As impressoras Niimbot são muito, muito boas. A **D110** tem o melhor
custo-benefício, muito boa pelo preço; a **B1** e a **B1 Pro** são as que
valem com mais orçamento, para etiquetas maiores. A Marklife **P15** funciona,
mas é mais volumosa e a qualidade de impressão parece um pouco inferior.

As quatro foram testadas em papel.

| Impressora | Rolos | Etiqueta testada | Nossa opinião | Comprar |
|---|---|---|---|---|
| **Niimbot D110** (e D110-M) | 12 mm | 40 × 12 mm | **Melhor custo-benefício**: muito boa pelo preço | [Amazon](https://link.amazon/B039fb6VY) |
| **Niimbot B1** | até 50 mm de largura | 50 × 30 mm | Etiquetas maiores, com mais orçamento | [Amazon](https://link.amazon/B0a3CHt3H) |
| **Niimbot B1 Pro** | 50 mm de largura | 50 × 30 mm | 300 dpi, a impressão mais nítida | [Amazon](https://link.amazon/B09wFIrwk) |
| **Marklife P15** (vendida como "Pristar P15" na Amazon) | 12 mm | 40 × 12 mm | Funciona, mas é mais volumosa, impressão um pouco inferior | [Amazon](https://link.amazon/B0iRdI1G6) |

> Os links desta tabela são **links de afiliado da Amazon** (amazon.fr): como
> Associado da Amazon, o TigerTag ganha com compras qualificadas, **sem custo
> adicional para você**. Isso ajuda a financiar o protocolo aberto. Comprar a
> mesma impressora em qualquer outro lugar funciona exatamente igual.

Sem preços aqui: eles mudam com muita frequência.

## Também compatíveis, ainda não testadas em papel

O código do aplicativo também controla estes modelos; eles ainda não foram
testados em papel:

- **Niimbot:** D11, D101, B18, B21, B21 Pro, B3S;
- **Phomemo:** M110, M120, M200, M220, M221.

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [Hardware de terceiros compatível](./third-party-hardware.md), [Tiger NFC Connect](../products/tiger-nfc-connect.md), [Ids de bobina e links QR](../developers/spool-ids-and-qr-links.md)
