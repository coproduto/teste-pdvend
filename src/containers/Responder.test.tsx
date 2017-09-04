import * as React from 'react';
import * as ReactDOM from 'react-dom';
import reducers from '../reducers/index';
import {
  createStore,
  combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import Responder from './Responder';

describe('the Responder component', () => {  
  it('renders without crashing', () => {
    const store = createStore(
      combineReducers({ ...reducers }),
      {},
    );
    const div = document.createElement('div');
    ReactDOM.render(
      (
        <Provider store={store}>
          <Responder />
        </Provider>
      ),
      div,
    );
  });
});
