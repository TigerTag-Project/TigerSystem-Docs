---
sourceHash: a05c4e52f6cae3704b4e16e2b3d1b6d55653145391a9bdd6f31630c6821c91ab
sourcePath: docs/compatibility/third-party-hardware.md
---

# Hardware de terceiros compatível

O ecossistema dá-se bem com hardware que não fabricou. Esta página é a **lista em crescimento** de dispositivos de terceiros que se ligam, de uma forma ou de outra — continuará a alargar-se à medida que o desenvolvimento avança e que mais makers ligarem o seu equipamento.

| Dispositivo | Fabricante | O que faz | Funciona com |
|---|---|---|---|
| Leitor NFC **ACR122U** | ACS | Leitor/gravador NFC USB — leia um chip e a bobina abre-se automaticamente; gravações guiadas e verificadas pelo UID. Dois deles alimentam um [TigerPOD](../products/tigerpod.md) | [Tiger Studio](../products/tiger-studio.md) |
| Analisador de filamento **TD-1** | [AJAX-3D](https://ajax-3d.com) | Montagem DIY — mede a **Transmission Distance** do filamento (o valor de impressão HueForge / Full Spectrum) + a cor (RGB, 1–3 slots, indicativa) | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tigertag-connect.md) (USB-C) |
| Analisador de filamento **TD1s** | [AJAX-3D](https://ajax-3d.com) | Mesma família de dispositivos, pré-montado e pronto a usar | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tigertag-connect.md) (USB-C) |
| Balanças USB **DYMO série M** (M5, M10, M25…) | DYMO | Dispositivos USB «HID Scale» padrão — o peso em direto passa para o perfil da bobina ([detalhes do protocolo](../products/tigerscale.md)) | [Tiger Studio](../products/tiger-studio.md) |
| **Qualquer balança USB compatível com HID Scale** | qualquer | Mesmo protocolo padrão das DYMO série M (página de utilização HID `0x8D`) — a marca não importa | [Tiger Studio](../products/tiger-studio.md) |
| **Qualquer chip NTAG213/215/216 virgem** | qualquer | O próprio consumível — comprado em qualquer lado, funciona de forma idêntica ([que chip?](../../docs/faq/README.md)) | Tudo |

|| | | |
|---|---|---|---|
| <img src="../assets/acr122u.jpg" alt="O leitor NFC USB ACR122U" /> | <img src="../assets/td1s-front.jpg" alt="O analisador de filamento TD1s da AJAX-3D" /> | <img src="../assets/dymo-usb-scale.png" alt="Uma balança USB HID da série M da DYMO" /> | <img src="../assets/ntag-chip.png" alt="Um chip NFC NTAG nu — a bobina da antena à vista" /> |

*O leitor ACR122U (dois deles vivem dentro de cada [TigerPOD](../products/tigerpod.md)) · o TD1s da AJAX-3D · uma balança USB da série M da DYMO · o próprio chip, com a antena à mostra.*

<img src="../assets/td1s-in-studio.jpg" width="100%" alt="O TD1s integrado no Tiger Studio — cor medida e TD a fluir para o perfil da bobina" />

*O TD1s em ação dentro do Tiger Studio.*

Os valores medidos não ficam no dispositivo: um TD ou um peso passa para o perfil da bobina e pode viver **no próprio protocolo TigerTag** — no chip ou num ficheiro `.ttag`.

## Leitores construídos por outras pessoas

Alguns makers constroem os seus próprios leitores que falam TigerTag diretamente, sem qualquer software nosso pelo meio. O **BambuTagger** ([bambutagger.de](https://www.bambutagger.de/en/)) é um projeto alemão de código aberto que publica leitores de bobinas baseados em ESP32 — código-fonte no GitHub, caixas imprimíveis, ficheiros de PCB e firmware, tudo gratuito. Dois dos seus dispositivos declaram suporte para o TigerTag:

| Dispositivo | O que é | O que faz com o TigerTag |
|---|---|---|
| **[BT-Touch](https://www.bambutagger.de/en/bt-touch)** | Uma unidade a bateria com ecrã tátil de 5″ 800×480 — ESP32-S3 e um leitor RC522 — que guarda localmente mais de 2000 etiquetas | **Lê, clona e escreve** TigerTag, a par de etiquetas Bambu Lab, Spoolease, OpenSpool e OpenTag3D |
| **[BT-AMS-C](https://www.bambutagger.de/en/bt-ams)** | Um leitor de quatro slots que se monta num AMS da Bambu Lab — ESP32 com 4× RC522, ecrãs OLED e TFT, LEDs endereçáveis. Mostra dados dos slots do AMS em direto e **envia os dados da etiqueta para a impressora / BMCU** | Lê as mesmas cinco famílias de etiquetas, uma por slot |

Duas coisas que convém precisar.

**Estes dispositivos são compatíveis, não certificados.** Um terceiro pode dizer *«compatível com o TigerTag»* livremente e sem pedir nada a ninguém — é exatamente isso que acontece aqui, e é todo o sentido de um formato aberto. Não é *certificado*: a certificação é uma auditoria concedida pelo TigerSystem e nenhum dos dispositivos passou por uma. A diferença está explicada na [política de marca](../../TRADEMARK.md).

**Clonar um chip não é uma falha do formato.** Um TigerTag padrão não tem autenticação e nunca fica bloqueado contra escrita, pelo que copiá-lo é esperado — é a mesma propriedade que lhe permite reescrever os seus próprios chips. O que uma cópia não consegue transportar é uma assinatura [TigerTag+](../products/tigertag-plus.md) válida: uma etiqueta clonada falha a verificação no telemóvel do próprio cliente, offline.

Que dispositivos como estes existam sem nós é a medida do formato: nada nos foi pedido, não foi precisa nenhuma chave, não foi assinado nenhum acordo.

## O seu hardware aqui

Está a construir ou a ligar um dispositivo? O protocolo é aberto, os [SDKs](../developers/sdks.md) estão prontos e o **TigerTag Certified** existe para integrações verificadas. Fale connosco no [Discord](https://discord.gg/3Qv5TSqnJH) ou em [tigertag@tigertag.io](mailto:tigertag@tigertag.io) — esta lista foi pensada para crescer.

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [Compatibilidade](./README.md), [Integrações de terceiros (software)](../developers/integrations.md), [Produtos](../products/README.md)
