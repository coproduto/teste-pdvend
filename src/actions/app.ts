/* actions/app.ts: Ações que afetam o estado da aplicação, em especial layout */

import {
  Action,
  ActionType,
} from './types';

export const startChat = (id: number): Action => ({
  type: ActionType.START_CHAT,
  payload: id,
});

export const endChat = (): Action => ({
  type: ActionType.END_CHAT,
});
