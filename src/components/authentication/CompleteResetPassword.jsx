import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Joi from 'joi-browser';
import { ToastContainer } from 'react-toastify';
import Form from '../common/resetForm';
import Notify from '../../helpers/helpers';
import {
  newPassword,
  confirmNewPassword,
  completeResetPassword
} from '../../actions/resetPassword';
import Input from '../common/input';
import Button from '../common/button';
import Helpers from '../../helpers/helpers';

class CompleteResetPassword extends Form {
  state = {
    data: {
      newPassword: this.props.reset.newPassword,
      confirmNewPassword: this.props.reset.confirmNewPassword
    },
    errors: {}
  };
  componentDidMount() {
    const token = this.props.match.params.token;
    Helpers.setToken(token);
  }
  doAction = () => {
    const {
      newPassword: password,
      confirmNewPassword: passwordConfirm
    } = this.props.reset;
    this.props.completeResetPassword(password, passwordConfirm);
  };
  render() {
    const { errors } = this.state;
    const { reset } = this.props;
    if (reset.message) {
      Notify.setAlertInfo(reset.message);
      setTimeout(() => this.props.history.push('/login'), 5000);
    }

    return (
      <div className="container">
        <ToastContainer />
        <h2>Change your Password</h2>
        <h4>
          Your password must contain capital letter,small letter and special
          characters. Otherwise it will not be accepted
        </h4>
        <h5>Example: Password@123</h5>
        <form onSubmit={this.handleOnSubmit}>
          <Input
            value={reset.newPassword}
            type="password"
            name="newPassword"
            onChange={this.handleChange}
            error={errors.newPassword}
            placeholder="Password"
            className="form-input"
            id="newPassword"
          />
          <Input
            value={reset.confirmNewPassword}
            type="password"
            name="confirmNewPassword"
            onChange={this.handleChange}
            error={errors.confirmNewPassword}
            placeholder="Confirm password"
            className="form-input"
            id="confirmNewPassword"
          />
          <Button
            value="Reset password"
            name="changePassword"
            className="input btn-blue"
            id="btn-send"
          />
        </form>
      </div>
    );
  }
  schema = {
    newPassword: Joi.string()
      .min(3)
      .required()
      .label('Password'),
    confirmNewPassword: Joi.string()
      .min(3)
      .required()
      .label('Password Confirmation')
  };
}
CompleteResetPassword.propTypes = {
  reset: PropTypes.object,
  match: PropTypes.object,
  confirmNewPassword: PropTypes.func,
  newPassword: PropTypes.func,
  completeResetPassword: PropTypes.func
};
const mapStateToProps = state => ({
  reset: state.reset
});
export default connect(
  mapStateToProps,
  { completeResetPassword, newPassword, confirmNewPassword }
)(CompleteResetPassword);
