import React from 'react';
import NavBar from '../common/navBar';
import ArticleCard from './articleCard';
import { PropTypes } from 'prop-types';

const SearchContainer = ({ articles, handleClick }) => {
  return (
    <div>
      {articles.map((article, i) => (
        <div key={i} className="search-data">
          <h2>{article.title}</h2>
          {!article.values.length ? (
            <div>
              <div className="masonry-container">
                <div className="masonry">
                  No articles Available
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="masonry-container">
                <div className="masonry">
                  {article.values.map(singleArticle => {
                    return (
                      <ArticleCard
                        key={singleArticle.slug}
                        article={singleArticle}
                        onClick={handleClick}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
SearchContainer.propTypes = {
  articles: PropTypes.array,
  handleClick: PropTypes.func
};

export default SearchContainer;
