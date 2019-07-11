import { combineReducers } from "redux";
import signupReducer from './signup';
import verificationReducer from './verify';
export default combineReducers({
  registration: signupReducer,
  verify: verificationReducer
});
