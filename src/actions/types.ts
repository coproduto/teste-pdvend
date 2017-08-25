/* actions/types.ts: Descreve os tipos de ações possíveis */

export type Action =
  | StartChatAction
  | EndChatAction
  | UnknownAction;

export interface StartChatAction {
  type: ActionType.START_CHAT;
}

export interface EndChatAction {
  type: ActionType.END_CHAT;
}

export interface UnknownAction {
  type: ActionType.OTHER_ACTION;
}

export enum ActionType {
  START_CHAT = 'START_CHAT',
  END_CHAT = 'END_CHAT',
  OTHER_ACTION = '__fictional_action__',
}
