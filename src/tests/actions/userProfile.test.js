import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../helpers/httpServices';
const mockStore = configureStore([thunk, promise]);
const store = mockStore({});
import { getUserInfo } from '../../actions/profile/getUserInfo';
import { updateUser,resetUpdateAction } from '../../actions/profile/updateUser';

describe('Create Article functionality', () => {
  const username = 'Jeans';
  const user = {
    image: 'default.png',
    bio: 'Software developer at andela',
    username: 'Jean',
    firstName: 'Jean dAmour',
    lastName: 'Akimana'
  };
  beforeEach(() => {
    store.clearActions();
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });
  it('Should get information of the user', () => {
    store.dispatch(getUserInfo(username));
    expect(store.getActions().length).toBe(1);
  });
  it('Should update information of the user', () => {
    store.dispatch(updateUser(user));
    expect(store.getActions().length).toBe(1);
  });
  it('Should reset action after updating information of the user', () => {
    store.dispatch(resetUpdateAction());
    expect(store.getActions().length).toBe(1);
  });
});
