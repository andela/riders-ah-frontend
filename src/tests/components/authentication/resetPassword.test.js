import React from 'react';
import ResetPassword from '../../../components/authentication/ResetPassword';
import CompleteResetPassword from '../../../components/authentication/CompleteResetPassword';
import { store } from '../../../../helpers/utils/testUtils';

const props = {
  match: {
    params: {
      token: ''
    }
  }
};

describe('Reset Password functionality', () => {
  const ResetPasswordComponent = mount(<ResetPassword store={store} />);
  const CompleteResetPasswordComponent = mount(
    <CompleteResetPassword {...props} store={store} />
  );
  it('should render ResetPassword without error', () => {
    expect(ResetPasswordComponent.exists()).toBe(true);
  });
  it('should render CompleteResetPassword without error', () => {
    expect(CompleteResetPasswordComponent.exists()).toBe(true);
  });
  it('should submit  Reset Password form', () => {
    const form = ResetPasswordComponent.find('form').first();
    form.simulate('submit', { preventDefault: () => {} });
    expect(form.length).toBe(1);
  });
  it('should submit complete Reset Password form', () => {
    const form = CompleteResetPasswordComponent.find('form').first();
    form.simulate('submit', { preventDefault: () => {} });
    expect(form.length).toBe(1);
  });
});
