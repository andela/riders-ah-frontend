import {
    GET_LIKES,
    GET_DISLIKES,
    LIKE_ARTICLE,
    DISLIKE_ARTICLE
  } from '../actions/types';
  import { fulfilled } from '../utils/actionUtil';
  
  const initialState = {
    dislikes: {},
    likes: {},
    isDisliked: false,
    isLiked:false
  };
  
  const articleReactReducer = (state = initialState, action) => {
    switch (action.type) {
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
          isDisliked: false,
          isLiked: true,
          likes: action.payload.data

        };
      case fulfilled(DISLIKE_ARTICLE):
        return {
          ...state,
          isLiked:false,
          isDisliked: true,
          dislikes: action.payload.data
        };
      default:
        return state;
    }
  };
  export default articleReactReducer;
