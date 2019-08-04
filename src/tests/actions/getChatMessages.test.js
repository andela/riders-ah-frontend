import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore([thunk, promise]);

import { getChatMessages } from '../../actions/chat';

describe('chat actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      articles: {}
    });
  });
  it('should get chat messages', () => {
    store.dispatch( getChatMessages('1')); 
    expect(store.getActions().length).toBe(1);
  });
});
