import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import avatar from '../../assets/images/avatar.png';
import writting from '../../assets/images/writing.png';
import notification from '../../assets/images/notification.png';
import Search from '../articles/search';
import { query } from '../../actions/viewArticles';
import { PropTypes } from 'prop-types';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: '',
      searchQuery: ''
    };
  }
  setMenu = () => {
    const { profile } = this.state;
    const currentState = profile === '' ? 'show' : '';
    this.setState({
      profile: currentState
    });
  };
  handleSearch = search => {
    this.props.query(search);
  };
  render() {
    const { image } = this.props.auth;
    const profileImage = image ? image : { avatar };
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
        <Search
          value={this.props.articles.query}
          onChange={this.handleSearch}
          className="input-search"
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
  articles: state.articles
});

const connectedUserProfile = connect(
  mapStateToProps,
  { query }
)(UserProfile);
export { connectedUserProfile as UserProfile };
