/* MessageBox.tsx: Componente que renderiza uma única mensagem no chat */

import * as React from 'react';

import './MessageBox.css';

interface MessageBoxProps {
  text: string;
}

const MessageBox = ({
  text,
}: MessageBoxProps): React.ReactElement<MessageBoxProps> => {
  return (
    <div className="message-box">
      <span className="message-text">{text}</span>  
    </div>  
  );
};

export default MessageBox;
