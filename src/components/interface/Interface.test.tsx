import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Interface from './Interface';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Interface />, div);
});
