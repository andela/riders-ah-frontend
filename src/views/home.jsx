import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { actionTest } from "../actions";
class Home extends Component {
  componentDidMount() {
    this.props.actionTest();
  }
  render() {
    return <h1> Landing page here!</h1>;
  }
}
const mapStateToProps = state => ({ state });

Home.propTypes = { actionTest: PropTypes.func };
export default connect(
  mapStateToProps,
  { actionTest }
)(Home);
