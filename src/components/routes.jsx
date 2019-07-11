import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

const Routes = props => {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/notfound" component={NotFound} />
    </Switch>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});
const connectedRoutes = connect(mapStateToProps)(Routes);
export { connectedRoutes as Routes };
