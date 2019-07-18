import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="menu">
        <div className="header">
          <img src="../assets/img/writing.png" id="logo" />
          <div className="dropdown">
            <img
              src="../assets/img/avatar.png "
              className="avatar"
            />
            <div className="dropdown-content" id="myDropdown">
              <a href="#">Profile</a>
              <a href="#">New story</a>
              <a href="./index.html">Sign out</a>
            </div>
          </div>
          <div className="notification-bar">
            <img src="../assets/img/notification.png" className="icon" />
          </div>
          <input type="text" className="input-search" placeholder="Search..." />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Politics</a>
            </li>
            <li>
              <a href="#">Health</a>
            </li>
            <li>
              <a href="#">Educational</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Culture</a>
            </li>
            <li>
              <a href="#">Entertainment</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
            <li>
              <a href="#">Human Parts</a>
            </li>
            <li>
              <a href="#">Science</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
