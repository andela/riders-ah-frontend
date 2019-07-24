import { ACCOUNT_VERIFICATION } from "./types";
import http from "../helpers/httpServices";
export const verification = (email, token) => dispatch => dispatch({
  type: ACCOUNT_VERIFICATION,
  payload: http.get(
    `/api/v1/users/verification?email=${email}&token=${token}`
  )
});
