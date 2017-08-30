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
} from '../actions/chat';

const mapStateToProps = (state: AppState, ownProps: BootstrapMeasurements) => ({
  messageText: state.messageText,
  ...ownProps,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<AppState>) => ({
  setMessageText: (str: string) => dispatch(setMessageText(str)),
  sendMessage: (msg: Message) => dispatch(sendMessage(msg)),
});

export default connect(mapStateToProps, mapDispatchToProps);
