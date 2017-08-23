/* Friends.tsx: Componente que renderiza a lista de contatos e campo de busca */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';

import './Friends.css';

interface FriendsProps extends BootstrapMeasurements { }

const Friends = ({ xs, sm, md }: BootstrapMeasurements): React.ReactElement<FriendsProps> => (
    <Col sm={sm} md={md} xs={xs} className="friends-area" />
);

export default Friends;
