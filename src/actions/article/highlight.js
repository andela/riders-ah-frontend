import http from '../../helpers/httpServices';
import { HIGHLIGHT_TEXT, GET_HIGHLIGHT } from '../types';

export const highlightArticle = (slug, highlight) => dispatch => {
  dispatch({
    type: HIGHLIGHT_TEXT,
    payload: http.post(`/api/v1/articles/${slug}/highlight`, highlight)
  });
};
export const getHighlight= (slug) => dispatch => {
    dispatch({
      type: GET_HIGHLIGHT,
      payload: http.get(`/api/v1/articles/${slug}/highlight`)
    });
  };