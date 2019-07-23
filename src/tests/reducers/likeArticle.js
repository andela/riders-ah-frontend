import articleReducer from '../../reducers/articleReducer';
describe('like and dislike reducer', () => {
  const initialState = {
    dislikes: {},
    likes: {}
  };

  it('should be able to get dislikes', () => {
    const reducer = articleReducer(initialState, {
      payload: { data: {} },
      type: 'GET_DISLIKES_FULFILLED'
    });
    expect(reducer).toEqual(initialState);
  });
  it('should be able to get likes', () => {
    const reducer = articleReducer(initialState, {
      payload: { data: {} },
      type: 'GET_LIKES_FULFILLED'
    });
    expect(reducer).toEqual(initialState);
  });
  it('should be able to like an article', () => {
    const reducer = articleReducer(initialState, {
      payload: { data: {} },
      type: 'LIKE_ARTICLE_FULFILLED'
    });
    expect(reducer).toEqual({
      dislikes: {},
      likes: {},
      message: 'Article Liked'
    });
  });
  it('should be able to dislike an article', () => {
    const reducer = articleReducer(initialState, {
      payload: { data: {} },
      type: 'DISLIKE_ARTICLE_FULFILLED'
    });

    expect(reducer).toEqual({
      dislikes: {},
      likes: {},
      message: 'Article Disliked'
    });
  });
});
