import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import LocalLogin from './localLogin.jsx';
import {
  setEmail,
  setPassword,
  credentialsValidation,
  loginUser
} from '../../actions/login';
import validateCredentials from '../../../helpers/credentialsValidation';
class Login extends Component {
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
      if (localStorage.token) {
        localStorage.removeItem('token');
        localStorage.setItem('token', token);
      } else {
        localStorage.setItem('token', token);
      }
    }
    isAuthanticated && this.props.history.push('/articles');
  }
  render() {
    const { auth } = this.props;
    const { credentials } = auth;
    return (
      <div className='container' id='component-Login'>
        <h1>Authors Haven - Log In</h1>
        <form onSubmit={e => e.preventDefault()}>
          <LocalLogin
            onEmailChange={this.handleEmailInput}
            onPasswordChange={this.handlePasswordInput}
            isValidCredentials={credentials.isValid}
            onClick={() => this.handleClick(credentials)}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

Login.propTypes = {
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  credentialsValidation: PropTypes.func,
  loginUser: PropTypes.func,
  auth: PropTypes.object,
  credentials: PropTypes.object,
  history: PropTypes.object,
  token: PropTypes.string
};

export default connect(
  mapStateToProps,
  { setEmail, setPassword, credentialsValidation, loginUser }
)(Login);
