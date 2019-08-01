import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteOneStory } from '../../actions/viewArticles';
import Button from '../common/button';
import avatar from '../../assets/images/avatar.png';
class Author extends Component {
  update = slug => {
    window.location.replace(`/articles/update/${slug}`);
  };
  delete = slug => {
      this.props.deleteOneStory(slug);
      window.location.replace('/articles');
  };
  render() {
    const { names, auth, date, readingTime, slug } = this.props;
    const profileImage = auth.user.image ? auth.user.image : avatar;
    return (
      <div className='author'>
        <div className='user-article'>
          <img src={profileImage} className='avatar' />
        </div>
        <div className='reading'>
          {names}&nbsp;&nbsp;&nbsp;
          <input type='button' value='follow' className='follow' />
          <br />
          <b>{date}&nbsp;&nbsp; - </b>&nbsp;&nbsp;&nbsp;
          <i>{readingTime}</i>
          <br />
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
const mapStateToProps = ({ auth }) => {
  return { auth };
};

Author.propTypes = {
  names: PropTypes.string,
  readingTime: PropTypes.string,
  date: PropTypes.object,
  auth: PropTypes.object,
  deleteOneStory: PropTypes.func,
  slug: PropTypes.string
};

export default connect(
  mapStateToProps,
  { deleteOneStory }
)(Author);
