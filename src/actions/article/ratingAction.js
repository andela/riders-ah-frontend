import http from '../../helpers/httpServices';
import { RATE_ARTICLE, GET_RATINGS } from '../types';

export const rateArticle = ({ rate, slug }) => dispatch => {
  dispatch({
    type: RATE_ARTICLE,
    payload: http.post(`/api/v1/articles/${slug}/ratings`, { rate })
  });
};

export const getAllRates = (slug, paginate) => dispatch => {
  dispatch({
    type: GET_RATINGS,
    payload: http.get(`/api/v1/articles/${slug}/ratings?${paginate}`)
  });
};
