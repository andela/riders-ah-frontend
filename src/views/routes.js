import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/authentication/login.jsx';
import Signup from '../components/authentication/signup.jsx';
import Verification from '../components/authentication/verification.jsx';
import { Home } from './';
import NotFound from './notFound.jsx';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ViewArticles from '../components/articles/viewArticles.jsx';
import ChatRoom from '../components/chat/chat.jsx';
import PrivateRoute from '../../helpers/privateRoute';
import ReadStats from '../components/profile/readStats';
import {
  Reset,
  CompletReset,
  CreateOrUpdateArticle,
  ViewProfile,
  OneStory,
  Follow,
  ReportedArticles
} from '../components';
import emailInUse from '../components/common/loginError'

const Routes = props => {
  return (
    <Switch>
      <Route path='/signup' exact component={Signup} />
      <Route path='/verification' exact component={Verification} />
      <Route path='/reset' exact component={Reset} />
      <Route path='/completReset/:token' exact component={CompletReset} />
      <Route exact path='/' render={props => <Home {...props} />} />
      <Route path='/verify/409' exact component = {emailInUse} />
      <Route exact path='/login' render={props => <Login {...props} />} />
      <Route
        exact
        path='/articles'
        render={props => <ViewArticles {...props} />}
      />
      <PrivateRoute
        path='/articles/create'
        exact
        component={CreateOrUpdateArticle}
        isAuthanticated={props.auth.isAuthanticated}
      />
      <PrivateRoute
        path='/articles/reported'
        exact
        component={ReportedArticles}
        isAuthanticated={props.auth.isAuthanticated}
      />
      <Route path='/articles/:slug' exact component={OneStory} />
      <PrivateRoute
        path='/articles/update/:slug'
        exact
        component={CreateOrUpdateArticle}
        isAuthanticated={props.auth.isAuthanticated}
      />
      <PrivateRoute
        path='/profile'
        exact
        component={ViewProfile}
        isAuthanticated={props.auth.isAuthanticated}
      />
      <PrivateRoute
        path='/chatroom'
        exact
        component={ChatRoom}
        isAuthanticated={props.auth.isAuthanticated}
      />
      <Route
        exact
        path='/articles'
        render={props => <ViewArticles {...props} />}
      />
      <Route exact path='/stats' component={ReadStats} />
      <Route exact path='/' render={props => <Home {...props} />} />
      <Route render={props => <NotFound {...props} />} />
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
