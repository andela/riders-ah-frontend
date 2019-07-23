import SocialAuth from '../../../components/authentication/socialAuth';
import { shallow } from 'enzyme';

describe('app component', () => {  
    const wrapper =  shallow(<SocialAuth  />)

  it('Should call loginToFacebook method when image is clicked',  () => {
    wrapper.find('#loginToFacebook').simulate('click')
  });
  it('Should call loginToGoogle method when image is clicked', () => {
    wrapper.find('#loginToGoogle').simulate('click')
  });
});
