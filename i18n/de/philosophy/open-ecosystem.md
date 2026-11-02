---
sourceHash: d0916e0c9a494ef3d8620767cdde6038765b5d5a3a137055136edfe232577136
sourcePath: docs/philosophy/open-ecosystem.md
---

# Philosophie des offenen Ökosystems

## Alles ist offen

Jede Schicht von TigerSystem ist veröffentlicht – Hardware, Firmware, SDKs, Apps,
Dokumentation:

| Schicht | Projekt | Lizenz |
|---|---|---|
| Desktop-App | [Tiger Studio Manager](https://github.com/TigerTag-Project/TigerTag-Studio-Manager) | MIT |
| JS-SDK (npm `tigertag`) | [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) | Apache-2.0 |
| Python-SDK | [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) | Apache-2.0 |
| Waagen-Hardware + Firmware (V3, aktuell) | [Tiger-Scale-V3](https://github.com/TigerTag-Project/Tiger-Scale-V3) | MIT |
| Waagen-Hardware + Firmware (V2) | [Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale) | MIT |
| Lesegerät-Ständer (STL + Doku) | [TigerPOD](https://github.com/TigerTag-Project/TigerPOD) | CC BY 4.0 |
| Leitfaden zum Chip-Format | [TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide) | CC BY 4.0 |
| Dokumentation zur Cloud-Integration | [TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration) | CC BY 4.0 |
| Diese Dokumentation | TigerSystem-Docs | CC BY 4.0 |

## Eine Sandbox, kein ummauerter Garten

Das **gesamte nutzerseitige Ökosystem** ist bewusst **ein Labor, nicht das Ziel**.
Jedes Produkt – [Tiger Studio](../products/tiger-studio.md), die mobile App,
[TigerScale](../products/tigerscale.md), [TigerPOD](../products/tigerpod.md) – ist
eine funktionierende Demonstration dessen, was offene, dokumentierte Technik möglich
macht, sobald sich eine Spule selbst identifizieren kann: Live-Drucker-Telemetrie über
sechs Marken, physisches Rack-Mapping, Sensoren, geteilte Bestände. Manches davon wird
reifen, manches existiert, um etwas zu beweisen, und alles ist les-, fork- und frei
kopierbar. Jedes Produkt – heutiges und künftiges – ist ein **Proof of Concept** eines
**quelloffenen, standardisierten, herstellerunabhängigen, plattformübergreifenden
Protokolls**: Seine einzige Aufgabe ist, das Potenzial zu zeigen, damit jeder unsere
Integrationsarbeit als Inspiration nehmen und sich die Funktionen von morgen ausmalen
kann.

## Bau dein eigenes

TigerTag ist ein offenes **Protokoll**, keine Plattform, der du beitreten musst:

1. Lies das Chip-Format ([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)).
2. Nimm ein [SDK](../developers/sdks.md).
3. Verbinde dich mit der [Cloud](../developers/account-api.md) – oder nicht; Chips funktionieren offline.
4. Liefere die Software, die Hardware oder das Geschäft aus, das du tatsächlich willst.

Deine App kann etwas ganz anderes sein – sie wird trotzdem dieselben Chips sprechen.
Ein NFC-Handy, ein USB-Lesegerät ACR122U – oder ein DIY-ESP32 mit PN532/RC522-Modul im
Stil von TigerScale – ist die gesamte nötige Hardware: Verbinde die Spulenidentität
mit einem ERP, einem internen Lagertool, einem Nachverfolgungs-Workflow, einem
Fablab-Verleihsystem, einem privaten oder öffentlichen F&E-Projekt – mit allem.

---

**◀ Zurück:** [Nutzerzentriertes Ökosystem](./user-centric-ecosystem.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Smartphone-Brücke](./smartphone-bridge.md)

**Siehe auch:** [Entwicklerübersicht](../developers/README.md), [Produkte](../products/README.md)
