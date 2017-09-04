/* Friend.tsx: Componente que renderiza um único contato */

import * as React from 'react';
import { Action } from '../../actions/types';
import { SimulatedFriend } from '../../lib/friends/types';
import avatar from '../../lib/avatar/avatar';

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
    <div className="friend-avatar">
      <img
        src={avatar({
          size: 100,
          name: friendData.name,
          id: friendData.id,
        })}
        alt={friendData.name.charAt(0).toUpperCase()}
      />    
    </div>
    <span>{friendData.name}</span>
  </div>
);

export default FriendCell;
