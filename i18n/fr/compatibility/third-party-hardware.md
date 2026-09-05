---
sourceHash: a05c4e52f6cae3704b4e16e2b3d1b6d55653145391a9bdd6f31630c6821c91ab
sourcePath: docs/compatibility/third-party-hardware.md
---

# Matériel tiers compatible

L'écosystème s'entend bien avec du matériel qu'il n'a pas fabriqué. Cette page
est la **liste évolutive** des appareils tiers qui se connectent, d'une manière
ou d'une autre — elle continuera de s'étoffer au fil du développement et à
mesure que d'autres makers y branchent leur matériel.

| Appareil | Fabricant | Ce qu'il fait | Compatible avec |
|---|---|---|---|
| Lecteur NFC **ACR122U** | ACS | Lecteur/graveur NFC USB — scannez une puce et la bobine s'ouvre toute seule ; écritures guidées, avec contrôle de l'UID. Deux d'entre eux animent un [TigerPOD](../products/tigerpod.md) | [Tiger Studio](../products/tiger-studio.md) |
| Analyseur de filament **TD-1** | [AJAX-3D](https://ajax-3d.com) | Montage DIY — mesure la **Transmission Distance** d'un filament (la valeur utilisée par HueForge / l'impression Full Spectrum) + la couleur (RGB, 1 à 3 emplacements, à titre indicatif) | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tigertag-connect.md) (USB-C) |
| Analyseur de filament **TD1s** | [AJAX-3D](https://ajax-3d.com) | Même famille d'appareils, pré-assemblé et prêt à l'emploi | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tigertag-connect.md) (USB-C) |
| Balances USB **DYMO série M** (M5, M10, M25…) | DYMO | Appareils USB standard « HID Scale » — le poids en direct dans le profil de la bobine ([détails du protocole](../products/tigerscale.md)) | [Tiger Studio](../products/tiger-studio.md) |
| **Toute balance USB conforme HID Scale** | indifférent | Même protocole standard que la série M de DYMO (page d'usage HID `0x8D`) — la marque n'a aucune importance | [Tiger Studio](../products/tiger-studio.md) |
| **Toute puce NTAG213/215/216 vierge** | indifférent | Le consommable lui-même — acheté n'importe où, il fonctionne à l'identique ([quelle puce ?](../../docs/faq/README.md)) | Tout |

|| | | |
|---|---|---|---|
| <img src="../assets/acr122u.jpg" alt="Le lecteur NFC USB ACR122U" /> | <img src="../assets/td1s-front.jpg" alt="L'analyseur de filament TD1s d'AJAX-3D" /> | <img src="../assets/dymo-usb-scale.png" alt="Une balance USB HID DYMO série M" /> | <img src="../assets/ntag-chip.png" alt="Une puce NFC NTAG nue — la bobine d'antenne visible" /> |

*Le lecteur ACR122U (deux d'entre eux vivent à l'intérieur de chaque
[TigerPOD](../products/tigerpod.md)) · le TD1s d'AJAX-3D · une balance USB DYMO
série M · la puce elle-même, antenne à nu.*

<img src="../assets/td1s-in-studio.jpg" width="100%" alt="Le TD1s intégré à Tiger Studio — la couleur mesurée et le TD alimentent le profil de la bobine" />

*Le TD1s à l'œuvre dans Tiger Studio.*

Les valeurs mesurées ne restent pas dans l'appareil : un TD ou un poids atterrit
dans le profil de la bobine et peut vivre **dans le protocole TigerTag
lui-même** — sur la puce, ou dans un fichier `.ttag`.

## Des lecteurs construits par d'autres

Certains makers construisent leurs propres lecteurs, qui parlent TigerTag
directement, sans aucun de nos logiciels dans la boucle. **BambuTagger**
([bambutagger.de](https://www.bambutagger.de/en/)) est un projet open source
allemand qui publie des lecteurs de bobines à base d'ESP32 — sources sur
GitHub, boîtiers imprimables, fichiers de PCB et firmware, le tout
gratuitement. Deux de ses appareils annoncent la prise en charge de TigerTag :

| Appareil | Ce que c'est | Ce qu'il fait avec TigerTag |
|---|---|---|
| **[BT-Touch](https://www.bambutagger.de/en/bt-touch)** | Un appareil sur batterie avec un écran tactile 5″ 800×480 — ESP32-S3 et un lecteur RC522 — qui stocke plus de 2000 puces en local | **Lit, clone et écrit** les TigerTag, aux côtés des puces Bambu Lab, Spoolease, OpenSpool et OpenTag3D |
| **[BT-AMS-C](https://www.bambutagger.de/en/bt-ams)** | Un lecteur à quatre emplacements qui se monte sur un AMS Bambu Lab — ESP32 avec 4× RC522, écrans OLED et TFT, LED adressables. Il affiche l'état des slots de l'AMS en direct et **envoie les données des puces à l'imprimante / au BMCU** | Lit les cinq mêmes familles de puces, une par emplacement |

Deux points sur lesquels il faut être précis.

**Ce sont des produits compatibles, pas certifiés.** Un tiers peut dire
*« compatible with TigerTag »* librement, sans demander l'autorisation à
personne — c'est exactement de cela qu'il s'agit, et c'est tout l'intérêt d'un
format ouvert. Ce n'est pas *certifié* : la certification est un audit que
TigerSystem accorde, et aucun de ces deux appareils n'y est passé. La
différence est expliquée dans
[la politique de marque](../../TRADEMARK.md).

**Cloner une puce n'est pas une faille du format.** Une TigerTag standard ne
porte aucune authentification et n'est jamais verrouillée en écriture : la
copier est attendu — c'est la même propriété qui vous permet de réécrire vos
propres puces. Ce qu'une copie ne peut pas porter, c'est une signature
[TigerTag+](../products/tigertag-plus.md) valide : une puce clonée échoue à la
vérification, sur le téléphone du client, hors ligne.

Que de tels appareils existent sans nous est la mesure du format : rien ne
nous a été demandé, aucune clé n'a été nécessaire, aucun accord n'a été signé.

## Votre matériel ici

Vous construisez ou connectez un appareil ? Le protocole est ouvert, les
[SDK](../developers/sdks.md) sont prêts, et **TigerTag Certified** existe pour
les intégrations vérifiées. Dites-le-nous sur le
[Discord](https://discord.gg/3Qv5TSqnJH) ou à
[tigertag@tigertag.io](mailto:tigertag@tigertag.io) — cette liste est faite pour
s'allonger.

---

**▲ [Index de la documentation](../../README.md)** · **Voir aussi :** [Compatibilité](./README.md), [Intégrations tierces (logiciels)](../developers/integrations.md), [Produits](../products/README.md)
