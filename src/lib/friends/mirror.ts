/* lib/friends/mirror.ts - O contato espelho - responde com a mesma mensagem */

import { SimulatedFriend } from './types';

const MirrorFriend: SimulatedFriend = {
  name: 'Espelho',
  id: 2,
  respond: (msg: string) => msg,
};

export default MirrorFriend;
