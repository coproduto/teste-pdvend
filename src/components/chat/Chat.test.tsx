import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';
import { ActionType } from '../../actions/types';

import Chat from './Chat';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Chat
          xsHidden={true}
          xs={12}
          sm={12}
          md={12}
          messageText=""
          messages={[]}
          setMessageText={str => ({
            type: ActionType.SET_MESSAGE_TEXT,
            payload: str,
          })}
          sendMessage={msg => ({
            type: ActionType.SEND_MESSAGE,
            payload: msg,
          })}
        />
      </Grid>
    ),
    div,
  );
});
