/* eslint-disable no-undef */
import {
    ACCOUNT_VERIFICATION
} from "../../actions/types";

import {
    verification
} from "../../actions/verification";

const dispatch = jest.fn((action => action));

describe("login actions", () => {
  it("should have a token, email payload and ACCOUNT_VERIFICATION type", () => {
    const result = verification({ email: "email@email.com", token: "mY0Q60BVJHs5lIX7FEfAJEEoZZW5Vx" })(dispatch);
    expect(result.type).toEqual(ACCOUNT_VERIFICATION);
  });
});
