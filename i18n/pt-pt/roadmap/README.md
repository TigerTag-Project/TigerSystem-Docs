---
sourceHash: 68fa84317057cd1f92cf2ac7131611c49eaf880607f0e20eede9ae2fae93db9a
sourcePath: docs/roadmap/README.md
---

# Roteiro

## Direção do ecossistema

Intenções de alto nível, sem datas (os detalhes ficam em cada produto):

- **RFID multifornecedor → TigerData** — obter os dados das etiquetas dos fabricantes (Bambu Lab, Creality, Elegoo, Anycubic, Snapmaker, Qidi, OpenSpool) e convertê-los em bobinas digitais TigerData, para que o filamento de outras marcas possa ser lido e gerido no ecossistema; as especificações só de leitura já estão documentadas ([compatibilidade](../compatibility/README.md)). A descodificação direta na aplicação deliberadamente não é integrada até o modelo de interoperabilidade estar definido.
- **Mais integrações de impressoras** — Klipper/Moonraker como o próximo transporte natural ([página do Klipper](../compatibility/klipper.md)).
- **Um mapa de distribuidores** *(previsto)* — os distribuidores oficiais estão a crescer para além da [Atome3D](https://atome3d.com); um mapa mostrará onde comprar chips TigerTag localmente.
- ~~O ficheiro portátil `.ttag`~~ — **lançado** no Tiger Studio v2.14.0: [o formato `.ttag`](../developers/ttag-format.md) (exportação + importação, os três níveis de bobina).
- **TigerTag para resinas** — alargar o protocolo a recipientes de resina para impressoras 3D de resina, levando a mesma identidade aberta a toda uma segunda família de máquinas.
- **Crescimento do TigerHub** — o site do ecossistema em [tigersystem.io](https://tigersystem.io): funcionalidades da caixa de areia social mais ricas (listas de desejos, amigos, partilha).
- **Documentação** — preencher os marcadores TODO em todo este repositório (tutoriais, guias, integração de fabricantes, resumo da carga útil RFID).
- **Idiomas da documentação** — a wiki em [wiki.tigersystem.io](https://wiki.tigersystem.io) sai primeiro em **inglês e francês**: o inglês é a fonte de verdade, o francês deriva dele e é revisto. Quando ambos estiverem completos e as páginas tiverem deixado de mudar, seguem-se os restantes idiomas do [tigersystem.io](https://tigersystem.io) — **alemão, espanhol, italiano, polaco, chinês e português nas suas variantes brasileira e europeia**, que o ecossistema trata como dois idiomas separados — para que a documentação fique alinhada com o resto do ecossistema. Acrescentá-los mais cedo implicaria manter nove cópias de páginas que ainda estão a ser escritas.
- **Para além dos idiomas atuais** — a lista não se limita ao que o [tigersystem.io](https://tigersystem.io) serve hoje. **Japonês, coreano e russo** são os candidatos mais fortes a seguir: os três têm comunidades de makers ativas, e os três são locais onde a documentação técnica só em inglês é uma barreira real e não um simples incómodo. O russo chega também muito além da Rússia. Note-se que vale a pena documentar um idioma mesmo onde a loja não consegue enviar — o protocolo é aberto, qualquer chip NTAG virgem serve, e nada no ecossistema exige comprar o que quer que seja.

 Os idiomas que forem realmente acrescentados devem ser decididos a partir do tráfego da própria wiki quando o houver, e não por palpite. Também não tem de ser tudo ou nada por idioma: as secções viradas para o utilizador (tutoriais, FAQ, produtos, compatibilidade) merecem uma tradução muito antes de [`developers/`](../developers/README.md), cujos leitores já trabalham em inglês.

## Roteiros detalhados

| Produto | Onde |
|---|---|
| Tiger Studio | [`ROADMAP.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/ROADMAP.md) no repositório da aplicação — agrupado por domínio, com notas de dimensão e risco |
| Outros produtos | > **TODO:** publicar roteiros públicos à medida que os repositórios forem abrindo |

> **Nota:** esta página indica uma direção, não compromissos nem datas.

---

**◀ Anterior:** [FAQ](../faq/README.md) · **▲ [Índice da documentação](../../README.md)**

**Ver também:** [Produtos](../products/README.md), [Compatibilidade](../compatibility/README.md)
