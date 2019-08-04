import http from '../helpers/httpServices';
import {
    GET_MESSAGES
} from './types';

export const getChatMessages = () => dispatch => {
  dispatch({
    type: GET_MESSAGES,
    payload: http.get('/api/v1/messages')
  });
};
