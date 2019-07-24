import { fulfilled } from '../../utils/actionUtil';
import { HIGHLIGHT_TEXT, GET_HIGHLIGHT } from '../../actions/types';

const initialState = {
  isHighlighted: false,
  highlights:{},
};

const highlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(HIGHLIGHT_TEXT):
      return {
        ...state,
        highlights: {...state.highlights, data: [...state.highlights.data, action.payload.data.data]},
        isHighlighted:true
      };
    case fulfilled(GET_HIGHLIGHT):
      return {
        ...state,
        highlights: action.payload.data
      };
    default:
      return state;
  }
};

export default highlightReducer;
