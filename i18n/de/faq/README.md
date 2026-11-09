---
sourceHash: 330b407d27d694c4ba885a1b36d46f3b1470147007651a81ecce2d19fc5f827b
sourcePath: docs/faq/README.md
---

# FAQ

## Allgemein

**Was ist TigerSystem?**
Ein offenes Ökosystem für den 3D-Druck, das auf einer Idee beruht: Die Identität
einer Filamentspule gehört ihrem Besitzer, nicht einer Druckermarke. Siehe
[Warum es TigerSystem gibt](../vision/why-tigersystem.md).

**Muss ich etwas kaufen, um anzufangen?**
Nein – nicht einmal einen Chip. Die Apps sind kostenlos, jedes NFC-Smartphone ist
das Lesegerät, und eine **TigerData**-Spule trägt die volle Identität, ohne dass
irgendwo etwas aufgeklebt wird. Chips sind der Komfort, nie die Voraussetzung:
[Start für 0 $](../guides/start-for-free.md).

**Ist das an eine Filamentmarke oder Druckermarke gebunden?**
Nein – Neutralität ist eine Designregel. Jedes Filament, jeder Drucker, keine
Partnerliste.

**Sind diese Apps DAS Produkt?**
Nein – die **nutzerseitige** Seite ist bewusst eine **Sandbox**. Jede App und jedes
Gerät, das wir für Endnutzer bauen (Tiger Studio, Tiger NFC Connect, TigerScale,
TigerPOD und kommende Projekte), ist ein funktionierender **Proof of Concept**:
Sein einziges Ziel ist, das Potenzial eines quelloffenen, standardisierten,
herstellerunabhängigen, plattformübergreifenden Protokolls zu zeigen und andere
anzuregen, sich die Funktionen von morgen auszumalen. Nutze sie, forke sie oder
baue stattdessen deine eigenen. Die **Fabrikseite** dagegen ist
produktionsreif: Eine industrielle Werkzeugkette programmiert die Chips in
Partnerfabriken mit Liniengeschwindigkeit – dieser Teil ist kein Experiment. Siehe
[Eine Sandbox, mit Absicht](../vision/why-tigersystem.md).

**Warum baut ihr all diese Demonstratoren selbst?**
Weil sonst niemand es getan hat. Über 2,5 Millionen TigerTag-Chips wurden
produziert und stecken in Filamentspulen, und wir gingen davon aus, dass die
Community von selbst Anwendungen für eine offene NFC-Identität erfinden würde – das
ist nicht passiert. Die Demonstratoren zu bauen, war nie das ursprüngliche Ziel; es
wurde nötig, um zu zeigen, was das Protokoll möglich macht. Die ganze Geschichte:
[Die Geschichte hinter der Sandbox](../vision/why-tigersystem.md).

## TigerTag (Chips)

**Was für ein Chip ist ein TigerTag?**
Ein handelsüblicher NTAG-NFC-Chip mit offenen 144 Byte Nutzdaten – Marke, Material,
Farbe, Durchmesser, Druckeinstellungen. Keine Schlüssel, keine Verschlüsselung der
Daten. Siehe [Der TigerTag-Chip](../concepts/tigertag-chip.md).

**Kann ich einen Chip neu beschreiben?**
Ja – Chips sind wiederbeschreibbar, und das ist der Sinn des
[Second-Life-Ablaufs](../philosophy/second-life.md): eine Spule nachfüllen oder
umwidmen und ihren Chip neu codieren.

**Was ist TigerTag+?**
Ein TigerTag, der genau weiß, *welches Produkt* er ist. Statt von Hand eingetippter
Werte trägt er eine **Produkt-ID aus dem offiziellen Katalog** – Marke, Farbe,
Material, Temperaturen, Durchmesser, SKU, EAN – plus optionale Anreicherungs-Metadaten,
die sich nach dem Beschreiben des Chips verbessern können. Der Chip bleibt **zu
100 % offline**: Alles, was zum Drucken nötig ist, ist weiterhin darauf. Das `+`
bedeutet *identifiziert*, nicht *zertifiziert*.

**Und TigerTag+ Certified?**
Ein TigerTag+, der zusätzlich eine kryptografische **Signatur** trägt, geschrieben
von einem Hersteller, der die Zertifizierung und ihre Signierwerkzeuge besitzt.
Jeder kann eine Signatur **prüfen** – kostenlos, offline, auf dem eigenen Handy –,
aber nur ein zertifizierter Hersteller kann eine **ausstellen**, sodass ein
geklonter Tag die Prüfung nicht besteht. Siehe [TigerTag+](../products/tigertag-plus.md).

**Kann ich einen Chip in meinem Konto sichern?**
Ja, und das ist eine eigene Funktion, getrennt vom `+`. Tiger Studio kann den
genauen Inhalt eines Chips, geschlüsselt auf seine physische UID, speichern und ihn
später wieder zurückprogrammieren – nützlich, wenn ein Chip überschrieben oder
beschädigt wird, und gültig **nur für den ursprünglichen Chip**. Ein Backup macht
einen Chip nicht zu einem TigerTag+.

**Wo kaufe ich Chips?**
Zwei gleichwertige Antworten. Offizielle Chips der Marke TigerTag gibt es bei
**[tigertag.io](https://tigertag.io)** und über offizielle Händler (derzeit
[Atome3D](https://atome3d.com), weitere kommen bald dazu) – ihr Kauf unterstützt die
Entwicklung. Aber **jeder günstige, leere NTAG-Chip** von Amazon, AliExpress oder
aus dem Laden um die Ecke funktioniert identisch, und das ist Absicht: Nichts wird
blockiert, das Protokoll ist der Punkt.

**Kommen die Chips, die ich kaufe, mit Daten darauf an?**
Nein – **einzeln verkaufte Chips werden leer ausgeliefert**, egal ob sie das
TigerTag-Logo tragen oder nicht. Du schreibst die Identität des Filaments selbst, in
[Tiger NFC Connect](../products/tigertag-connect.md) oder
[Tiger Studio](../products/tiger-studio.md); das dauert beim ersten Mal etwa eine
Minute. Die Chips, die **bereits codiert** ankommen, sind die, die ab Werk in
Filament der Partnermarken integriert wurden. Einen Chip zu kaufen und getaggtes
Filament zu kaufen sind zwei verschiedene Dinge.

**Welche Form soll ich kaufen – Aufkleber oder Refill-Carrier?**
Zwei Bauformen für zwei Situationen. Der **einzelne Aufkleber** kommt auf jede Spule,
die du schon besitzt. Die **Refill-Version** ist für spulenlose
[Refills](../philosophy/second-life.md) gebaut: Sie wird in den **Pappkern**
geklebt, bevor du den Refill auf eine wiederverwendbare Masterspool montierst, sodass
der Chip mit dem Filament wandert statt mit der Rolle – an derselben Stelle, an die
ihn die Fabrik setzt.

**Welchen leeren Chip soll ich genau kaufen?**
**NTAG213, 215 oder 216 – rund, 25 mm** ist die Empfehlung. Das Protokoll ist bewusst
darauf optimiert, in den kleinen NTAG213 (144 Byte) zu passen; 215/216 funktionieren
identisch, mit ungenutztem Platz übrig. Andere Formen funktionieren auch, aber rund
25 mm ist das Format, um das herum die Lesegeräte und Halter des Ökosystems
entworfen sind.

**Welche Filamentmarken liefern TigerTag ab Werk aus?**
Über 2,5 Millionen Chips wurden produziert – das macht TigerTag zum **am weitesten
verbreiteten RFID-Protokoll eines Drittanbieters der Welt**; die meisten werden ab
Werk von Filamentmarken Dritter integriert – Rosa3D, eSun, Sunlu, Landu, Jamg He,
R3D, Filforme, Lotactree, Smart3DPT, Nanovia –, und weitere sind in Integration.

**Wie kommt ein Chip auf eine Spule?**
Er wird aufgeklebt – und es gibt **zwei pro Spule, auf gegenüberliegenden Seiten**.
Das ist Absicht: Drucker teilen sich oft ein RFID-Lesegerät zwischen zwei Slots,
also muss ein Chip zum Lesegerät zeigen, auf welcher Seite die Spule auch sitzt; du
kannst von Hand scannen, ohne die Spule zu wenden; du kannst sie scannen, ohne sie
aus ihrem Slot zu ziehen; und fällt ein Chip aus, antwortet der andere weiterhin.
Bonus: Jede leere Spule liefert dir zwei wiederverwendbare Chips.
Siehe [warum zwei Chips](../concepts/tigertag-chip.md).

**Brauche ich Internet, um einen Chip zu lesen?**
Nein. Die Nutzdaten des Chips sind vollständig und autark: Handy im Flugmodus,
Desktop offline – die Spule stellt sich trotzdem vor.

**Ich würde lieber ein anderes NFC-Protokoll verwenden (OpenSpool, mein eigenes …) –
bin ich an TigerTag gebunden?**
Nein. Chips sind **nie schreibgeschützt**: TigerTag ist nur das Basisprotokoll, mit
dem Spulen ab Werk ausgeliefert werden. Du kannst den Chip frei neu beschreiben und
seine Daten auf jedes andere NFC-/RFID-Protokoll migrieren, ob eigenes oder
bestehendes.

**Was passiert mit dem Chip, wenn die Spule leer ist?**
Er bekommt ein zweites Leben – nie die Mülldeponie. Codiere ihn für die nächste Spule
neu oder wandle ihn in Standard-NDEF um und mach daraus alles, was NFC kann: einen
Schlüsselanhänger, eine Visitenkarte, ein vernetztes Objekt. Die offiziellen
Marken-Chips wurden gerade deshalb auf **NTAG215** umgestellt, um Speicherreserve für
diese Wiederverwendung zu lassen: Der Chip einer Spule sollte nie zu Elektroschrott
werden. Siehe [Second Life](../philosophy/second-life.md).

**Übersteht der Chip eine beheizte Kammer oder einen Filamenttrockner?**
Im normalen Gebrauch wurden keine Chip-Ausfälle aus dem Feld gemeldet – auch nicht von
Nutzern, die Filamenttrockner betreiben. Zwei Dinge sprechen für den Chip: Du liest
ihn nie heiß (Scans finden bei Umgebungstemperatur statt, nicht mitten im Druck in
einer Kammer), und es ist Standard-NTAG-Hardware – für formale Temperaturangaben
siehe die Datenblätter von NXP zu NTAG213/215/216.

**Was ist eine `.ttag`-Datei?**
Ein portabler Offline-Schnappschuss einer oder mehrerer deiner Spulen – die Einheit
zum Sichern, zum Mitnehmen auf einem USB-Stick und zum Teilen deiner Filamente.
Exportiere aus Tiger Studio eine Spule oder eine ganze Auswahl; importiere mit
vollständiger Vorschau und der Wahl zwischen *Wiederherstellen* (dasselbe Konto) und
*Importieren* (als frische Spulen übernehmen). Vollständige Spezifikation:
[das `.ttag`-Format](../developers/ttag-format.md).

**Kann ich TigerSystem ganz ohne Chips nutzen?**
Ja – das ist **TigerData**: dieselben Protokolldaten in rein digitaler Form, kein
Chip, keine UID. Die Identität lebt in deinem Bestand (oder irgendwo Digitalem) und
verhält sich wie jede andere Spule. Schreibe sie später – atomar, wenn du bereit
bist – in einen NFC-Chip, und sie wird zu einem TigerTag, mit einer endlich
verbundenen physischen UID. Siehe
[Eine Identität, drei Zustände](../concepts/universal-filament-identity.md).

## Tiger Studio (Desktop)

**Welche Plattformen?**
Windows, macOS und Linux (Electron). Downloads auf der
[Releases-Seite](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases).

**Brauche ich ein NFC-Lesegerät?**
Nein – die App funktioniert eigenständig. Ein ACR122U-Lesegerät (oder ein
[TigerPOD](../products/tigerpod.md)-Ständer) ergänzt sofortige Spulenerkennung und das
Codieren von Chips.

**Welche Drucker kann sie ansteuern?**
Sechs Marken live: Anycubic, Bambu Lab, Creality, Elegoo, FlashForge, Snapmaker –
siehe die [Kompatibilitätsmatrix](../compatibility/README.md).

## Slicer & Druck-Workflow

**Muss ich meinen Slicer wechseln?**
Nein. Behalte OrcaSlicer, den Slicer deines Herstellers, was du willst – TigerSystem
slict nicht und will es nicht. Du slicest und startest Aufträge genau wie bisher.
Siehe [wo der Slicer hineinpasst](../architecture/data-flow.md).

**Was fügt TigerSystem dem Drucken dann hinzu?**
Zwei Dinge. Erstens: Die Filament-Angaben auf der Maschine entsprechen der
Wirklichkeit – Tiger Studio sendet die Daten jeder Spule an die Slots des Druckers
(AMS, CFS, Canvas, ACE, IFS). Zweitens: Live-Überwachung – egal was den Druck
gestartet hat, der Auftrag erscheint in Tiger Studio mit Fortschritt, Temperaturen,
einer Uhrzeit „Endet um“ und der Kamera – über deine ganze Flotte, alle Marken
gemischt.

**Kann der Chip mein Slicer-Profil automatisch konfigurieren?**
Heute nicht. Der Chip trägt die empfohlenen Einstellungen des Filaments
(Temperaturen …); du übernimmst sie selbst in dein Slicer-Profil.

**Ich habe Drucker von drei verschiedenen Marken. Ein Problem?**
Im Gegenteil – das ist der Punkt. Eine Druckertabelle für die ganze Flotte, mit
Filtern nach Marke / Zustand / Tag, in welcher Mischung der sechs unterstützten
Marken auch immer.

## TigerHub (die Web-Heimat des Ökosystems)

**Was ist TigerHub?**
Die Webplattform unter [tigersystem.io](https://tigersystem.io). Sie stellt das
TigerSystem-Ökosystem vor – das Schaufenster dessen, was das offene Protokoll
möglich macht – und beherbergt die soziale Seite der Sandbox, alles heute live: dein
Konto im Web, Wunschlisten (öffentlich und nur für Freunde), Freundescodes und
Einladungen, das Teilen öffentlicher Listen sowie den Materialkatalog, den
Browser der Referenzdatenbank, 3D-Modelle und mehr. Siehe
[TigerHub](../products/tigerhub.md).

**Kann ich meine Sammlung jemandem ohne App zeigen?**
Ja – TigerHub liefert schreibgeschützte Listenlinks: Jeder mit dem Link sieht sie in
einem normalen Browser, ohne App, ohne Konto.

**Ist TigerHub die Datenbank hinter den Apps?**
Nein. Die Konten und Daten liegen in schlichtem **Firebase** – eine gemeinsame
Datenbank an einem Ort, damit alle Elemente der Sandbox zusammenarbeiten. TigerHub
ist die Weboberfläche darüber.

## Tiger NFC Connect (mobil)

**Was macht die mobile App?**
NFC-Scannen und Chip-Programmierung unterwegs, Durchsuchen des Katalogs und
vollständige Bestandssynchronisierung mit demselben Konto wie die Desktop-App.

**Wo lade ich sie herunter?**
Sie erscheint im **App Store** und bei **Google Play** als **Tiger NFC Connect**
(früher „TigerTag RFID Connect“), mit öffentlichen Betas auf beiden Plattformen. Alle
Links: [tigersystem.io/download](https://tigersystem.io/download).

## TigerScale & Sensoren

**Was ist TigerScale?**
Eine quelloffene ESP32-Waage für Filamentspulen. Stelle eine Spule darauf, und ihr
Live-Gewicht fließt direkt in deinen Bestand – sofort sichtbar auf Desktop, Mobil und
in geteilten Ansichten. Siehe [TigerScale](../products/tigerscale.md).

**Moment – der Chip weiß doch schon alles, wozu eine Waage?**
Der Chip weiß, was das Filament **ist**; nur eine Waage weiß, wie viel **übrig** ist.
Sie sind die zwei Hälften eines wirklich nützlichen Bestands: die Identität vom Chip,
die Live-Menge von der Waage.

**Brauche ich eine TigerScale, um das Gewicht zu verfolgen?**
Nein. Du kannst das Gewicht einer Spule jederzeit in den Apps von Hand setzen oder
anpassen – die Waage macht es nur automatisch, live und mühelos. Tiger Studio liest
außerdem handelsübliche **USB-„HID-Waagen“** – die DYMO-M-Serie (M5, M10, M25 …) und
jede konforme Waage – als Option eines Drittanbieters
([Details](../products/tigerscale.md)).

**Kann ich selbst eine bauen?**
Ja – das ist der Punkt. Hardware-Design und Firmware sind vollständig offen (MIT) im
[Tiger-Scale-Repo](https://github.com/TigerTag-Project/Tiger-Scale).

**Und das Eigengewicht der leeren Spule?**
Mit der Behälterkalibrierung von Tiger Studio misst du das tatsächliche Leergewicht
eines Behälters einmal; es wird dann auf jede Spule in diesem Behälter angewendet,
sodass die Zahl, die du siehst, Netto-Filament ist, nicht die Plastikrolle.

**Was ist das TD-1 / TD1s?**
Ein Filament-Analysegerät eines Drittanbieters von **[AJAX-3D](https://ajax-3d.com)**,
in zwei Varianten, die beide mit dem Ökosystem funktionieren: **TD-1** (die
Selbstbau-Version – bau es selbst) und **TD1s** (fertig montiert, sofort einsatzbereit).
Seine Hauptaufgabe ist, die **Transmission Distance** eines Filaments zu messen
(„TD“ – wie viel Licht das Material durchlässt), den Wert, ohne den
HueForge-/Full-Spectrum-Nutzer nicht auskommen; außerdem liest es die **Farbe** (RGB,
1–3 Slots) – etwas weniger präzise, aber ein guter Anhaltspunkt. Tiger Studio bindet
es nativ per USB ein, und **Tiger NFC Connect unterstützt es mobil über USB-C**. Die
gemessene TD kann **im TigerTag-Protokoll selbst gespeichert** werden – auf dem
NFC-Chip oder im Dateiformat `.ttag`. Ein Zubehör eines Drittanbieters und das offene
Ökosystem arbeiten zusammen, wie vorgesehen.

## Cloud & Bestand

**Wo wird mein Bestand gespeichert?**
In deinem eigenen TigerSystem-Konto – schlichtes Firebase (Firestore), eine gemeinsame
Datenbank, die alle Apps nutzen. Jedes Gerät, auf dem du dich anmeldest, sieht
dieselben Daten in Echtzeit. Siehe
[Bestand & Cloud-Sync](../concepts/inventory-and-cloud-sync.md).

**Funktioniert es offline?**
Chips sind offline voll lesbar; Apps halten einen lokalen Cache. Drucker-Verbindungen
sind LAN-lokal und brauchen das Internet gar nicht (außer im Cloud-Modus von
Anycubic).

**Ich will KEINE Cloud. Kann ich TigerTag trotzdem nutzen?**
Ja, zu 100 %. Die Nutzdaten des Chips sind vollständig und autark: lesen, schreiben
und einen vollständig lokalen Bestand ohne Cloud, ohne Konto, ohne Server verwalten –
die [JS- und Python-SDKs](../developers/sdks.md) gibt es genau, um das in eigenen oder
DIY-Projekten leicht zu machen. Sogar **TigerTag+ authentifiziert sich lokal, ohne
Internetverbindung**. Die Cloud-Schicht ist optionaler Komfort (Sync über mehrere
Geräte, Teilen), nie eine Voraussetzung – wir schlagen eine Vision des
TigerTag-Nutzers vor, und jede andere Vision wird akzeptiert und gefördert.

**Ich weiß nichts über NFC oder RFID – ist das etwas für mich?**
Gerade für dich. Das ganze Erlebnis ist für Einsteiger entworfen: Spule mit dem Handy
antippen, sie stellt sich vor, fertig. Kein Fachjargon nötig – die technischen
Schichten gibt es für alle, die tiefer graben wollen, nicht als Voraussetzung.

**Können andere Leute meine Spulen sehen?**
Nur wenn du es willst: angenommene Freunde, ein öffentlicher Schalter oder ein
TigerHub-Freigabelink. Alles ist standardmäßig privat und wird serverseitig
durchgesetzt.

**Was passiert, wenn die TigerTag-Cloud eines Tages abgeschaltet wird?**
Die Designantwort auf diese Sorge ist Offenheit: Das Chip-Format ist öffentlich,
Chips lesen sich für immer vollständig offline, die SDKs und die Desktop-App sind
quelloffen, und die Cloud-Oberfläche ist dokumentiert. Deine Spulen können nicht von
einem Server „gebrickt“ werden – genau das ist der Unterschied zum Silo eines
Herstellers.

## RFID & Kompatibilität

**Kann Tiger Studio native Tags von Bambu/Creality/… lesen?**
Noch nicht – der richtige Umgang mit der Interoperabilität ist noch eine offene
Frage. Für sieben Herstellerformate sind reine Lese-Dekodierungsspezifikationen
dokumentiert, und die laufende Arbeit zielt darauf, **Tag-Daten der Hersteller in
digitale TigerData-Spulen umzuwandeln**, damit sich Filament anderer Marken scannen
und im Ökosystem verwalten lässt. Siehe [Kompatibilität](../compatibility/README.md).

**Warum sind Hersteller-Tags gesperrt und TigerTag nicht?**
Gesperrte Tags dienen der Herstellerbindung. Die Antwort von TigerTag ist ein offen
lesbares Format – siehe
[Nutzerzentriert vs. druckerzentriert](../philosophy/user-centric-ecosystem.md).

**Was ist mit Harzdruckern?**
Kommt: TigerTag wird auf **Harze** erweitert – dieselbe offene Identität auf
Harzbehältern für Harz-3D-Drucker.

**Funktioniert TigerTag mit einem Drucker ohne RFID-Lesegerät?**
Ja – das ist die [Smartphone-Brücke](../philosophy/smartphone-bridge.md): Dein Handy
(oder ein Desktop-Lesegerät) identifiziert die Spule, und das System speist die Daten
in den Drucker ein.

## Fehlerbehebung

**Mein Chip lässt sich mit dem Handy nicht scannen.**
Prüfe, ob NFC aktiviert ist, und finde den idealen Punkt der Antenne deines Handys;
Tags lesen sich am besten flach daran. Liest sich der Chip in einer App, aber nicht in
einer anderen, aktualisiere die App.

**Mein Drucker erscheint nicht in Tiger Studio.**
Stelle sicher, dass der Drucker im selben LAN ist, gegebenenfalls im LAN-Modus, und
versuche dann „Add by IP“ – die Erkennungsmethoden unterscheiden sich je nach Marke.

> Echte Fälle sind willkommen – melde deinen auf dem
> [offiziellen Discord](https://discord.gg/3Qv5TSqnJH) oder in den GitHub-Issues;
> dieser Abschnitt wächst aus ihnen.

## Entwickler

**Hat tatsächlich schon jemand auf TigerTag aufgebaut?**
Ja – und unabhängig von uns:
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) (das RFID-Toolkit der
Community für viele Hersteller) liest TigerTags;
[Spooly Tracker](https://spoolytracker.com/) (Bestandsplattform, Web + mobil)
identifiziert Spulen mit TigerTags; und die
[Snapmaker U1 Extended Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
macht den U1 zum **ersten Drucker, der TigerTags nativ liest**, und
[COSMOS](https://github.com/OpenCentauri/cosmos) tut dasselbe auf dem Elegoo Centauri Carbon, mit
dem im Canvas eingebauten NFC-Lesegerät. Siehe
[Integrationen von Drittanbietern](../developers/integrations.md).

**Kann ich meine eigene App auf TigerTag aufbauen?**
Ja, ohne Erlaubnis: offene Chip-Spezifikation, [SDKs](../developers/sdks.md) (JS &
Python) und eine [dokumentierte Konto-Oberfläche](../developers/account-api.md) mit
funktionierenden Beispielen für ESP32 / Home Assistant / Spoolman.

**Kann ich TigerTag an mein ERP oder meine interne Lagersoftware anbinden?**
Ja – genau diese Art der Nutzung lädt das offene Protokoll ein. Ein Scan (NFC-Handy
oder USB-Lesegerät ACR122U) liefert dir die Identität der Spule; was du damit machst –
Lagerverwaltung, Auftragsverfolgung, Rückverfolgbarkeit, Nachbestellung, F&E –
entscheidest du. Siehe [Was kannst du bauen?](../developers/README.md)

**Welche Hardware brauche ich, um Chips in meinem eigenen Projekt zu lesen?**
Ein beliebiges NFC-Smartphone, ein USB-Lesegerät der Klasse ACR122U an einem Computer
– oder voll DIY: Ein einfacher ESP32 mit einem PN532- oder RC522-Lesemodul reicht aus
(so macht es [TigerScale](../products/tigerscale.md)). Handelsüblich, günstig, keine
proprietäre Ausrüstung.

**Ist es eine Sicherheitslücke, dass die Firebase-Konfiguration öffentlich ist?**
Nein – das ist das Standardmuster von Firebase. Jede Durchsetzung geschieht
serverseitig in Sicherheitsregeln; ein Client kann nur auf die Daten seines eigenen
Nutzers zugreifen.

## Hersteller

**Wir sind eine Filamentmarke – wie liefern wir mit TigerTag getaggte Spulen aus?**
Schnell: Eine Produktionslinie kann mit TigerTag in **nur 5 Tagen** laufen, zu sehr
geringen Kosten, wobei jeder Chip in **etwa 1 Sekunde** geschrieben wird – bewährt
mit mehr als 2,5 Millionen bereits ausgelieferten Chips von Rosa3D, eSun, Sunlu,
Landu, Jamg He, R3D, Filforme, Lotactree und Smart3DPT. Und jede Marke, die dazukommt, stärkt das gemeinsame
Argument für Druckerhersteller, TigerTag nativ zu lesen. Lies
[Für Filamenthersteller](../vision/for-filament-manufacturers.md) und melde dich dann
unter **[tigertag@tigertag.io](mailto:tigertag@tigertag.io)**.

**Kann mein Produkt „TigerTag Certified“ werden?**
Das hängt davon ab, auf welcher Seite einer Linie es steht – und die meisten Produkte
stehen auf der freien Seite.

Wenn dein Produkt mit TigerTag-Chips **spricht** – ein Lesegerät, eine App, ein
Drucker, ein Slicer, ein Trockner, ein Tool –, ist es **TigerTag Compatible**. Diese
Stufe ist kostenlos, selbst erklärt und braucht weder Audit noch Erlaubnis: Baue es,
sage *„kompatibel mit TigerTag“* (oder *„mit TigerTag+“*, wenn du Signaturen prüfst)
und zeige das Logo in deiner Oberfläche, deiner Dokumentation und deinem
Shop-Eintrag. Die meisten Produkte von Drittanbietern gehören hierher, und dem
Protokoll wird ihnen gegenüber nichts vorenthalten.

**TigerTag Certified** ist die andere Stufe, und sie steht **allem offen, was ein
Dritter baut** – ein Gerät, eine Anwendung, Filament, ein Inlay, ein Carrier –, das
ein **Audit gegen die Anforderungen besteht**. Sie wird gewährt, nicht beansprucht:
schriftliche Genehmigung, ein Eintrag im Zertifizierungsregister und das Recht, die
Marke **auf dem Produkt, dem Chip und der Verpackung** zu führen. Es gibt sie in zwei
Bereichen, **TigerTag Certified** und **TigerTag+ Certified**, wobei der zweite
Produkte abdeckt, deren Umgang mit signierten Tags geprüft wurde.

Der Unterschied zwischen den Stufen ist nicht, was dein Produkt *ist* – sondern ob es
jemand geprüft hat. Compatible sagt *„es funktioniert“*, auf dein Wort. Certified sagt
*„wir haben es getestet“*, auf unseres, und es kann entzogen werden. Vollständige
Kriterien:
[CERTIFICATION.md](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md).
Melde dich über die [GitHub-Organisation](https://github.com/TigerTag-Project).

**Wir sind ein Druckerhersteller – kann unsere Firmware TigerTag lesen?**
Ja – NTAG-/NDEF-Lesegeräte sind Standardhardware, die Spezifikation der Nutzdaten ist
öffentlich
([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)), und
das Hinzufügen des TigerTag-Lesens zu einer Firmware dauert **unter 3 Tagen**.

## Community

**Wo stelle ich Fragen oder bekomme Hilfe?**
Auf dem offiziellen **[Discord](https://discord.gg/3Qv5TSqnJH)** – Fragen, Hilfe,
Feedback, Show-and-tell. Für Fehler und technische Probleme funktionieren auch die
GitHub-Issues jedes Repos.

**Wie trage ich bei?**
Dokumentation: hier [CONTRIBUTING.md](../../CONTRIBUTING.md). Code: die jeweilige
Anleitung jedes Repos – siehe die [Repository-Übersicht](../developers/repositories.md).

**Alles ist kostenlos – wie unterstütze ich das Projekt?**
Kaufe die offiziellen Chips oder das TigerPOD-Kit, wenn du ohnehin etwas kaufen
wolltest; trage die [Kappe oder das Polo](https://tigersystem.io/goodies); korrigiere
eine Seite, übersetze eine, baue etwas Kompatibles; und frag deine Filamentmarke,
warum ihre Spulen nicht getaggt sind – Letzteres hat mehr bewirkt als alles andere.
Die vollständige Liste, einschließlich dessen, was du getrost ignorieren kannst, steht
unter [Das Projekt unterstützen](../support.md).

**Kann ich alles forken und etwas anderes bauen?**
Ja. MIT-/CC-lizenziert, bewusst forkbar – achte nur auf die
[Markenrichtlinie](../../TRADEMARK.md).

---

**◀ Zurück:** [Account-API](../developers/account-api.md) · **▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Roadmap](../roadmap/README.md)
