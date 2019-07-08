import React, { Component } from 'react';
import Avatar from '../../assets/images/avatar.png';

class NavBar extends Component{
    render(){
        return(
        <div className= "menu-header">
            <img src="../assets/images/writing.png" className="logo"></img>
            <a href="#" className="menu-icon"></a>
            <div className="menu-left">
             <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Health</a></li>
              <li><a href="#">Educational</a></li>
              <li><a href="#">Econimics</a></li>
              <li><a href="#">More...</a></li>
             </ul>
            </div>
            <div className="dropdown">
              <img src={ Avatar } className="avatar"></img>
            <div className="dropdown-content">
              <a href="#">Profile</a>
              <a href="#">New story</a>
              <a href="./index.html">Sign out</a>
            </div>
            </div>
        </div>
        )
    }
}

export default NavBar;
