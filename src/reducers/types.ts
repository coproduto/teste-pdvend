/* reducers/types.ts: Tipo do estado do aplicativo */

import { Message } from '../components/types';
import { SimulatedFriend } from '../lib/friends/types';

export interface AppState {
  isInChat: boolean;
  searchText: string;
  friends: SimulatedFriend[];
  messageText: string;
  messages: Message[];
  responder: SimulatedFriend | null;
  shouldSimulateAnswer: boolean;
}
