import {
  GET_LIKES,
  GET_DISLIKES,
  LIKE_ARTICLE,
  DISLIKE_ARTICLE
} from './types';
import http from '../helpers/httpServices';
export const getLikeAndDislikeCount = slug => dispatch => {
  dispatch({
    type: GET_LIKES,
    payload: http.get(`/api/v1/articles/${slug}/likes`)
  });
  dispatch({
    type: GET_DISLIKES,
    payload: http.get(`/api/v1/articles/${slug}/dislikes`)
  });
};

export const likeArticle = slug => dispatch => {
  dispatch({
    type: LIKE_ARTICLE,
    payload: http.post(`/api/v1/articles/${slug}/reaction/like`)
  });
};
export const dislikeArticle = slug => dispatch => {
  dispatch({
    type: DISLIKE_ARTICLE,
    payload: http.post(`/api/v1/articles/${slug}/reaction/dislike`)
  });
};
