import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteOneStory } from '../../actions/viewArticles';
import Update from '../../assets/images/update.png';
import Delete from '../../assets/images/delete.png';
class Author extends Component{
  update = (slug) => {
    window.location.replace(`/articles/update/${slug}`);
  }
  delete = (slug) => {
    alert('This article will be deleted.Are you willing to continue?')
    this.props.deleteOneStory;
    deleteOneStory(slug);
    window.location.replace('/articles');
  }
    render(){
  const {names, auth, date, readingTime, slug} = this.props;
      return(
        <div className="author">
        <img src={auth.user.image} className="avatar"/>
          <div className="reading">
              {names}&nbsp;&nbsp;&nbsp;
            <input type="button" value="follow" className="follow"/><br/>
            <b>{date}</b><br/><i>{readingTime}</i> <br/>
            { names === auth.user.username ? (<Fragment>
              <img src={Update} onClick = {this.update.bind(this, slug)}/>
              <img src={Delete} onClick = {this.delete.bind(this, slug)}/>
            </Fragment>) : ('') }
          </div>
      </div>)
    }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};



Author.propTypes = {
  names: PropTypes.string,
  readingTime:PropTypes.string,
  date:PropTypes.object,
  auth:PropTypes.object,
  deleteOneStory:PropTypes.func,
  slug:PropTypes.string
};

export default connect(mapStateToProps, { deleteOneStory}) (Author);
