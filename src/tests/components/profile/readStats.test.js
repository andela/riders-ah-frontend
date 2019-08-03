import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../../helpers/httpServices';

import ReadStats from '../../../components/profile/readStats';

const props = {
  display: true,
  setModal: jest.fn(),
  stats: [
    {
      id: 7,
      slug: 'slug',
      title: 'title',
      notRegistered: 0,
      registered: 1,
      totalViews: 1,
      totalComments: 0,
      totalLikes: 0,
      totaldDisLikes: 0,
      totalShares: 0,
      readers: []
    }
  ]
};

const mockStore = configureStore([thunk, promise]);

describe('Readstas component test', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });

  const ReadStatsWrapper = mount(
    <ReadStats store={mockStore({})} {...props} />
  );
  it('renders without error', () => {
    expect(ReadStatsWrapper.exists()).toBe(true);
  });
});
