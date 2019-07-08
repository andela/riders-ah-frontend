import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import avatar from '../../assets/images/avatar.png';
import writting from '../../assets/images/writing.png';
import notification from '../../assets/images/notification.png';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: ''
    };
  }
  setMenu = () => {
    const { profile } = this.state;
    const currentState = profile === '' ? 'show' : '';
    this.setState({
      profile: currentState
    });
  };
  render() {
    const { image } = this.props.auth;
    const profileImage = image ? image : avatar;
    const { profile } = this.state;
    return (
      <div>
        <img src={writting} id='logo' />
        <div className='dropdown'>
          <img src={profileImage} onClick={this.setMenu} className='avatar' />
          <div className={`dropdown-content ${profile}`} id='myDropdown'>
            <Link to='/profile'>Profile</Link>
            <Link to='/articles/create'>New story</Link>
            <Link to='/login'>Sign out</Link>
          </div>
        </div>
        <div className='notification-bar'>
          <img src={notification} className='icon' />
        </div>
        <input type='text' className='input-search' placeholder='Search...' />
      </div>
    );
  }
}
UserProfile.defaultProps = {
  auth: { user: {} }
};

const mapStateToProps = state => ({
  auth: state.auth.user
});

const connectedUserProfile = connect(
  mapStateToProps,
  {}
)(UserProfile);
export { connectedUserProfile as UserProfile };
