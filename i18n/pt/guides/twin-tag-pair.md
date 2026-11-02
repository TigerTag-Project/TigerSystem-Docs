---
sourceHash: bc1109bce033235ce112674dbf1775284562458c70d4ec2f6514e1bf5a144bd5
sourcePath: docs/guides/twin-tag-pair.md
---

# Quando os dois chips de uma bobina são lidos como duas bobinas

Você colocou um chip em cada face de uma bobina, e agora o seu inventário mostra
**duas** entradas em vez de uma. Cada chip funciona; cada um abre a sua própria bobina. O
peso que você corrige em uma nunca aparece na outra.

Nada está quebrado. Quase certamente, os dois chips nunca foram um par.

## O teste que resolve

Dois chips formam um par porque carregam o **mesmo Twin Tag ID** — um valor
gravado no momento da escrita, compartilhado apenas por chips gravados na mesma
sessão. Leia os dois chips e compare esse valor: ele é todo o diagnóstico.
O Tiger Studio o mostra; qualquer leitor que decodifique o payload também.

A regra completa, incluindo o que mais precisa coincidir e por que o carimbo de data e hora sozinho não
é prova, está em
[o chip TigerTag](../concepts/tigertag-chip.md).

## Valores diferentes: nunca foram um par

Esta é a causa comum, e tem uma única origem: **os dois chips foram
gravados em duas passadas separadas**. Uma segunda passada acontece um segundo depois ou um dia
depois, então grava um Twin Tag ID diferente, e nada liga os dois chips
a partir daí. Todas as ferramentas seguintes estão certas em contar duas bobinas.

Não há reparo, a não ser regravar. Um par é feito no momento da gravação ou não é feito.

## Regravando como um único par

Apague os dois chips e grave-os juntos em uma única sessão:

| | Como o par é gravado | Ideal para |
|---|---|---|
| **Celular** — [Tiger NFC Connect](../products/tigertag-connect.md) | *Dual NFC*: um formulário, depois o chip 1/2 e 2/2 na mesma sessão | uma bobina, sem hardware |
| **Desktop, dois leitores** — [TigerPOD](../products/tigerpod.md) | os dois chips de uma vez, em uma passada | uma prateleira, um lote |
| **Desktop, um leitor** | impossível em uma passada — foi assim que o problema surgiu | — |

O procedimento no celular, incluindo a regra de que o chip que você escaneou primeiro é
o que o aplicativo espera como 1/2, está em
[sua primeira bobina inteligente](../tutorials/first-smart-spool.md).

O caso do leitor único é o motivo de o [TigerPOD](../products/tigerpod.md)
ter dois leitores frente a frente: uma passada, um carimbo de data e hora, um par.

## Mesmo valor, mas ainda duas entradas

Mais raro, e vale reportar. O Twin Tag ID é necessário, mas não suficiente —
os dois chips também precisam descrever a mesma bobina, campo a campo: marca,
material, as três cores, os dois aspectos. Compare isso em seguida.

Se todos os campos coincidem e o seu inventário ainda divide a bobina em duas, isso
é um bug, e não uma gravação errada. Conte no
[Discord](https://discord.gg/3Qv5TSqnJH) com a leitura dos dois chips.

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [O chip TigerTag](../concepts/tigertag-chip.md), [Sua primeira bobina inteligente](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md)
