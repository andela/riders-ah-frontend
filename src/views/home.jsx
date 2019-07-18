import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div id="component-Home">
        <video autoPlay muted loop id="landingVodeo" className="landing-video">
          <source src="../assets/videos/bg-video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="content">
          <div className="row">
            <div className="home-logo">
              <h1>Author Haven</h1>
            </div>
            <div className="btn-menu">
              <button className="btn-info">Contact us</button>
            </div>
          </div>
          <div className="row">
            <div className="btn-left">
              <ul>
                <li>
                  <Link to="/login" id="login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" id="signup">
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link to="/articles" id="home">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div className="description">
              <h2>Best place to publish your ideas to everyone</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
