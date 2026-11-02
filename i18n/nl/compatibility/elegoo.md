---
sourceHash: 636849e192cdbe3efc38d30a1b16a4f58828a9158ac9a9f1b2584f5977ce3b08
sourcePath: docs/compatibility/elegoo.md
---

# Elegoo

## Printerkoppeling — **Live**

| Aspect | Detail |
|---|---|
| Protocol | MQTT, poort 1883 |
| Detectie | UDP-broadcast, poort 52700 |
| Filament | 4 slots (Canvas) |
| Bediening | Live bedieningspaneel: home/jog, temperaturen, licht, ventilator, snelheidsmodus, laden/ontladen |
| Telemetrie | Temperaturen, voortgang van de print |

## Native RFID — specificatie gedocumenteerd, uitlezen in de app gepland

Elegoo-spoeltags zijn **Mifare Ultralight**, alleen beveiligd met **magic bytes**
(`EE EE EE EE`) — geen echte authenticatie. Specificatie voor alleen-lezen decodering:
[`docs/rfid-vendors/elegoo.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/elegoo.md).

## De werkwijze

1. **Voeg de printer toe** — automatische LAN-detectie (UDP-broadcast) of toevoegen via
 IP. Vereist dat de **LAN Only-modus** eenmalig is ingeschakeld op het touchscreen van de printer —
 [stap voor stap](#overschakelen-naar-lan-modus).
2. **Scan een spoel** — telefoon of desktoplezer; de spoel komt in je inventaris.
3. **Wijs hem toe aan een slot** — Tiger Studio koppelt inventarisspoelen aan de vier
 Canvas-slots.
4. **Live & bediening** — naast telemetrie en voortgang van de print krijgt Elegoo een
 **volledig bedieningspaneel**: de assen homen/jogen, doelen voor nozzle en bed instellen,
 het licht schakelen, de ventilator aansturen, de snelheidsmodus kiezen, filament
 per slot laden/ontladen.

## Overschakelen naar LAN-modus

De directe verbinding van Tiger Studio vraagt dat de **LAN Only-modus** op de printer zelf is ingeschakeld — een
eenmalige instelling op het scherm.

<div class="ts-model-picker">
<a href="../tutorials/elegoo-cc2-lan-mode.md"><img src="../assets/elegoo-lan-mode/models/cc2.png" alt="Centauri Carbon 2" /><span>Centauri Carbon 2</span></a>
</div>

## Bonus: tags in Elegoo-formaat schrijven

De ingebouwde editor van de app kan **een chip herschrijven in het formaat dat Elegoo-printers
verwachten** — zodat een TigerTag-chip zelfs een native Elegoo-tag kan worden als dat
is wat je workflow nodig heeft. Jouw chip, jouw keuze.

## TigerTag op de machine zelf lezen — in voorbereiding

Er is een eigen firmware **in voorbereiding** waarmee een Elegoo-printer
TigerTags **rechtstreeks** kan lezen, op de machine, volgens hetzelfde principe als de
[Snapmaker U1](./snapmaker.md).

Hij is nog niet beschikbaar en er is geen datum. Tot die er is, leest een Elegoo
TigerTag-geïdentificeerd filament zoals de bovenstaande werkwijze beschrijft — via de
telefoon, Tiger Studio of een [TigerSpool](../products/tigerspool.md) naast de
machine, zonder iets aan de printer te wijzigen.

## Beperkingen

- Native Elegoo-tags worden nog niet in de app gelezen — de specificatie is gedocumenteerd, en het huidige werk richt zich op het omzetten van tagdata van fabrikanten naar TigerData-spoelen (zie [Compatibiliteit](./README.md)).

---

**◀ Vorige:** [Creality](./creality.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [FlashForge](./flashforge.md)
