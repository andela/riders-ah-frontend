import Pagination from '../../../components/common/pagination';
import { findTestByAttr, store } from '../../../../helpers/utils/testUtils';

let props;
describe('Test pagination component', () => {
  it('should render pagination without error', () => {
    props = { itemsCount: 15, pageSize: 9, onPageChange: jest.fn() };
    const pagination = mount(<Pagination store={store} {...props} />);
    const paginationComponent = findTestByAttr(pagination, 'pagination-item_1');
    expect(paginationComponent.length).toEqual(1);
  });
  it('should not render any pagination', () => {
    props = { itemsCount: 2, pageSize: 9, onPageChange: jest.fn() };
    const pagination = mount(<Pagination store={store} {...props} />);
    const paginationComponent = findTestByAttr(pagination, 'pagination-item_1');
    expect(paginationComponent.length).toEqual(0);
  });
  it('should call onHandleSubmit', () => {
    props = { itemsCount: 15, pageSize: 9, onPageChange: jest.fn() };
    const pagination = mount(<Pagination store={store} {...props} />);
    const component = pagination.find('Pagination');
    const componentInstance = component.props();
    const spy = jest.spyOn(componentInstance, 'onPageChange');
    const reference = pagination.find('#pagination-item_1');
    reference.simulate('click', 1);
    expect(spy).toHaveBeenCalled();
  });
});
