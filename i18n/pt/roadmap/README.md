---
sourceHash: 68fa84317057cd1f92cf2ac7131611c49eaf880607f0e20eede9ae2fae93db9a
sourcePath: docs/roadmap/README.md
---

# Roteiro

## Direção do ecossistema

Intenções de alto nível, sem datas (os detalhes ficam em cada produto):

- **RFID multifabricante → TigerData** — recuperar os dados das tags dos
 fabricantes (Bambu Lab, Creality, Elegoo, Anycubic, Snapmaker, Qidi, OpenSpool)
 e convertê-los em bobinas digitais TigerData, para que o filamento de outras marcas possa
 ser escaneado e gerenciado no ecossistema; as especificações somente leitura já estão
 documentadas ([compatibilidade](../compatibility/README.md)). A decodificação direta
 no aplicativo não é integrada de propósito até que o modelo de interoperabilidade
 esteja definido.
- **Mais integrações de impressoras** — Klipper/Moonraker como o próximo transporte
 natural ([página do Klipper](../compatibility/klipper.md)).
- **Um mapa de distribuidores** *(planejado)* — os distribuidores oficiais estão crescendo
 além da [Atome3D](https://atome3d.com); um mapa mostrará onde comprar
 chips TigerTag localmente.
- ~~O arquivo portátil `.ttag`~~ — **lançado** no Tiger Studio v2.14.0:
 [o formato `.ttag`](../developers/ttag-format.md) (exportação + importação, os
 três níveis de bobina).
- **TigerTag para resinas** — estender o protocolo a recipientes de resina para
 impressoras 3D de resina, levando a mesma identidade aberta a toda uma segunda família
 de máquinas.
- **Crescimento do TigerHub** — o site do ecossistema em
 [tigersystem.io](https://tigersystem.io): recursos sociais mais ricos do ambiente de testes
 (listas de desejos, amigos, compartilhamento).
- **Documentação** — preencher os espaços reservados TODO em todo este repositório (tutoriais,
 guias, integração de fabricantes, resumo da carga útil RFID).
- **Idiomas da documentação** — o wiki em
 [wiki.tigersystem.io](https://wiki.tigersystem.io) é publicado primeiro em **inglês e
 francês**: o inglês é a fonte da verdade, o francês é derivado dele e
 revisado. Quando ambos estiverem completos e as páginas tiverem parado de mudar, os
 demais idiomas do [tigersystem.io](https://tigersystem.io) virão em seguida —
 **alemão, espanhol, italiano, polonês, chinês e português em suas variantes
 brasileira e europeia**, que o ecossistema trata como dois idiomas distintos —
 para que a documentação acompanhe o restante do ecossistema.
 Adicioná-los antes significaria manter nove cópias de páginas que ainda estão
 sendo escritas.
- **Além dos idiomas atuais** — a lista não se limita ao que o
 [tigersystem.io](https://tigersystem.io) atende hoje. **Japonês, coreano e
 russo** são os candidatos mais fortes depois dele: os três têm comunidades ativas de makers,
 e os três são lugares em que a documentação técnica apenas em inglês é uma barreira real
 e não um mero incômodo. O russo
 também alcança muito além da Rússia. Note que vale a pena documentar um idioma
 mesmo onde a loja não consegue enviar — o protocolo é aberto, qualquer chip NTAG em branco
 funciona, e nada no ecossistema exige comprar coisa alguma.

 Quais idiomas serão de fato adicionados deve ser decidido com base no tráfego do próprio wiki
 quando houver algum, e não por suposição. Também não precisa ser
 tudo ou nada por idioma: as seções voltadas ao usuário (tutoriais, FAQ,
 produtos, compatibilidade) merecem uma tradução muito antes de
 [`developers/`](../developers/README.md), cujos leitores já trabalham
 em inglês.

## Roteiros detalhados

| Produto | Onde |
|---|---|
| Tiger Studio | [`ROADMAP.md`](https://github.com/TigerTag-Project/TigerTag-Studio-Manager/blob/main/ROADMAP.md) no repositório do aplicativo — agrupado por domínio, com notas de dimensionamento e risco |
| Outros produtos | > **TODO:** publicar roteiros públicos à medida que os repositórios forem abertos |

> **Nota:** esta página declara uma direção, não compromissos nem datas.

---

**◀ Anterior:** [FAQ](../faq/README.md) · **▲ [Índice da documentação](../../README.md)**

**Veja também:** [Produtos](../products/README.md), [Compatibilidade](../compatibility/README.md)
