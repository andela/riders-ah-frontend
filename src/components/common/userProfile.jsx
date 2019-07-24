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
import { getNotifications } from '../../actions/profile';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileDiv: '',
      searchQuery: '',
      notificationDiv: '',
      notifications: []
    };
  }
  componentDidMount() {
    this.props.getNotifications();
  }
  componentWillReceiveProps(nextProps) {
    const { notifFetched, notifications } = nextProps.userInfo;
    if (notifFetched) {
      this.setState({ notifications });
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
    if (type === 'notifications') {
      this.setState({
        notificationDiv: viewNotifications
      });
    }
  };
  handleSearch = search => {
    this.props.query(search);
  };
  render() {
    const { image } = this.props.auth;
    const profileImage = image ? image : { avatar };
    const { profileDiv, notifications, notificationDiv } = this.state;
    return (
      <div>
        <img src={writting} id='logo' />
        <div className='dropdown'>
          <img
            src={profileImage}
            onClick={() => this.setMenu('profile')}
            className='user-avatar'
          />
          <div className={`dropdown-content ${profileDiv}`}>
            <Link to='/profile'>Profile</Link>
            <Link to='/articles/create'>New story</Link>
            <Link to='/login'>Sign out</Link>
          </div>
        </div>
        <div
          className='notification-bar'
          onClick={() => this.setMenu('notifications')}
        >
          <img src={notification} className='icon' />
          <span className='badge'>{notifications.length}</span>
          <div className={`notification-content ${notificationDiv}`}>
            <div className='notification-list'>
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
  query: PropTypes.func
};
const mapStateToProps = state => ({
  auth: state.auth.user,
  articles: state.articles,
  userInfo: state.userInfo
});

const connectedUserProfile = connect(
  mapStateToProps,
  { query, getNotifications }
)(UserProfile);
export { connectedUserProfile as UserProfile };
