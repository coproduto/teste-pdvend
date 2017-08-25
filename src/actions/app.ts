/* actions/app.ts: Ações que afetam o estado da aplicação, em especial layout */

import {
  Action,
  ActionType,
} from '../types';

export const startChat = (): Action => ({
  type: ActionType.START_CHAT,
});

export const endChat = (): Action => ({
  type: ActionType.END_CHAT,
});
