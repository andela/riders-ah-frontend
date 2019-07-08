import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PropTypes } from 'prop-types';
import { NavBar, Modal } from '../../components/common';
import Helpers from '../../helpers/helpers';
import { Button } from '../common';
import {
  getUserInfo,
  updateUser,
  resetUpdateAction,
  getUserFollowers,
  getArticles,
  getUserFollowing
} from '../../actions/profile';

class ViewProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        image: '',
        bio: '',
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        numFollowers: 0,
        numFollows: 0,
        numArticles: 0,
        articles: []
      },
      modalDisplay: 'none',
      profileDisplay: 'block',
      profileWidget: cloudinary.createUploadWidget(
        {
          cloudName: 'dfjns5lny',
          uploadPreset: 'nyxdcave',
          multiple: false,
          cropping: true,
          croppingShowBackButton: true
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            const user = { ...this.state.user };
            user.image = result.info.secure_url;
            this.setState({ user });
          }
        }
      )
    };
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput = e => {
    e.preventDefault();
    const user = { ...this.state.user };
    user[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ user });
  };
  showWidget = () => {
    this.state.profileWidget.open();
  };
  saveUser = () => {
    const { bio, username, firstName, lastName, image } = this.state.user;
    if (bio && username && firstName && lastName && image) {
      this.props.updateUser({ bio, username, firstName, lastName, image });
    } else {
      Helpers.setAlertError('Type the required info');
    }
  };
  setModal = () => {
    const { modalDisplay, profileDisplay } = this.state;
    const display = modalDisplay !== 'none' ? 'none' : 'block';
    const userDispaly = profileDisplay !== 'none' ? 'none' : 'block';
    this.setState({ modalDisplay: display, profileDisplay: userDispaly });
  };
  componentDidMount() {
    const user = Helpers.getUserInfoFromToken();

    this.props.getUserInfo(user.username);
    this.props.getUserFollowers(user.username);
    this.props.getUserFollowing(user.username);
    this.props.getArticles();
  }
  componentWillReceiveProps(nextProps) {
    const {
      error,
      message,
      profile,
      updated,
      followers,
      follows,
      articles
    } = nextProps.userInfo;
    if (profile && articles) {
      const totFollowers = followers ? followers.length : 0;
      const totFollows = follows ? follows.length : 0;
      const {
        data: { firstName, lastName, email, username, bio, image }
      } = profile;
      const userArticles = articles.length
        ? articles.filter(article => article.author.username === username)
        : [];
      const user = { ...this.state.user };
      user.image = image || '../../assets/images/default.png';
      user.bio = bio || '';
      user.email = email;
      user.username = username;
      user.firstName = firstName || '';
      user.lastName = lastName || '';
      user.numFollowers = totFollowers;
      user.numFollows = totFollows;
      user.numArticles = userArticles.length;
      user.articles = userArticles;
      this.setState({ user });
    }
    if (error) {
      Helpers.setAlertError(message);
    }
    if (updated) {
      Helpers.setAlertInfo(`${message}`);
      this.props.resetUpdateAction();
      this.props.getUserInfo(profile.data.username);
      this.setModal();
    }
  }
  render() {
    const { modalDisplay, profileDisplay } = this.state;
    const {
      image,
      bio,
      username,
      firstName,
      lastName,
      email,
      numFollowers,
      numFollows,
      numArticles,
      articles
    } = this.state.user;
    const userStyle = {
      display: profileDisplay
    };
    return (
      <div id='profile-component'>
        <ToastContainer />
        <NavBar />
        <div className='main'>
          <div className='content-user'>
            <Modal
              display={modalDisplay}
              firstName={firstName}
              lastName={lastName}
              email={email}
              username={username}
              bio={bio}
              image={image}
              setModal={this.setModal}
              onSave={this.saveUser}
              showWidget={this.showWidget}
              changeInput={this.changeInput}
            />
            {!username ? (
              <h2>Your profile will be displayed in a moment</h2>
            ) : (
              <div className='user-profile' style={userStyle}>
                <div className='avatar'>
                  <img src={image} alt={username} />
                </div>
                <div className='user-info'>
                  <div className='username'>{`${firstName} ${lastName}`}</div>
                  <ul className='info'>
                    <li>{numArticles} article(s)</li>
                    <li>{numFollows} following</li>
                    <li>{numFollowers} followers)</li>
                  </ul>
                  <div className='clear' />
                  <Button
                    name='edit'
                    id='editButton'
                    value='Edit'
                    className='btn btn-edit'
                    onClick={this.setModal}
                  />
                  <div className='bio'>{bio}</div>
                </div>
                <div className='articles-list'>
                  {articles.length ? (
                    <table>
                      <tr>
                        <th className='pull-left'>
                          <h4>Title</h4>
                        </th>
                        <th>
                          <h4>Reading time</h4>
                        </th>
                      </tr>
                      {articles.map((article, i) => (
                        <tr key={i}>
                          <td>
                            <b>{article.title}</b>
                          </td>
                          <td>
                            <i>{article.readingTime}</i>
                          </td>
                        </tr>
                      ))}
                    </table>
                  ) : (
                    <h4>Published articles will appear here</h4>
                  )}
                </div>
                {firstName || lastName ? (
                  <span />
                ) : (
                  <div className='bio'>
                    Update your profile: Click on the{' '}
                    <i>
                      <b>Edit button</b>
                    </i>{' '}
                    then type all required information
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userInfo: state.userInfo
});

ViewProfile.propTypes = {
  getUserInfo: PropTypes.func,
  updateUser: PropTypes.func,
  resetUpdateAction: PropTypes.func,
  getUserFollowers: PropTypes.func
};
export default connect(
  mapStateToProps,
  {
    getUserInfo,
    updateUser,
    resetUpdateAction,
    getUserFollowers,
    getArticles,
    getUserFollowing
  }
)(ViewProfile);
