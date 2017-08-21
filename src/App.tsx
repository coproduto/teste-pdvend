/* App.tsx: Ponto de entrada da aplicação */

// React
import * as React from 'react';

// Redux
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';

// Router
import createHistory from 'history/createBrowserHistory';
// import { Route } from 'react-router';

// Router-Redux
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';

// Imports próprios
import reducers from './reducers/index';
import './App.css';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>  
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
