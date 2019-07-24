import React from 'react';
import { Ratings } from '../../../components/common';

const props = {
  rate: 0,
  onChange: jest.fn(),
  rates: { allRates: [{ rate: 2 }, { rate: 3 }] }
};
const ratingComponent = shallow(<Ratings {...props} />);

describe('<Ratings />', () => {
  it('Render', () => {
    expect(ratingComponent.exists()).toBe(true);
  });
});
