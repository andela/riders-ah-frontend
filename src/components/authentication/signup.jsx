import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { PropTypes } from "prop-types";
import { ToastContainer } from "react-toastify";
import Input from "../common/input.jsx";
import Button from "../common/button.jsx";
import { signupUser } from "../../actions/signup";
import Notify from "../../helpers/helpers";
class Signup extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      validators: {
        password: {
          // name the rule
          message:
            "The :attribute should be at 8 charcters minimum , with one capital letter, one special character, and a number",
          rule: (val, params, validator) => {
            return (
              validator.helpers.testRegex(
                val,
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/i
              ) && params.indexOf(val) === -1
            );
          }
        }
      }
    });
  }
  state = {
    user: {
      email: "",
      password: "",
      username: ""
    }
  };
  onChangeHandler = event => {
    const data = { ...this.state.user };
    data[event.target.name] = event.target.value;
    this.setState({ user: data });
  };
  onHandleSubmit = () => {
    this.validator.showMessages();
    this.props.signupUser(
      this.state.user.email,
      this.state.user.username,
      this.state.user.password
    );
  };
  componentWillReceiveProps(nextProps){
    const { message } = nextProps.registration;
    if (message) {
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
          onChange={this.onChangeHandler}
          value={this.state.user.username}
          placeholder="Username"
          validateMessage={this.validator.message(
            "username",
            this.state.user.username,
            "required"
          )}
        />
        <Input
          type="email"
          name="email"
          id="email"
          onChange={this.onChangeHandler}
          value={this.state.user.email}
          placeholder="E-mail"
          validateMessage={this.validator.message(
            "email",
            this.state.user.email,
            "required|email"
          )}
        />
        <Input
          type="password"
          name="password"
          id="password"
          onChange={this.onChangeHandler}
          value={this.state.user.password}
          placeholder="Password"
          validateMessage={this.validator.message(
            "password",
            this.state.user.password,
            "required|password"
          )}
        />
        <br />
        <br />
        <Button
          value="Sign up"
          className="input btn-blue"
          onClick={this.onHandleSubmit}
        />
        <p>Sign up below using:</p>
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
