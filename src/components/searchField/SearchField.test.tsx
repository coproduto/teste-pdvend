import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  Row,
} from 'react-bootstrap';

import SearchField from './SearchField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Row>
          <SearchField xs={12} sm={12} md={12} />
n        </Row>
      </Grid>
    ),
    div,
  );
});
