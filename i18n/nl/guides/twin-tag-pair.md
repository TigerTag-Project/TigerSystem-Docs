---
sourceHash: bc1109bce033235ce112674dbf1775284562458c70d4ec2f6514e1bf5a144bd5
sourcePath: docs/guides/twin-tag-pair.md
---

# Wanneer de twee chips van een spoel als twee spoelen worden gelezen

Je hebt een spoel getagd met een chip op elke zijde, en je inventaris toont nu
**twee** items in plaats van één. Elke chip werkt; elke chip opent zijn eigen spoel. Het
gewicht dat je op de ene corrigeert, verschijnt nooit op de andere.

Er is niets kapot. De twee chips waren vrijwel zeker nooit een paar.

## De test die het beslist

Twee chips vormen een paar omdat ze dezelfde **Twin Tag ID** dragen — een waarde
die op het moment van schrijven wordt vastgelegd en alleen gedeeld wordt door chips die in dezelfde
sessie zijn geschreven. Lees beide chips en vergelijk die waarde: dat is de hele diagnose.
Tiger Studio toont hem; elke lezer die de payload decodeert doet dat ook.

De volledige regel, inclusief wat er nog meer moet overeenkomen en waarom de tijdstempel alleen
geen bewijs is, staat bij
[de TigerTag-chip](../concepts/tigertag-chip.md).

## Verschillende waarden: ze waren nooit een paar

Dit is de gewone oorzaak, en hij heeft één oorsprong: **de twee chips zijn
in twee afzonderlijke rondes geschreven**. Een tweede ronde vindt een seconde later of een dag
later plaats, en drukt dus een andere Twin Tag ID af, waarna niets de twee chips
nog aan elkaar bindt. Elke tool verderop heeft gelijk als hij twee spoelen telt.

Er is geen herstel behalve herschrijven. Een paar wordt op schrijftijd gemaakt of
helemaal niet.

## Ze als één paar herschrijven

Wis beide chips en schrijf ze daarna samen in één sessie:

| | Hoe het paar wordt geschreven | Het best voor |
|---|---|---|
| **Telefoon** — [Tiger NFC Connect](../products/tigertag-connect.md) | *Dual NFC*: één formulier, daarna chip 1/2 en 2/2 in dezelfde sessie | één spoel, geen hardware |
| **Desktop, twee lezers** — [TigerPOD](../products/tigerpod.md) | beide chips tegelijk, in één ronde | een plank, een batch |
| **Desktop, één lezer** | niet mogelijk in één ronde — zo is het probleem ontstaan | — |

De procedure op de telefoon, inclusief de regel dat de chip die je als eerste hebt gescand
degene is die de app als 1/2 verwacht, staat in
[je eerste slimme spoel](../tutorials/first-smart-spool.md).

Het geval met één lezer is de reden dat de [TigerPOD](../products/tigerpod.md)
twee lezers heeft die naar elkaar toe gericht zijn: één ronde, één tijdstempel, één paar.

## Dezelfde waarde, toch twee items

Zeldzamer, en het melden waard. De Twin Tag ID is noodzakelijk maar niet voldoende —
de twee chips moeten ook dezelfde spoel beschrijven, veld voor veld: merk,
materiaal, de drie kleuren, beide aspecten. Vergelijk die vervolgens.

Als elk veld overeenkomt en je inventaris de spoel toch in tweeën splitst, is
dat een bug en geen schrijffout. Meld het op de
[Discord](https://discord.gg/3Qv5TSqnJH) met de uitlezing van beide chips.

---

**▲ [Documentatie-index](../../README.md)** · **Zie ook:** [De TigerTag-chip](../concepts/tigertag-chip.md), [Je eerste slimme spoel](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md)
