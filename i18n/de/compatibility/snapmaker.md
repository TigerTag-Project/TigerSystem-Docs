---
sourceHash: 448c6630969a0d99765d2a206f9a0788e9c4e02ef90d870a57ba26db3c1c9fdf
sourcePath: docs/compatibility/snapmaker.md
---

# Snapmaker

## Drucker-Verbindung – **Live**

| Aspekt | Detail |
|---|---|
| Protokoll | Moonraker-WebSocket (JSON-RPC), Port 7125 + proprietäre Erweiterungen |
| Erkennung | HTTP-Scan |
| Filament | 4 Slots – Filament pro Slot bearbeitbar (Farbmodell RRGGBBAA) |
| Steuerung | Live-Bedienfeld (Achsen, Temperaturen, Licht, Lüfter, Geschwindigkeit, Laden/Entladen) |
| Telemetrie | Temperaturen, Auftragsfortschritt |

## Native RFID – Spezifikation dokumentiert, Auslesen in der App geplant

Die Spulen-Tags von Snapmaker sind **Mifare Classic 1K** mit **per HKDF
abgeleiteten Schlüsseln pro Sektor** und einer **RSA-2048-PKCS#1-v1.5-+-SHA-256-Signatur** –
das am stärksten gesperrte Format, das bisher dokumentiert ist. Reine
Lese-Dekodierungsspezifikation:
[`docs/rfid-vendors/snapmaker.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/snapmaker.md).

## Der Ablauf

1. **Drucker hinzufügen** – HTTP-Scan im LAN oder Hinzufügen per IP; Tiger Studio
 spricht Moonraker (JSON-RPC über WebSocket).
2. **Spule scannen** – Handy oder Desktop-Lesegerät; sie landet in deinem Bestand.
3. **Einem Slot zuweisen** – Filament pro Slot bearbeiten (das Farbmodell
 RRGGBBAA von Snapmaker wird transparent verarbeitet).
4. **Live & Steuerung** – Telemetrie, Auftragsfortschritt und ein
 **Bedienfeld**: Achsen, Temperaturen, Licht, Lüfter, Geschwindigkeitsmodus,
 Laden/Entladen pro Slot.

## Einschränkungen

- Native Snapmaker-Tags werden in der App noch nicht gelesen – die Spezifikation ist dokumentiert, und die aktuelle Arbeit zielt darauf, Tag-Daten der Hersteller in TigerData-Spulen umzuwandeln (siehe [Kompatibilität](./README.md)).

## Der erste Drucker, der TigerTag nativ liest

Die [Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
der Community (unabhängig, GPL-3.0) fügt SSH, Kamera-Streaming und Metriken
hinzu – und damit **liest der Snapmaker U1 TigerTags nativ, direkt an der
Maschine**. Das macht den U1 zum ersten Drucker, an dem eine TigerTag-Spule
ohne jede App dazwischen erkannt wird – die Zukunft, auf die das
[gemeinsame Spiel](../vision/for-filament-manufacturers.md) zielt, ist durch die
Community früher eingetroffen. Siehe
[Integrationen von Drittanbietern](../developers/integrations.md).

---

**◀ Zurück:** [Anycubic](./anycubic.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Klipper](./klipper.md)
