---
sourceHash: 21c590819f1537d9f13509bdfd8d3a6fff07ec1a0ae3d42396f7ac8b624b45d0
sourcePath: docs/tutorials/tigerscale-serial-port-driver.md
---

# Far comparire la porta COM per flashare la TigerScale V3

La TigerScale V3 usa un chip **ESP32-S3**. Per flashare il firmware, il computer deve vedere la scheda come **porta COM / porta seriale**.

Sulla maggior parte dei computer recenti questa porta compare **da sola** quando colleghi la scheda.
Se nel flasher non compare alcuna porta, manca un piccolo driver: segui la sezione per il tuo sistema qui sotto.

> **Prima di iniziare**
> - Usa un vero **cavo USB dati** (alcuni cavi servono solo a caricare e non trasportano dati).

## macOS — non c'è nulla da installare

Nessun driver necessario.
Collega la scheda, apri il flasher, e la scheda compare direttamente nell'elenco. Selezionala e avvia il flash.

Se non compare: cambia il cavo USB e riprova.

## Windows — installa il driver (se non compare alcuna porta COM)

Se il flasher non mostra alcuna porta, manca il driver USB di Espressif. Ecco come
installarlo, passo dopo passo:

1. **Scarica lo strumento** — clicca questo link, scarica `idf-env.exe` direttamente
 dal server di Espressif (per impostazione predefinita finisce nella cartella
 **Download**):
 **[https://dl.espressif.com/dl/idf-env/idf-env.exe](https://dl.espressif.com/dl/idf-env/idf-env.exe)**
2. **Apri PowerShell come amministratore** — clicca il menu **Start**, digita
 `powershell`, clic destro su **Windows PowerShell** e scegli **Esegui come
 amministratore**.
3. **Copia questa singola riga, incollala in PowerShell, poi premi Invio:**

 ```powershell
 cd $env:USERPROFILE\Downloads; .\idf-env.exe driver install --espressif
 ```

 > Hai salvato il file in una cartella diversa da Download? Sostituisci solo
 > `$env:USERPROFILE\Downloads` con quella cartella — per esempio
 > `C:\Users\tuonome\Desktop`. Il resto della riga resta uguale.

4. Aspetta che finisca (qualche secondo).
5. **Scollega e ricollega la scheda.**
6. Riapri il flasher: la porta (ad es. `USB JTAG/serial debug unit (COM3)`) dovrebbe ora comparire.

> Scaricare lo strumento da te, invece di incollare un comando su una sola riga che
> scarica ed esegue un eseguibile con diritti di amministratore, significa che puoi vedere
> cosa stai per eseguire e da dove viene. È un clic in più.

✓ Seleziona questa porta e avvia il flash.

## Linux — concedi l'accesso alla porta seriale

La porta di solito compare da sola (`/dev/ttyACM0`), ma il tuo utente ha bisogno del permesso per accedervi.

1. Apri un **terminale**.
2. Aggiungiti al gruppo che gestisce le porte seriali:

 ```bash
 sudo usermod -aG dialout $USER
 ```

3. **Esci e rientra** (o riavvia) perché abbia effetto.
4. Ricollega la scheda e riapri il flasher.

> Suggerimento: se usi il flasher **in un browser** (Web Serial), usa **Google Chrome** o **Microsoft Edge**; Firefox non supporta questa funzione.

## Ancora non funziona

- **Cambia il cavo USB** (problema n. 1: un cavo «solo ricarica»).
- Prova **un'altra porta USB** del computer (meglio una porta diretta, non un hub).
- Su Windows, apri **Gestione dispositivi**: se vedi un dispositivo con un punto esclamativo giallo, manca il driver → rifai la sezione Windows qui sopra.
- Per forzare la modalità flash: tieni premuto il pulsante **BOOT**, premi una volta **RESET**, poi rilascia **BOOT**, e riprova.

---

**◀ Precedente:** [TigerScale](../products/tigerscale.md) · **▲ [Indice della documentazione](../../README.md)**
