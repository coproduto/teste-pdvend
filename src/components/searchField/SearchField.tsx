/* SearchField.tsx: Componente que renderiza o campo de busca de contatos */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';

import './SearchField.css';

interface SearchFieldProps extends BootstrapMeasurements { }

const SearchField = ({
  xs,
  sm,
  md,
}: BootstrapMeasurements): React.ReactElement<SearchFieldProps> => (
  <Col xs={xs} sm={sm} md={md} className="search-field" />
);

export default SearchField;
