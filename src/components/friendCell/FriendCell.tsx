/* Friend.tsx: Componente que renderiza um único contato */

import * as React from 'react';
import { Action } from '../../actions/types';
import { SimulatedFriend } from '../../lib/friends/types';

import './FriendCell.css';

interface FriendCellProps {
  friendData: SimulatedFriend;
  startChat: (id: number) => Action;
}

const FriendCell = ({
  friendData,
  startChat,
}: FriendCellProps) => (
  <div
    onClick={() => startChat(friendData.id)}
    className="friend-cell"
  >
    <div className="friend-avatar" />
    <span>{friendData.name}</span>
  </div>
);

export default FriendCell;
