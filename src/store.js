import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
export default function configureStore() {
  return createStore(
    rootReducer, {},
    compose(
      applyMiddleware(thunk, promise),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
