import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Button from '../../components/common/button';
import Input from '../../components/common/input';
import { findTestByAttr, store } from '../../../helpers/utils/testUtils';
import { NavBar, ProfileSideMenu, Modal } from '../../components/common';
import { Provider } from 'react-redux';

const mountedButton = mount(<Button />);
const mountedInput = mount(<Input />);
const mountedNavBar = mount(
  <Provider store={store}>
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  </Provider>
);
const mountedModal = mount(<Modal />);
let componentSide = mount(
  <MemoryRouter>
    <ProfileSideMenu />
  </MemoryRouter>
);
const sideMenuComponent = componentSide.find('.side_menu');

describe('<CommonComponets />', () => {
  test('Should render a button', () => {
    expect(mountedButton).toHaveLength(1);
  });
  test('Should render an input', () => {
    expect(mountedInput).toHaveLength(1);
  });
  test('Should render an NavaBar', () => {
    expect(mountedNavBar).toHaveLength(1);
  });
  test('Should render an ProfileSideMenu', () => {
    expect(sideMenuComponent.length).toEqual(1);
  });
  test('Should render an edit profile modal', () => {
    expect(mountedModal.length).toEqual(1);
  });
});
