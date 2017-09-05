/* MessageInput.tsx: Componente que renderiza a caixa de entrada de texto */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';
import { Action } from '../../actions/types';

import './MessageInput.css';

interface InputProps extends BootstrapMeasurements {
  isInChat: boolean;
  messageText: string;
  setMessageText: (str: string) => Action;
  sendMessage: (str: string) => Action;
}

const MessageInput = ({
  xsHidden,
  xs,
  sm,
  md,
  isInChat,
  messageText,
  setMessageText,
  sendMessage,
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
        disabled={!isInChat}
        onChange={event => setMessageText(event.target.value)}
        onKeyPress={event => {
          if (event && event.key === 'Enter') {
            return sendMessage(messageText);
          } else {
            return null;
          }
        }}
        className="message-input"
      />
    </Col>
);

export default MessageInput;
