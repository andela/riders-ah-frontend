import jwtDecode from 'jwt-decode';
import {
  SET_EMAIL,
  SET_PASSWORD,
  VALIDATE_CREDENTIALS,
  LOGIN_USER,
  SET_CURRENT_USER
} from '../actions/types';

import { pending, fulfilled, rejected } from '../utils/actionUtil';

const initialState = {
  credentials: {
    email: '',
    password: '',
    isValid: true
  },
  isAuthanticated: false,
  user: {},
  token: ''
};

let User;
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          email: action.payload
        },
        isAuthanticated: false,
        user: {}
      };
    case SET_PASSWORD:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          password: action.payload
        },
        isAuthanticated: false,
        user: {}
      };
    case VALIDATE_CREDENTIALS:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          isValid: action.payload
        }
      };
    case pending(LOGIN_USER):
      return {
        ...state,
        credentials: {
          ...state.credentials,
          isValid: 'loading'
        }
      };
    case fulfilled(LOGIN_USER):
      if (action.payload !== undefined) {
        User = jwtDecode(action.payload.data.token);
        return {
          ...state,
          credentials: {
            ...state.credentials,
            isValid: true
          },
          isAuthanticated: true,
          user: { ...User },
          token: action.payload.data.token
        };
      }
      return state;
    case rejected(LOGIN_USER):
      return {
        ...state,
        credentials: {
          ...state.credentials,
          isValid: 'invalid credentials'
        },
        isAuthanticated: false,
        user: {}
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          isValid: true
        },
        isAuthanticated: true,
        user: { ...action.payload }
      };
    default:
      return state;
  }
};

export default loginReducer;
