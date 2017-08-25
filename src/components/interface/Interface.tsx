/* Interface.tsx: Componente gráfico que renderiza a interface */

import * as React from 'react';
import {
  Grid,
  Row,
} from 'react-bootstrap';
import {
  Friends,
  Chat,
} from '../index';

interface InterfaceProps {
  isInChat: boolean;
}

class Interface extends React.Component<InterfaceProps> {
  render() {
    return (
      <Grid fluid={true} className="App">
        <Row className="full-height">
          <Friends xsHidden={this.props.isInChat} xs={12} sm={4} md={3} />
          <Chat xsHidden={!this.props.isInChat} xs={12} sm={8} md={9} />
        </Row>
      </Grid>
    );
  }
}

export default Interface;
