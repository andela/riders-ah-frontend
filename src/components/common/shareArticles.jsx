import React from 'react';
import facebookIcon from '../../assets/images/facebook.png';
import twitterIcon from '../../assets/images/twitter.png';
import gmailIcon from '../../assets/images/gmail.png';
import {
    FacebookShareButton,
    TwitterShareButton,
    EmailShareButton
  } from 'react-share';
const ShareArticles = () => {
    const sharedurl = window.location.href;
  return (
      <div className="social-button">
        <FacebookShareButton  url={sharedurl}>
        <img
          id='facebook'
          src={facebookIcon}
        />
        </FacebookShareButton> 
        <TwitterShareButton  url={sharedurl}>
        <img
          id='twitter'
          src={twitterIcon}
        />
        </TwitterShareButton> 
        <EmailShareButton  url={sharedurl}>
        <img
          id='gmail'
          src={gmailIcon}
        />
        </EmailShareButton>  
        </div> 
  );
};

export default ShareArticles;
