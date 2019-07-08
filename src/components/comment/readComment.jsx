import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';

import { updateComment } from '../../actions/comment';
import Comment from '../../../helpers/commentToggle';
import Avatar from '../../assets/images/avatar.png';
import Delete from '../../assets/images/delete.png';
import Update from '../../assets/images/update.png';
import like from '../../assets/images/thumbs-up-hand-symbol.png';
class ReadComment extends Component {
  state = {
    updatedComment: this.props.comment.body
  };

  handleChange = event => {
    const data = { ...this.state };
    let newComment = data.updatedComment;
    newComment = event.target.value;
    this.setState({ updatedComment: newComment });
  };

  handleUpdate = (commentId, id) => {
    const { slug } = this.props.params;
    const { updatedComment } = this.state;
    this.props.updateComment(updatedComment, slug, commentId);
    Comment(commentId, id);
  };
  render() {
    const { comment, onDelete, auth } = this.props;
    let id = comment.createdAt;
    return (
      <div className='overlap'>
        <div
          className='user-comment'
          id={comment.id}
          style={{ display: 'block' }}
        >
          <p className='name'>
            <img src={Avatar} className='comment-avatar' />
            &nbsp;&nbsp;&nbsp;{comment.author.username}
            {comment.author.username === auth.user.username ? (
              <Fragment>
                <img
                  src={Delete}
                  className='icon'
                  id='delete'
                  onClick={onDelete}
                />
                <img
                  src={Update}
                  className='icon'
                  onClick={() => Comment(comment.id, id)}
                />
              </Fragment>
            ) : (
              ''
            )}
          </p>
          <p>{comment.body}</p>
          <img id='like' src={like} />
          <span>{comment.like ? comment.like.length : 0}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Moment fromNow>{comment.createdAt}</Moment>
        </div>
        <div className='comment' id={id} style={{ display: 'none' }}>
          <p className='name'>
            <img src={Avatar} className='comment-avatar' />
            &nbsp;&nbsp;&nbsp;{auth.user.username} <br />
          </p>
          <textarea
            className='write-comment'
            id='text'
            defaultValue={comment.body}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='button'
            value='update'
            name='update'
            className='publish'
            onClick={() => this.handleUpdate(comment.id, id)}
          />
          <input
            type='button'
            value='cancel'
            name='cancel'
            className='no-publish'
            onClick={() => Comment(comment.id, id)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

ReadComment.propTypes = {
  auth: PropTypes.object,
  comment: PropTypes.object,
  params: PropTypes.object,
  onDelete: PropTypes.func,
  updateComment: PropTypes.func
};

export default connect(
  mapStateToProps,
  { updateComment }
)(ReadComment);
