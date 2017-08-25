import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  Row,
} from 'react-bootstrap';

import FriendList from './FriendList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Row>
          <FriendList xs={12} sm={12} md={12} />
        </Row>
      </Grid>
    ),
    div,
  );
});
