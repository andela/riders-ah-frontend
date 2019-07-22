import { GET_ARTICLES, SEARCH } from "../actions/types";
import { pending, fulfilled } from "../utils/actionUtil";

const initialState = {
  fetched: "",
  articles: {},
  search:''
};

const getArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case pending(GET_ARTICLES):
      return {
        ...state,
        fetched: "pending"
      };
    case fulfilled(GET_ARTICLES):
      return {
        fetched: "done",
        articles: { ...action.payload }
      };
      case SEARCH:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};

export default getArticlesReducer;
