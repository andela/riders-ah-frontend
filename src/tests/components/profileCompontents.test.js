import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { findTestByAttr, store } from '../../../helpers/utils/testUtils';
import { ViewProfile } from '../../components';

const props = {
  getUserInfo: jest.fn(),
  updateUser: jest.fn(),
  resetUpdateAction: jest.fn(),
  getArticles: jest.fn(),
  getUserFollowing: jest.fn(),
  getUserFollowers: jest.fn(),
  auth: { user: {} }
};
const state = {
  user: {
    image: '',
    bio: '',
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    numFollowers: 0,
    numFollows: 0,
    numArticles: 0,
    articles: []
  },
  modalDisplay: 'none',
  profileDisplay: 'block'
};
const nextProps = {
  userInfo: {
    error: 'hey',
    message: '',
    profile: {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        bio: '',
        image: ''
      }
    },
    updated: true,
    followers: 0,
    follows: 0,
    articles: [{ title: 'title', author: { username: 'test' } }]
  },
  bookmarks: { isBookmarked: '', isBookmarksFetched: 'done', Bookmarks: [] },
  follow: {
    isFollowed: '',
    isFollowingFetched: '',
    isFollowersFetched: '',
    following: [],
    follower: []
  }
};
let buttons = null;
let inputs = null;
const viewProfile = mount(
  <Provider store={store}>
    <MemoryRouter>
      <ViewProfile {...props} />
    </MemoryRouter>
  </Provider>
);
describe('<viewProfile/>', () => {
  beforeEach(() => {
    buttons = viewProfile.find('button');
    inputs = viewProfile.find('input');
  });
  it('should render without error', () => {
    const viewProfileComponent = findTestByAttr(
      viewProfile,
      'profile-component'
    );
    expect(viewProfileComponent.length).toEqual(1);
    expect(viewProfile).toHaveLength(1);
  });

  it('componentWillReceiveProps', () => {
    const component = viewProfile.find('ViewProfile');
    component.instance().forceUpdate();
    component.update();
    component.instance().componentWillReceiveProps(nextProps);
  });
  it('inputs', () => {
    const component = viewProfile.find('ViewProfile');
    const saveButtons = component.find('#save');
    component.instance().updateUser = jest.fn();
    inputs.map(input =>
      input.simulate('change', {
        target: {
          name: input.instance().name,
          value: 'test'
        }
      })
    );
    saveButtons.map(btn => btn.simulate('click', {}));
    buttons.map(btn => btn.simulate('click', {}));
    expect(component.props().updateUser).toBeDefined();
  });
});
