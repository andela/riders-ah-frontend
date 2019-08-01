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
        slug: 'slug'
      }
    },
    likeAndDislike: {
      likes: {},
      dislikes: {}
    },
    bookmark: { isBookmarked: '', isBookmarksFetched: 'done', Bookmarks: [] }
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
  bookmarkArticle: jest.fn(slug => slug)
};

const mockStore = configureStore([thunk, promise]);

describe('oneStory component tests', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });
  const store = mockStore({});
  const Store = mockStore({ auth: { user: {} } });
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
  it('should call handleBookmark function', () => {
    const OneStoryWrapper = mount(
      <Provider store={Store}>
        <MemoryRouter>
          <OneStoryComponent {...props} />
        </MemoryRouter>
      </Provider>
    );
    const component = OneStoryWrapper.find('OneStory');
    component.instance().handleBookmark = jest.fn();
    // console.log(component.props().bookmarkArticle);
    const bookmark = findTestByAttr(OneStoryWrapper, 'bookmark');
    const bookmarkImage = bookmark.find('img');
    bookmarkImage.simulate('click');
    expect(component.instance().handleBookmark).toHaveBeenCalled();
    expect(component.props().bookmarkArticle).toBeDefined();
  });
});
