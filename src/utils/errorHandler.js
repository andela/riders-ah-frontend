import isPromise from 'is-promise';
import Notify from '../helpers/helpers';
const errorHandler = () => {
  return next => action => {
    if (!isPromise(action.payload)) {
      return next(action);
    }

    if (!action.meta || !action.meta.localError) {
      return next(action).catch(error => {
        let message = '';
        const { data } = error.response;
        if (data.errors !== undefined) {
          message = data.errors.body[0];
        } else if (data.err) {
          message = data.err.message;
        } else if (data.error) {
          if (data.error.name === 'JsonWebTokenError') {
            message = 'You have to log in';
          }
        } else {
          message = error.message;
        }
        Notify.setAlertError(message);
      });
    }

    return next(action);
  };
};
export default errorHandler;
