---
sourceHash: 2685d64b4f1e988e9dd0b2d7d0911e187af40c64f176864d372e6398a4a1def8
sourcePath: docs/architecture/data-flow.md
---

# Datenfluss

## Vom Antippen zum Druck

Der ganze Weg einer Spule durch das System:

```mermaid
sequenceDiagram
  actor User
  participant Chip as TigerTag chip
  participant App as Connect / Studio
  participant Cloud as Firebase
  participant Printer as Printer (LAN)

  User->>Chip: NFC tap (phone) or place on reader (desktop)
  Chip-->>App: 144-byte identity payload
  App->>Cloud: upsert spool in users/{uid} inventory
  Cloud-->>App: real-time snapshot to every signed-in device
  User->>App: assign spool to a printer slot
  App->>Printer: native protocol (MQTT / WebSocket / HTTP)
  Printer-->>App: live telemetry (temps, job, filament slots, camera)
```

## Wo welche Art von Daten liegt

| Daten | Liegen in | Hinweise |
|---|---|---|
| Identität der Spule | Der Chip + der Cloud-Bestand des Nutzers | Der Chip ist maßgeblich für die Offline-Nutzung |
| Referenzdatenbank (Marken, Materialien …) | `cdn.tigertag.io` (dasselbe Firebase-Projekt) | In die Apps eingebündelt, vom CDN aktualisiert |
| Spulenbilder (inkl. TigerTag+-Produktfotos) | `cdn.tigertag.io` (dasselbe Firebase-Projekt) | Für alle Apps bereitgestellt |
| Bestand, Racks, Freunde, Einstellungen | Firestore `users/{uid}/…` | Standardmäßig nur für den Besitzer, durch Regeln erzwungen |
| Öffentliche Erkennungscodes | Firestore `publicKeys/{code}` | Freundessuche in O(1) |
| Zugangsdaten und Telemetrie der Drucker | **Nur lokal** (Desktop) | LAN-Verkehr läuft nie über die Cloud |
| Live-Gewicht (TigerScale) | Gerät → Firestore | Erscheint live in allen Clients |

## Wo dein Slicer hineinpasst

TigerSystem **ersetzt deinen Slicer nicht** – es rundet das Bild um ihn herum ab:

```mermaid
flowchart LR
  YOU["You"] -- "3D model" --> SLICER["Your slicer"]
  SLICER -- "sliced job" --> PRN["Printer"]
  TAG["TigerTag chip"] -- "scan" --> ST["Tiger Studio"]
  ST -- "which filament is in which slot" --> PRN
  PRN -- "progress · temps · 'ends at' · camera" --> ST
```

- Du slicest und startest Aufträge genau wie bisher, mit jedem Slicer.
- Tiger Studio teilt dem Drucker mit, **welches Filament in welchem Slot liegt**
 (AMS / CFS / Canvas / ACE / IFS), damit die Angaben auf der Maschine der
 Wirklichkeit entsprechen.
- Egal was den Druck gestartet hat: Der Auftrag erscheint live in Tiger Studio –
 Fortschritt, Temperaturen, Endzeit, Kamera.
- Der Chip trägt die empfohlenen Druckeinstellungen des Filaments; es gibt
 **heute keinen automatischen Import von Slicer-Profilen** – du übernimmst sie
 selbst in dein Slicer-Profil.

## Zwei Ebenen, bewusst getrennt

- **Cloud-Ebene** – Identität, Bestand, Teilen. Internet, Firebase, durch Regeln
 erzwungen.
- **LAN-Ebene** – Druckersteuerung und Kameras. Nur lokales Netzwerk, native
 Herstellerprotokolle, null Cloud-Abhängigkeit (die Desktop-App arbeitet mit den
 Druckern auch offline weiter).

> **Hinweis:** Die Ausnahme ist der **Cloud-Modus** von Anycubic, bei dem die
> Drucker-Verbindung selbst über das Cloud-MQTT des Herstellers läuft – siehe
> [Anycubic-Kompatibilität](../compatibility/anycubic.md).

---

**◀ Zurück:** [Architekturübersicht](./overview.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Produkte](../products/README.md)

**Siehe auch:** [Bestand & Cloud-Sync](../concepts/inventory-and-cloud-sync.md), [Kompatibilität](../compatibility/README.md)
