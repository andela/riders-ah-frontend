import React from 'react';
import likeImage from '../../assets/images/like.png';
import dislikeImage from '../../assets/images/dislike.png';
import { PropTypes } from 'prop-types';
const LikeAndDislike = ({
  liked,
  disliked,
  info,
  handleLike,
  handleDislike
}) => {
  return (
    <React.Fragment>
        <img
          id='like'
          className={liked ? 'react-active' : ''}
          src={likeImage}
          onClick={handleLike}
        />
        <h5>{(info.likes && info.likes.count) || 0}</h5>
        <img
          id='dislike'
          className={disliked ? 'react-active' : ''}
          src={dislikeImage}
          onClick={handleDislike}
        />{' '}
        <h5>{(info.dislikes && info.dislikes.count)|| 0}</h5>
      </React.Fragment>
  );
};
LikeAndDislike.propTypes = {
  liked: PropTypes.bool,
  disliked: PropTypes.bool,
  info: PropTypes.object,
  handleLike: PropTypes.func,
  handleDislike: PropTypes.func
};

export default LikeAndDislike;
