import React from 'react';
import { PropTypes } from 'prop-types';

import Button from '../common/button';
import usersWhiteIcon from '../../assets/images/users-white-icon.png';
import likeWhiteIcon from '../../assets/images/like-white-icon.png';
import dislikeWhiteIcon from '../../assets/images/dislike-white-icon.png';
import commentsWhiteIcon from '../../assets/images/comments-white-icon.png';
import sharingWhiteIcon from '../../assets/images/sharing-white-icon.png';

const ReadStats = ({ display, setModal, stats }) => {
  return (
    <div className='wrap-stats-modal' style={{ display }}>
      <Button value='Profile' className='card-profile' onClick={setModal} />
      {stats.length > 0 ? (
        stats.map(stat => {
          return (
            <div key={stat.id}>
              <strong className='card-title'>{stat.title}</strong>
              <div className='Content'>
                <div className='box bg-blue'>
                  <h3>Total Readers</h3>
                  <h1>{stat.readers.length}</h1>
                  <img src={usersWhiteIcon} />
                </div>
                <div className='box bg-yellow'>
                  <h3>Total Likes</h3>
                  <h1>{stat.totalLikes}</h1>
                  <img src={likeWhiteIcon} />
                </div>
                <div className='box bg-red'>
                  <h3>Total Dislikes</h3>
                  <h1>{stat.totaldDisLikes}</h1>
                  <img src={dislikeWhiteIcon} />
                </div>
                <div className='box bg-green'>
                  <h3>Total Comments</h3>
                  <h1>{stat.totalComments}</h1>
                  <img src={commentsWhiteIcon} />
                </div>
                <div className='box bg-light-blue'>
                  <h3>Total shares</h3>
                  <h1>{stat.totalShares}</h1>
                  <img src={sharingWhiteIcon} />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className='Content'>
          <strong>You have no articles</strong>
        </div>
      )}
    </div>
  );
};

ReadStats.propTypes = {
  display: PropTypes.string,
  setModal: PropTypes.func,
  stats: PropTypes.array
};

export default ReadStats;
