import { Component } from 'react';
import Joi from 'joi-browser';
import { PropTypes } from 'prop-types';
class Form extends Component {
  state = {
    data: {},
    error: {}
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doAction();
  };
  handleChange = e => {
    const errors = { ...this.errors };
    const errorMessage = this.validateInput(e.target);
    if (errorMessage) {
      errors[e.target.name] = errorMessage;
    } else {
      delete errors[e.target.name];
    }
    this.setState({ errors });
    this.props[e.target.name](e.target.value);
    const data = { ...this.state.data };
    data[e.target.name] = e.target.value || this.props.reset[e.target.name];
    this.setState({ data });
  };
  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
}
Form.propTypes = {
  reset: PropTypes.object
};

export default Form;
