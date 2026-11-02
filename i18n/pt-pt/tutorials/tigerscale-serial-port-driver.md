---
sourceHash: 21c590819f1537d9f13509bdfd8d3a6fff07ec1a0ae3d42396f7ac8b624b45d0
sourcePath: docs/tutorials/tigerscale-serial-port-driver.md
---

# Fazer aparecer a porta COM para gravar a TigerScale V3

A TigerScale V3 usa um chip **ESP32-S3**. Para gravar o firmware, o computador precisa de ver a placa como uma **porta COM / porta série**.

Na maioria dos computadores recentes esta porta aparece **sozinha** quando liga a placa.
Se nenhuma porta aparecer no gravador, falta um pequeno controlador: siga a secção do seu sistema abaixo.

> **Antes de começar**
> - Use um verdadeiro **cabo de dados USB** (alguns cabos só carregam e não transportam dados).

## macOS — nada para instalar

Não é necessário controlador.
Ligue a placa, abra o gravador e a placa aparece diretamente na lista. Selecione-a e inicie a gravação.

Se não aparecer: troque o cabo USB e tente de novo.

## Windows — instalar o controlador (se não aparecer nenhuma porta COM)

Se o gravador não mostrar nenhuma porta, falta o controlador USB da Espressif. Eis como
o instalar, passo a passo:

1. **Transfira a ferramenta** — clique nesta ligação, que transfere o `idf-env.exe` diretamente
 do próprio servidor da Espressif (por predefinição fica na sua pasta **Transferências**):
 **[https://dl.espressif.com/dl/idf-env/idf-env.exe](https://dl.espressif.com/dl/idf-env/idf-env.exe)**
2. **Abra o PowerShell como administrador** — clique no menu **Iniciar**, escreva
 `powershell`, clique com o botão direito em **Windows PowerShell** e escolha **Executar
 como administrador**.
3. **Copie esta única linha, cole-a no PowerShell e prima Enter:**

 ```powershell
 cd $env:USERPROFILE\Downloads; .\idf-env.exe driver install --espressif
 ```

 > Guardou o ficheiro noutro sítio que não as Transferências? Substitua apenas
 > `$env:USERPROFILE\Downloads` por essa pasta — por exemplo
 > `C:\Users\oseunome\Desktop`. O resto da linha mantém-se igual.

4. Espere que termine (alguns segundos).
5. **Desligue e volte a ligar a placa.**
6. Volte a abrir o gravador: a porta (p. ex. `USB JTAG/serial debug unit (COM3)`) deve agora aparecer.

> Transferir a ferramenta você mesmo, em vez de colar um comando de uma linha que
> vai buscar e executa um executável com direitos de administrador, permite-lhe ver
> o que está prestes a executar e de onde veio. É um clique a mais.

✓ Selecione esta porta e inicie a gravação.

## Linux — conceder acesso à porta série

A porta aparece normalmente sozinha (`/dev/ttyACM0`), mas o seu utilizador precisa de permissão para lhe aceder.

1. Abra um **terminal**.
2. Adicione-se ao grupo que gere as portas série:

 ```bash
 sudo usermod -aG dialout $USER
 ```

3. **Termine a sessão e volte a iniciá-la** (ou reinicie) para que tenha efeito.
4. Volte a ligar a placa e reabra o gravador.

> Dica: se usar o gravador **num navegador** (Web Serial), use o **Google Chrome** ou o **Microsoft Edge**; o Firefox não suporta esta funcionalidade.

## Continua a não funcionar

- **Troque o cabo USB** (problema n.º 1: um cabo «só de carga»).
- Experimente **outra porta USB** do computador (de preferência uma porta direta, não um hub).
- No Windows, abra o **Gestor de Dispositivos**: se vir um dispositivo com um ponto de exclamação amarelo, falta o controlador → refaça a secção do Windows acima.
- Para forçar o modo de gravação: mantenha premido o botão **BOOT**, prima **RESET** uma vez e depois solte o **BOOT**, e tente de novo.

---

**◀ Anterior:** [TigerScale](../products/tigerscale.md) · **▲ [Índice da documentação](../../README.md)**
