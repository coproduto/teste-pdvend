/* lib/friends/positive.ts: O contato positivo - responde a tudo com "sim" */

import { SimulatedFriend } from './types';

const PositiveFriend: SimulatedFriend = {
  name: 'Positivo',
  id: 0,
  respond: () => 'Sim.',
};

export default PositiveFriend;
