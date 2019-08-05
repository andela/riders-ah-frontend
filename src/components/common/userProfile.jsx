import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import avatar from '../../assets/images/avatar.png';
import writting from '../../assets/images/writing.png';
import notification from '../../assets/images/notification.png';
import Search from '../articles/search';
import { query } from '../../actions/viewArticles';
import { PropTypes } from 'prop-types';
import { getNotifications, switchNotifications, getUserInfo } from '../../actions/profile';
import { logoutUser } from '../../actions/logout';
import Helpers from '../../helpers/helpers';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileDiv: '',
      searchQuery: '',
      notificationDiv: '',
      notifications: [],
      user: {},
      notifitions: [],
      isNotificationOpen: false
    };
  }
  componentDidMount() {
    this.props.getNotifications();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const { notificationSettings } = user;
      const emailIndex = notificationSettings.indexOf('receiveEmail');
      this.setState({ isNotificationOpen: emailIndex !== -1 });
    }
  }
  componentWillReceiveProps(nextProps) {
    const { notifFetched, notifications, switchDone } = nextProps.userInfo;
    const { isNotificationOpen } = this.state;
    if (notifFetched) {
      this.setState({ notifications });
    }
    if (switchDone) {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      this.setState({ isNotificationOpen: !isNotificationOpen });
      const user = { ...userInfo };
      const { notificationSettings } = userInfo;
      const settings = Helpers.arrayPopOrPush(
        notificationSettings,
        'receiveEmail'
      );
      user.notificationSettings = settings;
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
  setMenu = type => {
    const { profileDiv, notificationDiv } = this.state;
    const viewProfile = profileDiv === '' ? 'show' : '';
    const viewNotifications = notificationDiv === '' ? 'show' : '';
    if (type === 'profile') {
      this.setState({
        profileDiv: viewProfile
      });
    }
    if (type === 'notifitions') {
      this.setState({
        notificationDiv: viewNotifications
      });
    }
  }
  turnNotifications = e => {
    e.preventDefault();
    const { checked } = e.target;
    const action = checked ? 'set' : 'unSet';
    this.props.switchNotifications(action, 'receiveEmail');
  };
  handleSearch = search => {
    this.props.query(search);
  };
  handleLogout = () => {
    const { token } = localStorage;
    this.props.logoutUser(token);
  };
  render() {
    const { image } = this.props.auth;
    const profileImage = image ? image : { avatar };
    const { profileDiv, notifications, notificationDiv, isNotificationOpen } = this.state;
    return (
      <div>
        <img src={writting} id='logo' />
        <div className='dropdown'>
          <img
            src={profileImage}
            id='set-menu'
            onClick={() => this.setMenu('profile')}
            className='user-avatar'
          />
          <div className={`dropdown-content ${profileDiv}`}>
            <Link to='/profile'>Profile</Link>
            <Link to='/articles/create'>New story</Link>
            <Link to='/login' onClick={this.handleLogout}>Sign out</Link>
          </div>
        </div>
        <div
          className='notification-bar'
          id='set-menu'
          onClick={() => this.setMenu('notifitions')}
        >
          <img src={notification} className='icon' />
          <span className='badge'>{notifications.length}</span>
          <div className={`notification-content ${notificationDiv}`}>
            <div className='notification-item'>
              <h3>Notifications</h3>
              <label className='switch'>
                <input
                  type='checkbox'
                  id='togBtn'
                  checked={isNotificationOpen}
                  onChange={this.turnNotifications}
                />
                <div className='slider round' />
              </label>
              <hr />
              {!notifications.length ? (
                <div className='notif-one'>
                  <h4>No notifications</h4>
                </div>
              ) : (
                  notifications.map((notification, index) => (
                    <div className='notif-one' key={index}>
                      <h4>
                        {notification.notificationMessage} - &nbsp;
                      <Moment fromNow>{notification.createdAt}</Moment>
                      </h4>
                      <hr />
                    </div>
                  ))
                )}
            </div>
          </div>
        </div>
        <Search
          value={this.props.articles.query}
          onChange={this.handleSearch}
          className='input-search'
        />
      </div>
    );
  }
}
UserProfile.defaultProps = {
  auth: { user: {} },
  articles: {
    query: ' '
  }
};

UserProfile.propTypes = {
  articles: PropTypes.object,
  query: PropTypes.func,
  switchNotifications: PropTypes.func,
  getUserInfo: PropTypes.func,
  logoutUser:PropTypes.func
};
const mapStateToProps = state => ({
  auth: state.auth.user,
  articles: state.articles,
  userInfo: state.userInfo
});

const connectedUserProfile = connect(
  mapStateToProps,
  { query, getNotifications, switchNotifications, getUserInfo, logoutUser }
)(UserProfile);
export { connectedUserProfile as UserProfile };
