import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPen } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { highlightArticle } from '../../../actions/article/highlight';
import CommentModal from '../highlight/commentHighlightModel';

let slug;
class Highlight extends Component {
  state = {
    selectionRange: {},
    highlightedtext: '',
    startindex: 0,
    endindex: 0,
    blockId: '',
    isThereAnythingSelected: false,
    isOpen: false,
    comment: ''
  };

  componentDidMount = () => {
    slug = this.props.state.article && this.props.state.article.article.slug;
    window.addEventListener('click', this.isthereAHighlight);
    window.addEventListener('scroll', this.isthereAHighlight);
  };
  getSelectionRange = windowSelection => {
    const selectionRange =
      windowSelection.toString() && windowSelection.getRangeAt(0);
    const selectionRectangle =
      selectionRange && selectionRange.getBoundingClientRect();
    return { selectionRange, selectionRectangle };
  };
  isthereAHighlight = () => {
    if (window.getSelection().toString()) {
      const selectionRange = this.getSelectionRange(window.getSelection());
      const { anchorOffset, focusOffset } = window.getSelection();
      const highlightedtext = window.getSelection().toString();
      const startindex = Math.min(anchorOffset, focusOffset);
      const endindex = Math.max(anchorOffset, focusOffset);
      const blockId = window.getSelection().anchorNode.parentElement.id;

      const isThereAnythingSelected =
        highlightedtext && blockId.substring(0, 1) === 'p';
      this.setState(prevState => ({
        selectionRange: selectionRange.selectionRectangle,
        highlightedtext: highlightedtext || prevState.highlightedtext,
        startindex,
        endindex,
        blockId,
        isThereAnythingSelected
      }));
    } else {
      this.setState({
        isThereAnythingSelected: false
      });
    }
  };
  handleCommentChange = e => this.setState({ comment: e.target.value });
  handleCommentSave = () => {
    if (window.getSelection()) {
      const {
        highlightedtext,
        startindex,
        endindex,
        blockId,
        comment
      } = this.state;
      const highlight = {
        highlightedtext,
        startindex,
        endindex,
        blockId,
        comment
      };
      this.props.highlightArticle(slug, highlight);
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  setModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleHighlight = () => {
    if (window.getSelection()) {
      const { highlightedtext, startindex, endindex, blockId } = this.state;
      const highlight = {
        highlightedtext,
        startindex,
        endindex,
        blockId
      };
      this.props.highlightArticle(slug, highlight);
    }
  };
  render() {
    const {
      selectionRange,
      isThereAnythingSelected,
      highlightedtext
    } = this.state;
    return (
      <span>
        {isThereAnythingSelected ? (
          <div
            className="highlight"
            style={{
              position: 'fixed',
              backgroundColor: '#000000d6',
              padding: '6px',
              borderRadius: '10px',
              top: `${selectionRange.top}px`,
              left: `${selectionRange.left}px`
            }}
          >
            <span style={{ color: '#ffffff' }}>
              <FontAwesomeIcon icon={faPen} onClick={this.handleHighlight} />
            </span>
            <span style={{ color: '#ffffff' }}>
              | <FontAwesomeIcon icon={faComment} onClick={this.setModal} />
            </span>
          </div>
        ) : (
          ''
        )}
        {highlightedtext ? (
          <CommentModal
            value={this.state.comment}
            onChange={this.handleCommentChange}
            onClick={this.handleCommentSave}
            display={this.state.isOpen}
          />
        ) : (
          ''
        )}
      </span>
    );
  }
}

Highlight.defaultProps = {
  article: { article: { slug: '' } }
};
Highlight.propTypes = {
  highlightArticle: PropTypes.func,
  slug: PropTypes.string
};
const mapStateToProps = state => ({
  state,
  auth: state.auth,
  rate: state.rate
});
export default connect(
  mapStateToProps,
  { highlightArticle }
)(Highlight);
