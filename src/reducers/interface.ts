/* reducers/app.ts: Redutores que se aplicam a todos os componentes do aplicativo */

import {
  Action,
  ActionType,
} from '../actions/types';

const isInChat = (state = false, action: Action): boolean => {
  switch (action.type) {
    case ActionType.START_CHAT:
      return true;
    case ActionType.END_CHAT:
      return false;
    default:
      return state;  
  }
};

export default {
  isInChat,
};
