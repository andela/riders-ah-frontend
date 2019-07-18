import {CREATE_ARTICLE,FETCH_ARTICLE, UPDATE_ARTICLE } from '../../actions/types';
import articleReducer from "../../reducers/articleReducer";
describe("Create Article Reducer", () => {

  it("should be able to create article", () => {
    const payload = {
        title: 'My new article for testing purpose',
        body:'<strong><u>GFSJGFDHJVHJ…mbed/t6',
        description:'Educational', 
        image:'https://picsum.gm'
    };
    const newState = articleReducer(
      {},
      {
        type:CREATE_ARTICLE,
        payload
      }
    );
    expect(newState).toEqual({});
  });
  it("should be able to fetch  an article to update", () => {
    const payload = { slug: "Password@123" };
    const newState = articleReducer(
      {},
      {
        type: FETCH_ARTICLE,
        payload
      }
    );
    expect(newState).toEqual({});
  }); 
  it("should ", () => {
    const payload = {
      title: 'My new article for testing purpose',
      body:'<strong><u>GFSJGFDHJVHJ…mbed/t6',
      description:'Educational', 
      image:'https://picsum.gm'
  };
    const newState = articleReducer(
      {},
      {
        type: UPDATE_ARTICLE,
        payload
      }
    );
    expect(newState).toEqual({});
  });
});
