---
sourceHash: a2788a5364e611177c9b1b011d762345b26e5a8fd204e75a6b2b8beed634955c
sourcePath: docs/compatibility/opentag3d.md
---

# OpenTag3D

## Wat het is

**[OpenTag3D](https://github.com/GooborgStudios/OpenTag3D)** is een
door de community gedreven open tagstandaard voor filamentspoelen: een NDEF-payload die
past op een NTAG215, zonder versleuteling, met gepubliceerde specificatie en open lijst van supporters. Net als
TigerTag bestaat het omdat de industrie volliep met één eigen
formaat per printermerk, en het stelt expliciet dat een tag **volledig
offline** moet werken. Qua geest is het een naaste verwant.

Beide standaarden definiëren ook een onlinelaag, en beide noemen die een **Web API** —
en precies daar lopen de twee ontwerpen uiteen, bewust en in tegengestelde richting.

## Twee ontwerpen naast elkaar

| Aspect | TigerTag | OpenTag3D |
|---|---|---|
| Wat de chip opslaat om de onlinelaag te bereiken | een **catalogusproduct-id** | een **“Online Data URL”** — het adres zelf |
| Wie antwoordt | **één endpoint, alle merken** | één endpoint per tag, gehost door wie de tag heeft geschreven |
| Rol van de onlinelaag | het **updatekanaal**: correcties bereiken spoelen die al geleverd zijn | **aanvullend per ontwerp** — de specificatie stelt dat er “will NEVER be relied upon for printer functionality” |
| Regelgevende documenten | TDS · MSDS · RoHS · REACH · EN71 · voedselcontact, per product | niet in het schema — de Web API bevat foto's, prijs, productlinks, QA-status, notities |
| Kopie van de tagdata online | ja, het volledige profiel | ja, `tag_data` — **optioneel**, zoals elk veld behalve de versie |
| Bewijs van herkomst | optioneel — een [TigerTag+ Certified](../products/tigertag-plus.md) wordt ondertekend en offline gecontroleerd | geen, bewust: de specificatie wijst versleuteling af als “unsuitable for an open source standard” |

## Wat volgt uit een id versus een adres

Geen van beide benaderingen is toeval, en elk levert iets op.

Het **adres** opslaan houdt de tag zelfvoorzienend: wie het schrijft
bepaalt waar de gegevens staan en legt aan niemand verantwoording af. De prijs is dat het
adres in de chip wordt geschreven, binnen het bytebudget van de payload, en een chip
niet meer kan worden omgeleid zodra hij bij een klant is — als die host verhuist of
niet meer antwoordt, is de link wat breekt.

Een **id** opslaan lijkt een gedeeld endpoint in het pad te zetten — en dat zou zo zijn,
als de referentie van ons was om achter te houden. Dat is ze niet: de hele catalogus
wordt gepubliceerd als één bestand, [`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json), met elke id van elk
filament in de database, de hele dag ververst en vrij te kopiëren door iedereen. Een lezer kan een eigen spiegel bijhouden en id's zonder netwerk oplossen.

De id levert dus wat het adres niet kan. De chip bevat nooit een locatie, dus
hij blijft geldig wat er ook met een host gebeurt; een lezer implementeert één endpoint en
het werkt voor filament dat hij nooit eerder zag; een fabrikant corrigeert gegevens zes
maanden nadat de spoelen de fabriek verlieten; en het opzoeken zelf kan
volledig offline, op een kopie die iedereen mag bewaren.

De [handtekening](../products/tigertag-plus-certified.md) is het andere
gevolg. Doordat een TigerTag+ Certified de eigen UID van de chip ondertekent, kunnen de gegevens
online verbeteren terwijl de spoel blijft bewijzen waar hij vandaan komt — offline,
op de eigen telefoon van de klant.

## Interoperabiliteit

TigerTag-chips zijn **nooit tegen schrijven vergrendeld**. Heb je liever OpenTag3D — of elk
ander formaat — dan kun je een fabriekschip daarnaar herschrijven. Dat is dezelfde
positie die we innemen voor [OpenSpool](./openspool.md), en om dezelfde reden: de
spoel is van wie hem heeft gekocht.

---

**◀ Vorige:** [OpenSpool](./openspool.md) · **▲ [Documentatie-index](../../README.md)** · **Volgende ▶** [Ontwikkelaars](../developers/README.md)

**Zie ook:** [De Web API](../developers/web-api.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
