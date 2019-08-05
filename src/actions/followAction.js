import http from '../helpers/httpServices';
import {
  FOLLOW_USER,
  FETCH_FOLLOWING,
  UNFOLLOW_USER,
  FETCH_FOLLOWERS
} from './types';

export const followUser = username => dispatch => {
  dispatch({
    type: FOLLOW_USER,
    payload: http.post(`/api/v1/profiles/${username}/follow`)
  });
};

export const fetchFollowing = username => dispatch => {
  dispatch({
    type: FETCH_FOLLOWING,
    payload: http.get(`/api/v1/profiles/${username}/following`)
  });
};

export const fetchFollowers = username => dispatch => {
  dispatch({
    type: FETCH_FOLLOWERS,
    payload: http.get(`/api/v1/profiles/${username}/followers`)
  });
};

export const unfollowUser = username => dispatch => {
  dispatch({
    type: UNFOLLOW_USER,
    payload: http.post(`/api/v1/profiles/${username}/unfollow`)
  });
};
