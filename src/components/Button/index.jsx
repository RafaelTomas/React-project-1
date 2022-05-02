import React from 'react';
import x from 'prop-types';

import './styles.css';
const Button = ({ text, onClick, disabled }) => (
  <button disabled={disabled} className="button" onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: x.string.isRequired,
  onClick: x.func.isRequired,
  disabled: x.bool,
};

export default Button;
