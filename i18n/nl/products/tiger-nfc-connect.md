---
sourceHash: 3da48e740e0e62472387887f8e83c3e77deadaa57be744842e4eecabd8df8fbc
sourcePath: docs/products/tiger-nfc-connect.md
---

# Tiger NFC Connect (mobiele app)

## Doel

**Je telefoon is al een TigerTag-lezer — Connect zet hem aan.** De
iOS/Android-app leest elke spoel met een tik, schrijft net zo makkelijk chips en
houdt je hele collectie op zak. Het is de dagelijkse toegang tot het
ecosysteem en de belichaming van de
[smartphonebrug](../philosophy/smartphone-bridge.md).

<div class="ts-app-row">
<div class="ts-app-card">
<img src="../assets/apps/qr-app-store.svg" alt="QR-code naar de vermelding in de App Store" />
<strong>iPhone · iPad</strong>
<a class="ts-cta-primary" href="https://apps.apple.com/app/id6745437963">App Store</a>
<span class="ts-app-hint">Scan met de camera, of tik op de knop</span>
</div>
<div class="ts-app-card">
<img src="../assets/apps/qr-google-play.svg" alt="QR-code naar de vermelding in Google Play" />
<strong>Android</strong>
<a class="ts-cta-primary" href="https://play.google.com/store/apps/details?id=com.tigertag.connect">Google Play</a>
<span class="ts-app-hint">Scan met de camera, of tik op de knop</span>
</div>
</div>

<div class="ts-cta ts-cta--quiet">
<a href="https://tigersystem.io/download">Alle downloads op tigersystem.io</a>
<a href="https://testflight.apple.com/join/jVHhmK4C">TestFlight-bèta (iOS)</a>
<a href="https://play.google.com/apps/testing/com.tigertag.connect">Google Play-bèta</a>
</div>

Gratis, in beide winkels. De app leest een chip met de eigen NFC van de telefoon — niets
te kopen, geen lezer, geen account nodig om te lezen.

## Waar het past

```mermaid
flowchart LR
  TAG["TigerTag chip"] -- "NFC tap" --> CO["Tiger NFC Connect"]
  CO -- "read / encode" --> TAG
  CO <--> CLOUD[("Your TigerSystem account<br/>(Firebase)")]
  CLOUD <--> ST["Tiger Studio — same account"]
```

## Functies

- **NFC-scannen onderweg** — tik een spoel aan, zie het volledige profiel.
- **Chips programmeren** — TigerTag-chips coderen en opnieuw coderen vanaf de telefoon.
- **Catalogus doorbladeren** — de gedeelde referentiedatabase van merken, materialen en kleuren.
- **Gedeeld account** — dezelfde Firebase-backend als Tiger Studio: inventaris,
 vrienden en racks blijven in realtime gesynchroniseerd over apparaten.
- **USB-C-accessoires** — ondersteunt de AJAX-3D **TD-1 / TD1s**-filamentanalyzer
 via USB-C: meet de Transmission Distance (en
 kleur) van een filament rechtstreeks met de telefoon
 ([compatibele hardware van derden](../compatibility/third-party-hardware.md)).

## Downloaden

- **Uitgebracht** in de **App Store (iOS)** en **Google Play (Android)** —
 vandaag versie 1.0.2.
- **Openbare bèta’s** zijn er ook (TestFlight op iOS, open bèta op Android).
- Alle downloadlinks: **[tigersystem.io/download](https://tigersystem.io/download)**
 — een QR-code staat ook altijd in de zijbalk van Tiger Studio.

> **Opmerking over de naam:** eerder gepubliceerd als *“TigerTag RFID Connect”* — hernoemd
> naar **Tiger NFC Connect** als knipoog naar de NFC-lezer die al in elke telefoon zit.
> De app is **gratis te gebruiken maar gesloten** (voorlopig niet open source) —
> anders dan Tiger Studio, de SDK’s en de hardware, die open zijn.

## Architectuur

Flutter-app die met Firebase (Auth + Firestore) praat — de ene gedeelde
accountdatabase achter alle apps. Printerconnectiviteit op mobiel is cloudgericht waar fabrikanten
dat toelaten.

## Interacties

| Met | Hoe |
|---|---|
| TigerTag-chips | Lezen en schrijven met een NFC-tik |
| Firebase (accountdatabase) | Realtime synchronisatie van inventaris / vrienden / voorkeuren |
| Tiger Studio | Desktopcompagnon — hetzelfde account, aanvullende functies |

## In beeld

|| | | |
|---|---|---|---|
| <img src="../assets/connect-home.jpg" alt="Tiger NFC Connect — het startscherm: één Scan-knop, een schakelaar Toevoegen aan inventaris, de TD1s een tik verderop" /> | <img src="../assets/connect-scan.jpg" alt="Tiger NFC Connect — een chip scannen met een NFC-tik" /> | <img src="../assets/connect-inventory.png" alt="Tiger NFC Connect — de mobiele inventaris" /> | <img src="../assets/connect-printer-live.png" alt="Tiger NFC Connect — live printerweergave" /> |

<img src="../assets/studio-and-connect-mockup.jpg" width="100%" alt="Tiger Studio op desktop en Tiger NFC Connect op mobiel, hetzelfde account, dezelfde gegevens" />

---

**◀ Vorige:** [TigerTag+ Certified](./tigertag-plus-certified.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Tiger Studio](./tiger-studio.md)

**Zie ook:** [Smartphonebrug](../philosophy/smartphone-bridge.md), [Inventaris en cloudsynchronisatie](../concepts/inventory-and-cloud-sync.md)
