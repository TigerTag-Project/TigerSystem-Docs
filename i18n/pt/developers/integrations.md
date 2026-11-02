---
sourceHash: 6f9124180c40a232c7aab51fda782a891af83baafbcf03c27d697b0ccfcff594
sourcePath: docs/developers/integrations.md
---

# Construído sobre o TigerTag — integrações de terceiros

O objetivo de um protocolo aberto é justamente o que *os outros* constroem com ele. Isso
já está começando a acontecer — projetos que integraram o TigerTag por conta própria:

## OpenRFID

**[github.com/suchmememanyskill/OpenRFID](https://github.com/suchmememanyskill/OpenRFID)**
— o kit de ferramentas multifabricante de RFID de bobinas da comunidade. Ele lê os formatos de tag de
vários fabricantes — e **o TigerTag é um deles**: o payload aberto tornou a
adição simples.

## Snapmaker U1 Extended Firmware (Paxx)

**[github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)**
— um firmware comunitário independente, GPL-3.0, para a Snapmaker U1 (SSH,
streaming de câmera, métricas… e RFID de bônus). **Com ele, a Snapmaker U1
lê TigerTags nativamente — tornando-se a primeira impressora a ler TigerTag na
própria máquina.** Exatamente o futuro que a jogada coletiva tem em vista, chegando
antes do previsto pela comunidade.

## Spooly Tracker

**[spoolytracker.com](https://spoolytracker.com/)** — uma plataforma de inventário
de filamento (web, iOS/Android, Home Assistant, pós-processamento no OrcaSlicer,
com opção de hospedagem própria). A identificação das bobinas é construída sobre o TigerTag: “Marque suas
bobinas com chips NFC (TigerTags) e gerencie seu inventário com um simples
gesto.” (original em inglês, para citação: *"Mark your
spools with NFC chips (TigerTags) and manage your inventory with a simple
gesture."*) Um produto de terceiros, com visão própria — rodando sobre o protocolo
aberto, exatamente como previsto.

## Stellio

**[github.com/stellio-app/stellio](https://github.com/stellio-app/stellio)**
· [stellio-app.com](https://stellio-app.com) — um aplicativo de desktop AGPL-3.0
(Python, Windows) que gerencia uma biblioteca local de arquivos de impressão 3D: pré-visualizações,
busca semântica, envio ao slicer, fila de impressão. O lado de filamento lê o
**inventário TigerTag**: entre com a sua conta, ou deixe que ele aproveite uma sessão existente do Tiger Studio,
e suas bobinas TigerTag aparecem no estoque dele — **somente leitura**, ele nunca
grava no seu inventário. A partir daí, ele filtra a biblioteca para o que suas
bobinas realmente conseguem imprimir e avisa antes que uma impressão fique sem filamento.

---

Está construindo algo sobre o TigerTag? Conte para nós no
[Discord](https://discord.gg/3Qv5TSqnJH) ou pela
[organização no GitHub](https://github.com/TigerTag-Project) — e lembre-se de que o
[TigerTag Certified](../../TRADEMARK.md) existe para integrações verificadas.

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [Visão geral para desenvolvedores](./README.md), [O que você pode construir?](./README.md), [Compatibilidade](../compatibility/README.md)
