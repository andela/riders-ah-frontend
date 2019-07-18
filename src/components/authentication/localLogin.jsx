import React from 'react';
import { PropTypes } from 'prop-types';

import Input from '../common/input.jsx';
import Button from '../common/button.jsx';
import ErrorMessage from '../common/errorMessage.jsx';
const LocalLogin = ({
  onEmailChange,
  onPasswordChange,
  isValidCredentials,
  onClick
}) => {
  return (
    <div id='component-LocalLogin'>
      <Input
        type='email'
        name='loginEmail'
        onChange={onEmailChange}
        placeholder='Email Address'
        className='form-input'
        id='email'
      />
      <Input
        type='password'
        name='loginPassword'
        onChange={onPasswordChange}
        placeholder='password'
        className='form-input'
        id='password'
      />
      <Button
        value='Log In'
        name='loginButton'
        onClick={onClick}
        className='input btn-blue'
      />
      <br />
      <ErrorMessage message={isValidCredentials} />
      <br />
      <strong>
        <a href='/signup' className='link right'>
          Create Account
        </a>
      </strong>
      <strong>
        <a href='/reset' className='link left'>
          Forgot Password?
        </a>
      </strong>
      <br />
      <br />
      <br />
    </div>
  );
};

LocalLogin.propTypes = {
  onEmailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  isValidCredentials: PropTypes.any,
  onClick: PropTypes.func
};

export default LocalLogin;
