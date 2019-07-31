import React from 'react';
import { PropTypes } from 'prop-types';

export const Tags = ({tags}) => {
    return(
        <ul >
          {tags.map((tag, item) => {
            return (<li id='tag' key={item}>{tag}</li>);
                   })
           }              
        </ul>)
}
Tags.propTypes = {
    tags: PropTypes.object
  };
