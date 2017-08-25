/* FriendList.tsx: Componente que renderiza a lista de contatos */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';

import './FriendList.css';

interface FriendListProps extends BootstrapMeasurements { }

const FriendList = ({
  xs,
  sm,
  md,
}: BootstrapMeasurements): React.ReactElement<FriendListProps> => (
    <Col xs={xs} sm={sm} md={md} className="friend-list" />
);

export default FriendList;
