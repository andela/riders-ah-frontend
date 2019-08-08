import React from 'react';
import { ReportArticle } from '../../../components/common';

const props = {
  display: 'none',
  type: 'test',
  types: ['test'],
  title: 'test',
  reason: 'test',
  onSave: jest.fn(),
  setModal: jest.fn(),
  changeInput: jest.fn()
};
const reportArticleComponent = shallow(<ReportArticle {...props} />);

describe('<ReportArticle />', () => {
  it('Render', () => {
    expect(reportArticleComponent.exists()).toBe(true);
  });
});
