---
sourceHash: 7df403d9ec01cc589f8d8c155cd8d0cb8154cd2993e09860c8c2a54ec787ef9c
sourcePath: docs/compatibility/bambu-lab.md
---

# Bambu Lab

## Printerkoppeling — **Live**

Tiger Studio verbindt op twee manieren met een Bambu Lab-printer:

| Aspect | Detail |
|---|---|
| LAN | MQTTS (TLS) rechtstreeks naar de printer, poort 8883. Vereist dat **LAN Only mode** en **Developer Mode** van de printer eenmalig zijn ingeschakeld — [stap voor stap per model](#overschakelen-naar-de-lan-modus). |
| Cloud | Meld je één keer aan met je Bambu Lab-account (e-mail + eenmalige code) — elke printer op het account wordt automatisch gevonden, inclusief de LAN-toegangscode. Hiervoor is geen schakelaar op de printer nodig. |
| Filament | AMS-ondersteuning — tot 16 slots, filament per slot bewerken |
| Detectie | LAN: SSDP + TLS-probe, plus toevoegen via IP. Cloud: automatisch, vanuit het account. |
| Camera | JPEG-stream (TCP 6000) / RTSP — dezelfde beelden in beide gevallen, vereist dat **LAN Mode Liveview** op de printer is ingeschakeld |
| Telemetrie | Temperaturen, voortgang van de opdracht, printvoorbeeld |

> **Cloudverbindingen zijn vandaag alleen-lezen**, op één uitzondering na. Je krijgt live telemetrie —
> temperaturen, voortgang, camera — en het **licht** van de printer, dat wel via de cloud schakelt.
> Al het andere dat op de machine ingrijpt (pauzeren, hervatten, stoppen) vereist het LAN-pad.

## Native RFID — specificatie gedocumenteerd, uitlezen in de app gepland

Bambu-spooltags zijn **Mifare Classic 1K** met **HKDF-SHA256-sleutels afgeleid van de
UID** — cryptografisch vergrendeld om het ecosysteem van de fabrikant te dienen. Een
decodeerspecificatie voor alleen-lezen wordt bijgehouden in
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## De werkwijze

1. **Voeg de printer toe** — óf **op het LAN** (SSDP-detectie, of toevoegen via IP,
 gekoppeld aan de LAN-toegangscode van de printer) óf **via de cloud** (meld je aan
 met je Bambu Lab-account — elke printer erop wordt automatisch gevonden).
 Voor het LAN-pad moeten eerst eenmalig LAN Only mode en Developer Mode van de printer
 zijn ingeschakeld — [stap voor stap per model](#overschakelen-naar-de-lan-modus).
2. **Scan een spoel** — telefoon of desktoplezer; de spoel komt in je
 inventaris.
3. **Wijs hem toe aan een AMS-slot** — Tiger Studio stuurt het filamentprofiel
 (materiaal, kleur) via MQTTS naar het slot; de informatie aan de machinekant
 klopt nu met de werkelijkheid, over maximaal 16 AMS-slots.
4. **Live** — temperaturen, voortgang van de opdracht, printvoorbeeld, de
 klokkijd **“Klaar om”** en de camerabeelden, direct in het printeroverzicht.

## Overschakelen naar de LAN-modus

Het LAN-pad vereist dat **LAN Only mode** en **Developer Mode** op de printer zelf zijn ingeschakeld — een
eenmalige instelling op het scherm. Kies hieronder je model voor de exacte stappen.

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

## Beperkingen

- Native Bambu-tags worden nog niet in de app gelezen — de specificatie is gedocumenteerd, en het huidige werk richt zich op het omzetten van tagdata van fabrikanten naar TigerData-spoelen (zie [Compatibiliteit](./README.md)).
- De camerabeelden vereisen dat LAN Mode Liveview op de printer is ingeschakeld, ongeacht het gebruikte verbindingspad.

---

**◀ Vorige:** [Compatibiliteit](./README.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Creality](./creality.md)
