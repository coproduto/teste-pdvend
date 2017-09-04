import chatReducers from './chat';
import { ActionType } from '../actions/types';
import {
    SenderType,
    OwnMessageSender,
    OtherMessageSender,
} from '../components/types';

describe('messageText reducer', () => {
  const messageText = chatReducers.messageText;

  it('returns empty string on app start', () => {
    const initialState = messageText(undefined, { type: ActionType.OTHER_ACTION });
    expect(initialState).toBe('');
  });

  it('returns text on text change', () => {
    const newState = messageText('', {
      type: ActionType.SET_MESSAGE_TEXT,
      payload: 'test',
    });
    expect(newState).toBe('test');
  });
});

describe('messages reducer', () => {
  const messages = chatReducers.messages;

  it('returns empty list on app start', () => {
    const initialState = messages(undefined, { type: ActionType.OTHER_ACTION });
    expect(initialState).toEqual([]);
  });

  it('appends message on message send', () => {
    const previousMessages = [
      {
        sender: {
          type: SenderType.OTHER,
          id: 1,
        } as OtherMessageSender,
        content: 'test message by other',
      },
      {
        sender: {
          type: SenderType.SELF,
        } as OwnMessageSender,
        content: 'test message by self',
      },
    ];
    const message = {
      sender: {
        type: SenderType.SELF,
      } as OwnMessageSender,
      content: 'test sending new message by self',
    };
      
    const newState = messages(previousMessages, {
      type: ActionType.SEND_MESSAGE,
      payload: message,
    });

    // não altera as mensagens já enviadas
    expect(newState.slice(0, -1)).toEqual(previousMessages);
    // concatena a nova mensagem
    expect(newState.slice(-1)).toEqual([message]);
  });
});

describe('responder reducer', () => {
  const responder = chatReducers.responder;

  it('returns null on app start', () => {
    const initialState = responder(undefined, { type: ActionType.OTHER_ACTION });
    expect(initialState).toBeNull();
  });

  it('returns responder on chat start', () => {
    const newState = responder(null, {
      type: ActionType.START_CHAT,
      payload: 0,
    });
    if (newState) {
      expect(newState.name).toBe('Positivo');
      expect(newState.respond).not.toBeFalsy();
    } else {
      throw new Error('Responder did not return a friend');
    }
  });

  it('returns null on chat end', () => {
    const aState = responder(null, {
      type: ActionType.START_CHAT,
      payload: 0,
    });
    const newState = responder(aState, {
      type: ActionType.END_CHAT,
    });
    expect(newState).toBeNull();
  });
});
