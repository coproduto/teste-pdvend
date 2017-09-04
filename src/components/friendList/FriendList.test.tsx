import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  Row,
} from 'react-bootstrap';
import { ActionType } from '../../actions/types';

import FriendList from './FriendList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Row>
          <FriendList
            xs={12}
            sm={12}
            md={12}
            friends={[]}
            startChat={id => ({
              type: ActionType.START_CHAT,
              payload: 0,
            })}
            searchText=""
          />
        </Row>
      </Grid>
    ),
    div,
  );
});
