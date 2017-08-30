import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  Row,
} from 'react-bootstrap';
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
          messageText=""
          setMessageText={str => ({
            type: ActionType.SET_MESSAGE_TEXT,
            payload: str,
          })}
        />
        </Row>
      </Grid>
    ),
    div,
  );
});
