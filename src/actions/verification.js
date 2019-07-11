import { ACCOUNT_VERIFICATION } from "./types";
import Helper from "../helpers/helpers";
import http from "../helpers/httpServices";
export const verification = (email, token) => dispatch => {
  dispatch({
    type: ACCOUNT_VERIFICATION,
    payload: http.get(
      `/api/v1/users/verification?email=${email}&token=${token}`
    )
  }).catch(() => {
    Helper.setAlertError("Account already verified");
  });
};
