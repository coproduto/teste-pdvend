/* Friends.tsx: Componente que renderiza a lista de contatos e campo de busca */

import * as React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';
import SearchField from '../searchField/SearchField';
import FriendList from '../friendList/FriendList';
import { Action } from '../../actions/types';

import './Friends.css';

interface FriendsProps extends BootstrapMeasurements {
  searchText: string;
  setSearchText: (str: string) => Action;
}

const Friends = ({
  xs,
  sm,
  md,
  searchText,
  setSearchText,
}: FriendsProps): React.ReactElement<FriendsProps> => (
  <Col sm={sm} md={md} xs={xs} className="friends-area">
    <Row className="search-field-container">
      <SearchField
        xs={12}
        sm={12}
        md={12}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </Row>
    <Row className="friends-list-container">
      <FriendList xs={12} sm={12} md={12} />
    </Row>
  </Col>
);

export default Friends;
