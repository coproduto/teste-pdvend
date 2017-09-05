/* SearchField.tsx: Componente que renderiza o campo de busca de contatos */

import * as React from 'react';
import { Col } from 'react-bootstrap';
import { BootstrapMeasurements } from '../types';
import { Action } from '../../actions/types';

import './SearchField.css';

interface SearchFieldProps extends BootstrapMeasurements {
  searchText: string;
  setSearchText: (str: string) => Action;
}

const SearchField = ({
  xs,
  sm,
  md,
  searchText,
  setSearchText,
}: SearchFieldProps): React.ReactElement<SearchFieldProps> => (
  <Col xs={xs} sm={sm} md={md} className="search-field">
    <input
      value={searchText}
      onChange={event => setSearchText(event.target.value.toLowerCase())}
      className="search-input"
    />
  </Col>  
);

export default SearchField;
