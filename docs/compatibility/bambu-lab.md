# <img src="../assets/brands/bambulab.svg" width="26" alt="" /> Bambu Lab

## Printer link — **Live**

Tiger Studio connects to a Bambu Lab printer two ways:

| Aspect | Detail |
|---|---|
| LAN | MQTTS (TLS) direct to the printer, port 8883. Needs the printer's **LAN Only mode** and **Developer Mode** turned on once — [step-by-step per model](#switch-to-lan-mode). |
| Cloud | Sign in once with your Bambu Lab account (email + one-time code) — every printer on the account is found automatically, LAN access code included. No on-printer toggle needed for this part. |
| Filament | AMS support — up to 16 slots, per-slot filament edit |
| Discovery | LAN: SSDP + TLS probe, plus Add-by-IP. Cloud: automatic, from the account. |
| Camera | JPEG stream (TCP 6000) / RTSP — same feed either way, needs **LAN Mode Liveview** enabled on the printer |
| Telemetry | Temperatures, job progress, print preview |

> **Cloud connections are read-only today.** You get live telemetry — temperatures, progress,
> camera — but not machine control (pause, resume, stop, lights…). Control needs the LAN path.

## Native RFID — spec documented, in-app read planned

Bambu spool tags are **Mifare Classic 1K** with **HKDF-SHA256 UID-derived
keys** — cryptographically locked to serve the vendor's ecosystem. A read-only
decoding spec is maintained in
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## The workflow

1. **Add the printer** — either **on the LAN** (SSDP discovery, or Add by IP,
 paired with the printer's LAN access code) or **from the cloud** (sign in
 with your Bambu Lab account — every printer on it is found automatically).
 The LAN path needs the printer's LAN Only mode and Developer Mode turned on
 once first — [step-by-step per model](#switch-to-lan-mode).
2. **Scan a spool** — phone or desktop reader; the spool lands in your
 inventory.
3. **Assign it to an AMS slot** — Tiger Studio pushes the filament profile
 (material, color) to the slot over MQTTS; the machine-side info now
 matches reality, across up to 16 AMS slots.
4. **Live** — temperatures, job progress, print preview, wall-clock
 **"Ends at"** time, and the camera feed, right in the printers view.

## Switch to LAN mode

The LAN path needs **LAN Only mode** and **Developer Mode** enabled on the printer itself — a
one-time, on-screen setup. Pick your model below for the exact steps.

<div class="ts-model-picker">
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1-mini.png" alt="A1 mini" /><span>A1 mini</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1.png" alt="A1" /><span>A1</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a2l.png" alt="A2L" /><span>A2L</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1p.png" alt="P1P" /><span>P1P</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1s.png" alt="P1S" /><span>P1S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/p2s.png" alt="P2S" /><span>P2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1c.png" alt="X1 Carbon" /><span>X1 Carbon</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1e.png" alt="X1E" /><span>X1E</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x2d.png" alt="X2D" /><span>X2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2s.png" alt="H2S" /><span>H2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2d.png" alt="H2D" /><span>H2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2dpro.png" alt="H2D Pro" /><span>H2D Pro</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2c.png" alt="H2C" /><span>H2C</span></a>
</div>

## Limitations

- Native Bambu tags are not read in-app yet — the spec is documented, and the current work aims at converting vendor tag data into TigerData spools (see [Compatibility](./README.md)).
- The camera feed needs LAN Mode Liveview enabled on the printer, whichever connection path is used.

---

**◀ Previous:** [Compatibility](./README.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Creality](./creality.md)
