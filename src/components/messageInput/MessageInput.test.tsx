import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';

import MessageInput from './MessageInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <MessageInput xsHidden={true} sm={12} md={12} />
      </Grid>
    ),
    div,
  );
});
