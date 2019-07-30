import React from 'react';
import { Ratings } from '../../../components/common';

const props = {
  rate: 0,
  onChange: jest.fn(),
  rates: { actual: 2 }
};
const ratingComponent = shallow(<Ratings {...props} />);

describe('<Ratings />', () => {
  it('Render', () => {
    expect(ratingComponent.exists()).toBe(true);
  });
});
