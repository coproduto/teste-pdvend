import * as React from 'react';

import MessageBox from '../messageBox/MessageBox';

import {
  SenderType,
  Message,
} from '../types';

import './MessageList.css';

interface MessageListProps {
  messages: Message[];
  hidden: boolean;
}

const MessageList = ({
  messages,
  hidden,
}: MessageListProps): React.ReactElement<MessageListProps> => {
  const messageElements = messages.map((message, index) => {
    switch (message.sender.type) {
      case SenderType.SELF:
        return (
          <div className="right-aligned-message" key={index}>
            <MessageBox text={message.content} key={index} />
          </div>
        );
      case SenderType.OTHER:
        return (
          <div className="left-aligned-message" key={index}>
            <MessageBox text={message.content} key={index} />
          </div>  
        );
      default: return null;
    }
  });
  
  return (
    <div className="message-list">
      {messageElements}
    </div>
  );
};

export default MessageList;
