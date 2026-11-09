---
sourceHash: fa644ad426378c66b3be7c3a1a494a12ec2e25e0680b3cdfeb8ccffe9fb6ca28
sourcePath: docs/developers/ttag-format.md
---

# Das Dateiformat `.ttag`

Die **`.ttag`-Austauschdatei für den Bestand** ist ein portabler Offline-Schnappschuss
eines oder mehrerer Bestandsmaterialien. Sie ist die Einheit zum **Sichern** deiner
Filamente, zum **Mitnehmen** auf einem USB-Stick und zum **Teilen** – zwischen
Konten, zwischen Tools oder als fertige Marken-/Sortimentssammlungen.

Eingeführt in **Tiger Studio Manager v2.14.0** (Export + Import). Das Format ist
stabil und app-übergreifend: Tools von Drittanbietern, ein künftiger
Web-Playground, der `.ttag`-Dateien erzeugt, und vorbereitete Filamentsammlungen
bauen alle auf dieser Spezifikation auf.

## Aufbau der Datei

Eine `.ttag`-Datei ist ein einzelnes **UTF-8-JSON**-Dokument:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "<owner uid>",
 "records": [ /* inventory documents, verbatim */ ],
 "rfidBackups": { "<chipUid>": { /* signed factory dump */ } }
}
```

| Feld | Bedeutung |
|---|---|
| `format` / `kind` | Immer `"tigertag"` / `"ttag"` – das Kennungspaar, das beim Import geprüft wird |
| `version` | Formatversion; derzeit `1` |
| `exportedAt` | Exportzeitpunkt, **ISO-8601-String** (z. B. `"2026-07-24T00:00:00.000Z"`) |
| `exportedBy` | UID des exportierenden Besitzers – **nur ein UX-Hinweis zur Wahl des Importmodus, nie eine Sicherheitsgrenze** |
| `records[]` | Bestandsdokumente, **wortgetreu** übernommen |
| `rfidBackups` | *Optional.* Nach Chip-UID geordnet; nur bei TigerTag+-Spulen (zertifiziert) vorhanden – der signierte Werks-Dump zur Wiederherstellung des Chips |

**`records[]` sind die Firestore-Bestandsdokumente, wortgetreu** – genau
`users/{uid}/inventory/{spoolId}`, wie im
[maßgeblichen Datenmodell](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration/blob/main/docs/03-data-model.md)
dokumentiert (nutze es als Felderverzeichnis). Drei Nuancen:

- **Felder sind spärlich** – ein Feld wird nur geschrieben, wenn es im Dokument
 vorhanden ist: `twin_tag_uid` nur bei Zwillingen, `rfidBackup: true` nur bei
 TigerTag+, `id_product` nur, wenn bekannt, und so weiter.
- **URL-Felder sind vom Angreifer kontrolliert** – `LinkTDS`, `LinkMSDS`,
 `LinkYoutube`, `LinkREACH`, `LinkROHS`, `LinkFOOD` und `url_img*` werden beim
 Import bereinigt: Jedes Schema außer http(s) wird verworfen.
- **Die Rack-Platzierung wird mitgeführt, aber nicht angewendet** – `rack`,
 `rack_id`, `level`, `position` können in der Datei vorkommen, sind beim Import
 aber ohne Bedeutung (eine importierte Spule erbt nicht das Rack des Exporteurs).

### Pflicht- und optionale Felder

Auf **Dateiebene**:

| Feld | Status |
|---|---|
| `format` = `"tigertag"`, `kind` = `"ttag"`, `version` ≤ 1 | **Pflicht** – fehlend oder abweichend = die Datei wird abgelehnt |
| `records[]`, nicht leer | **Pflicht** – eine leere Datei wird abgelehnt |
| `exportedAt`, `exportedBy` | Informativ (`exportedBy` ist nur ein UX-Hinweis) |
| `rfidBackups` | Optional – nur vorhanden, wenn TigerTag+-Spulen enthalten sind |

Auf **Datensatzebene**:

| Kategorie | Felder |
|---|---|
| **Pflicht** | `uid` (`TigerData_<id>` oder Chip-UID) · **`id_brand`** |
| Kernidentität (in jedem wohlgeformten Datensatz vorhanden) | `id_material`, `id_type`, `id_aspect1`, `id_tigertag` – aufgelöst gegen die gemeinsame Referenzdatenbank |
| Menge | Normalisiert aus `measure` + `id_unit`: **`measure_gr` in Gramm für Feststoffe** (z. B. `measure: 1` + kg → `measure_gr: 1000`) und **`measure_ml` in Millilitern für Flüssigkeiten** (Harze). Generatoren dürfen `measure` + `id_unit` liefern; der normalisierte Wert ist der kanonisch gespeicherte |
| Häufig optional | Farbfelder (`color_r/g/b`, `online_color_list` …), `weight_available`, `container_id` / `container_weight`, Anzeigetexte (`material`, `series`, `color_name`), `TD`, `tags`, `sku` / `barcode`, `Link*`, `url_img*` |
| Bedingt | `twin_tag_uid` (nur Zwillinge – innerhalb der Datei gegenseitig) · `tag_index` / `tag_count` (nur chipbasierte Datensätze – Chip *i* von *n*, gelesen aus Chip-Byte +39, TigerTag-Protokoll v2.2; je ein Nibble, `0` = unbekannt; nie bei einem chiplosen Datensatz) · `rfidBackup: true` **plus** ein passender Eintrag in `rfidBackups` (nur TigerTag+) · `id_product` (nur bekannte Katalogprodukte) |
| Mitgeführt, beim Import aber ignoriert | `rack`, `rack_id`, `level`, `position` |

Für jeden hier nicht abgedeckten Randfall ist der **Importer von Tiger Studio die
Referenzimplementierung** – Generatoren von Drittanbietern sollten Datensätze
anstreben, die ein Standard-Studio akzeptiert.

In das Format eingebaute Regeln:

- **Zwei Zeitstempel-Konventionen, mit Absicht.** Das Wurzelfeld `exportedAt` ist
 ein **ISO-8601-String**. Zeitstempel *innerhalb* von `records[]` (`updatedAt` und
 die älteren Varianten `updated_at` / `last_update`) sind **Epoch-ms-Zahlen** –
 Firestore-Timestamps werden vom Serialisierer umgewandelt, damit die Datei sauber
 serialisiert. „Korrigiere“ nicht das eine auf das andere: Dateien im Umlauf
 tragen diese Form bereits.
- **Zwillinge sind atomar.** Ein Zwillingsmaterial exportiert immer **beide**
 Seiten – ein Material → zwei Datensätze, verbunden über `twin_tag_uid`. Ein
 halber Zwilling wird nie erzeugt.
- **ID-Disziplin.** Nur chiplose IDs der Form `TigerData_<id>` dürfen vorkommen;
 eine ältere ID `CLOUD_<id>` wird beim Export abgelehnt.

### Behälter (`container_id`, `container_weight`)

`container_id` benennt die leere Spule, auf der das Filament sitzt.
`container_weight` ist das Gewicht dieser leeren Spule in Gramm: die Tara, die
eine Waage abzieht, damit das Inventar Netto-Filament zeigt.

Die IDs sind Zeichenketten aus einer festen Liste, die mit Tiger Studio
ausgeliefert wird: [`data/container_spool/spools_filament.json`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/data/container_spool/spools_filament.json).
Jeder Eintrag trägt die Marke, zu der er gehört (`brandId`, dieselbe Zahl wie
`id_brand`), und ein Katalog-Gewicht. Die meisten sind die eigene Spule einer
Marke — `bambu_grey` (249 g), `esun_masterspool_2_0` (210 g),
`polymaker_cardboard` (170 g) — und drei sind generisch, für eine Marke, deren
Spule noch nicht in der Liste steht:

| `container_id` | Anzeige in Tiger Studio | Katalog-Gewicht |
|---|---|---|
| `custom_cardboard` | Generic · Cardboard | 165 g |
| `custom_plastic` | Generic · Plastic | 200 g |
| `custom_no_masterspool` | Generic · Refill — Without MasterSpool | **0 g** |

`custom_no_masterspool` zieht nichts ab. Richtig ist es für ein Refill, das
ohne Spule gewogen wird, und überall sonst falsch: Eine Spule mit diesem
Behälter zeigt ihr Bruttogewicht, rund 200 g mehr als das verbleibende
Filament.

`container_weight` ist eine **Momentaufnahme** vom Zeitpunkt der Auswahl, kein
Nachschlagen. Ein Datensatz behält seinen Wert, wenn sich die Liste ändert, und
ein Konto kann das Gewicht eines Behälters für seine eigenen Spulen korrigieren
(gespeichert in `users/{uid}/containerOverrides/{id}`; die gemeinsame Liste
wird nie verändert).

Ein Generator, der die leere Spule kennt, schreibt beide Felder. Einer, der sie
nicht kennt, lässt sie weg, statt zu raten: Tiger Studio setzt dann den
markeneigenen Behälter oder fragt nach, wenn es mehrere oder keinen gibt.

## Medientyp

Der kanonische Medientyp ist **`application/vnd.tigertag.ttag+json`** – er zählt
dort, wo eine `.ttag` **über http(s) ausgeliefert** wird (der `Content-Type`, den
ein Web-Playground, ein CDN oder ein Host für Markensammlungen senden sollte).
`application/json` wird ebenfalls akzeptiert. Eine Datei auf der Platte trägt kein
MIME – sie wird an ihrer Endung `.ttag` und maßgeblich an ihrem Inhalt erkannt:
Importer **validieren nach Inhalt** (`format`/`kind`/`version`), nie allein nach
MIME-Header oder Dateiendung.

## Verfügbarkeit

Export und Import sind ab **Tiger Studio v2.14.0+** enthalten. Das Format ist auf
Portabilität ausgelegt; andere Oberflächen können es mit der Zeit übernehmen –
heute ist Studio die Referenzimplementierung.

## Was eine `.ttag` tragen kann

Alle drei [Spulenstufen](../concepts/universal-filament-identity.md) werden
exportiert und importiert:

| Stufe | In der Datei |
|---|---|
| **TigerData** (rein digital, kein Chip) | Der Datensatz selbst |
| **TigerTag** (ein beschriebener Chip) | Der Datensatz selbst |
| **TigerTag+** (zertifizierter Chip) | Der Datensatz **plus** sein signierter Werks-Dump in `rfidBackups` |

## Export

- **Einzelne Spule** – über die Werkzeugleiste der Spulendetails → eine Datei mit
 dem Namen `brand-material-color.ttag`.
- **Mehrfachauswahl** – mehrere Spulen auswählen, Schaltfläche **Export** der
 Werkzeugleiste → eine Datei mit dem Namen `tigertag-selection-<date>.ttag`.
- Der Export ist **nur für den eigenen Bestand des Nutzers** verfügbar.

## Import – validieren → Vorschau → übernehmen

Der Importer akzeptiert **mehrere `.ttag`-Dateien gleichzeitig**: durchsuchen,
einen http(s)-Link einfügen oder per Drag-and-drop an eine beliebige Stelle im
Fenster ziehen.

1. **Validieren.** Jede Datei muss das Paar `format`/`kind` und
 `version ≤ 1` tragen. Eine Datei, die keine `.ttag` ist, eine neuere Version
 oder eine leere Datei wird abgelehnt. Jeder **Datensatz** muss dann die
 vollständigen Chip-Nutzdaten tragen – siehe *Pflichtfelder* unten.
2. **Bereinigen.** Dateiinhalt ist nicht vertrauenswürdige Eingabe: URL-Felder
 ohne http(s) werden verworfen; Farb-, Gewichts- und TD-Werte werden auf gültige
 Bereiche begrenzt.
3. **Vorschau.** Jedes Material wird in einer Vorschautabelle mit einem
 **Einbeziehen-Kontrollkästchen** pro Material gezeigt.
4. **Übernehmen** in einem von zwei Modi – anhand von `exportedBy` vorgewählt,
 frei umschaltbar:

|| **Wiederherstellen** | **Importieren** |
|---|---|---|
| Absicht | Dasselbe Konto / eine echte Wiederherstellung | Materialien eines anderen übernehmen |
| Datensatz-IDs | Behalten – **wortgetreu** unter den ursprünglichen IDs geschrieben | **Neue** IDs – jeder Datensatz wird zu einer frischen chiplosen `TigerData_`-Spule im Besitz des Importierenden |
| Chip-Status | Behalten – jedes Backup aus `rfidList` wird wiederhergestellt | Verworfen – die Kopie ist chiplos: `id_tigertag` entfällt, `rfidBackup:false`, Backups werden verworfen (ein signierter Dump ist an einen Chip gebunden, den der Importierende nicht besitzt) |
| Produkt | Behalten | **Behalten**, wenn `id_product` eine echte Katalog-ID ist (nicht `0`, nicht `0xFFFFFFFF`), sodass ein TigerData+ ein TigerData+ bleibt und ein TigerTag+ als TigerData+ desselben Produkts ankommt; alles andere wird auf `0xFFFFFFFF` (nicht gesetzt) gesetzt. Vor Tiger Studio v2.51.1 war es immer nicht gesetzt, sodass ein TigerData+ als einfaches TigerData ankam |
| Gewicht | Wie aufgezeichnet | Auf die volle Kapazität zurückgesetzt |
| Zwillinge | Wie aufgezeichnet | `twin_tag_uid` über die neuen IDs neu zugeordnet |

### Pflichtfelder – ein Datensatz muss einen Chip erzeugen können

Eine `.ttag` gibt es, um **TigerTag-/TigerTag+-Chips zu erzeugen**. Ein Datensatz,
der keinen erzeugen kann, ist kein Teildatensatz, sondern ein unbrauchbarer – daher
weist der Importer ihn seit Tiger Studio **2.15.0** rundheraus ab, statt eine Spule
zu importieren, die gut aussieht und stillschweigend falsch ist.

Ein Datensatz wird nur akzeptiert, wenn er **`uid` plus diese 24 numerischen
Felder** trägt, jedes vorhanden und endlich (`null` und `""` zählen **nicht** als
vorhanden – Vorsicht, `Number(null)` ist `0`):

| Gruppe | Felder |
|---|---|
| Identitäts-IDs | `id_brand`, `id_material`, `id_type`, `id_aspect1`, `id_aspect2`, `id_diameter`, `id_measure_unit`, `id_version`, `id_product` |
| Menge | `measure` |
| Farbe | `color_r`, `color_g`, `color_b`, `color_a` |
| Nutzdaten je Typ | `data1` … `data7` |
| Stempel | `timestamp` |

Dazu **`id_tigertag`, aber nur, wenn der Datensatz einen Chip hat.** Dieses Feld
benennt die Version des Chips in `id_version.json`, wo genau vier Werte zulässig
sind – `0` RFID Empty, `1542820452` TigerTag, `1816240865` TigerTag Init,
`3155151767` TigerTag+. Ein chiploser Datensatz (`uid` beginnt mit `TigerData_`
oder dem älteren `CLOUD_`) hat keinen Chip und daher keine Version, also **darf er
das Feld gar nicht tragen**; es wird zum ersten Mal geschrieben, wenn ein echter
Chip programmiert wird. Erfinde nie einen Wert dafür, und löse nie einen auf, ohne
zu prüfen, dass der Datensatz einen Chip hat.

Alles andere in einem Datensatz – Namen, Bilder, Preis, Notizen, Rack-Position –
ist **Anreicherung**: schön mitzuführen, nie erforderlich.

**Ein Material ist atomar.** Ein Zwillingspaar besteht nur, wenn *beide* seiner
Datensätze bestehen; ein halb gültiger Zwilling wird ganz abgewiesen, weil der
Import einer Seite eines Paars eine Spule erzeugen würde, deren Partner nie
geschrieben werden kann.

**Ablehnungen werden gezählt und angezeigt, nie stillschweigend.** Die Vorschau
meldet, wie viele Materialien abgewiesen wurden, sodass ein fehlerhafter Export
sichtbar ist, statt unbemerkt die Hälfte seines Inhalts zu verlieren. Wer
`.ttag`-Dateien schreibt, sollte vor der Auslieferung an Nutzer gegen diese Liste
validieren.

## Vollständiges Beispiel

Ein getreuer, anonymisierter Export einer Mehrfachauswahl – ein TigerData, ein
Zwillingspaar (gegenseitiges `twin_tag_uid`), ein TigerTag+, dessen Chip-Inhalt
gesichert ist:

```json
{
 "format": "tigertag",
 "kind": "ttag",
 "version": 1,
 "exportedAt": "2026-07-24T00:00:00.000Z",
 "exportedBy": "AbCdEf0123456789GhIjKlMnOpQr",
 "records": [
  {
   "uid": "TigerData_9F3A2B1C",
   "id_brand": 12, "id_material": 3, "id_type": 1,
   "id_aspect1": 2, "id_aspect2": 0, "id_tigertag": 74213,
   "material": "PLA Basic", "color_name": "Sky Blue",
   "color_r": 88, "color_g": 170, "color_b": 220,
   "online_color_list": "58AADC", "online_color_type": 1,
   "measure_gr": 1000, "weight_available": 640,
   "container_id": "custom_plastic", "container_weight": 200,
   "TD": 0, "tags": ["desk", "prototyping"],
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04A1B2C3D4E5F6",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55010,
   "material": "PLA Silk", "color_name": "Gold",
   "color_r": 212, "color_g": 175, "color_b": 55,
   "online_color_list": "D4AF37",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04F6E5D4C3B2A1", "tag_index": 1, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04F6E5D4C3B2A1",
   "id_brand": 5, "id_material": 3, "id_type": 1,
   "id_aspect1": 4, "id_tigertag": 55011,
   "material": "PLA Silk", "color_name": "Emerald",
   "color_r": 0, "color_g": 130, "color_b": 90,
   "online_color_list": "00825A",
   "measure_gr": 1000, "weight_available": 500,
   "container_id": "custom_plastic", "container_weight": 200,
   "twin_tag_uid": "04A1B2C3D4E5F6", "tag_index": 2, "tag_count": 2,
   "rfidBackup": false, "updatedAt": 1769212800000
  },
  {
   "uid": "04112233445566",
   "id_brand": 5, "id_material": 8, "id_type": 1,
   "id_aspect1": 2, "id_tigertag": 90887, "id_product": 4412,
   "material": "PETG HF Basic", "series": "Hyper PETG",
   "color_name": "Green",
   "color_r": 0, "color_g": 160, "color_b": 70,
   "online_color_list": "00A046",
   "measure_gr": 1000, "weight_available": 480,
   "container_id": "custom_plastic", "container_weight": 200, "TD": 6,
   "LinkTDS": "https://example-brand.example/tds/petg-hf-basic.pdf",
   "sku": "RFHPPETG175GN1",
   "rfidBackup": true, "updatedAt": 1769212800000
  }
 ],
 "rfidBackups": {
  "04112233445566": {
   "firstSeen": 1767139200000,
   "backup": "0411223344556680048000000000E110122F0300FE0000A5A5C0FFEE112233445566778899…"
  }
 }
}
```

Das Beispiel gelesen: Der erste Datensatz ist chiplos (eine ID `TigerData_`); die
nächsten zwei sind ein Zwillingspaar – gleiches Material, gegenseitiges
`twin_tag_uid`, immer zusammen exportiert; der letzte ist ein TigerTag+
(`rfidBackup: true`), dessen signierter Werks-Dump unter seiner Chip-UID in
`rfidBackups` liegt.

## Sicherheits-/Vertrauensmodell

Eine `.ttag`-Datei ist **nicht vertrauenswürdige Eingabe**. Jeder Datensatz wird
beim Import bereinigt (siehe oben). `exportedBy` wählt im UI nur den Modus vor – die
echte Autorisierungsgrenze sind die **Firestore Security Rules**. Behandle den
Dateiinhalt nie als maßgeblich für Identität oder Eigentum.

---

**▲ [Dokumentationsindex](../../README.md)** · **Siehe auch:** [Universelle Filament-Identität](../concepts/universal-filament-identity.md), [Bestand & Cloud-Sync](../concepts/inventory-and-cloud-sync.md), [Entwicklerübersicht](./README.md)
