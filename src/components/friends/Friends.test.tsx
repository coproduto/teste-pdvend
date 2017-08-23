import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';

import Friends from './Friends';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Friends xs={12} sm={12} md={12} />
      </Grid>
    ),
    div,
  );
});
