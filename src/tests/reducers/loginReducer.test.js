import { SET_EMAIL, SET_PASSWORD, SET_CURRENT_USER } from '../../actions/types';
import loginReducer from '../../reducers/loginReducer';
describe('login reducer test', () => {
  it('add inputted email to the state', () => {
    const action = { type: SET_EMAIL, payload: 'email@email.email' };
    const response = {
      credentials: {
        email: 'email@email.email'
      },
      isAuthanticated: false,
      user: {}
    };
    const newState = loginReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('add inputted password to the state', () => {
    const action = { type: SET_PASSWORD, payload: 'password' };
    const response = {
      credentials: {
        password: 'password'
      },
      isAuthanticated: false,
      user: {}
    };
    const newState = loginReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('add current user to the state', () => {
    const action = {
      type: SET_CURRENT_USER,
      payload: { id: '1', name: 'user' }
    };
    const response = {
      credentials: {
        isValid: true
      },
      isAuthanticated: true,
      user: { id: '1', name: 'user' }
    };
    const newState = loginReducer({}, action);
    expect(newState).toEqual(response);
  });
});
