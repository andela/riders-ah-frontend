import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

const Input = ({
  value,
  type,
  name,
  onChange,
  error,
  placeholder,
  className,
  id,
  validateMessage
}) => {
  return (
    <Fragment>
      <input
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        id={id}
      />
      {validateMessage ||
        (error && <div className="error-message">{error}</div>)}
    </Fragment>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string
};
export default Input;
