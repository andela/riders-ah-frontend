import React from "react";
import { PropTypes } from "prop-types";
const ErrorMessage = ({ message }) => {
  if (message === true) {
    return <div className="">{message}</div>;
  } else if (message === "loading") {
    return <div className="loading-message"><strong>{message}...</strong></div>;
  } else {
    return <div className="error-message">{message}</div>;
  }
};

ErrorMessage.propTypes = {
  message: PropTypes.any
};

export default ErrorMessage;
