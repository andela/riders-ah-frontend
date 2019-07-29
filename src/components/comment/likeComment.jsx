import React from 'react';
import like from '../../assets/images/thumbs-up-hand-symbol.png';
import { PropTypes } from 'prop-types';
const LikeComment = ({
  liked,
  info,
  handleLike
}) => {
  return (
    <React.Fragment>
        <img
          id='like'
          className={liked ? 'react-active' : ''}
          src={like}
          onClick={handleLike}
        />
        <span>{info.count}</span>
      </React.Fragment>
  );
};
LikeComment.propTypes = {
  liked: PropTypes.bool,
  info: PropTypes.object, 
  handleLike: PropTypes.func
};

export default LikeComment;
