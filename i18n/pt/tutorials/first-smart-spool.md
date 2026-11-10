---
sourceHash: 7bb6dbb4efb816e836950f465cc62df5ef6eca1a0c8de04e7fb9820c26114c48
sourcePath: docs/tutorials/first-smart-spool.md
---

# Sua primeira bobina inteligente em 2 minutos

Torne qualquer bobina de filamento inteligente — **de graça, em casa**, com coisas que
você já tem ou consegue por alguns centavos.

## O que você precisa

- **Qualquer smartphone NFC** (esse é o leitor — ele já está no seu bolso)
- **Um chip NTAG em branco** — NTAG213, 215 ou 216, **redondo de 25 mm** recomendado
 (alguns centavos na Amazon, no AliExpress ou localmente; nada oficial é necessário)
- **Tiger NFC Connect**, o aplicativo gratuito —
 [baixe para iOS e Android](https://tigersystem.io/download)

> Já comprou filamento da Rosa3D, eSun, Sunlu, R3D…? Sua bobina pode
> **já ter chips TigerTag** — pule o formulário e simplesmente toque em “Scan”.

## Passos

**Você encosta no chip duas vezes:** uma para começar, outra para gravar.

1. **Instale o Tiger NFC Connect** e abra-o.
2. **Toque em “Scan”** e segure o celular junto ao seu chip em branco. O aplicativo o
 lê, vê que está vazio e se oferece para criar um filamento para ele.
3. **Descreva o seu filamento** — escolha o material, a cor, o aspecto, o
 peso e assim por diante. As opções vêm do catálogo compartilhado, então sua
 bobina será entendida de forma idêntica por todos os aplicativos compatíveis. É um formulário
 rápido; nada para digitar de cabeça.
4. **Toque em “Make” e segure o celular junto ao chip de novo.** Esse segundo
 toque é a gravação. Um segundo depois os dados estão **no próprio chip** — sua
 bobina agora sabe o que é.
5. **Cole o chip na bobina.**

<img src="../assets/nfc-scan.gif" width="420" alt="O toque NFC, animado — o celular encontra o chip, a bobina é identificada" />

*O gesto inteiro, em movimento.*

### Dois chips em uma bobina — “Dual NFC”

As bobinas de fábrica levam **dois chips, em lados opostos**, para que um chip esteja
sempre de frente para o leitor ([por que dois?](../concepts/tigertag-chip.md)). Você pode
fazer o mesmo, em uma única sessão:

1. Escaneie o primeiro chip em branco e preencha o formulário como acima.
2. Antes de gravar, **toque no botão “Dual NFC”**.
3. **Toque em “Make”** como de costume — mas agora o aplicativo pede os chips um após o
 outro: **Make 1/2**, depois **Make 2/2**. Os dois chips acabam levando a mesma
 identidade.

> **Comece sempre pelo chip que você escaneou.** O chip que abriu a
> criação é o que o aplicativo espera como 1/2; o outro chip vem em seguida como 2/2.

Pronto. Reescaneie a bobina quando quiser, com o leitor que estiver mais perto: um
toque de **qualquer celular NFC**, ou coloque-a em um leitor conectado ao
[Tiger Studio Manager](../products/tiger-studio.md) (ACR122U /
[TigerPOD](../products/tigerpod.md)) — a bobina se apresenta de qualquer
jeito. Tudo acima funciona **100% offline** — sem conta, sem nuvem, sem
custo.

## Opcional: adicione-a ao seu inventário

Quer a bobina no seu inventário sincronizado (visível no desktop, compartilhável com
amigos)? Basta dizer isso no aplicativo quando ele perguntar — é uma escolha explícita,
nunca automática.

## E agora?

- Coloque a bobina em uma [TigerScale](../products/tigerscale.md) e veja o peso
 dela atualizar ao vivo.
- Abra o [Tiger Studio](../products/tiger-studio.md) no computador e veja
 a mesma bobina lá.
- Reabasteceu ou reaproveitou a bobina? Recodifique o chip —
 [Segunda Vida](../philosophy/second-life.md).

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [Tiger NFC Connect](../products/tiger-nfc-connect.md), [O chip TigerTag](../concepts/tigertag-chip.md), [FAQ](../faq/README.md)
