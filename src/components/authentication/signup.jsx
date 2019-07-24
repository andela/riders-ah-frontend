import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Input from '../common/input.jsx';
import Button from '../common/button.jsx';
import { signupUser } from '../../actions/signup';
import Notify from '../../helpers/helpers';
import SocialAuth from './socialAuth'
export class Signup extends Component {
  state = {
    user: {
      email: '',
      password: '',
      username: ''
    }
  };
  onChangeHandler = event => {
    const data = { ...this.state.user };
    data[event.target.name] = event.target.value;
    this.setState({ user: data });
  };
  onHandleSubmit = () => {
    this.props.signupUser(
      this.state.user.email,
      this.state.user.username,
      this.state.user.password
    );
  };
  componentWillReceiveProps(nextProps) {
    const { message, isSent } = nextProps.registration;
    if (isSent) {
      Notify.setAlertInfo(message);
    }
  }
  render() {
    return (
      <div className="container" id="component-signup">
       <ToastContainer />
        <h1>Authors Haven - Signup</h1>
        <Input
          type="text"
          name="username"
          id="username"
          className="form-input"
          onChange={this.onChangeHandler}
          value={this.state.user.username}
          placeholder="Username"
        />
        <Input
          type="email"
          name="email"
          id="email"
          className="form-input"
          onChange={this.onChangeHandler}
          value={this.state.user.email}
          placeholder="E-mail"
        />
        <Input
          type="password"
          name="password"
          id="password"
          className="form-input"
          onChange={this.onChangeHandler}
          value={this.state.user.password}
          placeholder="Password"
        />
        <br />
        <br />
        <Button
          value="Sign up"
          className="input btn-blue"
          onClick={this.onHandleSubmit}
        />
        <p>Sign up below using:</p>
        <SocialAuth/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  registration: state.registration
});
Signup.propTypes = {
  signupUser: PropTypes.func,
  registration: PropTypes.object
};

export default connect(
  mapStateToProps,
  { signupUser }
)(Signup);
