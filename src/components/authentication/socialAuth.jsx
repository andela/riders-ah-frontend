import React, { Component } from 'react';
import twitterImage from '../../assets/images/twitter.png';
import facebookImage from '../../assets/images/facebook.png';
import googleImage from '../../assets/images/gmail.png';

const {API_URL} = process.env

class SocialAuth extends Component {
    loginToFacebook = () => {
        window.location.replace(`${API_URL}/api/v1/login/facebook`);
    
    }
    loginToTwitter = () => {
        window.location.replace(`${API_URL}/api/v1/login/twitter`);
    }
    loginToGoogle = () =>{
        window.location.replace(`${API_URL}/api/v1/login/google`);
    }
    render() { 
        return (
        <div>
          <img id="loginToFacebook" onClick={this.loginToFacebook } src={facebookImage}/>
          <img id="loginToTwitter" src={twitterImage} onClick = {this.loginToTwitter}/>
          <img id="loginToGoogle" src={googleImage} onClick = {this.loginToGoogle}/>
        </div> );
    }
}
 
export default SocialAuth;
