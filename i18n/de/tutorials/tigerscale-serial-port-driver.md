---
sourceHash: 21c590819f1537d9f13509bdfd8d3a6fff07ec1a0ae3d42396f7ac8b624b45d0
sourcePath: docs/tutorials/tigerscale-serial-port-driver.md
---

# Den COM-Port zum Flashen der TigerScale V3 sichtbar machen

Die TigerScale V3 verwendet einen **ESP32-S3**-Chip. Zum Flashen der Firmware muss dein Computer das Board als **COM-Port / serielle Schnittstelle** sehen.

Auf den meisten aktuellen Computern erscheint dieser Port **von selbst**, sobald du das Board anschließt.
Wenn im Flasher kein Port auftaucht, fehlt ein kleiner Treiber: Folge unten dem Abschnitt für dein System.

> **Bevor du anfängst**
> - Verwende ein echtes **USB-Datenkabel** (manche Kabel laden nur und übertragen keine Daten).

## macOS – nichts zu installieren

Kein Treiber nötig.
Schließ das Board an, öffne den Flasher, und das Board erscheint direkt in der Liste. Wähl es aus und starte das Flashen.

Wenn es nicht erscheint: Tausche das USB-Kabel aus und versuch es erneut.

## Windows – Treiber installieren (wenn kein COM-Port erscheint)

Wenn der Flasher keinen Port anzeigt, fehlt der Espressif-USB-Treiber. So
installierst du ihn, Schritt für Schritt:

1. **Lade das Tool herunter** – klick auf diesen Link, er lädt `idf-env.exe` direkt
 vom Server von Espressif herunter (standardmäßig landet die Datei in deinem **Downloads**-
 Ordner):
 **[https://dl.espressif.com/dl/idf-env/idf-env.exe](https://dl.espressif.com/dl/idf-env/idf-env.exe)**
2. **Öffne PowerShell als Administrator** – klick auf das **Start**-Menü, tippe
 `powershell`, klick mit der rechten Maustaste auf **Windows PowerShell** und wähl **Als
 Administrator ausführen**.
3. **Kopiere diese einzelne Zeile, füge sie in PowerShell ein und drück Enter:**

 ```powershell
 cd $env:USERPROFILE\Downloads; .\idf-env.exe driver install --espressif
 ```

 > Hast du die Datei woanders als in Downloads gespeichert? Ersetze nur
 > `$env:USERPROFILE\Downloads` durch diesen Ordner – zum Beispiel
 > `C:\Users\yourname\Desktop`. Der Rest der Zeile bleibt gleich.

4. Warte, bis der Vorgang abgeschlossen ist (ein paar Sekunden).
5. **Zieh das Board ab und steck es wieder an.**
6. Öffne den Flasher erneut: Der Port (z. B. `USB JTAG/serial debug unit (COM3)`) sollte jetzt erscheinen.

> Wenn du das Tool selbst herunterlädst, statt eine einzeilige Anweisung einzufügen, die
> eine ausführbare Datei lädt und mit Administratorrechten startet, siehst du,
> was du gleich ausführst und woher es stammt. Es ist ein Klick mehr.

✓ Wähl diesen Port aus und starte das Flashen.

## Linux – Zugriff auf den seriellen Port gewähren

Der Port erscheint normalerweise von selbst (`/dev/ttyACM0`), aber dein Benutzer braucht die Berechtigung, darauf zuzugreifen.

1. Öffne ein **Terminal**.
2. Füge dich der Gruppe hinzu, die serielle Ports verwaltet:

 ```bash
 sudo usermod -aG dialout $USER
 ```

3. **Melde dich ab und wieder an** (oder starte neu), damit es wirksam wird.
4. Steck das Board wieder an und öffne den Flasher erneut.

> Tipp: Wenn du den Flasher **im Browser** nutzt (Web Serial), verwende **Google Chrome** oder **Microsoft Edge**; Firefox unterstützt diese Funktion nicht.

## Es klappt immer noch nicht

- **Tausche das USB-Kabel aus** (Problem Nr. 1: ein Kabel, das „nur lädt“).
- Probier einen **anderen USB-Port** am Computer (am besten einen direkten Port, keinen Hub).
- Öffne unter Windows den **Geräte-Manager**: Siehst du ein Gerät mit gelbem Ausrufezeichen, fehlt der Treiber → wiederhole den Windows-Abschnitt oben.
- Um den Flash-Modus zu erzwingen: Halte die Taste **BOOT** gedrückt, drück einmal **RESET**, lass dann **BOOT** los und versuch es erneut.

---

**◀ Zurück:** [TigerScale](../products/tigerscale.md) · **▲ [Dokumentationsindex](../../README.md)**
