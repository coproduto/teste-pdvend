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
import Responder from '../../containers/Responder';
import {
  Message,
  SenderType,
} from '../types';
import { Action } from '../../actions/types';
import { Friend } from '../../lib/friends/types';

import './Chat.css';

interface ChatProps extends BootstrapMeasurements {
  messages: Message[];
  messageText: string;
  responder: Friend | null;
  setMessageText: (str: string) => Action;
  sendMessage: (msg: Message) => Action;
  endChat: () => Action;
}

const Chat = ({
  // propriedades de layout
  xsHidden,
  xs,
  sm,
  md,

  // mensagens + nova mensagem
  messageText,
  messages,

  // contato selecionado
  responder,

  // ações
  setMessageText,
  sendMessage,
  endChat
}: ChatProps): React.ReactElement<ChatProps> => (
  <Responder>
    <Col xsHidden={xsHidden} xs={xs} sm={sm} md={md} className="chat-area">
      <Row className="title-bar-container">
        <TitleBar
          xs={12}
          sm={12}
          md={12}
          title={responder ? responder.name : ''}
          back={endChat}
        />
      </Row>
      <Row className="message-area-container">
        <MessageArea
          xs={12}
          sm={12}
          md={12}
          messages={messages}
        />
      </Row>
      <Row className="message-input-container">
        <MessageInput
          xs={12}
          sm={12}
          md={12}
          messageText={messageText}
          setMessageText={setMessageText}
          sendMessage={str => sendMessage({
            sender: { type: SenderType.SELF },
            content: str,
          })}
        />
      </Row>
    </Col>
  </Responder>
);

export default Chat;
