import React from 'react';

import './styles.css';

 const Button = ({ text, onClick, disabled }) => (
    <button
        disabled={disabled}
        className='button'
        onClick={onClick} >
        {text}
    </button>
);

export default Button;