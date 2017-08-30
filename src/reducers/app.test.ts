import appReducers from './app';
import { ActionType } from '../actions/types';

describe('isInChat reducer', () => {
  const isInChat = appReducers.isInChat;

  it('returns false on app start', () => {
    const initialState = isInChat(undefined, { type: ActionType.OTHER_ACTION });
    expect(initialState).toBe(false);
  });

  it('returns true on chat start', () => {
    const newState = isInChat(false, { type: ActionType.START_CHAT, payload: 1 });
    expect(newState).toBe(true);
  });

  it('returns false on chat end', () => {
    const newState = isInChat(true, { type: ActionType.END_CHAT });
    expect(newState).toBe(false);
  });

  it('preserves state on unhandled action', () => {
    const newState = isInChat(true, { type: ActionType.OTHER_ACTION });
    expect(newState).toBe(true);
  });
});
