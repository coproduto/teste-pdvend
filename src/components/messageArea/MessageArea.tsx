/* MessageArea.tsx: Componente que renderiza a área de chat */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';
import MessageList from '../messageList/MessageList';

import { Message } from '../types';

import './MessageArea.css';

interface MessageAreaProps extends BootstrapMeasurements {
  messages: Message[];
}

class MessageArea extends React.Component<MessageAreaProps> {
  messageScrollRef: HTMLDivElement | null;

  constructor(props: MessageAreaProps) {
    super(props);
    this.messageScrollRef = null;
  }

  componentDidUpdate() {
    if (this.messageScrollRef) {
      const messageScrollHeight = this.messageScrollRef.scrollHeight;
      const visibleHeight = this.messageScrollRef.clientHeight;
      const scrollDistance = messageScrollHeight - visibleHeight;
      this.messageScrollRef.scrollTop = scrollDistance > 0 ? scrollDistance : 0;
    }
  }
  
  render() {
    return (
      <Col
        xsHidden={this.props.xsHidden}
        sm={this.props.sm}
        md={this.props.md}
        className="message-area"
      >
        <div
          ref={(el: HTMLDivElement) => { this.messageScrollRef = el; }}
          className="message-scroll"
        >  
          <MessageList messages={this.props.messages} hidden={false} />
        </div>
      </Col>
    );
  }
}

export default MessageArea;
