/* reducers/chat.ts: Redutores que se aplicam ao painel de chat */

import {
  Action,
  ActionType,
} from '../actions/types';
import {
  SenderType,
  Message,
} from '../components/types';

const messageText = (state = '', action: Action) => {
  switch (action.type) {
    case ActionType.SET_MESSAGE_TEXT:
      return action.payload;
    case ActionType.SEND_MESSAGE:
      // limpar a mensagem quando o usuário envia
      if (action.payload.sender.type === SenderType.SELF) { 
        return '';
      } else {
        return state;
      }
    default:
      return state;
  }
};

const messages = (state: Message[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.SEND_MESSAGE:
      if (action.payload.content !== '') { // não criar mensagens vazias
        return state.concat(action.payload);
      } else {
        return state;
      }
    default:
      return state;  
  }
};

export default {
  messageText,
  messages,
};
