import React, { useState } from 'react';
import x from 'prop-types';

import './styles.css';
import useDebounce from '../../hooks/useDebounce';

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 5000);

  function handleChange(event) {
    const { value: dataValue } = event.target;
    setDisplayValue(dataValue);
    debouncedChange(dataValue);
  }

  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={displayValue}
      type="search"
      placeholder="Type your search"
    />
  );
};

SearchInput.propTypes = {
  value: x.string.isRequired,
  onChange: x.func.isRequired,
};

export default SearchInput;
