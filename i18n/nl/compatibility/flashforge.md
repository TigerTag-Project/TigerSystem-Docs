---
sourceHash: 0da2b619f681b73709bf69f7a267703c5e222bb752d614aa97a95027294187e1
sourcePath: docs/compatibility/flashforge.md
---

# FlashForge

## Printerkoppeling — **Live**

| Aspect | Detail |
|---|---|
| Protocol | HTTP-polling (poort 8898) + TCP M-codes (poort 8899) |
| Detectie | UDP-multicast (225.0.0.9:19000) |
| Filament | IFS — het multifilamentsysteem van FlashForge |
| Camera | MJPEG-stream |
| Telemetrie | Temperaturen, voortgang van de opdracht |

## Native RFID — geen: de machines hebben geen lezer

FlashForge-printers worden geleverd **zonder enige RFID-lezer**, en zonder eigen
RFID-formaat. Daarmee is dit de duidelijkste demonstratie van het voordeel van
TigerSystem: **we hebben FlashForge-machines de mogelijkheid gegeven om met
NFC-geïdentificeerd filament te werken — met de NFC-lezer die al in de
smartphone van de gebruiker zit.** Een gloednieuwe mogelijkheid, toegevoegd aan de printer van
iemand anders, **volledig gratis, zonder kosten voor de gebruiker, zonder enige aanpassing aan de machine.**

## FlashForge × TigerSystem — de officiële firmware

Het eigen engineeringteam van FlashForge heeft een firmware gebouwd voor de **Creator 5** en
**Creator 5 Pro** waarmee **FlashForge Cloud en LAN tegelijk** werken.

Dat is belangrijker dan het klinkt. Met de standaardfirmware moet je kiezen: zet je Cloud
aan, dan kunnen lokale tools de printer niet meer bereiken. Die keuze was het enige
dat een FlashForge-eigenaar nog van dit ecosysteem scheidde — en die is nu
weg. Het is een **officiële FlashForge-firmware**, geen community-fork en geen
patch — gebouwd met TigerTag, voor deze integratie, en hier gepubliceerd met
hun instemming.

<div class="ts-model-picker">
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/"><img src="../assets/flashforge-connection-tutorial/models/creator-5.png" alt="FlashForge Creator 5" /><span>Creator 5</span></a>
<a href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/"><img src="../assets/flashforge-connection-tutorial/models/creator-5-pro.png" alt="FlashForge Creator 5 Pro" /><span>Creator 5 Pro</span></a>
</div>

<div class="ts-cta">
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5/">Downloaden — Creator 5</a>
<a class="ts-cta-primary" href="https://tigertag-project.github.io/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud/download/creator5pro/">Downloaden — Creator 5 Pro</a>
<a href="https://github.com/TigerTag-Project/FlashForge-TigerTag-Creator5-Firmware-Lan-and-Cloud"><img src="../assets/icons/github.svg" alt="" /> Broncode en installatiegids</a>
</div>

Wordt geïnstalleerd vanaf een USB-stick. Gratis voor iedereen, met of zonder TigerTag-hardware.

### Verbinden na het flashen

Zet **LAN-modus aan** in de instellingen van de printer — dat is de hele wijziging die de
firmware mogelijk maakt. Tiger Studio vindt de printer dan via **automatische detectie**,
of je voegt hem handmatig toe met zijn **IP-adres**. Je hoeft niet meer te kiezen
tussen Cloud en lokale tools: beide zijn tegelijk live.

| | Standaardfirmware | Met deze firmware |
|---|:---:|:---:|
| FlashForge Cloud — app, toegang op afstand | ✅ | ✅ |
| LAN-toegang — lokale tools op je netwerk | ✅ | ✅ |
| **Beide tegelijk** | ❌ | ✅ |
| Tiger Studio, Tiger NFC Connect en TigerSpool **met Cloud aan** | ❌ | ✅ |

### Je geeft niets op

De eigenaar behoudt elke functie van FlashForge Cloud en krijgt het hele ecosysteem
erbovenop: een gratis, open-source **filament- en printerbeheer** op de desktop, een
**telefoon die spoelen leest en schrijft**, en **[TigerSpool](../products/tigerspool.md)** —
een open-source lezerbox die naast de machines staat en **tot 24
printers** in zijn lijst bijhoudt, waarvan er tien tegelijk verbonden zijn — één box voor de hele
plank.

Een printer zonder lezer en zonder eigen formaat leest dus nu de chip van elk
filamentmerk dat TigerTag gebruikt — en van de spoelen die makers zelf thuis taggen,
op filament dat nooit met een chip is geleverd.

Een printerfabrikant die zijn machine opent voor een ecosysteem dat hij niet bezit, is een zeldzame
beslissing. Elke maker die er een heeft, profiteert ervan.

## De werkwijze

1. **Voeg de printer toe** — gevonden via de netwerkscan (UDP-multicast), waarbij je
 alleen zijn Printer ID nodig hebt, of handmatig toegevoegd met zijn IP-adres, serienummer
 en Printer ID.
2. **Scan een spoel** — met je telefoon (of een desktoplezer); de spoel komt in
 je inventaris.
3. **Wijs hem toe aan een IFS-slot** — **één scan, één klik** vanuit
 de koppeling in Tiger Studio. De printer kent zijn filament dan
 even nauwkeurig als een machine met ingebouwde RFID, op elk FlashForge-model, zonder
 hardwarewijziging en zonder iets aan de machine toe te voegen.
4. **Live** — temperaturen, voortgang van de opdracht en de MJPEG-camerastream in het
 printeroverzicht.

## De printer toevoegen

Tiger Studio heeft drie dingen nodig om met een FlashForge te praten: zijn **IP-adres**, zijn
**serienummer** en een **wachtwoord** — dat de printer zelf het
**Printer ID** noemt. Eén waarde, twee namen: wat het touchscreen ook als Printer
ID toont, komt in het wachtwoordveld van Tiger Studio.

Hoeveel van de drie je moet intypen, hangt af van hoe de printer wordt gevonden:

| Hoe | Wat je invoert |
|---|---|
| **Netwerkscan** — Tiger Studio vindt de printer op je lokale netwerk | alleen het **Printer ID**; de scan levert het IP-adres en het serienummer |
| **Handmatig** — de scan heeft hem niet gevonden | **IP-adres + serienummer + Printer ID** |

Er is geen cloudpad, dus het is altijd een van deze twee. Kies je model om te zien
waar elke waarde op het touchscreen staat.

<div class="ts-model-picker">
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/ad5x.png" alt="Adventurer 5X" /><span>Adventurer 5X</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5m.png" alt="Adventurer 5M" /><span>Adventurer 5M</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/5mpro.png" alt="Adventurer 5M Pro" /><span>Adventurer 5M Pro</span></a>
<a href="../tutorials/flashforge-connection-tutorial.md"><img src="../assets/flashforge-connection-tutorial/models/a5.png" alt="Adventurer A5" /><span>Adventurer A5</span></a>
</div>

---

**◀ Vorige:** [Elegoo](./elegoo.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Anycubic](./anycubic.md)
