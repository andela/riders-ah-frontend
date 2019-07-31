import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../../helpers/httpServices';
import Author from '../../../components/menu/author';

const mockStore = configureStore([thunk, promise]);
const store = mockStore({
  auth: { user: {} },
  follow: {
    isFollowed: '',
    isFollowingFetched: '',
    isFollowersFetched: '',
    following: [],
    follower: []
  }
});

describe('Author Component test', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });

  test('Author Component', () => {
    const wrapper = mount(<Author store={store} />);
    const Component = wrapper.find('Author');
    expect(store.getActions().length).toBe(1);
    expect(Component.instance().handleFollow).toBeDefined();
    expect(Component.instance().props.fetchFollowing).toBeDefined();
    expect(wrapper.exists()).toBe(true);
  });
});
