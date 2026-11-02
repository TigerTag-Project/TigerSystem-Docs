---
sourceHash: 41cc4260975408514f69a1b2d61294c1a71723db05cddb913c0f599e1dade5b0
sourcePath: docs/vision/why-tigersystem.md
---

# Warum es TigerSystem gibt

## Das Problem

Eine Filamentspule ist das am häufigsten angefasste Objekt im 3D-Druck – und das am
wenigsten intelligente. Ist das Etikett erst weg, kann dir eine Spule nicht sagen:

- welches Material und welche Farbe sie hat,
- wie sie gedruckt werden sollte,
- wie viel Filament noch übrig ist,
- wo sie in deinem Regal liegt,
- wem sie gehört.

Die Druckerhersteller haben begonnen, das mit RFID-Tags zu beheben – **aber jeder
behebt es nur innerhalb seiner eigenen Mauern.** Ein Bambu-Lab-Tag bedeutet einem
Creality-Drucker nichts; ein Anycubic-Tag bedeutet niemandem sonst etwas. Die Daten
gehören dem Ökosystem des Herstellers, nicht der Person, die das Filament gekauft hat.

## Die Antwort

**TigerSystem** ist ein offenes Ökosystem, das auf einer Idee beruht:

> **Die Identität der Spule gehört ihrem Besitzer – nicht einer Druckermarke.**

**Wir haben Filamentspulen intelligent gemacht.** Sie wissen, was sie sind – und sie
können es jedem sagen, ganz ohne Reibung. Der Anspruch: **für 3D-Druck-Materialien das
werden, was der Barcode für das Regal geworden ist.**

Jede Spule trägt einen [TigerTag](../products/tigertag.md)-NFC-Chip mit ihrem
vollständigen Profil – Marke, Material, Farbe, Durchmesser, Druckeinstellungen. Jedes kompatible
Lesegerät – ein Smartphone, ein Desktop-Lesegerät, ein Drucker – kann ihn lesen.
Eine einzige gemeinsame Online-Datenbank ([schlichtes Firebase](../concepts/inventory-and-cloud-sync.md))
hält Konto, Bestand, Verlauf und Freigaben des Besitzers auf allen Geräten synchron.

## Was „nutzerzentriert“ in der Praxis heißt

| Druckerzentriertes Ökosystem | TigerSystem |
|---|---|
| Tag nur von den Druckern einer Marke lesbar | Tag von jedem NFC-Gerät lesbar |
| Datenformat geheim oder verschlüsselt | Format offen und dokumentiert |
| Bestand liegt in der App des Herstellers | Bestand liegt in **deinem** Konto |
| Funktioniert nur mit dem Filament des Herstellers | Funktioniert mit **jeder** Filamentmarke |
| Stirbt mit der Cloud des Herstellers | Offene SDKs, offene Spezifikation, selbst baubar |

## Die Geschichte hinter der Sandbox

Sie begann **2023, direkt nach der Formnext**. Bambu Lab hatte die Ära der
proprietären Spulen-Tags eingeläutet; in jenem Jahr folgten Creality und Anycubic und
brachten Drucker mit RFID/NFC-Lesegeräten auf den Markt – jeweils mit einem eigenen, gesperrten,
proprietären Chip. Wir entschieden, dass sich die Branche so nicht einpendeln darf: Es musste ein
Format geben, das **quelloffen, neutral, plattformübergreifend und
nutzerzentriert** ist. Und es durfte kein Manifest sein – es musste eine
**tragfähige, leistungsfähigere Alternative** zu dem sein, was die Druckerhersteller anbieten,
übergeben an Filamenthersteller von Drittanbietern, damit ihre Spulen *mehr* können als die
proprietären und ihr Marktanteil nicht gegenüber gebundenem Filament schwindet.

Also machten wir uns an die Arbeit – und reisten nach China. Wir stellten das Projekt Druckerherstellern
vor – Bambu Lab (Dr. Tao, dem CEO), Elegoo, Creality, Anycubic
und Biqu / BigTreeTech (auch dort trafen wir den CEO) – sowie
Filamentherstellern und Ausrüstern (eSun, R3D, Landu, Sunlu, Jamg He),
nachdem wir es in Europa bereits Rosa3D vorgestellt hatten. Der Empfang war herzlich.
Wir entwarfen ein Protokoll, das **optimierter und vielseitiger** war als
die proprietären – nutzerzentriert, herstellerübergreifend, plattformübergreifend. Wir studierten die
Abläufe in Filamentfabriken, um zu verstehen, wie man NFC-Chips im industriellen Maßstab
programmiert, und organisierten die Chipproduktion – eigene Etiketten, eigene
Träger, riesige Stückzahlen – zu Kosten, die niedrig genug sind für ein unverhandelbares Ziel:
**die Technologie hinzufügen, ohne den Spulenpreis für den
Endnutzer auch nur um einen Cent zu erhöhen.**

Im **September 2024** lief die Massenproduktion der Chips, und die Fabriken
wurden beliefert – zuerst entstand das gesamte Ökosystem auf der Fabrikseite. Zu diesem
Zeitpunkt gab es **weder eine mobile App noch eine Desktop-App**; sie kamen
danach. Zuerst mobil, denn dafür muss man nichts kaufen: Das Lesegerät steckt
schon in jeder Hosentasche.

Diese Entscheidung geht auf eine Frage zurück, die wir in China immer wieder stellten: *„Wo sind die
RFID-Lesegeräte?“* Alle antworteten: *„In den Bambu Labs.“* Und wir sagten: falsch.
Bei Bambu Lab sitzen die Lesegeräte **im AMS, nicht im Drucker** – eine
Spule eines Drittanbieters kann die Maschine gar nicht erkennen. **Die RFID-Lesegeräte
stecken in euren Taschen.** In jedem Smartphone, einsatzbereit – ohne dass ihr es
überhaupt wisst.

Ehrlich gesagt: All das selbst zu bauen, war nie der ursprüngliche Plan. **Über
2,5 Millionen TigerTag-NFC-Chips wurden produziert – damit ist TigerTag das
am weitesten verbreitete RFID-Protokoll eines Drittanbieters weltweit** –, die meisten davon
ab Werk von Filamentmarken von Drittanbietern integriert (Rosa3D, eSun,
Sunlu, Landu, Jamg He, R3D – mit Filforme, Nanovia und weiteren in der
Integration), dazu ein kleinerer Anteil,
den Maker kaufen, um Spulen zu Hause zu taggen. Wir gingen naiv davon aus, dass die Community
die Anwendungen von selbst erfinden würde: Eine offene, dokumentierte NFC-Identität auf jeder
Spule schien ein offensichtlicher Spielplatz zu sein.

Es geschah nicht. Trotz des Ausmaßes der Verbreitung griff keine Community das
Thema auf; niemand hielt es für lohnend, Integrationen rund um das Protokoll zu bauen.
Wir hofften, andere würden es übernehmen – taten sie nicht. Also taten wir es, obwohl es
nicht unser ursprüngliches Ziel war: Wir begannen, uns **die Anwendungen selbst auszumalen**, um
das Potenzial eines **quelloffenen NFC-Protokolls zur Materialidentifikation, das
auf den Nutzer statt auf den Drucker ausgerichtet ist**, zu zeigen – und funktionierende
Beispiele zu hinterlassen für alle, die den Faden schließlich aufnehmen.

Und es beginnt zu passieren:
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) liest TigerTags,
[Spooly Tracker](https://spoolytracker.com/) hat seine Spulenerkennung darauf aufgebaut,
und die
[erweiterte Community-Firmware](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
des Snapmaker U1 liest sie **nativ im Drucker selbst** – siehe
[Integrationen von Drittanbietern](../developers/integrations.md).

## Eine Sandbox, mit Absicht

Die **nutzerseitige Seite** von TigerSystem ist bewusst eine **Sandbox**. Jede
App und jedes Gerät, das wir für Endnutzer bauen – Tiger Studio, Tiger NFC Connect,
TigerScale, TigerPOD und kommende Projekte – hat keinen anderen Anspruch, als das
**Potenzial zu zeigen**: Jedes ist ein funktionierender **Proof of Concept** dessen, was ein
**quelloffenes, standardisiertes, herstellerunabhängiges, plattformübergreifendes Protokoll** wie TigerTag
möglich macht, vom Wochenend-Skript bis zum fertigen Produkt. Jeder kann sich von unserer
Integrationsarbeit inspirieren lassen und sich **die Funktionen von
morgen ausmalen**. Es sind Beispiele zum Nachbauen, keine Plattform, der man beitritt.

Die **Fabrikseite ist keine Sandbox.** Hinter den 2,5 Millionen Chips läuft eine
Werkzeugkette auf Industrieniveau – [TigerTag Factory &
Manager](../products/factory-suite.md): Verwaltung der Filamentdatenbank und
NFC/RFID-Massenprogrammierung mit Liniengeschwindigkeit, mit einer Fabriksignatur, die die Herkunft jedes
Produkts belegt – im **Produktivbetrieb** bei Partner-Filamentfabriken.
Die Sandbox ist der Showroom; die Produktionslinie ist kein Experiment.

## Neutral von Grund auf

TigerTag ergreift keine Partei zwischen Filamentmarken, Druckerherstellern oder Händlern.
Es ist kein geschlossener Garten mit Partnerliste – es ist ein **Format, das jeder lesen
und schreiben kann**.

Diese Neutralität erstreckt sich auf die Chips selbst: Die meisten Endnutzer kaufen **günstige,
markenlose NTAG-Chips** bei Amazon, AliExpress oder lokal – und das ist
ausdrücklich in Ordnung. Nichts blockiert sie; das Protokoll funktioniert identisch.
Offizielle Chips mit TigerTag-Marke helfen, die Entwicklung zu finanzieren, sind aber nicht
nötig: **Dass das Protokoll in den Wohnungen und Büros der Nutzer lebt, ist die erste
Belohnung.**

Nicht einmal das Protokoll selbst wird aufgezwungen: Die Chips werden **entsperrt** ausgeliefert, sodass ein Nutzer,
der ein anderes NFC/RFID-Format bevorzugt – bestehend oder eigenes – den
Chip neu beschreiben und umsteigen kann. TigerTag ist das Basisformat, mit dem Spulen ankommen, kein
Format, an das man gebunden ist. Nichts im Ökosystem ist Voraussetzung: Lies die Chip-Spezifikation,
nimm ein SDK zur Hand und baue die Software oder das Geschäft, das du wirklich willst.

## Das Manifest

> *„Für Maker gemacht. Offen für alle. Aus der Community entstanden, gibt TigerTag
> den Nutzern echte Daten und völlige Freiheit. Zu 100 % Open Source verbindet es dein
> Material, deine Drucker und Marken heute und morgen in einer universellen Sprache.
> Schließ dich der Bewegung an. Verbinde deine Welt mit TigerTag.“*
>
> — **Benoit Michaut**, CEO & Gründer · Vision: **Cheap & Reusable** („günstig und wiederverwendbar“)

---

**▲ [Dokumentationsindex](../../README.md)** · **Weiter ▶** [Nutzerzentriertes Ökosystem](../philosophy/user-centric-ecosystem.md) · **Die Menschen dahinter:** [Das Team](./team.md)

**Siehe auch:** [Philosophie des offenen Ökosystems](../philosophy/open-ecosystem.md), [Universelle Filamentidentität](../concepts/universal-filament-identity.md)
