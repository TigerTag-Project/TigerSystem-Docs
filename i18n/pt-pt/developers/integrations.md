---
sourceHash: f283703d11787d5928096fe85013ad132ac596d2e2898ee65ac2adbfbb60d0ef
sourcePath: docs/developers/integrations.md
---

# Construído sobre o TigerTag — integrações de terceiros

O objetivo de um protocolo aberto é aquilo que *outros* constroem com ele. Já está a acontecer — projetos que integraram o TigerTag por iniciativa própria:

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)** — o conjunto de ferramentas comunitário de RFID de bobinas para vários fabricantes. Lê os formatos de etiqueta de muitos fabricantes — e **o TigerTag é um deles**: o payload aberto tornou a adição simples.

## Snapmaker U1 Extended Firmware (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)** — um firmware comunitário independente, GPL-3.0, para a Snapmaker U1 (SSH, streaming da câmara, métricas… e RFID). **Com ele, a Snapmaker U1 lê TigerTags nativamente — tornando-se a primeira impressora a ler TigerTag na própria máquina.** Exatamente o futuro a que visa a jogada coletiva, chegado mais cedo graças à comunidade.

## COSMOS — firmware para a Elegoo Centauri Carbon (OpenCentauri)

**[github.com/OpenCentauri/cosmos](https://github.com/OpenCentauri/cosmos)** — um firmware comunitário independente, GPL-3.0, para a Elegoo Centauri Carbon (Linux mainline construído com Yocto, Klipper / Kalico). O seu módulo RFID do Canvas controla o **leitor NFC integrado no Canvas**, a unidade multicor da impressora, e descodifica os chips com o OpenRFID: **a Centauri Carbon lê TigerTags com o seu próprio leitor**, sem hardware adicional.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** — uma plataforma de inventário de filamentos (web, iOS/Android, Home Assistant, pós-processamento do OrcaSlicer, auto-hospedável). A sua identificação de bobinas assenta no TigerTag: *«Marque as suas bobinas com chips NFC (TigerTags) e gira o seu inventário com um simples gesto.»* (original: *"Mark your spools with NFC chips (TigerTags) and manage your inventory with a simple gesture."*) Um produto de terceiros, com uma visão própria — a funcionar sobre o protocolo aberto, exatamente como pretendido.

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)** · [stellio-app.com](https://stellio-app.com) — uma aplicação de secretária AGPL-3.0 (Python, Windows) que gere uma biblioteca local de ficheiros de impressão 3D: pré-visualizações, pesquisa semântica, passagem ao slicer, fila de impressão. A sua vertente de filamento lê o **inventário TigerTag**: inicie sessão, ou deixe-a aproveitar uma sessão existente do Tiger Studio, e as suas bobinas TigerTag aparecem no seu stock — **só de leitura**, nunca escreve no seu inventário. A partir daí, filtra a biblioteca para o que as suas bobinas conseguem realmente imprimir e avisa antes de uma impressão ficar sem material.

---

Está a construir algo sobre o TigerTag? Conte-nos no [Discord](https://discord.gg/3Qv5TSqnJH) ou através da [organização no GitHub](https://github.com/TigerTag-Project) — e lembre-se de que o [TigerTag Certified](../../TRADEMARK.md) existe para integrações verificadas.

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [Visão geral para programadores](./README.md), [O que pode construir?](./README.md), [Compatibilidade](../compatibility/README.md)
