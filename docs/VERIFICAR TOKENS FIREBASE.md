## Tokens e atributos personalizados

É possível enviar o token de sessão do usuário e através do backend
decodificar ele para saber o dono do token.
Para criar atributos no cadastro do usuário, como permissões
diferenciadas, é possível utilizar atributos personalizados. Esses
atributos ficam salvos no auth.

>>> https://firebase.google.com/docs/auth/admin/verify-id-tokens?hl=pt-br


>> Recuperar tokens de ID de clientes

Quando um usuário ou dispositivo faz login, o Firebase cria um token de ID correspondente que o identifica como único e concede a ele acesso a vários recursos, como o Firebase Realtime Database e o Cloud Storage. É possível reutilizar esse token de ID para identificar o usuário ou dispositivo no seu servidor de back-end personalizado. Para recuperar o token de ID do cliente, verifique se o usuário está conectado e, em seguida, acesse o token de ID dele:

````typescript
firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
  // Send token to your backend via HTTPS
  // ...
}).catch(function(error) {
  // Handle error
});
````

# Verificar os tokens de ID com o SDK Admin do Firebase

O SDK Admin do Firebase tem um método integrado para verificar e decodificar tokens de ID. Se o token de ID fornecido tiver o formato correto, não tiver expirado e estiver devidamente assinado, o método retornará o token de ID decodificado. É possível ver o uid do usuário ou o dispositivo do token decodificado.

````typescript
// idToken comes from the client app
getAuth()
  .verifyIdToken(idToken)
  .then((decodedToken) => {
    const uid = decodedToken.uid;
    // ...
  })
  .catch((error) => {
    // Handle error
  });
````

# Controlar o acesso com declarações personalizadas e regras de segurança
>>> https://firebase.google.com/docs/auth/admin/custom-claims