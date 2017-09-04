import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MessageBox from './MessageBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (<MessageBox text="This is a test message" />),
    div,
  );
});
