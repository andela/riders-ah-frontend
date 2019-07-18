import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { ToastContainer } from "react-toastify";
import Author from '../menu/author.jsx'
import NavBar from "../menu/navBar.jsx";
import { fetchOneStory } from '../../actions/oneStory.js'
import  {Loader}  from '../common/loader.jsx'
import Moment from 'react-moment';

export class OneStory extends Component {
  componentDidMount() {
    const { match: { params: {slug} }} = this.props;
    this.props.fetchOneStory(slug)
  }
  render() {
    const {article:  {data}} = this.props.state;
    if(data){
      return (
      
        <div>
          <NavBar />
          <ToastContainer />
          <Author names={data.article.author.username} 
                  readingTime = {data.article.readingTime} 
                  date = {<Moment fromNow>{data.article.createdAt}</Moment>}
                  slug={data.article.slug}
                  />
          <div className="story">
            <h2 className="title">{data.article.title}</h2>
            <div dangerouslySetInnerHTML={{__html: data.article.body}} />
          </div>
        </div>
      );
    } else{
      return(<div><Loader /></div>)
    }

  }
}

const mapStateToProps = state => {
  return { state };
};


OneStory.propTypes = {
  fetchOneStory: PropTypes.func,
  state: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object
};

export default connect(
  mapStateToProps,
  { fetchOneStory }
)(OneStory);
