import { toast } from 'react-toastify';
import Joi from 'joi-browser';
import jwtDecode from 'jwt-decode';

class Helpers {
  static setToken(token) {
    if (localStorage.token) {
      localStorage.removeItem('token');
    }
    localStorage.setItem('token', token);
  }
  static getUserInfoFromToken() {
    let user = {};
    const token = localStorage.token;
    if (token) {
      const decoded = jwtDecode(token);
      const { id, username, firstName, lastName, email, image, bio } = decoded;
      user = { id, username, firstName, lastName, email, image, bio };
    }
    return user;
  }
  static setAlertError(message) {
    toast.error(message);
  }
  static setAlertInfo(message) {
    toast.info(message);
  }

  static validate = (data, schema) => {
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
