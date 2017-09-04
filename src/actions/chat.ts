/* actions/chat.ts: Ações que afetam o estado do painel de chat */

import {
  Action,
  ActionType,
} from './types';
import { Message } from '../components/types';

export const setMessageText = (str: string): Action => ({
  type: ActionType.SET_MESSAGE_TEXT,
  payload: str,
});

export const sendMessage = (msg: Message): Action => ({
  type: ActionType.SEND_MESSAGE,
  payload: msg,
});

export const endChat = (): Action => ({
  type: ActionType.END_CHAT,
});
