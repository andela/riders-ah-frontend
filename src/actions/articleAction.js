import { CREATE_ARTICLE, FETCH_ARTICLE, UPDATE_ARTICLE } from './types';
import http from '../helpers/httpServices';

export const createOrUpdateArticle = (slug = null, article) => dispatch => {
  const newArticle = {
    title: article.title,
    body: article.body,
    description: article.category,
    image: article.image || 'null'
  };
  if (slug) {
    dispatch({
      type: UPDATE_ARTICLE,
      payload: http.put(`/api/v1/articles/${slug}`, newArticle)
    });
  } else {
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
