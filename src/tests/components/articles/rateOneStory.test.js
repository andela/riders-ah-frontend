import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../helpers/utils/testUtils';
import { OneStory } from '../../../components';

const props = {
  fetchOneStory: jest.fn(),
  fetchComment: jest.fn(),
  deleteComment: jest.fn(),
  rateArticle: jest.fn(),
  getAllRates: jest.fn(),
  auth: { user: {} },
  match: { params: { slug: 'test' } },
  state: { article: { fetched: 'done', article: { author: {} } } }
};
const state = {
  comments: [],
  limit: 5,
  offset: 0,
  rates: {
    rate: 0,
    actual: 0,
    rounded: 0,
    allRates: []
  }
};
const nextProps = {
  rate: {
    ratings: { ratings: [{ rate: 3 }, { rate: 4 }] },
    fetchSuccess: true,
    rateSuccess: true,
    newRate: { data: { rating: [{ rate: 2 }] } }
  },
  state: { article: { fetched: 'done', article: { author: {} } } }
};
let buttons = null;
let inputs = null;
const oneStory = mount(
  <Provider store={store}>
    <MemoryRouter>
      <OneStory {...props} />
    </MemoryRouter>
  </Provider>
);
const component = oneStory.find('OneStory');
describe('<OneStory/>', () => {
  beforeEach(() => {
    buttons = oneStory.find('button');
    inputs = oneStory.find('input');

    buttons.map(btn => btn.simulate('click', {}));
    expect(oneStory).toHaveLength(1);
  });
  it('componentWillReceiveProps', () => {
    component.instance().forceUpdate();
    component.update();
    component.instance().componentWillReceiveProps(nextProps);
  });
  it('inputs', () => {
    const rateButton = component.find('#ratingArticle');
    component.instance().rateArticle = jest.fn(rate => rate);
    rateButton.map(btn => btn.simulate('change', {}));
    expect(component.props().rateArticle).toBeDefined();
  });
});
