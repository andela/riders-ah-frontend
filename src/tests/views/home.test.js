import React from 'react';
import { Home } from '../../views';
import { findTestByAttr } from '../../../helpers/utils/testUtils';

describe('Home component', () => {
  it('should render without error', () => {
    const home = shallow(<Home />);
    const homeComponent = findTestByAttr(home, 'component-Home');
    expect(homeComponent.length).toEqual(1);
  });
});
