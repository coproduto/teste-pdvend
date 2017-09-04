/* reducers/friends.ts: Redutores que se aplicam ao painel de contatos */

import {
  Action,
  ActionType,
} from '../actions/types';

import { SimulatedFriend } from '../lib/friends/types';
import defaultFriends from '../lib/friends/index';

const searchText = (state = '', action: Action) => {
  switch (action.type) {
    case ActionType.SET_SEARCH_TEXT:
      return action.payload;
    default:
      return state;
  }
};

const friends = (state: SimulatedFriend[] = defaultFriends, action: Action) => {
  switch (action.type) {
    default: return state; // os contatos não mudam - mas isso pode mudar.
  }
};

export default {
  searchText,
  friends,
};
