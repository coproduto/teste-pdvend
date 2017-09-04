import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';
import { ActionType } from '../../actions/types';
import {
  createStore,
  combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../reducers/index';

import Chat from './Chat';

it('renders without crashing', () => {
  const store = createStore(
    combineReducers({ ...reducers }),
    {},
  );

  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Provider store={store}>
        <Grid>
          <Chat
            xsHidden={true}
            xs={12}
            sm={12}
            md={12}
            messageText=""
            messages={[]}
            responder={null}
            setMessageText={str => ({
              type: ActionType.SET_MESSAGE_TEXT,
              payload: str,
            })}
            sendMessage={msg => ({
              type: ActionType.SEND_MESSAGE,
              payload: msg,
            })}
            endChat={() => ({
              type: ActionType.END_CHAT,
            })}
          />
        </Grid>
      </Provider>
    ),
    div,
  );
});
