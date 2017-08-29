import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  createStore,
  combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import Interface from './Interface';
import reducers from '../../reducers/index';

it('renders without crashing when chat is open', () => {
  const store = createStore(
    combineReducers({ ...reducers }),
    {},
  );
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Provider store={store}>
        <Interface isInChat={true} />
      </Provider>
    ),
    div
  );
});

it('renders without crashing when chat is closed', () => {
  const store = createStore(
    combineReducers({ ...reducers }),
    {},
  );
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Provider store={store}>
        <Interface isInChat={false} />
      </Provider>
    ),
    div,
  );
});
