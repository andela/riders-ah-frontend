import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteOneStory } from '../../actions/viewArticles';
import Button from '../common/button';
import avatar from '../../assets/images/avatar.png';
import {
  followUser,
  fetchFollowing,
  unfollowUser
} from '../../actions/followAction';
import { isFollowing } from '../../helpers/followHelper';
class Author extends Component {
  componentDidMount() {
    const { auth } = this.props;
    this.props.fetchFollowing(auth.user.username);
  }

  update = slug => {
    window.location.replace(`/articles/update/${slug}`);
  };
  delete = slug => {
      this.props.deleteOneStory(slug);
      window.location.replace('/articles');
  };

  handleFollow = username => {
    alert(`Are you sure to unfollow ${username}`);
    this.props.unfollowUser(username);
  };
  render() {
    const { names, auth, date, readingTime, slug, follow } = this.props;
    const profileImage = auth.user.image ? auth.user.image : avatar;
    const { isFollowed, following } = follow;
    let isfollow = isFollowing(following, names);
    return (
      <div className='author'>
        <div className='user-article'>
          <img src={profileImage} className='avatar' />
        </div>
        <div className='reading'>
          {names}&nbsp;&nbsp;&nbsp;
          {names === auth.user.username || localStorage.token === undefined ? (
            ''
          ) : (isFollowed === 'done' || isfollow) &&
            isFollowed !== 'unfollowed' ? (
            <Fragment>
              <Button
                value='following'
                className='following'
                onClick={() => this.handleFollow(names)}
              />
              <br />
            </Fragment>
          ) : (
            <Fragment>
              <Button
                value='follow'
                className='follow'
                onClick={() => this.props.followUser(names)}
              />
              <br />
            </Fragment>
          )}
          <b>{date}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <i>{readingTime}</i> <br />
          {names === auth.user.username ? (
            <Fragment>
              <Button
                onClick={this.update.bind(this, slug)}
                value='Update'
                className='btn-update'
              />
              <Button
                onClick={this.delete.bind(this, slug)}
                value='Delete'
                className='btn-delete'
              />
            </Fragment>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ auth, follow }) => {
  return { auth, follow };
};

Author.propTypes = {
  names: PropTypes.string,
  readingTime: PropTypes.string,
  date: PropTypes.object,
  auth: PropTypes.object,
  deleteOneStory: PropTypes.func,
  slug: PropTypes.string,
  followUser: PropTypes.func,
  fetchFollowing: PropTypes.func,
  follow: PropTypes.object,
  unfollowUser: PropTypes.func
};

export default connect(
  mapStateToProps,
  { deleteOneStory, followUser, fetchFollowing, unfollowUser }
)(Author);
