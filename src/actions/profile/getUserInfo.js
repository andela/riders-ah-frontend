import {
  GET_USER_INFO,
  GET_FOLLOWERS,
  GET_FOLLOWING,
  GET_USER_ARTICLES,
  GET_NOTIFICATIONS
} from '../types';
import http from '../../helpers/httpServices';

export const getUserInfo = username => dispatch => {
  dispatch({
    type: GET_USER_INFO,
    payload: http.get(`/api/v1/profiles/${username}`)
  });
};

export const getUserFollowers = username => dispatch => {
  dispatch({
    type: GET_FOLLOWERS,
    payload: http.get(`/api/v1/profiles/${username}/followers`)
  });
};
export const getUserFollowing = username => dispatch => {
  dispatch({
    type: GET_FOLLOWING,
    payload: http.get(`/api/v1/profiles/${username}/following`)
  });
};
export const getArticles = () => dispatch => {
  dispatch({
    type: GET_USER_ARTICLES,
    payload: http.get(`/api/v1/articles`)
  });
};

export const getNotifications = () => dispatch => {
  dispatch({
    type: GET_NOTIFICATIONS,
    payload: http.get(`api/v1/users/notifications`)
  });
};
