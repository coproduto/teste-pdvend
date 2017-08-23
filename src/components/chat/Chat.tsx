/* Chat.tsx: Componente que renderiza a conversa no chat e o campo de mensagem */

import * as React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';
import { MessageInput } from '../index';

import './Chat.css';

interface ChatProps extends BootstrapMeasurements { }

const Chat = ({ xsHidden, sm, md }: BootstrapMeasurements): React.ReactElement<ChatProps> => (
  <Col xsHidden={xsHidden} sm={sm} md={md} className="chat-area">
    <Row className="message-area-container" />
    <Row className="message-input-container">
      <MessageInput xsHidden={xsHidden} sm={12} md={12} />
    </Row>
  </Col>  
);

export default Chat;
