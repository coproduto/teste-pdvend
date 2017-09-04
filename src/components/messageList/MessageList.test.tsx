import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Message } from '../types';

import MessageList from './MessageList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const messages = [] as Message[];
  ReactDOM.render(
    (<MessageList messages={messages} hidden={false} />),
    div,
  );
});
