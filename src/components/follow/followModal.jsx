import React from 'react';
import Button from '../../components/common/button';
import closeImage from '../../assets/images/close.png';
import avatar from '../../assets/images/default.png';
import { isFollowing } from '../../helpers/followHelper';

const FollowModal = ({
  display,
  onClose,
  option,
  following,
  followers,
  handleFollow,
  handleUnFollow
}) => {
  if (!display) {
    return null;
  } else {
    return (
      <div className='wrap-follow-model'>
        <div className='follow-model'>
          <div className='follow-model-menu'>
            <strong>{option}</strong>
            <img
              src={closeImage}
              onClick={onClose}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className='follow-model-row-wrapper'>
            {option === 'Following' ? (
              following.length > 0 ? (
                following.map(Following => (
                  <div className='follow-model-row' key={Following.id}>
                    <img
                      src={Following.image !== null ? Following.image : avatar}
                      className='avatar'
                    />
                    <strong>{Following.username}</strong>
                    <Button
                      value='following'
                      className='following'
                      onClick={() => handleUnFollow(Following.username)}
                    />
                  </div>
                ))
              ) : (
                <div className='follow-model-row'>You do not follow anyone</div>
              )
            ) : followers.length > 0 ? (
              followers.map(follower => (
                <div className='follow-model-row' key={follower.id}>
                  <img
                    src={follower.image !== null ? follower.image : avatar}
                    className='avatar'
                  />
                  <strong>{follower.username}</strong>
                  {isFollowing(following, follower.username) ? (
                    <Button
                      value='following'
                      className='following'
                      onClick={() => handleUnFollow(follower.username)}
                    />
                  ) : (
                    <Button
                      value='follow'
                      className='follow'
                      onClick={() => handleFollow(follower.username)}
                    />
                  )}
                </div>
              ))
            ) : (
              <div className='follow-model-row'>You have no followers</div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default FollowModal;
