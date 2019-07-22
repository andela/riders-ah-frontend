import { combineReducers } from 'redux';
import signupReducer from './signup';
import verificationReducer from './verify';
import loginReducer from './loginReducer';
import getArticlesReducer from './viewArticles';
import resetPasswordReducer from './resetPasswordReducer';
import articleReducer from './articleReducer';
import commentReducer from './commentReducer';
export default combineReducers({
  registration: signupReducer,
  verify: verificationReducer,
  articles: getArticlesReducer,
  auth: loginReducer,
  reset: resetPasswordReducer,
  article: articleReducer,
  comment: commentReducer
});
