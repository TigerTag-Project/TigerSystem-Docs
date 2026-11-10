---
sourceHash: e67e9a1f7c1b5875001868a32d82d49a6fc2fbfd789bf0823a07c43531d8eea4
sourcePath: docs/guides/connect-an-ai-assistant.md
---

# Ligar um assistente de IA à sua conta

Pergunte ao Claude ou ao ChatGPT «quanto PETG me resta?» e obtenha a resposta a partir do seu próprio inventário. O conector TigerSystem.io permite que um assistente de IA **leia** a sua conta TigerSystem — nada mais. É a mesma ideia do servidor local do Tiger Studio, mas alojado na nuvem: funciona a partir da web, de um telemóvel e sem o Studio em execução.

**O endereço do conector:**

```
https://mcp.tigersystem.io/mcp
```

Fala MCP (Model Context Protocol), o padrão aberto que os assistentes usam para chegar a ferramentas externas. Qualquer assistente que suporte servidores MCP remotos com OAuth pode utilizá-lo.

## O que o assistente pode ler

- as suas bobinas: marca, material, cores, peso restante, temperaturas, onde cada uma está guardada;
- os seus racks, as suas listas de desejos e o seu histórico de stock;
- as suas impressoras e as suas TigerScales — **nunca os respetivos códigos de acesso ou palavras-passe**;
- o que os seus amigos partilham consigo (as bobinas, os racks e as listas de desejos deles).

**Não pode alterar nada**: todas as ferramentas são só de leitura. Lê como se fosse você, sob as mesmas regras de acesso das aplicações, pelo que nunca consegue ver outra conta. As credenciais — códigos de acesso das impressoras, inícios de sessão na nuvem, a sua chave privada, o seu e-mail — nunca são devolvidas, seja o que for que peça.

## Claude (web, computador, telemóvel)

1. **Definições → Conectores → Adicionar conector personalizado.**
2. Dê-lhe o nome `TigerSystem.io`, cole o endereço acima, deixe os campos avançados de OAuth vazios e adicione-o.
3. Clique em **Ligar**. Chega ao tigersystem.io: inicie sessão, confirme que a página diz que as respostas vão para o claude.ai e clique em **Permitir**.
4. Numa conversa, ative o conector TigerSystem.io no menu de ferramentas e faça a sua pergunta.

## ChatGPT

Os conectores personalizados exigem o **modo de programador** (um plano pago; nos planos Business, um administrador ativa-o).

1. **Definições → Apps e conectores → Definições avançadas → Modo de programador** ativado.
2. **Crie** um conector: nome `TigerSystem.io`, o endereço acima, autenticação **OAuth**, sem ID de cliente nem segredo.
3. Inicie sessão no tigersystem.io e clique em **Permitir**.
4. Numa nova conversa, ative o conector e pergunte.

## Grok

Os conectores personalizados exigem um **plano Grok pago**.

1. Abra **grok.com/connectors → Novo conector → Personalizado**.
2. Dê-lhe o nome `TigerSystem.io` e cole o endereço acima.
3. Inicie sessão no tigersystem.io e clique em **Permitir**.
4. Numa conversa, ative o conector TigerSystem.io e pergunte.

## Le Chat (Mistral)

Os conectores personalizados são adicionados por um **administrador** — numa conta pessoal, é você.

1. **Conectores → Adicionar conector → Conector MCP personalizado.**
2. Dê-lhe o nome `TigerSystem.io` e cole o endereço acima; o Le Chat deteta sozinho o método de início de sessão (OAuth).
3. Inicie sessão no tigersystem.io e clique em **Permitir**.
4. Numa conversa, ative o conector e pergunte.

Os nomes dos menus mudam com frequência nestas aplicações; os passos mantêm-se.

## Codex, Cursor e outros clientes de computador

Adicione um servidor MCP remoto do tipo **Streamable HTTP** com o endereço acima e sem token. A aplicação abre o navegador para o início de sessão; depois de clicar em **Permitir**, o navegador chega a um endereço `127.0.0.1` — é a aplicação, no seu computador, a recolher o início de sessão. Uma página em branco ou «não é possível ligar» aí é normal: feche o separador.

## Cortar o acesso a um assistente

**tigersystem.io → a sua conta → Dados → Assistentes ligados.** Cada assistente que permitiu aparece listado com a data em que foi ligado e a da última utilização. **Cortar acesso** pára-o de imediato.

## Bom saber

- O assistente pode responder com dados de há até dois minutos: as leituras recentes são mantidas durante pouco tempo para tudo ser rápido e leve.
- O estado em direto da impressora (online, a imprimir) não está disponível a partir da nuvem — só o Tiger Studio, na rede da sua impressora, o vê.
- As notas, os nomes das cores e o texto das listas de desejos são palavras suas (ou de um amigo); o assistente é instruído a reportá-las, nunca a tomá-las como instruções.

---

**▲ [Índice da documentação](../../README.md)** · **Ver também:** [Tiger Studio](../products/tiger-studio.md), [Guias](./README.md)
