/* reducers/friends.ts: Redutores que se aplicam ao painel de contatos */

import {
  Action,
  ActionType,
} from '../actions/types';

const searchText = (state = '', action: Action) => {
  switch (action.type) {
    case ActionType.SET_SEARCH_TEXT:
      return action.payload;
    default:
      return state;
  }
};

export default {
  searchText,
};
