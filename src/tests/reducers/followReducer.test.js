import followReducer from '../../reducers/followReducer';

describe('follow reducer test', () => {
  it('test follow user fulfilled', () => {
    const action = { type: 'FOLLOW_USER_FULFILLED' };
    const response = {
      isFollowed: 'done',
      isFollowersFetched: 'pendingonfollow'
    };
    const newState = followReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('test unfollow user fulfilled', () => {
    const action = { type: 'UNFOLLOW_USER_FULFILLED' };
    const response = {
      isFollowersFetched: 'pendingonunfollow',
      isFollowed: 'unfollowed'
    };
    const newState = followReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('test fetch followings fulfilled', () => {
    const action = {
      type: 'FETCH_FOLLOWERS_FULFILLED',
      payload: {
        data: {
          followings: [
            {
              id: 3,
              username: 'user1',
              bio: '',
              image: '',
              email: 'user1@email.com'
            }
          ]
        }
      }
    };
    const response = {
      isFollowingFetched: 'done',
      isFollowersFetched: 'pendingonfetchfollowing',
      following: [
        {
          id: 3,
          username: 'user1',
          bio: '',
          image: '',
          email: 'user1@email.com'
        }
      ]
    };
    const newState = followReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('test fetch followers fulfilled', () => {
    const action = {
      type: 'FETCH_FOLLOWING_FULFILLED',
      payload: {
        data: {
          followers: [
            {
              id: 2,
              username: 'user2',
              bio: '',
              image: '',
              email: 'user2@email.com'
            }
          ]
        }
      }
    };
    const response = {
      isFollowed: '',
      isFollowingFetched: '',
      isFollowersFetched: 'done',
      follower: [
        {
          id: 2,
          username: 'user2',
          bio: '',
          image: '',
          email: 'user2@email.com'
        }
      ]
    };
    const newState = followReducer({}, action);
    expect(newState).toEqual(response);
  });
});
