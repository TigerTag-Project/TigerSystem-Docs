---
sourceHash: 81ee1b494fc9fc36fd8d7ec7337fb8d13ee657814c5dfe3b99cb3ed353fd2d7a
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## Wat het is

**OpenSpool** is een open community-tagstandaard: filamentdata als **NDEF JSON**
op NFC Type 2-tags — zonder authenticatie, zonder cryptografie, volledig open. Qua opzet is het
een nauwe neef van TigerTag.

## TigerTag versus OpenSpool

| Aspect | TigerTag | OpenSpool |
|---|---|---|
| Drager | NTAG, NDEF-payload van 144 bytes | NFC Type 2, NDEF JSON |
| Datamodel | Compacte ID's, opgelost tegen een gedeelde referentiedatabase | Zelfbeschrijvende JSON |
| Cloud | Optioneel account, inventaris, delen ([TigerSystem-account](../concepts/inventory-and-cloud-sync.md)) | Geen (alleen een tagstandaard) |
| Authenticiteit | Optioneel — een [TigerTag+](../products/tigertag-plus.md) die door een gecertificeerde fabrikant is ondertekend is een **TigerTag+ Certified**, offline verifieerbaar | Geen |
| Openheid | Open specificatie + SDK's | Open specificatie |

## Een chip van TigerTag naar OpenSpool migreren

TigerTag-chips zijn **nooit tegen schrijven vergrendeld** — TigerTag is slechts het basisprotocol
waarmee spoelen worden geleverd. Geef je de voorkeur aan OpenSpool (of een eigen formaat),
dan kun je de data van een fabriekschip vrij in dat formaat herschrijven.

## Interoperabiliteit — specificatie gedocumenteerd, TigerData-conversie in de maak

Een decoderingsblad (alleen lezen) voor OpenSpool-tags wordt bijgehouden in
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
als onderdeel van het geplande RFID-lezen van meerdere fabrikanten in Tiger Studio.

> **TODO:** de importtoewijzing bepalen en documenteren (OpenSpool-JSON-velden →
> TigerTag-referentie-ID's) zodra leesondersteuning verschijnt.

---

**◀ Vorige:** [Klipper](./klipper.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Ontwikkelaars](../developers/README.md)
