import React from 'react';
import x from 'prop-types';

import './styles.css';

const SearchInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
};

SearchInput.propTypes = {
  searchValue: x.string.isRequired,
  handleChange: x.func.isRequired,
};

export default SearchInput;
