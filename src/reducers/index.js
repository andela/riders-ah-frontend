import { combineReducers } from 'redux';
import signupReducer from './signup';
import verificationReducer from './verify';
import loginReducer from './loginReducer';
import resetPasswordReducer from './resetPasswordReducer';
import articleReducer from './articleReducer';
export default combineReducers({
  registration: signupReducer,
  verify: verificationReducer,
  auth: loginReducer,
  reset: resetPasswordReducer,
  article:articleReducer
});
