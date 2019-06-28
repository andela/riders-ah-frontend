import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ value, name, onClick, className, onSubmit, id }) => {
  return (
    <button
      name={name}
      onClick={onClick}
      className={className}
      onSubmit={onSubmit}
      id={id}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  onSubmit :PropTypes.string,
  id: PropTypes.string
};

export default Button;