### FIREBASE EMULATORS
>>> Requer JAVA 11 ou superior
>>> https://firebase.google.com/docs/emulator-suite/install_and_configure?hl=pt-br

> Cada emulador é vinculado a uma porta diferente na sua máquina com um valor padrão preferido.

> Altere as portas do emulador executando firebase init emulators ou editando firebase.json manualmente.

> Mude o caminho para as definições de regras de segurança editando firebase.json manualmente.

<Configuração do ID do projeto>
Dependendo de como você invoca emuladores, é possível executar várias instâncias de um emulador usando diferentes IDs do projeto do Firebase ou várias instâncias de emulador para um determinado ID do projeto. Nesses casos, as instâncias do emulador estão em execução em um ambiente separado.

Geralmente, é recomendável definir um ID do projeto para todas as invocações do emulador. Assim, a IU do Pacote de emuladores, os diferentes emuladores de produtos e todas as instâncias em execução de um determinado emulador podem se comunicar corretamente em todos os casos.

O Pacote de emuladores locais emite avisos quando detecta vários IDs de projetos no ambiente, embora você possa modificar esse comportamento definindo a chave <singleProjectMode como false em firebase.json.>

Iniciar emuladores:
<Comando: emulators:start>

<<Flags opcionais>>

>> --only = Opcional. Limite quais emuladores serão iniciados. Forneça uma lista separada por vírgulas de nomes de emulador, especificando um ou mais de "auth", "database", "firestore", "functions", "hosting" ou "pubsub".

>> --inspect-functions debug_port = Opcional. Use com o emulador do Cloud Functions para ativar a depuração de ponto de interrupção de funções na porta especificada (ou na porta padrão 9229 se o argumento for omitido). Observe que, quando essa sinalização é fornecida, o emulador do Cloud Functions alterna para um modo de execução serializado especial em que as funções são executadas em um único processo, em ordem sequencial (FIFO, na sigla em inglês). Isso simplifica a depuração de funções, embora o comportamento seja diferente da execução paralela de vários processos na nuvem.

>> --export-on-exit = Opcional. Use com o emulador do Authentication, Cloud Firestore, Realtime Database ou Cloud Storage para Firebase. Instrua os emuladores a exportar dados para um diretório quando a interrupção ocorrer, conforme descrito para o comando emulators:export. O diretório de exportação pode ser especificado com esta sinalização: firebase emulators:start --export-on-exit=./saved-data. Se --import for usado, o caminho de exportação será o mesmo, por exemplo: firebase emulators:start --import=./data-path --export-on-exit. Por fim, você pode transmitir caminhos de diretório diferentes para as sinalizações --import e --export-on-exit.

>> --import=import_directory = Opcional. Use com o emulador do Authentication, Cloud Firestore, Realtime Database ou Cloud Storage para Firebase. Importe dados salvos usando a opção de inicialização --export-on-exit ou o comando emulators:export para uma instância de emulador em execução do Authentication, Cloud Firestore, Realtime Database ou Cloud Storage para Firebase. Todos os dados atualmente na memória do emulador serão substituídos.

>> --ui	= Opcional: Execute a IU do emulador durante a execução.

<O método firebase emulators:exec geralmente é mais apropriado para fluxos de trabalho de integração contínua.>

>>>> Exportar e importar dados do emulador:

É possível exportar dados dos emuladores do Authentication, Cloud Firestore, Realtime Database e Cloud Storage para Firebase para usar como um conjunto de dados de referência comum compartilhável. Esses conjuntos de dados podem ser importados usando a <sinalização --import>, conforme descrito acima.

<emulators:export export_directory

>>>> Integrar com o sistema de CI

Gerar um token de autenticação (somente emulador do Hosting)
Se os fluxos de trabalho de integração contínua dependerem do Firebase Hosting, você precisará fazer login usando um token para executar firebase emulators:exec. Os outros emuladores não exigem login.