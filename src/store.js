import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

let configureStore;

configureStore = () => {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk, promise))
  );
};

export default configureStore;
