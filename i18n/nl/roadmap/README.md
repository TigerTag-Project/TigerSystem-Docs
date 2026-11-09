---
sourceHash: 68fa84317057cd1f92cf2ac7131611c49eaf880607f0e20eede9ae2fae93db9a
sourcePath: docs/roadmap/README.md
---

# Roadmap

## Richting van het ecosysteem

Globale intenties zonder data (de details staan per product):

- **Multi-vendor-RFID → TigerData** — de gegevens van tags van fabrikanten ophalen
 (Bambu Lab, Creality, Elegoo, Anycubic, Snapmaker, Qidi, OpenSpool)
 en omzetten naar digitale TigerData-spoelen, zodat filament van andere merken
 in het ecosysteem kan worden gescand en beheerd; de alleen-lezen-specificaties zijn al
 gedocumenteerd ([compatibiliteit](../compatibility/README.md)). Rechtstreekse decodering
 in de app wordt bewust niet geïntegreerd zolang het interoperabiliteitsmodel niet
 vaststaat.
- **Meer printerintegraties** — Klipper/Moonraker als volgende vanzelfsprekende
 transportlaag ([Klipper-pagina](../compatibility/klipper.md)).
- **Een distributeurskaart** *(gepland)* — het aantal officiële distributeurs groeit
 voorbij [Atome3D](https://atome3d.com); een kaart toont waar je
 TigerTag-chips lokaal kunt kopen.
- ~~Het draagbare `.ttag`-bestand~~ — **uitgebracht** in Tiger Studio v2.14.0:
 [het `.ttag`-formaat](../developers/ttag-format.md) (export + import, alle
 drie de spoelniveaus).
- **TigerTag voor hars** — het protocol uitbreiden naar harscontainers voor
 harsprinters, zodat dezelfde open identiteit een hele tweede familie
 machines bereikt.
- **Groei van TigerHub** — de ecosysteemsite op
 [tigersystem.io](https://tigersystem.io): rijkere sociale-zandbakfuncties
 (verlanglijsten, vrienden, delen).
- **Documentatie** — de TODO-plaatshouders in deze repository invullen (tutorials,
 handleidingen, onboarding van fabrikanten, samenvatting van de RFID-payload).
- **Documentatietalen** — de wiki op
 [wiki.tigersystem.io](https://wiki.tigersystem.io) verschijnt eerst in **het Engels en
 Frans**: het Engels is de bron van waarheid, het Frans is eruit afgeleid en
 nagelezen. Zodra beide compleet zijn en de pagina’s niet meer veranderen, volgen de
 overige talen van [tigersystem.io](https://tigersystem.io) —
 **Duits, Spaans, Italiaans, Pools, Chinees en Portugees in zowel de
 Braziliaanse als de Europese variant**, die het ecosysteem als twee aparte
 talen behandelt — zodat de documentatie aansluit op de rest van het ecosysteem.
 Ze eerder toevoegen zou betekenen dat we negen kopieën onderhouden van pagina’s die nog
 worden geschreven.
- **Voorbij de huidige talen** — de lijst is niet beperkt tot wat
 [tigersystem.io](https://tigersystem.io) vandaag aanbiedt. **Japans, Koreaans en
 Russisch** zijn daarna de sterkste kandidaten: alle drie hebben actieve makergemeenschappen,
 en alle drie zijn plekken waar uitsluitend Engelse technische
 documentatie een echte drempel is en geen lichte ergernis. Russisch
 reikt bovendien veel verder dan Rusland. Merk op dat een taal het waard kan zijn om te documenteren,
 ook waar de winkel niet kan leveren — het protocol is open, elke blanco NTAG-chip
 werkt, en niets in het ecosysteem vereist dat je iets koopt.

 Welke talen er daadwerkelijk bij komen, moet worden bepaald aan de hand van het eigen verkeer van de wiki
 zodra dat er is, niet op gevoel. Het hoeft ook niet
 alles-of-niets per taal te zijn: de secties voor gebruikers (tutorials, FAQ,
 producten, compatibiliteit) verdienen een vertaling lang voordat
 [`developers/`](../developers/README.md) dat doet, waarvan de lezers al in het
 Engels werken.

## Gedetailleerde roadmaps

| Product | Waar |
|---|---|
| Tiger Studio | [`ROADMAP.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/ROADMAP.md) in de app-repository — gegroepeerd per domein, met inschattingen van omvang en risico |
| Overige producten | > **TODO:** openbare roadmaps publiceren zodra de repositories opengaan |

> **Let op:** deze pagina geeft een richting aan, geen toezeggingen of data.

---

**◀ Vorige:** [FAQ](../faq/README.md) · **▲ [Documentatie-index](../../README.md)**

**Zie ook:** [Producten](../products/README.md), [Compatibiliteit](../compatibility/README.md)
