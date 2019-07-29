import {
    LIKE_COMMENT,
    GET_COMMENT_LIKES
  } from '../actions/types';
  import { fulfilled } from '../utils/actionUtil';
  
  const initialState = {
    likes: {},
    isLiked: false,
    fetchLikes: false
  };
  
  const commentReactReducer = (state = initialState, action) => {
    switch (action.type) {
      case fulfilled(GET_COMMENT_LIKES):
        return {
          ...state,
          likes: action.payload.data,
          fetchLikes: true
        };
      case fulfilled(LIKE_COMMENT):
        return {
          ...state,
          isLiked: true,
          likes: action.payload.data

        };
      default:
        return state;
    }
  };
  export default commentReactReducer;
