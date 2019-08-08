import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../helpers/utils/testUtils';
import { UserProfile } from '../../../components/common/userProfile';

const props = {
  getNotifications: jest.fn(),
  switchNotifs: jest.fn(),
  getUserInfo: jest.fn(),
  auth: { user: {} }
};
const nextProps = {
  userInfo: {
    notifFetched: true,
    notifications: [{ notificationMessage: 'test', createdAt: '2019-07-29' }],
    switchDone: true
  },
  auth: { roles: 'super_admin' }
};
let imgMenus = null;
const userProfileComponent = mount(
  <Provider store={store}>
    <MemoryRouter>
      <UserProfile {...props} />
    </MemoryRouter>
  </Provider>
);

describe('<viewProfile/>', () => {
  beforeEach(() => {
    localStorage.setItem(
      'user',
      JSON.stringify({ username: 'test', notificationSettings: ['hey'] })
    );
  });
  it('render components', () => {
    expect(userProfileComponent).toHaveLength(1);
  });
  it('simulate clicks', () => {
    const component = userProfileComponent.find('UserProfile');
    imgMenus = userProfileComponent.find('img');
    imgMenus.map(btn => btn.simulate('click', {}));
    expect(component.instance().setMenu).toBeDefined();
  });
  it('componentWillReceiveProps', () => {
    const component = userProfileComponent.find('UserProfile');
    component.instance().forceUpdate();
    component.update();
    component.instance().componentWillReceiveProps(nextProps);
    expect(component.find('.notif-one').length).toBe(0);
  });
});
