/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import App from '../app';
import { findTestByAttr, store } from '../../helpers/utils/testUtils';

describe('app component', () => {
  it('should render without error', () => {
    const app = shallow(<App store={store} />);
    const appComponent = findTestByAttr(app, 'component-App');
    expect(appComponent.length).toEqual(1);
  });
  it('should render without error', () => {
    const app = shallow(<App store={store} />);
    const appComponent = findTestByAttr(app, 'component-App');
    expect(appComponent.length).toEqual(1);
  });
});
