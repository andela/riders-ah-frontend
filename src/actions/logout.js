import http from '../../helpers/httpServices';
import { LOGOUT_USER } from './types';

export const logoutUser = (token) => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({
      type: LOGOUT_USER,
      payload: http.post('/api/v1/users/logout', token)
    });
  };