/* reducers/types.ts: Tipo do estado do aplicativo */

import { Message } from '../components/types';

export interface AppState {
  isInChat: boolean;
  searchText: string;
  messageText: string;
  messages: Message[];
}
