import React from "react";
import { PropTypes } from "prop-types";
import Moment from 'react-moment';
import 'moment-timezone';
import Image from '../../assets/images/pexels-photo-46710.jpeg'

const ArticleCard = ({ article, onClick }) => {
  const dateToFormat = article.createdAt;
  return (
    <div id={article.slug}>
      <img
        src={Image}
        className="element"
        onClick={() => onClick(article.slug)}
      />
      <ul>
        <li>
          <b>{article.title}</b>
        </li>
        <li>
          <input type="button" className="btn-category" value="Entertainment" />
        </li>
        <li>
          <i>{<Moment fromNow>{dateToFormat}</Moment>}</i>&nbsp;.&nbsp;<i>{article.readingTime}</i>
        </li>
      </ul>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object,
  onClick: PropTypes.func
};

export default ArticleCard;
