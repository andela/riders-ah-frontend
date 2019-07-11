import http from '../../helpers/httpServices';
import {
  SET_EMAIL,
  SET_PASSWORD,
  VALIDATE_CREDENTIALS,
  LOGIN_USER,
  SET_CURRENT_USER
} from './types';

export const setEmail = email => {
  return {
    type: SET_EMAIL,
    payload: email
  };
};

export const setPassword = password => {
  return {
    type: SET_PASSWORD,
    payload: password
  };
};

export const credentialsValidation = message => {
  return {
    type: VALIDATE_CREDENTIALS,
    payload: message
  };
};

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: http.post('/api/v1/users/login', { email, password })
  });
};
