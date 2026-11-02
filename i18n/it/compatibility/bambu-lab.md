---
sourceHash: 7df403d9ec01cc589f8d8c155cd8d0cb8154cd2993e09860c8c2a54ec787ef9c
sourcePath: docs/compatibility/bambu-lab.md
---

# Bambu Lab

## Collegamento alla stampante — **Live**

Tiger Studio si collega a una stampante Bambu Lab in due modi:

| Aspetto | Dettaglio |
|---|---|
| LAN | MQTTS (TLS) diretto alla stampante, porta 8883. Richiede di attivare una volta sulla stampante la **modalità LAN Only** e la **modalità sviluppatore** — [passo passo per modello](#passare-alla-modalità-lan). |
| Cloud | Accedi una sola volta con il tuo account Bambu Lab (e-mail + codice monouso): ogni stampante dell'account viene trovata automaticamente, codice di accesso LAN compreso. Per questa parte non serve alcun interruttore sulla stampante. |
| Filamento | Supporto AMS — fino a 16 slot, modifica del filamento per slot |
| Rilevamento | LAN: SSDP + sonda TLS, più aggiunta tramite IP. Cloud: automatico, dall'account. |
| Telecamera | Flusso JPEG (TCP 6000) / RTSP — lo stesso video in entrambi i casi, richiede **LAN Mode Liveview** attivo sulla stampante |
| Telemetria | Temperature, avanzamento del lavoro, anteprima di stampa |

> **Le connessioni cloud sono oggi in sola lettura**, con una sola eccezione. Ottieni telemetria in tempo reale —
> temperature, avanzamento, telecamera — e la **luce** della stampante, che si accende e spegne anche via cloud.
> Tutto il resto che agisce sulla macchina (pausa, ripresa, arresto) richiede il percorso LAN.

## RFID nativo — specifica documentata, lettura nell'app pianificata

I tag delle bobine Bambu sono **Mifare Classic 1K** con **chiavi derivate dall'UID
tramite HKDF-SHA256**: sono bloccati crittograficamente per servire l'ecosistema del produttore. Una
specifica di decodifica in sola lettura è mantenuta in
[`docs/rfid-vendors/bambu.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/docs/rfid-vendors/bambu.md).

## Il flusso di lavoro

1. **Aggiungi la stampante** — **in LAN** (rilevamento SSDP, o aggiunta tramite IP,
 abbinata al codice di accesso LAN della stampante) oppure **dal cloud** (accedi
 con il tuo account Bambu Lab: ogni stampante dell'account viene trovata automaticamente).
 Il percorso LAN richiede prima di attivare una volta sulla stampante la modalità LAN Only e la modalità sviluppatore —
 [passo passo per modello](#passare-alla-modalità-lan).
2. **Scansiona una bobina** — telefono o lettore desktop; la bobina finisce nel tuo
 inventario.
3. **Assegnala a uno slot AMS** — Tiger Studio invia il profilo del filamento
 (materiale, colore) allo slot tramite MQTTS; le informazioni lato macchina ora
 corrispondono alla realtà, su fino a 16 slot AMS.
4. **Live** — temperature, avanzamento del lavoro, anteprima di stampa, ora di fine
 **«Termina alle»** dell'orologio, e il flusso della telecamera, direttamente nella vista delle stampanti.

## Passare alla modalità LAN

Il percorso LAN richiede **LAN Only mode** e **Developer Mode** attivati sulla stampante stessa: una
configurazione una tantum, sullo schermo. Scegli il tuo modello qui sotto per i passaggi esatti.

<div class="ts-model-picker">
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1-mini.png" alt="A1 mini" /><span>A1 mini</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a1.png" alt="A1" /><span>A1</span></a>
<a href="../tutorials/bambu-lab-a1-series.md"><img src="../assets/bambu-lab-lan-mode/models/a2l.png" alt="A2L" /><span>A2L</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1p.png" alt="P1P" /><span>P1P</span></a>
<a href="../tutorials/bambu-lab-p1-series.md"><img src="../assets/bambu-lab-lan-mode/models/p1s.png" alt="P1S" /><span>P1S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/p2s.png" alt="P2S" /><span>P2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1c.png" alt="X1 Carbon" /><span>X1 Carbon</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x1e.png" alt="X1E" /><span>X1E</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/x2d.png" alt="X2D" /><span>X2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2s.png" alt="H2S" /><span>H2S</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2d.png" alt="H2D" /><span>H2D</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2dpro.png" alt="H2D Pro" /><span>H2D Pro</span></a>
<a href="../tutorials/bambu-lab-x1-h2-p2-series.md"><img src="../assets/bambu-lab-lan-mode/models/h2c.png" alt="H2C" /><span>H2C</span></a>
</div>

## Limitazioni

- I tag Bambu nativi non sono ancora letti nell'app: la specifica è documentata e il lavoro attuale punta a convertire i dati dei tag dei produttori in bobine TigerData (vedi [Compatibilità](./README.md)).
- Il flusso della telecamera richiede LAN Mode Liveview attivo sulla stampante, qualunque sia il percorso di connessione usato.

---

**◀ Precedente:** [Compatibilità](./README.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [Creality](./creality.md)
