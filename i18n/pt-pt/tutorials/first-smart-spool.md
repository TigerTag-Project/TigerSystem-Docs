---
sourceHash: 7bb6dbb4efb816e836950f465cc62df5ef6eca1a0c8de04e7fb9820c26114c48
sourcePath: docs/tutorials/first-smart-spool.md
---

# A sua primeira bobina inteligente em 2 minutos

Torne inteligente qualquer bobina de filamento — **de graça, em casa**, com coisas que já tem ou que consegue arranjar por uns cêntimos.

## O que precisa

- **Qualquer smartphone com NFC** (é o leitor — já o tem no bolso)
- **Um chip NTAG virgem** — NTAG213, 215 ou 216, **redondo de 25 mm** recomendado (uns cêntimos na Amazon, no AliExpress ou localmente; nada oficial é necessário)
- **Tiger NFC Connect**, a aplicação gratuita — [transferir para iOS e Android](https://tigersystem.io/download)

> Já comprou filamento da Rosa3D, eSun, Sunlu, R3D…? A sua bobina pode **já levar chips TigerTag** — salte o formulário e toque apenas em «Ler».

## Passos

**Toca no chip duas vezes:** uma para começar, outra para escrever.

1. **Instale o Tiger NFC Connect** e abra-o.
2. **Toque em «Ler»** e encoste o telemóvel ao seu chip virgem. A aplicação lê-o, vê que está vazio e propõe criar um filamento para ele.
3. **Descreva o seu filamento** — escolha o material, a cor, o aspeto, o peso, e assim por diante. As opções vêm do catálogo partilhado, por isso a sua bobina será compreendida de forma idêntica por todas as aplicações compatíveis. É um formulário rápido; nada para escrever de memória.
4. **Toque em «Criar» e encoste de novo o telemóvel ao chip.** Esse segundo toque é a escrita. Um segundo depois os dados estão **no próprio chip** — a sua bobina já sabe o que é.
5. **Cole o chip na bobina.**

<img src="../assets/nfc-scan.gif" width="420" alt="O toque NFC, animado — o telemóvel encontra o chip, bobina identificada" />

*O gesto completo, em movimento.*

### Dois chips numa bobina — «Dual NFC»

As bobinas de fábrica levam **dois chips, em lados opostos**, para que um chip esteja sempre virado para o leitor ([porquê dois?](../concepts/tigertag-chip.md)). Pode fazer o mesmo, numa só sessão:

1. Leia o primeiro chip virgem e preencha o formulário como acima.
2. Antes de escrever, **toque no botão «Dual NFC»**.
3. **Toque em «Criar»** como habitualmente — mas agora a aplicação pede os chips um a seguir ao outro: **Criar 1/2**, depois **Criar 2/2**. Os dois chips ficam com a mesma identidade.

> **Comece sempre pelo chip que leu.** O chip que abriu a criação é o que a aplicação espera como 1/2; o outro chip segue como 2/2.

É tudo. Volte a ler a bobina quando quiser, com o leitor que estiver mais perto: um toque de **qualquer telemóvel NFC**, ou pouse-a num leitor ligado ao [Tiger Studio Manager](../products/tiger-studio.md) (ACR122U / [TigerPOD](../products/tigerpod.md)) — a bobina apresenta-se de qualquer forma. Tudo o que está acima funciona **100 % offline** — sem conta, sem nuvem, sem custos.

## Opcional: adicioná-la ao inventário

Quer a bobina no seu inventário sincronizado (visível no computador, partilhável com amigos)? Diga-o na aplicação quando for perguntado — é uma escolha explícita, nunca automática.

## E a seguir?

- Pouse a bobina numa [TigerScale](../products/tigerscale.md) e veja o peso atualizar-se em direto.
- Abra o [Tiger Studio](../products/tiger-studio.md) no computador e veja lá a mesma bobina.
- Recarregou ou reaproveitou a bobina? Recodifique o chip — [Segunda Vida](../philosophy/second-life.md).

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [Tiger NFC Connect](../products/tiger-nfc-connect.md), [O chip TigerTag](../concepts/tigertag-chip.md), [FAQ](../faq/README.md)
