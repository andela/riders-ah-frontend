import {
  CREATE_ARTICLE,
  FETCH_ARTICLE,
  UPDATE_ARTICLE,
  CREATE_TAG,
  REPORT_ARTICLE
} from './types';
import http from '../helpers/httpServices';

export const createOrUpdateArticle = (slug = null, article) => dispatch => {
  const { tag, ...newArticle } = article;
  newArticle.image = newArticle.image || 'null';
  const tags = [];
  tags.push(tag);

  if (slug) {
    dispatch({
      type: UPDATE_ARTICLE,
      payload: http.put(`/api/v1/articles/${slug}`, newArticle)
    });
  } else {
    newArticle.tags = tags;
    dispatch({
      type: CREATE_ARTICLE,
      payload: http.post('/api/v1/articles', newArticle)
    });
  }
};
export const fetchArticle = slug => dispatch => {
  dispatch({
    type: FETCH_ARTICLE,
    payload: http.get(`/api/v1/articles/${slug}`)
  });
};
export const createTag = (slug, tag) => dispatch => {
  dispatch({
    type: CREATE_TAG,
    payload: http.post(`/api/v1/articles/${slug}/tag`, { name: tag })
  });
};
export const reportArticle = (slug, reason, type) => dispatch => {
  dispatch({
    type: REPORT_ARTICLE,
    payload: http.post(`/api/v1/articles/${slug}/report/${type}`, { reason })
  });
};
