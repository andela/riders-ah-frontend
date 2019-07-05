import { toast } from 'react-toastify';
import Joi from 'joi-browser';

class Helpers {
  static setToken(token) {
    if (localStorage.token) {
      localStorage.removeItem('token');
    }
    localStorage.setItem('token', token);
  }
  static setAlertError(message) {
    toast.error(message);
  }
  static setAlertInfo(message) {
    toast.info(message);
  }

  static validate = (data,schema) => {
    const { error } = Joi.validate(data, schema, {
      abortEarly: false
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
}
export default Helpers;
