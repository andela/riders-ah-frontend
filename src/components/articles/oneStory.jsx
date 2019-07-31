import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Author from '../menu/author';
import NavBar from '../common/navBar';
import { fetchOneStory } from '../../actions/oneStory';
import { Loader } from '../common/loader';
import { Tags } from '../common/tag';
import Moment from 'react-moment';
import WriteComment from '../comment/writeComment';
import ReadComment from '../comment/readComment';
import { fetchComment, deleteComment, fetchOneComment } from '../../actions/comment';
import Helpers from '../../helpers/helpers';
import LikeAndDislike from './likeAndDislike';
import { rateArticle, getAllRates } from '../../actions/article/ratingAction';
import { Ratings } from '../common';
import ShareArticles from '../common/shareArticles';
import Bookmark from './bookmark';
import { bookmarkArticle, fetchBookmarks } from '../../actions/bookmarkAction';
import { isBookmarking } from '../../helpers/bookmarkHelper';

import  CommentEditHistory  from '../comment/editHistory'
import {
  getLikeAndDislikeCount,
  likeArticle,
  dislikeArticle
} from '../../actions/articles';
export class OneStory extends Component {
  state = {
    comments: [],
    react: {
      liked: Helpers.didILikeIt(this.props.state.likeAndDislike),
      disliked: Helpers.didIDislikeIt(this.props.state.likeAndDislike)
    },
    limit: 5,
    offset: 0,
    rates: {
      rate: 0,
      actual: 0,
      rounded: 0,
      allRates: []
    },
    disable: true,
    isAuthanticated: false,
    editHistory: false,
    commentId: '',
    commentSlug: ''
  };
  toggleModal = (id, slug) => {
    this.setState({
        commentSlug: slug,
        editHistory: !this.state.editHistory,
        commentId: id,
    });
    return slug && id && this.props.fetchOneComment(slug, id);
  }
  componentDidMount() {
    const {
      match: {
        params: { slug }
      }
    } = this.props;
    const { isAuthanticated } = this.props.auth;
    this.setState({ isAuthanticated });

    if (isAuthanticated) {
      this.props.fetchBookmarks();
    }
    const { limit, offset } = this.state;
    this.props.fetchOneStory(slug);
    this.props.fetchComment(slug);
    this.props.getLikeAndDislikeCount(slug);
    const paginate = `limit=${limit}&offset=${offset}`;
    this.props.getAllRates(slug, paginate);
  }

  displayComments = () => {
  };

  componentDidUpdate(prevProps) {
    const { isCommentFetched } = this.props.state.comment;
    let prevComment = prevProps.state.comment.comment;
    let prevComments = prevProps.state.comment.comments;
    let Comment = this.props.state.comment.comment;
    let Comments = this.props.state.comment.comments;

    if (prevComments !== Comments || prevComment !== Comment) {
      if (isCommentFetched === 'done') {
        const { comments } = this.props.state.comment;
        let data = [...comments];
        this.setState({ comments: data });
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    const { ratings, fetchSuccess, rateSuccess, newRate } = nextProps.rate;
    const { user } = this.props.auth;
    const rates = { ...this.state.rates };
    if (fetchSuccess) {
      const allRates = [...ratings.ratings];
      let currentRate = 0;
      let totalCount = 0;
      if (allRates.length) {
        const userRating = allRates.find(rate => rate.reviewerId === user.id);
        currentRate = userRating ? userRating.rate : 0;
        const totalRatesCount = allRates.reduce((prev, next) => ({
          rate: prev.rate + next.rate
        }));
        totalCount = totalRatesCount.rate / allRates.length || 0;
      }
      rates.rate = currentRate;
      rates.actual = totalCount;
      rates.allRates = allRates;
      rates.rounded = Math.round(totalCount);
      this.setState({ rates });
    }
    if (rateSuccess) {
      const { rating } = newRate.data;
      const currentRate = rating[0] || rating;
      const { allRates } = this.state.rates;
      const userRateIndex = allRates.findIndex(
        rate => rate.reviewerId === user.id
      );
      if (userRateIndex === -1) {
        allRates.push(currentRate);
      } else {
        allRates[userRateIndex].rate = currentRate.rate;
      }
      const totalRatesCount = allRates.length
        ? allRates.reduce((prev, next) => ({
            rate: prev.rate + next.rate
          }))
        : {};
      const totalCount = totalRatesCount.rate / allRates.length || 0;
      rates.rate = currentRate.rate;
      rates.actual = totalCount;
      rates.allRates = allRates;
      rates.rounded = Math.round(totalCount);
      this.setState({ rates });
    }
    if (nextProps.state.likeAndDislike) {
      const react = { ...this.state.react };
      const liked = Helpers.didILikeIt(this.props.state.likeAndDislike);
      const disliked = Helpers.didIDislikeIt(this.props.state.likeAndDislike);
      react.liked = liked;
      react.disliked = disliked;
      this.setState({ react });
    }
  }
  rateArticle = rate => {
    const { isAuthanticated } = this.state;
    const slug = this.props.match.params.slug;
    if (isAuthanticated) {
      this.props.rateArticle({ rate, slug });
    } else {
      Helpers.setAlertError('Login first');
    }
  };
  handleDelete = (id, slug) => {
    const { isAuthanticated } = this.state;
    if (isAuthanticated) {
      this.props.deleteComment(id, slug);
    } else {
      Helpers.setAlertError('Login first');
    }
  };
  handleLike = () => {
    const slug = this.props.match.params.slug;
    const { isAuthanticated } = this.state;
    if (isAuthanticated) {
      this.props.likeArticle(slug);
      setTimeout(() => window.location.reload(), 10);
    } else {
      Helpers.setAlertError('Login first');
    }
  };
  handleDislike = () => {
    const slug = this.props.match.params.slug;
    const { isAuthanticated } = this.state;
    if (isAuthanticated) {
      this.props.dislikeArticle(slug);
      setTimeout(() => window.location.reload(), 10);
    } else {
      Helpers.setAlertError('Login first');
    }
  };

  handleBookmark = slug => {
    const { isAuthanticated } = this.state;
    if (isAuthanticated) {
      this.props.bookmarkArticle(slug);
    } else {
      Helpers.setAlertError('Login first');
    }
  };

  render() {
    const { bookmark, article } = this.props.state;
    let isBookmark = isBookmarking(bookmark, article.article.title);
    const { isBookmarked } = this.props.state.bookmark;
    const { editHistory, commentId, commentSlug } = this.state;
    const { slug } = this.props.match.params;
    const { comments, rate, rates } = this.state;
    const data = this.props.state.article.article;
    if (this.props.state.article.fetched === 'done') {
      return (
      <Fragment>
      <CommentEditHistory display={editHistory} onClose={this.toggleModal} id={commentId} slug={commentSlug} />
        <div id='component-oneStory'>
          <NavBar />
          {localStorage.token === undefined ? '' : <ToastContainer />}
          <h2 className='article-title'>{data.title}</h2>
          <Author
            names={data.author.username}
            readingTime={data.readingTime}
            date={<Moment format='YYYY/MM/DD'>{data.createdAt}</Moment>}
            slug={data.slug}
          />
          <div className='featured-image'>
            {' '}
            <img src={data.image} />
          </div>
          <div className='story'>
            <div className='react'>
              <LikeAndDislike
                liked={this.state.react.liked}
                disliked={this.state.react.disliked}
                info={this.props.state.likeAndDislike}
                handleLike={this.handleLike}
                handleDislike={this.handleDislike}
              />
              <Bookmark
                handleBookmark={() => this.handleBookmark(data.slug)}
                isBookmarked={isBookmarked}
                isBookmark={isBookmark}
                id='bookmark'
              />
              <ShareArticles />
            </div>
            <div className='words'>
              <div dangerouslySetInnerHTML={{ __html: data.body }} />
              <Ratings
                id='ratingArticle'
                rate={rates.rate}
                onChange={this.rateArticle}
                rates={rates}
              />
            </div>
          </div>
          <div className='container3'>
            <Tags tags={data.tagList} />
          </div>

          <div className='container2'>
            <div className='related'>
              <div className='comments'>
                <h3>Comments</h3>
                <WriteComment params={this.props.match.params} />
                {comments.length < 1
                  ? ''
                  : comments.map(comment => {
                      return (
                        <ReadComment
                          key={comment.id}
                          comment={comment}
                          params={this.props.match.params}
                          onDelete={() => {
                            this.handleDelete(comment.id, slug);
                          }}
                          articleSlug={slug}
                          onOpenModal={this.toggleModal}
                        />
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
        </Fragment>
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

const mapStateToProps = state => ({
  state,
  auth: state.auth,
  rate: state.rate
});

OneStory.propTypes = {
  fetchOneStory: PropTypes.func,
  state: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  fetchComment: PropTypes.func,
  deleteComment: PropTypes.func,
  likeAndDislike: PropTypes.object,
  getLikeAndDislikeCount: PropTypes.func,
  likeArticle: PropTypes.func,
  dislikeArticle: PropTypes.func,
  rateArticle: PropTypes.func,
  fetchBookmarks: PropTypes.func,
  bookmarkArticle: PropTypes.func
};
export default connect(
  mapStateToProps,
  {
    fetchOneStory,
    fetchComment,
    deleteComment,
    getLikeAndDislikeCount,
    likeArticle,
    dislikeArticle,
    rateArticle,
    getAllRates,
    fetchBookmarks,
    bookmarkArticle,
    fetchOneComment
  }
)(OneStory);
