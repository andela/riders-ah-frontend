import { TEST } from '../actions/types';
import { pending, fulfilled, rejected } from '../utils/actionUtil';

const initialState = {
  isState: false,
  message: "Remove me"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case pending(TEST):
      return {
        isState: true,
        message: "Is pending"
      };

    case fulfilled(TEST):
      return {
        isState: true,
        message: "Is Fullfilled"
      };
    case rejected(TEST):
      return {
        isState: true,
        message: "Is Rejected"
      };
    default:
      return state;
  }
};

export default reducer;
