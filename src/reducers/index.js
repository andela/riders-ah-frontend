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
import followReducer from './followReducer';
import statsReducer from './statsReducer';
import highlightReducer from './article/highlightReducer'
import chatReducer from './chatReducer';

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
  follow: followReducer,
  stats: statsReducer,
  highlight: highlightReducer,
  chat: chatReducer
});
