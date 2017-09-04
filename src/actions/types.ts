 /* actions/types.ts: Descreve os tipos de ações possíveis */

import { Message } from '../components/types';

export type Action =
  | StartChatAction
  | EndChatAction
  | SetSearchTextAction
  | SetMessageTextAction
  | SendMessageAction
  | UnknownAction;

export interface StartChatAction {
  type: ActionType.START_CHAT;
  payload: number; // identificador do usuário
}

export interface EndChatAction {
  type: ActionType.END_CHAT;
}

export interface SetSearchTextAction {
  type: ActionType.SET_SEARCH_TEXT;
  payload: string;
}

export interface SetMessageTextAction {
  type: ActionType.SET_MESSAGE_TEXT;
  payload: string;
}

export interface SendMessageAction {
  type: ActionType.SEND_MESSAGE;
  payload: Message;
}

export interface UnknownAction {
  type: ActionType.OTHER_ACTION;
}

export enum ActionType {
  START_CHAT = 'START_CHAT',
  END_CHAT = 'END_CHAT',
  SET_SEARCH_TEXT = 'SET_SEARCH_TEXT',
  SET_MESSAGE_TEXT = 'SET_MESSAGE_TEXT',
  SEND_MESSAGE = 'SEND_MESSAGE',
  OTHER_ACTION = '__fictional_action__',
}
