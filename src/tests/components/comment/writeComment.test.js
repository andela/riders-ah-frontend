import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../../helpers/httpServices';

import WriteComment from '../../../components/comment/writeComment';

const props = {
  params: {
    slug: ''
  },
  auth: { user: {}, isAuthanticated: true }
};

const mockStore = configureStore([thunk, promise]);

describe('WriteComment component test', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });
  const store = mockStore({
    auth: { user: { username: 'user' } },
    isAuthanticated: true
  });
  const WriteCommentWrapper = mount(<WriteComment store={store} {...props} />);
  const component = WriteCommentWrapper.find('WriteComment');
  it('should render WriteComment component without error', () => {
    expect(WriteCommentWrapper.exists()).toBe(true);
  });
  it('should call the handleChange function and update the state', () => {
    const { handleChange } = component.instance();
    const event = { target: { value: 'new comment' } };
    handleChange(event);
    expect(component.state().comment).toEqual('new comment');
  });
  it('should call the handleComment function', () => {
    const { handleComment } = component.instance();
    handleComment();
    expect(store.getActions().length).toBe(0);

    expect(component.instance().props.params.slug).toEqual('');
  });
});
