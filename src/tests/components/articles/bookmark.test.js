import Bookmark from '../../../components/articles/bookmark';

const props = {
  handleBookmark: jest.fn(),
  isBookmarked: ''
};

describe('test the Bookmark component', () => {
  it('should render without error', () => {
    const bookmarkWrapper = mount(<Bookmark {...props} />);
    expect(bookmarkWrapper.exists()).toBe(true);
  });
});
