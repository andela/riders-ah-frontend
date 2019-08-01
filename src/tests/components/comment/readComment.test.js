import promise from 'redux-promise-middleware';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import http from '../../../helpers/httpServices';

import ReadComment from '../../../components/comment/readComment.jsx';
import { findTestByAttr } from '../../../../helpers/utils/testUtils';

const props = {
  comment: {
    id: 54,
    createdAt: '2019-07-15T07:42:17.811Z',
    updatedAt: '2019-07-15T07:42:17.811Z',
    body: 'new one',
    author: {
      username: 'user',
      bio: null,
      image: null
    },
    like: [],
    histories: {
      count: 0,
      rows: []
    }
  },
  onDelete: jest.fn(),
  params: {
    slug: ''
  }
};

const mockStore = configureStore([thunk, promise]);

describe('readComment feature test', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });
  const ReadCommentWrapper = mount(
    <ReadComment
      store={mockStore({ auth: { user: { username: 'user' } },  likeComment: {
        likes: {
          count: 0,
          likes: []
        }
      } })}
      {...props}
    />
  );
  const component = ReadCommentWrapper.find('ReadComment');
  it('should render ReadComment component without error', () => {
    expect(ReadCommentWrapper.exists()).toBe(true);
  });
  it('should call onDelete function', () => {
    const Delete = findTestByAttr(component, 'delete');
    Delete.simulate('click');
    expect(component.instance().props.onDelete).toHaveBeenCalled();
  });
  it('should call handleChange function and update the state', () => {
    const { handleChange } = component.instance();
    const event = { target: { value: 'updated comment' } };
    handleChange(event);
    expect(component.state().updatedComment).toEqual('updated comment');
  });
  it('should call handleChange function', () => {
    component.instance().handleChange = jest.fn();
    component.instance().forceUpdate();
    component.update();
    const textArea = findTestByAttr(component, 'text');
    textArea.simulate('change');
    expect(component.instance().handleChange).toHaveBeenCalled();
  });
  it('should call handleUpdate function', () => {
    component.instance().handleUpdate = jest.fn();
    component.instance().forceUpdate();
    component.update();
    const update = component.find('.publish');
    update.simulate('click');
    expect(component.instance().handleUpdate).toHaveBeenCalled();
  });
});
