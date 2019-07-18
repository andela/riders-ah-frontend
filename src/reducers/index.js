import { combineReducers } from 'redux';
import signupReducer from './signup';
import verificationReducer from './verify';
import loginReducer from './loginReducer';
import getArticlesReducer from './viewArticles';
import oneStoryReducer from './oneStory'
import resetPasswordReducer from './resetPasswordReducer';
import articleReducer from './articleReducer';
export default combineReducers({
  registration: signupReducer,
  verify: verificationReducer,
  article: oneStoryReducer,
  articles: getArticlesReducer,
  auth: loginReducer,
  reset: resetPasswordReducer,
  article:articleReducer
});
