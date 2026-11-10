---
sourceHash: af4b7e262a3473ee00f78614c8bc21819b9ee5fb231767ee2ea890f58a06b2dd
sourcePath: docs/guides/twin-tag-pair.md
---

# Quando os dois chips de uma bobina são lidos como duas bobinas

Colocou um chip em cada face de uma bobina e o seu inventário mostra agora **duas** entradas em vez de uma. Cada chip funciona; cada um abre a sua própria bobina. O peso que corrige num nunca aparece no outro.

Nada está avariado. Os dois chips quase de certeza nunca foram um par.

## O teste que resolve a questão

Dois chips são um par porque transportam o **mesmo Twin Tag ID** — um valor escrito no momento da gravação, partilhado apenas por chips gravados na mesma sessão. Leia os dois chips e compare esse valor: é todo o diagnóstico. O Tiger Studio mostra-o; qualquer leitor que descodifique a carga útil também.

A regra completa, incluindo o que mais tem de coincidir e porque é que o carimbo de data e hora, por si só, não é prova, está em [o chip TigerTag](../concepts/tigertag-chip.md).

## Valores diferentes: nunca foram um par

É a causa habitual e tem uma só origem: **os dois chips foram gravados em duas passagens separadas**. Uma segunda passagem acontece um segundo depois ou um dia depois, pelo que carimba um Twin Tag ID diferente, e nada liga os dois chips a partir daí. Todas as ferramentas a jusante fazem bem em contar duas bobinas.

Não há reparação possível sem voltar a gravar. Um par faz-se na altura da gravação ou não se faz.

## Voltar a gravá-los como um só par

Apague os dois chips e grave-os juntos numa única sessão:

| | Como o par é gravado | Ideal para |
|---|---|---|
| **Telemóvel** — [Tiger NFC Connect](../products/tiger-nfc-connect.md) | *Dual NFC*: um formulário, depois o chip 1/2 e 2/2 na mesma sessão | uma bobina, sem hardware |
| **Computador, dois leitores** — [TigerPOD](../products/tigerpod.md) | os dois chips ao mesmo tempo, numa só passagem | uma prateleira, um lote |
| **Computador, um leitor** | não é possível numa só passagem — foi assim que o problema foi criado | — |

O procedimento no telemóvel, incluindo a regra de que o chip que leu primeiro é o que a aplicação espera como 1/2, está em [a sua primeira bobina inteligente](../tutorials/first-smart-spool.md).

O caso de um só leitor é a razão pela qual o [TigerPOD](../products/tigerpod.md) tem dois leitores frente a frente: uma passagem, um carimbo de data e hora, um par.

## O mesmo valor, mas ainda duas entradas

Mais raro, e merece ser comunicado. O Twin Tag ID é necessário mas não suficiente — os dois chips têm também de descrever a mesma bobina, campo a campo: marca, material, as três cores, ambos os aspetos. Compare esses a seguir.

Se todos os campos coincidirem e o seu inventário continuar a dividir a bobina em duas, isso é um erro e não uma gravação incorreta. Diga-o no [Discord](https://discord.gg/3Qv5TSqnJH) com a leitura de ambos os chips.

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [O chip TigerTag](../concepts/tigertag-chip.md), [A sua primeira bobina inteligente](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md)
