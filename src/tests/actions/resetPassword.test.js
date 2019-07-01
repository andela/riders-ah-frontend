import moxios from 'moxios';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../helpers/httpServices';
const mockStore = configureStore([thunk, promise]);
const store = mockStore({});
import {
  RESET_EMAIL,
  NEW_PASSWORD,
  CONFIRM_PASSWORD
} from '../../actions/types';
import {
  email,
  newPassword,
  confirmNewPassword,
  resetPassword,
  completeResetPassword
} from '../../actions/resetPassword';

describe('Reset Password actions', () => {
  beforeEach(() => {
    moxios.install(http);
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall(http);
  });
  it('Should have email', () => {
    expect(email('kigali@andela.com')).toEqual(
      expect.objectContaining({
        type: RESET_EMAIL,
        payload: 'kigali@andela.com'
      })
    );
  });
  it('Should have provided password', () => {
    expect(newPassword('Password@123')).toEqual(
      expect.objectContaining({ type: NEW_PASSWORD, payload: 'Password@123' })
    );
  });
  it('Should confirm password', () => {
    expect(confirmNewPassword('Password@123')).toEqual(
      expect.objectContaining({
        type: CONFIRM_PASSWORD,
        payload: 'Password@123'
      })
    );
  });
  it('Should send email for resetting a password', () => {
    store.dispatch(resetPassword('test@andela.com'));
    expect(store.getActions().length).toBe(1);
  });
  it('Should complete reset password', () => {
    store.dispatch(completeResetPassword('Password@1', 'Password@1'));
    expect(store.getActions().length).toBe(1);
  });
});
