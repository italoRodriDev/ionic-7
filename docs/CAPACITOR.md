# 1 - Instalar capacitor:
>> npm install @capacitor/core @capacitor/cli


# 2 - Habilitar integracoes
>> ionic integrations enable capacitor

# 3 - Sincronize os arquivos gerados no front-end com as plataformas nativas:
>> npx cap sync

# 4 - Fazer build e certifica-se de que o projeto está compilado:
>> ionic build
>> npx cap copy

# 5 - Abrir o Projeto no Android Studio:

>> npx cap open android
# 6 - Executar no emulador:

# 7 - Logs do App: Para ver os logs enquanto o app está rodando:
npx cap run android --target=<ID do Emulador>

# Dicas Úteis
<Sempre que fizer mudanças no front-end, reconstrua o projeto e sincronize as alterações:

> ionic build -> npx cap copy -> npx cap sync