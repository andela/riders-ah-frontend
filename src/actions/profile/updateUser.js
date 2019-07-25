import {
  UPDATE_USER,
  RESET_UPDATE_ACTION,
  SWITCH_NOTIFICATIONS
} from '../types';
import http from '../../helpers/httpServices';

export const updateUser = user => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: http.put(`/api/v1/profiles/${user.username}`, user)
  });
};

export const resetUpdateAction = () => dispatch => {
  dispatch({
    type: RESET_UPDATE_ACTION
  });
};

export const switchNotifications = (action, option) => dispatch => {
  dispatch({
    type: SWITCH_NOTIFICATIONS,
    payload: http.put(`/api/v1/users/notification/${action}/${option}`)
  });
};
