import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  Row,
} from 'react-bootstrap';

import TitleBar from './TitleBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Row>
          <TitleBar xsHidden={true} sm={12} md={12} />
        </Row>
      </Grid>
    ),
    div,
  );
});
