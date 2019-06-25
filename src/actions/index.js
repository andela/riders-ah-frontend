import { TEST } from './types';

export const actionTest = () => dispatch => {
    dispatch({
        type: TEST,
        payload: Promise.resolve()
    });
  };
