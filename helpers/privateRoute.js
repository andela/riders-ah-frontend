import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
const PrivateRoute = ({ component: Component, isAuthanticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthanticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  isAuthanticated: PropTypes.bool,
  location: PropTypes.object
};

export default PrivateRoute;
