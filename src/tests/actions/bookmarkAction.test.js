import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../helpers/httpServices';
const mockStore = configureStore([thunk, promise]);
const store = mockStore({});

import { bookmarkArticle } from '../../actions/bookmarkAction';

describe('bookmark action test', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });

  it('should test create bookmark action', () => {
    store.dispatch(bookmarkArticle('slug'));
    expect(store.getActions().length).toBe(1);
  });
});
