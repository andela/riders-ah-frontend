import commentReactReducer from '../../reducers/commentReactReducer';
describe('like and dislike reducer', () => {
  const initialState = {
    likes: {}
  };

  it('should be able to get likes of the comment', () => {
    const reducer = commentReactReducer(initialState, {
      payload: { data: {} },
      type: 'GET_COMMENT_LIKES_FULFILLED'
    });
    expect(reducer).toEqual({
        likes: {},
        fetchLikes: true
      });
  });
  it('should be able to like a comment', () => {
    const reducer = commentReactReducer(initialState, {
      payload: { data: {} },
      type: 'LIKE_COMMENT_FULFILLED'
    });
    expect(reducer).toEqual({
      isLiked: true,
      likes: {},
    });
  });
});
