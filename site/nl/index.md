---
title: "De open filament-identiteit"
description: "De open NFC-identiteit voor 3D-printfilament – wat TigerTag is, wat erop draait en hoe je er zelf iets mee bouwt."
template: splash
editUrl: false
banner:
  content: Deze pagina is <strong>automatisch vertaald</strong> uit het Engels. <a href="https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new?title=%5BNL%5D+home">Meld een fout</a>.
hero:
  title: "TigerSystem"
  tagline: "Jouw filament, eindelijk slim – en eindelijk van jou. Eén kleine open NFC-chip, en een spoel kan zich eindelijk zelf voorstellen."
  image:
    html: |
      <img src="/assets/hero-tigersystem-ecosystem.png" alt="Tiger Studio op een computer, een TigerPOD-lezer met een getagde spoel en de mobiele app" width="720" height="480" />
  actions:
    - text: "Jouw eerste slimme spoel"
      link: /nl/tutorials/first-smart-spool/
      icon: right-arrow
    - text: "Waarom TigerSystem bestaat"
      link: /nl/vision/why-tigersystem/
      variant: minimal
    - text: "Bekijk de producten"
      link: /nl/products/
      variant: minimal
---

## TigerSystem in 30 seconden

Elk 3D-printschap verbergt hetzelfde mysterie: twintig spoelen, de helft zonder
label, en geen enkele die kan zeggen wat ze is, hoeveel erop zit of hoe ze
geprint wil worden.

**TigerSystem lost dat op met één kleine chip.** Plak een
[TigerTag](/nl/products/tigertag/)-NFC-chip op een spoel en de spoel stelt zich
zelf voor – aan je telefoon, je computer, je printer: *“Ik ben matzwart PLA van
merk X, 1,75 mm, print me op 210 °C, en er zit nog 640 g op.”*

Printerfabrikanten taggen hun spoelen ook – maar **op slot**, in geheime
formaten die alleen met hun eigen machines werken. TigerSystem draait dat om:
de chip is **open en door alles leesbaar**, de gegevens zijn van **jouw**
account, en elk onderdeel – apps, cloud, weegschaal, lezer, de chipspecificatie
zelf – is gepubliceerd zodat iedereen het kan gebruiken of erop kan bouwen. Het
is een formaat, geen ommuurde tuin.

Er zijn al meer dan **2,5 miljoen chips** geproduceerd, die vanaf de fabriek
meegeleverd worden in filament van merken als Rosa3D, eSun, Sunlu en R3D. Dat
maakt TigerTag tot het meest gebruikte RFID-protocol van een derde partij ter
wereld.

<div class="ts-boxes">
<img src="/assets/box-rosa3d-cutout.png" alt="Rosa3D-filamentdoos met TigerTag NFC-RFID" />
<img src="/assets/box-esun-cutout.png" alt="eSun-filamentdoos met TigerTag NFC-RFID" />
<img src="/assets/box-sunlu-cutout.png" alt="Sunlu-filamentdoos met TigerTag NFC-RFID" />
</div>

<p class="ts-boxes__caption"><em>Geen mock-up: echte dozen in echte schappen, geleverd met TigerTag erin.</em></p>


<div class="ts-cardgrid">
<a class="ts-card" href="/nl/tutorials/first-smart-spool/"><span class="ts-card__body"><span class="ts-card__title">Klaar om te proberen</span><span class="ts-card__text">Maak een spoel in twee minuten slim – een blanco NTAG-chip, je telefoon, de gratis app. Geen account, volledig offline.</span></span></a>
<a class="ts-card" href="/nl/products/"><span class="ts-card__body"><span class="ts-card__title">Een gebruiker</span><span class="ts-card__text">Wat elk product echt voor je doet – chips, apps, de weegschaal, de lezerstandaard.</span></span></a>
<a class="ts-card" href="/nl/compatibility/"><span class="ts-card__body"><span class="ts-card__title">Een printereigenaar</span><span class="ts-card__text">Werkt het met jouw machine? Zes merken zijn live, en de chip werkt met alle andere.</span></span></a>
<a class="ts-card" href="/nl/developers/"><span class="ts-card__body"><span class="ts-card__title">Een ontwikkelaar</span><span class="ts-card__text">Lees en schrijf chips vanuit JavaScript of Python, of koppel de identiteit aan je eigen software.</span></span></a>
<a class="ts-card" href="/nl/vision/for-filament-manufacturers/"><span class="ts-card__body"><span class="ts-card__title">Een filamentfabrikant</span><span class="ts-card__text">Integratie in de fabriek in een paar dagen, ongeveer één seconde per chip, op productieschaal.</span></span></a>
<a class="ts-card" href="/nl/faq/"><span class="ts-card__body"><span class="ts-card__title">Gewoon nieuwsgierig</span><span class="ts-card__text">De vragen die iedereen stelt, beantwoord – chips, cloud, printers, privacy en meer.</span></span></a>
</div>

<figure class="ts-figure">
<img src="/assets/real-bench-setup.jpg" alt="Een echte TigerSystem-werkbank – Tiger Studio Manager, TigerScale, een TD1S-kleursensor, een ACR122U-lezer en een TigerPOD" />
<figcaption>Geen mock-up: de sandbox op een echte werkbank – Studio, TigerScale, TD1s en TigerPOD die samenwerken.</figcaption>
</figure>

## Waar de waarheid ligt

Deze wiki wordt gerenderd vanuit de
[TigerSystem-Docs-repository](https://github.com/TigerTag-Project/TigerSystem-Docs), de **bron van de
waarheid** van het ecosysteem. Waar een ander kanaal afwijkt van de repository,
wint de repository.

**En de repository is van iedereen.** Je hebt geen toestemming, uitnodiging of
band met het project nodig om haar te verbeteren:

- Is er iets fout, onduidelijk of ontbreekt er iets, en wil je het gewoon
  melden? → [open een issue](https://github.com/TigerTag-Project/TigerSystem-Docs/issues/new)
- Weet je wat er moet staan? → elke pagina heeft een link **“Pagina
  bewerken”** die je direct naar de Markdown erachter brengt. Pas het aan, open
  een pull request, klaar – GitHub regelt de fork voor je, en het werkt ook
  vanaf een telefoon.

Typfouten, betere formuleringen, een ontbrekende stap, een pagina die je de
verkeerde kant op stuurde: alles is welkom, en juist de kleine correcties
tellen op.
De inhoud valt onder [CC BY 4.0](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/LICENSE);
zie [CONTRIBUTING](https://github.com/TigerTag-Project/TigerSystem-Docs/blob/main/CONTRIBUTING.md) voor de huisregels, die op één
scherm passen.

Het merkbeleid gaat over het *merk* – het logo op een fysieke chip. Het heeft
niets te maken met deze documentatie, die voor iedereen open is.

AI-assistenten beginnen het best bij [llms.txt](/llms.txt), de samengevatte
canonieke uitleg. Alle anderen kunnen beginnen met de
[woordenlijst](/nl/glossary/) als een term in de weg zit.
