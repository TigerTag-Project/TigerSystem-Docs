---
sourceHash: 26da829356af402a7e35df1fd40b2563bb966a93eecf9345a4602304c6124f16
sourcePath: docs/compatibility/label-printers.md
---

# Bluetooth-Etikettendrucker

Drucke das TigerQR-Etikett einer Spule direkt vom Handy auf einem kleinen
Bluetooth-Thermo-Etikettendrucker: kein Computer, kein PDF, keine Drucker-App
dazwischen.

> **Stand 2026-11-26.** [Tiger NFC Connect](../products/tiger-nfc-connect.md)
> (iOS / Android) druckt ab seinem **nächsten Update** auf diesen Druckern. In
> [Tiger Studio](../products/tiger-studio.md) werden dieselben Drucker gerade
> integriert, **noch nicht veröffentlicht**. Bis dahin funktioniert jeder
> Drucker über seine eigene App mit dem PDF, PNG oder SVG des Etiketts
> ([gedruckte Etiketten](../developers/spool-ids-and-qr-links.md)).

## So funktioniert es

- Tiger NFC Connect schickt das TigerQR-Etikett der **Spule** oder des
  **Filaments** per Bluetooth an den Drucker.
- **Jeder Drucker merkt sich sein eigenes Etikettenformat**, die eingelegte
  Rolle.
- Jeder Druck hält einen **kleinen Sicherheitsrand** ein, sodass auch eine
  leicht versetzte Rolle das ganze Etikett bekommt.
- 12-mm-Rollen drucken das **Slim**-Etikett mit 40 × 12 mm; 50 mm breite Rollen
  nehmen größere Etiketten (50 × 30 mm getestet).

> **Tipp:** Ein Drucker verbindet sich mit **jeweils nur einem Gerät**.
> Schließe die App des Druckerherstellers, bevor du aus Tiger NFC Connect
> druckst.

## Unsere Empfehlung

Niimbot-Drucker sind wirklich sehr gut. Der **D110** bietet das beste
Preis-Leistungs-Verhältnis, sehr gut für seinen Preis; **B1** und **B1 Pro**
sind die Wahl mit mehr Budget, für größere Etiketten. Der Marklife **P15**
funktioniert, ist aber sperriger, und seine Druckqualität wirkt etwas
schwächer.

Alle vier wurden auf Papier getestet.

| Drucker | Rollen | Getestetes Etikett | Unsere Einschätzung | Kaufen |
|---|---|---|---|---|
| **Niimbot D110** (und D110-M) | 12 mm | 40 × 12 mm | **Bestes Preis-Leistungs-Verhältnis**: sehr gut für seinen Preis | [Amazon](https://link.amazon/B039fb6VY) |
| **Niimbot B1** | bis 50 mm breit | 50 × 30 mm | Größere Etiketten, mit mehr Budget | [Amazon](https://link.amazon/B0a3CHt3H) |
| **Niimbot B1 Pro** | 50 mm breit | 50 × 30 mm | 300 dpi, der schärfste Druck | [Amazon](https://link.amazon/B09wFIrwk) |
| **Marklife P15** (bei Amazon als „Pristar P15“ verkauft) | 12 mm | 40 × 12 mm | Funktioniert, aber sperriger, Druck etwas schwächer | [Amazon](https://link.amazon/B0iRdI1G6) |

> Die Links in dieser Tabelle sind **Amazon-Affiliate-Links** (amazon.fr): Als
> Amazon-Partner verdient TigerTag an qualifizierten Verkäufen, **ohne
> Mehrkosten für dich**. Das hilft, das offene Protokoll zu finanzieren.
> Denselben Drucker anderswo zu kaufen, funktioniert genauso gut.

Keine Preise hier: Sie ändern sich zu oft.

## Ebenfalls unterstützt, noch nicht auf Papier getestet

Der Code der App steuert auch diese Modelle; sie wurden noch nicht auf Papier
getestet:

- **Niimbot:** D11, D101, B18, B21, B21 Pro, B3S;
- **Phomemo:** M110, M120, M200, M220, M221.

---

**▲ [Dokumentationsindex](../../README.md)** · **Siehe auch:** [Kompatible Hardware von Drittanbietern](./third-party-hardware.md), [Tiger NFC Connect](../products/tiger-nfc-connect.md), [Spulen-IDs und QR-Links](../developers/spool-ids-and-qr-links.md)
