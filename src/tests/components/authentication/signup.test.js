import Signup from "../../../components/authentication/signup";
import Verification from "../../../components/authentication/verification";
import { findTestByAttr, store } from "../../../../helpers/utils/testUtils";

const props = {
  location: {
    search: {
      token: "jfshfshbhbcjhdcs",
      email: "email@email.email"
    }
  },
  verify: {
    isVerified: false,
    message: "message"
  },
  verification: jest.fn()
}
describe("Signup component", () => {
  const signup = mount(<Signup store={store} />);
  const verifyAccount = mount(<Verification store={store} {...props} />);
  it("should render without error", () => {
    const signupComponent = findTestByAttr(signup, "component-signup");
    expect(signupComponent.length).toEqual(1);
  });
  it("should input email", () => {
    const component = signup.find("Signup");
    component.instance().onChangeHandler = jest.fn();
    component.instance().forceUpdate();
    component.update();
    const inputs = signup.find("input");
    const emailInput = inputs.find('[id="email"]');
    const event = { target: { value: "email" } };
    emailInput.simulate("change", event);
    expect(component.instance().onChangeHandler).toHaveBeenCalled();
  });
  it("should input password", () => {
    const component = signup.find("Signup");
    component.instance().onChangeHandler = jest.fn();
    component.instance().forceUpdate();
    component.update();
    const inputs = signup.find("input");
    const passwordInput = inputs.find('[id="password"]');
    const event = { target: { value: "password" } };
    passwordInput.simulate("change", event);
    expect(component.instance().onChangeHandler).toHaveBeenCalled();
  });
  it("should input username", () => {
    const component = signup.find("Signup");
    component.instance().onChangeHandler = jest.fn();
    component.instance().forceUpdate();
    component.update();
    const inputs = signup.find("input");
    const usernameInput = inputs.find('[id="username"]');
    const event = { target: { value: "username" } };
    usernameInput.simulate("change", event);
    expect(component.instance().onChangeHandler).toHaveBeenCalled();
  });
  it("should call onHandleSubmit", () => {
    const component = signup.find("Signup");
    const componentInstance = component.instance();
    const spy = jest.spyOn(componentInstance, "onHandleSubmit");
    component.instance().forceUpdate();
    component.update();
    const button = signup.find("button");
    const credentials = { email: "user@email.com", password: "Password@123", username: "testuser" };
    button.simulate("click", credentials);
    expect(spy).toHaveBeenCalled();
  });

  it("should render without error", () => {
    const signupComponent = findTestByAttr(verifyAccount, "verify-account");
    expect(signupComponent.length).toEqual(1);
  });
});
