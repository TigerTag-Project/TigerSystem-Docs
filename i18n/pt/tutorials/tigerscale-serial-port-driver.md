---
sourceHash: 21c590819f1537d9f13509bdfd8d3a6fff07ec1a0ae3d42396f7ac8b624b45d0
sourcePath: docs/tutorials/tigerscale-serial-port-driver.md
---

# Como fazer a porta COM aparecer para gravar o firmware da TigerScale V3

A TigerScale V3 usa um chip **ESP32-S3**. Para gravar o firmware, seu computador precisa enxergar a placa como uma **porta COM / porta serial**.

Na maioria dos computadores recentes essa porta aparece **sozinha** quando você conecta a placa.
Se nenhuma porta aparecer no gravador, falta um pequeno driver: siga a seção do seu sistema abaixo.

> **Antes de começar**
> - Use um **cabo USB de dados** de verdade (alguns cabos só carregam e não transmitem dados).

## macOS — nada para instalar

Nenhum driver necessário.
Conecte a placa, abra o gravador e a placa aparece direto na lista. Selecione-a e inicie a gravação.

Se ela não aparecer: troque o cabo USB e tente de novo.

## Windows — instale o driver (se nenhuma porta COM aparecer)

Se o gravador não mostrar nenhuma porta, falta o driver USB da Espressif. Veja como
instalá-lo, passo a passo:

1. **Baixe a ferramenta** — clique neste link, ele baixa o `idf-env.exe` direto
 do servidor da própria Espressif (por padrão ele cai na sua pasta
 **Downloads**):
 **[https://dl.espressif.com/dl/idf-env/idf-env.exe](https://dl.espressif.com/dl/idf-env/idf-env.exe)**
2. **Abra o PowerShell como administrador** — clique no menu **Iniciar**, digite
 `powershell`, clique com o botão direito em **Windows PowerShell** e escolha **Executar
 como administrador**.
3. **Copie esta única linha, cole no PowerShell e pressione Enter:**

 ```powershell
 cd $env:USERPROFILE\Downloads; .\idf-env.exe driver install --espressif
 ```

 > Salvou o arquivo em outro lugar que não Downloads? Substitua apenas
 > `$env:USERPROFILE\Downloads` por essa pasta — por exemplo
 > `C:\Users\seunome\Desktop`. O resto da linha continua igual.

4. Espere terminar (alguns segundos).
5. **Desconecte e conecte a placa de novo.**
6. Reabra o gravador: a porta (por exemplo, `USB JTAG/serial debug unit (COM3)`) deve aparecer agora.

> Baixar a ferramenta você mesmo, em vez de colar um comando de uma linha que
> busca e executa um programa com direitos de administrador, permite ver
> o que você está prestes a executar e de onde veio. É um clique a mais.

✓ Selecione esta porta e inicie a gravação.

## Linux — conceda acesso à porta serial

A porta geralmente aparece sozinha (`/dev/ttyACM0`), mas seu usuário precisa de permissão para acessá-la.

1. Abra um **terminal**.
2. Adicione-se ao grupo que gerencia as portas seriais:

 ```bash
 sudo usermod -aG dialout $USER
 ```

3. **Saia e entre de novo na sessão** (ou reinicie) para que tenha efeito.
4. Conecte a placa de novo e reabra o gravador.

> Dica: se você usa o gravador **em um navegador** (Web Serial), use o **Google Chrome** ou o **Microsoft Edge**; o Firefox não suporta esse recurso.

## Ainda não funciona

- **Troque o cabo USB** (problema nº 1: um cabo “só de carga”).
- Experimente **outra porta USB** do computador (de preferência uma porta direta, não um hub).
- No Windows, abra o **Gerenciador de Dispositivos**: se você vir um dispositivo com um ponto de exclamação amarelo, falta o driver → refaça a seção do Windows acima.
- Para forçar o modo de gravação: segure o botão **BOOT**, pressione **RESET** uma vez e depois solte o **BOOT**, e tente de novo.

---

**◀ Anterior:** [TigerScale](../products/tigerscale.md) · **▲ [Índice da documentação](../../README.md)**
