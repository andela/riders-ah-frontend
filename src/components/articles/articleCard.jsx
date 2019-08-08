import React from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';
import 'moment-timezone';

import ArticleImage from '../../assets/images/pexels-photo-46710.jpeg';

const ArticleCard = ({ article }) => {
  const dateToFormat = article.createdAt;
  return (
    <div id={article.slug}>
      <a href={`/articles/${article.slug}`}>
        <img
          src={article.image !== 'null' ? article.image : ArticleImage}
          className='element'
        />
      </a>
      <ul>
        <li>
          <b>
            <a href={`/articles/${article.slug}`}>{article.title}</a>
          </b>
        </li>
        <li>
          <span className='category-btn'>{article.description}</span>
        </li>
        <li>
          <i>{<Moment fromNow>{dateToFormat}</Moment>}</i>&nbsp;.&nbsp;
          <i>{article.readingTime}</i>
        </li>
      </ul>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object
};

export default ArticleCard;
