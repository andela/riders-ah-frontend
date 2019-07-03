import {
  REGISTER_USER
} from "./types";
import http from "../helpers/httpServices";
export const signupUser = (email, username, password) => dispatch => {
  dispatch({
    type: REGISTER_USER,
    payload: http.post("/api/v1/users/signup", { email, username, password })
  });
};
