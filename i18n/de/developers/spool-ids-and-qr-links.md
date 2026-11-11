---
sourceHash: eab1adc3f872d4b5582c9b4268b736ced3e4e09c765932e0c738f989d8097836
sourcePath: docs/developers/spool-ids-and-qr-links.md
---

# Spulen-IDs und QR-Links

> **Ratifiziert am 2026-11-05 – noch nicht implementiert.** Apps bauen auf diesem
> Vertrag auf. Die noch offenen Punkte stehen am Ende; einen davon zu klären,
> ändert nur, was er benennt. Mit **Vorgeschlagen** markierte Abschnitte sind noch
> nicht ratifiziert: Baue nicht auf ihnen auf, bevor sie es sind.

Die Regeln, denen jede TigerSystem-App folgt:

1. wie eine **chiplose Spule** (TigerData / TigerData+) ihre ID erhält;
2. wie eine Spule **ihren Link behält**, wenn sie einen Chip bekommt;
3. wie die ID einer Spule in den **QR-Code** eines gedruckten Etiketts
   geschrieben und wieder gelesen wird;
4. wie eine App **eine Spule mit Werten aufruft** (ein Gewicht, eine Notiz),
   über einen Link;
5. wie ein **Produkt** seinen eigenen Link erhält;
6. wie ein Link in **JSON** oder als **`.ttag`-Datei** antwortet.
7. was ein **gedrucktes Etikett** trägt, und seine Vorlagen.

## 1. Spulen-IDs

Eine Spule ist ein Dokument im Bestand des Kontos,
`users/{uid}/inventory/{spoolId}`. Die Dokument-ID **ist** die Spulen-ID: Ein
Konto kann nicht zwei Spulen mit derselben ID enthalten.

| Spule | ID | Beispiel |
|---|---|---|
| Chip (TigerTag / TigerTag+) | die NFC-UID des Chips, Hex in Großbuchstaben, 14 Zeichen (die 7-Byte-UID eines NTAG) | `04AB12CD3E4F80` |
| Chiplos, ab jetzt erzeugt | `TigerData_` + Epoch-**Millisekunden** (13 Ziffern) + eine Zufallszahl **0000–9999** (immer 4 Ziffern) | `TigerData_17623456789014213` |
| Chiplos, vor diesem Vertrag erzeugt | `TigerData_` + 10 zufällige Ziffern | `TigerData_4480517985` |
| Chiplos, altes Präfix | `CLOUD_` + 10 zufällige Ziffern | `CLOUD_4480517985` |
| Altes Dezimalformat (alte Android-App) | die UID dezimal geschrieben, wird zu Hex migriert | `1234567890123456` |

Bereits erzeugte IDs werden von diesem Vertrag **nie umgeschrieben**. Leser
prüfen nur das Präfix (`TigerData_` / `CLOUD_` → chiplos); keiner von ihnen hängt
von der Anzahl der Ziffern ab. Die ID ist ein Bezeichner, sonst nichts: Leite nie
ein Erstellungsdatum aus ihr ab. Eine 4-Byte-UID (ein proprietärer Chip, der mit
einer Spule verknüpft ist) ist nie der Name eines Bestandsdokuments und erscheint
daher nie in einem Link.

### Eine chiplose ID erzeugen

Jede App, die chiplose Spulen anlegt (heute Tiger Studio, später die mobile App),
erzeugt die ID auf dieselbe Weise:

1. **Zusammensetzen** `TigerData_<Date.now()><four random digits>`.
2. **Lokale Prüfung** – steht die ID bereits in dem Bestand, den die App hält
   (die Kopie des Live-Listeners, Offline-Cache eingeschlossen), oder in ihrer
   `uidMigrationMap`, setze eine andere zusammen. Das funktioniert offline.
3. **Schreiben**
   - **online:** in einer Transaktion, die das Dokument zuerst liest und
     fehlschlägt, wenn es existiert; bei Fehlschlag zurück zu Schritt 1;
   - **offline:** ein einfacher Schreibvorgang, von Firestore in die
     Warteschlange gestellt, bis das Netzwerk zurück ist. Die Schritte 1 und 2
     sind der einzige Schutz.

Ein einfaches `set()` auf eine bereits existierende ID **überschreibt** die dort
schon vorhandene Spule, stillschweigend. Genau das verhindert Schritt 3.

Die vier Zufallsziffern machen eine neue chiplose ID außerdem praktisch eindeutig
**über alle Konten hinweg** (etwa eine Kollision alle 600 Jahre bei einer Million
chiploser Spulen pro Jahr), sodass ein Server später einen Link für jemand anderen
als den Besitzer auflösen kann, ohne ein gedrucktes Etikett zu ändern.

## 2. Den Link behalten, wenn eine Spule einen Chip bekommt

Einen Chip auf einer chiplosen Spule zu programmieren, verschiebt die Spule auf
die UID des Chips. In **einem Batch**:

1. die Spule unter der Chip-UID schreiben (und unter der Zwillings-UID, bei einem
   Zwillingspaar);
2. das `TigerData_…`-Dokument löschen;
3. die Weiterleitung `users/{uid}/uidMigrationMap/{old id}` →
   `{ hex_uid, migrated_at }` schreiben.

Der Batch sorgt dafür, dass die drei gemeinsam geschehen oder gar nicht. Die
Weiterleitung liegt in `uidMigrationMap` (der Collection, die bereits alte
Dezimal-IDs auf Hex abbildet), nie als Stub-Dokument im Bestand: Alles, was den
Bestand liest, zählt ein Dokument als eine Spule.

## 3. QR-Links

Ein gedrucktes Spulenetikett trägt einen QR-Code mit einem Link zur Spule, **und
sonst nichts** (kein Gewicht, keine Notiz – gedruckte Werte veralten):

```
https://qr.tigertag.io/<id>
```

Neben dem Code wird nichts im Klartext gedruckt: keine ID, kein Link. Der QR-Code
ist der Weg zurück zur Spule.

`<id>` ist die Spulen-ID **ohne ihr Präfix**:

| Spule | Link |
|---|---|
| Chip | `https://qr.tigertag.io/04ab12cd3e4f80` |
| Chiplos (neu) | `https://qr.tigertag.io/17623456789014213` |
| Chiplos (vor diesem Vertrag) | `https://qr.tigertag.io/4480517985` |
| `CLOUD_` | **kein QR-Link** – das Etikett wird ohne QR-Code gedruckt |
| Altes Dezimalformat | **kein QR-Link** – migriere die Spule zuerst zu Hex |

### Kodierung

- Der ganze Link ist in **Kleinbuchstaben**, die ID eingeschlossen: `https://qr.tigertag.io/04ab12cd3e4f80`.
  Getestet am 2026-11-07: Die iPhone-Kamera öffnet einen Link in beiden
  Schreibweisen, aber die Samsung-Kamera (Galaxy S24) zeigt einen Link mit
  `HTTPS://` in Großbuchstaben als reinen Text an und öffnet nur einen in
  Kleinbuchstaben.
- Ein einziges Segment im **Byte**-Modus. Ein Schema in Kleinbuchstaben kann den
  alphanumerischen Modus nicht nutzen, und das Aufteilen des Links in Segmente
  spart nichts (gemessen: jede Variante ist 29 × 29).
- Fehlerkorrektur **M** (15 %): Etiketten werden zerkratzt und geknickt.
- Ergebnis: **29 × 29 Module** für jeden Spulen- und Produktlink. Zeichne jedes
  Modul auf eine ganze Zahl von Druckerpunkten, mit der standardmäßigen Ruhezone
  von 4 Modulen.

### Einen Link zurücklesen

Leser parsen die ID **offline** aus dem Link: Eine App, die ein Etikett scannt,
braucht nie die Website. Sie lesen den Pfad ohne Beachtung der Groß- und
Kleinschreibung, ignorieren ein abschließendes `/` und lösen ihn nach seiner Form
auf:

| Pfad | Spulen-ID |
|---|---|
| 17 Ziffern | `TigerData_<17 digits>` |
| 10 Ziffern | `TigerData_<10 digits>` |
| 14 Hex-Zeichen | die UID, in Großbuchstaben |
| 13 Hex-Zeichen, beginnend mit `4` | eine abgeschnittene NTAG-UID: `0` + die 13 Zeichen ([Reparaturregel](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/issues/146)) |
| `p/` + 8 Hex-Zeichen (gedruckte Form) oder die dezimale `id_product` | ein Produkt – [Abschnitt 5](#5-produktlinks) |

Eine Endung `.JSON` oder `.TTAG` fordert die Antwort für Tools an – [Abschnitt 6](#6-json--und-ttag-antworten).

Apps **schreiben** die obige Kurzform, Leser **akzeptieren aber auch die
Langform**: das Präfix `TigerData` in beliebiger Schreibweise, gefolgt von `_`
oder `-`, dann die 17 oder 10 Ziffern – `TigerData_17623456789014213`,
`TigerData-17623456789014213`, `TIGERDATA-17623456789014213`,
`tigerdata_4480517985` lösen alle zur selben Spule auf. Ein von Hand getippter
oder geteilter Link funktioniert weiter. Das Präfix `CLOUD` wird in keiner der
beiden Formen akzeptiert.

Eine UID kann nur aus Ziffern bestehen, aber sie ist 14 Zeichen lang, nie 17 oder
10, also entscheidet immer die Länge. Keine alte Dezimal-ID erreicht einen Leser,
da keine je gedruckt wird. Jede **andere Form** ist ein Etikett aus einer neueren
Version: Der Leser sagt das („aktualisiere die App“), statt zu scheitern. Jede
andere Art von Ding erhält einen eigenen Ordner, einen Buchstaben und ein `/`
(`p/` für ein Produkt, später `r/` für ein Rack), sodass sie nie mit bereits
gedruckten Spulenlinks kollidieren kann.

### Die Spule auflösen

1. Suche die ID **im eigenen Bestand des angemeldeten Betrachters**.
2. Nicht dort → suche sie in der `uidMigrationMap` des Betrachters und folge der
   Weiterleitung.
3. Ein Zwillingspaar hat ein Etikett, mit der Haupt-UID; jede der beiden UIDs
   öffnet die Spule.
4. Eine gelöschte Spule (`deleted: true`) öffnet sich als „gelöscht“, nicht als
   Fehler.

   **Der Besitzer sieht die Spule auf der Seite selbst**, im Browser aus seinem
   eigenen Bestandsdokument gelesen (die Regeln beschränken es auf ihn): das
   Produkt (Foto auf seiner Farbe), Marke, Material, Stufe, verbleibendes
   Gewicht von der Kapazität, Düsen-, Druckbett- und Trocknungstemperaturen,
   Durchmesser, Rack und Slot, Leerspulengewicht. Zwei Buttons: „Open in Tiger
   Studio“ (`https://studio.tigersystem.io/?spool=<docId>`, mit den Werten des
   Links) und „See the product page“. Ein Besitzer, der auf dem Gerät bei Studio
   Web angemeldet ist, aber nicht auf der Website, wird zu Studio Web geschickt:
   Die Website kann das Dokument ohne eigene Sitzung nicht lesen.
   *(2026-11-07.)* Der Besitzer kann dort das Gewicht und die Notiz ändern, mit
   demselben Schreibvorgang wie Studio: `weight_available` oder `message`
   (höchstens 28 Bytes UTF-8), `updatedAt` (Serverzeit), `needUpdateAt`
   (Serverzeit) bei einem Chip-Format, der Zwilling im selben Batch. Auch der
   Behälter (Leerspule) kann dort geändert werden, so wie Studio ihn schreibt:
   `container_id`, `container_weight` (mit der eigenen Korrektur des Kontos),
   `updatedAt`, der Zwilling im selben Batch. Die Seite hat einen
   Abmelde-Button. *(2026-11-08.)*

5. Wer **nicht der Besitzer** ist – nicht angemeldet, ein anderes Konto, ein
   angenommener Freund eingeschlossen –, wird **zum Produkt** der Spule
   geschickt und bekommt die Spule nie gezeigt: Der Server findet die Spule über
   ihre ID kontenübergreifend (ein Index auf der Spulen-ID), liest ihr
   `id_product` und leitet zum Produktlink aus
   [Abschnitt 5](#5-produktlinks) weiter. Dieselbe ID in zwei Konten mit
   unterschiedlichen Produkten (ein neu beschriebener Chip, dessen altes Dokument
   ein anderes Konto behalten hat) → das Produkt des zuletzt aktualisierten
   Dokuments (`updatedAt`), in praktisch jedem Fall richtig. Kein Produkt oder
   kein Treffer → eine Seite, die sagt, dass die Spule privat ist, mit „Start my
   inventory“. Die Suche läuft nur für diese Scans, ihre Kosten folgen also
   ihnen, nicht der Zahl der Konten. *(Ratifiziert am 2026-11-06; die
   Konfliktregel am 2026-11-07.)*

   Ein Besucher **ohne Sitzung** (keine Anmeldung auf dem Gerät gefunden) wird
   nicht weitergeleitet: Die Seite lässt ihn wählen. Sie zeigt eine Karte des
   Produkts der Spule (nur das öffentliche Produkt, nie bei einer privaten
   Spule), meldet ihn an Ort und Stelle an (nach der Anmeldung läuft die
   Besitzerprüfung erneut, und der Besitzer landet auf der Spule) oder geht
   weiter zur Produktseite. Jemand, der angemeldet, aber nicht der Besitzer ist,
   wird wie oben zum Produkt geschickt. *(2026-11-07.)*

   **Wem die Spule gehört.** Jeder, der eine Spule scannt, angemeldet oder nicht,
   sieht ihren Besitzer: den Anzeigenamen und das Foto aus `userProfiles` des
   Kontos, dessen Dokument zuletzt aktualisiert wurde, auch wenn das Profil nicht
   öffentlich ist und auch bei einer Spule ohne Produkt, damit jeder, der eine
   Spule findet, weiß, wem sie gehört. Nie die UID oder die E-Mail-Adresse.
   *(2026-11-08.)*

**Datenschutz:** Eine ID zu kennen, zeigt nie eine Spule. Ein gescannter Link
öffnet eine Spule nur für ihren Besitzer; in den Apps wird eine Spule nur
jemandem gezeigt, dem die Firestore-Regeln das Lesen bereits erlauben (dem
Besitzer, einem angenommenen Freund, einem öffentlichen Bestand). IDs enthalten
einen Zeitstempel und können erraten werden; das darf nie eine Rolle spielen.
Das Produkt einer Spule ist nicht privat: Es ist auf das Etikett gedruckt, und
ein TigerTag+-Chip trägt es im Klartext für jedes NFC-Handy. Das Gewicht, die
Notiz und das Rack verlassen nie das Konto; der Besitzer erscheint nur als
Anzeigename und Foto (oben). Ein Scan wird einmal pro Browser-Tab und Spule
gezählt (ein Neuladen ist kein neuer Scan), mit seinem Produkt, seiner Marke,
seinem Material und einem Ort auf Stadtebene, nie mit der Spulen-ID. Der
Scanbericht enthält außerdem die IP-Adresse des Besuchers, aufbewahrt gegen
Überflutungen und für Analysen: Sie wird nur im Admin-Verlauf gezeigt, nie
Marken, und dient dazu, die von der Edge gemeldete Stadt zu prüfen. Sie wird ein
Jahr lang aufbewahrt, nur für die Sicherheit. Ein Scan durch einen angemeldeten
Besucher wird mit seinem Konto verknüpft.

## 4. Eine Spule mit Werten aufrufen

Eine App kann einen Link bauen, der eine Spule öffnet **und Werte vorschlägt**,
mit gewöhnlichen Query-Parametern (diese Links werden nie gedruckt, also geht
Lesbarkeit vor QR-Größe):

```
https://qr.tigertag.io/04AB12CD3E4F80?weight=640&note=Opened%20in%20June
```

### Parameter

| Parameter | Wert | Grenze |
|---|---|---|
| `weight` | Netto-Filamentgewicht, in Gramm | ganze Zahl, von 0 bis zur Kapazität der Spule |
| `note` | die Notiz der Spule (das Feld `message`) | reiner Text, höchstens 28 Bytes UTF-8 (der Platz auf dem Chip) |

Namen sind unabhängig von Groß- und Kleinschreibung. Ein unbekannter Parameter
wird ignoriert, nie ein Fehler. Ein Wert außerhalb seiner Grenze wird abgelehnt.
Neue Parameter werden dieser Tabelle hinzugefügt, nie von einer App allein
erfunden.

### Wer sie anwenden kann

| Situation | Was passiert |
|---|---|
| Nicht angemeldet | Werte **abgelehnt**. Der Link bietet die Anmeldung an und öffnet dann die Spule ohne sie. |
| Angemeldet, nicht der Besitzer (die Spule eines Freundes eingeschlossen) | Werte **abgelehnt**. Die Spule öffnet sich, wenn die Regeln es erlauben. |
| Angemeldet, der Besitzer | Studio: Die Spule öffnet sich mit den Werten **vorausgefüllt**, und **eine Geste** speichert sie („Update: 640 g“). Die Hub-Seite: Ein Gewicht, das in die Kapazität passt und vom gespeicherten abweicht, wird **sofort gespeichert**, auf der Spule und ihrem Zwilling in einem Batch, dann bietet ein Banner an, das vorherige Gewicht wiederherzustellen („Revert to 772 g“), gegen einen alten, erneut gescannten Link. *(Hub, 2026-11-08.)* |

Ein Link von jemand anderem schreibt nie: Werte gelten nur für die eigene Spule
des Besitzers. Eine App, die ohne Bestätigung schreiben muss (eine Waage, die das
Gewicht laufend aktualisiert, eine Integration), verwendet keine Links: Sie
schreibt über das Konto des Nutzers unter den Firestore-Regeln
([Integrationsleitfaden](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)).

## 5. Produktlinks

> **Ratifiziert am 2026-11-06.**

Ein Produkt – ein Filament aus dem Katalog, egal wem eine Spule davon gehört – hat
seinen eigenen Link, für Verpackungen, ein Ladenregal, einen Showroom oder einen
gedruckten Katalog:

```
https://qr.tigertag.io/p/<id_product>
```

- `<id_product>` wird **hexadezimal, immer mit 8 Zeichen** geschrieben, in
  Kleinbuchstaben, mit Nullen aufgefüllt: die 4 Bytes so, wie sie auf dem Chip
  liegen, sodass eine Firmware oder ein NFC-Lesegerät den Link ohne Umrechnung
  baut. Beispiel: Produkt `2855882328` → `https://qr.tigertag.io/p/aa394e58`,
  **29 × 29** Module.
- Die Dezimalform bleibt dort, wo Menschen die Zahl sehen – im Katalog
  (`tigersystem.io/<lang>/catalog/2855882328`), in einem Code-128-Barcode – und wird nie in einen `qr.tigertag.io`-Link gedruckt, auch wenn ein Leser sie dort ebenfalls annimmt (siehe unten).
- Eine ID, die nicht oder nicht mehr im Katalog ist – `p/00000000` und
  `p/ffffffff` („kein Produkt“, nie gedruckt), eine unbekannte ID, ein
  archiviertes, gelöschtes oder zusammengeführtes Produkt –, öffnet **eine
  einzige „vergessenes Produkt“-Seite**: Dieses Filament ist nicht mehr im
  Katalog, mit der Suche. Ein einziger Status für alle, `404` (die Seite und die
  `.json`- / `.ttag`-Antworten gleichermaßen): Warum ein Produkt verschwunden
  ist, spielt für den Leser keine Rolle. Eine `id_product` wird nie an ein
  anderes Produkt vergeben: Ein bereits aufgeklebtes Etikett kann nie das falsche
  Filament öffnen.
- Die Links werden vom **Hub** (`tigersystem.io`) ausgeliefert: `qr.tigertag.io`
  zeigt auf ihn. Die Seite ist die Katalogseite des Hubs (unten); die
  `.JSON`- und `.TTAG`-Antworten sind Hub-API-Routen, die den Katalog lesen
  (gecacht).
- Ein Spulenetikett wiederholt nie sein Produkt: Der Spulenlink führt bereits
  dorthin ([Abschnitt 3](#die-spule-auflösen)).

### Einen Produktlink lesen

Ein Produktlink wird immer hexadezimal **gedruckt**. Beim **Lesen** funktioniert
auch die dezimale `id_product`: `p/2673739332` öffnet dasselbe Produkt wie
`p/9f5e0644`. Was auf `p/` folgt, wird so gelesen, ohne Rücksicht auf
Groß- und Kleinschreibung:

1. 8 Zeichen `0-9` / `a-f` mit mindestens einem Buchstaben → hexadezimal.
2. Genau 8 Ziffern → zuerst hexadezimal, denn das ist die Form jedes gedruckten
   Etiketts; ist dieses Produkt nicht im Katalog, liest der Server sie noch
   einmal dezimal. Ein Offline-Leser behält beide Lesarten und nimmt die, die
   sein Katalog kennt.
3. 1 bis 10 Ziffern anderer Länge → dezimal, wenn der Wert unter 2³² liegt
   (`p/2673739332` = `p/9f5e0644`); darüber ist der Link unbekannt.
4. `0` und `4294967295` bedeuten in beiden Formen (`p/00000000`,
   `p/ffffffff`) „kein Produkt“ (`404`).
5. Die Endungen `.json` und `.ttag` funktionieren bei beiden Formen, in
   beliebiger Schreibweise.

Warum bei 8 Ziffern zuerst hexadezimal: 442 echte Produkte haben eine dezimale
ID mit 8 Ziffern. Heute landet keine der beiden Lesarten bei einem anderen
Produkt, aber das hexadezimale Lesen zuerst sorgt dafür, dass jedes gedruckte
Etikett sein eigenes Produkt öffnet.

### Die Seite, die er öffnet

`p/…` leitet (`302`) zur **bestehenden Katalogseite** des Produkts weiter,
`tigersystem.io/<lang>/catalog/<id_product in decimal>`, in der Sprache des
Handys. Es gibt keine eigene Scan-Seite: Die Katalogseite ist **zuerst für das
Handy** gebaut (responsiv), da die meisten ihrer Besuche von einem Scan kommen –
Foto und Farbmuster, Marke, Material und Farbname oben, die Druckeinstellungen
auf einen Blick lesbar, dann der Rest der Seite.

## 6. JSON- und .TTAG-Antworten

> **Ratifiziert am 2026-11-06.**

Ein Link, der auf `.JSON` endet (beliebige Schreibweise) – oder mit
`Accept: application/json` gesendet wird –, antwortet in JSON statt mit einer
Seite. Ein Link, der auf `.TTAG` endet, antwortet mit demselben Datensatz als
[`.ttag`-Datei](./ttag-format.md) zum Herunterladen
(`Content-Disposition: attachment`). Das sind Adressen für Tools, nie gedruckt.

Dieselbe Logik wie bei einem Scan ([die Spule auflösen](#die-spule-auflösen)): Der
Besitzer bekommt die Spule, jeder andere ihr Produkt.

| Link | Der Besitzer (`Authorization: Bearer <Firebase ID token>`) | Jeder andere (nicht angemeldet, ein anderes Konto, ein Freund) |
|---|---|---|
| `…/p/aa394e58.json` | der Produktdatensatz | dasselbe |
| `…/p/aa394e58.ttag` | das Produkt als `.ttag`-Datei | dasselbe |
| `…/04ab12cd3e4f80.json` | die Spule | `303` → `…/p/<id_product>.json`; kein Katalogprodukt (ein TigerData, ein Maker-TigerTag) → `404` |
| `…/04ab12cd3e4f80.ttag` | die Spule als `.ttag`-Datei | `303` → `…/p/<id_product>.ttag`; kein Katalogprodukt → `404` |

Ohne Katalogprodukt wird nichts von der Spule beantwortet, nicht einmal ihr
Material: Der `404` entspricht der „private Spule“-Seite eines Scans.

- **Spule:** eine [`.ttag`-Datei](./ttag-format.md) mit diesem einen Datensatz,
  dem Bestandsdokument, wie Firestore es speichert. Sie trägt `id_product`; ein
  Tool, das das Produkt will, ruft danach `…/p/<id_product>.json` auf.
- **Produkt:** der Katalogdatensatz, wie die Produkt-API ihn liefert, in der
  Sprache von `?lang=` (standardmäßig Englisch). Auf dem Server gecacht und von
  jeder Website aus erlaubt.
- Eine Spulenantwort wird nie gecacht: Sie hängt davon ab, wer fragt.
- In Tiger Studio geöffnet, wird die `.ttag` einer Spule im Modus **Restore**
  importiert (die Spule, wie sie war, Chip und Backup eingeschlossen); die `.ttag`
  eines Produkts wird im Modus **Import** importiert, als neues TigerData+ mit
  einer frischen ID.
- Eine JSON- oder `.TTAG`-Anfrage schreibt nie: Link-Werte (`?weight=`,
  `?note=`) werden dort ignoriert.

## 7. Gedruckte Etiketten

Jede App druckt dieselben Etiketten: zwei Arten, ein Satz Vorlagen, sodass ein
Etikett, gedruckt aus Tiger Studio, der mobilen App oder der Website, gleich
aussieht und sich gleich scannen lässt.

| Etikett | Sein QR-Code | Gedruckt für |
|---|---|---|
| **Spule** | der Spulenlink ([Abschnitt 3](#3-qr-links)) | jede Spule, die einen QR-Link hat (nicht `CLOUD_`, nicht altes Dezimalformat) |
| **Produkt** (Farbmusterkarte) | der Produktlink ([Abschnitt 5](#5-produktlinks)) | eine Spule oder ein Katalogprodukt mit einer echten `id_product` (TigerTag+, TigerData+) |

Der Besitzer, der ein Spulenetikett scannt, bekommt die Spule; jeder andere ihr
Produkt ([die Spule auflösen](#die-spule-auflösen)). Ein Produktetikett öffnet das
Produkt für alle: Es ist das für ein Farbmuster, ein Regal oder einen Showroom.

### Was ein Etikett trägt

- die Marke, dort, wo ein Herstellerlogo hingehören würde (Herstellerlogos kommen später);
- die Serie in Weiß auf einem schwarzen Balken (`PLA Rainbow`; das Material, wenn es keine Serie gibt);
- den Farbnamen und seine(n) Hex-Code(s) (`#F2D066`, bis zu drei auf den breiten Vorlagen);
- auf einem Spulenetikett der Name des Etiketts in der oberen rechten Ecke, als umrandete Pille:
  `TigerQR+`, wenn ihre Referenz ein Katalogprodukt (eine echte `id_product`) oder ein
  TigerTag+-Chip ist, sonst `TigerQR` (ein TigerTag-Chip ohne Produkt ergibt also
  `TigerQR`); ein Produkt-(Filament-)Etikett trägt immer `TigerQR+`. Wie bei TigerTag
  und TigerTag+ bedeutet das `+`: mit dem Katalog verknüpft. Die Pille sagt nicht, ob
  die Spule einen Chip hat;
- bis zu **vier Wertefelder**, vom Nutzer gewählt aus: Düsenbereich, Druckbettbereich,
  Trocknung (Temperatur · Dauer), TD, Durchmesser;
- den QR-Code.

Nur, was sich nicht ändert: nie das Restgewicht, die Notiz, das Rack oder den
Besitzer. Nichts im Klartext neben dem QR-Code ([Abschnitt 3](#3-qr-links)).

### Vorlagen

Acht Vorlagen, die gängigen Größen und Layouts von Spulenetiketten:

| Vorlage | Größe (Breite × Höhe) | Layout |
|---|---|---|
| Classic (Standard) | 40 × 30 mm | Marke, Balken, Farbe + Hex, vier Felder, QR unten rechts |
| Wide | 50 × 30 mm | das Classic, breiterer Balken |
| Compact | 40 × 25 mm | Marke, QR links, Balken, Farbe, Hex – keine Felder |
| Slim | 40 × 12 mm | QR links, Marke, Balken, Farbe – keine Felder |
| Slicer-friendly | 40 × 30 mm | Marke, Serie, Farbe groß gestapelt, großer QR rechts – keine Felder |
| Vertical | 30 × 40 mm | Marke, Balken, Farbe groß, Hex, eine Linie, Felder links gestapelt, QR unten rechts |
| Vertical bold | 30 × 40 mm | Marke, Balken über die ganze Breite, Farbe, eine Linie, QR zentriert darunter – keine Felder |
| Vertical compact | 25 × 40 mm | Marke, Balken, Farbe, Hex, eine Linie, großer QR darunter – keine Felder |

Jede Vorlage ist ein SVG, angelegt in Zehntelmillimetern und auf die Punkte des
Druckers skaliert. Der QR-Code füllt dasselbe Feld wie auf den gängigen
Spulenetiketten (≈ 14 mm beim Classic), mit einer ganzen Zahl von Druckerpunkten
pro Modul: der nächstliegenden, aufgerundet, wenn das innerhalb von 6 % des Feldes
bleibt. Die weißen Ränder des Etiketts sind seine Ruhezone. Bei 203 dpi hat ein
29 × 29-Code beim Classic 4 Punkte pro Modul (≈ 14,5 mm).

### Ausgabe

- **PDF**, **PNG** (in der Auflösung des Druckers) und **SVG**, sodass jeder
  Drucker funktioniert, notfalls über seine eigene App;
- direktes Drucken auf Etikettendrucker (Brother QL, Niimbot, Phomemo) kommt
  später, Drucker für Drucker, mit denselben Vorlagen.

## Offene Punkte

- **App-Links.** iOS (`apple-app-site-association`) und Android (Intent-Filter)
  vergleichen Pfade standardmäßig unter Beachtung der Groß- und Kleinschreibung:
  Links werden in Kleinbuchstaben gedruckt, aber ein von Hand getippter oder
  geteilter Link ist es vielleicht nicht, daher deklariert die mobile App einen
  Abgleich ohne Beachtung der Groß- und Kleinschreibung (iOS) und filtert den
  Pfad im Code (Android).
- **Domain.** `qr.tigertag.io` wird für immer gedruckt: Verlängere `tigertag.io`
  langfristig.

---

**▲ [Dokumentationsindex](../../README.md)** · **Siehe auch:** [Universelle Filament-Identität](../concepts/universal-filament-identity.md), [Bestand & Cloud-Sync](../concepts/inventory-and-cloud-sync.md), [Entwicklerübersicht](./README.md)
