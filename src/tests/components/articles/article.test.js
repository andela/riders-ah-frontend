import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import OneStory from '../../../components/articles/oneStory';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { UserProfile } from '../../../components/common/userProfile';
import { store } from '../../../../helpers/utils/testUtils';
import { mount, shallow } from 'enzyme';
import Helpers from '../../../helpers/helpers';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk, promise]);

const article = {
  article: {
    article: {
      author: {
        username: 'John'
      },
      readingTime: 'read of 2 minutes',
      createdAt: '2019-07-15 17:41:19.195+02'
    }
  }
};
describe('article component', () => {
  it('should render without error', () => {
    const props = {
      state: { article,  
        likeAndDislike: {
        likes: {},
        dislikes: {}
      }, },
      fetchOneStory: jest.fn(slug => slug),
      fetchComment: jest.fn(slug => slug),
      match: { params: { slug: 'slug' } },
      getLikeAndDislikeCount: jest.fn()
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
      state: { article: { article },   
      likeAndDislike: {
        likes: {},
        dislikes: {}
      } },
      fetchOneStory: jest.fn(slug => slug),
      fetchComment: jest.fn(slug => slug),
      match: { params: { slug: 'slug' } },
      getLikeAndDislikeCount: jest.fn()
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

      state: { article, likeAndDislike: {
        likes: {},
        dislikes: {}
      }},
      fetchOneStory: jest.fn(slug => slug),
      fetchComment: jest.fn(slug => slug),
      match: { params: { slug: 'slug' } },
      getLikeAndDislikeCount: jest.fn()
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
  it('it should call on change when searching', () => {
    const props = {
      state: {
        articles: {
          fetched: 'done'
        }
      },
      articles: {
        query: ' '
      }
    };
    const UserProfileComponent = mount(
      <Provider store={mockStore({ auth: { user: {} } })}>
        <MemoryRouter>
          <UserProfile {...props} />
        </MemoryRouter>
      </Provider>
    );

    const component = UserProfileComponent.find('UserProfile');
    component.instance().handleSearch = jest.fn();
    component.instance().forceUpdate();
    component.update();
    const inputs = component.find("input");
    const usernameInput = inputs.find('[id="search"]');
     const event = { target: { value: "search" } };
    usernameInput.simulate("change", event);
    expect(component.instance().handleSearch).toHaveBeenCalled();
  });
  it('should render without error', () => {
    const search = 'new';
    const allArticle = [
      {
        title: 'Article 1',
        description: 'Educational',
        author: {
          username: 'sam'
        }
      },
      {
        title: 'Article 2',
        description: 'Educational',
        author: {
          username: 'niyitanga'
        }
      }
    ];
    const response = [
      { title: 'Found by title', values: [] },
      { title: 'Found by author', values: [] }
    ];
    expect(Helpers.searchArticles(allArticle, search)).toEqual(response);
});
});
