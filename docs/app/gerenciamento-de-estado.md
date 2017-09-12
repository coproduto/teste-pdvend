# Gerenciamento de Estado

Aqui está documentada a política de gerenciamento de estado do aplicativo.

Todos os componentes aqui referenciados são descritos no documento de Hierarquia
de Componentes e têm sua referência visual nos Wireframes.

## Estado de Interface

__Arquivo__: `src/reducers/interface.ts`

Em dispositivos grandes (desktops e tablets) a interface padrão do app é
exibida, com a exibição simultânea da área de chat e da área de contatos.

Já em dispositivos pequenos (celulares) a interface exibe apenas a área de
contatos inicialmente. Quando da seleção de um contato, a variável de estado
"isInChat" é atualizada para indicar qual parte da interface deve ser mostrada,
e as propriedades relacionadas ao Bootstrap dos componentes são devidamente
atualizadas.

O estado de interface é alterado quando o chat é iniciado (através do clique
em um contato) ou terminado (através do clique na seta de voltar, apenas nos
dispositivos móveis). As ações relacionadas são `startChat` e `endChat`,
implementadas no arquivo `actions/app.ts`.

## Estado de Contatos

__Arquivo__: `src/reducers/friends.ts`

As variáveis aqui definidas se referem ao estado do painel de amigos do app.
As variáveis de estado "searchText" e "friends" guardam, respectivamente, o
texto de busca de contatos e a lista completa de contatos. Como todos os contatos
são simulados, o estado de contatos não é afetado por nenhuma ação - todavia, ele
é mantido como parte do estado do app para possibilitar desenvolvimentos posteriores
onde os contatos precisem ser buscados dinamicamente.

A variável searchText é afetada apenas pela ação `setSearchText`, que altera o
seu valor.

## Estado do Chat

__Arquivo__: `src/reducers/chat.ts`

O estado da área de chat é armazenado aqui. Quando a conversa é realizada
com um contato simulado, os dados desse contato são armazenados na variável
"responder", que é alterada pelas ações `startChat` e `endChat`, já citadas.

O texto da mensagem sendo escrita pelo usuário é armazenado na variável
`messageText`, alterada quando o usuário digita (`setMessageText`) e quando
envia a mensagem (`sendMessage`).

As mensagens são persistidas utilizando a biblioteca `localForage`. A
implementação da persistência de mensagens encontra-se no arquivo
`actions/chat.ts` (ações `loadMessages` e `saveMessages`). A
persistência é gerenciada através das variáveis de estado `shouldLoadMessages`
(que guarda se as mensagens já foram carregadas, através do gerenciador
de compleição da ação `loadMessages`), e da variável `messages`,
a qual guarda as mensagens atualmente visíveis na área de chat.

Finalmente, a simulação de respostas do contato atual é gerenciada pela
variável `shouldSimulateAnswer`, que toma o valor `true` quando o contato
simulado precisa responder a uma mensagem do usuário.

