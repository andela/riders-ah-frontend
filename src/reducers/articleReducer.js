import {
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  ONE_STORY,
  GET_LIKES,
  GET_DISLIKES,
  LIKE_ARTICLE,
  DISLIKE_ARTICLE,
  CREATE_TAG,
  REPORT_ARTICLE
} from '../actions/types';
import { pending, fulfilled } from '../utils/actionUtil';

const initialState = {
  success: false,
  fetched: '',
  article: {},
  dislikes: {},
  likes: {},
  isReportSuccess: false
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(CREATE_ARTICLE):
      return {
        ...state,
        data: action.payload.data,
        success: true,
        message: 'Article created Successfully'
      };
    case fulfilled(UPDATE_ARTICLE):
      return {
        ...state,
        data: action.payload.data,
        success: true,
        message: 'Article updated Successfully'
      };
    case pending(ONE_STORY):
      return {
        ...state,
        fetched: 'pending'
      };
    case fulfilled(ONE_STORY):
      return {
        fetched: 'done',
        article: action.payload.data.article,
        success: false,
        isArticleRetrieved: true
      };
    case fulfilled(GET_DISLIKES):
      return {
        ...state,
        dislikes: action.payload.data
      };
    case fulfilled(GET_LIKES):
      return {
        ...state,
        likes: action.payload.data
      };
    case fulfilled(LIKE_ARTICLE):
      return {
        ...state,
        message: 'Article Liked'
      };
    case fulfilled(DISLIKE_ARTICLE):
      return {
        ...state,
        message: 'Article Disliked'
      };
    case fulfilled(CREATE_TAG):
      return {
        fetched: 'done',
        article: action.payload.data
      };
    case fulfilled(REPORT_ARTICLE):
      return {
        ...state,
        isReportSuccess: true
      };
    default:
      return state;
  }
};

export default articleReducer;
