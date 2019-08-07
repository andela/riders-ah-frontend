import chatReducer from '../../reducers/chatReducer';
describe('Get chat message reducer', () => {
  const initialState = {
    message: [],
    isMessageGot: false
  };

  it('should get chat messages', () => {
    const reducer = chatReducer(initialState, {
      payload: {data: []},
      type: 'GET_MESSAGES'
    });
    expect(reducer).toEqual({
        message: [],
        isMessageGot: false
      });
  });
});
