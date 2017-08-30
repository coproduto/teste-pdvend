/* reducers/index.ts: Listagem de todos os reducers */

import appReducers from './app';
import friendsReducers from './friends';
import chatReducers from './chat';

export default {
  ...appReducers,
  ...friendsReducers,
  ...chatReducers,
};
