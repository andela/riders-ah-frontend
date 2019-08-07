import highlightReducer from '../../reducers/article/highlightReducer';
import { HIGHLIGHT_TEXT, GET_HIGHLIGHT } from '../../actions/types';

describe('Highlight Article Reducer', () => {
  it('should be able to highlight an article', () => {
    const payload = {
      id: 19,
      slug: 'my-new-article-for-testing-purpose-bgcjyogmkvl',
      startIndex: 0,
      endIndex: 20,
      highlightedText: 'const outPath = path',
      blockId: 'p6',
      createdAt: '2019-07-30T12:35:21.710Z',
      updatedAt: '2019-07-30T12:35:21.710'
    };
    const newState = highlightReducer(
      {},
      {
        type: HIGHLIGHT_TEXT,
        payload
      }
    );
    expect(newState).toEqual({});
  });

  it('should be able to get highlighted article', () => {
    const payload = {
     slug: 'my-new-article-for-testing-purpose-bgcjyogmkvl',
    };

    const newState = highlightReducer(
      {},
      {
        type: GET_HIGHLIGHT,
        payload
      }
    );
    expect(newState).toEqual({});
  });
});
