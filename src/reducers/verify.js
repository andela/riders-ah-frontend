import { ACCOUNT_VERIFICATION } from "../actions/types";
import { fulfilled } from "../utils/actionUtil";

const initialState = {
    isVerified:false,
    message:''
};

const verificationReducer = (state = initialState, action) => {
  switch (action.type) {
      case fulfilled(ACCOUNT_VERIFICATION):
        return {
            ...state,
            isVerified:true
        }
    default:
      return state;
  }
};

export default verificationReducer;
