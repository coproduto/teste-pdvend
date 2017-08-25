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

O resto do gerenciamento de estado ainda será documentado aqui.
