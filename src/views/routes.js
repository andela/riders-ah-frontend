import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/authentication/login.jsx';
import Signup from '../components/authentication/signup.jsx';
import Verification from '../components/authentication/verification.jsx';
import NotFound from './notFound.jsx';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Home } from './';
import ViewArticles from '../components/articles/viewArticles.jsx';
import { Reset, CompletReset } from '../components';


const Routes = () => {
  return (
    <Switch>
      <Route path="/signup" exact component={Signup} />
      <Route path="/verification" exact component={Verification} />
      <Route path="/reset" exact component={Reset} />
      <Route path="/completReset/:token" exact component={CompletReset} />
      <Route exact path="/" render={props=> <Home {...props} />} />     
      <Route exact path="/login" render={props=> <Login {...props} />} />
      <Route exact path="/articles" render={props => <ViewArticles {...props} />} />
      <Route render={props=> <NotFound {...props} />} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Routes.propTypes = {
  auth: PropTypes.object
};

export default connect(mapStateToProps)(Routes);
