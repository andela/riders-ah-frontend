import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../../helpers/httpServices';

import FollowModal from '../../../components/follow/followModal';

const props = {
  display: true,
  onClose: jest.fn(),
  option: 'Following',
  following: [
    {
      id: 5,
      username: 'username',
      bio: null,
      image: null,
      email: 'email@email.com'
    }
  ],
  followers: [],
  handleFollow: jest.fn(),
  handleUnFollow: jest.fn()
};

const mockStore = configureStore([thunk, promise]);

describe('FollowModal component test', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });
  const store = mockStore({});
  it('should render FollowModal component without errror', () => {
    const FollowModalWrapper = shallow(
      <FollowModal store={store} {...props} />
    );
    expect(FollowModalWrapper.exists()).toBe(true);
  });
});
