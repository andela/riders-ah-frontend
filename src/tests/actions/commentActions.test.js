import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../helpers/httpServices';
const mockStore = configureStore([thunk, promise]);
const store = mockStore({});

import { updateComment } from '../../actions/comment';

describe('comment actions test', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });

  it('should test updateComment action', () => {
    store.dispatch(updateComment('comment', 'slug', 12));
    expect(store.getActions().length).toBe(1);
  });
});
