import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { verification } from '../../actions/verification';
class Verification extends Component {
  componentDidMount() {
    const { token, email } = queryString.parse(this.props.location.search);
    if (token && email) {
      this.props.verification(email, token);
    }
    document.body.style.backgroundImage =
      "url('../../assets/images/auth-background.jpg')";
  }
  render() {
    const { isVerified, message } = this.props.verify;
    return isVerified ? (
      <Redirect to='/login' />
    ) : (
      <h4 id='verify-account'>{message}</h4>
    );
  }
}
Verification.propTypes = {
  location: PropTypes.object,
  verify: PropTypes.object,
  verification: PropTypes.func
};
const mapStateToProps = state => {
  return {
    verify: state.verify
  };
};

export default connect(
  mapStateToProps,
  { verification }
)(Verification);
