# <img src="../assets/brands/flashforge.svg" width="26" alt="" /> FlashForge

## Printer link — **Live**

| Aspect | Detail |
|---|---|
| Protocol | HTTP polling (port 8898) + TCP M-codes (port 8899) |
| Discovery | UDP multicast (225.0.0.9:19000) |
| Filament | Material station (matlStation) support |
| Camera | MJPEG stream |
| Telemetry | Temperatures, job progress |

## Native RFID — none: the machines have no reader

FlashForge printers ship **without any RFID reader**. That makes this the
clearest demonstration of the TigerSystem advantage: **we gave FlashForge
machines the ability to work with NFC-identified filament — using the NFC
reader already in the user's smartphone.** A brand-new capability, added to
someone else's printer, **totally free, at zero cost to the user, with zero
machine modification.**

## The workflow

1. **Add the printer** — found by the network scan (UDP multicast), where it
 only needs its Printer ID, or added by hand with its IP address, serial
 number and Printer ID.
2. **Scan a spool** — with your phone (or a desktop reader); it lands in
 your inventory.
3. **Assign it to a material-station slot** — **one scan, one click** from
 Tiger Studio's mapping. The printer ends up knowing its filament as
 precisely as a machine with built-in RFID, without FlashForge having
 changed anything.
4. **Live** — temperatures, job progress, and the MJPEG camera stream in the
 printers view.

## Adding the printer

Tiger Studio needs three things to talk to a FlashForge: its **IP address**, its
**serial number**, and a **password** — which the printer itself calls the
**Printer ID**. One value, two names: whatever the touchscreen shows as Printer
ID is what goes in Tiger Studio's password field.

How many of the three you type depends on how the printer is found:

| How | What you enter |
|---|---|
| **Network scan** — Tiger Studio finds the printer on your local network | the **Printer ID** only; the scan supplies the IP and serial number |
| **By hand** — the scan did not find it | **IP address + serial number + Printer ID** |

There is no cloud path, so it is always one of these two. Pick your model to see
where each value sits on the touchscreen.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Previous:** [Elegoo](./elegoo.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Anycubic](./anycubic.md)
