import {
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  FETCH_ARTICLE,
  ONE_STORY
} from '../actions/types';
import { pending, fulfilled } from '../utils/actionUtil';

const initialState = {
  success: false,
  fetched: '',
  article: {}
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
    case fulfilled(FETCH_ARTICLE):
      return {
        ...state,
        data: action.payload.data,
        success: false,
        isArticleRetrieved: true
      };
    case pending(ONE_STORY):
      return {
        ...state,
        fetched: 'pending'
      };
    case fulfilled(ONE_STORY):
      return {
        fetched: 'done',
        article: action.payload.data.article
      };
    default:
      return state;
  }
};

export default articleReducer;
