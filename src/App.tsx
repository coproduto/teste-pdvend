/* App.tsx: Ponto de entrada da aplicação */

// React
import * as React from 'react';

// Redux
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
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

// imports de componentes
import { Interface } from './components/index';

// container do app
import AppContainer from './containers/App';

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production',
});

const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

const initialState = {};

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  initialState,
  applyMiddleware(
    promiseMiddleware(),
    reduxRouterMiddleware,
    loggerMiddleware,
  ),
);

const AppInterface = AppContainer(Interface);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppInterface />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
