import friendsReducers from './friends';
import { ActionType } from '../actions/types';

import defaultFriends from '../lib/friends/index';

describe('searchText reducer', () => {
  const searchText = friendsReducers.searchText;

  it('returns empty string on app start', () => {
    const initialState = searchText(undefined, { type: ActionType.OTHER_ACTION });
    expect(initialState).toBe('');
  });

  it('returns text on text change', () => {
    const newState = searchText('', {
      type: ActionType.SET_SEARCH_TEXT,
      payload: 'test',
    });
    expect(newState).toBe('test');
  });
});

describe('friends reducer', () => {
  const friends = friendsReducers.friends;
  
  it('returns simulated friends on app start', () => {
    const initialState = friends(undefined, { type: ActionType.OTHER_ACTION });
    expect(initialState).toEqual(defaultFriends);
  });
});
