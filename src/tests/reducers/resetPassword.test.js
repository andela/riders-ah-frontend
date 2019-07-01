import {
  RESET_EMAIL,
  NEW_PASSWORD,
  CONFIRM_PASSWORD
} from '../../actions/types';
import resetPasswordReducer from '../../reducers/resetPasswordReducer';
export const RESET_FULFILLED = 'RESET_FULFILLED';
export const COMPLETE_RESET_FULFILLED = 'COMPLETE_RESET_FULFILLED';
describe('Reset Password Reducer', () => {
  it('should add email in  state if action type is RESET_EMAIL', () => {
    const payload = 'kigali@andela.com';
    const response = { email: 'kigali@andela.com' };
    const newState = resetPasswordReducer(
      {},
      {
        type: RESET_EMAIL,
        payload
      }
    );
    expect(newState).toEqual(response);
  });
  it('should set password in  state if action type is NEW_PASSWORD', () => {
    const payload = 'Password@123';
    const response = { newPassword: 'Password@123' };
    const newState = resetPasswordReducer(
      {},
      {
        type: NEW_PASSWORD,
        payload
      }
    );
    expect(newState).toEqual(response);
  });
  it('should set confirm password in  state if action type is CONFIRM_PASSWORD', () => {
    const payload = 'Password@123';
    const response = { confirmNewPassword: 'Password@123' };
    const newState = resetPasswordReducer(
      {},
      {
        type: CONFIRM_PASSWORD,
        payload
      }
    );
    expect(newState).toEqual(response);
  });
  it('should set confirm password in  state if action type is RESET', () => {
    const payload = { message: 'Email sent, Please check your inbox!' };
    const response = { message: 'Email sent, Please check your inbox!' };
    const newState = resetPasswordReducer(
      {},
      {
        type: RESET_FULFILLED,
        payload
      }
    );
    expect(newState).toEqual(response);
  });
  it('should change password in  state if action type is COMPLETE_RESET', () => {
    const payload = { message: 'Password Changed, you can log in !' };
    const response = { message: 'Password Changed, you can log in !' };
    const newState = resetPasswordReducer(
      {},
      {
        type: COMPLETE_RESET_FULFILLED,
        payload
      }
    );
    expect(newState).toEqual(response);
  });
});
