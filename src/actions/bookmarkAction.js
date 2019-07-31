import http from '../../helpers/httpServices';

import { BOOKMARK_ARTICLE, FETCH_BOOKMARKS } from './types';

export const bookmarkArticle = slug => dispatch => {
  dispatch({
    type: BOOKMARK_ARTICLE,
    payload: http.post(`/api/v1/articles/${slug}/bookmark`)
  });
};

export const fetchBookmarks = () => dispatch => {
  dispatch({
    type: FETCH_BOOKMARKS,
    payload: http.get('/api/v1/articles/user/bookmarks')
  });
};
