import LocalLogin from '../../../components/authentication/localLogin';
import { findTestByAttr, store } from '../../../../helpers/utils/testUtils';

describe('app component', () => {
  it('should render without error', () => {
    const localLogin = shallow(<LocalLogin store={store} />);
    const localLoginComponent = findTestByAttr(
      localLogin,
      'component-LocalLogin'
    );
    expect(localLoginComponent.length).toEqual(1);
  });
});
