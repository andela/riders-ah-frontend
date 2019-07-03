import React from "react";
import { PropTypes } from "prop-types";

const Button = ({ value, name, onClick, className, onSubmit }) => {
  return (
    <button name={name} onClick={onClick} className={className} onSubmit={onSubmit}>
      {value}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  onSubmit: PropTypes.func
};

export default Button; 
