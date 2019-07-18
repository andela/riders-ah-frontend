/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import ViewArticles from "../../../components/articles/viewArticles";
import { findTestByAttr, store } from "../../../../helpers/utils/testUtils";

const props = {
    location:{
        search:''
    }
}
describe("app component", () => {
  it("should render without error", () => {
    const articles = mount(<ViewArticles {...props} store={store} />);
    const articlesComponent = findTestByAttr(
      articles,
      "component-ViewArticles"
    );
    expect(articlesComponent.length).toEqual(1);
  });
});
