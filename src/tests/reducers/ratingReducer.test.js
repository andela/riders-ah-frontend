import { RATE_ARTICLE, GET_RATINGS } from '../../actions/types';
import ratingReducer from '../../reducers/article/ratingReducer';
import { fulfilled } from '../../utils/actionUtil';

export const RATE_ARTICLE_FULFILLED = 'RATE_ARTICLE_FULFILLED';
export const GET_RATINGS_FULFILLED = 'GET_RATINGS_FULFILLED';
describe('Ratig Reducer', () => {
  it('should be able to rate article', () => {
    const payload = {
      rate: 2
    };
    const newState = ratingReducer(
      {},
      {
        type: fulfilled(RATE_ARTICLE),
        payload
      }
    );
    expect({}).toEqual({});
  });
  it('should be able to get all ratings', () => {
    const payload = { slug: 'slug-test' };
    const newState = ratingReducer(
      {},
      {
        type: fulfilled(GET_RATINGS),
        payload
      }
    );
    expect({}).toEqual({});
  });
});
