import React from 'react';
import moxios from 'moxios';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import http from '../../../helpers/httpServices';
import CreateOrUpdateArticle from '../../../components/articles/createOrUpdateArticle';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk, promise]);

const props = {
  match: {
    params: {
      token: ''
    }
  },
  articles: {
    query: ' '
  }
};

describe('Create and update  functionality', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });

  it('should render create article component', () => {
    const CreateArticleWrapper = mount(
      <Provider store={mockStore({ auth: { user: {} } })}>
        <MemoryRouter>
          <CreateOrUpdateArticle {...props} />
        </MemoryRouter>
      </Provider>
    );

    expect(CreateArticleWrapper.exists()).toBe(true);
  });
  it('should render update article component', () => {
    const UpdateArticleWrapper = mount(
      <Provider store={mockStore({ auth: { user: {} } })}>
        <MemoryRouter>
          <CreateOrUpdateArticle {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(UpdateArticleWrapper.exists()).toBe(true);
  });
  it('should input title when creating an article', () => {
    const CreateArticleWrapper = mount(
      <Provider store={mockStore({ auth: { user: {} } })}>
        <MemoryRouter>
          <CreateOrUpdateArticle {...props} />
        </MemoryRouter>
      </Provider>
    );

    const component = CreateArticleWrapper.find('CreateOrUpdateArticle');
    component.instance().handleChange = jest.fn();
    component.instance().forceUpdate();
    component.update();
    const inputs = CreateArticleWrapper.find('input');
    const titleInput = inputs.find('[id="title"]');
    const event = { target: { value: 'title' } };
    titleInput.simulate('change', event);
    expect(component.instance().handleChange).toHaveBeenCalled();
  });
  it('should call submit form when article created', () => {
    const state = {
      article: { title: 'any title', body: 'any body', category: 'music' }
    };
    const CreateArticleWrapper = mount(
      <Provider store={mockStore({ auth: { user: {} }, state })}>
        <MemoryRouter>
          <CreateOrUpdateArticle {...props} />
        </MemoryRouter>
      </Provider>
    );

    const component = CreateArticleWrapper.find('CreateOrUpdateArticle');
    const componentInstance = component.instance();
    const spy = jest.spyOn(componentInstance, 'handleSubmit');
    component.instance().forceUpdate();
    component.update();
    const button = CreateArticleWrapper.find('button');
    const article = {
      title: 'My new article for testing purpose',
      body: '<p>ARTICLE</p>',
      description: 'Educational'
    };
    button.simulate('click', article);
    expect(spy).toHaveBeenCalled();
    expect(component.props().createOrUpdateArticle).toBeDefined();
  });
  describe('Update  functionality', () => {
    const UpdateArticleWrapper = mount(
      <Provider
        store={mockStore({
          auth: { user: {} },
          article: {
            isArticleCreated: false,
            data: {
              article: {
                id: 29,
                slug: 'my-new-article-for-testing-purpose-191mjxucnyll',
                title: 'My new article for testing purpose',
                description: 'Educational',
                readingTime: 'read of less than a minute',
                body: 'ClzCRkE2YSSgjVBK2EvYT',
                createdAt: '2019-07-08T12:16:33.516Z',
                updatedAt: '2019-07-08T12:16:33.516Z',
                author: null,
                tagList: []
              }
            },
            isArticleRetrieved: true,
            isArticleUpdated: true
          }
        })}
        {...props}
      >
        <MemoryRouter>
          <CreateOrUpdateArticle {...props} />
        </MemoryRouter>
      </Provider>
    );
    it('should input title on update', () => {
      const component = UpdateArticleWrapper.find('CreateOrUpdateArticle');
      component.instance().handleChange = jest.fn();
      component.instance().forceUpdate();
      component.update();
      const inputs = UpdateArticleWrapper.find('input');
      const titleInput = inputs.find('[id="title"]');
      const event = { target: { value: 'title' } };
      titleInput.simulate('change', event);
      expect(component.instance().handleChange).toHaveBeenCalled();
    });
    it('should call submit form when article is updated', () => {
      const component = UpdateArticleWrapper.find('CreateOrUpdateArticle');
      const componentInstance = component.instance();
      const spy = jest.spyOn(componentInstance, 'handleSubmit');
      component.instance().forceUpdate();
      component.update();
      const button = UpdateArticleWrapper.find('button');
      const article = {
        title: 'My new article for testing purpose',
        body: "<p>gjbnbn</p>'",
        description: 'Educational'
      };
      button.simulate('click', article);
      expect(spy).toHaveBeenCalled();
      expect(component.props().createOrUpdateArticle).toBeDefined();
    });
  });
});
