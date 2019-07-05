import React from 'react';
import moxios from 'moxios';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import http from '../../../helpers/httpServices';
import CreateOrUpdateArticle from '../../../components/articles/createOrUpdateArticle';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk, promise]);

const props = {
  match: {
    params: {
      token: ''
    }
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
    const CreateArticleWrapper = mount(<CreateOrUpdateArticle store={mockStore({})} />);

    expect(CreateArticleWrapper.exists()).toBe(true);
  });
  it('should render update article component', () => {
    const UpdateArticleWrapper = mount(
      <CreateOrUpdateArticle store={mockStore({})} {...props} />
    );
    expect(UpdateArticleWrapper.exists()).toBe(true);
  });
  it('should input title when creating an article', () => {
    const CreateArticleWrapper = mount(<CreateOrUpdateArticle store={mockStore({})} />);

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
      <CreateOrUpdateArticle store={mockStore({ state })} />
    );

    const component = CreateArticleWrapper.find('CreateOrUpdateArticle');
    const componentInstance = component.instance();
    const spy = jest.spyOn(componentInstance, 'handleSubmit');
    component.instance().forceUpdate();
    component.update();
    const button = CreateArticleWrapper.find('button');
    const article = {
      title: 'My new article for testing purpose',
      body:
        "<p class='ql-align-center'><strong><u>GFSJGFDHJVHJ…mbed/t6mc32DCXDY?showinfo=0'></iframe><p><br></p>'",
      description: 'Educational'
    };
    button.simulate('click', article);
    expect(spy).toHaveBeenCalled();
    expect(component.props().createOrUpdateArticle).toBeDefined();
  });
  describe('Update  functionality', () => {
    const UpdateArticleWrapper = mount(
      <CreateOrUpdateArticle
        store={mockStore({
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
            isArticleUpdated:true
          }
        })}
        {...props}
      />
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
        body:
          "<p class='ql-align-center'><strong><u>GFSJGFDHJVHJ…mbed/t6mc32DCXDY?showinfo=0'></iframe><p><br></p>'",
        description: 'Educational'
      };
      button.simulate('click', article);
      expect(spy).toHaveBeenCalled();
      expect(component.props().createOrUpdateArticle).toBeDefined();
    });
  });
});
