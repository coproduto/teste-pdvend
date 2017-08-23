# Hierarquia de componentes

Aqui está documentada a hierarquia de componentes que forma o aplicativo.

Em primeiro nível, temos dois componentes:

- O componente `Friends` renderiza a lista de contatos e o campo de busca
de contatos.
- O componente `Chat` renderiza a área de mensagens e o campo para digitação
de nova mensagem.

Os componentes de primeiro nível subdividem-se da seguinte forma:

- O componente `Friends` está dividido nos seguintes componentes:
    * O componente `SearchField` renderiza o campo de busca de contatos.
    * O componente `FriendList` renderiza a lista de contatos.

- O componente `Chat` está dividido nos seguintes componentes:
    * O componente `MessageArea` renderiza as mensagens.
    * O componente `MessageInput` renderiza a caixa de texto para escrita  
de nova mensagem.

As subdivisões menores ainda serão definidas.
