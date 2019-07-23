import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore([thunk, promise]);


import {
  getLikeAndDislikeCount,
  likeArticle,
  dislikeArticle
} from '../../actions/articles';

describe('login actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      articles: {}
    });
  });
  it('should get like and dislike count', () => {
    store.dispatch( getLikeAndDislikeCount('my-new-article-for-testing-purpose-191mjxucnyll')); 
    expect(store.getActions().length).toBe(2);
  });
   
  it('should be able to like an article',  () => {
   store.dispatch( likeArticle('my-new-article-for-testing-purpose-191mjxucnyll'));
  expect(store.getActions().length).toBe(1);
  });
  it('should be able to dislike an article', () => {
    store.dispatch( dislikeArticle('my-new-article-for-testing-purpose-191mjxucnyll'));
    expect(store.getActions().length).toBe(1);
  });
});
