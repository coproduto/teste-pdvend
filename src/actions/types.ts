/* actions/types.ts: Descreve os tipos de ações possíveis */

export type Action =
  | StartChatAction
  | EndChatAction
  | SetSearchTextAction
  | SetMessageTextAction
  | UnknownAction;

export interface StartChatAction {
  type: ActionType.START_CHAT;
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

export interface UnknownAction {
  type: ActionType.OTHER_ACTION;
}

export enum ActionType {
  START_CHAT = 'START_CHAT',
  END_CHAT = 'END_CHAT',
  SET_SEARCH_TEXT = 'SET_SEARCH_TEXT',
  SET_MESSAGE_TEXT = 'SET_MESSAGE_TEXT',
  OTHER_ACTION = '__fictional_action__',
}
