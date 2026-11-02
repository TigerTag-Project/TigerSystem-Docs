---
sourceHash: 4534952990769306c8ebf5fcf1d9c93c9ddca86ce463b792d757f36bdda46043
sourcePath: docs/developers/web-api.md
---

# De Web API

## Waar hij voor dient

Een TigerTag bevat alles wat een printer nodig heeft, **op de chip, offline**. De
Web API bestaat voor wat een chip niet kan bevatten en wat verandert nadat hij
is geschreven: de datasheets, de veiligheidsdocumenten, de foto, de video, de
correcties van de fabrikant.

Het is **één HTTP-endpoint, voor elk filament, van elk merk** — geen sleutel, geen
account, geen registratie, geen tariefafspraak om te onderhandelen. Er gaat een product-id in, het
product komt terug.

```
https://api.tigertag.io/api:tigertag/product/get?uid=0&product_id=<ID>&lang=en
```

De parameter `lang` bepaalt de taal van de tekstvelden.

## Wat er terugkomt

Vier echte producten, van vier verschillende merken, via dat ene adres:

| `product_id` | Product | Geleverde documenten |
|---|---|---|
| `10` | Polymaker PolyTerra™ PLA | MSDS · TDS · tips · video |
| `30` | R3D PLA High Speed | food · MSDS · REACH · RoHS · TDS · video |
| `40` | Sunlu PLA Matte | MSDS · REACH · RoHS · TDS · video |
| `50` | eSun PLA+ | food · MSDS · REACH · RoHS · TDS · tips · video |

Elk antwoord bevat de identiteit (merk, serie, naam, SKU, EAN, kleur), het
volledige printprofiel (nozzle, bed, droger, ventilator, diameter, gewicht, shore,
transmission distance), de productfoto en het bovenstaande `links`-blok —
`tds`, `msds`, `rohs`, `reach`, `en71`, `food`, `tips`, `youtube`.

## Waarom hij een TigerTag+ actueel houdt

Een [TigerTag+](../products/tigertag-plus.md) slaat een **catalogusproduct-id** op,
geen adres. De id verloopt nooit en verhuist nooit, dus een fabrikant kan
een temperatuur corrigeren of een datasheet toevoegen zes maanden nadat de spoelen
zijn geleverd, en elke lezer ziet de nieuwe waarde bij de volgende keer lezen — zonder
iets op de chip te herschrijven, en zonder dat de chip ooit van het
netwerk afhankelijk was om te printen.

Daarom is één enkel endpoint ook belangrijk: één adres bedient elk merk, dus
een lezer implementeert het één keer en het werkt voor filament dat hij nooit eerder zag.

## Ook offline — de hele catalogus is een bestand

Niets hierboven vereist dat het endpoint bereikbaar is, of zelfs maar bestaat.

De volledige referentie wordt gepubliceerd als één bestand,
[`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json) — **elke id van elk filament in de database**,
de hele dag ververst, ongeveer 12 MB, zonder sleutel en zonder account. Iedereen mag het
downloaden, spiegelen, in een app meeleveren, op een werkplaats-NAS zetten of
op een USB-stick meenemen.

Een lezer met die kopie lost een TigerTag+-id **helemaal zonder netwerk** op.
Daarom is de id veiliger dan een adres: een adres heeft een host nodig die
antwoordt, een gedeelde referentie hoeft maar één keer gekopieerd te zijn — en ze kan
overal op de planeet door iedereen op elk moment worden gekopieerd.

De Web API blijft het actuelere pad, en dat met de datasheets en
de foto. Het bestand is de bodem eronder.

## Wat hij nooit doet

De Web API **kan een chip niet laten werken**, omdat een chip al zonder hem werkt.
Lees een TigerTag in vliegtuigmodus en je krijgt merk, materiaal, kleur,
diameter, gewicht en temperaturen — de hele print. De Web API voegt daar papier en
beelden omheen aan toe, en correcties bovenop.

---

**◀ Vorige:** [Account-API en integratie door derden](./account-api.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Repositoryoverzicht](./repositories.md)

**Zie ook:** [TigerTag+](../products/tigertag-plus.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
