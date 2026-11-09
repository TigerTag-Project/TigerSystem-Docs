---
sourceHash: 6a70119833796c9aad3bd09cf54863a7572f174fd87f0f0f4d3a948ea25fe24a
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Połączenie z drukarką — jeszcze nie, ale fundamenty istnieją

Ogólne drukarki Klipper (przez API **Moonraker**) **nie są dziś oficjalną
integracją**. Jednak połączenie Tiger Studio ze Snapmakerem już komunikuje się
przez Moonraker WebSocket/JSON-RPC — to naturalna podstawa neutralnej wobec
producentów integracji z Klipperem.

| Aspekt | Stan |
|---|---|
| Transport Moonraker | Istnieje (używany przez integrację ze Snapmakerem) |
| Ogólna obsługa Klippera | Planowana / do doprecyzowania |
| Mapowanie slotów filamentu | Zależy od konfiguracji MMU maszyny — do doprecyzowania |

> **TODO:** określić cel: która część interfejsu Moonraker jest wystarczająco
> ogólna (obiekty drukarki, kolejka zadań, kamery) i jak sloty MMU/filamentu
> odwzorować w ekosystemie Klippera (ERCF, MMU2, Box Turtle…).

## Używanie TigerTag z Klipperem już dziś

Wszystko poza bezpośrednim połączeniem z drukarką już działa: chipy TigerTag,
magazyn, śledzenie wagi, regały i udostępnianie nie zależą od drukarki.

---

**◀ Poprzednia:** [Snapmaker](./snapmaker.md) · **▲ [Spis dokumentacji](../../README.md)** · **Następna ▶** [OpenSpool](./openspool.md)
