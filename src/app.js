import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";
import Routes from "./views/routes";
import 'react-toastify/dist/ReactToastify.css'
import "./assets/scss/main.scss";

const store = configureStore();
if (window.Cypress) {
  window.store = store;
}
class App extends Component {
  render() {
    return (
      <Provider store={store} id='component-App'>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
