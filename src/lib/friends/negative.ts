/* lib/friends/negative.ts: O contato negativo - responde a tudo com "não" */

import { SimulatedFriend } from './types';

const NegativeFriend: SimulatedFriend = {
  name: 'Negativo',
  id: 1,
  respond: () => 'Não.',
};

export default NegativeFriend;
