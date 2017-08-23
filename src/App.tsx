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
import {
  Grid,
  Row,
} from 'react-bootstrap';
import {
  Friends,
  Chat,
} from './components/index';

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
    reduxRouterMiddleware,
    loggerMiddleware,
  ),
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>  
          <Grid fluid={true} className="App">
            <Row className="full-height">
              <Friends xs={12} sm={4} md={3} />
              <Chat xsHidden={true} sm={8} md={9} />
            </Row>
          </Grid>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
