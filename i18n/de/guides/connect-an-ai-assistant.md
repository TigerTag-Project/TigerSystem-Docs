---
sourceHash: ce7797639f045c9154227cdd8686b647e174f7ddf43143ca72b59c143690f412
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Einen KI-Assistenten mit deinem Konto verbinden

Frag Claude oder ChatGPT „Wie viel PETG habe ich noch?“ und bekomme die Antwort aus
deinem eigenen Bestand. Der TigerSystem.io-Connector lässt einen KI-Assistenten dein
TigerSystem-Konto lesen und, wenn du es erlaubst, darin Änderungen vornehmen. Es ist dieselbe Idee wie der lokale Server in
Tiger Studio, aber gehostet: Er funktioniert vom Web, vom Handy und ohne laufendes
Studio.

**Die Adresse des Connectors:**

```
https://mcp.tigersystem.io/mcp
```

Er spricht MCP (Model Context Protocol), den offenen Standard, mit dem Assistenten
externe Tools erreichen. Jeder Assistent, der Remote-MCP-Server mit OAuth unterstützt,
kann ihn nutzen.

**Für Mitglieder der TigerSquad.** Der Connector, Lesen inbegriffen, ist ein
Vorteil der [TigerSquad](../tigersquad.md), und der Beitritt ist kostenlos. Außerhalb der
TigerSquad antwortet der Assistent, dass es ein TigerSquad-Vorteil ist; der
Zugang kommt zurück, sobald du beitrittst.

## Was der Assistent lesen kann

- deine Spulen: Marke, Material, Farben, Restgewicht, Temperaturen, wo jede
  gelagert ist;
- deine Racks, deine Wunschlisten und deine Bestandshistorie;
- deine Drucker und deine TigerScales – **nie deren Zugangscodes oder Passwörter**;
- was deine Freunde mit dir teilen (ihre Spulen, Racks und Wunschlisten).

Er liest nur, es sei denn, du gibst ihm Lesen und Schreiben (siehe unten). Er liest als du, unter
denselben Zugriffsregeln wie die Apps, sodass er nie ein anderes Konto sehen kann.
Zugangsdaten – Zugangscodes von Druckern, Cloud-Logins, dein privater Schlüssel, deine
E-Mail – werden nie zurückgegeben, was er auch verlangt.

## Nur lesen, oder lesen und schreiben

Wenn du einen Assistenten verbindest, fragt die Seite von tigersystem.io nach
seinem Zugang: **Nur lesen** (Standard) oder **Lesen und schreiben**. Später
änderst du ihn unter **tigersystem.io → dein Konto → Data → Connected
assistants** oder in Tiger Studio unter **Zugriffe verwalten**. Nach dem Wechsel
zu Lesen und schreiben aktualisiere den Connector im Assistenten oder verbinde
ihn neu, damit er seine neuen Tools sieht.

Mit Lesen und schreiben kann der Assistent:

- Gewicht, Notiz, TD und Tags einer Spule ändern und sie in ein Rack einräumen;
- Preis, Kauflink, Mindestbestand, SKU / EAN und Links eines Produkts ändern;
- Spulen aus dem Katalog hinzufügen;
- ein Rack anlegen und eines umbenennen;
- seine Änderungen auflisten und jede davon rückgängig machen.

Er löscht nie etwas: Eine leere Spule geht auf 0 g. Jede Änderung wird 30 Tage
in einem Verlauf aufbewahrt und kann rückgängig gemacht werden. Notiz und TD
stehen auch auf dem Chip, die Spule braucht danach also ein Neuschreiben ihres
Chips.

Grenzen: 20 Spulen pro Anfrage; pro Tag (UTC) 100 neue Spulen, 5 neue Racks und
insgesamt 500 Änderungen, der Assistent von Tiger Studio und die Online-Assistenten
zusammen gezählt, rückgängig gemachte Änderungen inbegriffen.

## Claude (Web, Desktop, Mobil)

1. **Settings → Connectors → Add custom connector.**
2. Nenne ihn `TigerSystem.io`, füge die obige Adresse ein, lass die erweiterten
   OAuth-Felder leer und füge ihn hinzu.
3. Klicke auf **Connect**. Du landest auf tigersystem.io: Melde dich an, prüfe, dass
   die Seite sagt, die Antworten gingen an claude.ai, und klicke auf **Allow**.
4. Schalte in einer Unterhaltung den TigerSystem.io-Connector im Tools-Menü ein und
   stelle deine Frage.

## ChatGPT

Eigene Connectors brauchen den **Entwicklermodus** (ein kostenpflichtiger Tarif; bei
Business-Tarifen aktiviert ihn ein Admin).

1. **Settings → Apps & Connectors → Advanced settings → Developer mode** einschalten.
2. Einen Connector **erstellen**: Name `TigerSystem.io`, die obige Adresse,
   Authentifizierung **OAuth**, keine Client-ID und kein Secret.
3. Melde dich auf tigersystem.io an und klicke auf **Allow**.
4. Aktiviere in einem neuen Chat den Connector und stelle deine Frage.

## Grok

Eigene Connectors brauchen einen **kostenpflichtigen Grok-Tarif**.

1. Öffne **grok.com/connectors → New Connector → Custom**.
2. Nenne ihn `TigerSystem.io` und füge die obige Adresse ein.
3. Melde dich auf tigersystem.io an und klicke auf **Allow**.
4. Schalte in einer Unterhaltung den TigerSystem.io-Connector ein und stelle deine Frage.

## Le Chat (Mistral)

Eigene Connectors werden von einem **Administrator** hinzugefügt – bei einem
persönlichen Konto bist das du.

1. **Connectors → Add Connector → Custom MCP Connector.**
2. Nenne ihn `TigerSystem.io` und füge die obige Adresse ein; Le Chat erkennt die
   Anmeldemethode (OAuth) selbst.
3. Melde dich auf tigersystem.io an und klicke auf **Allow**.
4. Aktiviere in einer Unterhaltung den Connector und stelle deine Frage.

Die Menünamen ändern sich in diesen Apps oft; die Schritte bleiben dieselben.

## Codex, Cursor und andere Desktop-Clients

Füge einen Remote-MCP-Server vom Typ **Streamable HTTP** mit der obigen Adresse und
ohne Token hinzu. Die App öffnet deinen Browser zur Anmeldung; nachdem du auf
**Allow** geklickt hast, landet der Browser auf einer `127.0.0.1`-Adresse – das ist
die App auf deinem Computer, die die Anmeldung entgegennimmt. Eine leere Seite oder
„Verbindung nicht möglich“ ist dort normal: Schließe den Tab.

## Einen Assistenten abschalten

**tigersystem.io → dein Konto → Data → Connected assistants.** Jeder Assistent, den du
zugelassen hast, ist mit dem Zeitpunkt der Verbindung und der letzten Nutzung
aufgelistet. **Cut access** stoppt ihn sofort.

## Gut zu wissen

- Der Assistent antwortet möglicherweise mit Daten, die bis zu zwei Minuten alt sind:
  Letzte Lesevorgänge werden kurz zwischengespeichert, damit alles schnell und
  leichtgewichtig bleibt.
- Der Live-Zustand der Drucker (online, druckt) ist aus der Cloud nicht verfügbar –
  nur Tiger Studio im Netzwerk deines Druckers sieht ihn.
- Notizen, Farbnamen und Wunschlisten-Texte sind deine Worte (oder die eines Freundes);
  dem Assistenten ist aufgetragen, sie wiederzugeben, nie, sie als Anweisungen zu
  nehmen.

---

**▲ [Dokumentationsindex](../../README.md)** · **Siehe auch:** [Tiger Studio](../products/tiger-studio.md), [Anleitungen](./README.md)
