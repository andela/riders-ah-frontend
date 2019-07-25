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
        <img src={article.image !=='null'?article.image:ArticleImage} className='element' />
      </a>
      <ul>
        <li>
          <b>{article.title}</b>
        </li>
        <li>
          <input
            type='button'
            className='btn-category'
            value={article.description}
          />
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
