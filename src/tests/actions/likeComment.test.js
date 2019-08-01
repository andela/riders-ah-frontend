import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore([thunk, promise]);

import {
    likeArticleComment,
    getLikeArticleComment
} from '../../actions/comment';

describe('login actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      articles: {}
    });
  });
  it('should get like and dislike count', () => {
    store.dispatch( likeArticleComment('1')); 
    expect(store.getActions().length).toBe(1);
  });
   
  it('should be able to like an article',  () => {
     store.dispatch( getLikeArticleComment('1'));
     expect(store.getActions().length).toBe(1);
  });
});
