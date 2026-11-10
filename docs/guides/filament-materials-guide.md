# Filament materials guide

A working reference for 21 materials: overview, strength, chemical resistance, heat/impact/UV resistance, temperatures, drying and density, recommendations and typical examples.

**Names and numbers come from the protocol.** Each card names the material
exactly as a TigerTag encodes it, with its id in the shared reference database —
[`id_material.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_material.json), also served by the [TigerTag API](https://api.tigertag.io/api:tigertag/material/get/all). The
nozzle, bed and drying values and the density are that database's own: they are
what Tiger Studio fills in when you pick the material for a spool. A spool's
TigerTag carries its manufacturer's exact values, and those take precedence.
Finishes such as matte or metal are not materials in TigerTag but **aspects**,
added on top of the base material — see
[universal filament identity](../concepts/universal-filament-identity.md).

**Chemical resistance tags:** <span class="ts-tag ts-tag--ok">OK</span> holds up well · <span class="ts-tag ts-tag--warn">FAIR</span> weakens or varies · <span class="ts-tag ts-tag--danger">POOR</span> dissolves or degrades.

## Everyday

### PLA / PLA+

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Everyday</span>

| | |
|---|---|
| TigerTag material | `PLA` · id 38219<br/>`PLA+` · id 46591 |
| Overview | Standard, easy, industrially compostable. |
| Strength /10 | 6 |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> IPA (barely touches it), oils, cold water<br/><span class="ts-tag ts-tag--warn">FAIR</span> acetone — weakens under prolonged exposure, doesn't dissolve<br/><span class="ts-tag ts-tag--danger">POOR</span> concentrated acids/bases |
| Heat resistance | ~50–60 °C |
| Impact resistance | Moderate |
| UV resistance | Poor |
| Nozzle temp | 190–240 °C |
| Bed temp | 45–55 °C |
| Drying | 50 °C · 8 h |
| Density | 1.24 g/cm³ |
| Enclosure | Not needed |
| Recommendations | Fan 100% · High speed possible |
| Examples | Prototypes, figurines, decoration |

</div>

### PLA Silk/Wood

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Everyday</span>

| | |
|---|---|
| TigerTag material | `PLA Silk` · id 10602<br/>`PLA+ Silk` · id 8345<br/>`PLA Wood` · id 48001 |
| Overview | A cosmetic PLA finish — a silky sheen or a light wood-tone dusting, not to be confused with the much more heavily filled Wood composite further down. |
| Strength /10 | 5 |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> IPA (barely touches it), oils, cold water<br/><span class="ts-tag ts-tag--warn">FAIR</span> acetone — weakens under prolonged exposure, doesn't dissolve; the silk/wood-tone additives absorb moisture a bit faster than plain PLA<br/><span class="ts-tag ts-tag--danger">POOR</span> concentrated acids/bases |
| Heat resistance | ~50–60 °C |
| Impact resistance | Low |
| UV resistance | Poor |
| Nozzle temp | 190–240 °C |
| Bed temp | 45–55 °C |
| Drying | PLA Silk 50 °C · 8 h<br/>PLA+ Silk 50 °C · 8 h<br/>PLA Wood 60 °C · 8 h |
| Density | PLA Silk 1.24 g/cm³<br/>PLA+ Silk 1.24 g/cm³<br/>PLA Wood 1.28 g/cm³ |
| Enclosure | Not needed |
| Recommendations | 0.6 mm tip if it contains particles · Slow speed · Strong bed adhesion (glass or PEI) — let it cool fully before removing |
| Examples | Vases, decoration, art pieces |

</div>

### PLA Matte

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Everyday</span>

| | |
|---|---|
| TigerTag material | `PLA` · id 38219<br/>+ aspect `Matt` · id 247 |
| Overview | Matte/sanded finish (mineral fillers) that hides layer lines well. |
| Strength /10 | 5 |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> IPA (barely touches it), oils, cold water<br/><span class="ts-tag ts-tag--warn">FAIR</span> acetone — weakens under prolonged exposure, doesn't dissolve<br/><span class="ts-tag ts-tag--danger">POOR</span> concentrated acids/bases |
| Heat resistance | ~50–55 °C |
| Impact resistance | Low to moderate |
| UV resistance | Poor |
| Nozzle temp | 190–240 °C |
| Bed temp | 45–55 °C |
| Drying | 50 °C · 8 h |
| Density | 1.24 g/cm³ |
| Enclosure | Not needed |
| Recommendations | Moderate speed (more brittle on fine detail) · Ideal for decor pieces with no shine |
| Examples | Figurines, models, display pieces |

</div>

### PETG

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Everyday</span>

| | |
|---|---|
| TigerTag material | `PETG` · id 38256 |
| Overview | The "Swiss army knife": strong, flexible, good chemical and UV resistance. |
| Strength /10 | 8 |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> water, alcohols, dilute acids, salts<br/><span class="ts-tag ts-tag--danger">POOR</span> chlorinated solvents, concentrated ketones |
| Heat resistance | ~70–80 °C |
| Impact resistance | Good |
| UV resistance | Good |
| Nozzle temp | 220–270 °C |
| Bed temp | 70–75 °C |
| Drying | 70 °C · 8 h |
| Density | 1.27 g/cm³ |
| Enclosure | Not needed |
| Recommendations | Fan 20–50% · Strong bed adhesion (glass or PEI) — let it cool fully before removing · Moderate speed |
| Examples | Mechanical parts, waterproof boxes, clips |

</div>

### PETG High Speed

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Everyday</span>

| | |
|---|---|
| TigerTag material | `PETG HS` · id 7649<br/>`PETG HF` · id 57469 |
| Overview | Same PETG, formulated with lower viscosity to melt fast enough at 300+ mm/s. |
| Strength /10 | 8 (same as PETG) |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> water, alcohols, dilute acids, salts<br/><span class="ts-tag ts-tag--danger">POOR</span> chlorinated solvents, concentrated ketones |
| Heat resistance | ~70–80 °C |
| Impact resistance | Good |
| UV resistance | Good |
| Nozzle temp | 220–270 °C |
| Bed temp | 70–75 °C |
| Drying | 70 °C · 8 h |
| Density | 1.27 g/cm³ |
| Enclosure | Not needed |
| Recommendations | Only useful on a "high-flow" hotend or a flow-limited printer · No benefit on a slow or classic Bowden printer |
| Examples | Same uses as PETG, on a fast printer (CoreXY like Bambu Lab, Creality K1…) |

</div>

## Technical / functional

### TPU 85A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technical</span>

| | |
|---|---|
| TigerTag material | `TPU` · id 43518<br/>Shore hardness is not part of the id |
| Overview | Very soft, absorbs impacts, but squashes and deforms easily. |
| Strength /10 | 3 (very soft) |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> oils, greases, fuels<br/><span class="ts-tag ts-tag--warn">VARIES</span> against solvents depending on formulation |
| Heat resistance | ~55–60 °C |
| Impact resistance | Excellent (absorption) |
| UV resistance | Good |
| Nozzle temp | 200–250 °C |
| Bed temp | 35–40 °C |
| Drying | 75 °C · 8 h |
| Density | 1.21 g/cm³ |
| Enclosure | Not needed |
| Recommendations | Direct-drive extruder required · Speed 15–25 mm/s, minimal retraction |
| Examples | Soles, soft grips, gaskets |

</div>

### TPU 95A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technical</span>

| | |
|---|---|
| TigerTag material | `TPU` · id 43518<br/>Shore hardness is not part of the id |
| Overview | The most common TPU: a good balance of flexibility and printability. |
| Strength /10 | 5 (flexible) |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> oils, greases, fuels<br/><span class="ts-tag ts-tag--warn">VARIES</span> against solvents depending on formulation |
| Heat resistance | ~60 °C |
| Impact resistance | Excellent |
| UV resistance | Good |
| Nozzle temp | 200–250 °C |
| Bed temp | 35–40 °C |
| Drying | 75 °C · 8 h |
| Density | 1.21 g/cm³ |
| Enclosure | Not needed |
| Recommendations | Direct-drive recommended (a well-tuned Bowden can work) · Speed 30–45 mm/s — the most forgiving TPU |
| Examples | RC tires, phone cases, cable sheathing |

</div>

### TPU 60D

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technical</span>

| | |
|---|---|
| TigerTag material | `TPU` · id 43518<br/>Shore hardness is not part of the id |
| Overview | Almost a rigid plastic: slight flex, very fatigue-resistant. |
| Strength /10 | 7 (rigid for a TPU) |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> oils, greases, fuels<br/><span class="ts-tag ts-tag--warn">VARIES</span> against solvents depending on formulation |
| Heat resistance | ~65–70 °C |
| Impact resistance | Excellent (takes hits without breaking) |
| UV resistance | Good |
| Nozzle temp | 200–250 °C |
| Bed temp | 35–40 °C |
| Drying | 75 °C · 8 h |
| Density | 1.21 g/cm³ |
| Enclosure | Not needed |
| Recommendations | Prints almost like a PETG · Bowden generally fine |
| Examples | Wheels, flexible hinges, anti-vibration parts |

</div>

### ABS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technical</span>

| | |
|---|---|
| TigerTag material | `ABS` · id 20562 |
| Overview | Long-standing, heat-resistant. Releases fumes (VOCs) while printing. |
| Strength /10 | 8 |
| Chemical resistance | <span class="ts-tag ts-tag--danger">POOR</span> acetone — dissolves it (the basis of vapor smoothing), esters<br/><span class="ts-tag ts-tag--ok">OK</span> oils, dilute bases |
| Heat resistance | ~95–100 °C |
| Impact resistance | Good |
| UV resistance | Poor |
| Nozzle temp | 240–280 °C |
| Bed temp | 85–90 °C |
| Drying | 80 °C · 8 h |
| Density | 1.04 g/cm³ |
| Enclosure | Required |
| Recommendations | Fan off · Air filtration (VOCs) |
| Examples | Car interior parts, enclosures, housings |

</div>

### ASA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technical</span>

| | |
|---|---|
| TigerTag material | `ASA` · id 12844 |
| Overview | Like ABS but built for the outdoors (UV, weather). |
| Strength /10 | 8 (same as ABS) |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> rain, salt, alcohols<br/><span class="ts-tag ts-tag--danger">POOR</span> acetone, strong acids |
| Heat resistance | ~95–100 °C |
| Impact resistance | Excellent |
| UV resistance | Excellent |
| Nozzle temp | 240–280 °C |
| Bed temp | 95–100 °C |
| Drying | 80 °C · 8 h |
| Density | 1.05 g/cm³ |
| Enclosure | Recommended |
| Recommendations | Dry the filament · Low fan |
| Examples | Outdoor parts, garden enclosures |

</div>

### PA (Nylon)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technical</span>

| | |
|---|---|
| TigerTag material | `PA` · id 59328<br/>`PA6` · id 56666<br/>`PA11` · id 29272<br/>`PA12` · id 55796 |
| Overview | The king of friction and fatigue resistance. Highly hygroscopic. |
| Strength /10 | 10 |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> acetone, alcohols, hydrocarbons (gasoline), bases<br/><span class="ts-tag ts-tag--danger">POOR</span> acids (vinegar, HCl); swells in water |
| Heat resistance | ~110–115 °C |
| Impact resistance | Excellent |
| UV resistance | Fair |
| Nozzle temp | PA 240–280 °C<br/>PA6 240–280 °C<br/>PA11 260–290 °C<br/>PA12 250–290 °C |
| Bed temp | PA 100–105 °C<br/>PA6 100–105 °C<br/>PA11 80–100 °C<br/>PA12 70–90 °C |
| Drying | PA 85 °C · 12 h<br/>PA6 85 °C · 12 h<br/>PA11 80 °C · 12 h<br/>PA12 85 °C · 12 h |
| Density | PA 1.52 g/cm³<br/>PA6 1.52 g/cm³<br/>PA11 —<br/>PA12 1.52 g/cm³ |
| Enclosure | Required |
| Recommendations | Drying required before/during printing · Magigoo/PVA glue |
| Examples | Gears, wear/friction parts |

</div>

### PC (Polycarbonate)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technical</span>

| | |
|---|---|
| TigerTag material | `PC` · id 30458 |
| Overview | Extreme rigidity and thermal/impact resistance. |
| Strength /10 | 10 |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> dilute acids, alcohols, greases<br/><span class="ts-tag ts-tag--warn">FAIR</span> acetone — weakens / crazes<br/><span class="ts-tag ts-tag--danger">POOR</span> strong bases (ammonia), hot water (hydrolysis) |
| Heat resistance | ~115–130 °C |
| Impact resistance | Excellent (bulletproof glass) |
| UV resistance | Fair (yellows, stays strong) |
| Nozzle temp | 260–290 °C |
| Bed temp | 110–115 °C |
| Drying | 85 °C · 8 h |
| Density | 1.3 g/cm³ |
| Enclosure | Required |
| Recommendations | Drying required · Magigoo PC glue |
| Examples | Engine parts, structural parts, molds |

</div>

### PP (Polypropylene)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Technical</span>

| | |
|---|---|
| TigerTag material | `PP` · id 30884 |
| Overview | Very light, near chemically inert — but (almost) nothing sticks to it. |
| Strength /10 | 6 |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> nearly all dilute acids/bases, common solvents, oils, fuels |
| Heat resistance | ~100 °C |
| Impact resistance | Excellent (repeated flexing) |
| UV resistance | Poor |
| Nozzle temp | 220–250 °C |
| Bed temp | 55–60 °C |
| Drying | 60 °C · 4 h |
| Density | 0.9 g/cm³ |
| Enclosure | Recommended |
| Recommendations | PP tape required (nothing else sticks) · Wide brim (~2% shrinkage) |
| Examples | Living hinges, bottles, food-contact parts |

</div>

## Composites (filled)

### Carbon fiber (CF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composite</span>

| | |
|---|---|
| TigerTag material | `PLA-CF` · id 48310<br/>`PETG-CF` · id 55418<br/>`PA-CF` · id 39944 |
| Overview | Chopped carbon fiber (10–25%) in a PLA, PETG or nylon base: stiffer, less shrinkage, matte finish. |
| Strength /10 | 8 (rigid, brittle) |
| Chemical resistance | <strong>PLA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, oils, cold water · <span class="ts-tag ts-tag--warn">FAIR</span> acetone · <span class="ts-tag ts-tag--danger">POOR</span> concentrated acids/bases<br/><strong>PETG-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> water, alcohols, dilute acids, salts · <span class="ts-tag ts-tag--danger">POOR</span> chlorinated solvents, concentrated ketones<br/><strong>PA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> acetone, alcohols, hydrocarbons, bases · <span class="ts-tag ts-tag--danger">POOR</span> acids; swells in water |
| Heat resistance | PLA-CF ~55–60 °C<br/>PETG-CF ~75–80 °C<br/>PA-CF ~140 °C |
| Impact resistance | Low (brittle despite the rigidity) |
| UV resistance | Poor to good (depends on base) |
| Nozzle temp | PLA-CF 190–240 °C<br/>PETG-CF 240–270 °C<br/>PA-CF 260–300 °C |
| Bed temp | PLA-CF 45–55 °C<br/>PETG-CF 75–80 °C<br/>PA-CF 100–105 °C |
| Drying | PLA-CF 60 °C · 8 h<br/>PETG-CF 70 °C · 8 h<br/>PA-CF 85 °C · 12 h |
| Density | PLA-CF 1.24 g/cm³<br/>PETG-CF 1.27 g/cm³<br/>PA-CF 1.52 g/cm³ |
| Enclosure | PLA-CF/PETG-CF not needed<br/>PA-CF required |
| Recommendations | 0.6 mm recommended (0.4 mm minimum) · PA-CF: all-metal hotend + drying required, more demanding than PLA-CF/PETG-CF |
| Examples | Drones, rigid jigs, low-impact fixtures |

</div>

### Glass fiber (GF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composite</span>

| | |
|---|---|
| TigerTag material | `PETG-GF` · id 34944<br/>`PA-GF` · id 30594<br/>no PLA-GF entry yet |
| Overview | Chopped glass fiber (10–30%) in a PLA, PETG or nylon base: stiffer than the unfilled base and tougher (less brittle) than the equivalent CF grade — but not electrically conductive, so it doesn't block radio signals the way CF can. |
| Strength /10 | 7 (rigid, more impact-tolerant than CF) |
| Chemical resistance | <strong>PLA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, oils, cold water · <span class="ts-tag ts-tag--warn">FAIR</span> acetone · <span class="ts-tag ts-tag--danger">POOR</span> concentrated acids/bases<br/><strong>PETG-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> water, alcohols, dilute acids, salts · <span class="ts-tag ts-tag--danger">POOR</span> chlorinated solvents, concentrated ketones<br/><strong>PA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> acetone, alcohols, hydrocarbons, bases · <span class="ts-tag ts-tag--danger">POOR</span> acids; swells in water |
| Heat resistance | PLA-GF ~55–60 °C<br/>PETG-GF ~75–80 °C<br/>PA-GF ~150–180 °C |
| Impact resistance | Moderate (tougher than CF at the same fiber load) |
| UV resistance | Poor to good (depends on base) |
| Nozzle temp | PETG-GF 230–270 °C<br/>PA-GF 260–300 °C |
| Bed temp | PETG-GF 70–90 °C<br/>PA-GF 40–45 °C |
| Drying | PETG-GF 70 °C · 8 h<br/>PA-GF 85 °C · 12 h |
| Density | PETG-GF —<br/>PA-GF 1.52 g/cm³ |
| Enclosure | PLA-GF/PETG-GF not needed<br/>PA-GF required |
| Recommendations | 0.6 mm recommended (0.4 mm minimum) · PA-GF: all-metal hotend + drying required, more demanding than PLA-GF/PETG-GF |
| Examples | RF-transparent housings (antennas, radio gear), tool jigs, impact-tolerant brackets |

</div>

### Metal

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composite</span>

| | |
|---|---|
| TigerTag material | `PLA` · id 38219<br/>+ aspect `Metal` · id 226 |
| Overview | 5–60% metal powder (bronze, copper, stainless…) in a PLA base: metal look and weight, polishes. |
| Strength /10 | 5 (fragile base) |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> IPA (barely touches it), oils, cold water<br/><span class="ts-tag ts-tag--warn">FAIR</span> acetone — weakens under prolonged exposure, doesn't dissolve; copper/bronze powder can oxidize and patina in open air<br/><span class="ts-tag ts-tag--danger">POOR</span> concentrated acids/bases |
| Heat resistance | ~50–60 °C |
| Impact resistance | Low (brittle, very dense so heavy) |
| UV resistance | Poor |
| Nozzle temp | 190–240 °C |
| Bed temp | 45–55 °C |
| Drying | 50 °C · 8 h |
| Density | 1.24 g/cm³ |
| Enclosure | Not needed |
| Recommendations | Sand (220 → 1000 grit) then polish |
| Examples | "Metal" figurines/busts, heavy decor objects, trophies |

</div>

### Wood

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composite</span>

| | |
|---|---|
| TigerTag material | `PLA Wood` · id 48001 |
| Overview | Wood particles in a PLA base: sands, stains, and oils like real wood. |
| Strength /10 | 4 |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> IPA (barely touches it), oils, cold water<br/><span class="ts-tag ts-tag--warn">FAIR</span> acetone — weakens under prolonged exposure, doesn't dissolve; absorbs moisture like real wood (swells, can mold)<br/><span class="ts-tag ts-tag--danger">POOR</span> concentrated acids/bases |
| Heat resistance | ~50–55 °C |
| Impact resistance | Low |
| UV resistance | Poor (grays like outdoor wood) |
| Nozzle temp | 190–240 °C |
| Bed temp | 45–55 °C |
| Drying | 60 °C · 8 h |
| Density | 1.28 g/cm³ |
| Enclosure | Not needed |
| Recommendations | Never let it sit hot while idle (chars and clogs the nozzle) |
| Examples | Decor, models, art objects, frames |

</div>

## Supports

### PVA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Support</span>

| | |
|---|---|
| TigerTag material | `PVA` · id 9483 |
| Overview | Water-soluble support material, compatible with PLA. |
| Strength /10 | 4 |
| Chemical resistance | <span class="ts-tag ts-tag--danger">POOR</span> water — dissolves instantly<br/><span class="ts-tag ts-tag--ok">OK</span> oils (sometimes) |
| Heat resistance | ~60–70 °C |
| Impact resistance | Poor |
| UV resistance | Poor |
| Nozzle temp | 190–240 °C |
| Bed temp | 30–60 °C |
| Drying | 85 °C · 12 h |
| Density | 1.23 g/cm³ |
| Enclosure | Not needed |
| Recommendations | Keep it dry (very hygroscopic) · Use in dual extrusion |
| Examples | Supports for complex geometries (PLA) |

</div>

### HIPS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Support</span>

| | |
|---|---|
| TigerTag material | `HIPS` · id 26029 |
| Overview | Limonene-soluble support material, compatible with ABS. Also usable on its own. |
| Strength /10 | 6 |
| Chemical resistance | <span class="ts-tag ts-tag--danger">POOR</span> limonene — soluble (that's its purpose)<br/><span class="ts-tag ts-tag--ok">OK</span> bases, alcohols |
| Heat resistance | ~95–100 °C |
| Impact resistance | Good |
| UV resistance | Poor (yellows, becomes brittle) |
| Nozzle temp | 220–270 °C |
| Bed temp | 90–95 °C |
| Drying | 80 °C · 6 h |
| Density | 1.03 g/cm³ |
| Enclosure | Required |
| Recommendations | Fan off · Dissolves in limonene |
| Examples | Supports for ABS prints, lightweight prototypes |

</div>

## High-performance

### PEEK

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">High-performance</span>

| | |
|---|---|
| TigerTag material | `PEEK` · id 29815 |
| Overview | The pinnacle of printable thermoplastics: extreme mechanical/thermal performance. |
| Strength /10 | 10 |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> nearly all solvents, dilute acids, autoclave sterilization<br/><span class="ts-tag ts-tag--danger">POOR</span> concentrated sulfuric acid |
| Heat resistance | ~250–260 °C |
| Impact resistance | Good |
| UV resistance | Fair |
| Nozzle temp | 390–410 °C |
| Bed temp | 130–145 °C |
| Drying | 120 °C · 6 h |
| Density | 1.32 g/cm³ |
| Enclosure | Required, heated >100 °C |
| Recommendations | Drying required |
| Examples | Medical implants, aerospace parts |

</div>

### PEI (Ultem)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">High-performance</span>

| | |
|---|---|
| TigerTag material | `PEI-1010` · id 56527<br/>`PEI-9085` · id 14508 |
| Overview | Fire-rated aerospace resin, very dimensionally stable. |
| Strength /10 | 9 |
| Chemical resistance | <span class="ts-tag ts-tag--ok">OK</span> fuels, oils, most solvents<br/><span class="ts-tag ts-tag--danger">POOR</span> chlorinated solvents, strong bases |
| Heat resistance | ~170–200 °C |
| Impact resistance | Good |
| UV resistance | Fair |
| Nozzle temp | PEI-1010 370–420 °C<br/>PEI-9085 350–390 °C |
| Bed temp | PEI-1010 150–160 °C<br/>PEI-9085 120–160 °C |
| Drying | PEI-1010 130 °C · 12 h<br/>PEI-9085 150 °C · 12 h |
| Density | PEI-1010 1.27 g/cm³<br/>PEI-9085 — |
| Enclosure | Required, heated |
| Recommendations | Borosilicate glass bed · Very hygroscopic: drying required |
| Examples | Aircraft interiors (fire/smoke rating), industrial jigs |

</div>

Strength, resistance ratings and recommendations are general guidance and vary by brand and batch. Temperatures, drying and density are the reference database's defaults.

---

**▲ [Documentation index](../../README.md)**
