/* MessageInput.tsx: Componente que renderiza a caixa de entrada de texto */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';
import { Action } from '../../actions/types';

import './MessageInput.css';

interface InputProps extends BootstrapMeasurements {
  messageText: string;
  setMessageText: (str: string) => Action;
}

const MessageInput = ({
  xsHidden,
  xs,
  sm,
  md,
  messageText,
  setMessageText,
}: InputProps): React.ReactElement<InputProps> => (
    <Col
      xsHidden={xsHidden}
      xs={xs}
      sm={sm}
      md={md}
      className="message-input-area"
    >
      <input
        value={messageText}
        onChange={event => setMessageText(event.target.value)}
        className="message-input"
      />
    </Col>
);

export default MessageInput;
