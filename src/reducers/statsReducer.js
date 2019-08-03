import { READ_STATS } from '../actions/types';

import { fulfilled } from '../utils/actionUtil';

const initialState = {
  isStatsFetched: '',
  stats: []
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(READ_STATS):
      return {
        ...state,
        isStatsFetched: 'done',
        stats: [...action.payload.data.articles]
      };
    default:
      return state;
  }
};

export default statsReducer;
