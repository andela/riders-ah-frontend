import ViewArticles from '../../../components/articles/viewArticles';
import { findTestByAttr, store } from '../../../../helpers/utils/testUtils';

describe('app component', () => {
  it('should render without error', () => {
    const articles = mount(<ViewArticles store={store} />);
    const articlesComponent = findTestByAttr(
      articles,
      'component-ViewArticles'
    );
    expect(articlesComponent.length).toEqual(1);
  });
});
