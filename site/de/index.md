---
title: "Die offene Filament-Identität"
description: "Die offene NFC-Identität für 3D-Druck-Filament – was TigerTag ist, was darauf läuft und wie du damit etwas Eigenes baust."
template: splash
editUrl: false
banner:
  content: Diese Seite wurde <strong>automatisch aus dem Englischen übersetzt</strong>. <a href="https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new?title=%5BDE%5D+Startseite">Fehler melden</a>.
hero:
  title: "TigerSystem"
  tagline: "Dein Filament, endlich intelligent – und endlich deins. Ein kleiner offener NFC-Chip, und eine Spule kann sich endlich selbst vorstellen."
  image:
    html: |
      <img src="/assets/hero-tigersystem-ecosystem.png" alt="Tiger Studio auf einem Desktop, ein TigerPOD-Lesegerät mit einer getaggten Spule und die mobile App" width="720" height="480" />
  actions:
    - text: "Deine erste smarte Spule"
      link: /de/tutorials/first-smart-spool/
      icon: right-arrow
    - text: "Warum es TigerSystem gibt"
      link: /de/vision/why-tigersystem/
      variant: minimal
    - text: "Die Produkte entdecken"
      link: /de/products/
      variant: minimal
---

## TigerSystem in 30 Sekunden

In jedem 3D-Druck-Regal steckt dasselbe Rätsel: zwanzig Spulen, die Hälfte
ohne Etikett, und keine kann sagen, was sie ist, wie viel noch drauf ist oder
wie sie gedruckt werden möchte.

**TigerSystem löst das mit einem kleinen Chip.** Klebe einen
[TigerTag](/de/products/tigertag/)-NFC-Chip auf eine Spule, und die Spule stellt
sich selbst vor – deinem Handy, deinem Computer, deinem Drucker: *„Ich bin
mattschwarzes PLA von Marke X, 1,75 mm, druck mich bei 210 °C, und von mir sind
noch 640 g übrig.“*

Auch Druckerhersteller versehen ihre Spulen mit Tags – aber **verschlossen**, in
geheimen Formaten, die nur mit ihren eigenen Maschinen funktionieren.
TigerSystem dreht das um: Der Chip ist **offen und von allem lesbar**, die Daten
gehören **deinem** Konto, und jedes Teil – Apps, Cloud, Waage, Lesegerät, die
Chip-Spezifikation selbst – ist veröffentlicht, damit es jeder nutzen und
darauf aufbauen kann. Es ist ein Format, kein umzäunter Garten.

Über **2,5 Millionen Chips** wurden bereits produziert und werden ab Werk in
Filament von Marken wie Rosa3D, eSun, Sunlu und R3D ausgeliefert. Damit ist
TigerTag das am weitesten verbreitete RFID-Protokoll eines Drittanbieters der
Welt.

<div class="ts-boxes">
<img src="/assets/box-rosa3d-cutout.png" alt="Rosa3D-Filamentbox mit TigerTag NFC-RFID" />
<img src="/assets/box-esun-cutout.png" alt="eSun-Filamentbox mit TigerTag NFC-RFID" />
<img src="/assets/box-sunlu-cutout.png" alt="Sunlu-Filamentbox mit TigerTag NFC-RFID" />
</div>

<p class="ts-boxes__caption"><em>Kein Mock-up: echte Kartons in echten Regalen, mit TigerTag drin ausgeliefert.</em></p>


<div class="ts-cardgrid">
<a class="ts-card" href="/de/tutorials/first-smart-spool/"><span class="ts-card__body"><span class="ts-card__title">Bereit zum Ausprobieren</span><span class="ts-card__text">Mach eine Spule in zwei Minuten smart – ein leerer NTAG-Chip, dein Handy, die kostenlose App. Ohne Konto, komplett offline.</span></span></a>
<a class="ts-card" href="/de/products/"><span class="ts-card__body"><span class="ts-card__title">Nutzer</span><span class="ts-card__text">Was jedes Produkt konkret für dich tut – Chips, Apps, die Waage, der Lesegerät-Ständer.</span></span></a>
<a class="ts-card" href="/de/compatibility/"><span class="ts-card__body"><span class="ts-card__title">Druckerbesitzer</span><span class="ts-card__text">Funktioniert es mit deiner Maschine? Sechs Marken laufen bereits, und der Chip funktioniert mit allen anderen.</span></span></a>
<a class="ts-card" href="/de/developers/"><span class="ts-card__body"><span class="ts-card__title">Entwickler</span><span class="ts-card__text">Chips mit JavaScript oder Python lesen und schreiben, oder die Identität in deine eigene Software einbinden.</span></span></a>
<a class="ts-card" href="/de/vision/for-filament-manufacturers/"><span class="ts-card__body"><span class="ts-card__title">Filamenthersteller</span><span class="ts-card__text">Integration im Werk in wenigen Tagen, etwa eine Sekunde pro Chip, im Produktionsmaßstab.</span></span></a>
<a class="ts-card" href="/de/faq/"><span class="ts-card__body"><span class="ts-card__title">Einfach neugierig</span><span class="ts-card__text">Die Fragen, die jeder stellt, beantwortet – Chips, Cloud, Drucker, Datenschutz, alles dabei.</span></span></a>
</div>

<figure class="ts-figure">
<img src="/assets/real-bench-setup.jpg" alt="Ein echter TigerSystem-Arbeitsplatz – Tiger Studio Manager, TigerScale, ein TD1S-Farbsensor, ein ACR122U-Lesegerät und ein TigerPOD" />
<figcaption>Kein Mock-up: die Sandbox auf einem echten Arbeitsplatz – Studio, TigerScale, TD1s und TigerPOD arbeiten zusammen.</figcaption>
</figure>

## Wo die Wahrheit liegt

Dieses Wiki wird aus dem
[TigerSystem-Docs-Repository](https://github.com/TigerTag-Project/TigerSystem-Docs) gerendert, der **Quelle der
Wahrheit** des Ökosystems. Wo eine andere Quelle dem Repository widerspricht,
gilt das Repository.

**Und das Repository gehört allen.** Du brauchst keine Erlaubnis, keine
Einladung und keine Verbindung zum Projekt, um es zu korrigieren:

- Etwas ist falsch, unklar oder fehlt, und du möchtest es einfach melden? →
  [Eröffne ein Issue](https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new)
- Du weißt, was dort stehen sollte? → Jede Seite hat einen Link **„Seite
  bearbeiten“**, der dich direkt in das Markdown dahinter führt. Ändere es,
  öffne einen Pull Request, fertig – GitHub erledigt den Fork für dich, und es
  funktioniert auch vom Handy aus.

Tippfehler, bessere Formulierungen, ein fehlender Schritt, eine Seite, die dich
auf den falschen Weg geführt hat: Alles ist willkommen, und gerade die kleinen
Korrekturen summieren sich.
Der Inhalt steht unter [CC BY 4.0](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/LICENSE);
die Hausregeln, die auf einen Bildschirm passen, stehen in
[CONTRIBUTING](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/CONTRIBUTING.md).

Die Markenrichtlinie betrifft die *Marke* – das Logo auf einem physischen Chip.
Mit dieser Dokumentation hat sie nichts zu tun; sie steht allen offen.

KI-Assistenten sollten bei [llms.txt](/llms.txt) beginnen, der verdichteten
kanonischen Erklärung. Alle anderen können mit dem
[Glossar](/de/glossary/) starten, wenn ihnen ein Begriff im Weg steht.
