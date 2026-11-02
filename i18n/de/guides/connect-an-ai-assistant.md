---
sourceHash: b9c190202ceb9ed447ea794e9e369fdf15a51affa538edaca35cb7f3eb145c0e
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Einen KI-Assistenten mit deinem Konto verbinden

Frag Claude oder ChatGPT „Wie viel PETG habe ich noch?“ und bekomme die Antwort aus
deinem eigenen Bestand. Der TigerSystem-Connector lässt einen KI-Assistenten dein
TigerSystem-Konto **lesen** – nicht mehr. Es ist dieselbe Idee wie der lokale Server in
Tiger Studio, aber gehostet: Er funktioniert vom Web, vom Handy und ohne laufendes
Studio.

**Die Adresse des Connectors:**

```
https://mcp.tigersystem.io/mcp
```

Er spricht MCP (Model Context Protocol), den offenen Standard, mit dem Assistenten
externe Tools erreichen. Jeder Assistent, der Remote-MCP-Server mit OAuth unterstützt,
kann ihn nutzen.

## Was der Assistent lesen kann

- deine Spulen: Marke, Material, Farben, Restgewicht, Temperaturen, wo jede
  gelagert ist;
- deine Racks, deine Wunschlisten und deine Bestandshistorie;
- deine Drucker und deine TigerScales – **nie deren Zugangscodes oder Passwörter**;
- was deine Freunde mit dir teilen (ihre Spulen, Racks und Wunschlisten).

Er **kann nichts ändern**: Jedes Tool ist schreibgeschützt. Er liest als du, unter
denselben Zugriffsregeln wie die Apps, sodass er nie ein anderes Konto sehen kann.
Zugangsdaten – Zugangscodes von Druckern, Cloud-Logins, dein privater Schlüssel, deine
E-Mail – werden nie zurückgegeben, was er auch verlangt.

## Claude (Web, Desktop, Mobil)

1. **Settings → Connectors → Add custom connector.**
2. Nenne ihn `TigerSystem`, füge die obige Adresse ein, lass die erweiterten
   OAuth-Felder leer und füge ihn hinzu.
3. Klicke auf **Connect**. Du landest auf tigersystem.io: Melde dich an, prüfe, dass
   die Seite sagt, die Antworten gingen an claude.ai, und klicke auf **Allow**.
4. Schalte in einer Unterhaltung den TigerSystem-Connector im Tools-Menü ein und
   stelle deine Frage.

## ChatGPT

Eigene Connectors brauchen den **Entwicklermodus** (ein kostenpflichtiger Tarif; bei
Business-Tarifen aktiviert ihn ein Admin).

1. **Settings → Apps & Connectors → Advanced settings → Developer mode** einschalten.
2. Einen Connector **erstellen**: Name `TigerSystem`, die obige Adresse,
   Authentifizierung **OAuth**, keine Client-ID und kein Secret.
3. Melde dich auf tigersystem.io an und klicke auf **Allow**.
4. Aktiviere in einem neuen Chat den Connector und stelle deine Frage.

## Grok

Eigene Connectors brauchen einen **kostenpflichtigen Grok-Tarif**.

1. Öffne **grok.com/connectors → New Connector → Custom**.
2. Nenne ihn `TigerSystem` und füge die obige Adresse ein.
3. Melde dich auf tigersystem.io an und klicke auf **Allow**.
4. Schalte in einer Unterhaltung den TigerSystem-Connector ein und stelle deine Frage.

## Le Chat (Mistral)

Eigene Connectors werden von einem **Administrator** hinzugefügt – bei einem
persönlichen Konto bist das du.

1. **Connectors → Add Connector → Custom MCP Connector.**
2. Nenne ihn `TigerSystem` und füge die obige Adresse ein; Le Chat erkennt die
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
