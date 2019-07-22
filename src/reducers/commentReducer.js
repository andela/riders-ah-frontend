import jwtDecode from 'jwt-decode';
import {
  CREATE_COMMENT,
  FETCH_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from '../actions/types';
import { pending, fulfilled } from '../utils/actionUtil';

const initialState = {
  isCommentCreated: '',
  isCommentFetched: '',
  isCommentDeleted: '',
  isCommentUpdated: '',
  comment: {},
  comments: []
};

let User;
let user;
let Comment;
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case pending(CREATE_COMMENT):
      return {
        ...state,
        isCommentCreated: 'pending'
      };
    case fulfilled(CREATE_COMMENT):
      User = jwtDecode(localStorage.token);
      user = {
        author: { username: User.username, bio: User.bio, image: User.image }
      };
      Comment = { ...action.payload.data.comment, ...user };
      return {
        ...state,
        isCommentCreated: 'done',
        comment: { ...action.payload.data.comment, ...user },
        comments: [Comment, ...state.comments]
      };
    case pending(FETCH_COMMENT):
      return {
        ...state,
        isCommentFetched: 'pending'
      };
    case fulfilled(FETCH_COMMENT):
      if (action.payload.data.comments.errors) {
        return {
          ...state,
          isCommentFetched: 'done',
          comments: []
        };
      } else {
        return {
          ...state,
          isCommentFetched: 'done',
          comments: [...action.payload.data.comments]
        };
      }
    case pending(DELETE_COMMENT):
      return {
        ...state,
        isCommentDeleted: 'pending'
      };
    case fulfilled(DELETE_COMMENT):
      return {
        ...state,
        isCommentDeleted: 'done',
        comments: [...action.payload.data.remainingComments]
      };
    case pending(UPDATE_COMMENT):
      return {
        ...state,
        isCommentUpdated: 'pending'
      };
    case fulfilled(UPDATE_COMMENT):
      return {
        ...state,
        isCommentUpdated: 'done',
        comments: [...action.payload.data.comments]
      };
    default:
      return state;
  }
};

export default commentReducer;
