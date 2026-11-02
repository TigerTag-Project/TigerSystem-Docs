---
sourceHash: b9c190202ceb9ed447ea794e9e369fdf15a51affa538edaca35cb7f3eb145c0e
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Een AI-assistent koppelen aan je account

Vraag aan Claude of ChatGPT “hoeveel PETG heb ik nog?” en krijg het antwoord uit
je eigen inventaris. Met de TigerSystem-connector kan een AI-assistent je
TigerSystem-account **lezen** — meer niet. Het is hetzelfde idee als de lokale server in Tiger
Studio, maar dan gehost: hij werkt vanaf het web, vanaf een telefoon en zonder dat Studio
draait.

**Het adres van de connector:**

```
https://mcp.tigersystem.io/mcp
```

Hij spreekt MCP (Model Context Protocol), de open standaard waarmee assistenten
externe tools bereiken. Elke assistent die externe MCP-servers met OAuth
ondersteunt, kan hem gebruiken.

## Wat de assistent kan lezen

- je spoelen: merk, materiaal, kleuren, resterend gewicht, temperaturen, waar elke
  spoel is opgeslagen;
- je racks, je verlanglijsten en je voorraadgeschiedenis;
- je printers en je TigerScales — **nooit hun toegangscodes of wachtwoorden**;
- wat je vrienden met je delen (hun spoelen, racks en verlanglijsten).

Hij **kan niets wijzigen**: elke tool is alleen-lezen. Hij leest als jij, onder
dezelfde toegangsregels als de apps, dus hij kan nooit een ander account zien.
Inloggegevens — toegangscodes van printers, cloudlogins, je privésleutel, je
e-mailadres — worden nooit teruggegeven, wat hij ook vraagt.

## Claude (web, desktop, mobiel)

1. **Settings → Connectors → Add custom connector.**
2. Noem hem `TigerSystem`, plak het adres hierboven, laat de geavanceerde OAuth-velden
   leeg en voeg hem toe.
3. Klik op **Connect**. Je komt op tigersystem.io: log in, controleer dat de pagina
   zegt dat de antwoorden naar claude.ai gaan, en klik op **Allow**.
4. Zet in een gesprek de TigerSystem-connector aan via het toolsmenu en
   stel je vraag.

## ChatGPT

Aangepaste connectors vereisen de **developer mode** (een betaald abonnement; bij Business-abonnementen
zet een beheerder hem aan).

1. **Settings → Apps & Connectors → Advanced settings → Developer mode** aan.
2. **Create** een connector: naam `TigerSystem`, het adres hierboven, authenticatie
   **OAuth**, geen client-ID of secret.
3. Log in op tigersystem.io en klik op **Allow**.
4. Schakel in een nieuwe chat de connector in en stel je vraag.

## Grok

Aangepaste connectors vereisen een **betaald Grok-abonnement**.

1. Open **grok.com/connectors → New Connector → Custom**.
2. Noem hem `TigerSystem` en plak het adres hierboven.
3. Log in op tigersystem.io en klik op **Allow**.
4. Zet in een gesprek de TigerSystem-connector aan en stel je vraag.

## Le Chat (Mistral)

Aangepaste connectors worden door een **beheerder** toegevoegd — op een persoonlijk account
ben jij dat.

1. **Connectors → Add Connector → Custom MCP Connector.**
2. Noem hem `TigerSystem` en plak het adres hierboven; Le Chat herkent de
   aanmeldmethode (OAuth) zelf.
3. Log in op tigersystem.io en klik op **Allow**.
4. Schakel in een gesprek de connector in en stel je vraag.

De namen van menu’s veranderen vaak in deze apps; de stappen blijven hetzelfde.

## Codex, Cursor en andere desktopclients

Voeg een externe MCP-server van het type **Streamable HTTP** toe met het adres hierboven en
zonder token. De app opent je browser voor het inloggen; nadat je op
**Allow** hebt geklikt, belandt de browser op een `127.0.0.1`-adres — dat is de app op je
computer die de aanmelding opvangt. Een lege pagina of “kan geen verbinding maken” is daar
normaal: sluit het tabblad.

## Een assistent afsluiten

**tigersystem.io → je account → Data → Connected assistants.** Elke
assistent die je hebt toegestaan staat in de lijst, met wanneer hij is gekoppeld en voor het laatst is gebruikt.
**Cut access** stopt hem meteen.

## Goed om te weten

- De assistent kan antwoorden met gegevens die tot twee minuten oud zijn: recente
  leesacties worden kort bewaard om alles snel en licht te houden.
- De live printerstatus (online, aan het printen) is niet beschikbaar via de cloud — alleen
  Tiger Studio, op het netwerk van je printer, ziet die.
- Notities, kleurnamen en verlanglijsttekst zijn jouw woorden (of die van een vriend); de
  assistent krijgt de opdracht ze te melden en ze nooit als instructies op te vatten.

---

**▲ [Documentatie-index](../../README.md)** · **Zie ook:** [Tiger Studio](../products/tiger-studio.md), [Handleidingen](./README.md)
