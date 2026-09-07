---
sourceHash: b40fb5aceef507830a7f0ac0eee5ec4488b97a0647d8b213e8104c8fb0f315e3
sourcePath: docs/guides/twin-tag-pair.md
---

# Encoder les deux puces d'une bobine en paire

Une bobine d'usine porte deux puces, une sur chaque face, écrites ensemble pour
qu'un lecteur en trouve toujours une, quel que soit le sens dans lequel la
bobine est chargée ([pourquoi deux puces](../concepts/tigertag-chip.md)). Quand
vous taguez une bobine vous-même, vous pouvez faire de même. Ce guide porte sur
la **paire** : deux puces que tout l'écosystème compte comme **une seule**
bobine.

## Ce qu'est une paire

Deux puces, deux UID, une identité. Écrites ensemble, elles forment un
[Twin Tag](../glossary.md) : chaque application lit l'une ou l'autre et retombe
sur la même bobine, et le poids, les réglages d'impression et l'entrée
d'inventaire restent un seul enregistrement pour toute la vie de la bobine.
Une bobine à une seule puce fonctionne aussi — deux, c'est ce que le
[tutoriel de la première bobine intelligente](../tutorials/first-smart-spool.md)
appelle l'expérience complète.

## Choisir son outil

| | Écrit la paire | La vérifie contre elle-même | Idéal pour |
|---|---|---|---|
| **Téléphone** — [Tiger NFC Connect](../products/tigertag-connect.md), *Dual NFC* | en une session, puce 1/2 puis 2/2 | — | une bobine, sans matériel |
| **Bureau avec un [TigerPOD](../products/tigerpod.md)** — deux lecteurs face à face | en une fois, les deux puces d'un coup | oui — [Tiger Studio](../products/tiger-studio.md) vérifie les deux l'une contre l'autre | taguer une étagère, un lot |
| **Bureau avec un seul lecteur** | en deux passes | non | ça marche — lisez la note ci-dessous |

## Sur le téléphone : Dual NFC

Tiger NFC Connect écrit les deux puces en une seule session : remplissez le
formulaire une fois, appuyez sur **Dual NFC** avant d'écrire, et l'application
demande les puces l'une après l'autre. Le
[tutoriel de la première bobine intelligente](../tutorials/first-smart-spool.md)
le déroule pas à pas, y compris la seule règle qui compte — **la puce que vous
avez scannée en premier est celle que l'application attend en 1/2**.

## Sur le bureau : deux lecteurs, une passe

Posez la bobine — une puce vierge sur chaque face — dans un TigerPOD, de sorte
qu'une puce fasse face à chaque lecteur. Tiger Studio écrit les deux faces en
une fois et les vérifie l'une contre l'autre. C'est à ça que sert la géométrie
à deux lecteurs ; la [page TigerPOD](../products/tigerpod.md) explique le
compromis avec un seul lecteur.

> **Note :** avec **un** seul lecteur, vous écrivez les puces en deux passes
> séparées, et il n'y a pas de seconde puce contre laquelle Tiger Studio puisse
> vérifier la paire — *deux occasions de les désapparier*, pour reprendre les
> mots de la page TigerPOD. Ça marche ; c'est simplement le chemin où une paire
> finit le plus facilement en deux bobines.

## Vérifier la paire

Les deux puces doivent ouvrir la **même** bobine : scannez une face, puis
l'autre, et confirmez que l'application retombe sur une seule entrée, pas deux.
Dans un export `.ttag`, la paire apparaît comme deux enregistrements qui se
référencent mutuellement par `twin_tag_uid` — un jumeau s'exporte et s'importe
en entier, jamais une seule face
([le format .ttag](../developers/ttag-format.md)).

## Quand une puce ne répond plus

La puce survivante identifie toujours la bobine, et sert à réparer l'autre
([la puce TigerTag](../concepts/tigertag-chip.md)).

> **TODO :** les étapes exactes, dans Tiger Studio, pour apparier une puce de
> remplacement à une puce survivante ne sont pas encore documentées.

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [La puce TigerTag](../concepts/tigertag-chip.md), [Votre première bobine intelligente](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md), [Le format .ttag](../developers/ttag-format.md)
