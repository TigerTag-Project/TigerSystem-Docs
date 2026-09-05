---
sourceHash: 6a70119833796c9aad3bd09cf54863a7572f174fd87f0f0f4d3a948ea25fe24a
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Liaison avec l'imprimante — pas encore, mais les fondations existent

Les imprimantes Klipper génériques (via l'API **Moonraker**) **ne font pas
l'objet d'une intégration officielle à ce jour**. En revanche, la liaison
Snapmaker de Tiger Studio parle déjà le WebSocket/JSON-RPC de Moonraker — la
base naturelle d'une intégration Klipper neutre vis-à-vis des constructeurs.

| Aspect | Statut |
|---|---|
| Transport Moonraker | Existe (utilisé par l'intégration Snapmaker) |
| Prise en charge générique de Klipper | Prévue / à cadrer |
| Correspondance des emplacements de filament | Dépend de la configuration MMU de la machine — à cadrer |

> **TODO :** définir la cible : quelle surface de Moonraker est assez générique
> (objets d'imprimante, file de travaux, webcams) et comment les emplacements
> MMU/filament se correspondent dans l'écosystème Klipper (ERCF, MMU2, Box Turtle…).

## Utiliser TigerTag avec Klipper aujourd'hui

Tout fonctionne déjà, sauf la liaison en direct avec l'imprimante : les puces
TigerTag, l'inventaire, le suivi du poids, les racks et le partage sont
indépendants de l'imprimante.

---

**◀ Précédent :** [Snapmaker](./snapmaker.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [OpenSpool](./openspool.md)
