import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import closeImage from '../../assets/images/close.png';

 export class CommentEditHistory extends Component {
   state = {
     comments: []
   };

   componentWillReceiveProps(nextProps) {
      const { state} = nextProps;
      this.updateCommentHistory(state.comment);
   }

   updateCommentHistory(comment) {
     return comment.history && this.setState(prevState => ({
      ...prevState,
      comments: comment.history
    }))
   }

    render() { 
      const {comments} = this.state;
      const { display, onClose } = this.props;
      if(!display) {return null} else{
     return ( 
      <div className='wrap-edit-history-model'>
      <div className='edit-history-model'>
        <div className='edit-history-model-menu'>
          <strong>Comment Edit History</strong>
          <img
            src={closeImage}
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          />
          <div className='comment-list'>
            {comments.map((comment, key) => {
              return (
                <ul key={key}>
                  <li id='body'>{comment.body}</li>
                  <li id='time'><Moment fromNow ago>{comment.createdAt}</Moment></li>
                </ul>
              )
            } )}
          </div>
        </div>
      </div>
    </div>

      );}
   }
 }
 const mapStateToProps = state => {
  return { state };
};
CommentEditHistory.propTypes = {
  updateComment: PropTypes.func,
  onClose: PropTypes.func,
  display: PropTypes.func,
  comment:PropTypes.object,
  history:PropTypes.object,
  state:PropTypes.object
};

export default connect( mapStateToProps )(CommentEditHistory);
