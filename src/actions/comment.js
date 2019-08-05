import http from '../helpers/httpServices';
import {
  CREATE_COMMENT,
  FETCH_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  LIKE_COMMENT,
  GET_COMMENT_LIKES,
  FETCH_ONE_COMMENT
} from './types';

export const createComment = (comment, slug) => dispatch => {
  dispatch({
    type: CREATE_COMMENT,
    payload: http.post(`/api/v1/article/${slug}/comments`, { body: comment })
  });
};

export const fetchComment = slug => dispatch => {
  dispatch({
    type: FETCH_COMMENT,
    payload: http.get(`/api/v1/article/${slug}/comments`)
  });
};
export const fetchOneComment = (slug, id) => dispatch => {
  dispatch({
    type: FETCH_ONE_COMMENT,
    payload: http.get(`/api/v1/article/${slug}/comments/${ id }`)
  });
};
export const deleteComment = (id, slug) => dispatch => {
  dispatch({
    type: DELETE_COMMENT,
    payload: http.delete(`/api/v1/article/${slug}/comments/${id}`)
  });
};

export const updateComment = (comment, slug, id) => dispatch => {
  dispatch({
    type: UPDATE_COMMENT,
    payload: http.put(`/api/v1/article/${slug}/comments/${id}`, {
      body: comment
    })
  });
};
export const likeArticleComment = id => dispatch => {
  dispatch({
    type: LIKE_COMMENT,
    payload: http.post(`/api/v1/comments/${id}/feedback/like`)
  });
};
export const getLikeArticleComment = id => dispatch => {
  dispatch({
    type: GET_COMMENT_LIKES,
    payload: http.get(`/api/v1/comments/${id}/likes`)
  });
};
