import { fulfilled } from '../../utils/actionUtil';
import { RATE_ARTICLE, GET_RATINGS } from '../../actions/types';

const initialState = {
  fetchSuccess: false,
  rateSuccess: false,
  newRate: 0
};

const ratingArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(RATE_ARTICLE):
      return {
        ...state,
        rateSuccess: true,
        fetchSuccess: false,
        newRate: action.payload.data
      };
    case fulfilled(GET_RATINGS):
      return {
        ...state,
        rateSuccess: false,
        fetchSuccess: true,
        ratings: action.payload.data
      };
    default:
      return state;
  }
};

export default ratingArticleReducer;
