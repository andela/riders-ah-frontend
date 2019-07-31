import { BOOKMARK_ARTICLE, FETCH_BOOKMARKS } from '../actions/types';

import { fulfilled } from '../utils/actionUtil';

const initialState = {
  isBookmarked: '',
  isBookmarksFetched: '',
  Bookmarks: []
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(BOOKMARK_ARTICLE):
      if (action.payload.data.Bookmark) {
        return {
          ...state,
          isBookmarked: 'done'
        };
      } else if (action.payload.data.message) {
        return {
          ...state,
          isBookmarked: 'done again'
        };
      } else {
        return state;
      }
    case fulfilled(FETCH_BOOKMARKS):
      if (action.payload.data.Bookmarks === 'no bookmarks made') {
        return {
          ...state,
          isBookmarked: '',
          isBookmarksFetched: 'done',
          Bookmarks: []
        };
      } else {
        return {
          ...state,
          isBookmarked: '',
          isBookmarksFetched: 'done',
          Bookmarks: [...action.payload.data.Bookmarks]
        };
      }
    default:
      return state;
  }
};

export default bookmarkReducer;
