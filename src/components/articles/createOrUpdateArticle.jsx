import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Input from '../common/input';
import Button from '../common/button';
import NavBar from '../common/navBar';
import { Loader } from '../common/loader'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Notify from '../../helpers/helpers';
import { ToastContainer } from 'react-toastify';
import { fetchOneStory } from '../../actions/oneStory';
import {
  createOrUpdateArticle,
  fetchArticle,createTag
} from '../../actions/articleAction';
import Joi from 'joi-browser';
import Helpers from '../../helpers/helpers';
import { modules, formats } from './editor';
import uploadIcon from '../../assets/images/upload-icon.png';

class CreateOrUpdateArticle extends Component {
  constructor(props) {
    super(props);
    this.modules = modules;
    this.formats = formats;
  }
  state = {
    article: {
      title: '',
      tag: '',
      category: '',
      description: '',
      body: '',
      image: ''
    },
    errors: {},
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
          const article = { ...this.state.article };
          article.image = result.info.secure_url;
          this.setState({ article });
        }
      }
    )
  };
  componentDidMount() {
    const slug = this.props.match.params.slug;
    if (slug) {
      this.props.fetchOneStory(slug);
    }
  }
  componentWillReceiveProps(nextProps) {
    const slug = this.props.match.params.slug;
    if (slug) {
      if (nextProps.article.fetched === 'done') {
        const {
          title,
          category,
          description,
          body,
        } = nextProps.article.article ;
        const retrievedArticle = { ...this.state.article };
        retrievedArticle.title = title;
        retrievedArticle.body = body;
        retrievedArticle.category = category;
        retrievedArticle.description = description;
        this.setState({ article: retrievedArticle });
      }
    }
  }
  showWidget = () => {
    this.state.profileWidget.open();
  };
  handleChange = event => {
    const article = { ...this.state.article };
    article[event.target.name] = event.target.value;
    this.setState({ article });
  };
  handleBodyChange = html => {
    const article = { ...this.state.article };
    article.body = html;
    this.setState({ article });
  };
  handleSubmit = () => {
    const validArticle = { ...this.state.article };
    const errors = Helpers.validate(validArticle, this.schema);
    this.setState({ errors: errors || {} });
    if (errors) {
      Object.keys(errors).forEach(key => {
        Helpers.setAlertError(errors[key]);
      });
      return;
    }
    const slug = this.props.match.params.slug;
    const { title, body, category, description, image, tag } = this.state.article;
    const article = {
      title,
      body,
      category,
      description,
      image,
      tag
    };
    this.props.createOrUpdateArticle(slug, article);
    this.props.createTag(slug, tag) 
  };
  render() {
    const { article } = this.props;
    if (article && article.success) {
      Notify.setAlertInfo(article.message);
      setTimeout(() => this.props.history.push('/articles'), 5000);
    }
    if (
      (article && article.isArticleRetrieved) ||
      !this.props.match.params.slug
    ) {
      return (
        <Fragment>
          <ToastContainer />
          <NavBar />
          <div className="write_content">
            <div className="title">
              <Input
                value={this.state.article.title}
                type="text"
                name="title"
                id="title"
                onChange={this.handleChange}
                placeholder="title"
                className="textForm titleText"
              />
              <img
                src={uploadIcon}
                alt="upload"
                onClick={this.showWidget}
                className="upload-button"
              />
              <Input
                value={this.state.article.description}
                type="text"
                name="description"
                id="description"
                onChange={this.handleChange}
                placeholder="Description"
                className="textForm"
              />
              <ReactQuill
                theme="snow"
                onChange={this.handleBodyChange}
                value={this.state.article.body}
                modules={this.modules}
                formats={this.formats}
                name="body"
                id="body"
                placeholder="Write your Article"
                autofocus
              />
              <Button
                onClick={this.handleSubmit}
                value={this.props.match.params.slug ? 'Update' : 'Publish'}
                name="saveContent"
                className="saveContent"
              />
            </div>
          </div>
          <div className="right-bar">
            <Input
              value={this.state.article.tag}
              type="text"
              name="tag"
              id="tag"
              onChange={this.handleChange}
              placeholder="tag"
              className="textForm multiple-input"
            />
            <select
              name="category"
              className="textForm category"
              id="category"
              onChange={this.handleChange}
            >
              <option value={this.state.article.category}>
                {this.state.article.category}
              </option>
              <option value="Technology">Technology</option>
              <option value="Politics">Politics</option>
              <option value="Health">Health</option>
              <option value="Educational">Educational</option>
              <option value="Economics">Economics</option>
            </select>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <ToastContainer />
          <Loader />
        </Fragment>
      );
    }
  }
  schema = {
    title: Joi.string()
      .required()
      .label('Title'),
      tag: Joi.string()
      .required()
      .label('tag'),
    category: Joi.string()
      .required()
      .label('Category'),
    description: Joi.string()
      .required()
      .label('Description'),
    body: Joi.string()
      .required()
      .label('Article Body'),
    image: Joi.string().allow(null, '')
      .label('Featured Image')
  };
}

const mapStateToProps = state => ({
  article: state.article
});

CreateOrUpdateArticle.defaultProps = {
  article: {},
  match: { params: { slug: null } }
};

CreateOrUpdateArticle.propTypes = {
  fetchOneStory: PropTypes.func,
  createTag: PropTypes.func,
  fetchArticle: PropTypes.func,
  createOrUpdateArticle: PropTypes.func,
  article: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object
};

export default connect(
  mapStateToProps,
  { createOrUpdateArticle, fetchArticle, createTag , fetchOneStory}
)(CreateOrUpdateArticle);
