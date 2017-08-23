import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';

import Chat from './Chat';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Chat xsHidden={true} sm={12} md={12} />
      </Grid>
    ),
    div,
  );
});
