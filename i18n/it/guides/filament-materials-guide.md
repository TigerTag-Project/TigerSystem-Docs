---
sourceHash: 523ed86c04218e9fd4b3d044087a4f64103df5017b6ae258c84443a2243fcac2
sourcePath: docs/guides/filament-materials-guide.md
---

# Guida ai materiali per filamento

Un riferimento operativo per 21 materiali: panoramica, resistenza meccanica, resistenza chimica, resistenza a calore/urti/UV, temperature, essiccazione e densità, raccomandazioni ed esempi tipici.

**Nomi e numeri provengono dal protocollo.** Ogni scheda indica il materiale
esattamente come lo codifica un TigerTag, con il suo ID nel database di riferimento condiviso —
[`id_material.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_material.json), servito anche dalla [API TigerTag](https://api.tigertag.io/api:tigertag/material/get/all). I
valori di ugello, piano ed essiccazione e la densità sono quelli propri di quel database: sono
ciò che Tiger Studio compila quando scegli il materiale per una bobina. Il
TigerTag di una bobina porta i valori esatti del suo produttore, e questi hanno la precedenza.
Finiture come opaco o metallo non sono materiali in TigerTag ma **aspetti**,
aggiunti sopra il materiale di base — vedi
[identità universale del filamento](../concepts/universal-filament-identity.md).

**Etichette di resistenza chimica:** <span class="ts-tag ts-tag--ok">OK</span> resiste bene · <span class="ts-tag ts-tag--warn">MEDIA</span> si indebolisce o varia · <span class="ts-tag ts-tag--danger">SCARSA</span> si scioglie o si degrada.

## Uso quotidiano

### PLA / PLA+

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Uso quotidiano</span>

| | |
|---|---|
| Materiale TigerTag | `PLA` · id 38219<br/>`PLA+` · id 46591 |
| Panoramica | Standard, facile, compostabile industrialmente. |
| Resistenza /10 | 6 |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> IPA (lo intacca appena), oli, acqua fredda<br/><span class="ts-tag ts-tag--warn">MEDIA</span> acetone — si indebolisce con esposizione prolungata, non si scioglie<br/><span class="ts-tag ts-tag--danger">SCARSA</span> acidi/basi concentrati |
| Resistenza al calore | ~50–60 °C |
| Resistenza agli urti | Moderata |
| Resistenza ai raggi UV | Scarsa |
| Temp. ugello | 190–240 °C |
| Temp. piano | 45–55 °C |
| Essiccazione | 50 °C · 8 h |
| Densità | 1.24 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Ventola 100% · Alta velocità possibile |
| Esempi | Prototipi, statuine, decorazioni |

</div>

### PLA Silk/Wood

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Uso quotidiano</span>

| | |
|---|---|
| Materiale TigerTag | `PLA Silk` · id 10602<br/>`PLA+ Silk` · id 8345<br/>`PLA Wood` · id 48001 |
| Panoramica | Una finitura estetica del PLA — una lucentezza setosa o una leggera polvere dal tono legno, da non confondere con il composito Wood, molto più caricato, più avanti. |
| Resistenza /10 | 5 |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> IPA (lo intacca appena), oli, acqua fredda<br/><span class="ts-tag ts-tag--warn">MEDIA</span> acetone — si indebolisce con esposizione prolungata, non si scioglie; gli additivi silk/tono legno assorbono l'umidità un po' più in fretta del PLA semplice<br/><span class="ts-tag ts-tag--danger">SCARSA</span> acidi/basi concentrati |
| Resistenza al calore | ~50–60 °C |
| Resistenza agli urti | Bassa |
| Resistenza ai raggi UV | Scarsa |
| Temp. ugello | 190–240 °C |
| Temp. piano | 45–55 °C |
| Essiccazione | PLA Silk 50 °C · 8 h<br/>PLA+ Silk 50 °C · 8 h<br/>PLA Wood 60 °C · 8 h |
| Densità | PLA Silk 1.24 g/cm³<br/>PLA+ Silk 1.24 g/cm³<br/>PLA Wood 1.28 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Punta da 0,6 mm se contiene particelle · Bassa velocità · Forte adesione al piano (vetro o PEI) — lascialo raffreddare del tutto prima di rimuoverlo |
| Esempi | Vasi, decorazioni, pezzi artistici |

</div>

### PLA Matte

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Uso quotidiano</span>

| | |
|---|---|
| Materiale TigerTag | `PLA` · id 38219<br/>+ aspetto `Matt` · id 247 |
| Panoramica | Finitura opaca/satinata (cariche minerali) che nasconde bene le linee degli strati. |
| Resistenza /10 | 5 |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> IPA (lo intacca appena), oli, acqua fredda<br/><span class="ts-tag ts-tag--warn">MEDIA</span> acetone — si indebolisce con esposizione prolungata, non si scioglie<br/><span class="ts-tag ts-tag--danger">SCARSA</span> acidi/basi concentrati |
| Resistenza al calore | ~50–55 °C |
| Resistenza agli urti | Da bassa a moderata |
| Resistenza ai raggi UV | Scarsa |
| Temp. ugello | 190–240 °C |
| Temp. piano | 45–55 °C |
| Essiccazione | 50 °C · 8 h |
| Densità | 1.24 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Velocità moderata (più fragile sui dettagli fini) · Ideale per pezzi decorativi senza lucentezza |
| Esempi | Statuine, modelli, pezzi da esposizione |

</div>

### PETG

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Uso quotidiano</span>

| | |
|---|---|
| Materiale TigerTag | `PETG` · id 38256 |
| Panoramica | Il «coltellino svizzero»: resistente, flessibile, buona resistenza chimica e ai raggi UV. |
| Resistenza /10 | 8 |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> acqua, alcoli, acidi diluiti, sali<br/><span class="ts-tag ts-tag--danger">SCARSA</span> solventi clorurati, chetoni concentrati |
| Resistenza al calore | ~70–80 °C |
| Resistenza agli urti | Buona |
| Resistenza ai raggi UV | Buona |
| Temp. ugello | 220–270 °C |
| Temp. piano | 70–75 °C |
| Essiccazione | 70 °C · 8 h |
| Densità | 1.27 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Ventola 20–50% · Forte adesione al piano (vetro o PEI) — lascialo raffreddare del tutto prima di rimuoverlo · Velocità moderata |
| Esempi | Parti meccaniche, scatole impermeabili, clip |

</div>

### PETG High Speed

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Uso quotidiano</span>

| | |
|---|---|
| Materiale TigerTag | `PETG HS` · id 7649<br/>`PETG HF` · id 57469 |
| Panoramica | Lo stesso PETG, formulato con viscosità inferiore per fondere abbastanza in fretta a oltre 300 mm/s. |
| Resistenza /10 | 8 (come il PETG) |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> acqua, alcoli, acidi diluiti, sali<br/><span class="ts-tag ts-tag--danger">SCARSA</span> solventi clorurati, chetoni concentrati |
| Resistenza al calore | ~70–80 °C |
| Resistenza agli urti | Buona |
| Resistenza ai raggi UV | Buona |
| Temp. ugello | 220–270 °C |
| Temp. piano | 70–75 °C |
| Essiccazione | 70 °C · 8 h |
| Densità | 1.27 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Utile solo con un hotend «high-flow» o una stampante limitata dal flusso · Nessun vantaggio su una stampante lenta o con Bowden classico |
| Esempi | Gli stessi usi del PETG, su una stampante veloce (CoreXY come Bambu Lab, Creality K1…) |

</div>

## Tecnici / funzionali

### TPU 85A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Tecnico</span>

| | |
|---|---|
| Materiale TigerTag | `TPU` · id 43518<br/>La durezza Shore non fa parte dell'id |
| Panoramica | Molto morbido, assorbe gli urti, ma si schiaccia e si deforma facilmente. |
| Resistenza /10 | 3 (molto morbido) |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> oli, grassi, carburanti<br/><span class="ts-tag ts-tag--warn">VARIA</span> contro i solventi a seconda della formulazione |
| Resistenza al calore | ~55–60 °C |
| Resistenza agli urti | Eccellente (assorbimento) |
| Resistenza ai raggi UV | Buona |
| Temp. ugello | 200–250 °C |
| Temp. piano | 35–40 °C |
| Essiccazione | 75 °C · 8 h |
| Densità | 1.21 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Estrusore direct-drive necessario · Velocità 15–25 mm/s, retrazione minima |
| Esempi | Suole, impugnature morbide, guarnizioni |

</div>

### TPU 95A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Tecnico</span>

| | |
|---|---|
| Materiale TigerTag | `TPU` · id 43518<br/>La durezza Shore non fa parte dell'id |
| Panoramica | Il TPU più comune: un buon equilibrio tra flessibilità e stampabilità. |
| Resistenza /10 | 5 (flessibile) |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> oli, grassi, carburanti<br/><span class="ts-tag ts-tag--warn">VARIA</span> contro i solventi a seconda della formulazione |
| Resistenza al calore | ~60 °C |
| Resistenza agli urti | Eccellente |
| Resistenza ai raggi UV | Buona |
| Temp. ugello | 200–250 °C |
| Temp. piano | 35–40 °C |
| Essiccazione | 75 °C · 8 h |
| Densità | 1.21 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Direct-drive consigliato (un Bowden ben regolato può funzionare) · Velocità 30–45 mm/s — il TPU più tollerante |
| Esempi | Pneumatici RC, custodie per telefono, guaine per cavi |

</div>

### TPU 60D

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Tecnico</span>

| | |
|---|---|
| Materiale TigerTag | `TPU` · id 43518<br/>La durezza Shore non fa parte dell'id |
| Panoramica | Quasi una plastica rigida: lieve flessibilità, molto resistente alla fatica. |
| Resistenza /10 | 7 (rigido per un TPU) |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> oli, grassi, carburanti<br/><span class="ts-tag ts-tag--warn">VARIA</span> contro i solventi a seconda della formulazione |
| Resistenza al calore | ~65–70 °C |
| Resistenza agli urti | Eccellente (regge i colpi senza rompersi) |
| Resistenza ai raggi UV | Buona |
| Temp. ugello | 200–250 °C |
| Temp. piano | 35–40 °C |
| Essiccazione | 75 °C · 8 h |
| Densità | 1.21 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Si stampa quasi come un PETG · Il Bowden in genere va bene |
| Esempi | Ruote, cerniere flessibili, parti antivibrazione |

</div>

### ABS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Tecnico</span>

| | |
|---|---|
| Materiale TigerTag | `ABS` · id 20562 |
| Panoramica | Un classico, resistente al calore. Rilascia fumi (COV) durante la stampa. |
| Resistenza /10 | 8 |
| Resistenza chimica | <span class="ts-tag ts-tag--danger">SCARSA</span> acetone — lo scioglie (è la base della levigatura a vapore), esteri<br/><span class="ts-tag ts-tag--ok">OK</span> oli, basi diluite |
| Resistenza al calore | ~95–100 °C |
| Resistenza agli urti | Buona |
| Resistenza ai raggi UV | Scarsa |
| Temp. ugello | 240–280 °C |
| Temp. piano | 85–90 °C |
| Essiccazione | 80 °C · 8 h |
| Densità | 1.04 g/cm³ |
| Camera chiusa | Obbligatoria |
| Raccomandazioni | Ventola spenta · Filtrazione dell'aria (COV) |
| Esempi | Parti per interni auto, involucri, scocche |

</div>

### ASA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Tecnico</span>

| | |
|---|---|
| Materiale TigerTag | `ASA` · id 12844 |
| Panoramica | Come l'ABS ma pensato per l'esterno (UV, intemperie). |
| Resistenza /10 | 8 (come l'ABS) |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> pioggia, sale, alcoli<br/><span class="ts-tag ts-tag--danger">SCARSA</span> acetone, acidi forti |
| Resistenza al calore | ~95–100 °C |
| Resistenza agli urti | Eccellente |
| Resistenza ai raggi UV | Eccellente |
| Temp. ugello | 240–280 °C |
| Temp. piano | 95–100 °C |
| Essiccazione | 80 °C · 8 h |
| Densità | 1.05 g/cm³ |
| Camera chiusa | Consigliata |
| Raccomandazioni | Essicca il filamento · Ventola bassa |
| Esempi | Parti per esterni, involucri da giardino |

</div>

### PA (Nylon)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Tecnico</span>

| | |
|---|---|
| Materiale TigerTag | `PA` · id 59328<br/>`PA6` · id 56666<br/>`PA11` · id 29272<br/>`PA12` · id 55796 |
| Panoramica | Il re della resistenza all'attrito e alla fatica. Molto igroscopico. |
| Resistenza /10 | 10 |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> acetone, alcoli, idrocarburi (benzina), basi<br/><span class="ts-tag ts-tag--danger">SCARSA</span> acidi (aceto, HCl); si gonfia in acqua |
| Resistenza al calore | ~110–115 °C |
| Resistenza agli urti | Eccellente |
| Resistenza ai raggi UV | Discreta |
| Temp. ugello | PA 240–280 °C<br/>PA6 240–280 °C<br/>PA11 260–290 °C<br/>PA12 250–290 °C |
| Temp. piano | PA 100–105 °C<br/>PA6 100–105 °C<br/>PA11 80–100 °C<br/>PA12 70–90 °C |
| Essiccazione | PA 85 °C · 12 h<br/>PA6 85 °C · 12 h<br/>PA11 80 °C · 12 h<br/>PA12 85 °C · 12 h |
| Densità | PA 1.52 g/cm³<br/>PA6 1.52 g/cm³<br/>PA11 —<br/>PA12 1.52 g/cm³ |
| Camera chiusa | Obbligatoria |
| Raccomandazioni | Essiccazione necessaria prima/durante la stampa · Colla Magigoo/PVA |
| Esempi | Ingranaggi, parti soggette a usura/attrito |

</div>

### PC (Policarbonato)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Tecnico</span>

| | |
|---|---|
| Materiale TigerTag | `PC` · id 30458 |
| Panoramica | Rigidità estrema e resistenza termica/agli urti. |
| Resistenza /10 | 10 |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> acidi diluiti, alcoli, grassi<br/><span class="ts-tag ts-tag--warn">MEDIA</span> acetone — si indebolisce / si crepa<br/><span class="ts-tag ts-tag--danger">SCARSA</span> basi forti (ammoniaca), acqua calda (idrolisi) |
| Resistenza al calore | ~115–130 °C |
| Resistenza agli urti | Eccellente (vetro antiproiettile) |
| Resistenza ai raggi UV | Discreta (ingiallisce, resta resistente) |
| Temp. ugello | 260–290 °C |
| Temp. piano | 110–115 °C |
| Essiccazione | 85 °C · 8 h |
| Densità | 1.3 g/cm³ |
| Camera chiusa | Obbligatoria |
| Raccomandazioni | Essiccazione necessaria · Colla Magigoo PC |
| Esempi | Parti motore, parti strutturali, stampi |

</div>

### PP (Polipropilene)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Tecnico</span>

| | |
|---|---|
| Materiale TigerTag | `PP` · id 30884 |
| Panoramica | Molto leggero, quasi chimicamente inerte — ma (quasi) nulla vi aderisce. |
| Resistenza /10 | 6 |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> quasi tutti gli acidi/basi diluiti, solventi comuni, oli, carburanti |
| Resistenza al calore | ~100 °C |
| Resistenza agli urti | Eccellente (flessioni ripetute) |
| Resistenza ai raggi UV | Scarsa |
| Temp. ugello | 220–250 °C |
| Temp. piano | 55–60 °C |
| Essiccazione | 60 °C · 4 h |
| Densità | 0.9 g/cm³ |
| Camera chiusa | Consigliata |
| Raccomandazioni | Nastro per PP necessario (nient'altro aderisce) · Brim largo (~2% di ritiro) |
| Esempi | Cerniere integrali, bottiglie, parti a contatto con alimenti |

</div>

## Compositi (caricati)

### Fibra di carbonio (CF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composito</span>

| | |
|---|---|
| Materiale TigerTag | `PLA-CF` · id 48310<br/>`PETG-CF` · id 55418<br/>`PA-CF` · id 39944 |
| Panoramica | Fibra di carbonio tagliata (10–25%) in una base di PLA, PETG o nylon: più rigido, meno ritiro, finitura opaca. |
| Resistenza /10 | 8 (rigido, fragile) |
| Resistenza chimica | <strong>PLA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, oli, acqua fredda · <span class="ts-tag ts-tag--warn">MEDIA</span> acetone · <span class="ts-tag ts-tag--danger">SCARSA</span> acidi/basi concentrati<br/><strong>PETG-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> acqua, alcoli, acidi diluiti, sali · <span class="ts-tag ts-tag--danger">SCARSA</span> solventi clorurati, chetoni concentrati<br/><strong>PA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> acetone, alcoli, idrocarburi, basi · <span class="ts-tag ts-tag--danger">SCARSA</span> acidi; si gonfia in acqua |
| Resistenza al calore | PLA-CF ~55–60 °C<br/>PETG-CF ~75–80 °C<br/>PA-CF ~140 °C |
| Resistenza agli urti | Bassa (fragile nonostante la rigidità) |
| Resistenza ai raggi UV | Da scarsa a buona (dipende dalla base) |
| Temp. ugello | PLA-CF 190–240 °C<br/>PETG-CF 240–270 °C<br/>PA-CF 260–300 °C |
| Temp. piano | PLA-CF 45–55 °C<br/>PETG-CF 75–80 °C<br/>PA-CF 100–105 °C |
| Essiccazione | PLA-CF 60 °C · 8 h<br/>PETG-CF 70 °C · 8 h<br/>PA-CF 85 °C · 12 h |
| Densità | PLA-CF 1.24 g/cm³<br/>PETG-CF 1.27 g/cm³<br/>PA-CF 1.52 g/cm³ |
| Camera chiusa | PLA-CF/PETG-CF non necessaria<br/>PA-CF obbligatoria |
| Raccomandazioni | 0,6 mm consigliato (0,4 mm minimo) · PA-CF: hotend interamente in metallo + essiccazione necessarie, più impegnativo di PLA-CF/PETG-CF |
| Esempi | Droni, maschere rigide, attrezzature a basso urto |

</div>

### Fibra di vetro (GF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composito</span>

| | |
|---|---|
| Materiale TigerTag | `PETG-GF` · id 34944<br/>`PA-GF` · id 30594<br/>nessuna voce PLA-GF per ora |
| Panoramica | Fibra di vetro tagliata (10–30%) in una base di PLA, PETG o nylon: più rigido della base non caricata e più tenace (meno fragile) del grado CF equivalente — ma non conduttivo elettricamente, quindi non blocca i segnali radio come può fare il CF. |
| Resistenza /10 | 7 (rigido, più tollerante agli urti del CF) |
| Resistenza chimica | <strong>PLA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, oli, acqua fredda · <span class="ts-tag ts-tag--warn">MEDIA</span> acetone · <span class="ts-tag ts-tag--danger">SCARSA</span> acidi/basi concentrati<br/><strong>PETG-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> acqua, alcoli, acidi diluiti, sali · <span class="ts-tag ts-tag--danger">SCARSA</span> solventi clorurati, chetoni concentrati<br/><strong>PA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> acetone, alcoli, idrocarburi, basi · <span class="ts-tag ts-tag--danger">SCARSA</span> acidi; si gonfia in acqua |
| Resistenza al calore | PLA-GF ~55–60 °C<br/>PETG-GF ~75–80 °C<br/>PA-GF ~150–180 °C |
| Resistenza agli urti | Moderata (più tenace del CF a parità di carico di fibra) |
| Resistenza ai raggi UV | Da scarsa a buona (dipende dalla base) |
| Temp. ugello | PETG-GF 230–270 °C<br/>PA-GF 260–300 °C |
| Temp. piano | PETG-GF 70–90 °C<br/>PA-GF 40–45 °C |
| Essiccazione | PETG-GF 70 °C · 8 h<br/>PA-GF 85 °C · 12 h |
| Densità | PETG-GF —<br/>PA-GF 1.52 g/cm³ |
| Camera chiusa | PLA-GF/PETG-GF non necessaria<br/>PA-GF obbligatoria |
| Raccomandazioni | 0,6 mm consigliato (0,4 mm minimo) · PA-GF: hotend interamente in metallo + essiccazione necessarie, più impegnativo di PLA-GF/PETG-GF |
| Esempi | Involucri trasparenti alle RF (antenne, apparecchi radio), maschere per utensili, staffe tolleranti agli urti |

</div>

### Metallo

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composito</span>

| | |
|---|---|
| Materiale TigerTag | `PLA` · id 38219<br/>+ aspetto `Metal` · id 226 |
| Panoramica | Dal 5 al 60% di polvere metallica (bronzo, rame, acciaio inox…) in una base di PLA: aspetto e peso da metallo, si lucida. |
| Resistenza /10 | 5 (base fragile) |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> IPA (lo intacca appena), oli, acqua fredda<br/><span class="ts-tag ts-tag--warn">MEDIA</span> acetone — si indebolisce con esposizione prolungata, non si scioglie; la polvere di rame/bronzo può ossidarsi e formare patina all'aria aperta<br/><span class="ts-tag ts-tag--danger">SCARSA</span> acidi/basi concentrati |
| Resistenza al calore | ~50–60 °C |
| Resistenza agli urti | Bassa (fragile, molto denso quindi pesante) |
| Resistenza ai raggi UV | Scarsa |
| Temp. ugello | 190–240 °C |
| Temp. piano | 45–55 °C |
| Essiccazione | 50 °C · 8 h |
| Densità | 1.24 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Carteggia (grana 220 → 1000) poi lucida |
| Esempi | Statuine/busti «metallici», oggetti decorativi pesanti, trofei |

</div>

### Legno

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Composito</span>

| | |
|---|---|
| Materiale TigerTag | `PLA Wood` · id 48001 |
| Panoramica | Particelle di legno in una base di PLA: si carteggia, si tinge e si tratta con oli come il vero legno. |
| Resistenza /10 | 4 |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> IPA (lo intacca appena), oli, acqua fredda<br/><span class="ts-tag ts-tag--warn">MEDIA</span> acetone — si indebolisce con esposizione prolungata, non si scioglie; assorbe l'umidità come il vero legno (si gonfia, può ammuffire)<br/><span class="ts-tag ts-tag--danger">SCARSA</span> acidi/basi concentrati |
| Resistenza al calore | ~50–55 °C |
| Resistenza agli urti | Bassa |
| Resistenza ai raggi UV | Scarsa (ingrigisce come il legno da esterno) |
| Temp. ugello | 190–240 °C |
| Temp. piano | 45–55 °C |
| Essiccazione | 60 °C · 8 h |
| Densità | 1.28 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Non lasciarlo mai fermo a caldo (si carbonizza e intasa l'ugello) |
| Esempi | Decorazioni, modelli, oggetti d'arte, cornici |

</div>

## Supporti

### PVA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Supporto</span>

| | |
|---|---|
| Materiale TigerTag | `PVA` · id 9483 |
| Panoramica | Materiale di supporto solubile in acqua, compatibile con il PLA. |
| Resistenza /10 | 4 |
| Resistenza chimica | <span class="ts-tag ts-tag--danger">SCARSA</span> acqua — si scioglie all'istante<br/><span class="ts-tag ts-tag--ok">OK</span> oli (a volte) |
| Resistenza al calore | ~60–70 °C |
| Resistenza agli urti | Scarsa |
| Resistenza ai raggi UV | Scarsa |
| Temp. ugello | 190–240 °C |
| Temp. piano | 30–60 °C |
| Essiccazione | 85 °C · 12 h |
| Densità | 1.23 g/cm³ |
| Camera chiusa | Non necessaria |
| Raccomandazioni | Tienilo asciutto (molto igroscopico) · Da usare in doppia estrusione |
| Esempi | Supporti per geometrie complesse (PLA) |

</div>

### HIPS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Supporto</span>

| | |
|---|---|
| Materiale TigerTag | `HIPS` · id 26029 |
| Panoramica | Materiale di supporto solubile nel limonene, compatibile con l'ABS. Utilizzabile anche da solo. |
| Resistenza /10 | 6 |
| Resistenza chimica | <span class="ts-tag ts-tag--danger">SCARSA</span> limonene — solubile (è il suo scopo)<br/><span class="ts-tag ts-tag--ok">OK</span> basi, alcoli |
| Resistenza al calore | ~95–100 °C |
| Resistenza agli urti | Buona |
| Resistenza ai raggi UV | Scarsa (ingiallisce, diventa fragile) |
| Temp. ugello | 220–270 °C |
| Temp. piano | 90–95 °C |
| Essiccazione | 80 °C · 6 h |
| Densità | 1.03 g/cm³ |
| Camera chiusa | Obbligatoria |
| Raccomandazioni | Ventola spenta · Si scioglie nel limonene |
| Esempi | Supporti per stampe in ABS, prototipi leggeri |

</div>

## Alte prestazioni

### PEEK

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Alte prestazioni</span>

| | |
|---|---|
| Materiale TigerTag | `PEEK` · id 29815 |
| Panoramica | Il vertice dei termoplastici stampabili: prestazioni meccaniche/termiche estreme. |
| Resistenza /10 | 10 |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> quasi tutti i solventi, acidi diluiti, sterilizzazione in autoclave<br/><span class="ts-tag ts-tag--danger">SCARSA</span> acido solforico concentrato |
| Resistenza al calore | ~250–260 °C |
| Resistenza agli urti | Buona |
| Resistenza ai raggi UV | Discreta |
| Temp. ugello | 390–410 °C |
| Temp. piano | 130–145 °C |
| Essiccazione | 120 °C · 6 h |
| Densità | 1.32 g/cm³ |
| Camera chiusa | Obbligatoria, riscaldata a oltre 100 °C |
| Raccomandazioni | Essiccazione necessaria |
| Esempi | Impianti medici, parti aerospaziali |

</div>

### PEI (Ultem)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Alte prestazioni</span>

| | |
|---|---|
| Materiale TigerTag | `PEI-1010` · id 56527<br/>`PEI-9085` · id 14508 |
| Panoramica | Resina aerospaziale ignifuga, dimensionalmente molto stabile. |
| Resistenza /10 | 9 |
| Resistenza chimica | <span class="ts-tag ts-tag--ok">OK</span> carburanti, oli, la maggior parte dei solventi<br/><span class="ts-tag ts-tag--danger">SCARSA</span> solventi clorurati, basi forti |
| Resistenza al calore | ~170–200 °C |
| Resistenza agli urti | Buona |
| Resistenza ai raggi UV | Discreta |
| Temp. ugello | PEI-1010 370–420 °C<br/>PEI-9085 350–390 °C |
| Temp. piano | PEI-1010 150–160 °C<br/>PEI-9085 120–160 °C |
| Essiccazione | PEI-1010 130 °C · 12 h<br/>PEI-9085 150 °C · 12 h |
| Densità | PEI-1010 1.27 g/cm³<br/>PEI-9085 — |
| Camera chiusa | Obbligatoria, riscaldata |
| Raccomandazioni | Piano in vetro borosilicato · Molto igroscopico: essiccazione necessaria |
| Esempi | Interni di aerei (classificazione antincendio/fumi), maschere industriali |

</div>

Resistenza meccanica, valutazioni di resistenza e raccomandazioni sono indicazioni generali e variano in base a marca e lotto. Temperature, essiccazione e densità sono i valori predefiniti del database di riferimento.

---

**▲ [Indice della documentazione](../../README.md)**
