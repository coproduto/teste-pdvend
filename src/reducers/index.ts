/* reducers/index.ts: Listagem de todos os reducers */

import interfaceReducers from './interface';
import friendsReducers from './friends';
import chatReducers from './chat';

export default {
  ...interfaceReducers,
  ...friendsReducers,
  ...chatReducers,
};
