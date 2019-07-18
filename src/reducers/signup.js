import { REGISTER_USER } from '../actions/types';
import { fulfilled, pending, rejected } from '../utils/actionUtil';

const initialState = {
  email: '',
  username: '',
  password: '',
  message: '',
  isSent: false
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(REGISTER_USER):
      return {
        ...state,
        user: action.payload,
        message: 'Email sent, Please check yout inbox for account activation!',
        isSent: true
      };
    case pending(REGISTER_USER):
      return {
        ...state,
        user: action.payload
      };
    case rejected(REGISTER_USER):
      return {
        ...state,
        user: action.payload,
        isSent: false
      };
    default:
      return state;
  }
};

export default signupReducer;
