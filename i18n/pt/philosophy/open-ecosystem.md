---
sourceHash: d0916e0c9a494ef3d8620767cdde6038765b5d5a3a137055136edfe232577136
sourcePath: docs/philosophy/open-ecosystem.md
---

# Filosofia do ecossistema aberto

## Tudo é aberto

Todas as camadas do TigerSystem são publicadas — hardware, firmware, SDKs, aplicativos, documentação:

| Camada | Projeto | Licença |
|---|---|---|
| Aplicativo de desktop | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| SDK JS (npm `tigertag`) | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Apache-2.0 |
| SDK Python | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Apache-2.0 |
| Hardware + firmware da balança (V3, atual) | [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | MIT |
| Hardware + firmware da balança (V2) | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| Suporte de leitura (STL + docs) | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| Guia do formato do chip | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | CC BY 4.0 |
| Documentação de integração com a nuvem | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| Esta documentação | TigerSystem-Docs | CC BY 4.0 |

## Um ambiente de testes, não um jardim murado

**Todo o ecossistema voltado ao usuário** é deliberadamente **um laboratório, não o
destino**.
Cada produto — o [Tiger Studio](../products/tiger-studio.md), o aplicativo móvel,
a [TigerScale](../products/tigerscale.md), o [TigerPOD](../products/tigerpod.md) —
é uma demonstração funcional do que a tecnologia aberta e documentada torna possível
quando uma bobina consegue se identificar: telemetria de impressoras ao vivo em seis marcas,
mapeamento físico de racks, sensores, inventários compartilhados. Parte disso vai amadurecer,
parte existe para provar um ponto, e tudo é legível, bifurcável e
livre para copiar. Cada produto — atual e futuro — é uma **prova de conceito**
de um **protocolo open source, padronizado, agnóstico e multiplataforma**: o único
trabalho dele é mostrar o potencial, para que qualquer pessoa possa tomar o nosso trabalho de integração como
inspiração e imaginar os recursos de amanhã.

## Construa o seu

O TigerTag é um **protocolo** aberto, não uma plataforma à qual você precise aderir:

1. Leia o formato do chip ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).
2. Escolha um [SDK](../developers/sdks.md).
3. Conecte-se à [nuvem](../developers/account-api.md) — ou não; os chips funcionam offline.
4. Entregue o software, o hardware ou o negócio que você realmente quer.

Seu aplicativo pode ser algo totalmente diferente — ele ainda falará com os mesmos chips.
Um celular com NFC, um leitor USB ACR122U — ou um ESP32 DIY com um módulo PN532/RC522,
no estilo da TigerScale — é todo o hardware necessário: ligue a identidade da bobina
a um ERP, a uma ferramenta interna de estoque, a um fluxo de rastreamento, a um sistema
de empréstimo de fablab, a um projeto de P&D privado ou público — qualquer coisa.

---

**◀ Anterior:** [Ecossistema centrado no usuário](./user-centric-ecosystem.md) · **▲ [Índice da documentação](../../README.md)** · **Próxima ▶** [Ponte via smartphone](./smartphone-bridge.md)

**Veja também:** [Visão geral para desenvolvedores](../developers/README.md), [Produtos](../products/README.md)
