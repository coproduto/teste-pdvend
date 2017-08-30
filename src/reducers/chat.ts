/* reducers/chat.ts: Redutores que se aplicam ao painel de chat */

import {
  Action,
  ActionType,
} from '../actions/types';

const messageText = (state = '', action: Action) => {
  switch (action.type) {
    case ActionType.SET_MESSAGE_TEXT:
      return action.payload;
    default:
      return state;
  }
};

export default {
  messageText,
};
