/* containers/Friends.tsx: Componente de alta-ordem que realiza a conexão
 * do componente de contatos com o Redux.
 */

import * as Redux from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../reducers/types';
import { BootstrapMeasurements } from '../components/types';
import {
  setSearchText,
  startChat,
} from '../actions/friends';

const mapStateToProps = (state: AppState, ownProps: BootstrapMeasurements) => ({
  searchText: state.searchText,
  friends: state.friends,
  ...ownProps,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<AppState>) => ({
  setSearchText: (str: string) => dispatch(setSearchText(str)),
  startChat: (id: number) => dispatch(startChat(id)),
});

export default connect(mapStateToProps, mapDispatchToProps);
