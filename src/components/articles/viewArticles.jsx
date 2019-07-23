import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NavBar from '../common/navBar';
import Pagination from '../common/pagination.jsx';
import ArticleCard from './articleCard';
import { getArticles } from '../../actions/viewArticles';
import { paginate } from '../../utils/paginate';

let articles;
class AllArticles extends Component {
  state = {
    currentPage: 1
  }
  componentDidMount() {
    this.props.getArticles();
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const { fetched } = this.props.state.articles;
    const pageSize = 20
    const { currentPage } = this.state;
    let paginateArticles;
    switch (fetched) {
      case '':
        return (
          <div id='component-ViewArticles'>
            <NavBar />
            <div className='masonry-container'>
              <div className='masonry'>
                <h2>loading...</h2>
              </div>
            </div>
          </div>
        );
      case 'pending':
        return (
          <div id='component-ViewArticles'>
            <NavBar />
            <div className='masonry-container'>
              <div className='masonry'>
                <h2>loading...</h2>
              </div>
            </div>
          </div>
        );
      case 'done':
        articles = this.props.state.articles.articles.data.articles;
        paginateArticles = paginate(articles, currentPage, pageSize);
        if (articles.length === 0) {
          return (
            <div>
              <NavBar />
              <div className='masonry-container'>
                <div className='masonry'>No articles Available</div>
              </div>
            </div>
          );
        }
        return (
          <div>
            <NavBar />
            <div className='masonry-container'>
              <div className='masonry'>
                {paginateArticles.map(article => {
                  return (
                    <ArticleCard
                      key={article.slug}
                      article={article}
                      onClick={this.handleClick}
                    />
                  );
                })}
              </div>
            </div>
            <Pagination
              itemsCount={articles.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        );
      default:
        return (
          <div>
            <NavBar />
            <div className='masonry-container'>
              <div className='masonry'>
                <h2>loading...</h2>
              </div>
            </div>
          </div>
        );
    }
  }
}

const mapStateToProps = state => {
  return { state };
};

AllArticles.propTypes = {
  getArticles: PropTypes.func,
  state: PropTypes.object,
  history: PropTypes.object
};

export default connect(
  mapStateToProps,
  { getArticles }
)(AllArticles);
