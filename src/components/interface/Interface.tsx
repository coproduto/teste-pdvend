/* Interface.tsx: Componente gráfico que renderiza a interface */

import * as React from 'react';
import {
  Grid,
  Row,
} from 'react-bootstrap';
import Friends from '../friends/Friends';
import Chat from '../chat/Chat';
import FriendsContainer from '../../containers/Friends';
import ChatContainer from '../../containers/Chat';

import { ChatProps } from '../chat/Chat';

interface InterfaceProps {
  isInChat: boolean;
}

const FriendsPanel = FriendsContainer(Friends);
const ChatPanel = ChatContainer(Chat as React.ComponentType<ChatProps>);

class Interface extends React.Component<InterfaceProps> {
  render() {
    return (
      <Grid fluid={true} className="App">
        <Row className="full-height">
          <FriendsPanel xsHidden={this.props.isInChat} xs={12} sm={4} md={3} />
          <ChatPanel xsHidden={!this.props.isInChat} xs={12} sm={8} md={9} />
        </Row>
      </Grid>
    );
  }
}

export default Interface;
