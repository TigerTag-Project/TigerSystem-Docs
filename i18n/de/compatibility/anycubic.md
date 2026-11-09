---
sourceHash: 2d9fb2d55c78225bfac135d62f3912ead26a4eb709ecafb4ff9d0d0d7d69265e
sourcePath: docs/compatibility/anycubic.md
---

# Anycubic

## Drucker-Verbindung – **Live** (LAN + Cloud)

| Aspekt | Detail |
|---|---|
| Protokoll (LAN) | MQTTS, Port 9883 (TLS 1.2), direkt zum Drucker |
| Protokoll (Cloud) | Signiertes REST + MQTT der Herstellercloud |
| Filament | ACE-Mehrfarbbox – Unterstützung pro Slot |
| Erkennung | `/info`-Probe, Port 18910 |
| Kamera | FLV-Stream (Port 18088) |
| Steuerung | Live-Bedienfeld (Achsen, Temperaturen, Licht, Lüfter, Laden/Entladen) |

> **Hinweis:** Der Cloud-Modus ist die einzige Stelle, an der eine
> Drucker-Verbindung über eine Herstellercloud läuft – der LAN-Modus bleibt
> vollständig lokal.

## Native RFID – Spezifikation dokumentiert, Auslesen in der App geplant

Die Spulen-Tags von Anycubic sind **Mifare Ultralight** **ohne Authentifizierung
und ohne Kryptografie** – trivial lesbar (und klonbar). Reine
Lese-Dekodierungsspezifikation:
[`docs/rfid-vendors/anycubic.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/anycubic.md).

## Der Ablauf

1. **Drucker hinzufügen** – zwei Wege: **LAN-Modus** (lokale Erkennung über die
 `/info`-Probe; die Verbindungsdaten werden aus der Konfiguration des
 Hersteller-Slicers importiert) oder **Cloud-Modus** über das Anycubic-Konto.
2. **Spule scannen** – Handy oder Desktop-Lesegerät; sie landet in deinem Bestand.
3. **Einem ACE-Slot zuweisen** – Tiger Studio ordnet Spulen aus dem Bestand der
 ACE-Mehrfarbbox zu.
4. **Live & Steuerung** – Telemetrie, Auftragsfortschritt, der FLV-Kamerastream
 und ein **Bedienfeld**: Achsen, Temperaturen, Licht, Lüfter, Laden/Entladen
 pro Slot.

## Einschränkungen

- Native Anycubic-Tags werden in der App noch nicht gelesen – die Spezifikation ist dokumentiert, und die aktuelle Arbeit zielt darauf, Tag-Daten der Hersteller in TigerData-Spulen umzuwandeln (siehe [Kompatibilität](./README.md)).

---

**◀ Zurück:** [FlashForge](./flashforge.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Snapmaker](./snapmaker.md)
