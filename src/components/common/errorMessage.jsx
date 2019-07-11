import React from "react";
import { PropTypes } from "prop-types";
const ErrorMessage = ({ message }) => {
  if (message === true) {
    return <div className="">{message}</div>;
  } else if (message === "loading") {
    return <div className="loadingMessage"><strong>{message}...</strong></div>;
  } else {
    return <div className="errorMessage">{message}</div>;
  }
};

ErrorMessage.propTypes = {
  message: PropTypes.any
};

export default ErrorMessage;
