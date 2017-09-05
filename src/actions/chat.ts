/* actions/chat.ts: Ações que afetam o estado do painel de chat */

import {
  Action,
  ActionType,
} from './types';
import { Message } from '../components/types';
import * as LocalForage from 'localforage';

export const setMessageText = (str: string): Action => ({
  type: ActionType.SET_MESSAGE_TEXT,
  payload: str,
});

export const sendMessage = (msg: Message): Action => ({
  type: ActionType.SEND_MESSAGE,
  payload: msg,
});

export const loadMessages = (id: number): Action => ({
  type: ActionType.LOAD_MESSAGES,
  payload: LocalForage.getItem(String(id)).then(item => item || []),
});

export const saveMessages = (id: number, messages: Message[]): Action => ({
  type: ActionType.SAVE_MESSAGES,
  payload: LocalForage.setItem(String(id), messages),
});
