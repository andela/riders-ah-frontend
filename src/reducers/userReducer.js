import {
  GET_USER_INFO,
  RESET_UPDATE_ACTION,
  UPDATE_USER,
  GET_FOLLOWERS,
  GET_FOLLOWING,
  GET_USER_ARTICLES
} from '../actions/types';
import { fulfilled } from '../utils/actionUtil';

const initialState = {
  firstName: '',
  lastName: '',
  image: '',
  bio: '',
  username: '',
  message: '',
  updated: false,
  error: false
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(GET_USER_INFO):
      return {
        ...state,
        message: 'Success',
        profile: action.payload.data
      };
    case fulfilled(UPDATE_USER):
      return {
        ...state,
        updated: true,
        message: 'Successfully updated'
      };
    case fulfilled(GET_FOLLOWERS):
      return {
        ...state,
        message: 'Success',
        followers: action.payload.data.followers
      };
    case fulfilled(GET_FOLLOWING):
      return {
        ...state,
        message: 'Success',
        follows: action.payload.data.followings
      };
    case fulfilled(GET_USER_ARTICLES):
      return {
        ...state,
        message: 'Success',
        articles: action.payload.data.articles
      };

    case RESET_UPDATE_ACTION:
      return {
        ...state,
        error: false,
        updated: false,
        message: ''
      };
    default:
      return state;
  }
};

export default userReducer;
