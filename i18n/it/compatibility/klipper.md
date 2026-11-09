---
sourceHash: dca3254cea9d6296d6f313f60c5ca02779bb716dda7dd4a0a7f1b717b4c12590
sourcePath: docs/compatibility/klipper.md
---

# Klipper / Moonraker

## Collegamento alla stampante — **Live (beta)**, da Tiger Studio 2.41

Tiger Studio si collega a **qualsiasi stampante che esegue Klipper con Moonraker**:
Voron, RatRig, Vzbot, Sovol, Qidi, Elegoo Neptune 4, Creality K1 / K2 /
Ender-3 V3, FLSun, Artillery X4, Kingroon e tutte le altre — 161 macchine sono
nella procedura di aggiunta con la loro immagine. L'integrazione è una **beta**.

| Aspetto | Dettaglio |
|---|---|
| Protocollo | API HTTP di Moonraker, interrogata ogni 2 s; porta 7125 per impostazione predefinita, se ne può impostare un'altra |
| Rilevamento | Scansione della LAN, oppure aggiunta a mano con il suo indirizzo e una chiave API Moonraker facoltativa |
| Slot del filamento | Gate di **Happy Hare** e lane di **AFC**, letti e modificati tramite i comandi della macchina stessa (`MMU_GATE_MAP`, `SET_MATERIAL` / `SET_COLOR`); un estrusore semplice viene mostrato ma non conserva dati sul filamento |
| Lavoro | Lavoro in corso con miniatura e layer; pausa, ripresa, annullamento |
| Controllo | Movimento degli assi, homing, ventola del pezzo, velocità, luci; temperature impostate con un clic |
| Telemetria | Estrusori, piano di stampa, camera e ogni `temperature_sensor` / `temperature_fan` / `heater_generic` |
| Videocamera | Stream MJPEG o istantanee |

Le macchine i cui produttori installano un firmware chiuso sopra Klipper
mantengono il proprio collegamento: [Snapmaker](./snapmaker.md), [FlashForge](./flashforge.md) e
[Anycubic](./anycubic.md) si raggiungono tramite i propri connettori, non questo.
Una macchina raggiungibile in entrambi i modi — una Creality K1, per esempio —
offre la scelta al momento dell'aggiunta.

## RFID nativo — n/d

Klipper è un firmware per stampanti, non un formato di tag per bobine. L'identità
della bobina viene dal suo TigerTag, letto con un telefono o un lettore desktop.

## Il flusso di lavoro

1. **Aggiungi la stampante** — trovata dalla scansione della LAN, o aggiunta a mano.
2. **Scansiona una bobina** — con il telefono (o un lettore desktop); finisce nel
 tuo inventario.
3. **Assegnala a un gate o a una lane** — Tiger Studio la scrive con il comando
 Happy Hare o AFC della macchina stessa, quindi non c'è nulla da installare
 sulla stampante.
4. **Live** — lavoro, temperature e videocamera nella vista delle stampanti.

Anche un [TigerSpool](../products/tigerspool.md) può assegnare uno slot Klipper,
ma quel percorso è **sperimentale**: scritto sul driver di Tiger Studio e su un
mock di Moonraker, non ancora provato su una stampante.

---

**◀ Precedente:** [Snapmaker](./snapmaker.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [OpenSpool](./openspool.md)
