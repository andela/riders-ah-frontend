import {
  RESET,
  RESET_EMAIL,
  NEW_PASSWORD,
  CONFIRM_PASSWORD,
  COMPLETE_RESET
} from './types';
import http from '../helpers/httpServices';
export const email = userEmail => {
  return {
    type: RESET_EMAIL,
    payload: userEmail
  };
};

export const newPassword = password => {
  return {
    type: NEW_PASSWORD,
    payload: password
  };
};
export const confirmNewPassword = password => {
  return {
    type: CONFIRM_PASSWORD,
    payload: password
  };
};

export const resetPassword = userEmail => dispatch => {
  dispatch({
    type: RESET,
    payload: http.post('/api/v1/users/resetPasswordEmail', { email: userEmail })
  });
};

export const completeResetPassword = (
  password,
  confirmedPassword
) => dispatch => {
  dispatch({
    type: COMPLETE_RESET,
    payload: http.post('/api/v1/users/resetPassword', {
      newPassword: password,
      confirmNewPassword: confirmedPassword
    })
  });
};
