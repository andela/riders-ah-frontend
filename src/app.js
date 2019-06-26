import React, { Component } from 'react';
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

export default App;
