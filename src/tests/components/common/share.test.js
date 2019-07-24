import window from '../../../__mocks__/window';
import ShareArticles from '../../../components/common/shareArticles';

describe('Test sharing on social media', () => {
test('<ShareArticles />', () => {
    const component = shallow(<ShareArticles />);
    expect(component).toHaveLength(1);
});
});
