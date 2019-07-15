/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { userLoader } from '../../actions/socialLogin';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
const username = 'JabiroChristian';
const mockStore = configureStore([thunk]);
const store = mockStore();

describe(' Action userLoader ', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('should return error',() => {
    store.dispatch(userLoader());
    const expectedDat = [{
        type: 'SOCIAL_LOGIN_FAIL'
    }];
    expect(store.getActions()).toEqual(expectedDat);
});

   it('should load the authenticated user',() => {
       store.dispatch(userLoader(token, username));
       const expectedData = [{
           type: 'SOCIAL_LOGIN_PASS',
           payload: username
       }];
       expect(store.getActions()).toEqual(expectedData);
       expect(store.getActions().length).toBe(1);
});
});
