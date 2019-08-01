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

  it('test bookamark article fulfilled', () => {
    const action = {
      type: 'BOOKMARK_ARTICLE_FULFILLED',
      payload: { data: { Bookmark: {} } }
    };
    const response = {
      isBookmarked: 'done'
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
  it('test unbookamark article fulfilled', () => {
    const action = {
      type: 'BOOKMARK_ARTICLE_FULFILLED',
      payload: { data: { message: 'message' } }
    };
    const response = {
      isBookmarked: 'done again'
    };
    const newState = bookmarkReducer({}, action);
    expect(newState).toEqual(response);
  });

  it('test default case', () => {
    const action = {
      type: 'BOOKMARK_ARTICLE_FULFILLED',
      payload: { data: '' }
    };
    const response = {};
    const newState = bookmarkReducer({}, action);
    expect(newState).toEqual(response);
  });
});
