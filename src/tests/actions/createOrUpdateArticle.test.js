import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../helpers/httpServices';
const mockStore = configureStore([thunk, promise]);
const store = mockStore({});
import { createOrUpdateArticle } from '../../actions/articleAction';
import { fetchOneStory } from '../../actions/oneStory';
describe('Create Article functionality', () => {
  const slug = 'my-new-article-for-testi-purpose-t37jxsyqewa';
  const article = {
    title: 'My new article for testing purpose',
    body: '<p>GFSJGFDHJVHJ</p>',
    description: 'Educational',
    image: 'https://picsum.gm'
  };
  beforeEach(() => {
    store.clearActions();
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });
  it('Should create an article', () => {
    store.dispatch(createOrUpdateArticle(null, article));
    expect(store.getActions().length).toBe(1);
  });
  it('Should fetch one article', () => {
    store.dispatch(fetchOneStory(slug));
    expect(store.getActions().length).toBe(1);
  });
  it('Should update an article', () => {
    store.dispatch(createOrUpdateArticle(slug, article));
    expect(store.getActions().length).toBe(1);
  });
});
