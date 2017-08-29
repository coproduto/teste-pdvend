/* actions/friends.ts: Ações que afetam o estado do painel de contatos */

import {
  Action,
  ActionType,
} from './types';

export const setSearchText = (str: string): Action => ({
  type: ActionType.SET_SEARCH_TEXT,
  payload: str,
});
