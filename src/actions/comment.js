import http from '../helpers/httpServices';
import {
  CREATE_COMMENT,
  FETCH_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
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
