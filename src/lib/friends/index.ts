/* lib/friends/index.ts - Lista de todos os contatos simulados para facilitar
 * a importação posterior
 */

import PositiveFriend from './positive';
import NegativeFriend from './negative';
import MirrorFriend from './mirror';

import { SimulatedFriend } from './types';

const friends = [
  PositiveFriend,
  NegativeFriend,
  MirrorFriend
];

const simulatedFriendMap = new Map(
  friends.map(friend => [friend.id, friend]) as [number, SimulatedFriend][],
);

export { simulatedFriendMap };
export default friends;
