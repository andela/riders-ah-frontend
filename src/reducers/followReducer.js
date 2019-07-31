import {
  FOLLOW_USER,
  FETCH_FOLLOWING,
  UNFOLLOW_USER,
  FETCH_FOLLOWERS
} from '../actions/types';

import { fulfilled } from '../utils/actionUtil';

const initialState = {
  isFollowed: '',
  isFollowingFetched: '',
  isFollowersFetched: '',
  following: [],
  follower: []
};

const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(FOLLOW_USER):
      return {
        ...state,
        isFollowed: 'done',
        isFollowersFetched: 'pendingonfollow'
      };
    case fulfilled(FETCH_FOLLOWING): {
      return {
        ...state,
        isFollowingFetched: 'done',
        isFollowersFetched: 'pendingonfetchfollowing',
        following: [...action.payload.data.followings]
      };
    }
    case fulfilled(FETCH_FOLLOWERS): {
      return {
        ...state,
        isFollowed: '',
        isFollowingFetched: '',
        isFollowersFetched: 'done',
        follower: [...action.payload.data.followers]
      };
    }
    case fulfilled(UNFOLLOW_USER): {
      return {
        ...state,
        isFollowersFetched: 'pendingonunfollow',
        isFollowed: 'unfollowed'
      };
    }
    default:
      return state;
  }
};

export default followReducer;
