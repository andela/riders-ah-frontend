import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Author from '../menu/author';
import NavBar from '../common/navBar';
import { fetchOneStory } from '../../actions/oneStory';
import { Loader } from '../common/loader';
import Moment from 'react-moment';

export class OneStory extends Component {
  componentDidMount() {
    const {
      match: {
        params: { slug }
      }
    } = this.props;
    this.props.fetchOneStory(slug);
  }
  render() {
    const data  = this.props.state.article.article;
    if (this.props.state.article.fetched === 'done') {

      return (
        <div>
          <NavBar />
          <ToastContainer />
            <h2 className="article-title">{data.title}</h2>
          <Author
            names={data.author.username}
            readingTime={data.readingTime}
            date={<Moment fromNow>{data.createdAt}</Moment>}
            slug={data.slug}
          />
          <div className="story">
            <div className="words" dangerouslySetInnerHTML={{ __html: data.body }} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Loader />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { state };
};

OneStory.propTypes = {
  fetchOneStory: PropTypes.func,
  state: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object
};

export default connect(
  mapStateToProps,
  { fetchOneStory }
)(OneStory);
