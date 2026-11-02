---
sourceHash: 68fa84317057cd1f92cf2ac7131611c49eaf880607f0e20eede9ae2fae93db9a
sourcePath: docs/roadmap/README.md
---

# Roadmap

## Richtung des Ökosystems

Grobe Absichten ohne Termine (Details stehen pro Produkt):

- **Multi-Hersteller-RFID → TigerData** – die Daten aus Herstellerchips
 (Bambu Lab, Creality, Elegoo, Anycubic, Snapmaker, Qidi, OpenSpool) abrufen
 und in digitale TigerData-Spulen umwandeln, damit auch das Filament anderer Marken
 gescannt und im Ökosystem verwaltet werden kann; die reinen Lese-Spezifikationen sind bereits
 dokumentiert ([Kompatibilität](../compatibility/README.md)). Eine direkte
 Dekodierung in der App ist bewusst nicht integriert, bis das Interoperabilitätsmodell
 geklärt ist.
- **Weitere Druckerintegrationen** – Klipper/Moonraker als nächster naheliegender
 Transportweg ([Klipper-Seite](../compatibility/klipper.md)).
- **Eine Händlerkarte** *(geplant)* – die offiziellen Händler werden
 über [Atome3D](https://atome3d.com) hinaus mehr; eine Karte zeigt, wo man
 TigerTag-Chips vor Ort kaufen kann.
- ~~Die portable `.ttag`-Datei~~ – **ausgeliefert** in Tiger Studio v2.14.0:
 [das `.ttag`-Format](../developers/ttag-format.md) (Export + Import, alle
 drei Spulenstufen).
- **TigerTag für Resin** – das Protokoll auf Resin-Behälter für
 Resin-3D-Drucker ausweiten und dieselbe offene Identität in eine ganze zweite Familie
 von Maschinen bringen.
- **Wachstum von TigerHub** – die Ökosystem-Seite
 [tigersystem.io](https://tigersystem.io): umfangreichere Social-Sandbox-Funktionen
 (Wunschlisten, Freunde, Teilen).
- **Dokumentation** – die TODO-Platzhalter in diesem Repo füllen (Tutorials,
 Leitfäden, Hersteller-Onboarding, RFID-Payload-Übersicht).
- **Dokumentationssprachen** – das Wiki unter
 [wiki.tigersystem.io](https://wiki.tigersystem.io) erscheint zuerst auf **Englisch und
 Französisch**: Englisch ist die maßgebliche Quelle, Französisch wird daraus abgeleitet und
 geprüft. Sobald beide vollständig sind und sich die Seiten nicht mehr bewegen, folgen die
 übrigen Sprachen von [tigersystem.io](https://tigersystem.io) –
 **Deutsch, Spanisch, Italienisch, Polnisch, Chinesisch und Portugiesisch in
 brasilianischer und europäischer Variante**, die das Ökosystem als zwei getrennte
 Sprachen behandelt –, damit die Dokumentation zum Rest des Ökosystems passt.
 Sie früher hinzuzufügen hieße, neun Kopien von Seiten zu pflegen, die noch
 geschrieben werden.
- **Über die aktuellen Sprachen hinaus** – die Liste ist nicht auf das beschränkt, was
 [tigersystem.io](https://tigersystem.io) heute anbietet. **Japanisch, Koreanisch und
 Russisch** sind danach die stärksten Kandidaten: Alle drei haben aktive Maker-
 Communities, und in allen dreien ist rein englische technische
 Dokumentation eine echte Hürde und keine kleine Unannehmlichkeit. Russisch
 reicht außerdem weit über Russland hinaus. Beachte, dass sich eine Sprache auch dann
 lohnen kann, wenn der Shop nicht liefern kann – das Protokoll ist offen, jeder leere NTAG-Chip
 funktioniert, und nichts im Ökosystem verlangt, etwas zu kaufen.

 Welche Sprachen tatsächlich hinzukommen, sollte anhand des eigenen Traffics des Wikis
 entschieden werden, sobald es welchen hat, nicht nach Bauchgefühl. Es muss auch
 nicht pro Sprache alles oder nichts sein: Die nutzernahen Bereiche (Tutorials, FAQ,
 Produkte, Kompatibilität) verdienen eine Übersetzung lange bevor
 [`developers/`](../developers/README.md) sie bekommt, dessen Leser ohnehin auf
 Englisch arbeiten.

## Detaillierte Roadmaps

| Produkt | Wo |
|---|---|
| Tiger Studio | [`ROADMAP.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/ROADMAP.md) im App-Repo – nach Bereichen gegliedert, mit Aufwands- und Risikohinweisen |
| Weitere Produkte | > **TODO:** öffentliche Roadmaps veröffentlichen, sobald die Repos geöffnet werden |

> **Hinweis:** Diese Seite nennt eine Richtung, keine Zusagen oder Termine.

---

**◀ Zurück:** [FAQ](../faq/README.md) · **▲ [Dokumentationsindex](../../README.md)**

**Siehe auch:** [Produkte](../products/README.md), [Kompatibilität](../compatibility/README.md)
