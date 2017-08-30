/* Chat.tsx: Componente que renderiza a conversa no chat e o campo de mensagem */

import * as React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';
import TitleBar from '../titleBar/TitleBar';
import MessageInput from '../messageInput/MessageInput';
import MessageArea from '../messageArea/MessageArea';
import { Action } from '../../actions/types';

import './Chat.css';

interface ChatProps extends BootstrapMeasurements {
  messageText: string;
  setMessageText: (str: string) => Action;
}

const Chat = ({
  xsHidden,
  xs,
  sm,
  md,
  messageText,
  setMessageText,
}: ChatProps): React.ReactElement<ChatProps> => (
  <Col xsHidden={xsHidden} xs={xs} sm={sm} md={md} className="chat-area">
    <Row className="title-bar-container">
      <TitleBar xs={12} sm={12} md={12} />
    </Row>
    <Row className="message-area-container">
      <MessageArea xs={12} sm={12} md={12} />
    </Row>
    <Row className="message-input-container">
      <MessageInput
        xs={12}
        sm={12}
        md={12}
        messageText={messageText}
        setMessageText={setMessageText}
      />
    </Row>
  </Col>  
);

export default Chat;
