---
sourceHash: e5862ee1342ae90c0f611c8239c4b34958fb835dffae1e4f1f608c941c7a25f9
sourcePath: docs/guides/filament-materials-guide.md
---

# Guia de materiais de filamento

Uma referência prática para 21 materiais: visão geral, resistência, resistência química, resistência ao calor/impacto/UV, temperaturas, secagem e densidade, recomendações e exemplos típicos.

**Os nomes e os números vêm do protocolo.** Cada ficha nomeia o material
exatamente como um TigerTag o codifica, com o seu id no banco de dados de referência compartilhado —
[`id_material.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_material.json), também servido pela [API do TigerTag](https://api.tigertag.io/api:tigertag/material/get/all). Os valores de
bico, mesa e secagem e a densidade são os desse banco de dados: são
o que o Tiger Studio preenche quando você escolhe o material de uma bobina. O
TigerTag de uma bobina carrega os valores exatos do fabricante dela, e esses têm precedência.
Acabamentos como fosco ou metal não são materiais no TigerTag, mas **aspectos**,
acrescentados sobre o material base — veja a
[identidade universal de filamento](../concepts/universal-filament-identity.md).

**Etiquetas de resistência química:** <span class="ts-tag ts-tag--ok">OK</span> resiste bem · <span class="ts-tag ts-tag--warn">RAZOÁVEL</span> enfraquece ou varia · <span class="ts-tag ts-tag--danger">RUIM</span> dissolve ou se degrada.

## Uso cotidiano

### PLA / PLA+

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Uso cotidiano</span>

| | |
|---|---|
| Material TigerTag | `PLA` · id 38219<br/>`PLA+` · id 46591 |
| Visão geral | Padrão, fácil, compostável industrialmente. |
| Resistência /10 | 6 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> IPA (mal o afeta), óleos, água fria<br/><span class="ts-tag ts-tag--warn">RAZOÁVEL</span> acetona — enfraquece sob exposição prolongada, não dissolve<br/><span class="ts-tag ts-tag--danger">RUIM</span> ácidos/bases concentrados |
| Resistência ao calor | ~50–60 °C |
| Resistência ao impacto | Moderada |
| Resistência a UV | Ruim |
| Temp. do bico | 190–240 °C |
| Temp. da mesa | 45–55 °C |
| Secagem | 50 °C · 8 h |
| Densidade | 1,24 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Ventoinha 100% · Alta velocidade possível |
| Exemplos | Protótipos, estatuetas, decoração |

</div>

### PLA Silk/Wood

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Uso cotidiano</span>

| | |
|---|---|
| Material TigerTag | `PLA Silk` · id 10602<br/>`PLA+ Silk` · id 8345<br/>`PLA Wood` · id 48001 |
| Visão geral | Um acabamento cosmético de PLA — um brilho sedoso ou um leve pó em tom de madeira, a não ser confundido com o compósito Madeira, muito mais carregado, mais abaixo. |
| Resistência /10 | 5 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> IPA (mal o afeta), óleos, água fria<br/><span class="ts-tag ts-tag--warn">RAZOÁVEL</span> acetona — enfraquece sob exposição prolongada, não dissolve; os aditivos de seda/tom de madeira absorvem umidade um pouco mais rápido que o PLA simples<br/><span class="ts-tag ts-tag--danger">RUIM</span> ácidos/bases concentrados |
| Resistência ao calor | ~50–60 °C |
| Resistência ao impacto | Baixa |
| Resistência a UV | Ruim |
| Temp. do bico | 190–240 °C |
| Temp. da mesa | 45–55 °C |
| Secagem | PLA Silk 50 °C · 8 h<br/>PLA+ Silk 50 °C · 8 h<br/>PLA Wood 60 °C · 8 h |
| Densidade | PLA Silk 1,24 g/cm³<br/>PLA+ Silk 1,24 g/cm³<br/>PLA Wood 1,28 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Ponta de 0,6 mm se contiver partículas · Velocidade baixa · Forte aderência à mesa (vidro ou PEI) — deixe esfriar por completo antes de remover |
| Exemplos | Vasos, decoração, peças de arte |

</div>

### PLA Matte

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Uso cotidiano</span>

| | |
|---|---|
| Material TigerTag | `PLA` · id 38219<br/>+ aspecto `Matt` · id 247 |
| Visão geral | Acabamento fosco/lixado (cargas minerais) que esconde bem as linhas de camada. |
| Resistência /10 | 5 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> IPA (mal o afeta), óleos, água fria<br/><span class="ts-tag ts-tag--warn">RAZOÁVEL</span> acetona — enfraquece sob exposição prolongada, não dissolve<br/><span class="ts-tag ts-tag--danger">RUIM</span> ácidos/bases concentrados |
| Resistência ao calor | ~50–55 °C |
| Resistência ao impacto | Baixa a moderada |
| Resistência a UV | Ruim |
| Temp. do bico | 190–240 °C |
| Temp. da mesa | 45–55 °C |
| Secagem | 50 °C · 8 h |
| Densidade | 1,24 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Velocidade moderada (mais quebradiço em detalhes finos) · Ideal para peças decorativas sem brilho |
| Exemplos | Estatuetas, maquetes, peças de exposição |

</div>

### PETG

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Uso cotidiano</span>

| | |
|---|---|
| Material TigerTag | `PETG` · id 38256 |
| Visão geral | O “canivete suíço”: resistente, flexível, com boa resistência química e a UV. |
| Resistência /10 | 8 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> água, álcoois, ácidos diluídos, sais<br/><span class="ts-tag ts-tag--danger">RUIM</span> solventes clorados, cetonas concentradas |
| Resistência ao calor | ~70–80 °C |
| Resistência ao impacto | Boa |
| Resistência a UV | Excelente |
| Temp. do bico | 220–270 °C |
| Temp. da mesa | 70–75 °C |
| Secagem | 70 °C · 8 h |
| Densidade | 1,27 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Ventoinha 20–50% · Forte aderência à mesa (vidro ou PEI) — deixe esfriar por completo antes de remover · Velocidade moderada |
| Exemplos | Peças mecânicas, caixas à prova d’água, clipes |

</div>

### PETG High Speed

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--public">Uso cotidiano</span>

| | |
|---|---|
| Material TigerTag | `PETG HS` · id 7649<br/>`PETG HF` · id 57469 |
| Visão geral | O mesmo PETG, formulado com menor viscosidade para derreter rápido o bastante a 300+ mm/s. |
| Resistência /10 | 8 (igual ao PETG) |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> água, álcoois, ácidos diluídos, sais<br/><span class="ts-tag ts-tag--danger">RUIM</span> solventes clorados, cetonas concentradas |
| Resistência ao calor | ~70–80 °C |
| Resistência ao impacto | Boa |
| Resistência a UV | Excelente |
| Temp. do bico | 220–270 °C |
| Temp. da mesa | 70–75 °C |
| Secagem | 70 °C · 8 h |
| Densidade | 1,27 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Só é útil em um hotend de “alto fluxo” ou em uma impressora com fluxo limitado · Sem benefício em uma impressora lenta ou Bowden clássica |
| Exemplos | Os mesmos usos do PETG, em uma impressora rápida (CoreXY como Bambu Lab, Creality K1…) |

</div>

## Técnicos / funcionais

### TPU 85A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `TPU` · id 43518<br/>A dureza Shore não faz parte do id |
| Visão geral | Muito macio, absorve impactos, mas amassa e se deforma com facilidade. |
| Resistência /10 | 3 (muito macio) |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> óleos, graxas, combustíveis<br/><span class="ts-tag ts-tag--warn">VARIA</span> contra solventes, conforme a formulação |
| Resistência ao calor | ~55–60 °C |
| Resistência ao impacto | Excelente (absorção) |
| Resistência a UV | Boa |
| Temp. do bico | 200–250 °C |
| Temp. da mesa | 35–40 °C |
| Secagem | 75 °C · 8 h |
| Densidade | 1,21 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Extrusora direct-drive obrigatória · Velocidade de 15–25 mm/s, retração mínima |
| Exemplos | Solas, empunhaduras macias, vedações |

</div>

### TPU 95A

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `TPU` · id 43518<br/>A dureza Shore não faz parte do id |
| Visão geral | O TPU mais comum: um bom equilíbrio entre flexibilidade e facilidade de impressão. |
| Resistência /10 | 5 (flexível) |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> óleos, graxas, combustíveis<br/><span class="ts-tag ts-tag--warn">VARIA</span> contra solventes, conforme a formulação |
| Resistência ao calor | ~60 °C |
| Resistência ao impacto | Excelente |
| Resistência a UV | Boa |
| Temp. do bico | 200–250 °C |
| Temp. da mesa | 35–40 °C |
| Secagem | 75 °C · 8 h |
| Densidade | 1,21 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Direct-drive recomendado (um Bowden bem ajustado pode funcionar) · Velocidade de 30–45 mm/s — o TPU mais tolerante |
| Exemplos | Pneus de RC, capas de celular, revestimento de cabos |

</div>

### TPU 60D

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `TPU` · id 43518<br/>A dureza Shore não faz parte do id |
| Visão geral | Quase um plástico rígido: leve flexão, muito resistente à fadiga. |
| Resistência /10 | 7 (rígido para um TPU) |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> óleos, graxas, combustíveis<br/><span class="ts-tag ts-tag--warn">VARIA</span> contra solventes, conforme a formulação |
| Resistência ao calor | ~65–70 °C |
| Resistência ao impacto | Excelente (aguenta pancadas sem quebrar) |
| Resistência a UV | Boa |
| Temp. do bico | 200–250 °C |
| Temp. da mesa | 35–40 °C |
| Secagem | 75 °C · 8 h |
| Densidade | 1,21 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Imprime quase como um PETG · Bowden geralmente serve |
| Exemplos | Rodas, dobradiças flexíveis, peças antivibração |

</div>

### ABS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `ABS` · id 20562 |
| Visão geral | Tradicional, resistente ao calor. Libera vapores (VOCs) durante a impressão. |
| Resistência /10 | 8 |
| Resistência química | <span class="ts-tag ts-tag--danger">RUIM</span> acetona — dissolve-o (a base do alisamento a vapor), ésteres<br/><span class="ts-tag ts-tag--ok">OK</span> óleos, bases diluídas |
| Resistência ao calor | ~95–100 °C |
| Resistência ao impacto | Boa |
| Resistência a UV | Ruim |
| Temp. do bico | 240–280 °C |
| Temp. da mesa | 85–90 °C |
| Secagem | 80 °C · 8 h |
| Densidade | 1,04 g/cm³ |
| Câmara fechada | Obrigatória |
| Recomendações | Ventoinha desligada · Filtragem de ar (VOCs) |
| Exemplos | Peças de interior de carro, gabinetes, carcaças |

</div>

### ASA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `ASA` · id 12844 |
| Visão geral | Como o ABS, mas feito para o ar livre (UV, intempéries). |
| Resistência /10 | 10 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> chuva, sal, álcoois<br/><span class="ts-tag ts-tag--danger">RUIM</span> acetona, ácidos fortes |
| Resistência ao calor | ~95–100 °C |
| Resistência ao impacto | Excelente |
| Resistência a UV | Excelente |
| Temp. do bico | 240–280 °C |
| Temp. da mesa | 95–100 °C |
| Secagem | 80 °C · 8 h |
| Densidade | 1,05 g/cm³ |
| Câmara fechada | Recomendada |
| Recomendações | Seque o filamento · Ventoinha baixa |
| Exemplos | Peças para uso externo, gabinetes de jardim |

</div>

### PA (Náilon)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `PA` · id 59328<br/>`PA6` · id 56666<br/>`PA11` · id 29272<br/>`PA12` · id 55796 |
| Visão geral | O rei da resistência ao atrito e à fadiga. Muito higroscópico. |
| Resistência /10 | 10 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> acetona, álcoois, hidrocarbonetos (gasolina), bases<br/><span class="ts-tag ts-tag--danger">RUIM</span> ácidos (vinagre, HCl); incha na água |
| Resistência ao calor | ~110–115 °C |
| Resistência ao impacto | Excelente |
| Resistência a UV | Razoável |
| Temp. do bico | PA 240–280 °C<br/>PA6 240–280 °C<br/>PA11 260–290 °C<br/>PA12 250–290 °C |
| Temp. da mesa | PA 100–105 °C<br/>PA6 100–105 °C<br/>PA11 80–100 °C<br/>PA12 70–90 °C |
| Secagem | PA 85 °C · 12 h<br/>PA6 85 °C · 12 h<br/>PA11 80 °C · 12 h<br/>PA12 85 °C · 12 h |
| Densidade | PA 1,52 g/cm³<br/>PA6 1,52 g/cm³<br/>PA11 —<br/>PA12 1,52 g/cm³ |
| Câmara fechada | Obrigatória |
| Recomendações | Secagem obrigatória antes/durante a impressão · Cola Magigoo/PVA |
| Exemplos | Engrenagens, peças sujeitas a desgaste/atrito |

</div>

### PC (Policarbonato)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `PC` · id 30458 |
| Visão geral | Rigidez extrema e resistência térmica/ao impacto. |
| Resistência /10 | 10 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> ácidos diluídos, álcoois, graxas<br/><span class="ts-tag ts-tag--warn">RAZOÁVEL</span> acetona — enfraquece / racha<br/><span class="ts-tag ts-tag--danger">RUIM</span> bases fortes (amônia), água quente (hidrólise) |
| Resistência ao calor | ~115–130 °C |
| Resistência ao impacto | Excelente (vidro à prova de balas) |
| Resistência a UV | Razoável (amarela, continua resistente) |
| Temp. do bico | 260–290 °C |
| Temp. da mesa | 110–115 °C |
| Secagem | 85 °C · 8 h |
| Densidade | 1,3 g/cm³ |
| Câmara fechada | Obrigatória |
| Recomendações | Secagem obrigatória · Cola Magigoo PC |
| Exemplos | Peças de motor, peças estruturais, moldes |

</div>

### PP (Polipropileno)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--technique">Técnico</span>

| | |
|---|---|
| Material TigerTag | `PP` · id 30884 |
| Visão geral | Muito leve, quase quimicamente inerte — mas (quase) nada gruda nele. |
| Resistência /10 | 6 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> quase todos os ácidos/bases diluídos, solventes comuns, óleos, combustíveis |
| Resistência ao calor | ~100 °C |
| Resistência ao impacto | Excelente (flexões repetidas) |
| Resistência a UV | Ruim |
| Temp. do bico | 220–250 °C |
| Temp. da mesa | 55–60 °C |
| Secagem | 60 °C · 4 h |
| Densidade | 0,9 g/cm³ |
| Câmara fechada | Recomendada |
| Recomendações | Fita de PP obrigatória (nada mais gruda) · Brim largo (~2% de encolhimento) |
| Exemplos | Dobradiças integradas, garrafas, peças em contato com alimentos |

</div>

## Compósitos (com carga)

### Fibra de carbono (CF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Compósito</span>

| | |
|---|---|
| Material TigerTag | `PLA-CF` · id 48310<br/>`PETG-CF` · id 55418<br/>`PA-CF` · id 39944 |
| Visão geral | Fibra de carbono picada (10–25%) em uma base de PLA, PETG ou náilon: mais rígido, menos encolhimento, acabamento fosco. |
| Resistência /10 | 8 (rígido, quebradiço) |
| Resistência química | <strong>PLA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, óleos, água fria · <span class="ts-tag ts-tag--warn">RAZOÁVEL</span> acetona · <span class="ts-tag ts-tag--danger">RUIM</span> ácidos/bases concentrados<br/><strong>PETG-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> água, álcoois, ácidos diluídos, sais · <span class="ts-tag ts-tag--danger">RUIM</span> solventes clorados, cetonas concentradas<br/><strong>PA-CF:</strong> <span class="ts-tag ts-tag--ok">OK</span> acetona, álcoois, hidrocarbonetos, bases · <span class="ts-tag ts-tag--danger">RUIM</span> ácidos; incha na água |
| Resistência ao calor | PLA-CF ~55–60 °C<br/>PETG-CF ~75–80 °C<br/>PA-CF ~140 °C |
| Resistência ao impacto | Baixa (quebradiço apesar da rigidez) |
| Resistência a UV | Ruim a boa (depende da base) |
| Temp. do bico | PLA-CF 190–240 °C<br/>PETG-CF 240–270 °C<br/>PA-CF 260–300 °C |
| Temp. da mesa | PLA-CF 45–55 °C<br/>PETG-CF 75–80 °C<br/>PA-CF 100–105 °C |
| Secagem | PLA-CF 60 °C · 8 h<br/>PETG-CF 70 °C · 8 h<br/>PA-CF 85 °C · 12 h |
| Densidade | PLA-CF 1,24 g/cm³<br/>PETG-CF 1,27 g/cm³<br/>PA-CF 1,52 g/cm³ |
| Câmara fechada | PLA-CF/PETG-CF desnecessária<br/>PA-CF obrigatória |
| Recomendações | 0,6 mm recomendado (0,4 mm no mínimo) · PA-CF: hotend totalmente metálico + secagem obrigatória, mais exigente que PLA-CF/PETG-CF |
| Exemplos | Drones, gabaritos rígidos, fixações de baixo impacto |

</div>

### Fibra de vidro (GF)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Compósito</span>

| | |
|---|---|
| Material TigerTag | `PETG-GF` · id 34944<br/>`PA-GF` · id 30594<br/>ainda sem entrada PLA-GF |
| Visão geral | Fibra de vidro picada (10–30%) em uma base de PLA, PETG ou náilon: mais rígido que a base sem carga e mais tenaz (menos quebradiço) que a versão CF equivalente — mas não condutor de eletricidade, então não bloqueia sinais de rádio como o CF pode fazer. |
| Resistência /10 | 7 (rígido, mais tolerante a impactos que o CF) |
| Resistência química | <strong>PLA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> IPA, óleos, água fria · <span class="ts-tag ts-tag--warn">RAZOÁVEL</span> acetona · <span class="ts-tag ts-tag--danger">RUIM</span> ácidos/bases concentrados<br/><strong>PETG-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> água, álcoois, ácidos diluídos, sais · <span class="ts-tag ts-tag--danger">RUIM</span> solventes clorados, cetonas concentradas<br/><strong>PA-GF:</strong> <span class="ts-tag ts-tag--ok">OK</span> acetona, álcoois, hidrocarbonetos, bases · <span class="ts-tag ts-tag--danger">RUIM</span> ácidos; incha na água |
| Resistência ao calor | PLA-GF ~55–60 °C<br/>PETG-GF ~75–80 °C<br/>PA-GF ~150–180 °C |
| Resistência ao impacto | Moderada (mais tenaz que o CF com a mesma carga de fibra) |
| Resistência a UV | Ruim a boa (depende da base) |
| Temp. do bico | PETG-GF 230–270 °C<br/>PA-GF 260–300 °C |
| Temp. da mesa | PETG-GF 70–90 °C<br/>PA-GF 40–45 °C |
| Secagem | PETG-GF 70 °C · 8 h<br/>PA-GF 85 °C · 12 h |
| Densidade | PETG-GF —<br/>PA-GF 1,52 g/cm³ |
| Câmara fechada | PLA-GF/PETG-GF desnecessária<br/>PA-GF obrigatória |
| Recomendações | 0,6 mm recomendado (0,4 mm no mínimo) · PA-GF: hotend totalmente metálico + secagem obrigatória, mais exigente que PLA-GF/PETG-GF |
| Exemplos | Carcaças transparentes a RF (antenas, equipamentos de rádio), gabaritos de ferramentas, suportes tolerantes a impactos |

</div>

### Metal

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Compósito</span>

| | |
|---|---|
| Material TigerTag | `PLA` · id 38219<br/>+ aspecto `Metal` · id 226 |
| Visão geral | 5–60% de pó metálico (bronze, cobre, aço inoxidável…) em uma base de PLA: aparência e peso de metal, pode ser polido. |
| Resistência /10 | 5 (base frágil) |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> IPA (mal o afeta), óleos, água fria<br/><span class="ts-tag ts-tag--warn">RAZOÁVEL</span> acetona — enfraquece sob exposição prolongada, não dissolve; o pó de cobre/bronze pode oxidar e criar pátina ao ar livre<br/><span class="ts-tag ts-tag--danger">RUIM</span> ácidos/bases concentrados |
| Resistência ao calor | ~50–60 °C |
| Resistência ao impacto | Baixa (quebradiço, muito denso e por isso pesado) |
| Resistência a UV | Ruim |
| Temp. do bico | 190–240 °C |
| Temp. da mesa | 45–55 °C |
| Secagem | 50 °C · 8 h |
| Densidade | 1,24 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Lixe (granulação 220 → 1000) e depois polia |
| Exemplos | Estatuetas/bustos “de metal”, objetos decorativos pesados, troféus |

</div>

### Madeira

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--composite">Compósito</span>

| | |
|---|---|
| Material TigerTag | `PLA Wood` · id 48001 |
| Visão geral | Partículas de madeira em uma base de PLA: pode ser lixado, tingido e oleado como madeira de verdade. |
| Resistência /10 | 4 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> IPA (mal o afeta), óleos, água fria<br/><span class="ts-tag ts-tag--warn">RAZOÁVEL</span> acetona — enfraquece sob exposição prolongada, não dissolve; absorve umidade como a madeira de verdade (incha, pode criar mofo)<br/><span class="ts-tag ts-tag--danger">RUIM</span> ácidos/bases concentrados |
| Resistência ao calor | ~50–55 °C |
| Resistência ao impacto | Baixa |
| Resistência a UV | Ruim (acinzenta como a madeira ao ar livre) |
| Temp. do bico | 190–240 °C |
| Temp. da mesa | 45–55 °C |
| Secagem | 60 °C · 8 h |
| Densidade | 1,28 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Nunca o deixe parado quente sem imprimir (carboniza e entope o bico) |
| Exemplos | Decoração, maquetes, objetos de arte, molduras |

</div>

## Suportes

### PVA

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Suporte</span>

| | |
|---|---|
| Material TigerTag | `PVA` · id 9483 |
| Visão geral | Material de suporte solúvel em água, compatível com PLA. |
| Resistência /10 | 4 |
| Resistência química | <span class="ts-tag ts-tag--danger">RUIM</span> água — dissolve instantaneamente<br/><span class="ts-tag ts-tag--ok">OK</span> óleos (às vezes) |
| Resistência ao calor | ~60–70 °C |
| Resistência ao impacto | Ruim |
| Resistência a UV | Ruim |
| Temp. do bico | 190–240 °C |
| Temp. da mesa | 30–60 °C |
| Secagem | 85 °C · 12 h |
| Densidade | 1,23 g/cm³ |
| Câmara fechada | Desnecessária |
| Recomendações | Mantenha-o seco (muito higroscópico) · Use em extrusão dupla |
| Exemplos | Suportes para geometrias complexas (PLA) |

</div>

### HIPS

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--support">Suporte</span>

| | |
|---|---|
| Material TigerTag | `HIPS` · id 26029 |
| Visão geral | Material de suporte solúvel em limoneno, compatível com ABS. Também utilizável sozinho. |
| Resistência /10 | 6 |
| Resistência química | <span class="ts-tag ts-tag--danger">RUIM</span> limoneno — solúvel (é a sua finalidade)<br/><span class="ts-tag ts-tag--ok">OK</span> bases, álcoois |
| Resistência ao calor | ~95–100 °C |
| Resistência ao impacto | Boa |
| Resistência a UV | Ruim (amarela, fica quebradiço) |
| Temp. do bico | 220–270 °C |
| Temp. da mesa | 90–95 °C |
| Secagem | 80 °C · 6 h |
| Densidade | 1,03 g/cm³ |
| Câmara fechada | Obrigatória |
| Recomendações | Ventoinha desligada · Dissolve em limoneno |
| Exemplos | Suportes para impressões em ABS, protótipos leves |

</div>

## Alto desempenho

### PEEK

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Alto desempenho</span>

| | |
|---|---|
| Material TigerTag | `PEEK` · id 29815 |
| Visão geral | O ápice dos termoplásticos imprimíveis: desempenho mecânico/térmico extremo. |
| Resistência /10 | 10 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> quase todos os solventes, ácidos diluídos, esterilização em autoclave<br/><span class="ts-tag ts-tag--danger">RUIM</span> ácido sulfúrico concentrado |
| Resistência ao calor | ~250–260 °C |
| Resistência ao impacto | Boa |
| Resistência a UV | Razoável |
| Temp. do bico | 390–410 °C |
| Temp. da mesa | 130–145 °C |
| Secagem | 120 °C · 6 h |
| Densidade | 1,32 g/cm³ |
| Câmara fechada | Obrigatória, aquecida a >100 °C |
| Recomendações | Secagem obrigatória |
| Exemplos | Implantes médicos, peças aeroespaciais |

</div>

### PEI (Ultem)

<div class="ts-fila-card">
<span class="ts-fila-badge ts-fila-badge--pro">Alto desempenho</span>

| | |
|---|---|
| Material TigerTag | `PEI-1010` · id 56527<br/>`PEI-9085` · id 14508 |
| Visão geral | Resina aeroespacial com classificação contra fogo, muito estável dimensionalmente. |
| Resistência /10 | 9 |
| Resistência química | <span class="ts-tag ts-tag--ok">OK</span> combustíveis, óleos, a maioria dos solventes<br/><span class="ts-tag ts-tag--danger">RUIM</span> solventes clorados, bases fortes |
| Resistência ao calor | ~170–200 °C |
| Resistência ao impacto | Boa |
| Resistência a UV | Razoável |
| Temp. do bico | PEI-1010 370–420 °C<br/>PEI-9085 350–390 °C |
| Temp. da mesa | PEI-1010 150–160 °C<br/>PEI-9085 120–160 °C |
| Secagem | PEI-1010 130 °C · 12 h<br/>PEI-9085 150 °C · 12 h |
| Densidade | PEI-1010 1,27 g/cm³<br/>PEI-9085 — |
| Câmara fechada | Obrigatória, aquecida |
| Recomendações | Mesa de vidro borossilicato · Muito higroscópico: secagem obrigatória |
| Exemplos | Interiores de aeronaves (classificação de fogo/fumaça), gabaritos industriais |

</div>

A resistência, as classificações de resistência e as recomendações são orientações gerais e variam conforme a marca e o lote. As temperaturas, a secagem e a densidade são os valores padrão do banco de dados de referência.

---

**▲ [Índice da documentação](../../README.md)**
