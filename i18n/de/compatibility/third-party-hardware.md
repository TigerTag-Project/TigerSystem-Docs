---
sourceHash: 289ee078055b2b2f885bf2a1198bfe20056cc92250866bfd0d4543b9e5190384
sourcePath: docs/compatibility/third-party-hardware.md
---

# Kompatible Hardware von Drittanbietern

Das Ökosystem versteht sich auch mit Hardware, die es nicht selbst gebaut hat.
Diese Seite ist die **wachsende Liste** von Geräten anderer Hersteller, die sich
auf die eine oder andere Weise verbinden – sie wird weiter länger werden, während
die Entwicklung voranschreitet und immer mehr Maker ihr Equipment anbinden.

| Gerät | Hersteller | Was es tut | Funktioniert mit |
|---|---|---|---|
| **ACR122U**-NFC-Lesegerät | ACS | USB-NFC-Lesegerät/-Schreibgerät – Chip scannen, und die Spule öffnet sich automatisch; geführtes Schreiben mit UID-Prüfung. Zwei davon treiben einen [TigerPOD](../products/tigerpod.md) an | [Tiger Studio](../products/tiger-studio.md) |
| **TD-1**-Filament-Analysegerät | [AJAX-3D](https://ajax-3d.com) | Selbstbau – misst die **Transmission Distance** eines Filaments (der Wert für HueForge / Full-Spectrum-Druck) + Farbe (RGB, 1–3 Slots, Richtwert) | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tiger-nfc-connect.md) (USB-C) |
| **TD1s**-Filament-Analysegerät | [AJAX-3D](https://ajax-3d.com) | Dieselbe Gerätefamilie, fertig montiert und sofort einsatzbereit | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tiger-nfc-connect.md) (USB-C) |
| **DYMO-M-Serie**-USB-Waagen (M5, M10, M25 …) | DYMO | Standardmäßige USB-„HID-Waagen“ – Live-Gewicht direkt ins Profil der Spule ([Protokolldetails](../products/tigerscale.md)) | [Tiger Studio](../products/tiger-studio.md) |
| **Jede HID-Scale-konforme USB-Waage** | beliebig | Dasselbe Standardprotokoll wie die DYMO-M-Serie (HID-Usage-Page `0x8D`) – die Marke spielt keine Rolle | [Tiger Studio](../products/tiger-studio.md) |
| **Jeder leere NTAG213/215/216-Chip** | beliebig | Das Verbrauchsmaterial selbst – überall zu kaufen, funktioniert identisch ([welcher Chip?](../../docs/faq/README.md)) | Alles |

|| | | |
|---|---|---|---|
| <img src="../assets/acr122u.jpg" alt="Das USB-NFC-Lesegerät ACR122U" /> | <img src="../assets/td1s-front.jpg" alt="Das Filament-Analysegerät TD1s von AJAX-3D" /> | <img src="../assets/dymo-usb-scale.png" alt="Eine USB-HID-Waage der DYMO-M-Serie" /> | <img src="../assets/ntag-chip.png" alt="Ein blanker NTAG-NFC-Chip – die Antennenspule ist sichtbar" /> |

*Das ACR122U-Lesegerät (zwei davon stecken in jedem
[TigerPOD](../products/tigerpod.md)) · das TD1s von AJAX-3D · eine
USB-Waage der DYMO-M-Serie · der Chip selbst, mit freigelegter Antenne.*

<img src="../assets/td1s-in-studio.jpg" width="100%" alt="Das TD1s in Tiger Studio eingebunden – gemessene Farbe und TD fließen ins Profil der Spule" />

*Das TD1s bei der Arbeit in Tiger Studio.*

Gemessene Werte bleiben nicht im Gerät: Ein TD-Wert oder ein Gewicht landet im
Profil der Spule und kann **im TigerTag-Protokoll selbst** leben – auf dem Chip
oder in einer `.ttag`-Datei.

## Von anderen gebaute Lesegeräte

Manche Maker bauen eigene Lesegeräte, die TigerTag direkt sprechen, ganz ohne
unsere Software dazwischen. **BambuTagger**
([bambutagger.de](https://www.bambutagger.de/en/)) ist ein deutsches
Open-Source-Projekt, das ESP32-basierte Spulen-Lesegeräte veröffentlicht –
Quellcode auf GitHub, druckbare Gehäuse, Platinendateien und Firmware, alles
kostenlos. Zwei seiner Geräte deklarieren TigerTag-Unterstützung:

| Gerät | Was es ist | Was es mit TigerTag macht |
|---|---|---|
| **[BT-Touch](https://www.bambutagger.de/en/bt-touch)** | Ein akkubetriebenes Gerät mit 5″-Touchscreen (800×480) – ESP32-S3 und ein RC522-Lesegerät – das über 2000 Tags lokal speichert | **Liest, klont und schreibt** TigerTag, neben Tags von Bambu Lab, Spoolease, OpenSpool und OpenTag3D |
| **[BT-AMS-C](https://www.bambutagger.de/en/bt-ams)** | Ein Lesegerät mit vier Slots, das auf ein Bambu Lab AMS montiert wird – ESP32 mit 4× RC522, OLED- und TFT-Displays, adressierbaren LEDs. Zeigt Live-Daten der AMS-Slots und **sendet Tag-Daten an den Drucker / das BMCU** | Liest dieselben fünf Tag-Familien, eine pro Slot |

Zwei Dinge, die man genau auseinanderhalten sollte.

**Diese Geräte sind kompatibel, nicht zertifiziert.** Ein Drittanbieter darf
*„kompatibel mit TigerTag“* frei und ohne jemanden zu fragen sagen – genau das ist
hier der Fall, und genau das ist der Sinn eines offenen Formats. Es ist nicht
*zertifiziert*: Zertifizierung ist ein Audit, das TigerSystem gewährt, und keines
der beiden Geräte hat eines durchlaufen. Der Unterschied ist in der
[Markenrichtlinie](../../TRADEMARK.md) erklärt.

**Das Klonen eines Chips ist keine Lücke im Format.** Ein Standard-TigerTag trägt
keine Authentifizierung und ist nie schreibgeschützt, also ist das Kopieren zu
erwarten – es ist dieselbe Eigenschaft, die es dir erlaubt, deine eigenen Chips
umzuschreiben. Was eine Kopie nicht tragen kann, ist eine gültige
[TigerTag+](../products/tigertag-plus.md)-Signatur: Ein geklonter Tag fällt bei
der Prüfung auf dem eigenen Handy des Kunden durch, offline.

Dass es solche Geräte ohne uns gibt, ist das Maß für das Format: Von uns wurde
nichts verlangt, es war kein Schlüssel nötig, es wurde keine Vereinbarung
unterzeichnet.

## Deine Hardware hier

Baust oder verbindest du ein Gerät? Das Protokoll ist offen, die
[SDKs](../developers/sdks.md) sind bereit, und **TigerTag Certified** gibt es für
geprüfte Integrationen. Sag uns Bescheid auf dem
[Discord](https://discord.gg/3Qv5TSqnJH) oder unter
[tigertag@tigertag.io](mailto:tigertag@tigertag.io) – diese Liste soll wachsen.

---

**▲ [Dokumentationsindex](../../README.md)** · **Siehe auch:** [Kompatibilität](./README.md), [Integrationen von Drittanbietern (Software)](../developers/integrations.md), [Produkte](../products/README.md)
