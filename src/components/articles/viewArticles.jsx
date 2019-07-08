import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import NavBar from '../common/navBar';
import ArticleCard from './articleCard';
import { getArticles } from '../../actions/viewArticles';

let articles;
class AllArticles extends Component {
  componentDidMount() {
    this.props.getArticles();
  }
  render() {
    const { fetched } = this.props.state.articles;
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
                {articles.map(article => {
                  return <ArticleCard key={article.slug} article={article} />;
                })}
              </div>
            </div>
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
