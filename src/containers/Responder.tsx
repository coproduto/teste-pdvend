/* containers/Responder.tsx: Componente de alta-ordem que gerencia as respostas
 * automáticas dos contatos simulados
 */

import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../reducers/types';
import { sendMessage } from '../actions/chat';
import {
  Message,
  SenderType,
} from '../components/types';
import { Action } from '../actions/types';
import { SimulatedFriend } from '../lib/friends/types';

const mapStateToProps = (state: AppState) => ({
  responder: state.responder,
  shouldSimulateAnswer: state.shouldSimulateAnswer,
  messages: state.messages,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<AppState>) => ({
  sendMessage: (msg: Message) => dispatch(sendMessage(msg)),
});

interface ResponderProps {
  responder: SimulatedFriend | null;
  shouldSimulateAnswer: boolean;
  messages: Message[];
  sendMessage: (msg: Message) => Action;
}

class Responder extends React.Component<ResponderProps> {
  componentDidUpdate() {
    if (this.props.shouldSimulateAnswer && this.props.responder) {
      const messageToRespond = this.props.messages.slice(-1)[0];
      const stringToRespond = messageToRespond ? messageToRespond.content : '';
      this.props.sendMessage({
        sender: {
          type: SenderType.OTHER,
          id: this.props.responder.id,
        },
        content: this.props.responder.respond(stringToRespond),
      });
    }
  }
  
  render() {
    return this.props.children
      ? this.props.children as React.ReactElement<{}>
      : null;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Responder);
