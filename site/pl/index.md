---
title: "Otwarta tożsamość filamentu"
description: "Otwarta tożsamość NFC dla filamentu do druku 3D – czym jest TigerTag, co na nim działa i jak zbudować własne rozwiązanie."
template: splash
editUrl: false
banner:
  content: Ta strona została <strong>automatycznie przetłumaczona</strong> z angielskiego. <a href="https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new?title=%5BPL%5D+strona+g%C5%82%C3%B3wna">Zgłoś błąd</a>.
hero:
  title: "TigerSystem"
  tagline: "Twój filament, wreszcie inteligentny – i wreszcie Twój. Jeden mały, otwarty chip NFC, a szpula może wreszcie sama się przedstawić."
  image:
    html: |
      <img src="/assets/hero-tigersystem-ecosystem.png" alt="Tiger Studio na komputerze, czytnik TigerPOD z oznaczoną szpulą oraz aplikacja mobilna" width="720" height="480" />
  actions:
    - text: "Twoja pierwsza inteligentna szpula"
      link: /pl/tutorials/first-smart-spool/
      icon: right-arrow
    - text: "Dlaczego istnieje TigerSystem"
      link: /pl/vision/why-tigersystem/
      variant: minimal
    - text: "Przeglądaj produkty"
      link: /pl/products/
      variant: minimal
---

## TigerSystem w 30 sekund

Każda półka z materiałami do druku 3D skrywa tę samą zagadkę: dwadzieścia szpul,
połowa bez etykiety, a żadna nie potrafi powiedzieć, czym jest, ile jej zostało
ani jak lubi być drukowana.

**TigerSystem rozwiązuje to jednym małym chipem.** Przyklej chip NFC
[TigerTag](/pl/products/tigertag/) do szpuli, a szpula sama się przedstawi –
Twojemu telefonowi, komputerowi i drukarce: *„Jestem matowym czarnym PLA marki
X, 1,75 mm, drukuj mnie w 210 °C, i zostało mnie 640 g.”*

Producenci drukarek też oznaczają swoje szpule – ale **zamkniętymi**, tajnymi
formatami, które działają tylko z ich własnymi maszynami. TigerSystem odwraca to
podejście: chip jest **otwarty i czytelny dla czegokolwiek**, dane należą do
**Twojego** konta, a każdy element – aplikacje, chmura, waga, czytnik, sama
specyfikacja chipa – jest opublikowany, by każdy mógł z niego korzystać lub na
nim budować. To format, a nie ogrodzony ogród.

Wyprodukowano już ponad **2,5 miliona chipów**, które trafiają z fabryki do
filamentu takich marek jak Rosa3D, eSun, Sunlu i R3D. To czyni TigerTag
najpowszechniej wdrożonym protokołem RFID firm trzecich na świecie.

<div class="ts-boxes">
<img src="/assets/box-rosa3d-cutout.png" alt="Pudełko filamentu Rosa3D z TigerTag NFC-RFID" />
<img src="/assets/box-esun-cutout.png" alt="Pudełko filamentu eSun z TigerTag NFC-RFID" />
<img src="/assets/box-sunlu-cutout.png" alt="Pudełko filamentu Sunlu z TigerTag NFC-RFID" />
</div>

<p class="ts-boxes__caption"><em>To nie makieta: prawdziwe pudełka na prawdziwych półkach, wysyłane z TigerTag w środku.</em></p>


<div class="ts-cardgrid">
<a class="ts-card" href="/pl/tutorials/first-smart-spool/"><span class="ts-card__body"><span class="ts-card__title">Gotowy, by spróbować</span><span class="ts-card__text">Zrób ze szpuli inteligentną w dwie minuty – pusty chip NTAG, telefon, bezpłatna aplikacja. Bez konta, w pełni offline.</span></span></a>
<a class="ts-card" href="/pl/products/"><span class="ts-card__body"><span class="ts-card__title">Użytkownik</span><span class="ts-card__text">Co każdy produkt naprawdę dla Ciebie robi – chipy, aplikacje, waga, stojak na czytniki.</span></span></a>
<a class="ts-card" href="/pl/compatibility/"><span class="ts-card__body"><span class="ts-card__title">Właściciel drukarki</span><span class="ts-card__text">Czy działa z Twoją maszyną? Sześć marek działa już teraz, a chip współpracuje ze wszystkimi pozostałymi.</span></span></a>
<a class="ts-card" href="/pl/developers/"><span class="ts-card__body"><span class="ts-card__title">Deweloper</span><span class="ts-card__text">Odczytuj i zapisuj chipy z JavaScriptu lub Pythona albo włącz tę tożsamość do własnego oprogramowania.</span></span></a>
<a class="ts-card" href="/pl/vision/for-filament-manufacturers/"><span class="ts-card__body"><span class="ts-card__title">Producent filamentu</span><span class="ts-card__text">Integracja w fabryce w kilka dni, około sekundy na chip, w skali produkcyjnej.</span></span></a>
<a class="ts-card" href="/pl/faq/"><span class="ts-card__body"><span class="ts-card__title">Po prostu ciekawość</span><span class="ts-card__text">Pytania, które zadają wszyscy, z odpowiedziami – chipy, chmura, drukarki, prywatność i nie tylko.</span></span></a>
</div>

<figure class="ts-figure">
<img src="/assets/real-bench-setup.jpg" alt="Prawdziwe stanowisko TigerSystem – Tiger Studio Manager, TigerScale, czujnik koloru TD1S, czytnik ACR122U i TigerPOD" />
<figcaption>To nie makieta: piaskownica na prawdziwym stanowisku – Studio, TigerScale, TD1s i TigerPOD pracujące razem.</figcaption>
</figure>

## Gdzie leży prawda

Ta wiki jest generowana z
[repozytorium TigerSystem-Docs](https://github.com/TigerTag-Project/TigerSystem-Docs), które jest **źródłem
prawdy** ekosystemu. Jeśli inne miejsce jest niezgodne z repozytorium, wygrywa
repozytorium.

**A repozytorium należy do wszystkich.** Nie potrzebujesz zgody, zaproszenia ani
żadnego związku z projektem, aby je poprawiać:

- Coś jest błędne, niejasne albo brakuje, a wolisz po prostu o tym powiedzieć? →
  [otwórz issue](https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new)
- Wiesz, co powinno tam być? → każda strona ma link **„Edytuj stronę”**, który
  przenosi Cię prosto do kryjącego się za nią Markdownu. Zmień go, otwórz pull
  request i gotowe – GitHub zajmie się forkiem za Ciebie, a działa to nawet z
  telefonu.

Literówki, lepsze sformułowania, brakujący krok, strona, która skierowała Cię na
złą drogę: wszystko jest mile widziane, a to właśnie drobne poprawki się
kumulują.
Treść jest na licencji [CC BY 4.0](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/LICENSE);
zasady, które mieszczą się na jednym ekranie, znajdziesz w [CONTRIBUTING](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/CONTRIBUTING.md).

Polityka znaku towarowego dotyczy *znaku* – logo na fizycznym chipie. Nie ma nic
wspólnego z tą dokumentacją, która jest otwarta dla każdego.

Asystenci AI powinni zacząć od [llms.txt](/llms.txt), skondensowanego
kanonicznego wyjaśnienia. Wszyscy pozostali mogą zacząć od
[słownika](/pl/glossary/), jeśli jakiś termin stoi im na drodze.
