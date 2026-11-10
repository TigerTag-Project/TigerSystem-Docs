---
sourceHash: af4b7e262a3473ee00f78614c8bc21819b9ee5fb231767ee2ea890f58a06b2dd
sourcePath: docs/guides/twin-tag-pair.md
---

# Gdy dwa chipy szpuli odczytują się jako dwie szpule

Oznaczyłeś szpulę chipem na każdej ściance, a twój magazyn pokazuje teraz
**dwa** wpisy zamiast jednego. Każdy chip działa; każdy otwiera własną szpulę.
Waga poprawiona na jednym nigdy nie pojawia się na drugim.

Nic się nie zepsuło. Te dwa chipy prawie na pewno nigdy nie tworzyły pary.

## Test, który to rozstrzyga

Dwa chipy tworzą parę, bo niosą **ten sam Twin Tag ID** — wartość zapisaną
w chwili zapisu, wspólną tylko dla chipów zapisanych w tej samej
sesji. Odczytaj oba chipy i porównaj tę wartość: to cała diagnoza.
Pokazuje ją Tiger Studio; pokazuje ją też każdy czytnik, który dekoduje dane.

Pełna reguła, łącznie z tym, co jeszcze musi się zgadzać i dlaczego sam znacznik
czasu nie jest dowodem, znajduje się na stronie
[chip TigerTag](../concepts/tigertag-chip.md).

## Różne wartości: nigdy nie były parą

To zwykła przyczyna i ma jedno źródło: **te dwa chipy zostały
zapisane w dwóch osobnych przebiegach**. Drugi przebieg następuje sekundę
albo dzień później, więc zapisuje inny Twin Tag ID i od tej chwili nic
nie wiąże tych dwóch chipów. Każde narzędzie dalej w łańcuchu słusznie liczy dwie szpule.

Nie ma naprawy poza ponownym zapisem. Parę tworzy się w momencie zapisu albo wcale.

## Zapisanie ich ponownie jako jednej pary

Wymaż oba chipy, a potem zapisz je razem w jednej sesji:

| | Jak zapisuje się parę | Najlepsze do |
|---|---|---|
| **Telefon** — [Tiger NFC Connect](../products/tiger-nfc-connect.md) | *Dual NFC*: jeden formularz, potem chip 1/2 i 2/2 w tej samej sesji | jednej szpuli, bez sprzętu |
| **Desktop, dwa czytniki** — [TigerPOD](../products/tigerpod.md) | oba chipy naraz, w jednym przebiegu | półki, partii |
| **Desktop, jeden czytnik** | niemożliwe w jednym przebiegu — tak powstał ten problem | — |

Procedura na telefonie, łącznie z regułą, że chip zeskanowany jako pierwszy to ten,
którego aplikacja oczekuje jako 1/2, jest opisana w
[twojej pierwszej inteligentnej szpuli](../tutorials/first-smart-spool.md).

Przypadek z jednym czytnikiem jest powodem, dla którego [TigerPOD](../products/tigerpod.md)
ma dwa czytniki zwrócone do siebie: jeden przebieg, jeden znacznik czasu, jedna para.

## Ta sama wartość, a nadal dwa wpisy

Rzadsze i warte zgłoszenia. Twin Tag ID jest warunkiem koniecznym, ale niewystarczającym —
oba chipy muszą też opisywać tę samą szpulę, pole po polu: marka,
materiał, trzy kolory, oba aspekty. Porównaj je w następnej kolejności.

Jeśli każde pole się zgadza, a twój magazyn nadal dzieli szpulę na dwie, to
błąd, a nie błędny zapis. Napisz o tym na
[Discordzie](https://discord.gg/3Qv5TSqnJH), dołączając odczyty obu chipów.

---

**▲ [Spis dokumentacji](../../README.md)** · **Zobacz też:** [Chip TigerTag (format RFID/NFC)](../concepts/tigertag-chip.md), [Twoja pierwsza inteligentna szpula](../tutorials/first-smart-spool.md), [TigerPOD](../products/tigerpod.md)
