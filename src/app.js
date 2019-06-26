import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";
import Routes from "./views/routes";
import "./assets/scss/main.scss";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()} data-test="component-App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
