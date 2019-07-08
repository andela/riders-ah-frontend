import http from "../helpers/httpServices";
import { ONE_STORY } from "./types";

export const fetchOneStory = (slug) =>  dispatch => {
  dispatch({
    type: ONE_STORY,
    payload:  http.get(`/api/v1/articles/${slug}`)
  });
};
