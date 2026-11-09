---
sourceHash: 21c590819f1537d9f13509bdfd8d3a6fff07ec1a0ae3d42396f7ac8b624b45d0
sourcePath: docs/tutorials/tigerscale-serial-port-driver.md
---

# Jak sprawić, by port COM był widoczny podczas wgrywania firmware do TigerScale V3

TigerScale V3 używa układu **ESP32-S3**. Aby wgrać firmware, komputer musi widzieć płytkę jako **port COM / port szeregowy**.

Na większości nowszych komputerów ten port pojawia się **sam** po podłączeniu płytki.
Jeśli w narzędziu do wgrywania nie pojawia się żaden port, brakuje małego sterownika: skorzystaj z sekcji dla swojego systemu poniżej.

> **Zanim zaczniesz**
> - Użyj prawdziwego **kabla USB z transmisją danych** (niektóre kable tylko ładują i nie przesyłają danych).

## macOS — nic nie trzeba instalować

Sterownik nie jest potrzebny.
Podłącz płytkę, otwórz narzędzie do wgrywania, a płytka pojawi się od razu na liście. Wybierz ją i rozpocznij wgrywanie.

Jeśli się nie pojawia: wymień kabel USB i spróbuj ponownie.

## Windows — zainstaluj sterownik (jeśli nie pojawia się port COM)

Jeśli narzędzie do wgrywania nie pokazuje żadnego portu, brakuje sterownika USB Espressif. Oto jak
go zainstalować, krok po kroku:

1. **Pobierz narzędzie** — kliknij ten link, pobiera `idf-env.exe` prosto
 z serwera Espressif (domyślnie trafia do folderu **Pobrane**):
 **[https://dl.espressif.com/dl/idf-env/idf-env.exe](https://dl.espressif.com/dl/idf-env/idf-env.exe)**
2. **Otwórz PowerShell jako administrator** — kliknij menu **Start**, wpisz
 `powershell`, kliknij prawym przyciskiem **Windows PowerShell** i wybierz **Uruchom jako
 administrator**.
3. **Skopiuj tę jedną linię, wklej ją do PowerShell, a potem naciśnij Enter:**

 ```powershell
 cd $env:USERPROFILE\Downloads; .\idf-env.exe driver install --espressif
 ```

 > Plik zapisano w innym miejscu niż Pobrane? Zamień tylko
 > `$env:USERPROFILE\Downloads` na ten folder — na przykład
 > `C:\Users\yourname\Desktop`. Reszta linii pozostaje bez zmian.

4. Poczekaj na zakończenie (kilka sekund).
5. **Odłącz płytkę i podłącz ją ponownie.**
6. Otwórz ponownie narzędzie do wgrywania: port (np. `USB JTAG/serial debug unit (COM3)`) powinien się teraz pojawić.

> Pobranie narzędzia samodzielnie, zamiast wklejania jednowierszowego polecenia, które
> pobiera i uruchamia plik wykonywalny z uprawnieniami administratora, pozwala zobaczyć,
> co zamierzasz uruchomić i skąd to pochodzi. To jedno dodatkowe kliknięcie.

✓ Wybierz ten port i rozpocznij wgrywanie.

## Linux — nadaj dostęp do portu szeregowego

Port zwykle pojawia się sam (`/dev/ttyACM0`), ale twój użytkownik potrzebuje uprawnień, by z niego korzystać.

1. Otwórz **terminal**.
2. Dodaj się do grupy zarządzającej portami szeregowymi:

 ```bash
 sudo usermod -aG dialout $USER
 ```

3. **Wyloguj się i zaloguj ponownie** (lub uruchom ponownie komputer), aby zmiana zaczęła działać.
4. Podłącz płytkę ponownie i otwórz narzędzie do wgrywania.

> Wskazówka: jeśli używasz narzędzia do wgrywania **w przeglądarce** (Web Serial), użyj **Google Chrome** lub **Microsoft Edge**; Firefox nie obsługuje tej funkcji.

## Nadal nie działa

- **Wymień kabel USB** (problem nr 1: kabel „tylko do ładowania”).
- Spróbuj **innego portu USB** w komputerze (najlepiej bezpośredniego, nie przez hub).
- W Windows otwórz **Menedżer urządzeń**: jeśli widzisz urządzenie z żółtym wykrzyknikiem, brakuje sterownika → powtórz sekcję Windows powyżej.
- Aby wymusić tryb wgrywania: przytrzymaj przycisk **BOOT**, raz naciśnij **RESET**, potem puść **BOOT** i spróbuj ponownie.

---

**◀ Poprzednia:** [TigerScale](../products/tigerscale.md) · **▲ [Spis dokumentacji](../../README.md)**
