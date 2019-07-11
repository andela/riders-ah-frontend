import React from "react";
import { PropTypes } from 'prop-types';

const Input = ({ value,type, name, onChange, placeholder, id, validateMessage }) => {
  return (
   <div>
    <input
    value={value}
    type={type}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    id={id}
    />
    <div>{validateMessage}</div>
   </div>
  );
};
Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	id: PropTypes.string,
	validateMessage: PropTypes.object
};
export default Input;
