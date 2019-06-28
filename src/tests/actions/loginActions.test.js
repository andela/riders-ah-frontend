/* eslint-disable no-undef */
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
const mockStore = configureStore([thunk, promise]);
const store = mockStore({});

import {
  SET_EMAIL,
  SET_PASSWORD,
  VALIDATE_CREDENTIALS,
  SET_CURRENT_USER
} from "../../actions/types";

import {
  setEmail,
  setPassword,
  credentialsValidation,
  setCurrentUser
} from "../../actions/login";

describe("login actions", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("should have inputted email payload and SET_EMAIL type", () => {
    expect(setEmail("email@email.email")).toEqual(
      expect.objectContaining({
        type: SET_EMAIL,
        payload: "email@email.email"
      })
    );
  });
  it("should have inputted password payload and SET_PASSWORD type", () => {
    expect(setPassword("password")).toEqual(
      expect.objectContaining({
        type: SET_PASSWORD,
        payload: "password"
      })
    );
  });
  it("should have validation message payload and VALIDATE_CREDENTIALS type", () => {
    expect(credentialsValidation("validation message")).toEqual(
      expect.objectContaining({
        type: VALIDATE_CREDENTIALS,
        payload: "validation message"
      })
    );
  });
  it("should have current user payload and SET_CURRENT_USER type", () => {
    expect(setCurrentUser({ id: "1", name: "user" })).toEqual(
      expect.objectContaining({
        type: SET_CURRENT_USER,
        payload: { id: "1", name: "user" }
      })
    );
  });
});
