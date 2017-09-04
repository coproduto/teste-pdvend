import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import { ActionType } from '../../actions/types';

import FriendCell from './FriendCell';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <FriendCell
              friendData={{
                id: 0,
                name: 'test friend',
                respond: () => '',
              }}
              startChat={id => ({
                type: ActionType.START_CHAT,
                payload: 0,
              })}
            />
          </Col>
        </Row>
      </Grid>
    ),
    div,
  );
});
