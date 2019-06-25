import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Routes from './views/routes';
import './assets/scss/main.scss';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Routes/>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {state};
}

export default connect(mapStateToProps) (App);
