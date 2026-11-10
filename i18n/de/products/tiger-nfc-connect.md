---
sourceHash: 3da48e740e0e62472387887f8e83c3e77deadaa57be744842e4eecabd8df8fbc
sourcePath: docs/products/tiger-nfc-connect.md
---

# Tiger NFC Connect (mobile App)

## Zweck

**Dein Handy ist schon ein TigerTag-Lesegerät – Connect schaltet es ein.** Die
iOS-/Android-App liest jede Spule mit einem Antippen, schreibt Chips genauso leicht und
trägt deine ganze Sammlung in der Tasche. Sie ist der alltägliche Einstieg in das
Ökosystem und die Verkörperung der
[Smartphone-Brücke](../philosophy/smartphone-bridge.md).

<div class="ts-app-row">
<div class="ts-app-card">
<img src="../assets/apps/qr-app-store.svg" alt="QR-Code zum Eintrag im App Store" />
<strong>iPhone · iPad</strong>
<a class="ts-cta-primary" href="https://apps.apple.com/app/id6745437963">App Store</a>
<span class="ts-app-hint">Mit der Kamera scannen oder die Schaltfläche antippen</span>
</div>
<div class="ts-app-card">
<img src="../assets/apps/qr-google-play.svg" alt="QR-Code zum Eintrag bei Google Play" />
<strong>Android</strong>
<a class="ts-cta-primary" href="https://play.google.com/store/apps/details?id=com.tigertag.connect">Google Play</a>
<span class="ts-app-hint">Mit der Kamera scannen oder die Schaltfläche antippen</span>
</div>
</div>

<div class="ts-cta ts-cta--quiet">
<a href="https://tigersystem.io/download">Alle Downloads auf tigersystem.io</a>
<a href="https://testflight.apple.com/join/jVHhmK4C">TestFlight-Beta (iOS)</a>
<a href="https://play.google.com/apps/testing/com.tigertag.connect">Google-Play-Beta</a>
</div>

Kostenlos, in beiden Stores. Die App liest einen Chip mit dem eigenen NFC des Handys –
nichts zu kaufen, kein Lesegerät, zum Lesen kein Konto nötig.

## Wo sie sich einfügt

```mermaid
flowchart LR
  TAG["TigerTag chip"] -- "NFC tap" --> CO["Tiger NFC Connect"]
  CO -- "read / encode" --> TAG
  CO <--> CLOUD[("Your TigerSystem account<br/>(Firebase)")]
  CLOUD <--> ST["Tiger Studio — same account"]
```

## Funktionen

- **NFC-Scannen unterwegs** – eine Spule antippen und ihr ganzes Profil sehen.
- **Chip-Programmierung** – TigerTag-Chips vom Handy aus codieren und neu codieren.
- **Katalog durchstöbern** – die gemeinsame Referenzdatenbank für Marke/Material/Farbe.
- **Gemeinsames Konto** – dasselbe Firebase-Backend wie Tiger Studio: Bestand, Freunde
 und Racks bleiben geräteübergreifend in Echtzeit synchron.
- **USB-C-Zubehör** – unterstützt das Filament-Analysegerät **TD-1 / TD1s** von AJAX-3D
 über USB-C: die Transmission Distance (und Farbe) eines Filaments direkt vom Handy
 messen ([kompatible Hardware von Drittanbietern](../compatibility/third-party-hardware.md)).

## So bekommst du sie

- **Veröffentlicht** im **App Store (iOS)** und bei **Google Play (Android)** – heute
 Version 1.0.2.
- **Öffentliche Betas** ebenfalls verfügbar (TestFlight auf iOS, offene Beta auf Android).
- Alle Download-Links: **[tigersystem.io/download](https://tigersystem.io/download)** –
 ein QR-Code ist außerdem immer in der Seitenleiste von Tiger Studio verfügbar.

> **Hinweis zum Namen:** früher als *„TigerTag RFID Connect“* veröffentlicht – umbenannt
> in **Tiger NFC Connect**, um an das NFC-Lesegerät zu erinnern, das schon in jedem Handy
> steckt. Die App ist **kostenlos nutzbar, aber proprietär** (vorerst nicht quelloffen) –
> anders als Tiger Studio, die SDKs und die Hardware, die offen sind.

## Architektur

Flutter-App, die mit Firebase (Auth + Firestore) spricht – der einzigen gemeinsamen
Konto-Datenbank hinter allen Apps. Die Druckeranbindung am Handy ist cloudorientiert,
wo Hersteller es erlauben.

## Zusammenspiel

| Mit | Wie |
|---|---|
| TigerTag-Chips | Lesen & Schreiben per NFC-Antippen |
| Firebase (Konto-Datenbank) | Echtzeit-Sync von Bestand / Freunden / Einstellungen |
| Tiger Studio | Desktop-Begleiter – dasselbe Konto, ergänzende Funktionen |

## In Bildern

|| | | |
|---|---|---|---|
| <img src="../assets/connect-home.jpg" alt="Tiger NFC Connect – der Startbildschirm: eine Scan-Schaltfläche, ein Schalter „Zum Bestand hinzufügen“, das TD1s einen Tipp entfernt" /> | <img src="../assets/connect-scan.jpg" alt="Tiger NFC Connect – einen Chip per NFC-Antippen scannen" /> | <img src="../assets/connect-inventory.png" alt="Tiger NFC Connect – der mobile Bestand" /> | <img src="../assets/connect-printer-live.png" alt="Tiger NFC Connect – Live-Druckeransicht" /> |

<img src="../assets/studio-and-connect-mockup.jpg" width="100%" alt="Tiger Studio auf dem Desktop und Tiger NFC Connect am Handy, dasselbe Konto, dieselben Daten" />

---

**◀ Zurück:** [TigerTag+ Certified](./tigertag-plus-certified.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Tiger Studio](./tiger-studio.md)

**Siehe auch:** [Smartphone-Brücke](../philosophy/smartphone-bridge.md), [Bestand & Cloud-Sync](../concepts/inventory-and-cloud-sync.md)
