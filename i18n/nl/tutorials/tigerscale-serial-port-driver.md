---
sourceHash: 21c590819f1537d9f13509bdfd8d3a6fff07ec1a0ae3d42396f7ac8b624b45d0
sourcePath: docs/tutorials/tigerscale-serial-port-driver.md
---

# Zorgen dat de COM-poort verschijnt om de TigerScale V3 te flashen

De TigerScale V3 gebruikt een **ESP32-S3**-chip. Om de firmware te flashen moet je computer het bord zien als een **COM-poort / seriële poort**.

Op de meeste recente computers verschijnt deze poort **vanzelf** zodra je het bord aansluit.
Als er geen poort in de flasher verschijnt, ontbreekt er een kleine driver: volg hieronder de sectie voor jouw systeem.

> **Voordat je begint**
> - Gebruik een echte **USB-datakabel** (sommige kabels laden alleen en dragen geen data).

## macOS — niets te installeren

Geen driver nodig.
Sluit het bord aan, open de flasher, en het bord verschijnt direct in de lijst. Selecteer het en start het flashen.

Als het niet verschijnt: wissel de USB-kabel en probeer opnieuw.

## Windows — installeer de driver (als er geen COM-poort verschijnt)

Als de flasher geen poort toont, ontbreekt de USB-driver van Espressif. Zo
installeer je hem, stap voor stap:

1. **Download de tool** — klik op deze link, hij downloadt `idf-env.exe` rechtstreeks
 van de eigen server van Espressif (standaard komt hij in je **Downloads**-map):
 **[https://dl.espressif.com/dl/idf-env/idf-env.exe](https://dl.espressif.com/dl/idf-env/idf-env.exe)**
2. **Open PowerShell als beheerder** — klik op het menu **Start**, typ
 `powershell`, klik met de rechtermuisknop op **Windows PowerShell** en kies **Als
 administrator uitvoeren**.
3. **Kopieer deze ene regel, plak hem in PowerShell en druk op Enter:**

 ```powershell
 cd $env:USERPROFILE\Downloads; .\idf-env.exe driver install --espressif
 ```

 > Het bestand ergens anders opgeslagen dan in Downloads? Vervang alleen
 > `$env:USERPROFILE\Downloads` door die map — bijvoorbeeld
 > `C:\Users\jouwnaam\Desktop`. De rest van de regel blijft hetzelfde.

4. Wacht tot het klaar is (een paar seconden).
5. **Haal het bord los en steek het weer in.**
6. Open de flasher opnieuw: de poort (bijv. `USB JTAG/serial debug unit (COM3)`) zou nu moeten verschijnen.

> De tool zelf downloaden, in plaats van een opdracht van één regel te plakken die een uitvoerbaar bestand ophaalt en met beheerdersrechten uitvoert, betekent dat je kunt zien
> wat je gaat uitvoeren en waar het vandaan komt. Het is één klik extra.

✓ Selecteer deze poort en start het flashen.

## Linux — geef toegang tot de seriële poort

De poort verschijnt meestal vanzelf (`/dev/ttyACM0`), maar je gebruiker heeft toestemming nodig om hem te openen.

1. Open een **terminal**.
2. Voeg jezelf toe aan de groep die seriële poorten beheert:

 ```bash
 sudo usermod -aG dialout $USER
 ```

3. **Log uit en weer in** (of herstart) om het van kracht te laten worden.
4. Steek het bord weer in en open de flasher opnieuw.

> Tip: als je de flasher **in een browser** gebruikt (Web Serial), gebruik dan **Google Chrome** of **Microsoft Edge**; Firefox ondersteunt deze functie niet.

## Werkt het nog steeds niet

- **Wissel de USB-kabel** (probleem nr. 1: een kabel die “alleen laadt”).
- Probeer **een andere USB-poort** op de computer (liefst een directe poort, geen hub).
- Open op Windows **Apparaatbeheer**: als je een apparaat met een geel uitroepteken ziet, ontbreekt de driver → doe de sectie Windows hierboven opnieuw.
- Om de flashmodus te forceren: houd de knop **BOOT** ingedrukt, druk eenmaal op **RESET**, laat dan **BOOT** los en probeer opnieuw.

---

**◀ Vorige:** [TigerScale](../products/tigerscale.md) · **▲ [Documentatie-index](../../README.md)**
