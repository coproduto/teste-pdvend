# Hierarquia de componentes

Aqui está documentada a hierarquia de componentes que forma o aplicativo.

Em primeiro nível, temos dois componentes:

- O componente [`Friends`](#friends) renderiza a lista de contatos
e o campo de busca de contatos.
- O componente [`Chat`](#chat) renderiza a área de mensagens e o
campo para digitação de nova mensagem.

Os componentes de primeiro nível subdividem-se da seguinte forma:

## Friends

- O componente `Friends` está dividido nos seguintes componentes:
    * O componente [`SearchField`](#searchField) renderiza o campo de
busca de contatos.
    * O componente [`FriendList`](#friendList) renderiza a lista de contatos.

## Chat

- O componente `Chat` está dividido nos seguintes componentes:
    * O componente [`TitleBar`](#titleBar) renderiza a barra de título.
    * O componente [`MessageArea`](#messageArea) renderiza as mensagens.
    * O componente [`MessageInput`](#messageInput) renderiza a caixa de texto
para escrita de nova mensagem.

Finalmente, os componentes a seguir implementam a interação com o usuário:

## SearchField

- O componente `SearchField` permite ao usuário digitar o nome de um contato
e filtra a lista de contatos à medida que o nome é digitado, de forma a
permitir ao usuário rapidamente buscar seus contatos.

## FriendList

- O componente `FriendList` contém uma visualização dos contatos do usuário,
na qual cada contato é renderizado como um componente `Friend`. Essa
visualização é filtrada quando o usuário digita no componente `SearchField`,
e ao clicar em um componente `Friend`, a área de chat é atualizada para
exibir a conversa com aquele contato.

## TitleBar

- O componente `TitleBar` permite visualizar o nome do contato atual com
quem o usuário está conversando. Ele é atualizado quando o usuário seleciona
um contato para conversar.

## MessageArea

- O componente MessageArea renderiza as mensagens da conversa atual. Cada
mensagem é exibida como um componente `Message`.

## MessageInput

- O componente MessageInput exibe uma caixa de texto para a entrada da nova
mensagem e um botão de envio de mensagem que, quando clicado, agrega a nova
mensagem à conversa atual. 

