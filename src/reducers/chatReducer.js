import { GET_MESSAGES } from '../actions/types';
import { fulfilled } from '../utils/actionUtil';

const initialState = {
  message: [],
  isMessageGot: false
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(GET_MESSAGES):
      return {
        ...state,
        isMessageGot: true,
        message: action.payload.data.messages
      };
    default:
      return state;
  }
};

export default chatReducer;
