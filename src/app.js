import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import configureStore from './store';
import Routes from './views/routes';
import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/main.scss';
import { setCurrentUser } from './actions/login';
import Helpers from './helpers/helpers';

const store = configureStore();
if (localStorage.token) {
  const user = jwtDecode(localStorage.token);
  store.dispatch(setCurrentUser(user));
  const currentTime = Date.now() / 1000;
  if (!localStorage.user) {
    const token = localStorage.token;
    const userInfo = Helpers.getUserInfoFromToken(token);
    localStorage.setItem('user', JSON.stringify(userInfo));
  }
  if (user.exp < currentTime) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}

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
