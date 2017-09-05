/* reducers/chat.ts: Redutores que se aplicam ao painel de chat */

import {
  Action,
  ActionType,
} from '../actions/types';
import {
  SenderType,
  Message,
} from '../components/types';
import { simulatedFriendMap } from '../lib/friends/index';
import { SimulatedFriend } from '../lib/friends/types';

const responder = (state: SimulatedFriend | null = null, action: Action) => {
  switch (action.type) {
    case ActionType.START_CHAT:
      return simulatedFriendMap.get(action.payload) || null;
    case ActionType.END_CHAT:
      return null;
    default:
      return state;
  }
};

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

const shouldLoadMessages = (state = false, action: Action) => {
  switch (action.type) {
    case ActionType.START_CHAT:
      return true;
    case ActionType.LOAD_MESSAGES_FULFILLED:
    case ActionType.END_CHAT:  
      return false;
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
    case ActionType.START_CHAT:
    case ActionType.END_CHAT:
      return [];
    case ActionType.LOAD_MESSAGES_FULFILLED:
      return action.payload;  
    default:
      return state;
  }
};

const shouldSimulateAnswer = (state = false, action: Action) => {
  switch (action.type) {
    case ActionType.SEND_MESSAGE:
      if (action.payload.sender.type === SenderType.SELF) {
        return true;
      }
      return false;
    default:
      return state;
  }
};

export default {
  messageText,
  messages,
  shouldLoadMessages,
  responder,
  shouldSimulateAnswer,
};
