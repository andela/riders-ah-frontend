import { combineReducers } from 'redux';
import signupReducer from './signup';
import verificationReducer from './verify';
import loginReducer from './loginReducer';
import getArticlesReducer from './viewArticles';
import resetPasswordReducer from './resetPasswordReducer';
import articleReducer from './articleReducer';
import commentReducer from './commentReducer';
import userReducer from './userReducer';
import articleReactReducer from './articleReactReducer';
import rateReducer from './article/ratingReducer';
import bookmarkReducer from './bookmarkReducer';
import commentReactReducer from './commentReactReducer';

export default combineReducers({
  registration: signupReducer,
  verify: verificationReducer,
  articles: getArticlesReducer,
  auth: loginReducer,
  reset: resetPasswordReducer,
  article: articleReducer,
  comment: commentReducer,
  userInfo: userReducer,
  likeAndDislike: articleReactReducer,
  rate: rateReducer,
  bookmark: bookmarkReducer,
  likeComment: commentReactReducer,
});
