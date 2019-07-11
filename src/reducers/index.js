import { combineReducers } from "redux";
import signupReducer from './signup';
import verificationReducer from './verify';
import resetPasswordReducer from "./resetPasswordReducer";
export default combineReducers({
  registration: signupReducer,
  verify: verificationReducer,
  reset: resetPasswordReducer
});
