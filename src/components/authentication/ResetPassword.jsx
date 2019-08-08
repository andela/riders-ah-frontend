/* eslint-disable no-shadow */
import React from 'react';
import Input from '../common/input';
import Button from '../common/button';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Joi from 'joi-browser';
import { ToastContainer } from 'react-toastify';
import { resetPassword, email } from '../../actions/resetPassword';
import Form from '../common/resetForm';
import Notify from '../../helpers/helpers';

class ResetPassword extends Form {
  state = {
    data: { email: this.props.reset.email },
    errors: {}
  };
  doAction = () => {
    const { email } = this.props.reset;
    this.props.resetPassword(email);
  };
  componentDidMount() {
    document.body.style.backgroundImage =
      "url('../../assets/images/auth-background.jpg')";
  }
  render() {
    const { errors } = this.state;
    const { reset } = this.props;
    if (reset.message) {
      Notify.setAlertInfo(reset.message);
      setTimeout(() => this.props.history.push('/login'), 5000);
    }
    return (
      <div className='container'>
        <ToastContainer />
        <h2>Enter your email</h2>
        <form onSubmit={this.handleOnSubmit}>
          <Input
            value={reset.email}
            type='email'
            name='email'
            onChange={this.handleChange}
            error={errors.email}
            placeholder='Email Address'
            className='form-input'
            id='email'
          />
          <Button
            value='Send Password Reset Email'
            name='sendEmail'
            className='input btn-blue'
            id='sendEmail'
          />
        </form>
      </div>
    );
  }
  schema = {
    email: Joi.string()
      .email()
      .required()
      .label('Email')
  };
}
const mapStateToProps = state => ({
  reset: state.reset
});
ResetPassword.propTypes = {
  reset: PropTypes.object,
  email: PropTypes.func,
  resetPassword: PropTypes.func,
  history: PropTypes.object
};

export default connect(
  mapStateToProps,
  { resetPassword, email }
)(ResetPassword);
