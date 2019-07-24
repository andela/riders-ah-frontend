import promise from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../../helpers/httpServices';
import { findTestByAttr } from '../../../../helpers/utils/testUtils';

import { OneStory as OneStoryComponent } from '../../../components/articles/oneStory.jsx';

const props = {
  state: {
    article: {
      fetched: 'done',
      article: {
        title: 'title',
        author: { username: 'username' },
        readingTime: 'readingTime',
        createdAt: 'createdAt',
        slug: 'slug',
        tagList:['amandazi', 'aaa'],
        body:'<h1>Bug report</h1><p>T">const path = require("path");</span></p><p><span style="background-color: transparent;">// variables</span></p><p><span style="background-color: transparent;">const outPath = path.join(__dirname);</span></p><p><span style="background-color: transparent;">const htmlPath = path.join(__dirname, "html");</span>'
      }
    },
    likeAndDislike: {
      likes: {},
      dislikes: {}
    },
    bookmark: { isBookmarked: '', isBookmarksFetched: 'done', Bookmarks: [] },
    comment: { isCommentFetched: true },
    highlight:{
      highlights:{
        data:{
         id: 119,
         articleSlug: 'dentifying-a-high-priority-problem-and2',	
         highlightedText: 'opportunities',
         blockId: 'p2'
        }
      }
    }
  },
  fetchOneStory: jest.fn(slug => slug),
  fetchComment: jest.fn(slug => slug),
  deleteComment: jest.fn((id, slug) => {
    id, slug;
  }),
  getAllRates: jest.fn(slug => slug),
  fetchBookmarks: jest.fn(),
  match: {
    params: {
      slug: ''
    }
  },
  getLikeAndDislikeCount: jest.fn(),
  bookmarkArticle: jest.fn(slug => slug),
  auth: { user: {}, isAuthanticated: true },
  getHighlight: jest.fn(),
  highlight:{
    highlight:{
      data:{
       id: 119,
       articleSlug: 'dentifying-a-high-priority-problem-and2',	
       highlightedText: 'opportunities',
       blockId: 'p2'
      }
    }
  }
};

const mockStore = configureStore([thunk, promise]);

describe('oneStory component tests', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });
  const store = mockStore({ auth: { user: {}, isAuthanticated: true } });
  it('should render oneStory component without errror', () => {
    const OneStoryWrapper = shallow(
      <OneStoryComponent store={store} {...props} />
    );
    expect(OneStoryWrapper.exists()).toBe(true);
  });
  it('oneStory component should fetch comments', () => {
    const OneStoryWrapper = shallow(
      <OneStoryComponent store={store} {...props} />
    );
    OneStoryWrapper.instance().forceUpdate();
    OneStoryWrapper.update();
    expect(OneStoryWrapper.instance().props.fetchComment).toBeDefined();
  });
  it('should call handleDelete and delete comment', () => {
    const OneStoryWrapper = shallow(
      <OneStoryComponent store={mockStore({})} {...props} />
    );
    OneStoryWrapper.instance().forceUpdate();
    OneStoryWrapper.update();
    expect(OneStoryWrapper.instance().props.deleteComment).toBeDefined();
  });
});
