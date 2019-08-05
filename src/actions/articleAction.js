import { CREATE_ARTICLE, FETCH_ARTICLE, UPDATE_ARTICLE, CREATE_TAG } from './types';
import http from '../helpers/httpServices';

export const createOrUpdateArticle = (slug = null, article) => dispatch => {
  const newArticle = {
    title: article.title,
    body: article.body,
    category: article.category,
    description: article.description,
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
export const createTag = (slug, tag) => dispatch => {
  dispatch({
    type: CREATE_TAG,
    payload: http.post(`/api/v1/articles/${slug}/tag`, {name: tag})
  });
};
