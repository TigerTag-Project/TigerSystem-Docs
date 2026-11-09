---
sourceHash: 81ee1b494fc9fc36fd8d7ec7337fb8d13ee657814c5dfe3b99cb3ed353fd2d7a
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## Was es ist

**OpenSpool** ist ein offener Tag-Standard der Community: Filamentdaten als
**NDEF-JSON** auf NFC-Type-2-Tags – ohne Authentifizierung, ohne Kryptografie,
vollständig offen. Dem Geist nach ist es ein enger Verwandter von TigerTag.

## TigerTag und OpenSpool im Vergleich

| Aspekt | TigerTag | OpenSpool |
|---|---|---|
| Träger | NTAG, 144-Byte-NDEF-Nutzdaten | NFC Type 2, NDEF JSON |
| Datenmodell | Kompakte IDs, aufgelöst gegen eine gemeinsame Referenzdatenbank | Selbstbeschreibendes JSON |
| Cloud | Optionales Konto, Bestand, Teilen ([TigerSystem-Konto](../concepts/inventory-and-cloud-sync.md)) | Keine (reiner Tag-Standard) |
| Echtheit | Optional – ein von einem zertifizierten Hersteller signiertes [TigerTag+](../products/tigertag-plus.md) ist ein **TigerTag+ Certified**, offline prüfbar | Keine |
| Offenheit | Offene Spezifikation + SDKs | Offene Spezifikation |

## Einen Chip von TigerTag auf OpenSpool umstellen

TigerTag-Chips sind **nie schreibgeschützt** – TigerTag ist nur das
Basisprotokoll, mit dem Spulen ausgeliefert werden. Wenn du OpenSpool (oder ein
beliebiges eigenes Format) bevorzugst, kannst du die Daten eines Werkschips frei
in dieses Format umschreiben.

## Interoperabilität – Spezifikation dokumentiert, TigerData-Umwandlung in Arbeit

Ein reines Dekodierungsdatenblatt für OpenSpool-Tags wird in
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md)
gepflegt, als Teil des geplanten Auslesens mehrerer Hersteller in Tiger Studio.

> **TODO:** die Import-Zuordnung (OpenSpool-JSON-Felder → TigerTag-Referenz-IDs)
> festlegen und dokumentieren, sobald die Leseunterstützung erscheint.

---

**◀ Zurück:** [Klipper](./klipper.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Entwickler](../developers/README.md)
