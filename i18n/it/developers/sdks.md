---
sourceHash: 19ce9f2af8d9561b6298fb076ca9ac4da141671c3caafc2201c393e1f19938a2
sourcePath: docs/developers/sdks.md
---

# SDK

Due SDK ufficiali gestiscono tutte le operazioni sui chip TigerTag — lettura del
payload NTAG da 144 byte, verifica del formato TigerTag e codifica dei nuovi dati del chip.

## JavaScript — `tigertag` (npm)

- Repo: [TigerTag-SDK-JS](https://github.com/TigerTag-Project/TigerTag-SDK-JS) (Apache-2.0)
- Pubblicato su npm come **`tigertag`**.
- Usato internamente da Tiger Studio; utilizzabile in modo indipendente per costruire strumenti
 personalizzati compatibili con TigerTag.

```bash
npm install tigertag
```

## Python

- Repo: [TigerTag-SDK-Python](https://github.com/TigerTag-Project/TigerTag-SDK-Python) (Apache-2.0)
- Pubblicato su PyPI come **`tigertag`** — per script, strumenti e automazione.

```bash
pip install tigertag       # core only — stdlib, works fully offline
pip install tigertag[sync]    # + requests (database auto-update)
pip install tigertag[verify]   # + cryptography (ECDSA signature check)
```

> **TODO:** esempi minimi di codice per parsing/codifica per entrambi gli SDK — importarli dal
> README di ciascun SDK una volta stabilizzati, oppure collegarli direttamente. Non riportare qui
> le firme delle API (rischio di divergenza); il README di ciascun SDK è la fonte canonica.

## Cosa ti offrono gli SDK

| Funzione | Descrizione |
|---|---|
| Parse | Decodifica il dump di un chip nell'identità del filamento (marca, materiale, colore…) |
| Verify | Controlla che il payload sia in un formato TigerTag valido |
| Encode | Costruisce un nuovo payload da 144 byte da scrivere su un chip |

I dati di riferimento (tabelle ID → nome) provengono dal database condiviso — vedi
[Identità universale del filamento](../concepts/universal-filament-identity.md).

---

**◀ Precedente:** [Mappa dei repository](./repositories.md) · **▲ [Indice della documentazione](../../README.md)** · **Successivo ▶** [API dell'account](./account-api.md)
