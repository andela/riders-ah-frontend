import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Author from '../menu/author';
import NavBar from '../common/navBar';
import { fetchOneStory } from '../../actions/oneStory';
import { Loader } from '../common/loader';
import Moment from 'react-moment';
import WriteComment from '../comment/writeComment';
import ReadComment from '../comment/readComment';
import { fetchComment, deleteComment } from '../../actions/comment';

export class OneStory extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const {
      match: {
        params: { slug }
      }
    } = this.props;
    this.props.fetchOneStory(slug);
    this.props.fetchComment(slug);
  }

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

  handleDelete = (id, slug) => {
    this.props.deleteComment(id, slug);
  };
  render() {
    const data = this.props.state.article.article;
    const { comments } = this.state;
    const { slug } = this.props.match.params;
    if (this.props.state.article.fetched === 'done') {
      return (
        <div>
          <NavBar />
          <ToastContainer />
          <h2 className='article-title'>{data.title}</h2>
          <Author
            names={data.author.username}
            readingTime={data.readingTime}
            date={<Moment fromNow>{data.createdAt}</Moment>}
            slug={data.slug}
          />
          <div className='story'>
            <div
              className='words'
              dangerouslySetInnerHTML={{ __html: data.body }}
            />
          </div>
          <div className='container2'>
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
                      />
                    );
                  })}
            </div>
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
  match: PropTypes.object,
  fetchComment: PropTypes.func,
  deleteComment: PropTypes.func
};

export default connect(
  mapStateToProps,
  { fetchOneStory, fetchComment, deleteComment }
)(OneStory);
