/* actions/chat.ts: Ações que afetam o estado do painel de chat */

import {
  Action,
  ActionType,
} from './types';

export const setMessageText = (str: string): Action => ({
  type: ActionType.SET_MESSAGE_TEXT,
  payload: str,
});
