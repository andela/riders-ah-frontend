import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

import bookmarkImage from '../../assets/images/bookmark.png';
import clickedBookmarkImage from '../../assets/images/bookmarkClicked.png';

const Bookmark = ({
  handleBookmark,
  isBookmarked,
  id,
  isBookmark,
  className
}) => {
  return (
    <Fragment>
      <img
        src={
          isBookmarked === '' || isBookmarked === 'done again' || !isBookmark
            ? bookmarkImage
            : clickedBookmarkImage
        }
        onClick={handleBookmark}
        className={className ? className : ''}
        id={id}
      />
    </Fragment>
  );
};

Bookmark.propTypes = {
  handleBookmark: PropTypes.func,
  isBookmarked: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  isBookmark: PropTypes.bool
};

export default Bookmark;
