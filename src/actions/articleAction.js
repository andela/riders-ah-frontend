import { CREATE_ARTICLE, UPDATE_ARTICLE } from './types';
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
