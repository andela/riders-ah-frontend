import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';
import { NavBar, Modal } from '../../components/common';
import Helpers from '../../helpers/helpers';
import { Button } from '../common';
import Bookmark from '../articles/bookmark';
import FollowModal from '../follow/followModal';
import ReadStats from './readStats';
import {
  getUserInfo,
  updateUser,
  resetUpdateAction,
  getUserFollowers,
  getArticles,
  getUserFollowing
} from '../../actions/profile';
import { bookmarkArticle, fetchBookmarks } from '../../actions/bookmarkAction';
import {
  followUser,
  unfollowUser,
  fetchFollowing,
  fetchFollowers
} from '../../actions/followAction';

import { readStats } from '../../actions/statsAction';
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
        numFollowers: [],
        numFollows: [],
        numArticles: 0,
        articles: []
      },
      modalDisplay: 'none',
      statsModalDisplay: 'none',
      profileDisplay: 'block',
      followModalDisplay: false,
      followModalOption: '',
      statistics: [],
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
  setStatsModal = () => {
    const { statsModalDisplay, profileDisplay } = this.state;
    const display = statsModalDisplay !== 'none' ? 'none' : 'block';
    const userDispaly = profileDisplay !== 'none' ? 'none' : 'block';
    this.setState({ statsModalDisplay: display, profileDisplay: userDispaly });
  };
  navigateBookmark = slug => {
    this.props.history.push(`/articles/${slug}`);
  };
  toggleFollowModel = option => {
    this.setState({
      followModalDisplay: !this.state.followModalDisplay,
      followModalOption: option
    });
  };
  componentDidMount() {
    const user = Helpers.getUserInfoFromToken();
    this.props.getUserInfo(user.username);
    this.props.getUserFollowers(user.username);
    this.props.getUserFollowing(user.username);
    this.props.getArticles();
    this.props.fetchBookmarks();
    this.props.readStats();
  }
  componentWillReceiveProps(nextProps) {
    const { isBookmarked } = nextProps.bookmarks;
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
      const totFollowers = followers ? followers : [];
      const totFollows = follows ? follows : [];
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
    if (isBookmarked === 'done again') {
      this.props.fetchBookmarks();
    }

    const { isFollowed, isFollowingFetched } = nextProps.follow;
    if (isFollowed === 'done' || isFollowed === 'unfollowed') {
      const { auth } = this.props;
      if (isFollowingFetched !== 'done') {
        this.props.fetchFollowing(auth.user.username);
      } else {
        this.props.fetchFollowers(auth.user.username);
      }
    }
    let currentFollowers = this.props.follow.isFollowersFetched;
    let nextFollowers = nextProps.follow.isFollowersFetched;

    if (currentFollowers !== nextFollowers) {
      let following = nextProps.follow.following;
      let Followers = nextProps.follow.follower;
      this.setState({
        user: {
          ...this.state.user,
          numFollowers: Followers,
          numFollows: following
        }
      });
    }
      if (nextProps.stats.isStatsFetched === 'done') {
        const { stats } = nextProps.stats;
        let Statistics = { ...this.state.statistics };
        Statistics = stats;
        this.setState({ statistics: Statistics });
      }
  }

  handleBookmark = slug => {
    this.props.bookmarkArticle(slug);
  };

  handleFollow = username => {
    this.props.followUser(username);
  };
  handleUnFollow = username => {
    this.props.unfollowUser(username);
  };
  render() {
    const { bookmarks } = this.props;
    const isBookmark = true;
    const { isBookmarksFetched, Bookmarks } = bookmarks;
    const {
      modalDisplay,
      profileDisplay,
      followModalDisplay,
      followModalOption,
      statsModalDisplay,
      statistics
    } = this.state;
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
          <div
            className='content-user'
            style={
              statsModalDisplay !== 'none'
                ? { width: '100%' }
                : { width: '71%' }
            }
          >
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
            <FollowModal
              display={followModalDisplay}
              onClose={this.toggleFollowModel}
              option={followModalOption}
              following={numFollows}
              followers={numFollowers}
              handleFollow={this.handleFollow}
              handleUnFollow={this.handleUnFollow}
            />
            <ReadStats
              display={statsModalDisplay}
              setModal={this.setStatsModal}
              stats={statistics}
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
                    <li onClick={() => this.toggleFollowModel('Following')}>
                      {numFollows.length} following
                    </li>
                    <li onClick={() => this.toggleFollowModel('Followers')}>
                      {numFollowers.length} followers
                    </li>
                    <li
                      onClick={this.setStatsModal}
                      style={{ cursor: 'pointer' }}
                    >
                      Reading Stats
                    </li>
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
                      <tbody>
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
                              <b><a href={`/articles/${article.slug}`}>{article.title}</a></b>
                            </td>
                            <td>
                              <i>{article.readingTime}</i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
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
                <div className='bookmark'>
                  <h1>Bookmarks</h1>
                  {isBookmarksFetched === 'done' && Bookmarks.length > 0 ? (
                    Bookmarks.map(bookmark => {
                      return (
                        <div className='bookmarked-article' key={bookmark.id}>
                          <div>
                            <p
                              className='article-title'
                              onClick={() =>
                                this.navigateBookmark(bookmark.article.slug)
                              }
                            >
                              <strong>{bookmark.article.title}</strong>
                            </p>
                            <br />
                            <li>{bookmark.article.description}</li>
                            <li className='author-name'>
                              {bookmark.author.username}
                            </li>
                            <li className='article-date'>
                              <Moment format='YYYY/MM/DD'>
                                {bookmark.article.createdAt}
                              </Moment>
                            </li>
                            <li className='reading-time'>
                              {bookmark.article.readingTime}
                            </li>
                            <Bookmark
                              handleBookmark={() =>
                                this.handleBookmark(bookmark.article.slug)
                              }
                              isBookmark
                              className='bookmarkImage'
                            />
                          </div>
                          <img
                            src={bookmark.article.image}
                            className='avatar'
                            style={{ cursor: 'pointer', borderRadius: '35%' }}
                            onClick={() =>
                              this.navigateBookmark(bookmark.article.slug)
                            }
                          />
                        </div>
                      );
                    })
                  ) : (
                    <h3>No Bookmarked articles</h3>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userInfo: state.userInfo,
  bookmarks: state.bookmark,
  follow: state.follow,
  auth: state.auth,
  stats: state.stats
});

ViewProfile.propTypes = {
  getUserInfo: PropTypes.func,
  updateUser: PropTypes.func,
  resetUpdateAction: PropTypes.func,
  getUserFollowers: PropTypes.func,
  bookmarks: PropTypes.object,
  Bookmarks: PropTypes.array,
  history: PropTypes.object,
  bookmarkArticle: PropTypes.func,
  fetchBookmarks: PropTypes.func,
  getUserFollowing: PropTypes.func,
  followUser: PropTypes.func,
  unfollowUser: PropTypes.func,
  follow: PropTypes.object,
  auth: PropTypes.object,
  fetchFollowing: PropTypes.func,
  fetchFollowers: PropTypes.func,
  readStats: PropTypes.func,
  stats: PropTypes.object
};
export default connect(
  mapStateToProps,
  {
    getUserInfo,
    updateUser,
    resetUpdateAction,
    getUserFollowers,
    getArticles,
    getUserFollowing,
    fetchBookmarks,
    bookmarkArticle,
    followUser,
    unfollowUser,
    fetchFollowing,
    fetchFollowers,
    readStats
  }
)(ViewProfile);
