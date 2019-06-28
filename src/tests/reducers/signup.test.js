import signupReducer from '../../reducers/signup';
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED';
describe('Registed user Reducer', () => {
  it('should add email, username, password in  state if action type is REGISTER_USER_FULFILLED', () => {
    const payload = {
      email: 'user@email.com',
      password: 'Password@123',
      username: 'testusername'
    };
    const response = {
      user: {
        email: 'user@email.com',
        password: 'Password@123',
        username: 'testusername'
      },
      message: 'Email sent, Please check yout inbox for account activation!'
    };
    const newState = signupReducer(
      {},
      {
        type: REGISTER_USER_FULFILLED,
        payload
      }
    );
    expect(newState).toEqual(response);
  });
});
