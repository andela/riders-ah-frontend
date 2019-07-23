import { paginate } from '../utils/paginate';
describe('Testing start index and end index of pagination', () => {
  it('tart index and end index of pagination', () => {
    const items = [
      {
        slug: 'how-technology-is-hijacking-your-d0ajy4kffca',
        title: 'How Technology is Hijacking Your',
        description: 'from a Magician and Google Design Ethicist',
        readingTime: 'read of less than a minute',
        body: 'why I spent the last three years as a Design',
        tagList: [],
        author: {
          username: 'ericnyirimana',
          bio: null,
          image: null
        },
        createdAt: '2019-07-15T15:51:33.996Z',
        updatedAt: '2019-07-15T15:51:33.996Z'
      },
      {
        slug: 'how-technology-is-hijacking-your-d0ajy4kffca',
        title: 'How Technology is Hijacking Your',
        description: 'from a Magician and Google Design Ethicist',
        readingTime: 'read of less than a minute',
        body: 'why I spent the last three years as a Design',
        tagList: [],
        author: {
          username: 'ericnyirimana',
          bio: null,
          image: null
        },
        createdAt: '2019-07-15T15:51:33.996Z',
        updatedAt: '2019-07-15T15:51:33.996Z'
      },
      {
        slug: 'how-technology-is-hijacking-your-d0ajy4kffca',
        title: 'How Technology is Hijacking Your',
        description: 'from a Magician and Google Design Ethicist',
        readingTime: 'read of less than a minute',
        body: 'why I spent the last three years as a Design',
        tagList: [],
        author: {
          username: 'ericnyirimana',
          bio: null,
          image: null
        },
        createdAt: '2019-07-15T15:51:33.996Z',
        updatedAt: '2019-07-15T15:51:33.996Z'
      }
    ];
    const action = [{ items, pageNumber: 1, pageSize: 1 }];
    const newState = paginate(action);
    expect(newState).toEqual(action);
  });
});
