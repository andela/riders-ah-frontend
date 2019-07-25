import bookmarkReducer from '../../reducers/bookmarkReducer';

describe('bookmark reducer test', () => {
  it('test fetch bookamarks fulfilled', () => {
    const action = {
      type: 'FETCH_BOOKMARKS_FULFILLED',
      payload: {
        data: {
          Bookmarks: [
            {
              id: 1,
              userId: 1,
              createdAt: 'createdAt',
              article: {
                title: 'title',
                description: 'description',
                slug: 'slug',
                image: 'image',
                createdAt: 'createdAt',
                readingTime: 'readingTime'
              },
              author: {
                username: 'username'
              }
            }
          ]
        }
      }
    };
    const response = {
      isBookmarked: '',
      isBookmarksFetched: 'done',
      Bookmarks: [
        {
          id: 1,
          userId: 1,
          createdAt: 'createdAt',
          article: {
            title: 'title',
            description: 'description',
            slug: 'slug',
            image: 'image',
            createdAt: 'createdAt',
            readingTime: 'readingTime'
          },
          author: {
            username: 'username'
          }
        }
      ]
    };
    const newState = bookmarkReducer({}, action);
    expect(newState).toEqual(response);
  });
  it('test fetch bookamarks fulfilled', () => {
    const action = {
      type: 'FETCH_BOOKMARKS_FULFILLED',
      payload: {
        data: {
          Bookmarks: 'no bookmarks made'
        }
      }
    };
    const response = {
      isBookmarked: '',
      isBookmarksFetched: 'done',
      Bookmarks: []
    };
    const newState = bookmarkReducer({}, action);
    expect(newState).toEqual(response);
  });
});
