/* containers/App.tsx: Componente de alta-ordem que realiza a conexão
 * do componente raiz com o Redux.
 */

import { connect } from 'react-redux';
import { AppState } from '../reducers/types';

const mapStateToProps = (state: AppState) => ({
  isInChat: state.isInChat,
});

export default connect(mapStateToProps);
