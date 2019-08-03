import http from '../helpers/httpServices';

import { READ_STATS } from './types';

export const readStats = () => dispatch => {
  dispatch({
    type: READ_STATS,
    payload: http.get('/api/v1/articles/reading/statistics')
  });
};
