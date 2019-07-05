import {
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  FETCH_ARTICLE
} from '../actions/types';
import { fulfilled } from '../utils/actionUtil';

const initialState = {
  success: false
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
        success:false,
        isArticleRetrieved:true
      };
    default:
      return state;
  }
};

export default articleReducer;
