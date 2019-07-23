import { act } from 'react-dom/test-utils';
import DefaultLogin from '../../../components/authentication/login';
import { findTestByAttr, store } from '../../../../helpers/utils/testUtils';
import React from 'react';


const props = {
    loginUser: jest.fn(),
    errors: {},
    auth: { credentials: {isValid: true}},
    history:{location:{search:`?token=token&username=username`}, replace: jest.fn()}
}
describe('app component', () => {

  const login = mount(<DefaultLogin {...props} store={store} />);

  it('should render without error', () => {
    const loginComponent = findTestByAttr(login, 'component-Login');
    expect(loginComponent.length).toEqual(1);
  });
  it('should input email', () => {
    const component = login.find('Login');
    component.instance().handleEmailInput = jest.fn();
    component.instance().forceUpdate();
    component.update();
    const inputs = login.find('input');
    const emailInput = inputs.find('[id="email"]');
    const event = { target: { value: 'email' } };
    emailInput.simulate('change', event);
    expect(component.instance().handleEmailInput).toHaveBeenCalled();
  });
  it('should input password', () => {
    const component = login.find('Login');
    component.instance().handlePasswordInput = jest.fn();
    component.instance().forceUpdate();
    component.update();
    const inputs = login.find('input');
    const passwordInput = inputs.find('[id="password"]');
    const event = { target: { value: 'password' } };
    passwordInput.simulate('change', event);
    expect(component.instance().handlePasswordInput).toHaveBeenCalled();
  });
  it('should pass credentilas to handleclick', () => {
    const component = login.find('Login');
    const { handleClick } = component.instance();
    act(() => {
      handleClick({
        email: 'email@email.email',
        password: 'password'
      });
    });
    expect(component.instance().props.auth.credentials.isValid).toEqual(
      'loading'
    );
  });
  it('should call handleclick', () => {
    const component = login.find('Login');
    const componentInstance = component.instance();
    const spy = jest.spyOn(componentInstance, 'handleClick');
    component.instance().forceUpdate();
    component.update();
    const button = login.find('button');
    const credentials = { email: 'email@email.email', password: 'password' };
    button.simulate('click', credentials);
    expect(spy).toHaveBeenCalled();
  });
});

