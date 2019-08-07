import React from 'react';
import Button from '../../common/button'
const CommentModal = ({ value, onChange,onClick, display }) => {
  if (!display) {
    return null;
  } else {
    return (
      <div className='wrap-follow-model'>
        <div className='follow-model'>
          <div className='follow-model-menu'>
            <strong>
                Comment
            </strong>
          </div>
          <textarea cols="80" rows="10" value={value} onChange={onChange}></textarea>
          <Button
           value="Submit"
           className="btn-update"
           onClick={onClick}
           style={{ cursor: 'pointer' }}/>
        </div>
      </div>
    );
  }
};
export default CommentModal;
