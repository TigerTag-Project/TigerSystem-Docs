---
sourceHash: 289ee078055b2b2f885bf2a1198bfe20056cc92250866bfd0d4543b9e5190384
sourcePath: docs/compatibility/third-party-hardware.md
---

# Zgodny sprzęt firm trzecich

Ekosystem dobrze współpracuje ze sprzętem, którego nie stworzył. Ta strona to
**rosnąca lista** urządzeń firm trzecich, które łączą się w ten czy inny sposób —
będzie się powiększać wraz z rozwojem projektu i w miarę jak kolejni twórcy
podłączają swój sprzęt.

| Urządzenie | Producent | Co robi | Działa z |
|---|---|---|---|
| Czytnik NFC **ACR122U** | ACS | Czytnik/programator NFC na USB — zeskanuj chip, a szpula otwiera się automatycznie; zapisy z przewodnikiem i kontrolą UID. Dwa takie czytniki napędzają [TigerPOD](../products/tigerpod.md) | [Tiger Studio](../products/tiger-studio.md) |
| Analizator filamentu **TD-1** | [AJAX-3D](https://ajax-3d.com) | Konstrukcja DIY — mierzy **Transmission Distance** filamentu (wartość używana w druku HueForge / Full Spectrum) + kolor (RGB, 1–3 sloty, orientacyjnie) | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tiger-nfc-connect.md) (USB-C) |
| Analizator filamentu **TD1s** | [AJAX-3D](https://ajax-3d.com) | Ta sama rodzina urządzeń, wstępnie złożona i gotowa od razu po wyjęciu z pudełka | [Tiger Studio](../products/tiger-studio.md) · [Tiger NFC Connect](../products/tiger-nfc-connect.md) (USB-C) |
| Wagi USB **DYMO serii M** (M5, M10, M25…) | DYMO | Standardowe urządzenia USB „HID Scale” — waga na żywo trafia do profilu szpuli ([szczegóły protokołu](../products/tigerscale.md)) | [Tiger Studio](../products/tiger-studio.md) |
| **Dowolna waga USB zgodna z HID Scale** | dowolny | Ten sam standardowy protokół co DYMO serii M (strona użycia HID `0x8D`) — marka nie ma znaczenia | [Tiger Studio](../products/tiger-studio.md) |
| **Dowolny czysty chip NTAG213/215/216** | dowolny | Sam materiał eksploatacyjny — kupiony gdziekolwiek, działa identycznie ([który chip?](../../docs/faq/README.md)) | Wszystko |

|| | | |
|---|---|---|---|
| <img src="../assets/acr122u.jpg" alt="Czytnik NFC USB ACR122U" /> | <img src="../assets/td1s-front.jpg" alt="Analizator filamentu AJAX-3D TD1s" /> | <img src="../assets/dymo-usb-scale.png" alt="Waga USB HID DYMO serii M" /> | <img src="../assets/ntag-chip.png" alt="Gołym chip NFC NTAG — widoczna cewka anteny" /> |

*Czytnik ACR122U (dwa takie działają wewnątrz każdego
[TigerPOD](../products/tigerpod.md)) · AJAX-3D TD1s · waga USB DYMO serii M ·
sam chip, z odsłoniętą anteną.*

<img src="../assets/td1s-in-studio.jpg" width="100%" alt="TD1s zintegrowany z Tiger Studio — zmierzony kolor i TD trafiają do profilu szpuli" />

*TD1s przy pracy w Tiger Studio.*

Zmierzone wartości nie zostają w urządzeniu: TD lub waga trafiają do profilu
szpuli i mogą żyć **w samym protokole TigerTag** — na chipie albo w pliku `.ttag`.

## Czytniki zbudowane przez innych

Niektórzy twórcy budują własne czytniki, które mówią TigerTag bezpośrednio, bez
udziału naszego oprogramowania. **BambuTagger**
([bambutagger.de](https://www.bambutagger.de/en/)) to niemiecki projekt
otwartoźródłowy publikujący czytniki szpul oparte na ESP32 — kody źródłowe na
GitHubie, obudowy do wydruku, pliki PCB i firmware, wszystko za darmo. Dwa jego
urządzenia deklarują obsługę TigerTag:

| Urządzenie | Czym jest | Co robi z TigerTag |
|---|---|---|
| **[BT-Touch](https://www.bambutagger.de/en/bt-touch)** | Urządzenie zasilane z baterii z 5″ ekranem dotykowym 800×480 — ESP32-S3 i jeden czytnik RC522 — przechowujące lokalnie ponad 2000 tagów | **Odczytuje, klonuje i zapisuje** TigerTag, obok tagów Bambu Lab, Spoolease, OpenSpool i OpenTag3D |
| **[BT-AMS-C](https://www.bambutagger.de/en/bt-ams)** | Czteroslotowy czytnik montowany na AMS Bambu Lab — ESP32 z 4× RC522, wyświetlaczami OLED i TFT, adresowalnymi diodami LED. Pokazuje na żywo dane slotów AMS i **wysyła dane tagów do drukarki / BMCU** | Odczytuje te same pięć rodzin tagów, po jednej na slot |

Dwie rzeczy warto ująć precyzyjnie.

**Są zgodne, a nie certyfikowane.** Strona trzecia może swobodnie mówić *„zgodny
z TigerTag”*, nikogo nie pytając — dokładnie tym są te urządzenia i na tym polega
sens otwartego formatu. Nie są *certyfikowane*: certyfikacja to audyt przyznawany
przez TigerSystem, a żadne z tych urządzeń go nie przeszło. Różnicę wyjaśnia
[polityka znaku towarowego](../../TRADEMARK.md).

**Klonowanie chipa nie jest dziurą w formacie.** Standardowy TigerTag nie niesie
uwierzytelniania i nigdy nie jest zablokowany przed zapisem, więc kopiowanie
jest oczekiwane — to ta sama cecha, która pozwala przepisywać własne chipy.
Kopia nie może za to nieść ważnego podpisu [TigerTag+](../products/tigertag-plus.md):
sklonowany tag nie przechodzi weryfikacji na telefonie klienta, offline.

To, że takie urządzenia powstają bez nas, jest miarą formatu: nikt o nic nas nie
prosił, nie był potrzebny żaden klucz, nie podpisano żadnej umowy.

## Tu może być twój sprzęt

Budujesz lub podłączasz urządzenie? Protokół jest otwarty,
[SDK](../developers/sdks.md) są gotowe, a **TigerTag Certified** istnieje dla
zweryfikowanych integracji. Napisz do nas na
[Discordzie](https://discord.gg/3Qv5TSqnJH) lub pod adres
[tigertag@tigertag.io](mailto:tigertag@tigertag.io) — ta lista ma rosnąć.

---

**▲ [Spis dokumentacji](../../README.md)** · **Zobacz też:** [Zgodność](./README.md), [Integracje firm trzecich (oprogramowanie)](../developers/integrations.md), [Produkty](../products/README.md)
