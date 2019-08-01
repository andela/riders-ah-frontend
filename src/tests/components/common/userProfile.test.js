import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { findTestByAttr, store } from '../../../../helpers/utils/testUtils';
import { UserProfile } from '../../../components/common/userProfile';

const props = {
  getNotifications: jest.fn(),
  auth: { user: {} }
};
const nextProps = {
  userInfo: {
    notifFetched: true,
    notifications: [{ notificationMessage: 'test', createdAt: '2019-07-29' }]
  }
};
let imgMenus = null;
const userProfile = mount(
  <Provider store={store}>
    <MemoryRouter>
      <UserProfile {...props} />
    </MemoryRouter>
  </Provider>
);

describe('<viewProfile/>', () => {
  it('render components', () => {
    expect(userProfile).toHaveLength(1);
  });
  it('simulate clicks', () => {
    const component = userProfile.find('UserProfile');
    imgMenus = userProfile.find('img');
    imgMenus.map(btn => btn.simulate('click', {}));
    expect(component.instance().setMenu).toBeDefined();
  });
  it('componentWillReceiveProps', () => {
    const component = userProfile.find('UserProfile');
    component.instance().forceUpdate();
    component.update();
    component.instance().componentWillReceiveProps(nextProps);
    expect(component.find('.notif-one').length).toBe(1);
  });
});
