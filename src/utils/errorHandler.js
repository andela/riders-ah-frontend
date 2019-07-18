import isPromise from 'is-promise';
import Notify from '../helpers/helpers';
const errorHandler = () => {
  return next => action => {
    if (!isPromise(action.payload)) {
      return next(action);
    }

    if (!action.meta || !action.meta.localError) {
      return next(action).catch(error => {
        if(error.response.data.errors.body){
          Notify.setAlertError(error.response.data.errors.body[0]);
        }
        else{
        Notify.setAlertError(error.message);
        }
      });
    }

    return next(action);
  };
};
export default errorHandler;
