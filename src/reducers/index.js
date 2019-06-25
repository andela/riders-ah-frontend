import { combineReducers } from "redux";
import testReduscer from './testReducer';
export default combineReducers({
  dummyState: testReduscer
});
