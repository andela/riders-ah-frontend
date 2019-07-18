import { ONE_STORY } from "../actions/types";
import { pending, fulfilled } from "../utils/actionUtil";

const initialState = {
  fetched: "",
  article: {}
};

const oneStoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case pending(ONE_STORY):
      return {
        ...state,
        fetched: "pending"
      };
    case fulfilled(ONE_STORY):
      return {
        fetched: "done",
        article: { ...action.payload }
      };
    default:
      return state;
  }
};

export default oneStoryReducer;
