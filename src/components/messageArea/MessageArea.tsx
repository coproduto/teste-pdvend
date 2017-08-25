/* MessageArea.tsx: Componente que renderiza a área de chat */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';

import './MessageArea.css';

interface MessageAreaProps extends BootstrapMeasurements { }

const MessageArea = ({
  xsHidden,
  sm,
  md,
}: BootstrapMeasurements): React.ReactElement<MessageAreaProps> => (
  <Col xsHidden={xsHidden} sm={sm} md={md} className="message-area" />
);

export default MessageArea;
