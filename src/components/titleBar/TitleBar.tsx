/* TitleBar.tsx: Componente que renderiza a barra de título da área de chat */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';

import './TitleBar.css';

interface TitleBarProps extends BootstrapMeasurements { }

const TitleBar = ({
  xsHidden,
  sm,
  md,
}: BootstrapMeasurements): React.ReactElement<TitleBarProps> => (
  <Col xsHidden={xsHidden} sm={sm} md={md} className="title-bar" />
);

export default TitleBar;
