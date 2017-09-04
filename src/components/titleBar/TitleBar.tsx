/* TitleBar.tsx: Componente que renderiza a barra de título da área de chat */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';
import { Action } from '../../actions/types';

import './TitleBar.css';

interface TitleBarProps extends BootstrapMeasurements {
  title: string;
  back: () => Action;
}

const TitleBar = ({
  xsHidden,
  sm,
  md,
  title,
  back,
}: TitleBarProps): React.ReactElement<TitleBarProps> => (
    <Col xsHidden={xsHidden} sm={sm} md={md} className="title-bar">
      <div
        className="title-bar-back hidden-sm hidden-md hidden-lg hidden-xl"
        onClick={back}
      >
        <img src="left-arrow.svg" alt="Voltar" />
      </div>
      <div className="title-bar-title">{title}</div>
    </Col>
);

export default TitleBar;
