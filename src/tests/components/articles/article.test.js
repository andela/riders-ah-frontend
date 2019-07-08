import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import OneStory from '../../../components/articles/oneStory';
import { store } from '../../../../helpers/utils/testUtils';
import { mount, shallow } from 'enzyme';

const article = {
  article: {
    data: {
      article: {
        author: {
          username: 'John'
        },
        readingTime: 'read of 2 minutes',
        createdAt: '2019-07-15 17:41:19.195+02'
      }
    }
  }
};

describe('article component', () => {
  it('should render without error', () => {
    const props = {
      state: { article },
      fetchOneStory: jest.fn(slug => slug),
      fetchComment: jest.fn(slug => slug),
      match: { params: { slug: 'slug' } }
    };
    const component = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <OneStory {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(component.length).toEqual(1);
  });

  it('should render without error', () => {
    const props = {
      state: { article: { article } },
      fetchOneStory: jest.fn(slug => slug),
      fetchComment: jest.fn(slug => slug),
      match: { params: { slug: 'slug' } }
    };
    const component = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <OneStory {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(component.length).toEqual(1);
  });

  it('should render without error', () => {
    const props = {
      state: { article },
      fetchOneStory: jest.fn(slug => slug),
      fetchComment: jest.fn(slug => slug),
      match: { params: { slug: 'slug' } }
    };
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <OneStory {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(component.length).toEqual(1);
  });
});
