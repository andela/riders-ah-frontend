import http from "../helpers/httpServices";
import { GET_ARTICLES } from "./types";
import { DELETE_STORY } from "./types";

export const deleteOneStory = (slug) =>  dispatch => {
  dispatch({
    type: DELETE_STORY,
    payload:  http.delete(`/api/v1/articles/${slug}`)
  });
};
export const getArticles = () => dispatch => {
  dispatch({
    type: GET_ARTICLES,
    payload: http.get("/api/v1/articles/")
  });
};
