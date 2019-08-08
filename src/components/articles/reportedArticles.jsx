import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';
import { NavBar } from '../../components/common';
import Helpers from '../../helpers/helpers';
import { getReportedArticles } from '../../actions/articleAction';
import { NotFound } from '../common/notFound';

class ReportedArticles extends Component {
  state = {
    reported: {
      total: 0,
      reports: []
    }
  };
  componentDidMount() {
    this.props.getReportedArticles();
  }
  componentWillReceiveProps(props) {
    const { reportedSuccess, reported } = props.article;
    if (reportedSuccess) {
      this.setState({ reported });
    }
  }
  render() {
    const { reported } = this.state;
    return (
      <div id='reported-component'>
        <ToastContainer />
        <NavBar />
        <div className='main'>
          <div className='content-user'>
            {reported.total ? (
              <div className='reported-article'>
                <h3>
                  List of reported articles: <span>{reported.total} </span>
                  article(s)
                </h3>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Article title</th>
                      <th>Report type</th>
                      <th>Description</th>
                      <th>Reported time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reported.reports.map((article, articleIndex) => (
                      <tr key={articleIndex}>
                        <td>{articleIndex + 1}</td>
                        <td>
                          <a href={`/articles/${article.articleSlug}`}>
                            {article.Article.title}
                          </a>
                        </td>
                        <td>{article.reportType.toUpperCase()}</td>
                        <td>{article.reason}</td>
                        <td>{new Date(article.createdAt).toDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <NotFound message='No article reported' />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  article: state.article
});

ReportedArticles.propTypes = {
  getReportedArticles: PropTypes.func
};
export default connect(
  mapStateToProps,
  { getReportedArticles }
)(ReportedArticles);
