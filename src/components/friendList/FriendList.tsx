/* FriendList.tsx: Componente que renderiza a lista de contatos */
/* FriendList.tsx: Componente que renderiza a lista de contatos */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';
import FriendCell from '../friendCell/FriendCell';

import { Action } from '../../actions/types';
import { SimulatedFriend } from '../../lib/friends/types';
import './FriendList.css';

interface FriendListProps extends BootstrapMeasurements {
  friends: SimulatedFriend[];
  searchText: string;
  startChat: (id: number) => Action | null;
}

const FriendList = ({
  xs,
  sm,
  md,
  friends,
  searchText,
  startChat,
}: FriendListProps): React.ReactElement<FriendListProps> => (
  <Col xs={xs} sm={sm} md={md} className="friend-list">
    {friends.filter(friend => friend.name.toLowerCase().startsWith(searchText))
      .map(friend => (
        <FriendCell
          friendData={friend}
          key={friend.id}
          startChat={startChat}
        />
    ))}
  </Col>
);

export default FriendList;
