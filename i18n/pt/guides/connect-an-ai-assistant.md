---
sourceHash: b9c190202ceb9ed447ea794e9e369fdf15a51affa538edaca35cb7f3eb145c0e
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Conecte um assistente de IA à sua conta

Pergunte ao Claude ou ao ChatGPT "quanto PETG ainda tenho?" e receba a resposta do
seu próprio inventário. O conector do TigerSystem permite que um assistente de IA **leia** a sua
conta TigerSystem — nada além disso. É a mesma ideia do servidor local do Tiger
Studio, mas hospedada: funciona pela web, pelo celular e sem o Studio
em execução.

**O endereço do conector:**

```
https://mcp.tigersystem.io/mcp
```

Ele fala MCP (Model Context Protocol), o padrão aberto que os assistentes usam para
alcançar ferramentas externas. Qualquer assistente que suporte servidores MCP remotos com OAuth
pode usá-lo.

## O que o assistente pode ler

- as suas bobinas: marca, material, cores, peso restante, temperaturas, onde cada
  uma está guardada;
- os seus racks, as suas listas de desejos e o seu histórico de estoque;
- as suas impressoras e as suas TigerScales — **nunca os códigos de acesso nem as senhas delas**;
- o que os seus amigos compartilham com você (as bobinas, racks e listas de desejos deles).

Ele **não pode alterar nada**: toda ferramenta é somente leitura. Ele lê como você, sob
as mesmas regras de acesso dos aplicativos, então nunca pode ver outra conta.
As credenciais — códigos de acesso de impressoras, logins na nuvem, a sua chave privada, o seu
e-mail — nunca são retornadas, não importa o que ele peça.

## Claude (web, desktop, celular)

1. **Settings → Connectors → Add custom connector.**
2. Dê o nome `TigerSystem`, cole o endereço acima, deixe os campos avançados de OAuth
   vazios e adicione.
3. Clique em **Connect**. Você chega ao tigersystem.io: entre, confira se a página
   diz que as respostas vão para o claude.ai e clique em **Allow**.
4. Em uma conversa, ative o conector TigerSystem no menu de ferramentas e
   faça a sua pergunta.

## ChatGPT

Os conectores personalizados exigem o **modo desenvolvedor** (um plano pago; nos planos Business, um
administrador o ativa).

1. **Settings → Apps & Connectors → Advanced settings → Developer mode** ativado.
2. **Create** um conector: nome `TigerSystem`, o endereço acima, autenticação
   **OAuth**, sem ID de cliente nem segredo.
3. Entre no tigersystem.io e clique em **Allow**.
4. Em uma nova conversa, ative o conector e pergunte.

## Grok

Os conectores personalizados exigem um **plano pago do Grok**.

1. Abra **grok.com/connectors → New Connector → Custom**.
2. Dê o nome `TigerSystem` e cole o endereço acima.
3. Entre no tigersystem.io e clique em **Allow**.
4. Em uma conversa, ative o conector TigerSystem e pergunte.

## Le Chat (Mistral)

Os conectores personalizados são adicionados por um **administrador** — em uma conta pessoal,
é você.

1. **Connectors → Add Connector → Custom MCP Connector.**
2. Dê o nome `TigerSystem` e cole o endereço acima; o Le Chat detecta sozinho
   o método de login (OAuth).
3. Entre no tigersystem.io e clique em **Allow**.
4. Em uma conversa, ative o conector e pergunte.

Os nomes dos menus mudam com frequência nesses aplicativos; os passos continuam os mesmos.

## Codex, Cursor e outros clientes desktop

Adicione um servidor MCP remoto do tipo **Streamable HTTP** com o endereço acima e
sem token. O aplicativo abre o seu navegador para o login; depois de você clicar em
**Allow**, o navegador chega a um endereço `127.0.0.1` — é o aplicativo no seu
computador recebendo o login. Uma página em branco ou "não é possível conectar" ali é
normal: feche a aba.

## Cortar o acesso de um assistente

**tigersystem.io → sua conta → Data → Connected assistants.** Cada
assistente que você autorizou é listado com a data em que foi conectado e a do último uso.
**Cut access** o interrompe na hora.

## Bom saber

- O assistente pode responder com dados de até dois minutos atrás: as leituras recentes são
  mantidas por pouco tempo para deixar tudo rápido e leve.
- O estado ao vivo da impressora (online, imprimindo) não está disponível pela nuvem — somente
  o Tiger Studio, na rede da sua impressora, o vê.
- Anotações, nomes de cores e textos de listas de desejos são palavras suas (ou de um amigo); o
  assistente é instruído a relatá-los, nunca a tomá-los como instruções.

---

**▲ [Índice da documentação](../../README.md)** · **Veja também:** [Tiger Studio](../products/tiger-studio.md), [Guias](./README.md)
