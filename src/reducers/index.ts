/* reducers/index.ts: Listagem de todos os reducers */

import appReducers from './app';
import friendsReducers from './friends';

export default {
  ...appReducers,
  ...friendsReducers,
};
