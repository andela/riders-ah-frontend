import commentReducer from '../../reducers/commentReducer';

describe('comment reducer test', () => {
  it('fetch comment is pending', () => {
    const action = { type: 'FETCH_COMMENT_PENDING' };
    const response = {
      isCommentFetched: 'pending'
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('create comment is pending', () => {
    const action = { type: 'CREATE_COMMENT_PENDING' };
    const response = {
      isCommentCreated: 'pending'
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('delete comment is pending', () => {
    const action = { type: 'DELETE_COMMENT_PENDING' };
    const response = {
      isCommentDeleted: 'pending'
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('update comment is pending', () => {
    const action = { type: 'UPDATE_COMMENT_PENDING' };
    const response = {
      isCommentUpdated: 'pending'
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('fetch comment is done', () => {
    const action = {
      type: 'FETCH_COMMENT_FULFILLED',
      payload: {
        data: {
          comments: [
            {
              id: 54,
              createdAt: '2019-07-15T07:42:17.811Z',
              updatedAt: '2019-07-15T07:42:17.811Z',
              body: 'new one',
              author: {
                username: 'user',
                bio: null,
                image: null
              },
              like: [],
              histories: {
                count: 0,
                rows: []
              }
            }
          ]
        }
      }
    };
    const response = {
      isCommentFetched: 'done',
      comments: [
        {
          id: 54,
          createdAt: '2019-07-15T07:42:17.811Z',
          updatedAt: '2019-07-15T07:42:17.811Z',
          body: 'new one',
          author: {
            username: 'user',
            bio: null,
            image: null
          },
          like: [],
          histories: {
            count: 0,
            rows: []
          }
        }
      ]
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('delete comment is done', () => {
    const action = {
      type: 'DELETE_COMMENT_FULFILLED',
      payload: {
        data: {
          remainingComments: [
            {
              id: 54,
              createdAt: '2019-07-15T07:42:17.811Z',
              updatedAt: '2019-07-15T07:42:17.811Z',
              body: 'new one',
              author: {
                username: 'user',
                bio: null,
                image: null
              },
              like: [],
              histories: {
                count: 0,
                rows: []
              }
            }
          ]
        }
      }
    };
    const response = {
      isCommentDeleted: 'done',
      comments: [
        {
          id: 54,
          createdAt: '2019-07-15T07:42:17.811Z',
          updatedAt: '2019-07-15T07:42:17.811Z',
          body: 'new one',
          author: {
            username: 'user',
            bio: null,
            image: null
          },
          like: [],
          histories: {
            count: 0,
            rows: []
          }
        }
      ]
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('updated comment is done', () => {
    const action = {
      type: 'UPDATE_COMMENT_FULFILLED',
      payload: {
        data: {
          comments: [
            {
              id: 54,
              createdAt: '2019-07-15T07:42:17.811Z',
              updatedAt: '2019-07-15T07:42:17.811Z',
              body: 'new one',
              author: {
                username: 'user',
                bio: null,
                image: null
              },
              like: [],
              histories: {
                count: 0,
                rows: []
              }
            }
          ]
        }
      }
    };
    const response = {
      isCommentUpdated: 'done',
      comments: [
        {
          id: 54,
          createdAt: '2019-07-15T07:42:17.811Z',
          updatedAt: '2019-07-15T07:42:17.811Z',
          body: 'new one',
          author: {
            username: 'user',
            bio: null,
            image: null
          },
          like: [],
          histories: {
            count: 0,
            rows: []
          }
        }
      ]
    };
    const newState = commentReducer({}, action);
    expect(newState).toEqual(response);
  });
});
