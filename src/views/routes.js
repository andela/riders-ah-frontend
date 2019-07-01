import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  Login  from '../components/authentication/login.jsx';
import  Home  from './home.jsx';
import  Signup  from '../components/authentication/signup.jsx';
import  Verification  from '../components/authentication/verification.jsx';
import { Reset, CompletReset } from '../components';
import NotFound from './notFound.jsx'


const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />    
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/verification" exact component={Verification} />
      <Route path="/reset" exact component={Reset} />
      <Route path="/completReset/:token" exact component={CompletReset} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
