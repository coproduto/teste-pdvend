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
import { SimulatedFriend } from '../../lib/friends/types';

import './Chat.css';

export interface ChatProps extends BootstrapMeasurements {
  messages: Message[];
  messageText: string;
  responder: SimulatedFriend | null;
  setMessageText: (str: string) => Action;
  sendMessage: (msg: Message) => Action;
  endChat: () => Action;
  loadMessages: (id: number) => Action;
  saveMessages: (id: number, messages: Message[]) => Action;
  shouldLoadMessages: boolean;
}

export default class Chat extends React.Component<ChatProps> {
  componentDidUpdate(prevProps: ChatProps) {
    if (prevProps.messages.length < this.props.messages.length
        && this.props.responder) {
      this.props.saveMessages(this.props.responder.id, this.props.messages);
    }
    
    if (this.props.shouldLoadMessages && this.props.responder) {
      this.props.loadMessages(this.props.responder.id);
    }
  }
  
  render() {
    return (
      <Responder>
        <Col
          xsHidden={this.props.xsHidden}
          xs={this.props.xs}
          sm={this.props.sm}
          md={this.props.md}
          className="chat-area"
        >
          <Row className="title-bar-container">
            <TitleBar
              xs={12}
              sm={12}
              md={12}
              title={this.props.responder ? this.props.responder.name : ''}
              back={this.props.endChat}
            />
          </Row>
          <Row className="message-area-container">
            <MessageArea
              xs={12}
              sm={12}
              md={12}
              messages={this.props.messages}
            />
          </Row>
          <Row className="message-input-container">
            <MessageInput
              xs={12}
              sm={12}
              md={12}
              messageText={this.props.messageText}
              setMessageText={this.props.setMessageText}
              sendMessage={str => this.props.sendMessage({
                sender: { type: SenderType.SELF },
                content: str,
              })}
            />
          </Row>
        </Col>
      </Responder>
    );
  }
}
