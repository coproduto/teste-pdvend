/* containers/Chat.tsx: Componente de alta-ordem que realiza a conexão
 * do componente de chat com o Redux.
 */

import * as Redux from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../reducers/types';
import {
  BootstrapMeasurements,
  Message,
} from '../components/types';
import {
  setMessageText,
  sendMessage,
  loadMessages,
  saveMessages,
} from '../actions/chat';
import { endChat } from '../actions/app';

const mapStateToProps = (state: AppState, ownProps: BootstrapMeasurements) => ({
  messageText: state.messageText,
  messages: state.messages,
  responder: state.responder,
  shouldLoadMessages: state.shouldLoadMessages,
  ...ownProps,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<AppState>) => ({
  setMessageText: (str: string) => dispatch(setMessageText(str)),
  sendMessage: (msg: Message) => dispatch(sendMessage(msg)),
  endChat: () => dispatch(endChat()),
  loadMessages: (id: number) => dispatch(loadMessages(id)),
  saveMessages: (id: number, messages: Message[]) =>
    dispatch(saveMessages(id, messages)),
});

export default connect(mapStateToProps, mapDispatchToProps);
