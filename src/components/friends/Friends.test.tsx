import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';
import { ActionType } from '../../actions/types';

import Friends from './Friends';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Friends
          xs={12}
          sm={12}
          md={12}
          friends={[]}
          responder={null}
          searchText=""
          setSearchText={str => ({
            type: ActionType.SET_SEARCH_TEXT,
            payload: str,
          })}
          startChat={id => ({
            type: ActionType.START_CHAT,
            payload: 0,
          })}
        />
      </Grid>
    ),
    div,
  );
});
