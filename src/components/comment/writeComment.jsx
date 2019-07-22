import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import comment from '../../../helpers/commentToggle';
import { createComment } from '../../actions/comment';
import Avatar from '../../assets/images/avatar.png';

class WriteComment extends Component {
  state = {
    comment: ''
  };

  handleChange = event => {
    const data = { ...this.state };
    let newComment = data.comment;
    newComment = event.target.value;
    this.setState({ comment: newComment });
  };

  handleComment = () => {
    const { slug } = this.props.params;
    const Comment = this.state.comment;
    this.props.createComment(Comment, slug);
    this.handleChange({ target: { value: '' } });
  };
  render() {
    const { auth } = this.props;
    return (
      <div className='overlap'>
        <div
          className='type-comment'
          id='typeComment'
          style={{ display: 'block' }}
          onClick={() => comment('typeComment', 'writeComment')}
        >
          <img src={Avatar} className='comment-avatar' />
          &nbsp;&nbsp;&nbsp;Write a comment...
        </div>
        <div className='comment' id='writeComment' style={{ display: 'none' }}>
          <p className='name'>
            <img src={Avatar} className='comment-avatar' />
            &nbsp;&nbsp;&nbsp;{auth.user.username} <br />
          </p>
          <textarea
            className='write-comment'
            id='text'
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='button'
            value='comment'
            name='comment'
            className='publish'
            onClick={this.handleComment}
          />
          <input
            type='button'
            value='cancel'
            name='cancel'
            className='no-publish'
            onClick={() => comment('typeComment', 'writeComment')}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

WriteComment.propTypes = {
  auth: PropTypes.object,
  params: PropTypes.object,
  createComment: PropTypes.func
};

export default connect(
  mapStateToProps,
  { createComment }
)(WriteComment);
