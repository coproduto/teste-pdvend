/* MessageInput.tsx: Componente que renderiza a caixa de entrada de texto */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';

import './MessageInput.css';

interface InputProps extends BootstrapMeasurements { }

const MessageInput = ({ xsHidden, sm, md }: BootstrapMeasurements): React.ReactElement<InputProps> => (
    <Col xsHidden={xsHidden} sm={sm} md={md} className="message-input-area" />
);

export default MessageInput;
