import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  Row,
} from 'react-bootstrap';
import {
  ActionType,
  Action,
} from '../../actions/types';

import SearchField from './SearchField';

it('renders without crashing', () => {
  const setSearchText = (str: string): Action => ({
    type: ActionType.SET_SEARCH_TEXT,
    payload: str,
  });
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Row>
          <SearchField
            xs={12}
            sm={12}
            md={12}
            searchText=""
            setSearchText={setSearchText}
          />
        </Row>
      </Grid>
    ),
    div,
  );
});
