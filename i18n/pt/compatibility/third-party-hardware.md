---
sourceHash: 289ee078055b2b2f885bf2a1198bfe20056cc92250866bfd0d4543b9e5190384
sourcePath: docs/compatibility/third-party-hardware.md
---

# Hardware de terceiros compatível

O ecossistema se dá bem com hardware que não fez. Esta página é a
**lista crescente** de dispositivos de terceiros que se conectam, de um jeito ou de outro —
ela continuará se expandindo à medida que o desenvolvimento avança e mais makers ligam
seus equipamentos.

| Dispositivo | Fabricante | O que faz | Funciona com |
|---|---|---|---|
| Leitor NFC **ACR122U** | ACS | Leitor/gravador NFC USB — leia um chip e a bobina abre automaticamente; gravações guiadas, com verificação do UID. Dois deles alimentam um [TigerPOD](../products/tigerpod.md) | [Tiger Studio](../products/tiger-studio.md) |
| Analisador de filamento **TD-1** | [AJAX-3D](https://ajax-3d.com) | Montagem DIY — mede a **Transmission Distance** do filamento (o valor da impressão HueForge / Full Spectrum) + a cor (RGB, 1–3 slots, indicativa) | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tiger-nfc-connect.md) (USB-C) |
| Analisador de filamento **TD1s** | [AJAX-3D](https://ajax-3d.com) | Mesma família de dispositivos, pré-montado e pronto para usar | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tiger-nfc-connect.md) (USB-C) |
| Balanças USB **DYMO série M** (M5, M10, M25…) | DYMO | Dispositivos "HID Scale" USB padrão — peso ao vivo no perfil da bobina ([detalhes do protocolo](../products/tigerscale.md)) | [Tiger Studio](../products/tiger-studio.md) |
| **Qualquer balança USB compatível com HID Scale** | qualquer | Mesmo protocolo padrão da DYMO série M (HID usage page `0x8D`) — a marca não importa | [Tiger Studio](../products/tiger-studio.md) |
| **Qualquer chip NTAG213/215/216 virgem** | qualquer | O próprio consumível — comprado em qualquer lugar, funciona do mesmo jeito ([qual chip?](../../docs/faq/README.md)) | Tudo |

|| | | |
|---|---|---|---|
| <img src="../assets/acr122u.jpg" alt="O leitor NFC USB ACR122U" /> | <img src="../assets/td1s-front.jpg" alt="O analisador de filamento TD1s da AJAX-3D" /> | <img src="../assets/dymo-usb-scale.png" alt="Uma balança USB HID da série M da DYMO" /> | <img src="../assets/ntag-chip.png" alt="Um chip NFC NTAG nu — a bobina da antena visível" /> |

*O leitor ACR122U (dois deles ficam dentro de cada
[TigerPOD](../products/tigerpod.md)) · o TD1s da AJAX-3D · uma balança USB
da série M da DYMO · o próprio chip, com a antena à mostra.*

<img src="../assets/td1s-in-studio.jpg" width="100%" alt="O TD1s integrado ao Tiger Studio — cor medida e TD fluindo para o perfil da bobina" />

*O TD1s em ação dentro do Tiger Studio.*

Os valores medidos não ficam no dispositivo: um TD ou um peso entra no
perfil da bobina e pode viver **no próprio protocolo TigerTag** — no chip
ou em um arquivo `.ttag`.

## Leitores criados por outras pessoas

Alguns makers constroem os próprios leitores, que falam TigerTag diretamente, sem
nenhum software nosso no meio. O **BambuTagger**
([bambutagger.de](https://www.bambutagger.de/en/)) é um projeto alemão de código aberto
que publica leitores de bobina baseados em ESP32 — fontes no GitHub, caixas
imprimíveis, arquivos de PCB e firmware, tudo gratuito. Dois de seus dispositivos declaram
suporte ao TigerTag:

| Dispositivo | O que é | O que faz com o TigerTag |
|---|---|---|
| **[BT-Touch](https://www.bambutagger.de/en/bt-touch)** | Uma unidade a bateria com tela sensível ao toque de 5″ e 800×480 — ESP32-S3 e um leitor RC522 — que guarda mais de 2000 tags localmente | **Lê, clona e grava** TigerTag, junto com tags Bambu Lab, Spoolease, OpenSpool e OpenTag3D |
| **[BT-AMS-C](https://www.bambutagger.de/en/bt-ams)** | Um leitor de quatro slots que se monta em um AMS da Bambu Lab — ESP32 com 4× RC522, telas OLED e TFT, LEDs endereçáveis. Mostra os dados dos slots do AMS ao vivo e **envia os dados da tag à impressora / BMCU** | Lê as mesmas cinco famílias de tags, uma por slot |

Dois pontos que vale deixar precisos.

**Eles são compatíveis, não certificados.** Um terceiro pode dizer *"compatível
com o TigerTag"* livremente e sem pedir a ninguém — é exatamente isso que
acontece aqui, e é o ponto central de um formato aberto. Não é *certificado*:
a certificação é uma auditoria concedida pelo TigerSystem, e nenhum dos dois dispositivos passou por
uma. A diferença é explicada na
[política de marca](../../TRADEMARK.md).

**Clonar um chip não é uma falha do formato.** Um TigerTag padrão não traz nenhuma
autenticação e nunca é bloqueado contra gravação, então copiá-lo é esperado — é
a mesma propriedade que permite reescrever os seus próprios chips. O que uma cópia não pode
levar é uma assinatura [TigerTag+](../products/tigertag-plus.md) válida: uma tag clonada
falha na verificação no celular do próprio cliente, offline.

Que dispositivos como esses existam sem nós é a medida do formato: nada
foi pedido a nós, nenhuma chave foi necessária, nenhum acordo foi assinado.

## O seu hardware aqui

Está criando ou conectando um dispositivo? O protocolo é aberto, os
[SDKs](../developers/sdks.md) estão prontos, e o **TigerTag Certified** existe
para integrações verificadas. Conte para nós no
[Discord](https://discord.gg/3Qv5TSqnJH) ou em
[tigertag@tigertag.io](mailto:tigertag@tigertag.io) — esta lista foi feita para
crescer.

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [Compatibilidade](./README.md), [Integrações de terceiros (software)](../developers/integrations.md), [Produtos](../products/README.md)
