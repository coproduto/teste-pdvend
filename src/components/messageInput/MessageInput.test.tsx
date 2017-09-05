import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  Row,
} from 'react-bootstrap';
import { SenderType } from '../types';
import { ActionType } from '../../actions/types';

import MessageInput from './MessageInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Row>  
        <MessageInput
          xs={12}
          sm={12}
          md={12}
          isInChat={true}
          messageText=""
          setMessageText={str => ({
            type: ActionType.SET_MESSAGE_TEXT,
            payload: str,
          })}
          sendMessage={str => ({
            type: ActionType.SEND_MESSAGE,
            payload: {
              sender: { type: SenderType.SELF },
              content: str,
            },
          })}    
        />
        </Row>
      </Grid>
    ),
    div,
  );
});
