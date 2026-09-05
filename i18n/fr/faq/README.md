---
sourceHash: 074d3af9ccc9f5bfc0ccad2932bd671b6b1fcbdff2f8e8869ec9382b4ce02266
sourcePath: docs/faq/README.md
---

# FAQ

## Généralités

**Qu'est-ce que TigerSystem ?**
Un écosystème ouvert pour l'impression 3D, bâti autour d'une idée : l'identité
d'une bobine de filament appartient à son propriétaire, pas à une marque
d'imprimante. Voir
[Pourquoi TigerSystem existe](../vision/why-tigersystem.md).

**Dois-je acheter quelque chose pour commencer ?**
Non. N'importe quel smartphone NFC lit les puces TigerTag, les applications
sont gratuites et l'application de bureau est open source. Les puces sont le
seul consommable.

**Est-ce lié à une marque de filament ou d'imprimante ?**
Non — la neutralité est une règle de conception. N'importe quel filament,
n'importe quelle imprimante, aucune liste de partenaires.

**Ces applications sont-elles LE produit ?**
Non — le côté **utilisateur** est délibérément un **bac à sable**. Chaque
application et chaque appareil que nous créons pour les utilisateurs finaux
(Tiger Studio, Tiger NFC Connect, TigerScale, TigerPOD, et les projets à
venir) est une **preuve de concept** qui fonctionne : son seul but est de
montrer le potentiel d'un protocole open source, standard, agnostique et
multiplateforme, et d'inspirer d'autres personnes à imaginer les
fonctionnalités de demain. Utilisez-les, forkez-les, ou construisez les
vôtres à la place. Le **côté usine**, en revanche, est de qualité
industrielle : une chaîne d'outils industrielle programme les puces à la
cadence de la ligne de production chez les usines partenaires — cette
partie-là n'a rien d'une expérimentation. Voir
[Un bac à sable, volontairement](../vision/why-tigersystem.md).

**Pourquoi construisez-vous tous ces démonstrateurs vous-mêmes ?**
Parce que personne d'autre ne l'a fait. Plus de 2,5 millions de puces TigerTag
ont été produites et sont livrées dans des bobines de filament, et nous
pensions que la communauté inventerait d'elle-même des usages pour une
identité NFC ouverte — cela n'est pas arrivé. Construire les démonstrateurs
n'a jamais été l'objectif initial ; c'est devenu nécessaire pour montrer ce
que le protocole rend possible. L'histoire complète :
[L'histoire derrière le bac à sable](../vision/why-tigersystem.md).

## TigerTag (les puces)

**Quelle puce est un TigerTag ?**
Une puce NFC NTAG standard qui porte une charge utile ouverte de 144 octets —
marque, matière, couleur, diamètre, réglages d'impression. Aucune clé, aucun
chiffrement sur les données.
Voir [La puce TigerTag](../concepts/tigertag-chip.md).

**Puis-je réécrire une puce ?**
Oui — les puces sont réinscriptibles, et c'est tout l'intérêt du
[flux Seconde Vie](../philosophy/second-life.md) : rechargez ou réaffectez une
bobine et réencodez sa puce.

**Qu'est-ce que TigerTag+ ?**
Un TigerTag qui sait exactement *quel produit* il est. Au lieu de valeurs
saisies par quelqu'un, il porte un **identifiant produit issu du catalogue
officiel** — marque, couleur, matière, températures, diamètre, SKU, EAN —
auquel s'ajoutent des métadonnées d'enrichissement facultatives qui peuvent
s'améliorer après l'écriture de la puce. La puce reste **100 % hors ligne** :
tout ce qu'il faut pour imprimer s'y trouve toujours. Le `+` signifie
*identifié*, pas *certifié*.

**Et TigerTag+ Certified ?**
Un TigerTag+ qui porte en plus une **signature** cryptographique, écrite par un
fabricant qui détient la certification et ses outils de signature. N'importe
qui peut **vérifier** une signature — gratuitement, hors ligne, sur son propre
téléphone — mais seul un fabricant certifié peut en **émettre** une, si bien
qu'un tag cloné échoue au contrôle. Voir
[TigerTag+](../products/tigertag-plus.md).

**Puis-je sauvegarder une puce dans mon compte ?**
Oui, et c'est une fonctionnalité distincte du `+`. Tiger Studio peut
enregistrer le contenu exact d'une puce, associé à son UID physique, et le
reprogrammer plus tard — utile si une puce est réécrite ou corrompue, et
valable **sur la puce d'origine uniquement**. Disposer d'une sauvegarde ne
transforme pas une puce en TigerTag+.

**Où acheter des puces ?**
Deux réponses également valables. Les puces officielles de marque TigerTag sont
sur **[tigertag.io](https://tigertag.io)** et chez les distributeurs officiels
(actuellement [Atome3D](https://atome3d.com), d'autres arrivent bientôt) — les
acheter aide à financer la R&D. Mais **n'importe quelle puce NTAG vierge et bon
marché** venue d'Amazon, d'AliExpress ou de votre boutique locale fonctionne à
l'identique, et c'est délibéré : rien n'est bloqué, c'est le protocole qui
compte.

**Les puces que j'achète arrivent-elles avec des données dessus ?**
Non — **les puces vendues seules sont livrées vierges**, qu'elles portent le
logo TigerTag ou non. Vous écrivez vous-même l'identité du filament, dans
[Tiger NFC Connect](../products/tigertag-connect.md) ou
[Tiger Studio](../products/tiger-studio.md) ; cela prend environ une minute la
première fois. Les puces qui arrivent **déjà encodées** sont celles intégrées
à l'usine, à l'intérieur du filament des marques partenaires. Acheter une puce
et acheter du filament tagué sont deux choses différentes.

**Quelle forme acheter — autocollant ou support pour recharge ?**
Deux formats, pour deux situations. L'**autocollant individuel** se pose sur
n'importe quelle bobine que vous possédez déjà. La **version recharge** est
conçue pour les [recharges](../philosophy/second-life.md) sans bobine : elle se
colle à l'intérieur du **mandrin en carton** avant que vous ne montiez la
recharge sur une masterspool réutilisable, si bien que la puce voyage avec le
filament plutôt qu'avec la bobine — exactement là où l'usine la place.

**Quelle puce vierge acheter exactement ?**
**NTAG213, 215 ou 216 — ronde, 25 mm** est la recommandation. Le protocole est
délibérément optimisé pour tenir dans la petite NTAG213 (144 octets) ; les
215/216 fonctionnent à l'identique, avec de l'espace inutilisé en plus.
D'autres formes fonctionnent aussi, mais le rond de 25 mm est le format autour
duquel les lecteurs et les supports de l'écosystème sont conçus.

**Quelles marques de filament livrent du TigerTag posé en usine ?**
Plus de 2,5 millions de puces ont été produites — ce qui fait de TigerTag **le
protocole RFID tiers le plus déployé au monde** ; la plupart sont intégrées à
l'usine par des marques de filament tierces — Rosa3D, eSun, Sunlu, Landu,
Jamg He, R3D — avec Filforme, Nanovia et d'autres en cours d'intégration.

**Comment une puce se retrouve-t-elle sur une bobine ?**
Elle se colle — et il y en a **deux par bobine, sur des faces opposées**. C'est
délibéré : les imprimantes partagent souvent un lecteur RFID entre deux
emplacements, donc une puce doit faire face au lecteur quel que soit le sens de
la bobine ; vous pouvez scanner à la main sans retourner la bobine ; vous
pouvez la scanner sans la sortir de son emplacement ; et si une puce tombe en
panne, l'autre répond encore. Bonus : chaque bobine vide vous donne deux puces
réutilisables.
Voir [pourquoi deux puces](../concepts/tigertag-chip.md).

**Ai-je besoin d'Internet pour lire une puce ?**
Non. La charge utile de la puce est complète et autosuffisante : téléphone en
mode avion, ordinateur hors ligne — la bobine se présente quand même.

**Je préfère utiliser un autre protocole NFC (OpenSpool, le mien…) — suis-je
coincé avec TigerTag ?**
Non. Les puces ne sont **jamais verrouillées en écriture** : TigerTag n'est que
le protocole de base avec lequel les bobines sortent d'usine. Vous êtes libre
de réécrire la puce et de migrer ses données vers n'importe quel autre
protocole NFC/RFID, sur mesure ou existant.

**Que devient la puce quand la bobine est vide ?**
Elle a droit à une seconde vie — jamais à la décharge. Réencodez-la pour la
bobine suivante, ou convertissez-la en NDEF standard et transformez-la en
n'importe quel objet NFC : un porte-clés, une carte de visite, un objet
connecté. Les puces officielles de marque sont passées à la **NTAG215**
précisément pour laisser de la marge mémoire à cette réutilisation : la puce
d'une bobine ne devrait jamais devenir un déchet électronique. Voir
[Seconde Vie](../philosophy/second-life.md).

**La puce survivra-t-elle à un caisson chauffé ou à un sécheur de filament ?**
En usage normal, aucune défaillance de puce n'a été remontée du terrain — y
compris par des utilisateurs qui font tourner des sécheurs de filament. Deux
choses jouent en faveur de la puce : vous ne la lisez jamais réellement à
chaud (les scans se font à température ambiante, pas en pleine impression à
l'intérieur d'un caisson), et c'est du matériel NTAG standard — pour les plages
de température officielles, reportez-vous aux fiches techniques NTAG213/215/216
de NXP.

**Qu'est-ce qu'un fichier `.ttag` ?**
Un instantané portable et hors ligne d'une ou plusieurs de vos bobines —
l'unité de base pour sauvegarder, transporter sur une clé USB et partager vos
filaments. Exportez une bobine ou toute une sélection depuis Tiger Studio ;
importez avec un aperçu complet et le choix entre *Restaurer* (même compte) et
*Importer* (adopter comme bobines neuves). Spécification complète :
[le format `.ttag`](../developers/ttag-format.md).

**Puis-je utiliser TigerSystem sans aucune puce ?**
Oui — c'est **TigerData** : les mêmes données de protocole sous forme purement
numérique, sans puce, sans UID. L'identité vit dans votre inventaire (ou
n'importe où sous forme numérique) et se comporte comme n'importe quelle autre
bobine. Écrivez-la plus tard dans une puce NFC — d'un seul geste, quand vous
êtes prêt — et elle devient un TigerTag, avec un UID physique enfin associé.
Voir
[Une identité, trois états](../concepts/universal-filament-identity.md).

## Tiger Studio (ordinateur)

**Quelles plateformes ?**
Windows, macOS et Linux (Electron). Téléchargements sur la
[page des versions](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/releases).

**Ai-je besoin d'un lecteur NFC ?**
Non — l'application fonctionne seule. Un lecteur ACR122U (ou un socle
[TigerPOD](../products/tigerpod.md)) ajoute l'identification instantanée des
bobines et l'encodage des puces.

**Quelles imprimantes peut-elle piloter ?**
Six marques en service : Anycubic, Bambu Lab, Creality, Elegoo, FlashForge,
Snapmaker — voir la
[matrice de compatibilité](../compatibility/README.md).

## Slicers et flux d'impression

**Dois-je changer de slicer ?**
Non. Gardez OrcaSlicer, le slicer de votre fabricant, ce que vous voulez —
TigerSystem ne tranche pas et ne cherche pas à le faire. Vous tranchez et
lancez vos travaux exactement comme avant. Voir
[où se situe le slicer](../architecture/data-flow.md).

**Alors qu'est-ce que TigerSystem apporte à l'impression ?**
Deux choses. D'abord, les informations filament côté machine correspondent à la
réalité : Tiger Studio pousse les données de chaque bobine vers les
emplacements de l'imprimante (AMS, CFS, Canvas, ACE, station matière). Ensuite,
le suivi en direct : quel que soit ce qui a lancé l'impression, le travail
apparaît dans Tiger Studio avec l'avancement, les températures, une heure de
fin réelle et la caméra — sur l'ensemble de votre parc, toutes marques
mélangées.

**La puce peut-elle configurer automatiquement mon profil de slicer ?**
Pas aujourd'hui. La puce porte les réglages recommandés du filament
(températures…) ; vous les reportez vous-même dans votre profil de slicer.

**J'ai des imprimantes de trois marques différentes. Un problème ?**
Au contraire — c'est tout l'intérêt. Un seul tableau d'imprimantes pour tout le
parc, avec des filtres marque / état / tag, quel que soit le mélange parmi les
six marques prises en charge.

## TigerHub (le port d'attache web de l'écosystème)

**Qu'est-ce que TigerHub ?**
La plateforme web sur [tigersystem.io](https://tigersystem.io). Elle présente
l'écosystème TigerSystem — la vitrine de ce que le protocole ouvert rend
possible — et héberge le versant social du bac à sable, tout cela déjà en
service aujourd'hui : votre compte sur le web, les listes de souhaits
(publiques ou réservées aux amis), les codes d'ami et les invitations, le
partage de listes publiques, ainsi que le catalogue de matières, l'explorateur
de la base de référence, les modèles 3D et plus encore. Voir
[TigerHub](../products/tigerhub.md).

**Puis-je montrer ma collection à quelqu'un qui n'a pas d'application ?**
Oui — TigerHub sert des liens de liste en lecture seule : toute personne
disposant du lien la consulte dans un simple navigateur, sans application, sans
compte.

**TigerHub est-il la base de données derrière les applications ?**
Non. Les comptes et les données vivent dans un **Firebase** tout simple — une
base de données partagée, au même endroit, pour que tous les éléments du bac à
sable communiquent entre eux. TigerHub est la surface web construite par-dessus.

## Tiger NFC Connect (mobile)

**Que fait l'application mobile ?**
La lecture NFC et la programmation des puces en mobilité, la consultation du
catalogue, et la synchronisation complète de l'inventaire avec le même compte
que l'application de bureau.

**Où la télécharger ?**
Elle est publiée sur l'**App Store** et sur **Google Play** sous le nom
**Tiger NFC Connect** (anciennement « TigerTag RFID Connect »), avec des bêtas
publiques sur les deux plateformes. Tous les liens :
[tigersystem.io/fr/download](https://tigersystem.io/fr/download).

## TigerScale et capteurs

**Qu'est-ce que TigerScale ?**
Une balance ESP32 open source pour bobines de filament. Posez une bobine dessus
et son poids en direct remonte directement dans votre inventaire — visible
instantanément sur ordinateur, sur mobile et dans les vues partagées. Voir
[TigerScale](../products/tigerscale.md).

**Attendez — la puce sait déjà tout, pourquoi une balance ?**
La puce sait ce qu'**est** le filament ; seule une balance sait combien il en
**reste**. Ce sont les deux moitiés d'un inventaire vraiment utile : l'identité
vient de la puce, la quantité en direct vient de la balance.

**Ai-je besoin d'une TigerScale pour suivre le poids ?**
Non. Vous pouvez définir ou ajuster le poids d'une bobine à la main dans les
applications à tout moment — la balance ne fait que rendre cela automatique, en
direct et sans effort. Tiger Studio lit aussi les **balances USB « HID Scale »**
standard — la série DYMO M (M5, M10, M25…) et toute balance conforme — comme
option tierce
([détails](../products/tigerscale.md)).

**Puis-je en construire une moi-même ?**
Oui — c'est justement l'idée. La conception matérielle et le firmware sont
entièrement ouverts (MIT) dans le
[dépôt Tiger-Scale](https://github.com/TigerTag-Project/Tiger-Scale).

**Et le poids propre de la bobine vide ?**
Le calibrage de contenant de Tiger Studio vous permet de mesurer une fois le
poids à vide réel d'un contenant ; il est ensuite appliqué à chaque bobine de
ce contenant, de sorte que le chiffre affiché correspond au filament net, pas à
la bobine en plastique.

**Qu'est-ce que le TD-1 / TD1s ?**
Un analyseur de filament tiers signé **[AJAX-3D](https://ajax-3d.com)**, en
deux variantes qui fonctionnent toutes les deux avec l'écosystème : le
**TD-1** (la version DIY — à construire soi-même) et le **TD1s** (préassemblé,
prêt à l'emploi dès la sortie de la boîte). Sa mission première est de mesurer
la **Transmission Distance** d'un filament (« TD » — la quantité de lumière que
la matière laisse passer), la valeur dont les adeptes de HueForge et de
l'impression Full Spectrum ne peuvent pas se passer ; il lit aussi la
**couleur** (RGB, 1 à 3 emplacements) — un peu moins précis, mais une bonne
indication. Tiger Studio l'intègre nativement en USB, et **Tiger NFC Connect le
prend en charge en USB-C** sur mobile. La TD mesurée peut être **stockée dans
le protocole TigerTag lui-même** — sur la puce NFC, ou dans le format de
fichier `.ttag`. Un accessoire tiers et l'écosystème ouvert qui travaillent
ensemble, exactement comme prévu.

## Cloud et inventaire

**Où mon inventaire est-il stocké ?**
Dans votre propre compte TigerSystem — un simple Firebase (Firestore), une base
de données partagée utilisée par toutes les applications. Chaque appareil sur
lequel vous vous connectez voit les mêmes données en temps réel. Voir
[Inventaire et synchronisation cloud](../concepts/inventory-and-cloud-sync.md).

**Est-ce que ça marche hors ligne ?**
Les puces sont entièrement lisibles hors ligne ; les applications conservent un
cache local. Les liaisons vers les imprimantes sont locales au réseau et n'ont
aucun besoin d'Internet (sauf en mode cloud Anycubic).

**Je ne veux AUCUN cloud. Puis-je quand même utiliser TigerTag ?**
Oui, à 100 %. La charge utile de la puce est complète et autosuffisante :
lisez-la, écrivez-la, et gérez un inventaire entièrement local sans cloud, sans
compte, sans serveur — les [SDK JS et Python](../developers/sdks.md) existent
précisément pour rendre cela facile dans vos propres projets ou vos montages
DIY. Même **TigerTag+ s'authentifie localement, sans connexion Internet**. La
couche cloud est un confort optionnel (synchronisation multi-appareils,
partage), jamais une obligation — nous proposons une vision de l'utilisateur
TigerTag, et toute autre vision est acceptée et encouragée.

**Je ne connais rien au NFC ni au RFID — est-ce fait pour moi ?**
Surtout pour vous. Toute l'expérience est conçue pour les débutants d'abord :
approchez votre téléphone d'une bobine, elle se présente, terminé. Aucun jargon
requis — les couches techniques existent pour ceux qui veulent creuser, pas
comme un prérequis.

**D'autres personnes peuvent-elles voir mes bobines ?**
Uniquement si vous le décidez : amis acceptés, bascule en public, ou lien de
partage TigerHub. Tout est privé par défaut, et cela est appliqué côté serveur.

**Que se passe-t-il si le cloud TigerTag ferme un jour ?**
La réponse de conception à cette crainte, c'est l'ouverture : le format de la
puce est public, les puces se lisent intégralement hors ligne pour toujours,
les SDK et l'application de bureau sont open source, et la surface cloud est
documentée. Vos bobines ne peuvent pas être « briquées » par un serveur —
c'est précisément la différence avec le silo d'un fabricant.

## RFID et compatibilité

**Tiger Studio peut-il lire les tags natifs Bambu/Creality/… ?**
Pas encore — la bonne manière de traiter l'interopérabilité reste une question
ouverte. Des spécifications de décodage en lecture seule sont documentées pour
sept formats constructeurs, et les travaux en cours visent à **convertir les
données des tags constructeurs en bobines numériques TigerData**, afin que le
filament d'autres marques puisse être scanné et géré dans l'écosystème. Voir
[compatibilité](../compatibility/README.md).

**Pourquoi les tags des fabricants sont-ils verrouillés et pas TigerTag ?**
Les tags verrouillés servent le verrouillage constructeur. La réponse de
TigerTag est un format ouvertement lisible — voir
[Centré utilisateur vs centré imprimante](../philosophy/user-centric-ecosystem.md).

**Et les imprimantes résine ?**
Ça arrive : TigerTag est en cours d'extension aux **résines** — la même
identité ouverte sur les contenants de résine pour les imprimantes 3D résine.

**TigerTag fonctionne-t-il avec une imprimante sans lecteur RFID ?**
Oui — c'est le [pont smartphone](../philosophy/smartphone-bridge.md) : votre
téléphone (ou un lecteur de bureau) identifie la bobine, et le système
transmet les données à l'imprimante.

## Dépannage

**Ma puce ne se lit pas sur mon téléphone.**
Vérifiez que le NFC est activé et trouvez le point idéal de l'antenne de votre
téléphone ; les tags se lisent mieux à plat contre celle-ci. Si la puce se lit
dans une application mais pas dans une autre, mettez l'application à jour.

**Mon imprimante n'apparaît pas dans Tiger Studio.**
Assurez-vous que l'imprimante est sur le même réseau local, en mode LAN le cas
échéant, puis essayez « Ajouter par IP » — les méthodes de découverte varient
selon la marque.

> Les cas réels sont les bienvenus — signalez le vôtre sur le
> [Discord officiel](https://discord.gg/3Qv5TSqnJH) ou dans les issues GitHub ;
> cette section grandit grâce à eux.

## Développeurs

**Est-ce que quelqu'un a réellement construit quelque chose sur TigerTag ?**
Oui — et indépendamment de nous :
[OpenRFID](https://github.com/suchmememanyskill/OpenRFID) (boîte à outils RFID
multiconstructeurs communautaire) lit les TigerTags ;
[Spooly Tracker](https://spoolytracker.com/) (plateforme d'inventaire, web +
mobile) identifie les bobines grâce aux TigerTags ; et le
[firmware étendu pour Snapmaker U1](https://github.com/paxx12-snapmaker-u1/SnapmakerU1-Extended-Firmware)
fait de la U1 **la première imprimante qui lit nativement les TigerTags**. Voir
[intégrations tierces](../developers/integrations.md).

**Puis-je construire ma propre application sur TigerTag ?**
Oui, sans autorisation : spécification ouverte de la puce,
[SDK](../developers/sdks.md) (JS et Python), et une
[surface cloud documentée](../developers/cloud-api.md) avec des exemples
fonctionnels ESP32 / Home Assistant / Spoolman.

**Puis-je brancher TigerTag sur mon ERP ou mon logiciel de stock interne ?**
Oui — c'est exactement le genre d'usage auquel le protocole ouvert invite. Un
scan (téléphone NFC ou lecteur USB ACR122U) vous donne l'identité de la
bobine ; ce que vous en faites — gestion de stock, suivi des travaux,
traçabilité, réapprovisionnement, R&D — ne regarde que vous. Voir
[Que pouvez-vous construire ?](../developers/README.md)

**De quel matériel ai-je besoin pour lire les puces dans mon propre projet ?**
N'importe quel smartphone NFC, un lecteur USB de la classe ACR122U sur un
ordinateur — ou du DIY intégral : un simple ESP32 avec un module lecteur PN532
ou RC522 suffit (c'est ainsi que
[TigerScale](../products/tigerscale.md) procède). Du matériel courant, bon
marché, sans rien de propriétaire.

**Le fait que la configuration Firebase soit publique est-il une faille de
sécurité ?**
Non — c'est le schéma Firebase standard. Toute l'application des règles se fait
côté serveur dans les règles de sécurité ; un client ne peut toucher qu'aux
données de son propre utilisateur.

## Fabricants

**Nous sommes une marque de filament — comment livrer des bobines taguées
TigerTag ?**
Rapidement : une ligne de production peut être opérationnelle avec TigerTag en
**5 jours à peine**, pour un coût très faible, avec chaque puce écrite en
**environ 1 seconde** — c'est prouvé par plus de 2,5 millions de puces déjà
expédiées par Rosa3D, eSun, Sunlu, Landu, Jamg He et R3D. Et chaque marque qui
rejoint le mouvement renforce l'argument collectif pour que les fabricants
d'imprimantes lisent TigerTag nativement. Lisez
[Pour les fabricants de filament](../vision/for-filament-manufacturers.md),
puis écrivez-nous à
**[tigertag@tigertag.io](mailto:tigertag@tigertag.io)**.

**Mon produit peut-il devenir « TigerTag Certified » ?**
Cela dépend du côté d'une ligne où il se situe — et la plupart des produits
sont du côté gratuit.

Si votre produit **dialogue avec** des puces TigerTag — un lecteur, une
application, une imprimante, un slicer, un sécheur, un outil — il est
**TigerTag Compatible**. Ce niveau est gratuit, auto-déclaré, et ne demande ni
audit ni autorisation : construisez-le, dites *« compatible TigerTag »* (ou
*« compatible TigerTag+ »* si vous vérifiez les signatures), et affichez le
logo dans votre interface, votre documentation et votre fiche produit. La
plupart des produits tiers appartiennent à cette catégorie, et rien du
protocole ne leur est caché.

**TigerTag Certified** est l'autre niveau, et il est ouvert à **tout ce qu'un
tiers construit** — un appareil, une application, du filament, un inlay, un
support — qui **passe un audit** au regard des exigences. Il s'obtient, il ne
se revendique pas : autorisation écrite, inscription au registre des produits
certifiés, et droit d'apposer la marque **sur le produit, la puce et
l'emballage**. Il existe en deux portées, **TigerTag Certified** et
**TigerTag+ Certified**, la seconde couvrant les produits dont la gestion des
tags signés a été vérifiée.

La différence entre les niveaux n'est pas ce qu'*est* votre produit — c'est de
savoir si quelqu'un a vérifié. Compatible dit *« ça marche »*, sur votre
parole. Certified dit *« nous l'avons testé »*, sur la nôtre, et cela peut être
retiré. Critères complets :
[CERTIFICATION.md](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/CERTIFICATION.md). Prenez contact via
l'[organisation GitHub](https://github.com/TigerTag-Project).

**Nous fabriquons des imprimantes — notre firmware peut-il lire TigerTag ?**
Oui — les lecteurs NTAG/NDEF sont du matériel courant, la spécification de la
charge utile est publique
([TigerTag-RFID-Guide](https://github.com/TigerTag-Project/TigerTag-RFID-Guide)),
et ajouter la lecture TigerTag à un firmware prend **moins de 3 jours**.

## Communauté

**Où poser des questions ou obtenir de l'aide ?**
Le **[Discord](https://discord.gg/3Qv5TSqnJH)** officiel — questions, aide,
retours, présentations de projets. Pour les bugs et les problèmes techniques,
les issues GitHub de chaque dépôt fonctionnent aussi.

**Comment contribuer ?**
Documentation : [CONTRIBUTING.md](../../CONTRIBUTING.md) ici. Code : le guide
propre à chaque dépôt — voir la
[carte des dépôts](../developers/repositories.md).

**Puis-je tout forker et construire autre chose ?**
Oui. Sous licence MIT/CC, délibérément forkable — respectez simplement la
[politique de marque](../../TRADEMARK.md).

---

**◀ Précédent :** [API cloud](../developers/cloud-api.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [Feuille de route](../roadmap/README.md)
