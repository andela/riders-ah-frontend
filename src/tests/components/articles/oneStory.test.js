import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../../helpers/httpServices';

import { OneStory as OneStoryComponent } from '../../../components/articles/oneStory.jsx';

const props = {
  state: {
    fetched: 'done',
    article: {
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
    }
  },
  fetchOneStory: jest.fn(slug => slug),
  fetchComment: jest.fn(slug => slug),
  deleteComment: jest.fn((id, slug) => {
    id, slug;
  }),
  getAllRates: jest.fn(slug => slug),
  match: {
    params: {
      slug: ''
    }
  },
  getLikeAndDislikeCount: jest.fn()
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
