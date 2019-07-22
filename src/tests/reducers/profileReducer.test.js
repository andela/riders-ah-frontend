import {
  GET_USER_INFO,
  UPDATE_USER,
  RESET_UPDATE_ACTION
} from '../../actions/types';
import { pending, fulfilled, rejected } from '../../utils/actionUtil';
import userReducer from '../../reducers/userReducer';

describe('User profile reducer', () => {
  it('Should get user info', () => {
    const payload = {
      message: 'Success',
      profile: undefined
    };
    const response = {
      message: 'Success',
      profile: undefined
    };
    const newState = userReducer(
      {},
      {
        type: fulfilled(GET_USER_INFO),
        payload
      }
    );
    expect(newState).toEqual(response);
  });
  it('Should update user info', () => {
    const payload = {
      message: 'Successfully updated',
      updated: true
    };
    const newState = userReducer(
      {},
      {
        type: fulfilled(UPDATE_USER),
        payload
      }
    );
    expect(newState).toEqual({
      message: 'Successfully updated',
      updated: true
    });
  });
  it('Should reset reducer action after updating user info', () => {
    const payload = {
      message: '',
      updated: true
    };
    const newState = userReducer(
      {},
      {
        type: RESET_UPDATE_ACTION,
        payload
      }
    );
    expect(newState).toEqual({ error: false, message: '', updated: false });
  });
});
