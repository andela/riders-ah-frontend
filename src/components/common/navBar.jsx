import React from 'react';
import { UserProfile } from './userProfile';

const NavBar = () => {
  return (
    <div className='menu'>
      <div className='header'>
        <UserProfile />
      </div>
      <div className='navbar'>
        <ul>
          <li>
            <a href='/articles'>Home</a>
          </li>
          <li>
            <a href='#'>Technologies</a>
          </li>
          <li>
            <a href='#'>Politics</a>
          </li>
          <li>
            <a href='#'>Health</a>
          </li>
          <li>
            <a href='#'>Educational</a>
          </li>
          <li>
            <a href='#'>Design</a>
          </li>
          <li>
            <a href='#'>Culture</a>
          </li>
          <li>
            <a href='#'>Entertainment</a>
          </li>
          <li>
            <a href='#'>Development</a>
          </li>
          <li>
            <a href='#'>Human Parts</a>
          </li>
          <li>
            <a href='#'>Science</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
