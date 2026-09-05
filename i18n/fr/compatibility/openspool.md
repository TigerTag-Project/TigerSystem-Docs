---
sourceHash: fbd7f751b4b6ce5231046f759b3b7923533ab0f0ae0d8f701d1b8096d3f46fa5
sourcePath: docs/compatibility/openspool.md
---

# OpenSpool

## De quoi il s'agit

**OpenSpool** est un standard de tag ouvert issu de la communauté : les données
du filament sous forme de **JSON NDEF** sur des tags NFC de type 2 — sans
authentification, sans cryptographie, entièrement ouvert. Par l'esprit, c'est
un proche cousin de TigerTag.

## TigerTag face à OpenSpool

| Aspect | TigerTag | OpenSpool |
|---|---|---|
| Support | NTAG, charge utile NDEF de 144 octets | NFC de type 2, JSON NDEF |
| Modèle de données | Identifiants compacts résolus dans une base de référence partagée | JSON autodescriptif |
| Cloud | Compte, inventaire et partage optionnels ([compte TigerSystem](../concepts/inventory-and-cloud-sync.md)) | Aucun (standard limité au tag) |
| Certification | Sauvegarde/signature [TigerTag+](../products/tigertag-plus.md) optionnelle | Aucune |
| Ouverture | Spécification ouverte + SDK | Spécification ouverte |

## Migrer une puce de TigerTag vers OpenSpool

Les puces TigerTag ne sont **jamais verrouillées en écriture** — TigerTag n'est
que le protocole de base avec lequel les bobines sont livrées. Si vous
préférez OpenSpool (ou tout autre format personnalisé), vous êtes libre de
réécrire les données d'une puce d'usine dans ce format.

## Interopérabilité — spécification documentée, conversion TigerData en cours

Une fiche de décodage en lecture seule pour les tags OpenSpool est maintenue
dans
[`docs/rfid-vendors/openspool.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/openspool.md),
dans le cadre de la lecture RFID multi-fournisseurs prévue dans Tiger Studio.

> **TODO :** décider et documenter la correspondance d'import (champs JSON
> OpenSpool → identifiants de référence TigerTag) lorsque la prise en charge
> de la lecture sera livrée.

---

**◀ Précédent :** [Klipper](./klipper.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Développeurs](../developers/README.md)
