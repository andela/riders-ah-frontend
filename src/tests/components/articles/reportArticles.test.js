import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../helpers/utils/testUtils';
import { ReportedArticles } from '../../../components';

const props = {
  getReportedArticles: jest.fn(),
  auth: { user: {} }
};
const state = {
  reported: {
    total: 1,
    reports: []
  }
};
const nextProps = {
  article: {
    reportedSuccess: true,
    reported: ['test']
  }
};
const reportArticlesComponent = mount(
  <Provider store={store}>
    <MemoryRouter>
      <ReportedArticles {...props} />
    </MemoryRouter>
  </Provider>
);

describe('<reportArticles/>', () => {
  beforeEach(() => {
    const component = reportArticlesComponent.find('ReportedArticles');
    component.setState({
      reported: {
        total: 1,
        reports: [
          {
            id: 1,
            userId: 4,
            articleSlug: 'test-article-1ajwtqv7kk',
            reportType: 'spam',
            reason: 'test',
            createdAt: '2019-06-14T12:08:46.015Z',
            updatedAt: '2019-06-14T12:08:46.015Z',
            Article: {
              title: 'Butare'
            }
          }
        ]
      }
    });
  });
  it('render components', () => {
    expect(reportArticlesComponent).toHaveLength(1);
  });
  it('componentWillReceiveProps', () => {
    const component = reportArticlesComponent.find('ReportedArticles');
    component.instance().forceUpdate();
    component.update();
    component.instance().componentWillReceiveProps(nextProps);
    expect(component.state('reported').length).toBe(1);
  });
});
