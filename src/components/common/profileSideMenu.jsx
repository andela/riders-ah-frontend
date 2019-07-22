import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSideMenu = () => {
  return (
    <div className='side_menu' id='sideMenu'>
      <ul id='list'>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>Bio</li>
        <li>Articles</li>
        <li>Followers</li>
        <li>Following</li>
        <li>settings</li>
      </ul>
    </div>
  );
};

export { ProfileSideMenu };
