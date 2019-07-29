/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import queryString from 'query-string';
import LocalLogin from './localLogin.jsx';
import SocialAuth from './socialAuth';
import '../../assets/scss/main.scss';
import {
  setEmail,
  setPassword,
  credentialsValidation,
  loginUser
} from '../../actions/login';
import validateCredentials from '../../../helpers/credentialsValidation';
import Helpers from '../../helpers/helpers';


export class Login extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  componentDidMount() {
    document.body.style.backgroundImage = "url('../../assets/images/auth-background.jpg')";
    if (localStorage.token) {
      this.props.history.replace('/articles');
    }
    const { location } = this.props.history;
    const { token, username, image } = queryString.parse(location.search);
    if (token && username) {
      localStorage.token = token;
      localStorage.username = username;
      localStorage.image = image;
      window.location.replace('/articles');
    }
  }
  handleEmailInput = event => {
    this.props.setEmail(event.target.value);
  };

  handlePasswordInput = event => {
    this.props.setPassword(event.target.value);
  };

  handleClick = credentials => {
    const result = validateCredentials(credentials);
    if (result === true) {
      this.props.loginUser(credentials);
    } else {
      this.props.credentialsValidation(result);
    }
  };

  componentDidUpdate() {
    const { token } = this.props.auth;
    const auth = this.props.auth;
    const { isAuthanticated } = auth;
    if (isAuthanticated && token) {
      Helpers.setToken(token);
    }
    isAuthanticated && this.props.history.replace('/articles');
  }
  render() {
    const { auth } = this.props;
    const { credentials } = auth;
    return (
      <div className='container' id='component-Login'>
        <h1>Authors Haven - Log In</h1>
        <form
          onSubmit={e => e.preventDefault()}
          action='viewArticles.html'
          method=''
        >
          <LocalLogin
            onEmailChange={this.handleEmailInput}
            onPasswordChange={this.handlePasswordInput}
            isValidCredentials={credentials.isValid}
            onClick={() => this.handleClick(credentials)}
          />
          <p>Log In below using:</p>
          <SocialAuth />
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  credentialsValidation: PropTypes.func,
  loginUser: PropTypes.func,
  errors: PropTypes.object,
  auth: PropTypes.object,
  credentials: PropTypes.object,
  history: PropTypes.object,
  token: PropTypes.string
};
const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { setEmail, setPassword, credentialsValidation, loginUser }
)(Login);
