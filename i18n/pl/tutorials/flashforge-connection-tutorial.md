---
sourceHash: 34416628551d83bd9fa02324bae0b2fbfb63e5cebd7cce0c1f49579591fc94e9
sourcePath: docs/tutorials/flashforge-connection-tutorial.md
---

# FlashForge: poradnik połączenia

Drukarki FlashForge łączą się wyłącznie przez sieć lokalną — nie ma opcji chmurowej.
To, czego potrzebujesz z ekranu dotykowego, zależy od tego, jak Tiger Studio znajduje
drukarkę:

- **Znaleziona przez skanowanie sieci:** wystarczy **Printer ID** — krok 3.
- **Dodana ręcznie:** **numer seryjny** i **adres IP** (krok 2) oraz
 **Printer ID** (krok 3).

Resztę integracji opisuje strona [Zgodność z FlashForge](../compatibility/flashforge.md).

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step1.jpg" alt="Ekran dotykowy FlashForge — przycisk Basic Info" />
<p><strong>Krok 1.</strong> Na ekranie głównym dotknij przycisku „Basic Info” w prawym dolnym rogu ekranu.</p>
</div>

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step2.jpg" alt="Ekran dotykowy FlashForge — strona Basic Info" />
<p><strong>Krok 2.</strong> Na stronie Basic Info odczytaj Serial No. i IP Address.</p>
</div>

<div class="ts-tuto-step">
<img src="../assets/flashforge-connection-tutorial/steps/ffg_step3.jpg" alt="Ekran dotykowy FlashForge — strona Network Mode" />
<p><strong>Krok 3.</strong> Wybierz ikonę koła zębatego, dotknij „Network Mode”, a następnie odczytaj Printer ID.</p>
</div>

> **Jedna wartość, dwie nazwy.** Drukarka nazywa ją *Printer ID*, a formularz Tiger Studio
> — **Password**. To właśnie Printer ID wpisujesz w tym polu.

---

**◀ Poprzednia:** [Zgodność z FlashForge](../compatibility/flashforge.md) · **▲ [Spis dokumentacji](../../README.md)**
