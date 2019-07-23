import React from 'react';
import Pages from 'lodash';
import { PropTypes } from 'prop-types';

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = Pages.range(1, pagesCount + 1);
  return (
    <div className='pagination'>
      {pages.map(page => (
        <a key={page} id={`pagination-item_${page}`} className={ page === currentPage ? 'active-link' : ''} onClick={() => onPageChange(page)}>
          {page}
        </a>
      ))}
    </div>
  );
};

Pagination.propTypes = {
    onPageChange: PropTypes.func,
    itemsCount: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number
  };

export default Pagination;
