import React from 'react';
import { PropTypes } from 'prop-types';
import Input from '../common/input';
const Search = ({ value, onChange, className }) => {
  return (
    <Input
      value={value}
      type="text"
      name="search"
      id="search"
      onChange={event => onChange(event.target.value)}
      placeholder="Search..."
      className={className}
    />
  );
};
Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string

};

export default Search;
