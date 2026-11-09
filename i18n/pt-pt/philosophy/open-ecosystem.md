---
sourceHash: d0916e0c9a494ef3d8620767cdde6038765b5d5a3a137055136edfe232577136
sourcePath: docs/philosophy/open-ecosystem.md
---

# Filosofia do ecossistema aberto

## Tudo é aberto

Todas as camadas do TigerSystem são publicadas — hardware, firmware, SDKs, aplicações, documentação:

| Camada | Projeto | Licença |
|---|---|---|
| Aplicação de computador | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| SDK de JS (npm `tigertag`) | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Apache-2.0 |
| SDK de Python | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Apache-2.0 |
| Hardware + firmware da balança (V3, atual) | [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | MIT |
| Hardware + firmware da balança (V2) | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| Suporte do leitor (STL + documentação) | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| Guia do formato do chip | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | CC BY 4.0 |
| Documentação da integração na nuvem | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| Esta documentação | TigerSystem-Docs | CC BY 4.0 |

## Uma caixa de areia, não um jardim murado

**Todo o ecossistema virado para o utilizador** é deliberadamente **um laboratório, não o destino**. Cada produto — o [Tiger Studio](../products/tiger-studio.md), a aplicação móvel, a [TigerScale](../products/tigerscale.md), o [TigerPOD](../products/tigerpod.md) — é uma demonstração funcional do que a tecnologia aberta e documentada torna possível a partir do momento em que uma bobina se consegue identificar: telemetria de impressoras em direto em seis marcas, mapeamento físico de racks, sensores, inventários partilhados. Algumas coisas vão amadurecer, outras existem para provar um ponto, e tudo é legível, bifurcável (fork) e livre de copiar. Cada produto — atual e futuro — é uma **prova de conceito** de um **protocolo de código aberto, padrão, agnóstico e multiplataforma**: a sua única função é mostrar o potencial, para que qualquer pessoa possa tomar o nosso trabalho de integração como inspiração e imaginar as funcionalidades de amanhã.

## Construa o seu

O TigerTag é um **protocolo** aberto, não uma plataforma a que tenha de aderir:

1. Leia o formato do chip ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).
2. Escolha um [SDK](../developers/sdks.md).
3. Ligue-se à [nuvem](../developers/account-api.md) — ou não; os chips funcionam offline.
4. Lance o software, o hardware ou o negócio que realmente quer.

A sua aplicação pode ser algo completamente diferente — continuará a falar com os mesmos chips. Um telemóvel com NFC, um leitor USB ACR122U — ou um ESP32 feito por si com um módulo PN532/RC522, ao estilo da TigerScale — é todo o hardware necessário: ligue a identidade da bobina a um ERP, a uma ferramenta de stock interna, a um fluxo de rastreio, a um sistema de empréstimo de um fablab, a um projeto de I&D privado ou público — a qualquer coisa.

---

**◀ Anterior:** [Ecossistema centrado no utilizador](./user-centric-ecosystem.md) · **▲ [Índice da documentação](../../README.md)** · **Seguinte ▶** [Ponte do smartphone](./smartphone-bridge.md)

**Ver também:** [Visão geral para programadores](../developers/README.md), [Produtos](../products/README.md)
