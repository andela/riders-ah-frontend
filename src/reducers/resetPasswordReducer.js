import {
  RESET_EMAIL,
  NEW_PASSWORD,
  CONFIRM_PASSWORD,
  RESET,
  COMPLETE_RESET
} from '../actions/types';
import { fulfilled } from '../utils/actionUtil';

const initialState = {
  email: ' ',
  newPassword: '',
  confirmNewPassword: '',
  message: ''
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case NEW_PASSWORD:
      return {
        ...state,
        newPassword: action.payload
      };
    case CONFIRM_PASSWORD:
      return {
        ...state,
        confirmNewPassword: action.payload
      };
    case fulfilled(RESET):
      return {
        ...state,
        data: action.payload.data,
        message: 'Email sent, Please check your inbox!'
      };
    case fulfilled(COMPLETE_RESET):
      return {
        ...state,
        data: action.payload.data,
        message: 'Password Changed, you can log in !'
      };
    default:
      return state;
  }
};

export default resetPasswordReducer;
